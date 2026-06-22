import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { serviceCategories, services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Audit, Tax, GST, Accounting and Advisory | RJS & Co."
        description="Explore RJS & Co. services including audit, taxation, GST, accounting, ROC compliance, business setup, payroll, Virtual CFO, NRI taxation, and startup advisory."
        path="/services"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>CA, tax, compliance, accounting, and advisory services under one roof.</h1>
          <p>
            Choose services based on your actual business need: setup, compliance, audit, accounting, payroll, advisory, or NRI taxation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service categories"
            title="Organised by client need"
            description="Most clients do not need isolated technical terms. They need the right combination of services for their stage, entity, and deadline."
          />
          <div className="category-grid">
            {serviceCategories.map((category) => (
              <article className="category-card" key={category.name}>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <ul>
                  {category.slugs.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    return <li key={slug}>{service?.title}</li>;
                  })}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="All services"
            title="Select a service to view details"
            description="Each service page includes who it is for, what is covered, documents usually required, process, benefits, FAQs, and a clear CTA."
            align="center"
          />
          <div className="card-grid service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container advisory-note">
          <p className="eyebrow">Advisory note</p>
          <h2>The right solution may combine more than one service.</h2>
          <p>
            For example, a startup may need incorporation, GST review, accounting setup, payroll, and ROC compliance. An NRI property matter may need tax computation, TDS review, and repatriation documentation. Start with the issue. RJS & Co. can map the service scope from there.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

