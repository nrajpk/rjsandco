import { Link } from 'react-router-dom';

export default function CTASection({
  eyebrow = 'Talk to RJS & Co.',
  title = 'Need clarity on a tax, compliance, or business finance matter?',
  description = 'Share your requirement and the team will guide you on the practical next step, documents needed, and expected scope.',
  primaryLabel = 'Book a Consultation',
  primaryPath = '/contact',
  secondaryLabel = 'View Services',
  secondaryPath = '/services'
}) {
  return (
    <section className="cta-section section">
      <div className="container cta-box">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Link to={primaryPath} className="btn btn-primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryPath && (
            <Link to={secondaryPath} className="btn btn-outline-light">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

