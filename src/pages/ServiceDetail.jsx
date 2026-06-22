import { Link, useParams } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { services } from '../data/services.js';
import { siteConfig } from '../data/siteConfig.js';
import NotFound from './NotFound.jsx';

function BulletList({ items }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <NotFound />;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.legalName,
      url: siteConfig.domain
    },
    areaServed: 'India',
    serviceType: service.title
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        schema={schema}
      />

      <section className="page-hero service-detail-hero section">
        <div className="container narrow">
          <p className="eyebrow">RJS & Co. services</p>
          <h1>{service.title} in India</h1>
          <p>{service.intro}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Talk to our expert</Link>
            <Link to="/services" className="btn btn-secondary">Back to services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <aside className="detail-sidebar" aria-label="Service summary">
            <div className="sidebar-card">
              <p className="eyebrow">Service summary</p>
              <h2>{service.title}</h2>
              <p>{service.excerpt}</p>
              <Link to="/contact" className="btn btn-primary full-width">Book a Consultation</Link>
            </div>
            <div className="sidebar-card muted-card">
              <h3>Typical turnaround</h3>
              <p>{service.turnaround}</p>
            </div>
          </aside>

          <div className="detail-content">
            <section className="detail-section">
              <h2>The problem</h2>
              <p>{service.problem}</p>
            </section>

            <section className="detail-section">
              <h2>Who this service is for</h2>
              <BulletList items={service.whoFor} />
            </section>

            <section className="detail-section">
              <h2>What RJS & Co. helps with</h2>
              <BulletList items={service.helpsWith} />
            </section>

            <section className="detail-section">
              <h2>Benefits</h2>
              <BulletList items={service.benefits} />
            </section>

            <section className="detail-section">
              <h2>Process</h2>
              <ol className="number-list">
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="detail-section">
              <h2>Documents usually required</h2>
              <BulletList items={service.documents} />
            </section>

            <section className="detail-section">
              <h2>FAQs</h2>
              <FAQAccordion items={service.faqs} />
            </section>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={service.title}
        title={`Need help with ${service.title.toLowerCase()}?`}
        description="Share your requirement, current status, and deadline. RJS & Co. will guide you on the practical next step and documents needed."
        secondaryLabel="View all services"
        secondaryPath="/services"
      />
    </>
  );
}

