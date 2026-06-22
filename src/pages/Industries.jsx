import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { industries } from '../data/industries.js';

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries and Clients Served | RJS & Co."
        description="RJS & Co. serves startups, MSMEs, private limited companies, partnership firms, professionals, consultants, NRIs, trading businesses, service businesses, and non-profits."
        path="/industries"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Who we serve</p>
          <h1>Professional finance and compliance support for different client realities.</h1>
          <p>
            A startup, NRI, trading business, and non-profit do not have the same compliance concerns. RJS & Co. structures advice around the client type and practical risk.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Client groups"
            title="Industries and client segments"
            description="The goal is not to sell every service to everyone. The right support depends on entity type, stage, tax exposure, and reporting needs."
            align="center"
          />
          <div className="mini-grid industries-grid">
            {industries.map((industry) => (
              <article className="mini-card" key={industry.title}>
                <h2>{industry.title}</h2>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Client-first approach</p>
            <h2>Start with the problem, not the form name.</h2>
          </div>
          <div className="content-stack">
            <p>
              Most clients do not arrive asking for a perfect technical service category. They ask because a deadline is close, a notice has arrived, books are messy, GST credit is blocked, a company needs to be formed, or management needs better numbers.
            </p>
            <p>
              RJS & Co. first understands the situation, then maps the relevant combination of tax, accounting, GST, ROC, payroll, audit, or advisory support.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service applies to your case?"
        description="Share your client type, issue, and deadline. RJS & Co. can help identify the right service path."
      />
    </>
  );
}

