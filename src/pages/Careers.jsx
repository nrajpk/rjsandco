import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers and Articleship | RJS & Co."
        description="Explore careers, articleship, internship, and professional learning opportunities at RJS & Co."
        path="/careers"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Careers and Articleship</p>
          <h1>Build practical exposure in tax, audit, accounting, compliance, and advisory.</h1>
          <p>
            Articleship, internship, and experienced-professional openings at RJS & Co.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Learning environment</p>
            <h2>For candidates who want disciplined professional exposure.</h2>
          </div>
          <div className="content-stack">
            <p>
              Articles, interns, and experienced professionals work directly on live tax, audit, accounting, and compliance engagements, with structured review at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card"><span>01</span><h2>Articleship</h2><p>Structured CA articleship exposure across audit, tax, GST, and accounting engagements.</p></article>
            <article className="feature-card"><span>02</span><h2>Internship</h2><p>Short-term roles in accounting, tax support, documentation, and compliance operations.</p></article>
            <article className="feature-card"><span>03</span><h2>Experienced roles</h2><p>Positions for qualified and semi-qualified professionals in audit, taxation, GST, ROC, and advisory.</p></article>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in working with RJS & Co.?"
        description="Share your CV and area of interest, and the team will get back to you about current openings."
        primaryLabel="Contact the firm"
        primaryPath="/contact"
        secondaryLabel="View services"
        secondaryPath="/services"
      />
    </>
  );
}
