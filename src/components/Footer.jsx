import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { services } from '../data/services.js';
import { siteConfig } from '../data/siteConfig.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="RJS & Co. home">
            <img src={logo} alt="RJS & Co. logo" className="footer-logo" />
          </Link>
          <p>{siteConfig.description}</p>
          <p className="footer-note">
            Professional guidance for tax, audit, accounting, compliance, and business advisory matters.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Who We Serve</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Core Services</h2>
          <ul className="footer-links">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <address className="footer-contact">
            <span>{siteConfig.address}</span>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            <span>{siteConfig.mapLabel}</span>
          </address>
          <div className="external-links" aria-label="Important external links">
            {siteConfig.externalLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {Math.max(Number(siteConfig.copyrightStartYear), year)} {siteConfig.firmName}. All rights reserved.</p>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

