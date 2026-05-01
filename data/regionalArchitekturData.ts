// Regional data for Architekturmodell landing pages
// Same regions as Messemodelle, adapted for architecture context

export interface RegionalArchitekturData {
  slug: string;
  name: string;
  type: 'bundesland' | 'stadt';
  title: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  deliveryTime: string;
  deliveryNote: string;
  localArchitekturContext: {
    name: string;
    location: string;
    type: string;
  }[];
  localAdvantages: string[];
  nearbyRegions: string[];
  stats: {
    projekte: string;
    lieferzeit: string;
    kunden: string;
  };
}

export const regionalArchitekturData: Record<string, RegionalArchitekturData> = {
  'wien': {
    slug: 'wien',
    name: 'Wien',
    type: 'bundesland',
    title: 'Architekturmodelle für Wien',
    h1Title: '3D-Druck Architekturmodelle Wien – Express-Fertigung',
    metaTitle: 'Architekturmodelle Wien ★5,0 – 24h Express · Angebot in 6h',
    metaDescription: 'Architekturmodelle für Wien ✓ Wettbewerbsmodelle ✓ Stadtplanung ✓ Express 24h ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) – Österreichs Spezialist für Architekturbüros.',
    heroSubtitle: 'Präzise Architekturmodelle für Wiener Architekturbüros. Wettbewerbsmodelle, Präsentationsmodelle und Studienmodelle – Express-Lieferung nach Wien.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express-Versand direkt nach Wien möglich',
    localArchitekturContext: [
      { name: 'Wettbewerbsmodelle', location: 'Architekturbüros Wien', type: 'Wettbewerb' },
      { name: 'Stadtplanungsmodelle', location: 'MA 21 / Stadtentwicklung', type: 'Städtebau' },
      { name: 'Immobilienpräsentationen', location: 'Immobilienentwickler Wien', type: 'Präsentation' },
      { name: 'Universitätsprojekte', location: 'TU Wien / Akademie', type: 'Ausbildung' },
    ],
    localAdvantages: [
      'Express-Lieferung für Wiener Wettbewerbstermine',
      'Erfahrung mit Wiener Architekturbüros',
      'Persönliche Übergabe in Wien möglich',
      'Modelle für Stadtentwicklungsprojekte',
    ],
    nearbyRegions: ['niederoesterreich', 'burgenland'],
    stats: { projekte: '100+', lieferzeit: '5-7 Tage', kunden: '30+' },
  },

  'niederoesterreich': {
    slug: 'niederoesterreich',
    name: 'Niederösterreich',
    type: 'bundesland',
    title: 'Architekturmodelle für Niederösterreich',
    h1Title: '3D-Druck Architekturmodelle Niederösterreich',
    metaTitle: 'Architekturmodelle NÖ – Wohnbau & Sanierung | ekdruck',
    metaDescription: 'NÖ-Architekten: Einfamilienhaus-Modelle, Gemeindebauten & Sanierungsstudien maßstabsgetreu gefertigt. A1-Lieferung. Ab €20 anfragen.',
    heroSubtitle: 'Professionelle Architekturmodelle für das größte Bundesland. Schnelle Lieferung in alle Regionen Niederösterreichs.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1/S33',
    localArchitekturContext: [
      { name: 'Einfamilienhäuser', location: 'Speckgürtel Wien', type: 'Wohnbau' },
      { name: 'Gemeindebauprojekte', location: 'NÖ Gemeinden', type: 'Kommunal' },
      { name: 'Gewerbebauten', location: 'Industriegebiete NÖ', type: 'Gewerbe' },
      { name: 'Sanierungsprojekte', location: 'Historische Orte', type: 'Sanierung' },
    ],
    localAdvantages: [
      'Zentrale Lage zwischen Wien und Linz',
      'Kurze Lieferwege ins gesamte Bundesland',
      'Erfahrung mit Gemeinde-Bauprojekten',
      'Flexible Lieferoptionen',
    ],
    nearbyRegions: ['wien', 'oberoesterreich', 'st-poelten'],
    stats: { projekte: '40+', lieferzeit: '5-7 Tage', kunden: '15+' },
  },

  'oberoesterreich': {
    slug: 'oberoesterreich',
    name: 'Oberösterreich',
    type: 'bundesland',
    title: 'Architekturmodelle für Oberösterreich',
    h1Title: '3D-Druck Architekturmodelle Oberösterreich – Lokale Fertigung',
    metaTitle: 'Architekturmodelle OÖ – Abholung am selben Tag | ekdruck',
    metaDescription: 'OÖ-Architekturbüros: Industrie-, Wohn- & Gewerbemodelle direkt aus Gunskirchen. Same-Day für Wettbewerbsabgaben. Persönliche Übergabe möglich.',
    heroSubtitle: 'Ihr lokaler Partner in Oberösterreich. Persönliche Abholung in Gunskirchen oder Express-Lieferung – vom Studienmodell bis zum Wettbewerbsmodell.',
    deliveryTime: 'Sofort / Abholung',
    deliveryNote: 'Lokale Fertigung – persönliche Abholung in Gunskirchen möglich',
    localArchitekturContext: [
      { name: 'Industriebauten', location: 'OÖ Industriegebiet', type: 'Industrie' },
      { name: 'Wohnbauprojekte', location: 'Linz / Wels Umgebung', type: 'Wohnbau' },
      { name: 'Stadtentwicklung', location: 'Linz / Wels / Steyr', type: 'Städtebau' },
      { name: 'Gewerbeprojekte', location: 'Zentralraum OÖ', type: 'Gewerbe' },
    ],
    localAdvantages: [
      'Lokaler Hersteller – kürzeste Wege',
      'Persönliche Abholung in Gunskirchen',
      'Same-Day-Service für dringende Wettbewerbe',
      'Erfahrung mit OÖ Architekturbüros',
    ],
    nearbyRegions: ['niederoesterreich', 'salzburg', 'linz', 'wels'],
    stats: { projekte: '80+', lieferzeit: 'Sofort', kunden: '40+' },
  },

  'steiermark': {
    slug: 'steiermark',
    name: 'Steiermark',
    type: 'bundesland',
    title: 'Architekturmodelle für die Steiermark',
    h1Title: '3D-Druck Architekturmodelle Steiermark – Express nach Graz',
    metaTitle: 'Architekturmodelle Steiermark – TU Graz | ekdruck',
    metaDescription: 'Steirische Architekten & TU Graz: Wettbewerbsmodelle, Altstadtsanierungen & Smart-City-Studien. Express über A9, Angebot in 6h.',
    heroSubtitle: 'Hochwertige Architekturmodelle für die Steiermark. Express-Lieferung nach Graz und in alle steirischen Regionen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express nach Graz über A9',
    localArchitekturContext: [
      { name: 'Universitätsprojekte', location: 'TU Graz', type: 'Ausbildung' },
      { name: 'Wohnbauprojekte', location: 'Großraum Graz', type: 'Wohnbau' },
      { name: 'Gewerbebauten', location: 'Steirische Industriegebiete', type: 'Gewerbe' },
      { name: 'Sanierungsprojekte', location: 'Grazer Altstadt', type: 'Sanierung' },
    ],
    localAdvantages: [
      'Express-Lieferung nach Graz',
      'Erfahrung mit TU Graz Projekten',
      'Industrie-Kompetenz für steirische Architekten',
      'Flexible Terminplanung für Wettbewerbe',
    ],
    nearbyRegions: ['kaernten', 'burgenland', 'graz'],
    stats: { projekte: '50+', lieferzeit: '5-7 Tage', kunden: '20+' },
  },

  'kaernten': {
    slug: 'kaernten',
    name: 'Kärnten',
    type: 'bundesland',
    title: 'Architekturmodelle für Kärnten',
    h1Title: '3D-Druck Architekturmodelle Kärnten',
    metaTitle: 'Architekturmodelle Kärnten – Holzbau & Alpin | ekdruck',
    metaDescription: 'Kärntner Architekten: Holzbau-Modelle, Tourismusbauten & alpine Wettbewerbsmodelle. Robuste Alpenlogistik über A10. Jetzt Modell anfragen.',
    heroSubtitle: 'Präzise Architekturmodelle für Kärntner Architekturbüros. Holzbau-Modelle, Tourismusbauten und alpine Architektur.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localArchitekturContext: [
      { name: 'Holzbau-Architektur', location: 'Kärntner Holzbauregion', type: 'Holzbau' },
      { name: 'Tourismusbauten', location: 'Wörthersee / Nassfeld', type: 'Tourismus' },
      { name: 'Wohnbauprojekte', location: 'Klagenfurt / Villach', type: 'Wohnbau' },
      { name: 'Gemeindeprojekte', location: 'Kärntner Gemeinden', type: 'Kommunal' },
    ],
    localAdvantages: [
      'Spezialist für Holzbau-Architekturmodelle',
      'Erfahrung mit alpiner Architektur',
      'Express-Option für dringende Wettbewerbe',
      'Robuste Verpackung für Alpentransport',
    ],
    nearbyRegions: ['steiermark', 'tirol', 'klagenfurt', 'villach'],
    stats: { projekte: '25+', lieferzeit: '5-7 Tage', kunden: '10+' },
  },

  'salzburg': {
    slug: 'salzburg',
    name: 'Salzburg',
    type: 'bundesland',
    title: 'Architekturmodelle für Salzburg',
    h1Title: '3D-Druck Architekturmodelle Salzburg – Präzision für Architekten',
    metaTitle: 'Architekturmodelle Salzburg ★5,0 – UNESCO · 24h Express',
    metaDescription: 'Architekturmodelle für Salzburg ✓ Altstadt ✓ Hotels ✓ Festspiele ✓ Express via A1 ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Hochwertige Architekturmodelle für Salzburger Architekten. Von historischen Sanierungen bis zu modernen Neubauten.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localArchitekturContext: [
      { name: 'Altstadtsanierungen', location: 'Salzburger Altstadt (UNESCO)', type: 'Sanierung' },
      { name: 'Hotelprojekte', location: 'Salzburger Land', type: 'Tourismus' },
      { name: 'Wettbewerbsmodelle', location: 'Architekturbüros Salzburg', type: 'Wettbewerb' },
      { name: 'Kulturbauten', location: 'Festspielhäuser', type: 'Kultur' },
    ],
    localAdvantages: [
      'Kurze Lieferwege über A1',
      'Erfahrung mit historischen Sanierungsmodellen',
      'Ideal für Tourismus- und Hotelprojekte',
      'Express-Service für Wettbewerbstermine',
    ],
    nearbyRegions: ['oberoesterreich', 'tirol', 'kaernten'],
    stats: { projekte: '35+', lieferzeit: '5-7 Tage', kunden: '15+' },
  },

  'tirol': {
    slug: 'tirol',
    name: 'Tirol',
    type: 'bundesland',
    title: 'Architekturmodelle für Tirol',
    h1Title: '3D-Druck Architekturmodelle Tirol – Alpine Architektur',
    metaTitle: 'Architekturmodelle Tirol – Bergstationen | ekdruck',
    metaDescription: 'Tiroler Architekten: Geländemodelle, Seilbahnstationen & Hotel-Wettbewerbe mit Topografie. Robuste Alpenverpackung inklusive. Jetzt anfragen.',
    heroSubtitle: 'Professionelle Architekturmodelle für Tiroler Architekten. Spezialist für alpine Architektur, Bergstationen und Tourismusbauten.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A13',
    localArchitekturContext: [
      { name: 'Alpine Architektur', location: 'Tiroler Alpenregion', type: 'Alpin' },
      { name: 'Seilbahnstationen', location: 'Skigebiete Tirol', type: 'Infrastruktur' },
      { name: 'Hotelprojekte', location: 'Tourismuszentren', type: 'Tourismus' },
      { name: 'Universitätsprojekte', location: 'Universität Innsbruck', type: 'Ausbildung' },
    ],
    localAdvantages: [
      'Erfahrung mit alpiner Architektur',
      'Topografische Geländemodelle',
      'Express-Option für Wettbewerbstermine',
      'Robuste Verpackung für Alpentransport',
    ],
    nearbyRegions: ['salzburg', 'vorarlberg', 'innsbruck'],
    stats: { projekte: '30+', lieferzeit: '5-7 Tage', kunden: '12+' },
  },

  'vorarlberg': {
    slug: 'vorarlberg',
    name: 'Vorarlberg',
    type: 'bundesland',
    title: 'Architekturmodelle für Vorarlberg',
    h1Title: '3D-Druck Architekturmodelle Vorarlberg – Baukulturgemeinde',
    metaTitle: 'Architekturmodelle Vorarlberg – Baukultur | ekdruck',
    metaDescription: 'Vorarlberger Baukultur: Bregenzerwald-Holzbau, Wettbewerbsmodelle & Kunsthaus-Projekte. Design-Kompetenz fürs Ländle. Angebot in 6h.',
    heroSubtitle: 'Hochwertige Architekturmodelle für das Ländle – bekannt für exzellente Baukultur. Design-Kompetenz für anspruchsvolle Architekturbüros.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal',
    localArchitekturContext: [
      { name: 'Vorarlberger Baukultur', location: 'Bregenzerwald / Rheintal', type: 'Baukultur' },
      { name: 'Holzbau-Architektur', location: 'Vorarlberger Holzbauregion', type: 'Holzbau' },
      { name: 'Wettbewerbsmodelle', location: 'Architekturbüros Vorarlberg', type: 'Wettbewerb' },
      { name: 'Kulturbauten', location: 'Kunsthaus Bregenz', type: 'Kultur' },
    ],
    localAdvantages: [
      'Erfahrung mit Vorarlberger Baukultur',
      'Design-Kompetenz für kreative Projekte',
      'Schweiz- und Deutschland-nah',
      'Express-Option für Wettbewerbstermine',
    ],
    nearbyRegions: ['tirol', 'dornbirn'],
    stats: { projekte: '20+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },

  'burgenland': {
    slug: 'burgenland',
    name: 'Burgenland',
    type: 'bundesland',
    title: 'Architekturmodelle für das Burgenland',
    h1Title: '3D-Druck Architekturmodelle Burgenland',
    metaTitle: 'Architekturmodelle Burgenland – Weingut | ekdruck',
    metaDescription: 'Burgenlands Architekten: Weingut-Architektur am Neusiedlersee, Tourismusprojekte & Ortskern-Sanierungen. Lieferung via Wien/A4. Jetzt anfragen.',
    heroSubtitle: 'Professionelle Architekturmodelle für das Burgenland. Schnelle Lieferung über Wien ins gesamte Bundesland.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über Wien/A4',
    localArchitekturContext: [
      { name: 'Weingut-Architektur', location: 'Neusiedlersee Region', type: 'Wein' },
      { name: 'Tourismusprojekte', location: 'Neusiedler See', type: 'Tourismus' },
      { name: 'Wohnbauprojekte', location: 'Burgenland Nord', type: 'Wohnbau' },
      { name: 'Sanierungen', location: 'Historische Ortskerne', type: 'Sanierung' },
    ],
    localAdvantages: [
      'Kurze Wege über Wien',
      'Erfahrung mit Weingut-Architektur',
      'Flexible Lieferoptionen',
      'Regionale Expertise',
    ],
    nearbyRegions: ['wien', 'niederoesterreich', 'steiermark'],
    stats: { projekte: '15+', lieferzeit: '5-7 Tage', kunden: '5+' },
  },

  // STÄDTE
  'linz': {
    slug: 'linz',
    name: 'Linz',
    type: 'stadt',
    title: 'Architekturmodelle für Linz',
    h1Title: '3D-Druck Architekturmodelle Linz – Same Day Delivery',
    metaTitle: 'Architekturmodelle Linz ★5,0 – Same-Day · 20 Min',
    metaDescription: 'Architekturmodelle für Linz ✓ Same-Day-Delivery ✓ 20 Min Entfernung ✓ Industrie & Stadtbau ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Ihr lokaler Partner für Architekturmodelle in Linz. Nur 20 Minuten entfernt – Same-Day-Delivery für dringende Wettbewerbsabgaben.',
    deliveryTime: 'Same Day',
    deliveryNote: 'Nur 20 Minuten von unserem Standort',
    localArchitekturContext: [
      { name: 'Stadtentwicklung', location: 'Linz AG / Magistrat', type: 'Städtebau' },
      { name: 'Industriearchitektur', location: 'voestalpine Areal', type: 'Industrie' },
      { name: 'Kulturbauten', location: 'Tabakfabrik / Ars Electronica', type: 'Kultur' },
      { name: 'Wohnbauprojekte', location: 'Linzer Stadtgebiet', type: 'Wohnbau' },
    ],
    localAdvantages: [
      'Nur 20 Minuten Entfernung',
      'Same-Day-Delivery möglich',
      'Persönliche Übergabe in Linz',
      'Erfahrung mit Linzer Architekturbüros',
    ],
    nearbyRegions: ['oberoesterreich', 'wels'],
    stats: { projekte: '60+', lieferzeit: 'Same Day', kunden: '25+' },
  },

  'wels': {
    slug: 'wels',
    name: 'Wels',
    type: 'stadt',
    title: 'Architekturmodelle für Wels',
    h1Title: '3D-Druck Architekturmodelle Wels – Lokaler Partner',
    metaTitle: 'Architekturmodelle Wels – Abholung in 10 Min | ekdruck',
    metaDescription: 'Welser Architekten: Gewerbepark-Modelle, Schulbauten & Wohnbau. Persönliche Abholung in 10 Min aus Gunskirchen. Last-Minute möglich.',
    heroSubtitle: 'Direkt vor Ort – Ihr lokaler Partner für Architekturmodelle. Persönliche Abholung in Gunskirchen – nur 10 Minuten entfernt.',
    deliveryTime: 'Sofort',
    deliveryNote: 'Persönliche Abholung in Gunskirchen – nur 10 Minuten',
    localArchitekturContext: [
      { name: 'Stadtentwicklung', location: 'Wels Innenstadt', type: 'Städtebau' },
      { name: 'Gewerbeparks', location: 'Wels Gewerbegebiete', type: 'Gewerbe' },
      { name: 'Wohnbauprojekte', location: 'Wels und Umgebung', type: 'Wohnbau' },
      { name: 'Schulbauten', location: 'HTL Wels / FH OÖ', type: 'Bildung' },
    ],
    localAdvantages: [
      'Nur 10 Minuten entfernt',
      'Persönliche Abholung möglich',
      'Last-Minute-Service für Wettbewerbsabgaben',
      'Erfahrung mit lokalen Architekten',
    ],
    nearbyRegions: ['oberoesterreich', 'linz'],
    stats: { projekte: '45+', lieferzeit: 'Sofort', kunden: '20+' },
  },

  'graz': {
    slug: 'graz',
    name: 'Graz',
    type: 'stadt',
    title: 'Architekturmodelle für Graz',
    h1Title: '3D-Druck Architekturmodelle Graz – Express-Lieferung',
    metaTitle: 'Architekturmodelle Graz ★5,0 – Express A9 · Angebot 6h',
    metaDescription: 'Architekturmodelle für Graz ✓ TU-Projekte ✓ Altstadtsanierung ✓ Smart City ✓ Express via A9 ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Hochwertige Architekturmodelle für die steirische Landeshauptstadt. Express-Lieferung für TU Graz und Grazer Architekturbüros.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Express-Versand über A9 Pyhrnautobahn',
    localArchitekturContext: [
      { name: 'TU Graz Projekte', location: 'Technische Universität Graz', type: 'Ausbildung' },
      { name: 'Altstadtsanierung', location: 'Grazer Altstadt (UNESCO)', type: 'Sanierung' },
      { name: 'Smart City Projekte', location: 'Graz Smart City', type: 'Innovation' },
      { name: 'Wohnbauprojekte', location: 'Grazer Stadtentwicklung', type: 'Wohnbau' },
    ],
    localAdvantages: [
      'Express-Lieferung nach Graz',
      'Erfahrung mit TU Graz Projekten',
      'Flexible Terminplanung für Wettbewerbe',
      'Persönlicher Ansprechpartner',
    ],
    nearbyRegions: ['steiermark', 'kaernten'],
    stats: { projekte: '40+', lieferzeit: '5-7 Tage', kunden: '15+' },
  },

  'klagenfurt': {
    slug: 'klagenfurt',
    name: 'Klagenfurt',
    type: 'stadt',
    title: 'Architekturmodelle für Klagenfurt',
    h1Title: '3D-Druck Architekturmodelle Klagenfurt',
    metaTitle: 'Architekturmodelle Klagenfurt ★5,0 – Holzbau · 24h',
    metaDescription: 'Architekturmodelle für Klagenfurt ✓ Holzbau ✓ Wörthersee ✓ Stadtentwicklung ✓ A10-Express ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Professionelle Architekturmodelle für Klagenfurter Architekturbüros. Holzbau-Modelle und alpine Architektur.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10 Tauernautobahn',
    localArchitekturContext: [
      { name: 'Seearchitektur', location: 'Wörthersee Region', type: 'Tourismus' },
      { name: 'Holzbau-Projekte', location: 'Klagenfurter Umgebung', type: 'Holzbau' },
      { name: 'Stadtentwicklung', location: 'Klagenfurt Innenstadt', type: 'Städtebau' },
    ],
    localAdvantages: [
      'Spezialist für Holzbau-Modelle',
      'Express-Option für dringende Wettbewerbe',
      'Erfahrung mit Kärntner Architekten',
      'Zuverlässige Alpen-Logistik',
    ],
    nearbyRegions: ['kaernten', 'villach', 'steiermark'],
    stats: { projekte: '20+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },

  'villach': {
    slug: 'villach',
    name: 'Villach',
    type: 'stadt',
    title: 'Architekturmodelle für Villach',
    h1Title: '3D-Druck Architekturmodelle Villach',
    metaTitle: 'Architekturmodelle Villach – Therme & Gewerbe | ekdruck',
    metaDescription: 'Villacher Architekten: Tourismusbauten, Technologiepark-Projekte & Wohnbau-Modelle. Lieferung über A10/A2 in 5–7 Tagen. Jetzt anfragen.',
    heroSubtitle: 'Professionelle Architekturmodelle für Villacher Architekten. Zuverlässige Lieferung für Projekte in der Draustadt.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A2',
    localArchitekturContext: [
      { name: 'Tourismusbauten', location: 'Villach Thermenregion', type: 'Tourismus' },
      { name: 'Wohnbauprojekte', location: 'Villach Stadtgebiet', type: 'Wohnbau' },
      { name: 'Gewerbeprojekte', location: 'Technologiepark Villach', type: 'Gewerbe' },
    ],
    localAdvantages: [
      'Gute Anbindung über A10',
      'Erfahrung mit Kärntner Projekten',
      'Tourismus-Architektur Kompetenz',
      'Flexible Lieferzeiten',
    ],
    nearbyRegions: ['kaernten', 'klagenfurt', 'tirol'],
    stats: { projekte: '15+', lieferzeit: '5-7 Tage', kunden: '5+' },
  },

  'st-poelten': {
    slug: 'st-poelten',
    name: 'St. Pölten',
    type: 'stadt',
    title: 'Architekturmodelle für St. Pölten',
    h1Title: '3D-Druck Architekturmodelle St. Pölten',
    metaTitle: 'Architekturmodelle St. Pölten – Verwaltung & FH | ekdruck',
    metaDescription: 'St. Pöltner Architekten: Regierungsviertel-Modelle, FH-Projekte & Stadtentwicklung. Direkte A1-Lieferung ab OÖ. Jetzt Modell anfragen.',
    heroSubtitle: 'Professionelle Architekturmodelle für die NÖ Landeshauptstadt. Schnelle Lieferung über A1.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Schnelle Anbindung über A1 Westautobahn',
    localArchitekturContext: [
      { name: 'Regierungsviertel', location: 'NÖ Regierungsviertel', type: 'Verwaltung' },
      { name: 'Stadtentwicklung', location: 'St. Pölten Innenstadt', type: 'Städtebau' },
      { name: 'Bildungsbauten', location: 'FH St. Pölten', type: 'Bildung' },
    ],
    localAdvantages: [
      'Schnelle Lieferung über A1',
      'Zentrale Lage in NÖ',
      'Flexible Terminplanung',
      'Express-Option für Wettbewerbe',
    ],
    nearbyRegions: ['niederoesterreich', 'wien'],
    stats: { projekte: '20+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },

  'innsbruck': {
    slug: 'innsbruck',
    name: 'Innsbruck',
    type: 'stadt',
    title: 'Architekturmodelle für Innsbruck',
    h1Title: '3D-Druck Architekturmodelle Innsbruck – Alpine Architektur',
    metaTitle: 'Architekturmodelle Innsbruck ★5,0 – Alpin · Angebot 6h',
    metaDescription: 'Architekturmodelle für Innsbruck ✓ alpine Architektur ✓ Geländemodelle ✓ Uni-Projekte ✓ ab €20 ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    heroSubtitle: 'Hochwertige Architekturmodelle für die Tiroler Landeshauptstadt. Spezialist für alpine Architektur und Bergstationen.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A10/A13 Brennerautobahn',
    localArchitekturContext: [
      { name: 'Alpine Architektur', location: 'Innsbrucker Alpen', type: 'Alpin' },
      { name: 'Universitätsprojekte', location: 'Universität Innsbruck', type: 'Ausbildung' },
      { name: 'Bergstationen', location: 'Nordkette / Patscherkofel', type: 'Infrastruktur' },
      { name: 'Stadtentwicklung', location: 'Innsbruck Innenstadt', type: 'Städtebau' },
    ],
    localAdvantages: [
      'Spezialist für alpine Architekturmodelle',
      'Topografische Geländemodelle',
      'Robuste Verpackung für Alpentransport',
      'Express-Option für Wettbewerbe',
    ],
    nearbyRegions: ['tirol', 'salzburg', 'vorarlberg'],
    stats: { projekte: '30+', lieferzeit: '5-7 Tage', kunden: '10+' },
  },

  'dornbirn': {
    slug: 'dornbirn',
    name: 'Dornbirn',
    type: 'stadt',
    title: 'Architekturmodelle für Dornbirn',
    h1Title: '3D-Druck Architekturmodelle Dornbirn – Baukultur Vorarlberg',
    metaTitle: 'Architekturmodelle Dornbirn – Bregenzerwald | ekdruck',
    metaDescription: 'Dornbirner Architekturbüros: Bregenzerwald-Holzbau, Rheintal-Gewerbe & Wettbewerbsmodelle. Auch Lieferung CH/DE. Angebot in 6h.',
    heroSubtitle: 'Professionelle Architekturmodelle für die Vorarlberger Baukultur. Design-Kompetenz für anspruchsvolle Architekturbüros im Ländle.',
    deliveryTime: '5-7 Tage',
    deliveryNote: 'Versand über A14 Rheintal Autobahn',
    localArchitekturContext: [
      { name: 'Vorarlberger Baukultur', location: 'Bregenzerwald', type: 'Baukultur' },
      { name: 'Holzbau-Architektur', location: 'Dornbirn / Bregenz', type: 'Holzbau' },
      { name: 'Gewerbearchitektur', location: 'Rheintal', type: 'Gewerbe' },
      { name: 'Wettbewerbsmodelle', location: 'Architekturbüros Vorarlberg', type: 'Wettbewerb' },
    ],
    localAdvantages: [
      'Erfahrung mit Vorarlberger Baukultur',
      'Design-Kompetenz für kreative Architekten',
      'Nähe zu Schweiz und Deutschland',
      'Express-Option für Wettbewerbe',
    ],
    nearbyRegions: ['vorarlberg', 'tirol'],
    stats: { projekte: '20+', lieferzeit: '5-7 Tage', kunden: '8+' },
  },
};

export const getAllArchitekturRegions = (): RegionalArchitekturData[] => Object.values(regionalArchitekturData);
export const getArchitekturBundeslaender = (): RegionalArchitekturData[] => getAllArchitekturRegions().filter(r => r.type === 'bundesland');
export const getArchitekturStaedte = (): RegionalArchitekturData[] => getAllArchitekturRegions().filter(r => r.type === 'stadt');
export const getArchitekturRegionBySlug = (slug: string): RegionalArchitekturData | undefined => regionalArchitekturData[slug];
