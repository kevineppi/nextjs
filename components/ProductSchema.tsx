'use client'

import { useEffect } from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  offers: {
    priceCurrency: string;
    price?: string;
    availability?: string;
  };
  brand?: string;
  category?: string;
}

const ProductSchema = ({ 
  name, 
  description, 
  offers,
  brand = "ekdruck e.U.",
  category = "3D-Druck Service"
}: ProductSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "description": description,
      "brand": {
        "@type": "Brand",
        "name": brand
      },
      "category": category,
      "offers": {
        "@type": "Offer",
        "priceCurrency": offers.priceCurrency,
        "price": offers.price,
        "availability": offers.availability || "https://schema.org/InStock",
        "url": "https://www.ek-druck.at/kontakt",
        "seller": {
          "@type": "Organization",
          "name": brand
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "31",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const scriptId = 'product-schema';
    
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
  }, [name, description, offers, brand, category]);

  return null;
};

export default ProductSchema;
