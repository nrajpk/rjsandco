// Builds the .vcf contact file behind "Save Contact" on /connect cards.
// The files are written at build time by vite.config.js to /vcf/<slug>.vcf,
// because phones only open a contact reliably from a real file on the server.
import { people } from './people.js';
import { siteConfig } from './siteConfig.js';

export const FIRM_VCF_SLUG = 'rjs-and-co';

export const vcfPath = (person) => `/vcf/${person ? person.slug : FIRM_VCF_SLUG}.vcf`;

const digits = (value) => String(value || '').replace(/\D/g, '');
const esc = (value) => String(value).replace(/([\\;,])/g, '\\$1').replace(/\n/g, '\\n');

// vCard lines longer than 75 characters continue on the next line after a space.
function fold(line) {
  if (line.length <= 75) return line;
  const parts = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) parts.push(` ${line.slice(i, i + 74)}`);
  return parts.join('\r\n');
}

// 'CA Johnmon Xavier' -> family Xavier, given Johnmon, prefix CA
function nameParts(name) {
  const words = name.trim().split(/\s+/);
  const prefix = /^CA$/i.test(words[0]) && words.length > 1 ? words.shift() : '';
  const family = words.length > 1 ? words.pop() : '';
  return { family, given: words.join(' '), prefix };
}

// photoBase64: JPEG bytes as base64, or null.
export function buildVCard(person, photoBase64 = null) {
  const office = siteConfig.offices.find((entry) => entry.city === (person?.office || siteConfig.city));
  const email = person?.email || siteConfig.email;
  const phone = person ? person.phone || person.whatsapp : siteConfig.whatsappNumber;
  const url = `${siteConfig.domain}${person ? `/connect/${person.slug}` : '/connect'}`;
  const org = `${siteConfig.firmName}, ${siteConfig.tagline}`;
  const { family, given, prefix } = person ? nameParts(person.name) : {};

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    person ? `N:${esc(family)};${esc(given)};;${esc(prefix)};` : 'N:;;;;',
    `FN:${esc(person ? person.name : siteConfig.firmName)}`,
    `ORG:${esc(org)}`,
    !person && 'X-ABShowAs:COMPANY',
    person?.role && `TITLE:${esc([person.role, person.qualifications].filter(Boolean).join(', '))}`,
    phone && `TEL;TYPE=CELL,VOICE:+${digits(phone)}`,
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    office &&
      `ADR;TYPE=WORK:;;${esc(office.lines.join(', '))};${esc(office.city)};${siteConfig.state};;${siteConfig.country}`,
    `URL:${url}`,
    person?.linkedin && `X-SOCIALPROFILE;TYPE=linkedin:${person.linkedin}`,
    photoBase64 && `PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`,
    'END:VCARD'
  ]
    .filter(Boolean)
    .map(fold)
    .join('\r\n')
    .concat('\r\n');
}

// Every card that needs a file: the firm's, then one per person.
export const vcardEntries = () => [null, ...people];
