// Swiss regional data for Messemodell landing pages
// Covers key Swiss trade fair cities and cantons

export interface SwissMesseData {
  slug: string;
  name: string;
  type: 'kanton' | 'stadt';
  title: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  deliveryTime: string;
  deliveryNote: string;
  localMessen: { name: string; location: string; type: string }[];
  localAdvantages: string[];
  nearbyRegions: string[];
  stats: { messen: string; lieferzeit: string; kunden: string };
}

export const swissMesseData: Record<string, SwissMesseData> = {
  'zuerich': {
    slug: 'zuerich',
    name: 'Zürich',
    type: 'stadt',
    title: 'Messemodelle für Zürich',
    h1Title: 'Messemodelle Zürich – 3D-Druck Express für Schweizer Messen',
    metaTitle: 'Messemodelle Zürich | 3D-Druck Express · ab €30 | ekdruck',
    metaDescription: 'Messemodelle & Exponate für Messen in Zürich drucken lassen. Express-Fertigung, bruchsichere Lieferung inkl. Zollabwicklung. Ab €30 · ★5,0 (31 Bewertungen).',
    heroSubtitle: 'Zürich ist das wirtschaftliche Zentrum der Schweiz mit über 40 jährlichen Fachmessen am Messezentrum Zürich, im Kongresshaus und in der Halle 550. Wir liefern Ihre Ausstellungsmodelle, Exponate und Präsentationsmodelle direkt zum Messegelände – inklusive vollständiger Zollabwicklung.',
    deliveryTime: '3–5 Werktage',
    deliveryNote: 'Lieferung ab Gunskirchen (AT) via A1/A14 Grenzübergang St. Margrethen. Zolldokumentation durch uns.',
    localMessen: [
      { name: 'ArbeitsSicherheit Schweiz', location: 'Messezentrum Zürich', type: 'Arbeitssicherheit' },
      { name: 'FINANZ', location: 'Kongresshaus Zürich', type: 'Finanzen & Banking' },
      { name: 'Giardina', location: 'Messezentrum Zürich', type: 'Garten & Outdoor' },
      { name: 'Bauen & Modernisieren', location: 'Messezentrum Zürich', type: 'Bau & Immobilien' },
      { name: 'Berufsmesse Zürich', location: 'Messezentrum Zürich', type: 'Bildung & Karriere' },
      { name: 'Blickfang Zürich', location: 'Kongresshaus Zürich', type: 'Design & Interieur' },
    ],
    localAdvantages: [
      'Komplette Zollabwicklung für die Schweiz durch uns',
      'Direktlieferung zum Messezentrum Zürich',
      'Erfahrung mit Schweizer Messeausstellern',
      'MWST-konforme Rechnungsstellung (CHF oder EUR)',
    ],
    nearbyRegions: ['basel', 'bern', 'st-gallen', 'luzern'],
    stats: { messen: '40+', lieferzeit: '3–5 Tage', kunden: '10+' },
  },

  'basel': {
    slug: 'basel',
    name: 'Basel',
    type: 'stadt',
    title: 'Messemodelle für Basel',
    h1Title: 'Messemodelle Basel – Exponate für die Swissbau, PRODEX & Co.',
    metaTitle: 'Messemodelle Basel | Swissbau · PRODEX · Express | ekdruck',
    metaDescription: 'Messemodelle für Basel: Exponate & Präsentationsmodelle für Swissbau, PRODEX, Fantasy Basel. Express 24h · ab €30 · Zollabwicklung inklusive.',
    heroSubtitle: 'Die Messe Basel gehört zu den größten Messegeländen Europas und beherbergt internationale Leitmessen wie die Swissbau und die PRODEX. Ob Industriemodell für die Fertigungsindustrie oder Architekturmodell für Bauaussteller – wir liefern Ihr Exponat termingerecht nach Basel.',
    deliveryTime: '3–5 Werktage',
    deliveryNote: 'Dreiländereck-Vorteil: Schnelle Zustellung via A1/Basel Grenzübergang. Zolldokumentation inklusive.',
    localMessen: [
      { name: 'Swissbau', location: 'Messe Basel', type: 'Bau & Immobilien' },
      { name: 'PRODEX', location: 'Messe Basel', type: 'Fertigungsindustrie' },
      { name: 'Fantasy Basel', location: 'Messe Basel', type: 'Entertainment & Games' },
      { name: 'Smart Suisse', location: 'Messe Basel', type: 'Smart City & IoT' },
      { name: 'ILMAC', location: 'Messe Basel', type: 'Chemie & Pharma' },
      { name: 'Igeho', location: 'Messe Basel', type: 'Gastronomie & Hotellerie' },
    ],
    localAdvantages: [
      'Dreiländereck – ideale Lage für internationale Messen',
      'Erfahrung mit Swissbau und PRODEX-Ausstellern',
      'Großmodelle bis 2m+ für Messe Basel Hallen',
      'Zollabwicklung und CHF-Fakturierung möglich',
    ],
    nearbyRegions: ['zuerich', 'bern', 'luzern'],
    stats: { messen: '25+', lieferzeit: '3–5 Tage', kunden: '8+' },
  },

  'bern': {
    slug: 'bern',
    name: 'Bern',
    type: 'stadt',
    title: 'Messemodelle für Bern',
    h1Title: 'Messemodelle Bern – 3D-Druck für BEA, BERNEXPO & Fachmessen',
    metaTitle: 'Messemodelle Bern | BEA · BERNEXPO · Express | ekdruck',
    metaDescription: 'Messemodelle für Bern: Exponate für BEA, BERNEXPO, Suisse Public. Express 24h · ab €30 · bruchsicher · inkl. Zollabwicklung. ★5,0.',
    heroSubtitle: 'Die BEA ist die größte Frühjahrsmesse der Schweiz und das BERNEXPO-Gelände Schauplatz zahlreicher Fachmessen. Wir fertigen Ihre Ausstellungsmodelle und Präsentationsmodelle für Berner Messen – von der Landwirtschaftsanlage bis zum Architekturmodell.',
    deliveryTime: '4–6 Werktage',
    deliveryNote: 'Lieferung via A1/Bern. Zollabwicklung und BERNEXPO-Direktlieferung möglich.',
    localMessen: [
      { name: 'BEA – Frühjahrsmesse', location: 'BERNEXPO', type: 'Gewerbe & Landwirtschaft' },
      { name: 'Suisse Public', location: 'BERNEXPO', type: 'Öffentlicher Sektor' },
      { name: 'Swiss Medtech Expo', location: 'BERNEXPO', type: 'Medizintechnik' },
      { name: 'Ferienmesse Bern', location: 'BERNEXPO', type: 'Tourismus' },
      { name: 'BERNA', location: 'BERNEXPO', type: 'Regionalmesse' },
    ],
    localAdvantages: [
      'Direktlieferung zum BERNEXPO-Gelände',
      'Erfahrung mit BEA und Suisse Public',
      'Modelle für öffentliche Infrastrukturprojekte',
      'Schweizer Zollabwicklung inklusive',
    ],
    nearbyRegions: ['zuerich', 'basel', 'luzern'],
    stats: { messen: '20+', lieferzeit: '4–6 Tage', kunden: '5+' },
  },

  'st-gallen': {
    slug: 'st-gallen',
    name: 'St. Gallen',
    type: 'stadt',
    title: 'Messemodelle für St. Gallen',
    h1Title: 'Messemodelle St. Gallen – Exponate für OLMA & Ostschweizer Messen',
    metaTitle: 'Messemodelle St. Gallen | OLMA · Tier&Technik | ekdruck',
    metaDescription: 'Messemodelle für St. Gallen: Exponate & Schaumodelle für OLMA, Tier&Technik, Offa. Express-Lieferung ab Österreich · ab €30 · ★5,0.',
    heroSubtitle: 'Die OLMA in St. Gallen ist eine der traditionsreichsten Schweizer Messen und das Messegelände Treffpunkt der Ostschweiz. Von landwirtschaftlichen Anlagenmodellen bis zu Industrieexponate für die Tier&Technik – wir liefern Ihre Messemodelle termingerecht in die Ostschweiz.',
    deliveryTime: '3–4 Werktage',
    deliveryNote: 'Kürzester Weg in die Schweiz: Grenzübergang St. Margrethen liegt nur 2h von unserem Standort.',
    localMessen: [
      { name: 'OLMA', location: 'Olma Messen St.Gallen', type: 'Landwirtschaft & Ernährung' },
      { name: 'Tier&Technik', location: 'Olma Messen St.Gallen', type: 'Landwirtschaft & Tierhaltung' },
      { name: 'Offa', location: 'Olma Messen St.Gallen', type: 'Freizeit & Sport' },
      { name: 'CSIO St. Gallen', location: 'St.Gallen', type: 'Pferdesport & Events' },
      { name: 'Ostschweizer Personaltag', location: 'Olma Messen St.Gallen', type: 'HR & Personalwesen' },
    ],
    localAdvantages: [
      'Nur 2h von unserem Standort – schnellste Schweiz-Lieferung',
      'Persönliche Übergabe in St. Gallen möglich',
      'Erfahrung mit OLMA und Tier&Technik',
      'Grenznahe Lage reduziert Lieferzeiten',
    ],
    nearbyRegions: ['zuerich', 'basel', 'luzern'],
    stats: { messen: '15+', lieferzeit: '3–4 Tage', kunden: '5+' },
  },

  'luzern': {
    slug: 'luzern',
    name: 'Luzern',
    type: 'stadt',
    title: 'Messemodelle für Luzern',
    h1Title: 'Messemodelle Luzern – 3D-Druck für LUGA, Bauen+Wohnen & mehr',
    metaTitle: 'Messemodelle Luzern | LUGA · Bauen+Wohnen · Express | ekdruck',
    metaDescription: 'Messemodelle für Luzern: Exponate für LUGA, Bauen+Wohnen, Zentralschweizer Messen. Express 24h · ab €30 · Zollabwicklung inkl. ★5,0.',
    heroSubtitle: 'Die Messe Luzern ist Drehscheibe der Zentralschweiz mit starken Fachmessen wie der LUGA und Bauen+Wohnen. Ob Gebäudemodell für die Baubranche oder Industriemodell für Gewerbeaussteller – wir bringen Ihre Präsentationsmodelle pünktlich nach Luzern.',
    deliveryTime: '4–5 Werktage',
    deliveryNote: 'Lieferung via A14/Luzern. Zollabwicklung inklusive.',
    localMessen: [
      { name: 'LUGA', location: 'Messe Luzern', type: 'Gewerbe & Lifestyle' },
      { name: 'Bauen+Wohnen Luzern', location: 'Messe Luzern', type: 'Bau & Immobilien' },
      { name: 'Gesundheit Leben', location: 'Messe Luzern', type: 'Gesundheit & Wellness' },
      { name: 'Zentralschweizer Frühlingsmesse', location: 'Messe Luzern', type: 'Regionalmesse' },
    ],
    localAdvantages: [
      'Zentraler Standort für die gesamte Innerschweiz',
      'Erfahrung mit Bau- und Gewerbemessen',
      'Modelle für Tourismusinfrastruktur',
      'Vollständige Zollabwicklung durch uns',
    ],
    nearbyRegions: ['zuerich', 'bern', 'basel', 'st-gallen'],
    stats: { messen: '12+', lieferzeit: '4–5 Tage', kunden: '5+' },
  },
};

// Helper functions
export const getSwissRegionBySlug = (slug: string): SwissMesseData | undefined =>
  swissMesseData[slug];

export const getAllSwissRegions = (): SwissMesseData[] =>
  Object.values(swissMesseData);
