import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { buildVCard, vcardEntries, vcfPath } from './src/data/vcard.js';

// Warns on every build while the firm's credentials are still placeholders.
function placeholderFactsWarning() {
  return {
    name: 'placeholder-facts-warning',
    buildStart() {
      const source = readFileSync(new URL('./src/data/firmFacts.js', import.meta.url), 'utf8');
      if (/FACTS_ARE_PLACEHOLDERS\s*=\s*true/.test(source)) {
        this.warn(
          'src/data/firmFacts.js still holds placeholder credentials (FRN, year established, team size, peer review). ' +
            'Replace them before promotions go live, then set FACTS_ARE_PLACEHOLDERS = false.'
        );
      }
    }
  };
}

// Writes one contact file per /connect card to /vcf/<slug>.vcf (and serves the
// same files in dev). A person's photo is embedded when it is a JPEG in public/.
function contactFiles() {
  const render = (person) => {
    let photo = null;
    if (person?.photo && /\.jpe?g$/i.test(person.photo)) {
      const file = new URL(`./public${person.photo}`, import.meta.url);
      if (existsSync(file)) photo = readFileSync(file).toString('base64');
    }
    return buildVCard(person, photo);
  };
  return {
    name: 'contact-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0];
        const person = vcardEntries().find((entry) => vcfPath(entry) === path);
        if (person === undefined) return next();
        res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
        res.end(render(person));
      });
    },
    generateBundle() {
      vcardEntries().forEach((person) => {
        this.emitFile({ type: 'asset', fileName: vcfPath(person).slice(1), source: render(person) });
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), placeholderFactsWarning(), contactFiles()],
  server: {
    host: true,
    port: 5173
  }
});
