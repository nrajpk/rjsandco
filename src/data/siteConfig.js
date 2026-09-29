export const siteConfig = {
  firmName: 'RJS & Co.',
  legalName: 'RJS & Co.',
  domain: 'https://rjsandco.in',
  tagline: 'Chartered Accountants',
  description:
    'RJS & Co. is a firm of Chartered Accountants in Kerala, with offices in Ernakulam, Kottayam and Pathanamthitta. Statutory and tax audit, income tax, GST, company law, accounting, payroll, Virtual CFO and NRI taxation.',
  city: 'Kottayam',
  state: 'Kerala',
  postalCode: '',
  country: 'India',
  email: 'info@rjsllp.com',
  emailHref: 'mailto:info@rjsllp.com',
  whatsappNumber: '971551070078',
  whatsappLabel: '+971 55 107 0078',
  // Offices, in the order the letterhead lists them. Kottayam is the place of signing.
  offices: [
    {
      city: 'Ernakulam',
      lines: ['2nd Floor, PC Chambers, Ashir Bhavan Lane', 'Banerji Road, Kacheripady', 'Ernakulam 682018'],
      mapHref: 'https://maps.app.goo.gl/Dwv51ejpE7YBj5q37',
      mapQuery: 'PC Chambers, Ashir Bhavan Lane, Banerji Road, Kacheripady, Ernakulam 682018'
    },
    {
      city: 'Kottayam',
      lines: ['2nd Floor, CSI Multistoried Building', 'Room No. KMC XIII/1259 [CSI MSB-IIf-10]', 'Kottayam'],
      mapQuery: 'CSI Multistoried Building, Kottayam, Kerala'
    },
    {
      city: 'Pathanamthitta',
      lines: ['1st Floor, Masjid Complex', 'Opp. Passport Office', 'Pathanamthitta 689645'],
      mapQuery: 'Masjid Complex, Opposite Passport Office, Pathanamthitta 689645'
    }
  ],
  // Contact line printed on the letterhead (matches the Word letterhead).
  letterhead: {
    website: 'www.rjsa.com',
    websiteHref: 'http://www.rjsa.com',
    email: 'connect@rjsllp.com',
    phone: '+91 7012312007'
  },
  consultationPath: '/contact',
  copyrightStartYear: '2026',
  externalLinks: [
    { label: 'Income Tax portal', href: 'https://www.incometax.gov.in/' },
    { label: 'GST portal', href: 'https://www.gst.gov.in/' },
    { label: 'MCA portal', href: 'https://www.mca.gov.in/' }
  ]
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  'Hello RJS & Co., I would like to discuss a tax or compliance matter.'
)}`;

export const navLinks = [
  { label: 'Practice', path: '/services' },
  { label: 'Who we act for', path: '/industries' },
  { label: 'The firm', path: '/about' },
  { label: 'Insights', path: '/resources' },
  { label: 'Contact', path: '/contact' }
];

export const officeCities = siteConfig.offices.map((office) => office.city);

export function officeMapHref(office) {
  return office.mapHref || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;
}

export function officeMapEmbed(office) {
  return `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`;
}
