import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { whatsappHref } from '../data/siteConfig.js';
import { WhatsAppIcon } from './Report.jsx';

// Quiet Support Desk tab (WhatsApp). Appears once the visitor scrolls past the first sheet,
// and stays out of the way on the contact page, which lists WhatsApp itself.
export default function WhatsAppButton() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <a
      className={`support-tab ${visible ? '' : 'is-hidden'}`}
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Message the Support Desk on WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon />
      <span>Support Desk</span>
    </a>
  );
}
