import { siteConfig } from '../data/siteConfig.js';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hello RJS & Co., I need help with a tax, compliance, or advisory matter.');
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <a className="whatsapp-button" href={href} target="_blank" rel="noreferrer" aria-label="Chat with RJS & Co. on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.04 3.5c-6.86 0-12.44 5.58-12.44 12.44 0 2.22.59 4.35 1.71 6.23L3.5 28.5l6.48-1.7a12.35 12.35 0 0 0 6.06 1.58c6.86 0 12.44-5.58 12.44-12.44S22.9 3.5 16.04 3.5Zm0 22.76c-1.93 0-3.81-.54-5.44-1.55l-.39-.24-3.84 1.01 1.03-3.75-.25-.39a10.25 10.25 0 0 1-1.43-5.4c0-5.69 4.63-10.32 10.32-10.32 5.69 0 10.32 4.63 10.32 10.32 0 5.69-4.63 10.32-10.32 10.32Zm5.66-7.73c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
    </a>
  );
}
