import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return (
    <>
      <SEO
        title="About RJS & Co. | Chartered Accountants and Business Advisors"
        description="Learn about RJS & Co., a professional CA firm focused on practical tax, audit, accounting, compliance, and business advisory support in India."
        path="/about"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">About RJS & Co.</p>
          <h1>A CA firm built around clarity, compliance discipline, and practical business support.</h1>
          <p>
            RJS & Co. supports Indian businesses, professionals, startups, MSMEs, and NRIs with taxation, audit, GST, accounting, ROC, payroll, and advisory services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Firm introduction</p>
            <h2>Professional services should make decisions easier, not more complicated.</h2>
          </div>
          <div className="content-stack">
            <p>
              RJS & Co. is positioned for clients who want a dependable advisor for recurring compliance and important financial decisions. The firm combines technical CA services with a practical, business-first way of working.
            </p>
            <p>
              The website intentionally uses placeholders for address, phone, email, ICAI credentials, partner details, and registration information. Replace them only after verification before launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container value-grid">
          <article className="value-card">
            <h2>Mission</h2>
            <p>To help clients stay compliant, understand their numbers, and make finance decisions with confidence.</p>
          </article>
          <article className="value-card">
            <h2>Values</h2>
            <ul>
              <li>Professional integrity</li>
              <li>Confidentiality</li>
              <li>Clear communication</li>
              <li>Deadline discipline</li>
              <li>Practical advisory</li>
            </ul>
          </article>
          <article className="value-card">
            <h2>How we work</h2>
            <p>Each engagement starts with scope clarity, document checklists, realistic timelines, and a focused execution path.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Trust section"
            title="Built for sensitive financial work"
            description="Tax records, business accounts, payroll information, and compliance documents require care. RJS & Co. is designed around confidentiality, accuracy, and accountable delivery."
            align="center"
          />
          <div className="feature-grid">
            <article className="feature-card"><span>01</span><h3>Confidential records</h3><p>Client financial data should be handled through secure, organised, and access-controlled processes.</p></article>
            <article className="feature-card"><span>02</span><h3>Documented advice</h3><p>Important matters are handled with proper records, explanations, and supporting documents.</p></article>
            <article className="feature-card"><span>03</span><h3>Practical follow-through</h3><p>The focus is not only filing. It is helping clients know what happens next and what to prepare for.</p></article>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a CA firm that explains the next step clearly?"
        description="Share your requirement and RJS & Co. will help identify the right service path, documents needed, and likely scope."
      />
    </>
  );
}

