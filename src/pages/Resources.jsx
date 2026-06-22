import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const updates = [
  {
    title: 'GST filing discipline for growing businesses',
    description: 'A practical checklist for sales data, purchase reconciliation, ITC review, and monthly filing readiness.'
  },
  {
    title: 'ROC compliance calendar basics',
    description: 'A simple overview of annual company compliance habits every private limited company should maintain.'
  },
  {
    title: 'NRI property sale tax considerations',
    description: 'Key questions NRIs should ask before selling property in India or planning fund repatriation.'
  }
];

const tools = [
  'GST calculator placeholder',
  'Income tax calculator placeholder',
  'EMI calculator placeholder',
  'Tax compliance calendar placeholder'
];

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources and Knowledge Bank | RJS & Co."
        description="Read practical tax, GST, ROC, accounting, NRI taxation, and compliance insights from RJS & Co. Knowledge Bank."
        path="/resources"
      />

      <section className="page-hero section">
        <div className="container narrow">
          <p className="eyebrow">Knowledge Bank</p>
          <h1>Practical tax and compliance resources for business owners.</h1>
          <p>
            Use this section for blogs, tax updates, utility calculators, and compliance calendar content. Replace placeholders with reviewed articles before launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Featured updates"
            description="Publish useful, specific, and regularly updated content here. Thin generic blogs will not help SEO or trust."
          />
          <div className="card-grid">
            {updates.map((item) => (
              <article className="resource-card" key={item.title}>
                <span>Insight</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link to="/contact" className="text-link">Ask about this</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Utilities</p>
            <h2>Calculators and compliance tools can be added later.</h2>
            <p>
              These placeholders are included because calculators and calendars can improve usefulness and SEO, but they should be implemented carefully before launch.
            </p>
          </div>
          <div className="check-list">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a notice, deadline, or tax question?"
        description="Do not rely on generic online content for specific tax decisions. Share the details and get the matter reviewed properly."
      />
    </>
  );
}

