import { useState } from 'react';
import ContactForm from '../components/ContactForm.jsx';
import SEO from '../components/SEO.jsx';
import { Clause, Fields, PageHead, Sheet, WhatsAppIcon } from '../components/Report.jsx';
import { officeMapEmbed, officeMapHref, siteConfig, whatsappHref } from '../data/siteConfig.js';
import { firmFacts } from '../data/firmFacts.js';

export default function Contact() {
  const [mapCity, setMapCity] = useState('Kottayam');
  const mapOffice = siteConfig.offices.find((office) => office.city === mapCity) || siteConfig.offices[0];

  return (
    <>
      <SEO
        title="Contact RJS & Co. | Book a Consultation, Kerala"
        description="Book a consultation with RJS & Co., Chartered Accountants, with offices in Ernakulam, Kottayam and Pathanamthitta, for audit, tax, GST, company law, payroll, Virtual CFO or NRI taxation."
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

              <div className="offices">
                <h2 className="offices__title">Offices</h2>
                {siteConfig.offices.map((office) => (
                  <address className="office-card" key={office.city}>
                    <span className="office-card__city">{office.city}</span>
                    {office.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                    <a className="inline-link" href={officeMapHref(office)} target="_blank" rel="noreferrer">
                      Open in Google Maps
                    </a>
                  </address>
                ))}
              </div>

              <div className="map-frame">
                <div className="map-tabs" role="group" aria-label="Show office on the map">
                  {siteConfig.offices.map((office) => (
                    <button
                      key={office.city}
                      type="button"
                      className="map-tab"
                      aria-pressed={office.city === mapOffice.city}
                      onClick={() => setMapCity(office.city)}
                    >
                      {office.city}
                    </button>
                  ))}
                </div>
                <iframe
                  key={mapOffice.city}
                  title={`RJS & Co. ${mapOffice.city} office on Google Maps`}
                  src={officeMapEmbed(mapOffice)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>
          </div>
        </Clause>
      </Sheet>
    </>
  );
}
