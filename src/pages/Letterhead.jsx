import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import caIndia from '../assets/ca-india.webp';
import lockup from '../assets/lockup.webp';
import monogram from '../assets/monogram-large.webp';
import band from '../assets/band.png';
import mark from '../assets/logo-header.webp';
import { firmFacts } from '../data/firmFacts.js';
import { siteConfig } from '../data/siteConfig.js';
import { formatReportDate } from '../data/dueDates.js';
import '../styles/letterhead.css';

// Internal tool: type a letter on the firm's letterhead and print it.
// The draft is kept in this browser only (localStorage) until "New letter".

const DRAFT_KEY = 'rjs-letterhead-draft-v1';

const escapeHtml = (value) =>
  String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

function fyLabel(date = new Date()) {
  const year = date.getFullYear();
  const start = date.getMonth() >= 3 ? year : year - 1;
  return `${start}-${String((start + 1) % 100).padStart(2, '0')}`;
}

function blankLetter(partner) {
  return `
    <p class="lh-refline"><span><span class="lh-label">Ref:</span> RJS/${fyLabel()}/[000]</span><span><span class="lh-label">Date:</span> <span data-field="date">${formatReportDate()}</span></span></p>
    <p class="lh-to">To<br>[Name of the recipient]<br>[Designation]<br>[Organisation]<br>[Address]<br>[City, State, PIN]</p>
    <p class="lh-subject">Subject: [Subject of the letter]</p>
    <p>Dear [Sir / Madam],</p>
    <p>[First paragraph of the letter.]</p>
    <p>[Further paragraphs as needed.]</p>
    <div class="lh-signoff">
      <p>Yours faithfully,</p>
      <p class="lh-for"><strong>For RJS &amp; Co.</strong><br><span class="lh-muted">Chartered Accountants</span><br><span class="lh-muted lh-small">ICAI FRN ${escapeHtml(firmFacts.frn)}</span></p>
      <p class="lh-signspace"><br></p>
      <p class="lh-signer"><strong data-field="partner">${escapeHtml(partner.title)}</strong><br><span class="lh-muted">Partner</span><br><span class="lh-muted lh-small">M. No. ${escapeHtml(partner.membershipNo || '[000000]')}</span><br><span class="lh-muted lh-small">UDIN: [where applicable]</span><br><span class="lh-muted lh-small">Place: Kottayam</span></p>
    </div>`;
}

function readDraft() {
  try {
    return window.localStorage.getItem(DRAFT_KEY);
  } catch {
    return null;
  }
}

function writeDraft(html) {
  try {
    if (html === null) window.localStorage.removeItem(DRAFT_KEY);
    else window.localStorage.setItem(DRAFT_KEY, html);
  } catch {
    /* storage unavailable: the letter still works for this visit */
  }
}

function PinIcon() {
  return (
    <svg className="lh-pin" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 5.2c-2.6 0-4.6 2-4.6 4.5 0 3.3 4.6 8.3 4.6 8.3s4.6-5 4.6-8.3c0-2.5-2-4.5-4.6-4.5Zm0 6.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" fill="currentColor" />
    </svg>
  );
}

function LetterheadHeader() {
  const { website, websiteHref, email, phone } = siteConfig.letterhead;
  return (
    <header className="lh-head">
      <div className="lh-head__row">
        <img className="lh-ca" src={caIndia} alt="CA India" />
        <img className="lh-lockup" src={lockup} alt="RJS & Co., Chartered Accountants" />
      </div>
      <div className="lh-head__row lh-head__meta">
        <span>ICAI Firm Registration No. {firmFacts.frn}</span>
        <span>
          <a href={websiteHref}>{website}</a>
          <i>|</i>
          <a href={`mailto:${email}`}>{email}</a>
          <i>|</i>
          <span>{phone}</span>
        </span>
      </div>
      <div className="lh-head__rule" />
    </header>
  );
}

function Band() {
  return <img className="lh-band" src={band} alt="" aria-hidden="true" />;
}

