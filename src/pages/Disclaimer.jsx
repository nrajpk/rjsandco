import SEO from '../components/SEO.jsx';
import { Clause, PageHead, Sheet } from '../components/Report.jsx';

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | RJS & Co."
        description="Website disclaimer for RJS & Co.: general information, limits of professional advice, and non-solicitation under ICAI guidelines."
        path="/disclaimer"
      />

      <Sheet label="Disclaimer">
        <PageHead note="Disclaimer" title="Read this before relying on the website." />
        <Clause note="Terms">
          <div className="legal prose">
            <h2>General information only</h2>
            <p>
              This website gives general information. It is not professional advice on any specific tax, audit,
              accounting, legal or compliance matter.
            </p>

            <h2>No engagement by browsing</h2>
            <p>
              Visiting this website, reading it or sending a general enquiry does not create a client relationship. An
              engagement begins only when both sides sign an engagement letter.
            </p>

            <h2>Non-solicitation</h2>
            <p>
              The Institute of Chartered Accountants of India restricts advertising by its members. This website describes
              RJS &amp; Co. and its services for visitors who seek that information. It does not solicit work.
            </p>

            <h2>Accuracy and changes in law</h2>
            <p>
              Tax, GST and company law change often. Take advice on the current law and your own facts before you act.
            </p>

            <h2>External links</h2>
            <p>
              We link to government portals and other sites for convenience. RJS &amp; Co. is not responsible for their
              content, availability or policies.
            </p>
          </div>
        </Clause>
      </Sheet>
    </>
  );
}
