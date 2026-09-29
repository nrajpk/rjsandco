import { firmFacts } from '../data/firmFacts.js';
import { Fields } from './Report.jsx';

export default function Partners({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <ul className="partners">
      {firmFacts.partners.map((partner) => (
        <li className="partner" key={partner.name}>
          <Heading className="partner__name">{partner.title}</Heading>
          <p className="partner__quals">{[partner.qualifications, partner.role].filter(Boolean).join(' · ')}</p>
          {(partner.membershipNo || partner.practice) && (
            <Fields
              rows={[
                { label: 'M. No.', value: partner.membershipNo },
                { label: 'Leads', value: partner.practice }
              ]}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
