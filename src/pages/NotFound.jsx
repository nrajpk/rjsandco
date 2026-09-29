import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { ArrowIcon, PageHead, Sheet } from '../components/Report.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | RJS & Co." description="This page does not exist on the RJS & Co. website." path="/404" />
      <Sheet label="Page not found">
        <PageHead
          note="Error 404"
          title="This page is not on file."
          lead="The address may be mistyped, or the page may have moved. Start again from the home page or the practice."
        >
          <div className="actions">
            <Link to="/" className="btn btn-primary">
              Go to the home page
              <ArrowIcon />
            </Link>
            <Link to="/services" className="text-link">
              See the practice
            </Link>
          </div>
        </PageHead>
      </Sheet>
    </>
  );
}
