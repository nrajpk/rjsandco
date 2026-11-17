// Digital business cards, served at /connect/<slug>.
//
// One entry per person. The slug is the last part of the URL that goes into
// the QR code, so do not change a slug once a card has been printed.
//
// Fields left null are hidden on the card:
//   phone     full number with country code, e.g. '+91 98470 12345'
//   whatsapp  digits only with country code, e.g. '919847012345'
//             (null falls back to the firm's Support Desk number)
//   email     null falls back to the firm's email
//   linkedin  full profile URL, e.g. 'https://www.linkedin.com/in/name'
//   photo     square JPEG portrait in public/people/, e.g. '/people/rijo-pt.jpg'
//             (JPEG so it can also go into the saved contact; about 480px is enough)
//             (null shows the person's initials)
//   office    'Ernakulam' | 'Kottayam' | 'Pathanamthitta' (see siteConfig.offices)
export const people = [
  {
    slug: 'johnmon-xavier',
    name: 'CA Johnmon Xavier',
    role: 'Partner',
    qualifications: null,
    phone: null,
    whatsapp: '971551070078',
    email: 'johnmon@rjsandco.in',
    linkedin: 'https://www.linkedin.com/in/johnmon-xavier-0475051a/',
    photo: '/people/johnmon-xavier.jpg',
    office: 'Kottayam'
  },
  {
    slug: 'rijo-pt',
    name: 'CA Rijo PT',
    role: 'Partner',
    qualifications: null,
    phone: null,
    whatsapp: null,
    email: null,
    linkedin: null,
    photo: null,
    office: 'Kottayam'
  },
  {
    slug: 'sunil-thomas',
    name: 'CA Sunil Thomas',
    role: 'Partner',
    qualifications: null,
    phone: null,
    whatsapp: null,
    email: null,
    linkedin: null,
    photo: null,
    office: 'Kottayam'
  },
  {
    slug: 'jyothi-thomas',
    name: 'CA Jyothi Thomas',
    role: 'Partner',
    qualifications: null,
    phone: null,
    whatsapp: null,
    email: null,
    linkedin: null,
    photo: null,
    office: 'Kottayam'
  },
  {
    slug: 'pa-joseph',
    name: 'CA PA Joseph',
    role: 'Partner',
    qualifications: null,
    phone: null,
    whatsapp: null,
    email: null,
    linkedin: null,
    photo: null,
    office: 'Kottayam'
  }
];

export function findPerson(slug) {
  const key = String(slug || '').toLowerCase();
  return people.find((person) => person.slug === key) || null;
}
