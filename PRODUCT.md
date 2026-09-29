# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Decision-makers in India and the Indian diaspora who need a Chartered Accountancy firm they can trust with statutory and money-sensitive work. Promotions address all segments with no single lead:

- Directors and finance heads of private limited companies, LLPs, trusts and non-profits that need statutory audit, tax audit, internal audit, ROC compliance.
- Founders of startups and MSMEs who need setup, GST, books, payroll and Virtual CFO support.
- NRIs, with a visible Gulf connection (the firm's WhatsApp line is a UAE number), handling Indian property sales, TDS, DTAA relief, and repatriation (Form 15CA/15CB).
- Professionals and consultants with income tax and GST needs.

They usually arrive with a trigger: an audit due date, a notice, blocked input credit, a property sale, a company to incorporate, or books that don't reconcile. They are judging whether this firm is senior, careful, and discreet enough to hand the matter to.

## Product Purpose

The marketing site for RJS & Co., Chartered Accountants, Kottayam, Kerala. It must make a first-time visitor believe this is a serious, partner-led audit and advisory practice, then get them to start an engagement (enquiry form that opens an email draft, WhatsApp, or phone). Success: qualified enquiries from promotions, and a site that holds up when a prospect compares it with established firms.

## Positioning

A partner-led Chartered Accountancy practice in Kottayam that covers audit, direct and indirect tax, company law, and advisory under one engagement, with a dedicated NRI desk. Audit and assurance sit at the core of the identity ("Chartered Accountants", audit-first), and the firm prefers scoped, documented engagements to form-filling.

## Operating Context

- Indian regulatory vocabulary is part of the product: ICAI, FRN, statutory audit, tax audit (Sec. 44AB), GSTR-1/3B, ITC, ROC/MCA, DIN/DSC, Form 15CA/15CB, DTAA, TDS, Udyam, DPIIT.
- Engagements start with a scope review and a document checklist; each service page lists who it's for, scope, process, documents required, and FAQs.
- The contact form does not post to a server. It validates and then opens the visitor's email client with a pre-filled enquiry to info@rjsllp.com.
- The office is at KMC XIII/1259 [CSI MSB-IIf-10], 2nd Floor, CSI Multistoried Building, Kottayam, Kerala (confirmed by the user on 2026-09-29). PIN code not yet supplied. The Google Maps link and embed resolve by searching for the building name.

## Capabilities and Constraints

- Stack: Vite + React 19 + react-router-dom 7, plain CSS files, deployed on Vercel. No CSS framework or component library. Keep dependencies minimal.
- Routes: Home, About, Services, Service detail (9 slugs), Industries, Resources, Contact, Privacy Policy, Disclaimer, 404. Careers page exists but is not routed.
- ICAI rules on advertising and solicitation limit what a CA firm may claim: no comparative claims, no testimonials presented as solicitation, no guarantees of outcomes, no fee undercutting. The Disclaimer page covers non-solicitation. Copy must stay factual and restrained.
- Resources "calculators and compliance calendar" are not built yet and must be presented as forthcoming.

## Brand Commitments

- Name: RJS & Co., Chartered Accountants. Mark at `src/assets/logo.png` (updated by the user on 2026-09-29): an RJS monogram in high-contrast serif letterforms, navy #103a5d, with a saffron #f48721 and green #3b8c41 sweep through the S (a tricolour reference), on a transparent background. It has no wordmark, so the site sets "RJS & Co." and "Chartered Accountants" in type beside it. The mark is binding. The site should harmonise with it, not fight it.
- Email: info@rjsllp.com. WhatsApp: +971 55 107 0078, labelled "Support Desk" wherever it appears as a call to action. "NRI Desk" remains the name of the NRI taxation practice area.

## Evidence on Hand

- Real: firm name, logo, office address, email, WhatsApp number, map link, full service catalogue with scope, process, documents and FAQs (`src/data/services.js`), client segments (`src/data/industries.js`), general FAQs.
- Placeholders the user will replace (all kept in `src/data/firmFacts.js`, marked `REPLACE`): partner names and qualifications, ICAI Firm Registration Number, year established, office phone, peer-review status, team size, other office locations.
- Absent and not to be invented: client names or logos, testimonials, case studies, numeric outcomes (refunds recovered, audits completed), awards, press.

## Product Principles

1. Seniority is shown, not claimed. Credentials, named partners and precise regulatory language carry trust; adjectives do not.
2. Discretion over salesmanship. ICAI-compliant, no hype, no urgency tactics, no promises of outcomes.
3. Start from the visitor's trigger (a notice, a deadline, a sale, an audit) and route it to the right engagement.
4. Every service is scoped: who it's for, what's covered, which documents, what happens next.
5. One firm, several desks. Audit at the core, with tax, company law, advisory and the NRI desk around it.

## Accessibility & Inclusion

WCAG 2.2 AA. The audience includes older directors and NRIs reading on phones abroad, so body text must be large and contrast high. Keep the site usable without JavaScript-dependent motion and respect reduced motion. English (India) spelling.
