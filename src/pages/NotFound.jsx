import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | RJS & Co."
        description="The page you are looking for could not be found on the RJS & Co. website."
        path="/404"
      />
      <section className="section not-found">
        <div className="container narrow">
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <p>The page may have moved, or the URL may be incorrect.</p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-primary">Go home</Link>
            <Link to="/services" className="btn btn-secondary">View services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

