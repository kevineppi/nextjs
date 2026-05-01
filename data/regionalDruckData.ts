// Regional data for 3D-Druck landing pages
// Focus: Anschauungsmodelle, Designstudien, Präsentationsmodelle (WKO-konform)
// DIFFERENZIERT von Messemodellen (Events) und Architekturmodellen (Architekten)

export interface RegionalDruckData {
  slug: string;
  name: string;
  type: 'bundesland' | 'stadt' | 'standort';
  title: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  deliveryTime: string;
  deliveryNote: string;
  localIndustries: {
    name: string;
    sector: string;
    application: string;
  }[];
  localAdvantages: string[];
  nearbyRegions: string[];
  stats: {
    projekte: string;
    lieferzeit: string;
    materialien: string;
  };
}

export const regionalDruckData: Record<string, RegionalDruckData> = {
  'wien': {
    slug: 'wien',
    name: 'Wien',
    type: 'stadt',
    title: '3D-Druck Wien – Anbieter & Firma',
    h1Title: '3D-Druck Wien – Ihre 3D-Druck Firma für Modelle & Prototypen',
    metaTitle: '3D-Druck Wien ★5,0 – Express über Nacht · Angebot in 6 h',
    metaDescription: '3D-Druck Anbieter für Wien ✓ Architekturmodelle & Prototypen ✓ Express über Nacht ✓ Angebot in 6 h ✓ persönliche Übergabe möglich. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Sie suchen eine zuverlässige 3D-Druck Firma in Wien? Als spezialisierter Anbieter und Dienstleister fertigen wir Modelle, Prototypen und Designstudien für Wiener Unternehmen, Architekturbüros, Startups und Kreativagenturen – mit Express-Lieferung über Nacht.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand direkt nach Wien, Express über Nacht möglich',
    localIndustries: [
      { name: 'Startup-Modelle', sector: 'Tech & Innovation', application: 'Pitch-Modelle, Konzeptdarstellungen, Produktvisualisierungen für Investoren' },
      { name: 'Design & Kreativwirtschaft', sector: 'Kreativbranche', application: 'Designstudien, Produktmockups, Verpackungsmodelle' },
      { name: 'Bildung & Forschung', sector: 'Universitäten & FH', application: 'Studienmodelle, Anschauungsobjekte, Lehrmittel' },
      { name: 'Kulturwirtschaft', sector: 'Museen & Galerien', application: 'Ausstellungsobjekte, Repliken, Dekorationselemente' },
    ],
    localAdvantages: [
      'Express-Versand nach Wien über Nacht',
      'Erfahrung mit Wiener Startups und Kreativagenturen',
      'Persönliche Übergabe in Wien auf Anfrage',
      'Modelle für Investoren-Pitches in 24h',
    ],
    nearbyRegions: ['niederoesterreich', 'burgenland'],
    stats: { projekte: '200+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'linz': {
    slug: 'linz',
    name: 'Linz',
    type: 'stadt',
    title: '3D-Druck Linz – Anbieter & Same-Day Service',
    h1Title: '3D-Druck Linz – Ihr 3D-Druck Dienstleister für Same-Day Service',
    metaTitle: '3D-Druck Linz ★5,0 – Same-Day · 20 Min zur Abholung',
    metaDescription: '3D-Druck Anbieter für Linz ✓ Same-Day-Service ✓ Abholung in 20 Min ✓ Modelle & Prototypen ✓ Angebot in 6 h. ★ 5,0 (31 Bewertungen) – ekdruck Gunskirchen',
    heroSubtitle: 'Sie brauchen eine 3D-Druck Firma in Linz – sofort? Als Anbieter direkt vor der Haustür (nur 20 Minuten von Linz) bieten wir Same-Day-Service für Modelle, Prototypen und Anschauungsobjekte. Persönliche Abholung in Gunskirchen oder Lieferung nach Linz möglich.',
    deliveryTime: 'Same Day',
    deliveryNote: 'Nur 20 Minuten von unserem Standort in Gunskirchen',
    localIndustries: [
      { name: 'Anschauungsmodelle', sector: 'Industrie & Präsentation', application: 'Schnittmodelle, Schulungsmodelle, Präsentationsobjekte für Messen' },
      { name: 'Kreativwirtschaft', sector: 'Ars Electronica / Tabakfabrik', application: 'Installationen, Kunstobjekte, Event-Dekorationen' },
      { name: 'Visualisierungsmodelle', sector: 'Produktentwicklung', application: 'Konzeptmodelle, Designstudien, Formstudien' },
      { name: 'Bildung & Forschung', sector: 'JKU / FH OÖ', application: 'Labormodelle, Studienarbeiten, Anschauungsobjekte' },
    ],
    localAdvantages: [
      'Nur 20 Minuten Entfernung – persönliche Übergabe',
      'Same-Day-Delivery für dringende Projekte',
      'Erfahrung mit Linzer Unternehmen',
      'Unkomplizierte Abholung in Gunskirchen',
    ],
    nearbyRegions: ['oberoesterreich', 'wels'],
    stats: { projekte: '150+', lieferzeit: 'Same Day', materialien: '8+' },
  },

  'graz': {
    slug: 'graz',
    name: 'Graz',
    type: 'stadt',
    title: '3D-Druck Graz – Anbieter & Firma',
    h1Title: '3D-Druck Graz – Ihre 3D-Druck Firma für Designmodelle & Prototypen',
    metaTitle: '3D-Druck Graz ★5,0 – Express via A9 · Angebot in 6 h',
    metaDescription: '3D-Druck Anbieter für Graz ✓ Designstudien & Prototypen ✓ Express via A9 ✓ Angebot in 6 h ✓ persönliche Beratung. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Sie suchen eine professionelle 3D-Druck Firma in Graz? Als spezialisierter Anbieter und Dienstleister fertigen wir Designstudien, Konzeptmodelle und Präsentationsobjekte für Grazer Unternehmen, TU-Forschungseinrichtungen und Industriebetriebe – mit Express-Versand über die A9.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express-Versand über A9 Pyhrnautobahn',
    localIndustries: [
      { name: 'Konzeptmodelle', sector: 'Produktdesign', application: 'Formstudien, Designvarianten, Produktvisualisierungen' },
      { name: 'Elektronik-Schaumodelle', sector: 'Technologie', application: 'Gehäusemodelle, Konzeptdarstellungen, Präsentationsobjekte' },
      { name: 'Universitäts-Projekte', sector: 'TU Graz / FH Joanneum', application: 'Forschungsmodelle, Studienarbeiten, Anschauungsobjekte' },
      { name: 'Green Tech Modelle', sector: 'Umwelttechnologie', application: 'Konzeptmodelle für Energiesysteme, Visualisierungen, Schaumodelle' },
    ],
    localAdvantages: [
      'Express-Lieferung über A9 nach Graz',
      'Erfahrung mit steirischen Technologieunternehmen',
      'Designmodelle für Produktentwicklung',
      'Flexible Fertigung ab Stückzahl 1',
    ],
    nearbyRegions: ['steiermark', 'kaernten'],
    stats: { projekte: '100+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'salzburg': {
    slug: 'salzburg',
    name: 'Salzburg',
    type: 'stadt',
    title: '3D-Druck Salzburg – Anbieter & Service',
    h1Title: '3D-Druck Salzburg – Präzision über die Westautobahn',
    metaTitle: '3D-Druck Salzburg ★5,0 – A1-Express · Angebot in 6 h',
    metaDescription: '3D-Druck Anbieter für Salzburg ✓ Modelle & Prototypen ✓ Express via A1 ✓ Angebot in 6 h ✓ ab €20. ★ 5,0 (31 Bewertungen) – ekdruck Österreich',
    heroSubtitle: 'Maßgefertigte 3D-Druckmodelle für Salzburger Unternehmen – von Designstudien über Präsentationsmodelle bis zu individuellen Einzelstücken. Schnelle Lieferung über die Westautobahn.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localIndustries: [
      { name: 'Tourismus-Modelle', sector: 'Hotellerie & Gastronomie', application: 'Displayhalter, Dekorationsobjekte, Modelle für Hotelkonzepte' },
      { name: 'Lebensmittel-Schaumodelle', sector: 'Food & Beverage', application: 'Verpackungsmodelle, Produktvisualisierungen, Displayobjekte' },
      { name: 'Kulturwirtschaft', sector: 'Festspiele & Events', application: 'Bühnenmodelle, Requisiten-Modelle, Designobjekte' },
      { name: 'Sportartikel-Design', sector: 'Outdoor & Sport', application: 'Ergonomie-Studien, Konzeptmodelle, Designmockups' },
    ],
    localAdvantages: [
      'Kurze Lieferwege über A1 Westautobahn',
      'Erfahrung mit Salzburger Tourismus- und Kulturbranche',
      'Express für kurzfristige Projektanfragen',
      'Individuelle Beratung für Erstprojekte',
    ],
    nearbyRegions: ['oberoesterreich', 'tirol'],
    stats: { projekte: '80+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'innsbruck': {
    slug: 'innsbruck',
    name: 'Innsbruck',
    type: 'stadt',
    title: '3D-Druck Innsbruck – Anbieter & Service',
    h1Title: '3D-Druck Innsbruck – Designmodelle & Alpine Innovation',
    metaTitle: '3D-Druck Innsbruck ★5,0 – Forschung & Design · Angebot 6h',
    metaDescription: '3D-Druck Anbieter für Innsbruck ✓ Studienmodelle & Designstudien ✓ 6+ Materialien ✓ Express ✓ Angebot in 6 h. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Professioneller 3D-Druck für Innsbrucker Unternehmen und Forschungseinrichtungen. Spezialisiert auf Designstudien, Anschauungsmodelle und Konzeptmodelle für alpine Innovationen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A13 mit robuster Verpackung',
    localIndustries: [
      { name: 'Forschungsmodelle', sector: 'Universität & FH', application: 'Anschauungsmodelle, Studienmodelle, Lehrmittel' },
      { name: 'Sportartikel-Design', sector: 'Outdoor & Wintersport', application: 'Ergonomie-Studien, Konzeptmodelle, Designmockups' },
      { name: 'Alpine Modelle', sector: 'Tourismus & Infrastruktur', application: 'Geländemodelle, Infrastrukturvisualisierungen, Konzeptdarstellungen' },
      { name: 'Kreativprojekte', sector: 'Design & Kunst', application: 'Kunstobjekte, Dekorationsstücke, Installationen' },
    ],
    localAdvantages: [
      'Erfahrung mit Forschungs- und Designprojekten',
      'Robuste Verpackung für Alpentransport',
      'Express-Option für Forschungsprojekte',
      'Partnerschaft mit Tiroler Innovationsbetrieben',
    ],
    nearbyRegions: ['tirol', 'salzburg', 'vorarlberg'],
    stats: { projekte: '60+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'klagenfurt': {
    slug: 'klagenfurt',
    name: 'Klagenfurt',
    type: 'stadt',
    title: '3D-Druck Klagenfurt – Anbieter & Service',
    h1Title: '3D-Druck Klagenfurt – Designmodelle & Präsentationsobjekte',
    metaTitle: '3D-Druck Klagenfurt ★5,0 – A10-Express · Angebot in 6 h',
    metaDescription: '3D-Druck Anbieter für Klagenfurt ✓ Modelle & Prototypen ✓ Lieferung via A10 ✓ Angebot in 6 h ✓ ab €20. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Professioneller 3D-Druck für Klagenfurter Betriebe. Designstudien, Präsentationsmodelle und individuelle Einzelstücke für die Kärntner Wirtschaft.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localIndustries: [
      { name: 'Technologie-Schaumodelle', sector: 'IT & Elektronik', application: 'Gehäusemodelle, Konzeptdarstellungen, Produktvisualisierungen' },
      { name: 'IT & Software', sector: 'Informationstechnologie', application: 'Gehäuse-Konzeptmodelle, Produktmockups, Anschauungsobjekte' },
      { name: 'Holzverarbeitung', sector: 'Holzindustrie', application: 'Designmodelle, Verbindungselement-Studien, Konzeptvisualisierungen' },
      { name: 'Universität Klagenfurt', sector: 'Forschung & Lehre', application: 'Labormodelle, Studienarbeiten, Anschauungsobjekte' },
    ],
    localAdvantages: [
      'Erfahrung mit Designmodellen und Konzeptstudien',
      'Zuverlässiger Versand über Tauernautobahn',
      'Express-Option für dringende Projekttermine',
      'Materialvielfalt für unterschiedliche Anforderungen',
    ],
    nearbyRegions: ['kaernten', 'villach', 'steiermark'],
    stats: { projekte: '40+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'villach': {
    slug: 'villach',
    name: 'Villach',
    type: 'stadt',
    title: '3D-Druck Villach – Anbieter & Service',
    h1Title: '3D-Druck Villach – Designmodelle für den Technologiepark',
    metaTitle: '3D-Druck Villach – Anbieter für Elektronik & Sensorik-Modelle',
    metaDescription: '3D-Druck Anbieter für Villach: Gehäuse-Designstudien, Sensorik-Schaumodelle und Konzeptmuster ab Stückzahl 1. Express über A10, Angebot in 6 Stunden.',
    heroSubtitle: 'Maßgefertigte 3D-Druckmodelle für Villacher Technologieunternehmen. Designstudien, Konzeptmodelle und Präsentationsobjekte aus dem FDM-Verfahren.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A2',
    localIndustries: [
      { name: 'Technologie-Modelle', sector: 'Elektronik', application: 'Gehäuse-Designstudien, Konzeptmodelle, Präsentationsobjekte' },
      { name: 'Sensorik-Schaumodelle', sector: 'Messtechnik', application: 'Gehäusemodelle, Anschauungsobjekte, Designvisualisierungen' },
      { name: 'Tourismus-Objekte', sector: 'Thermalbäder & Hotels', application: 'Dekorationsobjekte, Displayhalter, Designobjekte' },
      { name: 'Gewerbe & Handwerk', sector: 'Lokales Gewerbe', application: 'Musterteile, Konzeptmodelle, Präsentationsobjekte' },
    ],
    localAdvantages: [
      'Erfahrung mit Technologiepark-Unternehmen',
      'Schnelle Designmodelle für Entwicklungsprojekte',
      'Robuster Versand über A10',
      'Individuelle Materialberatung',
    ],
    nearbyRegions: ['kaernten', 'klagenfurt'],
    stats: { projekte: '25+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },

  'wels': {
    slug: 'wels',
    name: 'Wels',
    type: 'stadt',
    title: '3D-Druck Wels – Anbieter & Same-Day Service',
    h1Title: '3D-Druck Wels – Ihr Nachbar für schnelle Modelle',
    metaTitle: '3D-Druck Wels – Abholung in 10 Min, Same-Day-Fertigung',
    metaDescription: '3D-Druck Anbieter direkt vor der Tür von Wels: Musterteile, Konzeptmodelle und Schablonen drucken lassen. 10 Min zur Abholung, Same-Day möglich.',
    heroSubtitle: 'Ihr direkter Nachbar für professionellen 3D-Druck. Persönliche Abholung in Gunskirchen – nur 10 Minuten von Wels entfernt. Same-Day-Service für dringende Projekte.',
    deliveryTime: 'Sofort',
    deliveryNote: 'Persönliche Abholung in Gunskirchen – nur 10 Minuten',
    localIndustries: [
      { name: 'Agrartechnik-Modelle', sector: 'Landwirtschaft', application: 'Konzeptmodelle, Anschauungsobjekte, Designstudien für Geräte' },
      { name: 'Elektrotechnik-Design', sector: 'Schaltanlagen & Steuerung', application: 'Gehäusemodelle, Kabelführungs-Konzepte, Abdeckungs-Designstudien' },
      { name: 'Lebensmittel-Modelle', sector: 'Food Processing', application: 'Verpackungsmodelle, Konzeptvisualisierungen, Designobjekte' },
      { name: 'Handwerk & Gewerbe', sector: 'Lokales Gewerbe', application: 'Musterteile, Schablonen, Konzeptmodelle' },
    ],
    localAdvantages: [
      'Nur 10 Minuten zur Abholung in Gunskirchen',
      'Same-Day-Fertigung für dringende Modelle',
      'Persönliche Beratung vor Ort möglich',
      'Langjährige Erfahrung mit Welser Unternehmen',
    ],
    nearbyRegions: ['oberoesterreich', 'linz'],
    stats: { projekte: '120+', lieferzeit: 'Sofort', materialien: '8+' },
  },

  'st-poelten': {
    slug: 'st-poelten',
    name: 'St. Pölten',
    type: 'stadt',
    title: '3D-Druck St. Pölten – Anbieter & Service',
    h1Title: '3D-Druck St. Pölten – Modelle & Designstudien für NÖ',
    metaTitle: '3D-Druck St. Pölten – Anbieter mit A1-Express ab OÖ',
    metaDescription: '3D-Druck Anbieter für St. Pölten: Studienmodelle, Schulungshilfen und Medientechnik-Objekte drucken lassen. A1-Express, Angebot in 6 Stunden.',
    heroSubtitle: 'Professioneller 3D-Druck für die niederösterreichische Landeshauptstadt. Designmodelle und Einzelstücke für Gewerbe, Bildungseinrichtungen und öffentliche Projekte.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localIndustries: [
      { name: 'FH & Bildungsprojekte', sector: 'Fachhochschule St. Pölten', application: 'Studienmodelle, Anschauungsobjekte, Medientechnik-Modelle' },
      { name: 'Verwaltung & öffentliche Hand', sector: 'Landesregierung NÖ', application: 'Präsentationsmodelle, Anschauungsobjekte, Schulungshilfen' },
      { name: 'Lokales Gewerbe', sector: 'Handwerk & KMU', application: 'Konzeptmodelle, Musterteile, Designstudien' },
      { name: 'Medientechnik', sector: 'Kreativwirtschaft', application: 'Halterungsmodelle, Studiomodelle, Designobjekte' },
    ],
    localAdvantages: [
      'Schnelle Lieferung über A1 Westautobahn',
      'Erfahrung mit öffentlichen Projekten und Bildungseinrichtungen',
      'Zentrale Lage für ganz Niederösterreich',
      'Express-Option für dringende Abgaben',
    ],
    nearbyRegions: ['niederoesterreich', 'wien'],
    stats: { projekte: '35+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },

  'dornbirn': {
    slug: 'dornbirn',
    name: 'Dornbirn',
    type: 'stadt',
    title: '3D-Druck Dornbirn – Anbieter & Service',
    h1Title: '3D-Druck Dornbirn – Präzision für Vorarlberger Design',
    metaTitle: '3D-Druck Dornbirn – Anbieter für Textil & Lichttechnik-Design',
    metaDescription: '3D-Druck Anbieter für Dornbirn: Garnführungs-Studien, Leuchtenmodelle und Kunststoff-Formteile drucken lassen. Auch Lieferung CH/DE, Angebot in 6 Stunden.',
    heroSubtitle: 'Hochpräzise 3D-Druckmodelle für Vorarlberger Unternehmen. Designstudien und Konzeptmodelle für Textiltechnik, Kunststoffdesign und Lichttechnik – Qualität, die zum Ländle passt.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal Autobahn',
    localIndustries: [
      { name: 'Textiltechnik-Modelle', sector: 'Textil & Bekleidung', application: 'Modelle für Textilmaschinen-Präsentationen, Garnführungs-Studien, Designkonzepte' },
      { name: 'Kunststoff-Designstudien', sector: 'Kunststofftechnik', application: 'Vorabmodelle für Formteile, Designstudien, Konzeptvisualisierungen' },
      { name: 'Lichttechnik-Modelle', sector: 'Beleuchtung & Elektrik', application: 'Leuchtenmodelle, Reflektormodelle, Designstudien' },
      { name: 'Möbeldesign', sector: 'Möbelindustrie', application: 'Beschlagmodelle, Designstudien, Konzeptmuster' },
    ],
    localAdvantages: [
      'Erfahrung mit Vorarlberger Designunternehmen',
      'Grenznahe Lieferung auch nach CH und Süddeutschland',
      'Design-Kompetenz für anspruchsvolle Oberflächen',
      'Express-Option für Entwicklungsprojekte',
    ],
    nearbyRegions: ['vorarlberg'],
    stats: { projekte: '30+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },

  'gunskirchen': {
    slug: 'gunskirchen',
    name: 'Gunskirchen',
    type: 'standort',
    title: '3D-Druck Gunskirchen – Unser Standort',
    h1Title: '3D-Druck Gunskirchen – Direkt vom Hersteller',
    metaTitle: '3D Druck Gunskirchen – Direkt abholen | ekdruck',
    metaDescription: 'Unser Standort: Morgens bestellt, abends fertig. Qualitätsprüfung vor Ort, 10+ Materialien, kein Versandrisiko. Jetzt Termin buchen.',
    heroSubtitle: 'Hier werden Ihre Modelle gedruckt. Besuchen Sie uns in Gunskirchen – persönliche Abholung, Beratung vor Ort und Same-Day-Service ohne Umwege.',
    deliveryTime: 'Sofort',
    deliveryNote: 'Persönliche Abholung direkt am Produktionsstandort',
    localIndustries: [
      { name: 'Direktabholung', sector: 'Lokale Unternehmen', application: 'Kein Versandrisiko, persönliche Qualitätsprüfung vor Ort' },
      { name: 'Beratung vor Ort', sector: 'Alle Branchen', application: 'Materialwahl, Designberatung, gemeinsame Konzeptoptimierung' },
      { name: 'Eilaufträge', sector: 'Express-Service', application: 'Vom Dateiupload zum fertigen Modell am selben Tag' },
      { name: 'Projektmengen', sector: '10-100 Stück', application: 'Gleichbleibende Qualität, persönliche Abnahme jeder Charge' },
    ],
    localAdvantages: [
      'Persönliche Abholung direkt am Standort',
      'Same-Day-Service – morgens bestellt, abends fertig',
      'Qualitätsprüfung gemeinsam vor Ort',
      'Kein Versandrisiko, keine Wartezeit',
    ],
    nearbyRegions: ['wels', 'linz', 'oberoesterreich'],
    stats: { projekte: '500+', lieferzeit: 'Sofort', materialien: '10+' },
  },

  // BUNDESLÄNDER
  'oberoesterreich': {
    slug: 'oberoesterreich',
    name: 'Oberösterreich',
    type: 'bundesland',
    title: '3D-Druck Oberösterreich – Anbieter aus Gunskirchen',
    h1Title: '3D-Druck Oberösterreich – Lokale Fertigung in Gunskirchen',
    metaTitle: '3D-Druck Oberösterreich – Anbieter aus Gunskirchen, Same-Day',
    metaDescription: '3D-Druck Anbieter mitten in OÖ: Modelle, Prototypen und Schulungsobjekte aus Gunskirchen. Same-Day möglich, persönliche Abholung, Angebot in 6 Stunden.',
    heroSubtitle: 'Ihr lokaler 3D-Druck-Partner in Oberösterreich. Persönliche Abholung in Gunskirchen oder Express-Lieferung in den gesamten Zentralraum – von der Designstudie bis zur Projektmenge.',
    deliveryTime: 'Sofort / Abholung',
    deliveryNote: 'Lokale Fertigung – persönliche Abholung in Gunskirchen möglich',
    localIndustries: [
      { name: 'Präsentationsmodelle', sector: 'Industrieregion OÖ', application: 'Schnittmodelle, Schulungsobjekte, Anschauungsmodelle' },
      { name: 'Designstudien', sector: 'Produktentwicklung', application: 'Konzeptmodelle, Formstudien, Designvisualisierungen' },
      { name: 'Kunststoff-Konzeptmodelle', sector: 'Kunststoffcluster OÖ', application: 'Vorabmodelle für Formteile, Designstudien, Visualisierungen' },
      { name: 'Agrar-Modelle', sector: 'Agrar & Food', application: 'Konzeptmodelle, Verpackungsdesign-Studien, Displayobjekte' },
    ],
    localAdvantages: [
      'Lokaler Hersteller – kürzeste Wege in ganz OÖ',
      'Persönliche Abholung in Gunskirchen',
      'Same-Day für dringende Projekte',
      'Erfahrung mit OÖ Unternehmen',
    ],
    nearbyRegions: ['niederoesterreich', 'salzburg', 'linz', 'wels'],
    stats: { projekte: '300+', lieferzeit: 'Sofort', materialien: '10+' },
  },

  'niederoesterreich': {
    slug: 'niederoesterreich',
    name: 'Niederösterreich',
    type: 'bundesland',
    title: '3D-Druck Niederösterreich – Anbieter & Service',
    h1Title: '3D-Druck Niederösterreich – Vom Waldviertel bis zum Wiener Umland',
    metaTitle: '3D-Druck Niederösterreich – Anbieter für KMU & Agrartechnik',
    metaDescription: '3D-Druck Anbieter für Niederösterreich: Konzeptmodelle, Schablonen und Weinbau-Zubehör drucken lassen. A1-Lieferung in 5–7 Tagen, Angebot in 6 Stunden.',
    heroSubtitle: 'Professioneller 3D-Druck für das größte Bundesland. Designmodelle und Einzelstücke für KMU, Gewerbebetriebe und landwirtschaftliche Innovatoren in ganz Niederösterreich.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1/S33',
    localIndustries: [
      { name: 'KMU & Gewerbe', sector: 'Handwerk & Kleinbetriebe', application: 'Konzeptmodelle, Schablonen, Designstudien nach Maß' },
      { name: 'Agrartechnik-Modelle', sector: 'Landwirtschaft', application: 'Konzeptmodelle, Designstudien für Spezialgeräte' },
      { name: 'Wiener Speckgürtel', sector: 'Technologiebetriebe', application: 'Designmodelle, Konzeptstudien, Präsentationsobjekte' },
      { name: 'Weinbau-Zubehör', sector: 'Weinwirtschaft', application: 'Spezialmodelle, Halterungen, individuelle Displayobjekte' },
    ],
    localAdvantages: [
      'Zentrale Lage zwischen Wien und Linz',
      'Schnelle Lieferung in alle NÖ-Regionen',
      'Erfahrung mit Kleinbetrieben und Landwirtschaft',
      'Flexible Stückzahlen ab 1 Teil',
    ],
    nearbyRegions: ['wien', 'oberoesterreich', 'st-poelten'],
    stats: { projekte: '60+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'steiermark': {
    slug: 'steiermark',
    name: 'Steiermark',
    type: 'bundesland',
    title: '3D-Druck Steiermark – Anbieter & Service',
    h1Title: '3D-Druck Steiermark – Designmodelle & Konzeptstudien',
    metaTitle: '3D-Druck Steiermark – Anbieter für Green Tech & TU Graz',
    metaDescription: '3D-Druck Anbieter für die Steiermark: Konzeptmodelle für Energiesysteme, Studienarbeiten und Demonstrationsmodelle drucken lassen. Express via A9.',
    heroSubtitle: 'Hochwertige 3D-Druckmodelle für das Grüne Herz Österreichs. Designstudien, Konzeptmodelle und Präsentationsobjekte für steirische Unternehmen und Forschungseinrichtungen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express nach Graz über A9 Pyhrnautobahn',
    localIndustries: [
      { name: 'Konzeptmodelle', sector: 'Produktdesign', application: 'Formstudien, Designvarianten, Produktvisualisierungen' },
      { name: 'Green Tech Modelle', sector: 'Umwelttechnologie', application: 'Konzeptmodelle für Energiesysteme, Visualisierungen, Schaumodelle' },
      { name: 'Anschauungsmodelle', sector: 'Industriepräsentation', application: 'Schnittmodelle, Demonstrationsmodelle, Schulungsobjekte' },
      { name: 'Universitäten & FH', sector: 'TU Graz / FH Joanneum', application: 'Forschungsmodelle, Studienarbeiten, Labormodelle' },
    ],
    localAdvantages: [
      'Express-Lieferung über A9 in die Steiermark',
      'Erfahrung mit steirischen Technologieunternehmen',
      'Designmodelle für Green-Tech-Innovationen',
      'Flexible Fertigung für Forschungsprojekte',
    ],
    nearbyRegions: ['kaernten', 'burgenland', 'graz'],
    stats: { projekte: '80+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'kaernten': {
    slug: 'kaernten',
    name: 'Kärnten',
    type: 'bundesland',
    title: '3D-Druck Kärnten – Anbieter & Service',
    h1Title: '3D-Druck Kärnten – Designmodelle, Holzmodelle & Innovation',
    metaTitle: '3D-Druck Kärnten – Anbieter für Holzindustrie & Tourismus',
    metaDescription: '3D-Druck Anbieter für Kärnten: Verbindungsstudien, Displayobjekte und Gehäusemodelle drucken lassen. Robuster Versand über A10, Angebot in 6 Stunden.',
    heroSubtitle: 'Professioneller 3D-Druck für Kärntner Unternehmen. Designmodelle, Präsentationsobjekte und individuelle Einzelstücke – zuverlässig über die Tauernautobahn.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localIndustries: [
      { name: 'Elektronik-Schaumodelle', sector: 'Technologieregion', application: 'Gehäusemodelle, Produktvisualisierungen, Präsentationsobjekte' },
      { name: 'Holzindustrie-Modelle', sector: 'Holzverarbeitung', application: 'Verbindungselement-Modelle, Designstudien, Konzeptvisualisierungen' },
      { name: 'Tourismus-Objekte', sector: 'Hotellerie & Therme', application: 'Displayhalter, Dekorationsobjekte, Designobjekte' },
      { name: 'IT & Kreativ', sector: 'Digitale Wirtschaft', application: 'Produktmockups, Konzeptmodelle, Präsentationsobjekte' },
    ],
    localAdvantages: [
      'Zuverlässiger Versand über Tauernautobahn',
      'Erfahrung mit Technologie- und Holzindustrie',
      'Express-Option für Entwicklungssprints',
      'Robuste Verpackung für Alpentransport',
    ],
    nearbyRegions: ['steiermark', 'klagenfurt', 'villach'],
    stats: { projekte: '50+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'vorarlberg': {
    slug: 'vorarlberg',
    name: 'Vorarlberg',
    type: 'bundesland',
    title: '3D-Druck Vorarlberg – Anbieter & Service',
    h1Title: '3D-Druck Vorarlberg – Präzision für das Ländle',
    metaTitle: '3D-Druck Vorarlberg – Anbieter für Export-Industrie & Design',
    metaDescription: '3D-Druck Anbieter für Vorarlberg: Textilmaschinen-Studien, Beschlagmodelle und Kunststoff-Mockups drucken lassen. Auch Lieferung in die Schweiz.',
    heroSubtitle: 'Hochpräzise 3D-Druckmodelle für Vorarlberger Unternehmen. Designstudien und Konzeptmodelle für Textiltechnik, Kunststoffdesign und die exportstarke Industrie im Ländle.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal',
    localIndustries: [
      { name: 'Textiltechnik-Modelle', sector: 'Textilmaschinen', application: 'Garnführungs-Modelle, Präsentationsmodelle, Designkonzepte' },
      { name: 'Kunststoff-Designstudien', sector: 'Kunststoffindustrie', application: 'Vorabmodelle, Designstudien, Konzeptvisualisierungen' },
      { name: 'Beleuchtungs-Design', sector: 'Lichttechnik', application: 'Leuchtenmodelle, Reflektormodelle, Designstudien' },
      { name: 'Beschlag-Design', sector: 'Möbel & Bau', application: 'Scharnier-Designstudien, Beschlagmodelle, Konzeptmuster' },
    ],
    localAdvantages: [
      'Erfahrung mit Vorarlberger Exportindustrie',
      'Grenznahe Lieferung auch nach CH und Süddeutschland',
      'Design-Qualität für anspruchsvolle Industriekunden',
      'Express-Option für Entwicklungssprints',
    ],
    nearbyRegions: ['dornbirn'],
    stats: { projekte: '40+', lieferzeit: '5-7 Tage', materialien: '8+' },
  },

  'burgenland': {
    slug: 'burgenland',
    name: 'Burgenland',
    type: 'bundesland',
    title: '3D-Druck Burgenland – Anbieter & Service',
    h1Title: '3D-Druck Burgenland – Modelle & Einzelstücke',
    metaTitle: '3D-Druck Burgenland – Anbieter für Agrar, Wein & Energie',
    metaDescription: '3D-Druck Anbieter für das Burgenland: PV-Montage-Studien, Weinbau-Displays und Agrartechnik-Modelle drucken lassen. Versand via Wien/A4.',
    heroSubtitle: 'Professioneller 3D-Druck für das östlichste Bundesland. Designmodelle und Einzelstücke für Agrar-Innovatoren, Weinbau und Betriebe im Bereich erneuerbare Energie.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über Wien/A4',
    localIndustries: [
      { name: 'Agrartechnik-Modelle', sector: 'Landwirtschaft', application: 'Konzeptmodelle, Designstudien, Visualisierungen für Geräte' },
      { name: 'Weinbau-Design', sector: 'Weinwirtschaft', application: 'Displayobjekte, Spezialmodelle, individuelle Designstücke' },
      { name: 'Energie-Modelle', sector: 'Photovoltaik & Wind', application: 'Konzeptmodelle, Montage-Studien, Designvisualisierungen' },
      { name: 'Tourismus-Ausstattung', sector: 'Neusiedlersee-Region', application: 'Displayhalter, Infotafel-Modelle, Souvenirobjekte' },
    ],
    localAdvantages: [
      'Schnelle Lieferung über Wien/A4',
      'Erfahrung mit landwirtschaftlichen Innovationsprojekten',
      'Flexible Fertigung ab Stückzahl 1',
      'Individuelle Beratung für Erstprojekte',
    ],
    nearbyRegions: ['wien', 'niederoesterreich', 'steiermark'],
    stats: { projekte: '20+', lieferzeit: '5-7 Tage', materialien: '6+' },
  },
};

// Helpers
export const getAllDruckRegions = (): RegionalDruckData[] => Object.values(regionalDruckData);
export const getDruckRegionBySlug = (slug: string): RegionalDruckData | undefined => regionalDruckData[slug];
