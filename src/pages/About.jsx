import SEO from '../components/SEO.jsx';
import Partners from '../components/Partners.jsx';
import { Clause, Fields, PageHead, Sheet } from '../components/Report.jsx';
import { Closing } from '../components/Sections.jsx';
import { firmFacts } from '../data/firmFacts.js';
import { siteConfig } from '../data/siteConfig.js';

const responsibilities = [
  {
    ref: '(a)',
    title: 'Confidentiality.',
    text: 'Your ledgers, returns and payroll data stay with the people on your engagement. We agree with you how documents reach us.'
  },
  {
    ref: '(b)',
    title: 'Scope and fee in writing.',
    text: 'You know what we will do, what we need from you, when it will be done and what it costs before we begin.'
  },
  {
    ref: '(c)',
    title: 'Deadlines.',
    text: 'We plan each engagement backwards from its statutory date, and we tell you early when something is missing.'
  },
  {
    ref: '(d)',
    title: 'Advice you can keep.',
    text: 'When a decision depends on our advice, we put the advice in writing with the facts and the law it rests on.'
  },
  {
    ref: '(e)',
    title: 'Independence.',
    text: 'We follow the ICAI Code of Ethics, and we decline audit work where our independence could be questioned.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="The Firm | RJS & Co., Chartered Accountants, Kottayam"
        description="RJS & Co. is a partnership of Chartered Accountants in Kottayam, Kerala, registered with the ICAI. Meet the partners and read how the firm works."
        path="/about"
      />

      <Sheet page={1} total={2} label="The firm">
        <PageHead
          note="The firm"
          title="A practice of Chartered Accountants, run by its partners."
          lead={`RJS & Co. has practised in Kottayam since ${firmFacts.established}. We act for companies, firms, trusts, founders and NRI families on audit, tax, company law and advisory work.`}
        />
        <Clause note="Constitution">
          <Fields
            rows={[
              { label: 'Name', value: 'RJS & Co., Chartered Accountants' },
              { label: 'Constitution', value: firmFacts.constitution },
              { label: 'ICAI FRN', value: firmFacts.frn },
              { label: 'Established', value: firmFacts.established },
              { label: 'Peer review', value: firmFacts.peerReview },
              { label: 'Team', value: firmFacts.teamSize },
              { label: 'Office', value: siteConfig.address }
            ]}
          />
        </Clause>
        <Clause note="The partners">
          <Partners headingLevel={3} />
        </Clause>
      </Sheet>

      <Sheet page={2} total={2} label="Our responsibilities">
        <Clause note="Our responsibilities" sub="To every client">
          <ol className="paras">
            {responsibilities.map((item) => (
              <li key={item.ref} data-ref={item.ref}>
                <div>
                  <h3>{item.title}</h3> <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Clause>
        <Clause note="Signed" quietOnMobile>
          <Closing statement="Talk to a partner about your matter." />
        </Clause>
      </Sheet>
    </>
  );
}
