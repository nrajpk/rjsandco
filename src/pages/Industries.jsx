import SEO from '../components/SEO.jsx';
import { Clause, PageHead, Sheet } from '../components/Report.jsx';
import { Closing, KeyMatters } from '../components/Sections.jsx';
import { industries } from '../data/industries.js';

export default function Industries() {
  return (
    <>
      <SEO
        title="Who We Act For | RJS & Co., Chartered Accountants"
        description="Companies, startups, MSMEs, firms and LLPs, professionals, NRIs, trading and service businesses, trusts and non-profits. RJS & Co., Kerala."
        path="/industries"
      />

      <Sheet page={1} total={2} label="Who we act for">
        <PageHead
          note="Who we act for"
          title="Different entities carry different obligations."
          lead="A startup, an NRI selling a flat and a charitable trust face different filings, different risks and different deadlines. We start from what kind of client you are."
        />
        <Clause note="Clients">
          <ul className="ledger-list">
            {industries.map((industry) => (
              <li key={industry.title}>
                <h2>{industry.title}</h2>
                <p>{industry.description}</p>
              </li>
            ))}
          </ul>
        </Clause>
      </Sheet>

      <Sheet page={2} total={2} label="Where to start">
        <Clause note="Where to start" quietOnMobile>
          <p className="statement">Start with the problem. We will find the form.</p>
          <div className="prose" style={{ marginTop: 20 }}>
            <p>
              Few clients arrive asking for a service by its technical name. They come because a deadline is close, a
              notice has arrived, the books will not reconcile, GST credit is blocked, a company needs forming, or the
              board wants better numbers.
            </p>
            <p>
              We look at the situation first, then assemble the right mix of tax, accounting, GST, ROC, payroll, audit or
              advisory work.
            </p>
          </div>
        </Clause>
        <Clause title="Key matters" sub="What brings clients to us">
          <KeyMatters />
        </Clause>
        <Clause note="Signed" quietOnMobile>
          <Closing statement="Not sure which desk you need?" lead="Tell us what kind of entity you are, what happened and when it is due. We will tell you which desk takes it and what we need from you." />
        </Clause>
      </Sheet>
    </>
  );
}
