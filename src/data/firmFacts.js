// Firm credentials shown across the site.
//
// REPLACE BEFORE LAUNCH: every value marked `REPLACE` is a realistic placeholder,
// not a real credential. Update this file and the whole site follows
// (hero, signature block, seal, partner list, footer, schema).
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

  // REPLACE: partner names, qualifications, membership numbers and practice areas.
  // The first partner signs the report block on the home page.
  partners: [
    {
      name: 'Anand Menon',
      title: 'CA Anand Menon',
      qualifications: 'FCA, DISA (ICAI)',
      membershipNo: '214587',
      role: 'Managing Partner',
      practice: 'Statutory and tax audit, internal audit, company law'
    },
    {
      name: 'Priya Nair',
      title: 'CA Priya Nair',
      qualifications: 'FCA',
      membershipNo: '228310',
      role: 'Partner',
      practice: 'Direct tax, GST, notices and assessments'
    },
    {
      name: 'Thomas Kurian',
      title: 'CA Thomas Kurian',
      qualifications: 'ACA, CS',
      membershipNo: '241906',
      role: 'Partner',
      practice: 'NRI taxation, Virtual CFO, business setup'
    }
  ]
};

export const signingPartner = firmFacts.partners[0];
