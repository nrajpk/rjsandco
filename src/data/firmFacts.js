// Firm credentials shown across the site.
//
// REPLACE BEFORE LAUNCH: every value marked `REPLACE` is a realistic placeholder,
// not a real credential. Update this file and the whole site follows
// (hero, signature block, seal, footer, schema). Partner names below are real.
//
// When every value below is real, set this to false. Until then every build
// prints a warning, and `npm run check:facts` fails.
export const FACTS_ARE_PLACEHOLDERS = true;

export const firmFacts = {
  // REPLACE: ICAI Firm Registration Number
  frn: '012345S',
  // REPLACE: year the firm was constituted
  established: '2011',
  // REPLACE: constitution of the firm
  constitution: 'Partnership firm',
  // REPLACE: or set to null to hide the line everywhere
  peerReview: 'Peer reviewed by the ICAI Peer Review Board',
  // REPLACE: or set to null to hide
  teamSize: '18 professionals',
  // REPLACE: office landline. Leave null to hide the phone line everywhere.
  phone: null,
  phoneHref: null,

  // Partners (confirmed). Add qualifications (e.g. 'FCA'), ICAI membership
  // numbers and practice areas when available; empty fields stay hidden.
  // The first partner signs the report block on the home page.
  partners: [
    { name: 'Rijo PT', title: 'CA Rijo PT', qualifications: null, membershipNo: null, role: 'Partner', practice: null },
    { name: 'Sunil Thomas', title: 'CA Sunil Thomas', qualifications: null, membershipNo: null, role: 'Partner', practice: null },
    { name: 'Jyothi Thomas', title: 'CA Jyothi Thomas', qualifications: null, membershipNo: null, role: 'Partner', practice: null },
    { name: 'PA Joseph', title: 'CA PA Joseph', qualifications: null, membershipNo: null, role: 'Partner', practice: null }
  ]
};

export const signingPartner = firmFacts.partners[0];
