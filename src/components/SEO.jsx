import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig.js';

function setMeta(name, content, attribute = 'name') {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

export default function SEO({ title, description, path = '/', schema }) {
  useEffect(() => {
    const fullTitle = title || `${siteConfig.firmName} | ${siteConfig.tagline}`;
    const metaDescription = description || siteConfig.description;
    const canonicalUrl = `${siteConfig.domain}${path}`;

    document.title = fullTitle;
    setMeta('description', metaDescription);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', metaDescription, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', metaDescription);
    setCanonical(canonicalUrl);

    const existingSchema = document.getElementById('rjs-schema');
    if (existingSchema) existingSchema.remove();

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'rjs-schema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('rjs-schema');
      if (script) script.remove();
    };
  }, [title, description, path, schema]);

  return null;
}

