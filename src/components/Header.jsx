import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo-header.webp';
import { navLinks, siteConfig } from '../data/siteConfig.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    function handleKey(event) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <header className={`letterhead ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="letterhead__inner">
        <Link to="/" className="letterhead__logo" aria-label="RJS & Co., Chartered Accountants, home">
          <img src={logo} alt="" width="74" height="48" />
          <span className="wordmark" aria-hidden="true">
            <span className="wordmark__name">RJS &amp; Co.</span>
            <span className="wordmark__role">Chartered Accountants</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? 'Close' : 'Menu'}
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`letterhead__nav ${isOpen ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
          <Link to={siteConfig.consultationPath} className="btn btn-primary btn-small letterhead__cta">
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
