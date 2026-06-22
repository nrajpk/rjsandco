import SEO from '../components/SEO.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | RJS & Co."
        description="Privacy Policy for RJS & Co. website visitors and enquiry form users."
        path="/privacy-policy"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Privacy Policy</p>
          <h1>How visitor and enquiry information is handled.</h1>
          <p>This is a starter policy and should be reviewed legally before the website goes live.</p>
        </div>
      </section>

      <section className="section legal-content">
        <div className="container narrow content-stack">
          <h2>Information collected</h2>
          <p>
            This website may collect basic enquiry information such as name, phone number, email address, selected service, and message details submitted through the contact form.
          </p>

          <h2>Purpose of collection</h2>
          <p>
            Information is used only to understand enquiries, respond to visitors, provide professional service information, and maintain communication records where required.
          </p>

          <h2>Confidentiality</h2>
          <p>
            Financial, tax, accounting, and compliance information should be shared only through secure and agreed channels. Visitors should avoid submitting sensitive documents through an unverified public form.
          </p>

          <h2>Third-party services</h2>
          <p>
            If analytics, form handling, email tools, WhatsApp, maps, or hosting services are connected later, their respective privacy practices may apply.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact {siteConfig.firmName} at {siteConfig.email}.
          </p>
        </div>
      </section>
    </>
  );
}

