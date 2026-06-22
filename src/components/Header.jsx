import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navLinks, siteConfig } from '../data/siteConfig.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container header-inner">
        <Link to="/" className="logo-link" aria-label="RJS & Co. home">
          <img src={logo} alt="RJS & Co. Chartered Accountants logo" className="site-logo" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to={siteConfig.consultationPath} className="btn btn-primary nav-cta">
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

