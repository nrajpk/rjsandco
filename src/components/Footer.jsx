import { Link } from 'react-router-dom';
import { services } from '../data/services.js';
import { siteConfig, whatsappHref } from '../data/siteConfig.js';
import { firmFacts } from '../data/firmFacts.js';

export default function Footer() {
  const year = Math.max(Number(siteConfig.copyrightStartYear), new Date().getFullYear());

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__name">RJS &amp; Co.</p>
            <p className="site-footer__role">Chartered Accountants</p>
            <div className="site-footer__rule" />
            <address>
              {siteConfig.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          <div>
            <h2>Practice</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>The firm</h2>
            <ul>
              <li><Link to="/about">About the firm</Link></li>
              <li><Link to="/industries">Who we act for</Link></li>
              <li><Link to="/resources">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <h2 style={{ marginTop: 26 }}>Portals</h2>
            <ul>
              {siteConfig.externalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Write to us</h2>
            <ul>
              <li><a href={siteConfig.emailHref}>{siteConfig.email}</a></li>
              {firmFacts.phone && <li><a href={firmFacts.phoneHref}>{firmFacts.phone}</a></li>}
              <li>
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp {siteConfig.whatsappLabel}
                </a>
              </li>
              <li>
                <a href={siteConfig.mapHref} target="_blank" rel="noreferrer">
                  {siteConfig.mapLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__note">
            © {year} RJS &amp; Co., Chartered Accountants. ICAI FRN {firmFacts.frn}. This website gives general
            information about the firm under ICAI guidelines. It is not professional advice or a solicitation of work.
          </p>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
