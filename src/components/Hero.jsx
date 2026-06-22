import { Link } from 'react-router-dom';
import heroIllustration from '../assets/hero-illustration.svg';

export default function Hero({
  eyebrow,
  title,
  description,
  primaryLabel = 'Book a Consultation',
  primaryPath = '/contact',
  secondaryLabel,
  secondaryPath,
  showCard = true
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

        <div className="hero-visual" aria-label="RJS & Co. advisory illustration">
          <img src={heroIllustration} alt="Financial compliance and advisory dashboard illustration" />
          {showCard && (
            <div className="hero-card" aria-label="Consultation prompt">
              <span>Need help with tax, GST, audit, or ROC?</span>
              <strong>Share your requirement and get a clear next step.</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

