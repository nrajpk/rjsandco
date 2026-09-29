import SEO from '../components/SEO.jsx';
import { Clause, PageHead, Sheet } from '../components/Report.jsx';
import { Closing, KeyMatters, ServiceSchedule } from '../components/Sections.jsx';

export default function Services() {
  return (
    <>
      <SEO
        title="The Practice | Audit, Tax, GST, Company Law and NRI Desk | RJS & Co."
        description="Audit and assurance, income tax, GST, company law, business setup, accounting, payroll, Virtual CFO, startup support and an NRI desk. RJS & Co., Kerala."
        path="/services"
      />

      <Sheet page={1} total={2} label="Schedule of services">
        <PageHead
          note="The practice"
          title="Schedule of services."
          lead="Five desks under one engagement letter. Pick the desk that matches your matter, or tell us the situation and we will route it."
        />
        <Clause note="Desks" sub="Select a service for scope, procedure and documents">
          <ServiceSchedule />
        </Clause>
      </Sheet>

      <Sheet page={2} total={2} label="Combined matters">
        <Clause note="Combined matters" quietOnMobile>
          <p className="statement">Most matters need more than one desk.</p>
          <div className="prose" style={{ marginTop: 20 }}>
            <p>
              A new company needs incorporation, a GST review, an accounting set-up, payroll and its first ROC filings.
              An NRI selling a flat in Kerala needs the capital gains computed, a lower TDS certificate and the remittance
              papers. We scope the combination once and one partner answers for all of it.
            </p>
          </div>
        </Clause>
        <Clause title="Key matters" sub="What brings clients to us">
          <KeyMatters />
        </Clause>
        <Clause note="Signed" quietOnMobile>
          <Closing />
        </Clause>
      </Sheet>
    </>
  );
}
