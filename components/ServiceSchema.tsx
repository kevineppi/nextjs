'use client'

import { useEffect } from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  };
  areaServed?: string[];
  provider?: {
    name: string;
    url: string;
  };
}

const ServiceSchema = ({ 
  serviceName, 
  description, 
  serviceType = "Service",
  offers,
  areaServed = ["Wien", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "St. Pölten", "Dornbirn"],
  provider = {
    name: "EK-Druck",
    url: "https://www.ek-druck.at"
  }
}: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": serviceType,
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": provider.name,
        "url": provider.url
      },
      "areaServed": areaServed.map(area => ({
        "@type": "City",
        "name": area,
        "addressCountry": "AT"
      })),
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": provider.url,
        "serviceType": "Online"
      }
    };

    if (offers) {
      schema["offers"] = {
        "@type": "Offer",
        "description": offers.description || description,
        ...(offers.price && { 
          "price": offers.price,
          "priceCurrency": offers.priceCurrency || "EUR"
        })
      };
    }

    const scriptId = `service-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`;
    
    // Remove existing schema to prevent duplicates
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
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
  }, [serviceName, description, serviceType, offers, areaServed, provider]);

  return null;
};

export default ServiceSchema;
