import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { ArrowIcon, Clause, PageHead, Sheet } from '../components/Report.jsx';
import { Closing, DueDates } from '../components/Sections.jsx';

const notes = [
  {
    title: 'GST filing discipline for growing businesses',
    description: 'A checklist for sales data, purchase reconciliation, ITC review and month-end filing.',
    desk: 'GST'
  },
  {
    title: 'The ROC calendar for a private limited company',
    description: 'The annual filings every private company owes the MCA, and when each falls due.',
    desk: 'Company Law'
  },
  {
    title: 'Selling property in India as an NRI',
    description: 'What to settle before you sign: TDS, a lower deduction certificate, capital gains and repatriation.',
    desk: 'NRI Desk'
  }
];

const tools = ['GST calculator', 'Income tax estimator', 'Compliance calendar you can subscribe to'];

export default function Resources() {
  return (
    <>
      <SEO
        title="Insights | Tax, GST, ROC and NRI Notes | RJS & Co."
        description="Short notes from RJS & Co. on GST, company law, income tax and NRI taxation, and a live list of upcoming statutory due dates."
        path="/resources"
      />

      <Sheet page={1} total={2} label="Insights">
        <PageHead
          note="Insights"
          title="Short notes on the questions we hear most."
          lead="Written for owners and directors who need to act on them. Each note is general information; your facts may change the answer."
        />
        <Clause note="In preparation">
          <ul className="schedule__rows" style={{ borderTop: '1px solid var(--navy)' }}>
            {notes.map((note) => (
              <li key={note.title}>
                <Link className="schedule__row" to="/contact">
                  <span className="schedule__title">{note.title}</span>
                  <span className="schedule__desc">
                    {note.description} <em style={{ color: 'var(--ink-3)' }}>Publishing soon. Ask us now.</em>
                  </span>
                  <ArrowIcon className="schedule__arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </Clause>
      </Sheet>

      <Sheet page={2} total={2} label="Dates and tools">
        <Clause title="Dates to watch" sub="Updated each day">
          <DueDates />
        </Clause>
        <Clause note="Tools" sub="Coming next">
          <ul className="plain-list" style={{ maxWidth: '40ch' }}>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <p className="footnote">Free to use, with no login.</p>
        </Clause>
        <Clause note="Signed" quietOnMobile>
          <Closing
            statement="Have a notice, a deadline or a tax question?"
            lead="General notes cannot settle a specific case. Send us the facts and we will review them."
          />
        </Clause>
      </Sheet>
    </>
  );
}
