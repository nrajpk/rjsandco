import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact RJS & Co. | Book a Consultation"
        description="Contact RJS & Co. for audit, tax, GST, accounting, ROC compliance, business setup, payroll, Virtual CFO, NRI taxation, and advisory support."
        path="/contact"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Book a consultation with RJS & Co.</h1>
          <p>
            Share your requirement, deadline, and current compliance status. The form opens your email app with the enquiry details filled in.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <h2>Send an enquiry</h2>
            <p>Use the form below to share your requirement. Avoid uploading sensitive documents until a secure process is confirmed.</p>
            <ContactForm />
          </div>

          <aside className="contact-details" aria-label="Contact details">
            <div className="contact-card">
              <h2>Office details</h2>
              <p><strong>Address:</strong> {siteConfig.address}</p>
              <p><strong>Email:</strong> <a href={siteConfig.emailHref}>{siteConfig.email}</a></p>
              <p><strong>Phone:</strong> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></p>
              <p><strong>WhatsApp:</strong> {siteConfig.whatsappLabel}</p>
            </div>
            <div className="map-preview">
              <iframe
                title="RJS & Co. office location on Google Maps"
                src={siteConfig.mapEmbedHref}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href={siteConfig.mapHref} target="_blank" rel="noreferrer">
                {siteConfig.mapLabel}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