// Page 1 footer: the three offices.
function LetterheadFooter() {
  return (
    <footer className="lh-foot">
      <div className="lh-foot__offices">
        {siteConfig.offices.map((office) => (
          <address key={office.city}>
            <span className="lh-foot__city">
              <PinIcon />
              {office.city}
            </span>
            {office.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        ))}
      </div>
      <Band />
    </footer>
  );
}

// Pages 2 onward (print only): slim running header and footer, like the Word letterhead.
function ContinuationHeader() {
  return (
    <div className="lh-cont-head" aria-hidden="true">
      <img src={mark} alt="" />
      <span className="lh-cont-head__name">RJS &amp; Co.</span>
      <span className="lh-cont-head__role">Chartered Accountants</span>
    </div>
  );
}

function ContinuationFooter() {
  return (
    <div className="lh-cont-foot" aria-hidden="true">
      <p>
        <b>Offices</b>
        {siteConfig.offices.map((office) => office.city).join('  ·  ')}
      </p>
      <p>ICAI Firm Registration No. {firmFacts.frn}</p>
      <Band />
    </div>
  );
}

export default function Letterhead() {
  const editorRef = useRef(null);
  const saveTimer = useRef(null);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [savedAt, setSavedAt] = useState(null);

  useEffect(() => {
    document.title = 'Letterhead | RJS & Co.';
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.innerHTML = readDraft() || blankLetter(firmFacts.partners[0]);
  }, []);

  function scheduleSave() {
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      writeDraft(editorRef.current.innerHTML);
      setSavedAt(new Date());
    }, 500);
  }

  function handlePaste(event) {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  }

  function choosePartner(event) {
    const index = Number(event.target.value);
    setPartnerIndex(index);
    const partner = firmFacts.partners[index];
    const field = editorRef.current?.querySelector('[data-field="partner"]');
    if (field) {
      field.textContent = partner.title;
      scheduleSave();
    }
  }

  function newLetter() {
    if (!window.confirm('Start a new letter? The current text on this page will be cleared.')) return;
    writeDraft(null);
    editorRef.current.innerHTML = blankLetter(firmFacts.partners[partnerIndex]);
    setSavedAt(null);
    editorRef.current.focus();
  }

  return (
    <div className="lh-app">
      <div className="lh-toolbar" role="toolbar" aria-label="Letterhead tools">
        <div className="lh-toolbar__title">
          <Link to="/">RJS &amp; Co.</Link>
          <span>Letterhead</span>
        </div>
        <p className="lh-toolbar__hint">
          Click anywhere on the sheet to type. The draft stays in this browser until you start a new letter.
          {savedAt && <em> Saved {savedAt.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })}.</em>}
        </p>
        <div className="lh-toolbar__actions">
          <label className="lh-select">
            <span>Signing partner</span>
            <select value={partnerIndex} onChange={choosePartner}>
              {firmFacts.partners.map((partner, index) => (
                <option key={partner.name} value={index}>
                  {partner.title}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="lh-btn lh-btn--quiet" onClick={newLetter}>
            New letter
          </button>
          <button type="button" className="lh-btn" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>

      <main className="lh-desk">
        <div className="lh-sheet">
          <img className="lh-watermark" src={monogram} alt="" aria-hidden="true" />
          <ContinuationHeader />
          <ContinuationFooter />
          <LetterheadHeader />
          {/* The spacer rows repeat on every printed page, keeping text clear of the
              running header and footer. They collapse on screen. */}
          <table className="lh-flow" role="presentation">
            <thead>
              <tr>
                <td>
                  <div className="lh-space-head" />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="lh-first-space" aria-hidden="true" />
                  <div
                    ref={editorRef}
                    className="lh-letter"
                    contentEditable
                    suppressContentEditableWarning
                    spellCheck
                    role="textbox"
                    aria-multiline="true"
                    aria-label="Letter text"
                    onInput={scheduleSave}
                    onPaste={handlePaste}
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <div className="lh-space-foot" />
                </td>
              </tr>
            </tfoot>
          </table>
          <LetterheadFooter />
        </div>
        <p className="lh-note">
          Print from Chrome or Edge on A4. Page 1 prints the full letterhead; pages 2 onward print a slim header and
          footer. The watermark and colour band print on every page.
        </p>
      </main>
    </div>
  );
}
