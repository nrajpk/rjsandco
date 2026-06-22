import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-initial" aria-hidden="true">
          {service.shortTitle.slice(0, 2)}
        </span>
        <h3>{service.title}</h3>
      </div>
      <p>{service.excerpt}</p>
      <Link to={`/services/${service.slug}`} className="text-link" aria-label={`Learn more about ${service.title}`}>
        Learn more
      </Link>
    </article>
  );
}

