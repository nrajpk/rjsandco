import { Link } from 'react-router-dom';

export default function Hero({
  eyebrow,
  title,
  description,
  primaryLabel = 'Book a Consultation',
  primaryPath = '/contact',
  secondaryLabel,
  secondaryPath,
  sideEyebrow,
  sideNote,
  sideItems = []
}) {
  return (
    <section className="hero section-lg">
      <div className="container hero-grid">
        <div className="hero-content">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="hero-text">{description}</p>
          <div className="hero-actions">
            <Link to={primaryPath} className="btn btn-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryPath && (
              <Link to={secondaryPath} className="btn btn-secondary">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>

        {sideItems.length > 0 && (
          <div className="hero-panel" aria-label="Service overview">
            {(sideEyebrow || sideNote) && (
              <div className="hero-panel-top">
                {sideEyebrow && <span>{sideEyebrow}</span>}
                {sideNote && <strong>{sideNote}</strong>}
              </div>
            )}
            <ul className="hero-index-list">
              {sideItems.map((item) => (
                <li key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
