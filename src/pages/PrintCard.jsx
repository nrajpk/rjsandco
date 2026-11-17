import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import qrcode from 'qrcode-generator';
import caIndia from '../assets/ca-india.webp';
import monogram from '../assets/monogram-large.webp';
import { findPerson, people } from '../data/people.js';
import { officeCities, siteConfig } from '../data/siteConfig.js';
import '../styles/print-card.css';

// Internal tool: the printed business card for a person in src/data/people.js.
// /rjs/card/<slug> shows the front and back; Print saves a two-page PDF at
// 96 x 60 mm (a 90 x 54 mm card plus 3 mm bleed on every side) for the printer.
// The QR on the back opens that person's /connect card.

// Background texture on the front: 'dots', 'stripes', 'grid' or 'none'.
// Add ?pattern=<name> to the URL to preview another one.
const FRONT_PATTERN = 'dots';

const site = siteConfig.domain.replace(/^https?:\/\//, '');

// QR as plain vector modules: no logo in the middle, so it scans easily at card size.
function QrCode({ value }) {
  const { size, path } = useMemo(() => {
    const qr = qrcode(0, 'M');
    qr.addData(value);
    qr.make();
    const count = qr.getModuleCount();
    let d = '';
    for (let row = 0; row < count; row += 1) {
      for (let col = 0; col < count; col += 1) {
        if (qr.isDark(row, col)) d += `M${col} ${row}h1v1h-1z`;
      }
    }
    return { size: count, path: d };
  }, [value]);

  return (
    <svg className="pc-qr" viewBox={`-2 -2 ${size + 4} ${size + 4}`} role="img" aria-label={`QR code for ${value}`}>
      <rect x="-2" y="-2" width={size + 4} height={size + 4} rx="1.2" fill="#fff" />
      <path d={path} fill="#0b2640" shapeRendering="crispEdges" />
    </svg>
  );
}

// Very faint background texture for the front, drawn as vector so it prints
// crisply. Units are mm on the 96 x 60 sheet. Each one fades out towards the
// left so it never competes with the name.
//   dots     a dot grid, strongest at the right edge
//   stripes  fine 45-degree pinstripes
//   grid     ledger-style squares, strongest in the top right corner
const fade = (x) => Math.max(0, (x - 30) / 66); // 0 at x=30mm, 1 at the right edge

// back: mirrored (strongest at the left edge) and drawn in white for the navy side.
function Pattern({ kind, back = false }) {
  const marks = [];
  if (kind === 'dots') {
    for (let x = 31; x <= 96; x += 1.8) {
      for (let y = 0.9; y < 60; y += 1.8) {
        marks.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="0.13" stroke="none" opacity={(fade(x) * 0.3).toFixed(3)} />);
      }
    }
  } else if (kind === 'stripes') {
    for (let c = 34; c <= 160; c += 1.5) {
      // line x + y = c, clipped to the sheet by the viewBox
      marks.push(
        <line key={c} x1={c} y1="0" x2={c - 60} y2="60" strokeWidth="0.09" opacity={(fade(Math.min(96, c - 30)) * 0.2).toFixed(3)} />
      );
    }
  } else if (kind === 'grid') {
    for (let x = 32; x <= 96; x += 2.4) {
      marks.push(<line key={`v${x}`} x1={x} y1="0" x2={x} y2="60" strokeWidth="0.08" opacity={(fade(x) * 0.2).toFixed(3)} />);
    }
    for (let y = 1.2; y < 60; y += 2.4) {
      marks.push(<line key={`h${y}`} x1="30" y1={y} x2="96" y2={y} strokeWidth="0.08" opacity={(0.16 * (1 - y / 60)).toFixed(3)} />);
    }
  } else {
    return null;
  }
  return (
    <svg className={`pc-pattern${back ? ' pc-pattern--back' : ''}`} viewBox="0 0 96 60" aria-hidden="true">
      {kind === 'grid' && (
        <defs>
          <linearGradient id="pc-grid-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      <g fill={back ? '#fff' : '#103a5d'} stroke={back ? '#fff' : '#103a5d'} opacity={back ? 0.75 : 1}>
        {marks}
      </g>
      {kind === 'grid' && !back && <rect x="30" y="0" width="40" height="60" fill="url(#pc-grid-fade)" />}
    </svg>
  );
}

const icons = {
  phone:
    'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8.2L20 7.5V7H4v.5zM4 9.9V17h16V9.9l-8 5.7z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'
};

function Icon({ name }) {
  return (
    <svg className="pc-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icons[name]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export default function PrintCard() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const person = findPerson(slug) || people[0];
  const [guides, setGuides] = useState(true);
  const [query] = useSearchParams();
  const pattern = query.get('pattern') || FRONT_PATTERN;

  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    document.title = `Business card: ${person.name} | RJS & Co.`;
    return () => robots.remove();
  }, [person.name]);

  const office = siteConfig.offices.find((entry) => entry.city === (person.office || siteConfig.city));
  const number = person.phone || person.whatsapp;
  const phone =
    number && number === siteConfig.whatsappNumber ? siteConfig.whatsappLabel : person.phone || (number && `+${number}`);
  const cardPath = `/connect/${person.slug}`;
  // The QR uses the www address the site is served from, so a scan skips the redirect.
  const cardUrl = `${siteConfig.domain.replace('://', '://www.')}${cardPath}`;

  return (
    <div className={`pc-app${guides ? ' pc-app--guides' : ''}`}>
      <header className="pc-bar">
        <strong>Business card</strong>
        <label>
          Person
          <select value={person.slug} onChange={(event) => navigate(`/rjs/card/${event.target.value}`)}>
            {people.map((entry) => (
              <option key={entry.slug} value={entry.slug}>
                {entry.name}
              </option>
            ))}
          </select>
        </label>
        <label className="pc-check">
          <input type="checkbox" checked={guides} onChange={(event) => setGuides(event.target.checked)} />
          Show trim line
        </label>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
        <span className="pc-note">
          90 × 54 mm card, 3 mm bleed. In the print dialog choose no margins and turn on background graphics.
        </span>
      </header>

      <main className="pc-stage">
        <section className="pc-sheet pc-front" aria-label="Front">
          <Pattern kind={pattern} />
          {/* The letterhead's colour band: saffron, navy, green. */}
          <div className="pc-band" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="pc-safe">
            <div className="pc-top">
              <div className="pc-brand">
                <img className="pc-logo" src={monogram} alt="RJS" />
                <span>
                  <strong>{siteConfig.firmName}</strong>
                  <em>{siteConfig.tagline}</em>
                </span>
              </div>
              <img className="pc-ca" src={caIndia} alt="CA India" />
            </div>
            <div className="pc-mid">
              <div className="pc-id">
                <h1 className="pc-name">{person.name}</h1>
                {(person.role || person.qualifications) && (
                  <p className="pc-role">{[person.role, person.qualifications].filter(Boolean).join(', ')}</p>
                )}
              </div>
              <ul className="pc-contact">
                {phone && (
                  <li>
                    <Icon name="phone" />
                    {phone}
                  </li>
                )}
                <li>
                  <Icon name="mail" />
                  {person.email || siteConfig.email}
                </li>
                {office && (
                  <li>
                    <Icon name="pin" />
                    <span>
                      {office.lines[0].replace(/^\d+(st|nd|rd|th) Floor,\s*/i, '')},
                      <br />
                      {office.city}, {siteConfig.state}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <p className="pc-base">
              <span>{site}</span>
              <i />
              <span className="pc-cities">{officeCities.join(' · ')}</span>
            </p>
          </div>
        </section>

        <section className="pc-sheet pc-back" aria-label="Back">
          <Pattern kind={pattern} back />
          <div className="pc-safe">
            <div className="pc-invite">
              <span className="pc-rule" />
              <h2>
                Let’s
                <br />
                Connect
              </h2>
            </div>
            <i className="pc-divider" />
            <div className="pc-scan">
              <div className="pc-qr-frame">
                <i className="pc-corner pc-corner--tl" />
                <i className="pc-corner pc-corner--tr" />
                <i className="pc-corner pc-corner--bl" />
                <i className="pc-corner pc-corner--br" />
                <QrCode value={cardUrl} />
              </div>
              <p className="pc-url">Scan to save contact</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
