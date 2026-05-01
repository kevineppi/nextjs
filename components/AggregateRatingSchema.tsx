'use client'

import { useEffect } from 'react';

interface AggregateRatingSchemaProps {
  ratingValue: number;
  ratingCount: number;
  bestRating?: number;
  worstRating?: number;
}

const AggregateRatingSchema = ({ 
  ratingValue, 
  ratingCount, 
  bestRating = 5, 
  worstRating = 1 
}: AggregateRatingSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ekdruck e.U.",
      "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
      "url": "https://www.ek-druck.at",
      "telephone": "+43 676 5517197",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Negrellistraße 15",
        "addressLocality": "Gunskirchen",
        "postalCode": "4623",
        "addressRegion": "Oberösterreich",
        "addressCountry": "AT"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue,
        "reviewCount": ratingCount,
        "bestRating": bestRating,
        "worstRating": worstRating
      },
      "priceRange": "€€",
      "openingHours": "Mo-Fr 08:00-18:00",
      "sameAs": [
        "https://www.google.com/maps?cid=ekdruck"
      ]
    };

    const scriptId = 'aggregate-rating-schema';
    
    // Remove existing schema to prevent duplicates
    const existing = document.getElementById(scriptId);
    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = scriptId;
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [ratingValue, ratingCount, bestRating, worstRating]);

  return null;
};

export default AggregateRatingSchema;
