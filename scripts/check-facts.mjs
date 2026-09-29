// Fails while src/data/firmFacts.js still holds placeholder credentials.
// Run before any promotion goes live: npm run check:facts
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/data/firmFacts.js', import.meta.url), 'utf8');
const flagged = /FACTS_ARE_PLACEHOLDERS\s*=\s*true/.test(source);
const markers = (source.match(/REPLACE/g) || []).length;

if (flagged) {
  console.error(
    `\n  ✗ Placeholder credentials are still live (${markers} REPLACE markers in src/data/firmFacts.js).\n` +
      '    Replace the FRN, partners, membership numbers, year, team size and peer review line,\n' +
      '    then set FACTS_ARE_PLACEHOLDERS = false.\n'
  );
  process.exit(1);
}
console.log('  ✓ Firm facts are marked as real.');
