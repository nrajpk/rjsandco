import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import { Clause, Fields, PageHead, Sheet, WhatsAppIcon } from '../components/Report.jsx';
import { siteConfig, whatsappHref } from '../data/siteConfig.js';
import { firmFacts } from '../data/firmFacts.js';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact RJS & Co. | Book a Consultation, Kottayam"
        description="Book a consultation with RJS & Co., Chartered Accountants, Kottayam, for audit, tax, GST, company law, payroll, Virtual CFO or NRI taxation."
        path="/contact"
      />

      <Sheet label="Book a consultation">
        <PageHead
          note="Engagement enquiry"
          title="Book a consultation."
          lead="Tell us the matter, the deadline and where things stand. We reply with the likely scope, the documents we need and a fee estimate."
        />

        <Clause note="Your matter" sub="All fields required">
          <div className="contact-grid">
            <ContactForm />

            <aside className="office" aria-label="Office details">
              <Fields
                rows={[
                  { label: 'Office', value: siteConfig.address },
                  { label: 'Email', value: <a className="inline-link" href={siteConfig.emailHref}>{siteConfig.email}</a> },
                  firmFacts.phone && { label: 'Phone', value: <a className="inline-link" href={firmFacts.phoneHref}>{firmFacts.phone}</a> },
                  {
                    label: 'Support Desk',
                    value: (
                      <a className="inline-link" href={whatsappHref} target="_blank" rel="noreferrer">
                        WhatsApp {siteConfig.whatsappLabel}
                      </a>
                    )
                  }
                ].filter(Boolean)}
              />
              <a className="btn btn-quiet" href={whatsappHref} target="_blank" rel="noreferrer" style={{ justifySelf: 'start' }}>
                <span style={{ width: 20, height: 20, color: '#1f8f4e', display: 'inline-flex' }}>
                  <WhatsAppIcon />
                </span>
                Message on WhatsApp
              </a>
              <div className="map-frame">
                <iframe
                  title="RJS & Co. office on Google Maps"
                  src={siteConfig.mapEmbedHref}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a className="text-link" href={siteConfig.mapHref} target="_blank" rel="noreferrer">
                {siteConfig.mapLabel}
              </a>
            </aside>
          </div>
        </Clause>
      </Sheet>
    </>
  );
}
