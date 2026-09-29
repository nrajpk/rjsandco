import { Link } from 'react-router-dom';
import { keyMatters } from '../data/keyMatters.js';
import { serviceCategories, services } from '../data/services.js';
import { formatReportDate, upcomingDueDates } from '../data/dueDates.js';
import { officeCities, siteConfig, whatsappHref } from '../data/siteConfig.js';
import { firmFacts } from '../data/firmFacts.js';
import PencilTick from './PencilTick.jsx';
import { ArrowIcon, WhatsAppIcon } from './Report.jsx';

export function KeyMatters({ items = keyMatters }) {
  return (
    <table className="kam">
      <caption className="visually-hidden">Situations clients bring to the firm, and how each is handled</caption>
      <thead>
        <tr>
          <th scope="col">The matter</th>
          <th scope="col">How we address it</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.matter}>
            <th scope="row">
              <span className="kam__matter">
                <PencilTick />
                <span>{item.matter}</span>
              </span>
            </th>
            <td>
              <p className="kam__response">{item.response}</p>
              <p className="kam__desk">
                <Link className="text-link" to={`/services/${item.slug}`}>
                  {item.desk}
                  <ArrowIcon className="" />
                </Link>
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ServiceSchedule({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <div className="schedule">
      {serviceCategories.map((category) => {
        const only = category.slugs.length === 1 ? services.find((item) => item.slug === category.slugs[0]) : null;
        const repeatsRow = only && only.title === category.name;
        return (
        <section className={`schedule__group ${repeatsRow ? 'is-single' : ''}`} key={category.name} aria-label={category.name}>
          {!repeatsRow && (
            <Heading>
              {category.name}
              <span>{category.description}</span>
            </Heading>
          )}
          <ul className="schedule__rows">
            {category.slugs.map((slug) => {
              const service = services.find((item) => item.slug === slug);
              if (!service) return null;
              return (
                <li key={slug}>
                  <Link className="schedule__row" to={`/services/${slug}`}>
                    <span className="schedule__title">{service.title}</span>
                    <span className="schedule__desc">{service.excerpt}</span>
                    <ArrowIcon className="schedule__arrow" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        );
      })}
    </div>
  );
}

const shortMonth = (date) => date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

function daysLabel(days) {
  if (days === 0) return 'Due today';
  if (days === 1) return 'Tomorrow';
  return `In ${days} days`;
}

export function DueDates({ count = 6 }) {
  const today = new Date();
  const items = upcomingDueDates(today, count);

  return (
    <div>
      <p className="today-line">
        <span className="today-line__dot" aria-hidden="true" />
        <span>
          Today is <strong>{formatReportDate(today)}</strong>. The next {items.length} statutory dates:
        </span>
      </p>
      <ol className="dues">
        {items.map((item) => (
          <li className={`dues__item ${item.daysAway === items[0].daysAway ? 'is-next' : ''}`} key={`${item.title}-${item.date.toISOString()}`}>
            <time dateTime={item.date.toISOString().slice(0, 10)}>
              <span className="dues__date">{item.date.getDate()}</span>
              <span className="dues__month">{shortMonth(item.date)}</span>
            </time>
            <p className="dues__title">{item.title}</p>
            <p className="dues__detail">{item.detail}</p>
            <span className="dues__away">{daysLabel(item.daysAway)}</span>
          </li>
        ))}
      </ol>
      <p className="footnote">
        Dates as prescribed under the Income-tax Act, GST law and the Companies Act. The government extends some of them
        by notification; check with us before relying on a date for a specific filing.
      </p>
    </div>
  );
}

export function Closing({
  statement = 'Tell us what the matter is and when it is due.',
  lead = 'We reply with the likely scope, the documents we need and a fee estimate. If a notice or a deadline started this, mention it in your message.'
}) {
  return (
    <div className="closing">
      <div>
        <p className="statement">{statement}</p>
        <p className="prose" style={{ marginTop: 20 }}>
          {lead}
        </p>
        <div className="actions" style={{ marginTop: 28 }}>
          <Link to={siteConfig.consultationPath} className="btn btn-primary">
            Book a consultation
            <ArrowIcon />
          </Link>
          <a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Message the Support Desk
          </a>
        </div>
      </div>
      <address className="closing__contact">
        <span>
          <strong>RJS &amp; Co.</strong>, Chartered Accountants
        </span>
        <span>Offices in {officeCities.slice(0, -1).join(', ')} and {officeCities[officeCities.length - 1]}</span>
        <Link to="/contact">Addresses and maps</Link>
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>
        {firmFacts.phone && <a href={firmFacts.phoneHref}>{firmFacts.phone}</a>}
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp {siteConfig.whatsappLabel}
        </a>
      </address>
    </div>
  );
}
