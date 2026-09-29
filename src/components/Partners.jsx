import { firmFacts } from '../data/firmFacts.js';
import { Fields } from './Report.jsx';

export default function Partners({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <ul className="partners">
      {firmFacts.partners.map((partner) => (
        <li className="partner" key={partner.membershipNo}>
          <Heading className="partner__name">{partner.title}</Heading>
          <p className="partner__quals">{partner.qualifications}</p>
          <Fields
            rows={[
              { label: 'Role', value: partner.role },
              { label: 'M. No.', value: partner.membershipNo },
              { label: 'Leads', value: partner.practice }
            ]}
          />
        </li>
      ))}
    </ul>
  );
}
