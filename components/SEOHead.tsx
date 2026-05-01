'use client'

import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: string;
  schemaType?: 'service' | 'article' | 'product';
  breadcrumbs?: Array<{name: string, url: string}>;
  preloadResources?: Array<{href: string, as: string, type?: string}>;
  noIndex?: boolean;
  datePublished?: string;
  dateModified?: string;
}

const SEOHead = ({
  title = "3D-Druck Service Österreich – Angebot in 6 h, Lieferung in 5–7 Tagen",
  description = "3D-Druck Service in Österreich: Modelle, Prototypen und Architekturmodelle drucken lassen. Angebot in 6 Stunden, Express in 24 h. Anbieter aus Gunskirchen, OÖ.",
  keywords = "3d druck österreich, 3d druck service, 3d druck firma, 3d druck anbieter, 3d druck dienstleister, 3d druck oberösterreich, 3d druck prototypen, architekturmodell drucken lassen, messemodell anfertigen",
  path = "",
  image = "",
  type = "website",
  schemaType,
  breadcrumbs = [],
  preloadResources = [],
  noIndex = false,
  datePublished,
  dateModified,
}: SEOHeadProps) => {
  useEffect(() => {
    const fullUrl = `https://www.ek-druck.at${path}`;
    const resolvedImage = image || DEFAULT_OG_IMAGE;

    // Title
    document.title = title;

    // Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', keywords);

    // Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'ekdruck e.U.');

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute(
      'content',
      noIndex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = fullUrl;
      document.head.appendChild(newCanonical);
    }

    // Hreflang – update existing tags from index.html (never duplicate)
    const hreflangMap: Record<string, string> = {
      'de-AT': fullUrl,
      'de-DE': fullUrl,
      'de': fullUrl,
      'x-default': fullUrl,
    };
    Object.entries(hreflangMap).forEach(([lang, url]) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', lang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', url);
    });

    // Open Graph
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', fullUrl);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[property="og:image"]', resolvedImage);

    // Twitter Card
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', resolvedImage);

    // Preload resources
    preloadResources.forEach((resource) => {
      const existingPreload = document.querySelector(`link[rel="preload"][href="${resource.href}"]`);
      if (!existingPreload) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = resource.href;
        preloadLink.as = resource.as;
        if (resource.type) preloadLink.type = resource.type;
        document.head.appendChild(preloadLink);
      }
    });

    // Structured Data (only if schemaType is explicitly provided)
    if (schemaType) {
      const schemaId = `schema-${schemaType}-${path.replace(/\//g, '-') || 'home'}`;
      const existingSchema = document.querySelector(`script[data-schema-id="${schemaId}"]`);
      if (existingSchema) existingSchema.remove();

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema-id', schemaId);
      schemaScript.textContent = JSON.stringify(
        getSchemaData(schemaType, path, title, description, breadcrumbs, datePublished, dateModified)
      );
      document.head.appendChild(schemaScript);
    }

    return () => {
      preloadResources.forEach((resource) => {
        const preloadLink = document.querySelector(`link[rel="preload"][href="${resource.href}"]`);
        if (preloadLink) preloadLink.remove();
      });
      if (schemaType) {
        const schemaId = `schema-${schemaType}-${path.replace(/\//g, '-') || 'home'}`;
        document.querySelector(`script[data-schema-id="${schemaId}"]`)?.remove();
      }
    };
  }, [title, description, keywords, path, image, type, schemaType, breadcrumbs, preloadResources, noIndex, datePublished, dateModified]);

  return null;
};

const getSchemaData = (
  schemaType: string,
  path: string,
  title: string,
  description: string,
  breadcrumbs: Array<{name: string, url: string}>,
  datePublished?: string,
  dateModified?: string,
) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "url": `https://www.ek-druck.at${path}`,
    "name": title,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ekdruck e.U.",
      "url": "https://www.ek-druck.at",
      "telephone": "+43 676 5517197",
      "email": "office@ek-druck.at",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Negrellistraße 15",
        "addressLocality": "Gunskirchen",
        "addressRegion": "Oberösterreich",
        "postalCode": "4623",
        "addressCountry": "AT"
      }
    }
  };

  switch (schemaType) {
    case 'service':
      return {
        ...baseSchema,
        "@type": "Service",
        "serviceType": "3D-Druck Service",
        "areaServed": { "@type": "Country", "name": "Austria" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "3D-Druck Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "FDM 3D-Druck",
                "description": "Professioneller FDM 3D-Druck Service für Modellbau, Prototypen und Einzelanfertigungen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rapid Prototyping",
                "description": "Schnelle Prototypenerstellung in 24–48 Stunden österreichweit"
              }
            }
          ]
        }
      };

    case 'article':
      return {
        ...baseSchema,
        "@type": "Article",
        "headline": title,
        "author": {
          "@type": "Person",
          "name": "Kevin Eppensteiner",
          "url": "https://www.ek-druck.at/ueber-uns"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ekdruck e.U.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png"
          }
        },
        ...(datePublished ? { "datePublished": datePublished } : {}),
        ...(dateModified ? { "dateModified": dateModified } : { ...(datePublished ? { "dateModified": datePublished } : {}) }),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.ek-druck.at${path}`
        }
      };

    case 'product':
      return {
        ...baseSchema,
        "@type": "Product",
        "image": "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
        "brand": { "@type": "Brand", "name": "ekdruck e.U." },
        "offers": {
          "@type": "Offer",
          "url": `https://www.ek-druck.at${path}`,
          "priceCurrency": "EUR",
          "price": "20.00",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": { "@type": "Organization", "name": "ekdruck e.U." }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "31"
        }
      };

    default:
      return baseSchema;
  }
};

export default SEOHead;
