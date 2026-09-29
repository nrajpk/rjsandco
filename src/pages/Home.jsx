import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import Signatory from '../components/Signatory.jsx';
import Partners from '../components/Partners.jsx';
import { ArrowIcon, Clause, Fields, Sheet, WhatsAppIcon } from '../components/Report.jsx';
import { Closing, DueDates, KeyMatters, ServiceSchedule } from '../components/Sections.jsx';
import { generalFaqs } from '../data/faqs.js';
import { industries } from '../data/industries.js';
import { services } from '../data/services.js';
import { siteConfig, whatsappHref } from '../data/siteConfig.js';
import { firmFacts } from '../data/firmFacts.js';
import { formatReportDate } from '../data/dueDates.js';

const TOTAL = 7;

const basis = [
  {
    ref: '2.1',
    title: 'Scope before fees.',
    text: 'Before work starts, we set out in writing what the engagement covers, the documents we need, the timetable and the fee. We quote routine work as a fixed fee.'
  },
  {
    ref: '2.2',
    title: 'A partner on the matter.',
    text: 'A partner signs every audit report and reviews notices and complex matters. You can speak to that partner directly.'
  },
  {
    ref: '2.3',
    title: 'Records kept in confidence.',
    text: 'We ask for documents against a written checklist, through a channel we agree with you, and limit access to the people on your engagement.'
  },
  {
    ref: '2.4',
    title: 'Dates tracked for you.',
    text: 'We keep your statutory calendar, remind you before each filing, and tell you early when a document is still missing.'
  }
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: siteConfig.legalName,
    url: siteConfig.domain,
    description: siteConfig.description,
    email: siteConfig.email,
    ...(firmFacts.phone ? { telephone: firmFacts.phone } : {}),
    foundingDate: firmFacts.established,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      ...(siteConfig.postalCode ? { postalCode: siteConfig.postalCode } : {}),
      addressCountry: 'IN'
    },
    areaServed: 'India',
    serviceType: services.map((service) => service.title)
  };

  return (
    <>
      <SEO
        title="RJS & Co. | Chartered Accountants, Kottayam"
        description="Audit, income tax, GST, company law and NRI taxation, reviewed and signed by a partner. RJS & Co., Chartered Accountants, Kottayam, Kerala."
        path="/"
        schema={schema}
      />

      <Sheet page={1} total={TOTAL} label="Opinion">
        <div className="opinion">
          <p className="clause__note" aria-hidden="true">
            <span className="clause__num">1</span>
            <small>Opinion</small>
          </p>
          <div>
            <p className="opinion__addressee">
              To the <strong>directors, partners and founders</strong> of Indian businesses, and to{' '}
              <strong>NRIs</strong> with affairs in India
            </p>
            <p className="opinion__glance">
              ICAI FRN <strong>{firmFacts.frn}</strong> · Est. {firmFacts.established} · {firmFacts.partners.length} partners ·{' '}
              {siteConfig.city}
            </p>
            <h1>Audit, tax and company law, reviewed and signed by a partner.</h1>
            <p className="opinion__lead">
              RJS &amp; Co. is a firm of Chartered Accountants in Kottayam. We audit companies, trusts and firms,
              handle their income tax and GST, keep their MCA filings current, and advise NRIs on property sales and
              repatriation.
            </p>
            <div className="actions">
              <Link to={siteConfig.consultationPath} className="btn btn-primary">
                Book a consultation
                <ArrowIcon />
              </Link>
              <a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                Message the Support Desk
              </a>
            </div>
          </div>

          <div className="opinion__attest">
            <Fields
              rows={[
                { label: 'ICAI FRN', value: firmFacts.frn },
                { label: 'Established', value: firmFacts.established },
                { label: 'Partners', value: String(firmFacts.partners.length) },
                { label: 'Place', value: 'Kottayam, Kerala' },
                { label: 'Date', value: formatReportDate() }
              ]}
            />
            <Signatory />
          </div>
        </div>
      </Sheet>

      <Sheet page={2} total={TOTAL} label="Basis for our opinion">
        <Clause num="2" title="How we work, and what you can hold us to." sub="Basis for our opinion">
          <ol className="paras" style={{ marginTop: 8 }}>
            {basis.map((item) => (
              <li key={item.ref} data-ref={item.ref}>
                <div>
                  <h3>{item.title}</h3> <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Clause>
      </Sheet>

      <Sheet page={3} total={TOTAL} label="Key matters">
        <Clause num="3" title="Key matters" sub="What brings clients to us">
          <p className="prose muted" style={{ marginBottom: 28 }}>
            Most enquiries start with one of these. Find yours to see how we handle it and which desk takes it on.
          </p>
          <KeyMatters />
        </Clause>
      </Sheet>

      <Sheet page={4} total={TOTAL} label="Schedule of services">
        <Clause num="4" title="Schedule of services" sub="Five desks, one engagement">
          <ServiceSchedule />
          <p style={{ marginTop: 32 }}>
            <Link className="text-link" to="/services">
              The practice in full
              <ArrowIcon className="" />
            </Link>
          </p>
        </Clause>
      </Sheet>

      <Sheet page={5} total={TOTAL} label="Dates to watch">
        <Clause num="5" title="Dates to watch" sub="Updated each day">
          <DueDates />
        </Clause>
      </Sheet>

      <Sheet page={6} total={TOTAL} label="Who we act for and the partners">
        <Clause num="6" title="Who we act for">
          <ul className="ledger-list">
            {industries.map((industry) => (
              <li key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </li>
            ))}
          </ul>
        </Clause>
        <Clause num="7" title="The partners">
          <Partners />
        </Clause>
      </Sheet>

      <Sheet page={7} total={TOTAL} label="Questions and contact">
        <Clause num="8" title="Questions">
          <FAQAccordion items={generalFaqs} />
        </Clause>
        <Clause note="Signed" quietOnMobile sub={`Kottayam, ${formatReportDate()}`}>
          <Closing />
        </Clause>
      </Sheet>
    </>
  );
}
