import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <h3>{service.title}</h3>
      <p>{service.excerpt}</p>
      <Link to={`/services/${service.slug}`} className="text-link" aria-label={`Learn more about ${service.title}`}>
        Learn more
      </Link>
    </article>
  );
}
