import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion.jsx';
import PencilTick from '../components/PencilTick.jsx';
import SEO from '../components/SEO.jsx';
import { ArrowIcon, Clause, PageHead, Sheet, WhatsAppIcon } from '../components/Report.jsx';
import { Closing } from '../components/Sections.jsx';
import { services } from '../data/services.js';
import { siteConfig, whatsappHref } from '../data/siteConfig.js';
import NotFound from './NotFound.jsx';

function readChecked(slug) {
  try {
    return JSON.parse(window.localStorage.getItem(`rjs-docs-${slug}`) || '[]');
  } catch {
    return [];
  }
}

// Documents the visitor can tick off as they gather them. Stored only in
// this browser, as a convenience.
function DocumentChecklist({ slug, items }) {
  const [checked, setChecked] = useState(() => readChecked(slug));

  useEffect(() => {
    setChecked(readChecked(slug));
  }, [slug]);

  function toggle(item) {
    setChecked((current) => {
      const next = current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item];
      try {
        window.localStorage.setItem(`rjs-docs-${slug}`, JSON.stringify(next));
      } catch {
        /* storage unavailable; the checklist still works for this visit */
      }
      return next;
    });
  }

  const done = items.filter((item) => checked.includes(item)).length;

  return (
    <>
      <ul className="checklist">
        {items.map((item) => {
          const isChecked = checked.includes(item);
          return (
            <li key={item}>
              <label>
                <input type="checkbox" checked={isChecked} onChange={() => toggle(item)} />
                <span className="checklist__box" aria-hidden="true">
                  <PencilTick drawn={isChecked} />
                </span>
                <span className="checklist__text">{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <p className="checklist__summary" aria-live="polite">
        {done === 0
          ? 'Tick each document as you gather it. The list stays in this browser only.'
          : `${done} of ${items.length} ready.${done === items.length ? ' Send them over when we confirm the channel.' : ''}`}
      </p>
    </>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const index = services.findIndex((item) => item.slug === slug);
  const service = services[index];

  if (!service) return <NotFound />;

  const next = services[(index + 1) % services.length];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'AccountingService',
      name: siteConfig.legalName,
      url: siteConfig.domain
    },
    areaServed: 'India',
    serviceType: service.title
  };

  return (
    <>
      <SEO title={service.metaTitle} description={service.metaDescription} path={`/services/${service.slug}`} schema={schema} />

      <Sheet page={1} total={2} label={service.title}>
        <PageHead
          note={`Annexure ${String.fromCharCode(65 + index)}`}
          title={service.title}
          lead={service.intro}
          crumbs={
            <p className="crumbs">
              <Link to="/services">The practice</Link> / {service.shortTitle}
            </p>
          }
        />

        <div className="annexure">
          <div>
            <Clause note="The matter">
              <p className="prose">{service.problem}</p>
            </Clause>
            <Clause note="Who this is for">
              <ul className="plain-list">
                {service.whoFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Clause>
            <Clause note="Scope of work">
              <ul className="plain-list">
                {service.helpsWith.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Clause>
            <Clause note="What you receive">
              <ul className="plain-list">
                {service.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Clause>
          </div>

          <aside className="annexure__aside" aria-label="Start this engagement">
            <h2>{service.title}</h2>
            <p>{service.excerpt}</p>
            <Link to="/contact" className="btn btn-primary">
              Book a consultation
              <ArrowIcon />
            </Link>
            <a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              WhatsApp us
            </a>
            <p>
              <strong style={{ color: 'var(--navy)', fontWeight: 600 }}>Timing.</strong> {service.turnaround}
            </p>
          </aside>
        </div>
      </Sheet>

      <Sheet page={2} total={2} label="Procedure, documents and questions">
        <Clause note="Procedure">
          <ol className="procedure">
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Clause>
        <Clause note="Documents we request" sub="Tick them off as you gather them">
          <DocumentChecklist slug={service.slug} items={service.documents} />
        </Clause>
        <Clause note="Questions">
          <FAQAccordion items={service.faqs} />
        </Clause>
        <Clause note="Signed" quietOnMobile>
          <Closing statement={`Start your ${service.shortTitle.toLowerCase()} engagement.`} />
          <p style={{ marginTop: 36 }}>
            <Link className="text-link" to={`/services/${next.slug}`}>
              Next: {next.title}
              <ArrowIcon className="" />
            </Link>
          </p>
        </Clause>
      </Sheet>
    </>
  );
}
