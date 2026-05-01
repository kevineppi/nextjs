'use client'

import { useEffect } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb';
  data?: {
    faqs?: FAQItem[];
    pageName?: string;
    pageUrl?: string;
  };
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const getStructuredData = () => {
      switch (type) {
        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ekdruck e.U.",
            "description": "Professioneller 3D-Druck Service für Linz und Oberösterreich. Dekoration, Modellbau und individuelle Unikate mit österreichischem Filament.",
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
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.135",
              "longitude": "13.975"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "€€",
            "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
            "areaServed": [
              {
                "@type": "City",
                "name": "Linz"
              },
              {
                "@type": "City",
                "name": "Wels"
              },
              {
                "@type": "City",
                "name": "Gunskirchen"
              },
              {
                "@type": "State",
                "name": "Oberösterreich"
              },
              {
                "@type": "Country",
                "name": "Österreich"
              }
            ],
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "EUR",
            "keywords": "3D-Druck, Modellbau, Dekoration, Einzelanfertigungen, nachhaltiger 3D-Druck, österreichisches Filament",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "31"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Hannah E."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
                "datePublished": "2025-01-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Simone G."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
                "datePublished": "2025-01-10"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Klaus F."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war, was für meine Anwendung nicht relevant gewesen wäre. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
                "datePublished": "2025-01-12"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Silvio T."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen! Sehr gerne wieder. Preis Leistung ist einfach Super. Sehr gerne wieder",
                "datePublished": "2025-01-18"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Ing. Rocco Skombor BSc"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Alles hat wunderbar geklappt. Kundenservice sehr professionell. Kann ich weiter empfehlen!",
                "datePublished": "2024-12-20"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Christian Steller"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Ich bin absolut begeistert von ekDruck! Die Qualität ist erstklassig, jedes Detail wird sehr präzise und sauber umgesetzt. Die Kommunikation war von Anfang an ausgesprochen freundlich und professionell.",
                "datePublished": "2024-12-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sadin Ramic"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Kompetent und motiviert! Falls man in Richtung 3D Druck etwas braucht, ist man bei Kevin gut aufgehoben!",
                "datePublished": "2024-12-10"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Gertude Emirich"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Persönlich, sehr kompetente Beratung. Individuelle Dekoantikel in verschiedenen Ausführungen und nach Wunsch - sehr empfehlenswert! Gerne wieder!",
                "datePublished": "2024-12-05"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Georg Obereder"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": "Tolle Produkte Made in Austria, wo nix unmöglich ist!",
                "datePublished": "2024-11-28"
              }
            ]
          };
        
        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "3D-Druck Service Oberösterreich",
            "description": "Professionelle 3D-Druck Dienstleistungen: FDM 3D-Druck, Modellbau, Einzelanfertigungen, Dekoration und nachhaltige Materialien aus Oberösterreich.",
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
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "50"
              }
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Oberösterreich"
              },
              {
                "@type": "Place", 
                "name": "Linz"
              },
              {
                "@type": "Place",
                "name": "Wels"
              },
              {
                "@type": "Place",
                "name": "Österreich"
              }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.ek-druck.at",
              "servicePhone": "+43 676 5517197"
            },
            "serviceType": "3D-Druck, Modellbau, FDM, Dekoration, Architekturmodelle",
            "category": "Manufacturing, 3D Printing, Model Making, Custom Design",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "3D-Druck Dienstleistungen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "3D-Druck Architekturmodell",
                    "description": "Hochwertige Architekturmodelle und Präsentationsmodelle"
                  },
                  "price": "5.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "3D-Druck Designprototyp",
                    "description": "Hochwertige Präsentationsmodelle"
                  },
                  "price": "5.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "3D-Druck Einzelanfertigung",
                    "description": "Individuelle Einzelstücke nach Kundenwunsch"
                  },
                  "price": "10.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              ]
            }
          };
        
        case 'faq':
          // Use dynamic FAQs if provided, otherwise use default
          const faqItems = data?.faqs || [
            {
              q: "Was kostet 3D-Druck in Oberösterreich?",
              a: "Die Kosten für 3D-Druck hängen von Material, Größe und Komplexität ab. Kontaktieren Sie uns für ein kostenloses Angebot. Prototypen beginnen bereits ab €50."
            },
            {
              q: "Welche Materialien verwenden Sie für 3D-Druck?",
              a: "Wir verwenden ausschließlich österreichisches Filament aus Industrieabfällen: PLA, PLA+, PETG, ABS und flexible Materialien in allen Farben."
            },
            {
              q: "Wie schnell ist die Lieferung von 3D-Druck Teilen?",
              a: "Standard-Lieferzeit beträgt 3-5 Tage. Express-Service (24-48h) ist verfügbar. Lieferung in ganz Oberösterreich."
            },
            {
              q: "Bieten Sie auch CAD-Design und Konstruktion an?",
              a: "Ja, wir bieten professionelle 3D-Modellierung, CAD-Konstruktion und technische Zeichnungen für Ihre individuellen Projekte an."
            }
          ];

          return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          };
        
        case 'breadcrumb':
          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ek-druck.at"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "3D-Druck Services",
                "item": "https://www.ek-druck.at/#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Über uns",
                "item": "https://www.ek-druck.at/#about"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Kontakt",
                "item": "https://www.ek-druck.at/kontakt"
              }
            ]
          };
        
        default:
          return null;
      }
    };

    const structuredData = getStructuredData();
    if (structuredData) {
      // Use consistent ID format matching SEOHead to prevent duplicates
      const scriptId = `schema-${type}-${window.location.pathname.replace(/\//g, '-') || 'home'}`;
      
      // CRITICAL: Remove ALL old FAQ schemas from SEOHead that might still exist
      if (type === 'faq') {
        document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
          try {
            const data = JSON.parse(script.textContent || '');
            if (data['@type'] === 'FAQPage' && script.id !== scriptId) {
              console.log('Removing duplicate FAQPage schema:', script.id);
              script.remove();
            }
          } catch (e) {
            // Ignore parsing errors
          }
        });
      }
      
      // Remove any existing scripts with this exact ID
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
      
      // Also clean up old format IDs (for migration)
      const oldFormatIds = [
        `structured-data-${type}`,
        `structured-data-${type}-${window.location.pathname.replace(/\//g, '-') || 'home'}`
      ];
      oldFormatIds.forEach(oldId => {
        const oldScript = document.getElementById(oldId);
        if (oldScript) {
          oldScript.remove();
        }
      });
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.id = scriptId;
      
      document.head.appendChild(script);
      
      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [type, data]);

  return null;
};

export default StructuredData;