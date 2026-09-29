import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Warns on every build while the firm's credentials are still placeholders.
function placeholderFactsWarning() {
  return {
    name: 'placeholder-facts-warning',
    buildStart() {
      const source = readFileSync(new URL('./src/data/firmFacts.js', import.meta.url), 'utf8');
      if (/FACTS_ARE_PLACEHOLDERS\s*=\s*true/.test(source)) {
        this.warn(
          'src/data/firmFacts.js still holds placeholder credentials (FRN, partners, M. Nos., year). ' +
            'Replace them before promotions go live, then set FACTS_ARE_PLACEHOLDERS = false.'
        );
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), placeholderFactsWarning()],
  server: {
    host: true,
    port: 5173
  }
});
