import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import caIndia from '../assets/ca-india.webp';
import mark from '../assets/logo-header.webp';
import SEO from '../components/SEO.jsx';
import { findPerson } from '../data/people.js';
import { vcfPath } from '../data/vcard.js';
import { officeMapHref, siteConfig } from '../data/siteConfig.js';
import '../styles/connect.css';

// Digital business card: the landing page behind the QR on a printed card.
// /connect          the firm's card
// /connect/<slug>   one person's card (src/data/people.js)

const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent);
const digits = (value) => String(value || '').replace(/\D/g, '');

const icons = {
  phone:
    'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z',
  whatsapp:
    'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 14.1c-.25.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a17 17 0 0 1-1.7-.7c-3-1.3-5-4.4-5.100-4.600-.2-.2-1.200-1.600-1.200-3.100s.800-2.200 1.050-2.500c.250-.300.600-.350.800-.350h.550c.200 0 .450-.050.700.550l.900 2.200c.100.200.100.400 0 .600l-.350.550-.500.550c-.150.150-.350.350-.150.700.200.350.900 1.450 1.900 2.350 1.300 1.150 2.400 1.500 2.750 1.700.350.150.550.150.750-.100l.850-1.050c.250-.300.450-.250.750-.150l2.150 1c.300.150.500.250.600.350.050.150.050.750-.200 1.450z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8.2L20 7.5V7H4v.5zM4 9.9V17h16V9.9l-8 5.7z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.800 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z',
  globe:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.900 6h-2.900a15.600 15.600 0 0 0-1.400-3.600A8 8 0 0 1 18.900 8zM12 4c.800 1.200 1.500 2.500 1.900 4h-3.800c.400-1.500 1.100-2.800 1.900-4zM4.300 14a8.200 8.200 0 0 1 0-4h3.400a16.500 16.500 0 0 0 0 4zm.800 2h2.900c.300 1.300.800 2.500 1.400 3.600A8 8 0 0 1 5.100 16zm2.900-8H5.100a8 8 0 0 1 4.300-3.600C8.800 5.500 8.300 6.700 8 8zm4 12c-.800-1.200-1.500-2.500-1.900-4h3.800c-.400 1.500-1.100 2.800-1.900 4zm2.300-6H9.700a14.700 14.700 0 0 1 0-4h4.600a14.700 14.700 0 0 1 0 4zm.300 5.600c.600-1.100 1.100-2.300 1.400-3.600h2.900a8 8 0 0 1-4.300 3.600zm1.700-5.600a16.500 16.500 0 0 0 0-4h3.400a8.200 8.200 0 0 1 0 4z',
  linkedin:
    'M4.980 3.500a2.500 2.500 0 1 1 0 5 2.500 2.500 0 0 1 0-5zM3 9.750h4V21H3zm6.500 0h3.800v1.550h.050c.550-1 1.850-1.850 3.650-1.850 3.900 0 4.500 2.400 4.500 5.550V21h-4v-5.300c0-1.250 0-2.900-1.750-2.900s-2.050 1.400-2.050 2.800V21h-4z'
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icons[name]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

function initialsOf(name) {
  const words = name.replace(/^CA\s+/i, '').replace(/[^A-Za-z\s]/g, '').split(/\s+/).filter(Boolean);
  return (words[0]?.[0] || '') + (words.length > 1 ? words[words.length - 1][0] : '');
}

function Shell({ children }) {
  return (
    <main className="cc">
      <div className="cc-card">{children}</div>
    </main>
  );
}

export default function Connect() {
  const { slug } = useParams();
  const person = slug ? findPerson(slug) : null;
  const missing = Boolean(slug) && !person;

  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  if (missing) {
    return (
      <Shell>
        <SEO title="Card not found | RJS & Co." path="/connect" />
        <div className="cc-avatar cc-avatar--mark">
          <img src={mark} alt="" />
        </div>
        <h1 className="cc-name">This card is not on file.</h1>
        <p className="cc-role">The link may be mistyped or out of date.</p>
        <Link className="cc-save" to="/connect">
          Contact the firm
        </Link>
      </Shell>
    );
  }

  const office = siteConfig.offices.find((entry) => entry.city === (person?.office || siteConfig.city));
  const email = person?.email || siteConfig.email;
  const whatsapp = person?.whatsapp || siteConfig.whatsappNumber;
  const path = person ? `/connect/${person.slug}` : '/connect';
  const name = person ? person.name : siteConfig.firmName;
  const greeting = `Hello ${name},`;
  const site = siteConfig.domain.replace(/^https?:\/\//, '');

  const rows = [
    person?.phone && { icon: 'phone', label: 'Call me', value: person.phone, href: `tel:+${digits(person.phone)}` },
    {
      icon: 'whatsapp',
      label: person?.whatsapp ? 'WhatsApp me' : 'WhatsApp the Support Desk',
      value: person?.whatsapp && person.whatsapp !== siteConfig.whatsappNumber ? `+${person.whatsapp}` : siteConfig.whatsappLabel,
      href: `https://wa.me/${whatsapp}?text=${encodeURIComponent(greeting)}`,
      external: true
    },
    { icon: 'mail', label: person ? 'Email me' : 'Email us', value: email, href: `mailto:${email}` },
    office && {
      icon: 'pin',
      label: person ? 'Visit my office' : 'Visit our office',
      value: `${office.lines[0]}, ${office.city}`,
      href: officeMapHref(office),
      external: true
    },
    person?.linkedin && {
      icon: 'linkedin',
      label: 'Connect on LinkedIn',
      value: person.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '').replace(/\/$/, ''),
      href: person.linkedin,
      external: true
    },
    { icon: 'globe', label: 'Visit our website', value: site, to: '/' }
  ].filter(Boolean);

  return (
    <Shell>
      <SEO
        title={person ? `${name} | ${siteConfig.firmName}, ${siteConfig.tagline}` : `${siteConfig.firmName} | ${siteConfig.tagline}`}
        description={`Contact details for ${name}, ${siteConfig.firmName}, ${siteConfig.tagline}.`}
        path={path}
      />

      {person && (
        <div className="cc-brand">
          <span className="cc-brand__mark">
            <img src={mark} alt="" />
          </span>
          <span className="cc-brand__text">
            <strong>{siteConfig.firmName}</strong>
            <span>{siteConfig.tagline}</span>
          </span>
        </div>
      )}

      {person ? (
        <div className="cc-avatar">
          {person.photo ? (
            <img className="cc-photo" src={person.photo} alt={`Portrait of ${person.name}`} />
          ) : (
            <span className="cc-initials" aria-hidden="true">
              {initialsOf(person.name)}
            </span>
          )}
          <span className="cc-badge">
            <img src={caIndia} alt="CA India" />
          </span>
        </div>
      ) : (
        <div className="cc-avatar cc-avatar--mark">
          <img src={mark} alt="" />
        </div>
      )}

      <h1 className="cc-name">{name}</h1>
      <p className="cc-role">
        {person ? (
          <>
            {(person.role || person.qualifications) && (
              <>
                {[person.role, person.qualifications].filter(Boolean).join(', ')} <span aria-hidden="true">|</span>{' '}
              </>
            )}
            <strong>{siteConfig.firmName}</strong>
          </>
        ) : (
          `${siteConfig.tagline}, ${siteConfig.state}`
        )}
      </p>

      <a
        className="cc-save"
        href={vcfPath(person)}
      >
        Save Contact
      </a>
      {isIOS && <p className="cc-hint">On iPhone, scroll to the bottom of the contact and tap Create New Contact.</p>}

      <ul className="cc-rows">
        {rows.map((row) => {
          const body = (
            <>
              <span className="cc-row__icon">
                <Icon name={row.icon} />
              </span>
              <span className="cc-row__text">
                <span className="cc-row__label">{row.label}</span>
                <span className="cc-row__value">{row.value}</span>
              </span>
            </>
          );
          return (
            <li key={row.label}>
              {row.to ? (
                <Link className="cc-row" to={row.to}>
                  {body}
                </Link>
              ) : (
                <a
                  className="cc-row"
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {body}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <p className="cc-foot">
        {siteConfig.firmName} · {siteConfig.tagline}
      </p>
    </Shell>
  );
}
