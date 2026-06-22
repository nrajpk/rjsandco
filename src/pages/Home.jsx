import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import CTASection from '../components/CTASection.jsx';
import { generalFaqs } from '../data/faqs.js';
import { industries } from '../data/industries.js';
import { services } from '../data/services.js';
import { siteConfig } from '../data/siteConfig.js';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.legalName,
    url: siteConfig.domain,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country
    },
    areaServed: 'India',
    serviceType: services.map((service) => service.title)
  };

  return (
    <>
      <SEO
        title="RJS & Co. | Chartered Accountants, Tax Consultants and Business Advisors"
        description="RJS & Co. provides audit, tax, GST, accounting, ROC compliance, business setup, payroll, Virtual CFO, NRI taxation, and startup advisory services in India."
        path="/"
        schema={schema}
      />

      <Hero
        eyebrow="Chartered Accountants and Business Advisors"
        title="Do not let compliance slow your growth."
        description="Expert CA, tax, audit, GST, accounting, ROC, payroll, Virtual CFO, and NRI taxation support for Indian startups, growing MSMEs, professionals, companies, and NRIs."
        primaryLabel="Book a Consultation"
        primaryPath="/contact"
        secondaryLabel="View Services"
        secondaryPath="/services"
      />

      <section className="section intro-strip">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">About the firm</p>
            <h2>Practical compliance and advisory support without the confusion.</h2>
          </div>
          <p>
            RJS & Co. is built for clients who want clarity, responsiveness, and reliable execution. The firm supports routine compliance as well as business decisions that need accounting, tax, and financial judgement.
          </p>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Core professional services"
            description="A practical service menu focused on the outcomes clients actually care about: fewer penalties, cleaner books, stronger reporting, and better decisions."
            align="center"
          />
          <div className="card-grid service-grid">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="center-action">
            <Link to="/services" className="btn btn-secondary">Explore all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose RJS & Co."
            title="Trust-focused delivery for serious financial matters"
            description="The site avoids vague promises. The working model is simple: understand the requirement, define the scope, collect the right documents, execute carefully, and keep the client informed."
          />
          <div className="feature-grid">
            <article className="feature-card">
              <span>01</span>
              <h3>Partner-led thinking</h3>
              <p>You need access to qualified judgement, not only form filling. Complex issues are reviewed with professional care.</p>
            </article>
            <article className="feature-card">
              <span>02</span>
              <h3>Zero-surprise scope</h3>
              <p>Routine work can be scoped clearly so clients understand deliverables, documents, timelines, and expected fees.</p>
            </article>
            <article className="feature-card">
              <span>03</span>
              <h3>Secure document handling</h3>
              <p>Financial records are treated with confidentiality, disciplined access, and professional responsibility.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Who we serve"
            title="Support for businesses, professionals, and NRIs"
            description="RJS & Co. works with clients who need dependable compliance, clear reporting, and practical advisory support."
            align="center"
          />
          <div className="mini-grid">
            {industries.slice(0, 6).map((industry) => (
              <article className="mini-card" key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid compliance-panel">
          <div>
            <p className="eyebrow">Compliance and advisory</p>
            <h2>Keep filings, notices, books, and decisions moving in one rhythm.</h2>
            <p>
              The real value of a CA firm is not only filing returns. It is helping you avoid preventable problems, see what the numbers mean, and prepare before deadlines become emergencies.
            </p>
          </div>
          <div className="check-list">
            <span>GST filing and ITC reconciliation</span>
            <span>Income tax planning and return filing</span>
            <span>ROC annual and event-based compliance</span>
            <span>Accounting cleanup and monthly reporting</span>
            <span>Payroll, TDS, audit readiness, and advisory</span>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="A simple way to start"
            description="No confusing handover. No blind document dump. The engagement begins with clarity."
            align="center"
          />
          <div className="process-grid">
            <article><span>1</span><h3>Share requirement</h3><p>Explain the issue, deadline, entity type, and current compliance status.</p></article>
            <article><span>2</span><h3>Scope review</h3><p>RJS & Co. identifies the service scope, documents needed, and practical next step.</p></article>
            <article><span>3</span><h3>Document collection</h3><p>Required records are collected through a structured checklist, not scattered messages.</p></article>
            <article><span>4</span><h3>Execution and closure</h3><p>The matter is completed with confirmation, records, and future reminders where useful.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-preview">
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions before engaging a CA firm"
            description="Clear answers before the first call saves time for both sides."
          />
          <FAQAccordion items={generalFaqs.slice(0, 4)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}

