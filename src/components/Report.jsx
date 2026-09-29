// Document primitives: sheets on the desk, clauses with marginal notes,
// ruled credential fields, and small inline icons.

export function Sheet({ children, page, total, className = '', label, ...rest }) {
  return (
    <section className={`sheet ${className}`} aria-label={label} {...rest}>
      <div className="sheet__body">{children}</div>
      {page && (
        <footer className="folio" aria-hidden="true">
          <span>RJS &amp; Co. · Chartered Accountants</span>
          <span>
            Page {page} of {total}
          </span>
        </footer>
      )}
    </section>
  );
}

// A report section. With `title`, the section gets a Caslon heading in the
// body and the margin carries its number and a short gloss. Without it, the
// marginal note is the section heading. `quietOnMobile` keeps a marginal note
// for screen readers but hides it on phones, where it would sit above another
// heading like an eyebrow.
export function Clause({ note, sub, title, num, children, id, headingLevel = 2, quietOnMobile = false }) {
  const Heading = `h${headingLevel}`;

  if (title) {
    return (
      <div className="clause clause--titled" id={id}>
        <p className="clause__note" aria-hidden="true">
          {num && <span className="clause__num">{num}</span>}
          {sub && <small>{sub}</small>}
        </p>
        <div className="clause__body">
          <Heading className="clause__title">
            {num && <span className="clause__inline-num">{num}. </span>}
            {title}
          </Heading>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`clause ${quietOnMobile ? 'clause--quiet' : ''}`} id={id}>
      <Heading className="clause__note">
        {note}
        {sub && <small>{sub}</small>}
      </Heading>
      <div className="clause__body">{children}</div>
    </div>
  );
}

export function Fields({ rows, className = '' }) {
  return (
    <dl className={`fields ${className}`}>
      {rows
        .filter((row) => row.value)
        .map((row) => (
          <div className="fields__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
    </dl>
  );
}

export function ArrowIcon({ className = 'btn__arrow' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.04 3.5c-6.86 0-12.44 5.58-12.44 12.44 0 2.22.59 4.35 1.71 6.23L3.5 28.5l6.48-1.7a12.35 12.35 0 0 0 6.06 1.58c6.86 0 12.44-5.58 12.44-12.44S22.9 3.5 16.04 3.5Zm0 22.76c-1.93 0-3.81-.54-5.44-1.55l-.39-.24-3.84 1.01 1.03-3.75-.25-.39a10.25 10.25 0 0 1-1.43-5.4c0-5.69 4.63-10.32 10.32-10.32 5.69 0 10.32 4.63 10.32 10.32 0 5.69-4.63 10.32-10.32 10.32Zm5.66-7.73c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"
      />
    </svg>
  );
}

export function PageHead({ note, title, lead, crumbs, children }) {
  return (
    <div className="page-head">
      <p className="clause__note" aria-hidden="true">
        {note}
      </p>
      <div>
        {crumbs}
        <h1>{title}</h1>
        {lead && <p className="page-head__lead">{lead}</p>}
        {children}
      </div>
    </div>
  );
}
