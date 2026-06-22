import SEO from '../components/SEO.jsx';

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | RJS & Co."
        description="Website disclaimer for RJS & Co. covering general information, professional advice limitations, and non-solicitation."
        path="/disclaimer"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Disclaimer</p>
          <h1>Important information before using this website.</h1>
          <p>This disclaimer is a starter version and should be reviewed before launch.</p>
        </div>
      </section>

      <section className="section legal-content">
        <div className="container narrow content-stack">
          <h2>General information only</h2>
          <p>
            The content on this website is provided for general informational purposes. It should not be treated as professional advice for a specific tax, audit, accounting, legal, or compliance matter.
          </p>

          <h2>No professional engagement by browsing</h2>
          <p>
            Visiting this website, reading its content, or submitting a general enquiry does not automatically create a client relationship or professional engagement.
          </p>

          <h2>Non-solicitation</h2>
          <p>
            This website is intended to provide information about RJS & Co. and its professional services. It should not be interpreted as solicitation where such solicitation is restricted by applicable professional guidelines.
          </p>

          <h2>Accuracy and updates</h2>
          <p>
            Tax, GST, company law, and compliance requirements may change. Visitors should obtain professional advice based on current law and their specific facts before acting.
          </p>

          <h2>External links</h2>
          <p>
            Links to government portals or third-party websites are provided for convenience. RJS & Co. is not responsible for the content, availability, or policies of external websites.
          </p>
        </div>
      </section>
    </>
  );
}

