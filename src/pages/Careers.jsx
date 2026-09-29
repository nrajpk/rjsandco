import SEO from '../components/SEO.jsx';
import { Clause, PageHead, Sheet } from '../components/Report.jsx';
import { Closing } from '../components/Sections.jsx';

const openings = [
  { ref: '(a)', title: 'Articleship.', text: 'CA articleship across audit, income tax, GST and accounting engagements.' },
  { ref: '(b)', title: 'Internship.', text: 'Short placements in accounting, tax support, documentation and compliance.' },
  { ref: '(c)', title: 'Qualified roles.', text: 'Positions for qualified and semi-qualified professionals in audit, tax, GST, ROC and advisory.' }
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers and Articleship | RJS & Co."
        description="Articleship, internship and qualified roles at RJS & Co., Chartered Accountants, Kerala."
        path="/careers"
      />

      <Sheet label="Careers">
        <PageHead
          note="Careers"
          title="Articleship and roles at RJS & Co."
          lead="Articles, interns and qualified staff work on live audit, tax and compliance engagements, with a partner reviewing their work."
        />
        <Clause note="Openings">
          <ol className="paras">
            {openings.map((item) => (
              <li key={item.ref} data-ref={item.ref}>
                <div>
                  <h2 style={{ display: 'inline', font: 'inherit', fontWeight: 600, color: 'var(--navy)' }}>{item.title}</h2>{' '}
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Clause>
        <Clause note="Apply">
          <Closing statement="Send your CV and the work you want to do." lead="Tell us your stage (articles, intern or qualified) and the area you want to work in." />
        </Clause>
      </Sheet>
    </>
  );
}
