'use client'

import { useState, useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export const useSEO = (sectionId?: string): SEOData => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: "3D-Druck Österreich | FDM Service | ekdruck",
    description: "Ihr 3D-Druck Partner in Österreich für FDM-Druck, Rapid Prototyping und individuelle Modelle. Nachhaltig mit österreichischem Filament und Express-Service in 24-48 Stunden.",
    keywords: "3d-druck österreich, 3d-druck service, fdm 3d-druck, rapid prototyping österreich, 3d-druck dienstleister, 3d-druck firma, 3d-druck shop österreich, additives fertigungsverfahren"
  });

  useEffect(() => {
    const seoConfigs = {
      hero: {
        title: "3D-Druck Österreich | FDM Service | ekdruck",
        description: "Ihr 3D-Druck Partner in Österreich für FDM-Druck, Rapid Prototyping und individuelle Modelle. Nachhaltig mit österreichischem Filament und Express-Service in 24-48 Stunden.",
        keywords: "3d-druck österreich, 3d-druck service, fdm 3d-druck, rapid prototyping österreich, 3d-druck dienstleister, 3d-druck firma, 3d-druck shop österreich, additives fertigungsverfahren"
      },
      services: {
        title: "FDM 3D-Druck Services Österreich | Rapid Prototyping",
        description: "Professionelle FDM 3D-Druck Services österreichweit: Rapid Prototyping, Additives Fertigungsverfahren, 3D-Drucker Modelle erstellen für ganz Österreich.",
        keywords: "fdm 3d-druck, 3d-druck dienstleister österreich, rapid prototyping österreich, additives fertigungsverfahren, 3d drucker modelle erstellen, finishing druck"
      },
      advantages: {
        title: "FDM 3D-Druck Verfahren Vorteile | Österreich",
        description: "FDM 3D-Druck vs. traditionelle Fertigung: Rapid Prototyping Verfahren Vorteile, Additives Fertigungsverfahren & kosteneffiziente Prototypen österreichweit.",
        keywords: "fdm 3d-druck verfahren, rapid prototyping verfahren vergleich, additives fertigungsverfahren, rapid prototyping verfahren übersicht, finishing druck"
      },
      about: {
        title: "3D-Druck Firma Österreich | FDM 3D-Druck | ekdruck e.U.",
        description: "Führende 3D-Druck Firma für ganz Österreich. Spezialist für FDM 3D-Druck, Rapid Prototyping & 3D-Druck für Privatpersonen. Qualität österreichweit.",
        keywords: "3d-druck firma österreich, fdm 3d-druck, 3d-druck für privatpersonen, 3d drucker österreich, 3d-druck shop österreich"
      },
      reviews: {
        title: "Kundenbewertungen & Erfahrungen | ekdruck e.U. 3D-Druck",
        description: "Lesen Sie echte Kundenbewertungen über unseren 3D-Druck Service. 5 Sterne Bewertungen für Qualität, Service und Zuverlässigkeit aus Oberösterreich.",
        keywords: "Kundenbewertungen, 3D-Druck Erfahrungen, Testimonials, 5 Sterne Service, Kundenzufriedenheit, zuverlässiger 3D-Druck"
      },
      contact: {
        title: "3D-Drucker kaufen Österreich | FDM 3D-Druck Kontakt",
        description: "3D-Drucker kaufen oder FDM 3D-Druck Service nutzen? Kontakt für ganz Österreich. Kostenlose Beratung für 3D-Druck Dienstleister Vergleich österreichweit.",
        keywords: "3d drucker kaufen österreich, fdm 3d-druck, 3d-druck dienstleister vergleich, 3d-druck österreich kontakt, 3d-druck shop österreich, kostenlose beratung"
      }
    };

    if (sectionId && seoConfigs[sectionId as keyof typeof seoConfigs]) {
      setSeoData(seoConfigs[sectionId as keyof typeof seoConfigs]);
    }
  }, [sectionId]);

  return seoData;
};