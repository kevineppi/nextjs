'use client'

import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  city?: string;
}

const FAQSchema = ({ faqs, city }: FAQSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const scriptId = city 
      ? `faq-schema-${city.toLowerCase().replace(/\s+/g, '-')}`
      : 'faq-schema-general';
    
    // Remove any existing FAQ schemas to prevent duplicates
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
      try {
        const data = JSON.parse(script.textContent || '');
        if (data['@type'] === 'FAQPage' && script.id !== scriptId) {
          script.remove();
        }
      } catch (e) {
        // Ignore parsing errors
      }
    });

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
  }, [faqs, city]);

  return null;
};

export default FAQSchema;
