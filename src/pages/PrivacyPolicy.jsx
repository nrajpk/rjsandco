import SEO from '../components/SEO.jsx';
import { Clause, PageHead, Sheet } from '../components/Report.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | RJS & Co." description="How RJS & Co. handles information from website visitors and enquiries." path="/privacy-policy" />

      <Sheet label="Privacy policy">
        <PageHead note="Privacy" title="How we handle what you send us." />
        <Clause note="Policy">
          <div className="legal prose">
            <h2>What we collect</h2>
            <p>
              When you use the enquiry form, your email app sends us your name, phone number, email address, the desk you
              chose and your message. The website itself does not store any of it.
            </p>

            <h2>Why we use it</h2>
            <p>
              We use it to reply to your enquiry, describe our services and keep a record of our correspondence where
              the law or our professional rules require one.
            </p>

            <h2>Sensitive records</h2>
            <p>
              Please do not send tax, accounting or identity documents through the website or an unverified channel. We
              will agree a secure way to receive them once we take on your matter.
            </p>

            <h2>Third-party services</h2>
            <p>
              The website loads fonts from Google and embeds a Google map. WhatsApp and your email provider handle
              messages you send through them. Their own privacy policies apply.
            </p>

            <h2>Contact</h2>
            <p>
              For any privacy question, write to <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
            </p>
          </div>
        </Clause>
      </Sheet>
    </>
  );
}
