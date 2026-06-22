import { siteConfig } from '../data/siteConfig.js';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hello RJS & Co., I need help with a tax, compliance, or advisory matter.');
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <a className="whatsapp-button" href={href} target="_blank" rel="noreferrer" aria-label="Chat with RJS & Co. on WhatsApp">
      <span aria-hidden="true">WA</span>
    </a>
  );
}

