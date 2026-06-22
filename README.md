# RJS & Co. React Website

A complete upload-ready React + Vite website for **RJS & Co.**, a Chartered Accountancy and professional services firm serving Indian businesses, startups, MSMEs, professionals, NRIs, and compliance-focused organisations.

The site is built as a clean React single-page application with React Router, reusable components, plain CSS, original content, placeholder contact details, dynamic service pages, contact form validation, FAQ accordions, WhatsApp CTA, sitemap, robots.txt, and basic SEO metadata handling.

## Folder structure

```txt
rjsandco-react-website/
  package.json
  index.html
  vite.config.js
  README.md
  public/
    favicon.svg
    robots.txt
    sitemap.xml
  src/
    main.jsx
    App.jsx
    assets/
      logo-placeholder.svg
      hero-illustration.svg
    data/
      services.js
      faqs.js
      industries.js
      siteConfig.js
    components/
      Header.jsx
      Footer.jsx
      Layout.jsx
      Hero.jsx
      SectionHeading.jsx
      ServiceCard.jsx
      CTASection.jsx
      FAQAccordion.jsx
      ContactForm.jsx
      WhatsAppButton.jsx
      SEO.jsx
    pages/
      Home.jsx
      About.jsx
      Services.jsx
      ServiceDetail.jsx
      Industries.jsx
      Resources.jsx
      Contact.jsx
      PrivacyPolicy.jsx
      Disclaimer.jsx
      NotFound.jsx
    styles/
      global.css
      layout.css
      components.css
      responsive.css
```

## Install command

```bash
npm install
```

## Development command

```bash
npm run dev
```

Open the local Vite URL shown in your terminal, usually:

```txt
http://localhost:5173
```

## Build command

```bash
npm run build
```

This creates a production-ready `dist/` folder.

## How to edit services

Edit:

```txt
src/data/services.js
```

Each service has:

- `slug`
- `title`
- `shortTitle`
- `metaTitle`
- `metaDescription`
- `excerpt`
- `intro`
- `problem`
- `whoFor`
- `helpsWith`
- `benefits`
- `process`
- `documents`
- `turnaround`
- `faqs`

The service detail pages are generated dynamically from this data. Do not create duplicate JSX files for each service.

## How to edit contact details

Edit:

```txt
src/data/siteConfig.js
```

Replace the placeholder values for:

- Office address
- Phone number
- WhatsApp number
- Email address
- Google Maps embed or map link
- Social links, if required
- ICAI details, partner names, or registration details only after verification

Do not publish fake ICAI numbers, fake partner names, or fake office addresses.

## How to replace logo

Replace:

```txt
src/assets/logo-placeholder.svg
```

Keep the same filename if you do not want to update imports. If you use a PNG or WebP logo, update the import in:

```txt
src/components/Header.jsx
src/components/Footer.jsx
```

Recommended logo format:

- SVG for sharpness
- Transparent background
- Horizontal version for header
- Square mark for favicon

## How to deploy the dist folder

1. Run:

```bash
npm run build
```

2. Upload the contents of the generated `dist/` folder to your hosting provider.

3. For SPA routing, configure your host to redirect all routes to `index.html`.

Examples:

- Netlify: add a `_redirects` file if needed.
- Vercel: React Router usually works with proper rewrites.
- cPanel or shared hosting: add `.htaccess` rewrite rules for Apache.

## SEO checklist before launch

- Replace all placeholder contact details with verified NAP details.
- Ensure the footer NAP matches the Google Business Profile exactly.
- Add verified firm details only after confirmation.
- Replace placeholder logo and favicon.
- Add a real Open Graph image at `/og-image.jpg`.
- Update `public/sitemap.xml` if routes are added or removed.
- Update `public/robots.txt` if staging pages must be blocked.
- Review every page title and meta description.
- Add real blog content to Resources before relying on it for SEO.
- Connect Google Search Console after launch.
- Connect Google Analytics or privacy-friendly analytics if required.
- Test page speed on mobile.
- Test all forms, click-to-call links, WhatsApp links, and map links.
- Ensure ICAI advertising and non-solicitation expectations are respected.

## Important SEO note

This project is a Vite React SPA. It is clean, fast, and suitable for an upload-ready first version. However, SPAs are not the strongest architecture for SEO-heavy content sites because content is rendered on the client side.

For stronger SEO later, migrate or pre-render the site using one of these approaches:

- Next.js
- Astro
- Vite pre-rendering
- Static site generation

For now, this website keeps the architecture simple and maintainable.


## Micro-interactions added

This version includes lightweight, professional micro-interactions using CSS and small React state only. No animation library or new dependency was added.

- Sticky header shadow after scroll
- Animated active navigation underline
- Mobile menu slide/fade transition
- Hamburger-to-close icon transition
- Button hover, active, disabled, and focus-visible states
- Service/card hover lift with border accent
- CTA and section fade-up entrance polish
- Smooth FAQ open/close animation
- Form focus states, error reveal, and submit feedback state
- WhatsApp and footer link hover states
- `prefers-reduced-motion` safety for users who disable animations
