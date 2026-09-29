export const siteConfig = {
  firmName: 'RJS & Co.',
  legalName: 'RJS & Co.',
  domain: 'https://rjsandco.in',
  tagline: 'Chartered Accountants',
  description:
    'RJS & Co. is a firm of Chartered Accountants in Kottayam, Kerala. Statutory and tax audit, income tax, GST, company law, accounting, payroll, Virtual CFO and NRI taxation.',
  address: 'KMC XIII/1259 [CSI MSB-IIf-10], 2nd Floor, CSI Multistoried Building, Kottayam, Kerala, India',
  addressLines: ['KMC XIII/1259 [CSI MSB-IIf-10]', '2nd Floor, CSI Multistoried Building', 'Kottayam, Kerala, India'],
  city: 'Kottayam',
  state: 'Kerala',
  postalCode: '',
  country: 'India',
  email: 'info@rjsllp.com',
  emailHref: 'mailto:info@rjsllp.com',
  whatsappNumber: '971551070078',
  whatsappLabel: '+971 55 107 0078',
  mapLabel: 'Open in Google Maps',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=CSI%20Multistoried%20Building%2C%20Kottayam%2C%20Kerala',
  mapEmbedHref:
    'https://www.google.com/maps?q=CSI%20Multistoried%20Building%2C%20Kottayam%2C%20Kerala&output=embed',
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
