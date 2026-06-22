import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers and Articleship | RJS & Co."
        description="Explore careers, articleship, internship, and professional learning opportunities at RJS & Co. Replace placeholders with verified openings before launch."
        path="/careers"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Careers and Articleship</p>
          <h1>Build practical exposure in tax, audit, accounting, compliance, and advisory.</h1>
          <p>
            Use this page for articleship openings, internships, experienced roles, and professional learning updates. Publish only verified openings before launch.
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
              RJS & Co. can use this section to communicate its working culture, training approach, and current opportunities for CA articles, interns, and experienced professionals.
            </p>
            <p>
              Keep this page honest. Do not publish generic hiring claims. Add real role descriptions, eligibility, location, application email, and expected responsibilities when openings are available.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="feature-grid">
            <article className="feature-card"><span>01</span><h2>Articleship</h2><p>Placeholder for CA articleship opportunities, eligibility, exposure areas, and application instructions.</p></article>
            <article className="feature-card"><span>02</span><h2>Internship</h2><p>Placeholder for short-term internship roles in accounting, tax support, documentation, and compliance operations.</p></article>
            <article className="feature-card"><span>03</span><h2>Experienced roles</h2><p>Placeholder for qualified or semi-qualified professionals in audit, taxation, GST, ROC, and advisory services.</p></article>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in working with RJS & Co.?"
        description="Replace this CTA with the verified careers email or application process before publishing."
        primaryLabel="Contact the firm"
        primaryPath="/contact"
        secondaryLabel="View services"
        secondaryPath="/services"
      />
    </>
  );
}

