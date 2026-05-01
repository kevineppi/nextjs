// ═══════════════════════════════════════════════════════════════
// DRUCK SECTION DATA – Unique per region, NO hardcoded content
// Every section component pulls from this data structure
// If data is missing for a region → runtime error (by design)
// ═══════════════════════════════════════════════════════════════

export interface ValuePropositionData {
  headline: string;
  subheadline: string;
  advantages: { icon: string; title: string; description: string }[];
  stats: { label: string; value: string }[];
}

export interface ChecklistData {
  headline: string;
  subheadline: string;
  steps: { title: string; tasks: string[]; tip: string }[];
}

export interface TrustSignalData {
  value: string;
  label: string;
  detail: string;
}

export interface PriceData {
  headline: string;
  subheadline: string;
  prices: { label: string; price: string; note: string }[];
  badges: string[];
}

export interface TechSpecData {
  headline: string;
  subheadline: string;
  specs: { label: string; value: string; detail: string }[];
}

export interface ProblemSolutionData {
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
}

export interface TimelineStepData {
  time: string;
  title: string;
  description: string;
  highlight: boolean;
}

export interface InTextLinkData {
  anchor: string;
  href: string;
  context: string; // sentence around the link
}

export interface TypicalProjectData {
  title: string;
  description: string;
  whyPrint: string;
  requirements: string[];
}

export interface ProjectWorkflowData {
  headline: string;
  subheadline: string;
  steps: { title: string; description: string; context: string }[];
}

export interface CustomerPriorityData {
  statement: string;
  explanation: string;
}

export interface CommonMistakeData {
  mistake: string;
  explanation: string;
  prevention: string;
}

export interface DruckSectionDataSet {
  valueProposition: ValuePropositionData;
  checklist: ChecklistData;
  trustSignals: TrustSignalData[];
  priceComparison: PriceData;
  techSpecs: TechSpecData;
  problemSolution: ProblemSolutionData;
  expressTimeline: TimelineStepData[];
  inTextLinks: InTextLinkData[];
}

// ═══════════════════════════════════════════
// WIEN – Startup & Kreativwirtschaft
// ═══════════════════════════════════════════
const wien: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Warum Wiener Startups auf 3D-Druck setzen',
    subheadline: 'Pitch-Modelle, Designvarianten und Konzeptvisualisierungen – schneller als jede Agentur',
    advantages: [
      { icon: 'Zap', title: '48h Pitch-Modelle', description: 'Vom CAD zum greifbaren Investorenmodell in unter 48 Stunden. Drei Varianten parallel möglich.' },
      { icon: 'Layers', title: 'Designvarianten ab €20', description: 'Testen Sie fünf Gehäuseformen, bevor Sie sich festlegen. Jede Variante kostet nur das Material.' },
      { icon: 'Users', title: 'Startup-erprobt', description: 'Über 50 Wiener Startups nutzen unsere Pitch-Modelle. Von der Garage bis zur Series-A.' },
      { icon: 'Palette', title: 'Materialmix möglich', description: 'Starrer Korpus aus PLA+, flexible Griffe aus TPU, transparente Fenster aus PETG – alles kombinierbar.' },
    ],
    stats: [
      { label: 'Pitch-Modelle gefertigt', value: '200+' },
      { label: 'Materialien', value: 'PLA+ PETG ASA TPU' },
      { label: 'Varianten parallel', value: 'bis 10' },
      { label: 'Express', value: '48h' },
    ],
  },
  checklist: {
    headline: 'So entsteht Ihr Pitch-Modell',
    subheadline: 'Vom Startup-Konzept zum überzeugenden Investorenmodell',
    steps: [
      { title: 'Konzept beschreiben', tasks: ['Skizze, CAD-Datei oder Beschreibung senden', 'Gewünschte Größe und Material angeben', 'Anzahl der Varianten festlegen'], tip: 'Auch eine Handzeichnung reicht als Startpunkt.' },
      { title: 'Design-Feedback', tasks: ['Wir prüfen Druckbarkeit in 2h', 'Optimierungsvorschläge gratis', 'Materialempfehlung für Ihren Use Case'], tip: 'Wir beraten auch zur besten Präsentationsgröße.' },
      { title: 'Express-Druck', tasks: ['Paralleler Druck aller Varianten', 'Qualitätskontrolle jedes Modells', 'Optional: Schleifen und Grundieren'], tip: 'Bis 10 Uhr bestellt = Versand am selben Tag.' },
      { title: 'Pitch-ready Lieferung', tasks: ['Express-Versand nach Wien über Nacht', 'Einzeln verpackt für sicheren Transport', 'Tracking-Nummer per E-Mail'], tip: 'Persönliche Übergabe in Wien auf Anfrage.' },
    ],
  },
  trustSignals: [
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen – durchgehend 5 Sterne' },
    { value: '50+', label: 'Wiener Startups', detail: 'Nutzen unsere Pitch-Modelle regelmäßig' },
    { value: '48h', label: 'Express-Turnaround', detail: 'Vom CAD zum Modell in unter 2 Tagen' },
    { value: '10+', label: 'Parallele Varianten', detail: 'Bis 10 Designvarianten gleichzeitig' },
    { value: 'WKO', label: 'Registriertes Gewerbe', detail: 'Gewerbeberechtigung in Österreich' },
    { value: '0€', label: 'Design-Check gratis', detail: 'Druckbarkeits-Check in 2 Stunden' },
  ],
  priceComparison: {
    headline: 'Was kostet ein Pitch-Modell in Wien?',
    subheadline: 'Transparente Preise für Startups und Kreative – Angebot in 6h, keine versteckten Kosten.',
    prices: [
      { label: 'Konzeptmodell (bis 10cm)', price: 'ab €20', note: 'Erste Visualisierung einer Produktidee' },
      { label: 'Pitch-Modell (10-20cm)', price: 'ab €45', note: 'Professionell für Investorengespräche' },
      { label: '3 Designvarianten', price: 'ab €95', note: 'Parallelvergleich für Designentscheidungen' },
      { label: '5er Pitch-Set', price: 'ab €140', note: 'Set für Roadshow mit mehreren Terminen' },
    ],
    badges: ['Keine Mindestbestellung', 'Mengenrabatt ab 10 Stück', 'Express +50%'],
  },
  techSpecs: {
    headline: 'Technik hinter Ihrem Startup-Modell',
    subheadline: 'FDM-Druck optimiert für Pitch-Qualität und schnelle Iteration',
    specs: [
      { label: 'Auflösung', value: '0.12mm', detail: 'Feinste Details für professionelle Pitches' },
      { label: 'Materialmix', value: '4 Typen kombinierbar', detail: 'PLA+, PETG, ASA und TPU in einem Modell' },
      { label: 'Farben', value: '20+ Standardfarben', detail: 'Alle Startup-CI-Farben darstellbar' },
      { label: 'Max. Größe', value: '30 x 30 x 40 cm', detail: 'Größere Modelle modular aufgebaut' },
      { label: 'Toleranz', value: '±0.2mm', detail: 'Exakte Proportionen für Investorenvertrauen' },
      { label: 'Nachbearbeitung', value: 'Schleifen, Grundieren', detail: 'Premium-Oberfläche für Top-Pitches' },
    ],
  },
  problemSolution: {
    problemTitle: 'Was Wiener Startups frustriert',
    problems: [
      'Der Pitch ist morgen – aber das Modell existiert nur als Rendering',
      'Eine einzige Gehäusevariante fertigen lassen kostet bei Agenturen €500+',
      'Investoren wollen etwas in der Hand halten, nicht nur Slides sehen',
      'Designentscheidungen fallen schwer, wenn man Formen nur am Bildschirm vergleicht',
    ],
    solutionTitle: 'So lösen wir das für Startups',
    solutions: [
      '48h Express: Modell rechtzeitig zum Pitch, auch bei kurzfristigen Terminen',
      'Ab €20 pro Modell – 5 Varianten kosten weniger als ein Agentur-Rendering',
      'Greifbare Modelle machen den Unterschied: Investoren können Ihr Produkt erleben',
      'Parallel 3-10 Varianten drucken und die beste Form in der Hand vergleichen',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'CAD-Datei senden', description: 'Per E-Mail oder Kontaktformular – Skizze reicht auch.', highlight: false },
    { time: '2h', title: 'Design-Check & Angebot', description: 'Druckbarkeits-Check, Materialempfehlung und Fixpreis.', highlight: false },
    { time: '6h', title: 'Druck startet', description: 'Nach Freigabe: alle Varianten parallel im Druck.', highlight: true },
    { time: '36h', title: 'Pitch-ready in Wien', description: 'Express-Versand über Nacht. Einzeln verpackt, sofort einsatzbereit.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Expressfertigung in Linz', href: '/3d-druck-linz', context: 'Für zeitkritische Projekte bietet unser Standort in Linz Same-Day-Abholung.' },
    { anchor: 'Designstudien für Messestände', href: '/messemodelle/wien', context: 'Wiener Messemodelle mit kreativer Gestaltung für Ihr nächstes Event.' },
    { anchor: '3D-gedruckte Architekturmodelle Wien', href: '/architekturmodelle/wien', context: 'Architekten in Wien vertrauen auf unsere maßstabsgetreuen Wettbewerbsmodelle.' },
    { anchor: 'Modelldruck für Grazer Industriebetriebe', href: '/3d-druck-graz', context: 'Für Serienfertigung und Industrieanwendungen ist unser Grazer Service ideal.' },
  ],

};

// ═══════════════════════════════════════════
// LINZ – Same-Day & Nähe
// ═══════════════════════════════════════════
const linz: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Same-Day 3D-Druck – 20 Minuten von Linz',
    subheadline: 'Persönliche Abholung statt Versandrisiko – Ihr 3D-Druck-Nachbar in Gunskirchen',
    advantages: [
      { icon: 'MapPin', title: '20 Min Entfernung', description: 'Unser Standort Gunskirchen liegt direkt an der A1 – persönliche Abholung jederzeit möglich.' },
      { icon: 'Clock', title: 'Same-Day-Fertigung', description: 'Morgens bestellt, nachmittags abholbereit. Kein Versandrisiko, kein Warten.' },
      { icon: 'Eye', title: 'Qualität vor Ort prüfen', description: 'Begutachten Sie Ihr Modell persönlich vor der Übernahme. Nachbesserung sofort.' },
      { icon: 'Palette', title: 'Mehrfarbige Schnittmodelle', description: 'Farbcodierte Schichten machen Aufbauten und Strukturen auf einen Blick verständlich.' },
    ],
    stats: [
      { label: 'Entfernung', value: '20 Min' },
      { label: 'Linzer Projekte', value: '150+' },
      { label: 'Same-Day', value: 'Ja' },
      { label: 'Vor-Ort-Beratung', value: 'Gratis' },
    ],
  },
  checklist: {
    headline: 'Same-Day Ablauf für Linzer Kunden',
    subheadline: 'Morgens anfragen, nachmittags abholen – so einfach ist 3D-Druck nebenan',
    steps: [
      { title: 'Anfrage senden', tasks: ['Datei per E-Mail oder WhatsApp', 'Kurze Beschreibung des Projekts', 'Gewünschte Abholzeit angeben'], tip: 'WhatsApp-Anfragen werden innerhalb von 30 Minuten beantwortet.' },
      { title: 'Angebot in 1h', tasks: ['Sofort-Angebot bei Standardteilen', 'Materialempfehlung für Ihren Einsatz', 'Fertigungszeit-Schätzung'], tip: 'Bei einfachen Teilen antworten wir oft in 15 Minuten.' },
      { title: 'Fertigung am selben Tag', tasks: ['Druck startet sofort nach Freigabe', 'Qualitätskontrolle nach Abschluss', 'SMS wenn Modell abholbereit'], tip: 'Bestellung bis 9 Uhr = Abholung ab 15 Uhr möglich.' },
      { title: 'Persönliche Abholung', tasks: ['Gunskirchen – nur 20 Min von Linz', 'Modell gemeinsam prüfen', 'Bar, Überweisung oder Rechnung'], tip: 'Parkplatz direkt vor der Tür.' },
    ],
  },
  trustSignals: [
    { value: '20 Min', label: 'Von Linz', detail: 'Gunskirchen direkt an der A1 Ausfahrt' },
    { value: '150+', label: 'Linzer Projekte', detail: 'Für Industrie, Kreativ und Bildung' },
    { value: 'Same Day', label: 'Abholung', detail: 'Morgens bestellt, nachmittags abholbereit' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen von zufriedenen Kunden' },
    { value: '30 Min', label: 'Antwortzeit', detail: 'WhatsApp-Anfragen werden sofort bearbeitet' },
  ],
  priceComparison: {
    headline: 'Same-Day Preise für Linzer Kunden',
    subheadline: 'Keine Versandkosten – persönliche Abholung in Gunskirchen. Preise wie online, Service wie nebenan.',
    prices: [
      { label: 'Schnellmodell (bis 8cm)', price: 'ab €15', note: 'Formcheck, erste Visualisierung' },
      { label: 'Schulungsmodell (15-25cm)', price: 'ab €50', note: 'Mehrfarbig, farbcodierte Schichten' },
      { label: 'Präsentationsmodell (30cm+)', price: 'ab €90', note: 'Nachbearbeitet, professionell' },
      { label: '10er-Serie gleicher Teile', price: '-10%', note: 'Mengenrabatt ab 10 identischen Modellen' },
    ],
    badges: ['Keine Versandkosten', 'Abholung Same-Day', 'Vor-Ort-Qualitätsprüfung'],
  },
  techSpecs: {
    headline: 'Technische Details für Linzer Projekte',
    subheadline: 'Schulungsmodelle, Schnittmodelle, Präsentationsobjekte – optimiert für industrielle Anforderungen',
    specs: [
      { label: 'Mehrfarbig', value: 'Bis 6 Farben', detail: 'Farbcodierte Schichten für Schulungsmodelle' },
      { label: 'Schichthöhe', value: '0.12 – 0.28mm', detail: 'Fein für Details, grob für Schnellmodelle' },
      { label: 'Schnittmodelle', value: 'Mehrteilig zerlegbar', detail: 'Interne Strukturen sichtbar machen' },
      { label: 'Toleranz', value: '±0.2mm', detail: 'Reproduzierbar bei Nachbestellungen' },
      { label: 'Größe', value: '30 x 30 x 40 cm', detail: 'Größer modular – Nähte kaum sichtbar' },
    ],
  },
  problemSolution: {
    problemTitle: 'Warum Versand nach Linz unnötig ist',
    problems: [
      'Online bestellt – 3 Tage Wartezeit, Verpackung beschädigt, Modell unbrauchbar',
      'Schulungstermin in 2 Tagen – kein Lieferant in Linz schafft das zeitlich',
      'Komplexes Schnittmodell lässt sich ohne persönliches Gespräch schwer erklären',
      'Nachbesserungen per Versand dauern eine weitere Woche',
    ],
    solutionTitle: 'Same-Day vom Nachbarn',
    solutions: [
      'Persönliche Abholung in Gunskirchen – kein Versandrisiko, kein Warten',
      'Same-Day-Fertigung: morgens bestellt, nachmittags in der Hand',
      'Beratung vor Ort: wir besprechen das Modell gemeinsam am Bildschirm',
      'Nachbesserungen sofort – Sie warten 2 Stunden, nicht 2 Wochen',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'WhatsApp oder E-Mail', description: 'Datei senden – Antwort in 30 Minuten.', highlight: false },
    { time: '1h', title: 'Sofort-Angebot', description: 'Preis, Material, Fertigungszeit – alles klar.', highlight: false },
    { time: '2h', title: 'Druck läuft', description: 'Sofort nach Freigabe starten unsere Drucker.', highlight: true },
    { time: '6h', title: 'Abholung in Gunskirchen', description: 'SMS wenn fertig – nur 20 Min von Linz.', highlight: true },
  ],
  inTextLinks: [
    { anchor: 'Direktabholung am Standort Gunskirchen', href: '/3d-druck-gunskirchen', context: 'Nur 20 Minuten von Linz: persönliche Abholung mit Qualitätsprüfung vor Ort.' },
    { anchor: '3D-Druck Service für Wiener Startups', href: '/3d-druck-wien', context: 'Pitch-Modelle für die Wiener Startup-Szene – Express-Versand über Nacht.' },
    { anchor: 'Messemodelle für OÖ-Messen', href: '/messemodelle/oberoesterreich', context: 'Maßgefertigte Messeexponate für Messen in Oberösterreich.' },
    { anchor: 'Wetterfeste Outdoor-Modelle Dornbirn', href: '/3d-druck-dornbirn', context: 'ASA-Modelle für Außenanwendungen aus unserem Vorarlberg-Service.' },
  ],

};

// ═══════════════════════════════════════════
// GRAZ – Designstudien-Serien & Technologie
// ═══════════════════════════════════════════
const graz: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Designstudien in Serie – für Grazer Technologieunternehmen',
    subheadline: 'Physische Bewertungsrunden statt Bildschirm-Reviews – 50 Varianten in einer Woche',
    advantages: [
      { icon: 'Layers', title: '50 Varianten in 5 Tagen', description: 'Drucken Sie alle Designoptionen parallel. Physischer Vergleich beschleunigt Entscheidungen um 80%.' },
      { icon: 'TrendingUp', title: 'Mengenrabatt ab 10 Stück', description: '10% ab 10, 15% ab 50 Stück. Qualität bleibt bei jeder Stückzahl identisch.' },
      { icon: 'Shield', title: 'ASA-Expertise', description: 'UV-beständig, witterungsfest, professionelle Oberfläche. Unser meistgenutztes Material für Grazer Kunden.' },
      { icon: 'Eye', title: 'Transparente Sichtmodelle', description: 'PETG Transparent zeigt innere Strukturen. Ideal für Design-Reviews und Konzeptbewertungen.' },
    ],
    stats: [
      { label: 'Toleranz', value: '±0.2mm' },
      { label: 'Mengenrabatt', value: 'ab 10 Stück' },
      { label: 'ASA verfügbar', value: 'UV-beständig' },
      { label: 'A9 Express', value: '1-2 Tage' },
    ],
  },
  checklist: {
    headline: 'Designstudien-Workflow für Graz',
    subheadline: 'Vom CAD zur Bewertungsrunde – strukturiert, effizient, termingerecht',
    steps: [
      { title: 'CAD-Dateien liefern', tasks: ['STL/STEP für alle Varianten', 'Materialwunsch angeben (ASA empfohlen)', 'Stückzahl und Farbwünsche definieren'], tip: 'Wir prüfen alle Dateien kostenlos auf Druckbarkeit.' },
      { title: 'Serien-Angebot', tasks: ['Staffelpreis-Angebot in 4h', 'Mengenrabatt automatisch berechnet', 'Optimierungsvorschläge für Oberfläche'], tip: 'Ab 10 identischen Teilen sparen Sie 10%.' },
      { title: 'Parallelfertigung', tasks: ['Alle Varianten gleichzeitig im Druck', 'ASA-Nachbearbeitung für Premium-Finish', 'Qualitätskontrolle jedes einzelnen Teils'], tip: '50 Teile in einer Woche realistisch.' },
      { title: 'Express nach Graz', tasks: ['Versand über A9 Pyhrnautobahn', 'Bruchsichere Einzelverpackung', 'Tracking-Nummer per E-Mail'], tip: 'Express 24h oder Standard 1-2 Werktage.' },
    ],
  },
  trustSignals: [
    { value: '100+', label: 'Projekte in Graz', detail: 'Designstudien, Konzeptmodelle, Sichtmodelle' },
    { value: '50+', label: 'Varianten pro Auftrag', detail: 'Parallele Fertigung aller Designoptionen' },
    { value: '±0.2mm', label: 'Maßhaltigkeit', detail: 'Reproduzierbar bei jeder Stückzahl' },
    { value: 'ASA', label: 'UV-Material verfügbar', detail: 'Premium-Oberfläche, witterungsbeständig' },
    { value: '15%', label: 'Rabatt ab 50 Stück', detail: 'Automatischer Mengenrabatt' },
  ],
  priceComparison: {
    headline: 'Preise für Designstudien-Serien in Graz',
    subheadline: 'Mengenrabatt automatisch – gleiche Qualität bei 1 oder 50 Stück.',
    prices: [
      { label: 'Formcheck (bis 8cm)', price: 'ab €15', note: 'Schnelle Dimensionsprüfung' },
      { label: 'Designstudie Standard', price: 'ab €35', note: 'Einzelstück, ASA oder PLA+' },
      { label: '10er-Serie Designstudien', price: 'ab €28/Stk.', note: '10% Mengenrabatt automatisch' },
      { label: '50er-Serie', price: 'ab €25/Stk.', note: '15% Mengenrabatt, Premium-Finish' },
    ],
    badges: ['Mengenrabatt automatisch', 'ASA-Expertise', 'A9-Express 24h'],
  },
  techSpecs: {
    headline: 'Spezifikationen für Designstudien',
    subheadline: 'Optimiert für Serien-Qualität und Design-Reviews bei Grazer Unternehmen',
    specs: [
      { label: 'Serientoleranz', value: '±0.2mm konstant', detail: 'Jedes Teil maßidentisch zum CAD' },
      { label: 'ASA-Finish', value: 'Geschliffen + grundiert', detail: 'Premium-Oberfläche für Bewertungsrunden' },
      { label: 'Transparent', value: 'PETG klar verfügbar', detail: 'Innere Strukturen sichtbar machen' },
      { label: 'Batch-Größe', value: 'Bis 80 Teile/Woche', detail: 'Parallelkapazität für Großprojekte' },
      { label: 'Farben', value: '20+ Standardfarben', detail: 'Exakte Farbcodes auf Anfrage' },
    ],
  },
  problemSolution: {
    problemTitle: 'Warum Bildschirm-Reviews nicht reichen',
    problems: [
      'Am Monitor sehen alle Designvarianten ähnlich aus – Proportionen sind schwer einschätzbar',
      'Designentscheidungen ziehen sich über Wochen, weil niemand das Objekt in der Hand hatte',
      'Einzelne Handmuster bei Agenturen kosten €200-500 pro Variante',
      'Transparente Materialien lassen sich am Bildschirm nicht realistisch beurteilen',
    ],
    solutionTitle: 'Physische Designstudien beschleunigen alles',
    solutions: [
      '50 Varianten in einer Woche: jede Form in der Hand vergleichen, Proportionen sofort spüren',
      'Entscheidungen fallen in einer Runde statt in drei Meetings – nachweislich 80% schneller',
      'Ab €25/Stück bei 50er-Serien: günstiger als ein einziges Agentur-Handmuster',
      'PETG Transparent macht innere Strukturen sichtbar – kein Rendering kann das ersetzen',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'CAD-Paket senden', description: 'Alle Varianten als STL/STEP gebündelt.', highlight: false },
    { time: '4h', title: 'Serien-Angebot', description: 'Staffelpreis mit automatischem Mengenrabatt.', highlight: false },
    { time: '8h', title: 'Parallelfertigung', description: 'Alle Drucker arbeiten gleichzeitig an Ihren Varianten.', highlight: true },
    { time: '3-5 Tage', title: 'Serie komplett', description: 'Einzeln verpackt, per A9-Express nach Graz.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Kleinserie Steiermark', href: '/3d-druck-steiermark', context: 'Für steiermarkweite Lieferungen nutzen Sie unseren regionalen Expressservice.' },
    { anchor: 'Startup-Modelle aus Wien', href: '/3d-druck-wien', context: 'Wiener Startups setzen auf Pitch-ready Modelle in 48 Stunden.' },
    { anchor: 'Architekturmodelle für Grazer Büros', href: '/architekturmodelle/graz', context: 'Maßstabsgetreue Wettbewerbsmodelle für steirische Architekturprojekte.' },
  ],

};

// ═══════════════════════════════════════════
// SALZBURG – Tourismus & Corporate Design
// ═══════════════════════════════════════════
const salzburg: DruckSectionDataSet = {
  valueProposition: {
    headline: '3D-gedruckte Hotelausstattung & Displays',
    subheadline: 'Individuelle Halterungen, Displays und Dekorationsobjekte für Salzburgs Tourismusbetriebe',
    advantages: [
      { icon: 'Hotel', title: 'Corporate-Design Displays', description: 'Tablethalter, Infoständer und Displayobjekte in Ihrer Hotelfarbe mit integriertem Logo.' },
      { icon: 'Repeat', title: 'Filialkonzept-fähig', description: 'Identische Ausstattung für alle Standorte. Nachbestellungen per E-Mail in 3 Tagen.' },
      { icon: 'Wrench', title: 'Kabelmanagement integriert', description: 'USB-Aussparungen, Kabelführungen und Lüftungsschlitze direkt im Design.' },
      { icon: 'Shield', title: 'PETG für Dauereinsatz', description: 'Reinigungsbeständig, schlagzäh und farbecht. Hält dem Hotelalltag stand.' },
    ],
    stats: [
      { label: 'Hotelprojekte', value: '15+' },
      { label: 'Filialen ausgestattet', value: '30+' },
      { label: 'Nachbestellzeit', value: '3 Tage' },
      { label: 'A1-Lieferung', value: '1-2 Tage' },
    ],
  },
  checklist: {
    headline: 'Individuelle Displays für Ihr Hotel',
    subheadline: 'Vom Designwunsch zur fertigen Ausstattung – in einer Woche alle Filialen einheitlich',
    steps: [
      { title: 'Anforderung beschreiben', tasks: ['Tablet-Modell und Maße angeben', 'Logo und Farbwunsch beifügen', 'Stückzahl und Standorte nennen'], tip: 'Wir können Ihr CI-Pantone in PETG umsetzen.' },
      { title: 'Design & Konstruktion', tasks: ['3D-Konstruktion nach Ihren Vorgaben', 'Kabelmanagement einplanen', 'Render zur Freigabe in 24h'], tip: 'Konstruktion bei Erstbestellung kostenlos.' },
      { title: 'Serienfertigung', tasks: ['Alle Standorte in einem Durchlauf', 'Qualitätskontrolle jedes Teils', 'Logo-Integration und Farbabgleich'], tip: 'Bis 50 identische Teile in einer Woche.' },
      { title: 'Versand an alle Standorte', tasks: ['Direkte Lieferung an jede Filiale', 'Bruchsichere Verpackung', 'Montagehinweise beigelegt'], tip: 'Nachbestellungen identisch reproduzierbar.' },
    ],
  },
  trustSignals: [
    { value: '15+', label: 'Hotelprojekte', detail: 'Von der Pension bis zur 4-Sterne-Kette' },
    { value: '30+', label: 'Filialen ausgestattet', detail: 'Identische Ausstattung, einheitliches Design' },
    { value: '3 Tage', label: 'Nachbestellzeit', detail: 'Per E-Mail – digital gespeicherte Aufträge' },
    { value: 'PETG', label: 'Hotel-Material', detail: 'Reinigungsbeständig, farbecht, schlagzäh' },
    { value: '5.0', label: 'Bewertung', detail: '31 Google-Bewertungen – durchgehend 5 Sterne' },
  ],
  priceComparison: {
    headline: 'Hotelausstattung – transparente Preise',
    subheadline: 'Einmal konstruiert, unbegrenzt reproduzierbar. Preise pro Stück sinken mit der Menge.',
    prices: [
      { label: 'Tablethalter (Standard)', price: 'ab €35', note: 'Einfache Form, Ihre Farbe' },
      { label: 'Halter mit Logo + Kabel', price: 'ab €55', note: 'Logo-Prägung, Kabelmanagement' },
      { label: '15er-Filial-Set', price: 'ab €40/Stk.', note: 'Identisch für alle Standorte' },
      { label: 'Displayobjekt Custom', price: 'ab €60', note: 'Individuelle Form nach Ihrem Design' },
    ],
    badges: ['Konstruktion bei Erstauftrag gratis', 'Filialrabatt', 'Nachbestellung in 3 Tagen'],
  },
  techSpecs: {
    headline: 'Materialwahl für den Hotelalltag',
    subheadline: 'Robuste Materialien, die dem täglichen Gebrauch durch Gäste standhalten',
    specs: [
      { label: 'Material', value: 'PETG empfohlen', detail: 'Reinigungsmittelbeständig, schlagzäh' },
      { label: 'Farbechtheit', value: 'CI-Pantone umsetzbar', detail: 'Exakte Farbanpassung an Ihre Marke' },
      { label: 'Kabelführung', value: 'Im Design integriert', detail: 'USB, Lightning, USB-C Aussparungen' },
      { label: 'Reproduzierbarkeit', value: '100% identisch', detail: 'Digitaler Auftrag für Nachbestellungen' },
      { label: 'Outdoor', value: 'ASA für Terrasse/Pool', detail: 'UV-beständig für Außenbereiche' },
    ],
  },
  problemSolution: {
    problemTitle: 'Was Salzburger Hotels nervt',
    problems: [
      'Standard-Tablethalter passen nicht zum Hoteldesign und wirken billig',
      'Für 15 Filialen identische Displays zu finden ist unmöglich',
      'Kabel hängen sichtbar aus den Halterungen – unprofessioneller Eindruck',
      'Defekte Halterungen können nicht exakt nachbestellt werden',
    ],
    solutionTitle: 'Maßgefertigte Lösung für Ihre Hotelkette',
    solutions: [
      'Design in Ihrer CI-Farbe mit Logo – jedes Stück ein Markenobjekt',
      '1 Konstruktion, 50 identische Teile: alle Filialen einheitlich ausgestattet',
      'Integriertes Kabelmanagement: Kabel unsichtbar, Oberfläche aufgeräumt',
      'Digital gespeicherter Auftrag: Nachbestellung per E-Mail in 3 Werktagen',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Anforderung senden', description: 'Tablet-Modell, Farbe, Logo und Stückzahl.', highlight: false },
    { time: '24h', title: 'Design-Render', description: '3D-Render zur Freigabe – Änderungswünsche kostenlos.', highlight: false },
    { time: '48h', title: 'Produktion startet', description: 'Nach Freigabe: alle Teile in einem Durchlauf.', highlight: true },
    { time: '5 Tage', title: 'Lieferung an alle Filialen', description: 'Direkt an jeden Standort über A1 Westautobahn.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Express Oberösterreich', href: '/3d-druck-oberoesterreich', context: 'Über die A1 in 1-2 Tagen – Express aus Gunskirchen nach Salzburg.' },
    { anchor: 'Messemodelle für Salzburger Events', href: '/messemodelle/salzburg', context: 'Vom Kongresshaus bis zur Messehalle: Event-Modelle nach Maß.' },
    { anchor: 'Kreativprojekte in Innsbruck', href: '/3d-druck-innsbruck', context: 'Auch Tiroler Kreative profitieren von unserer Designkompetenz.' },
    { anchor: 'Filialmodelle für Salzburger Ketten', href: '/3d-druck-linz', context: 'Express-Fertigung identischer Modelle für alle Filialen.' },
  ],

};

// ═══════════════════════════════════════════
// INNSBRUCK – Forschung & Bildung
// ═══════════════════════════════════════════
const innsbruck: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Anschauungsmodelle für Innsbrucker Hochschulen',
    subheadline: 'Lehrmittel, Konferenzmodelle und Forschungsvisualisierungen – ab €20, in 48h geliefert',
    advantages: [
      { icon: 'GraduationCap', title: 'Uni-erprobt seit 2020', description: 'Regelmäßige Aufträge von Universität Innsbruck, MCI und FH Kufstein. Wir kennen akademische Deadlines.' },
      { icon: 'Layers', title: 'Farbcodierte Strukturen', description: 'Bis 6 Farben in einem Modell – verschiedene Bereiche visuell sofort unterscheidbar.' },
      { icon: 'Package', title: 'Robuster Alpentransport', description: 'Spezialverpackung für den Transport über den Brenner. Kein Modell kam bisher beschädigt an.' },
      { icon: 'DollarSign', title: 'Ab €20 für Studierende', description: 'Studentenfreundliche Preise. Abschlussarbeiten, Semesterprojekte und Lehrmittel zu fairen Konditionen.' },
    ],
    stats: [
      { label: 'Hochschul-Projekte', value: '60+' },
      { label: 'Lehrmittel', value: 'ab €20' },
      { label: 'Express Innsbruck', value: '48h' },
      { label: 'Alpentransport', value: '0 Schäden' },
    ],
  },
  checklist: {
    headline: 'Ablauf für akademische Projekte',
    subheadline: 'Semesterarbeit oder Konferenzpräsentation – Ihr Modell termingerecht geliefert',
    steps: [
      { title: 'Projektdaten senden', tasks: ['3D-Modell oder Beschreibung', 'Maßstab und gewünschte Farben', 'Abgabetermin angeben'], tip: 'Auch Handskizzen können wir in 3D umsetzen.' },
      { title: 'Akademisches Angebot', tasks: ['Studentenrabatt automatisch', 'Materialempfehlung für Lehrmittel', 'Termingarantie für Abgaben'], tip: 'Rechnungsadresse der Uni? Kein Problem.' },
      { title: 'Präzisionsdruck', tasks: ['Farbcodierte Bereiche', 'Zerlegbare Strukturen möglich', 'Qualitätskontrolle vor Versand'], tip: 'Mehrteilige Modelle mit Steckverbindungen.' },
      { title: '48h nach Innsbruck', tasks: ['Express-Versand mit Alpenverpackung', 'Tracking für termingerechte Planung', 'Abholung an Uni-Adresse möglich'], tip: 'Lieferung direkt ans Institut auf Anfrage.' },
    ],
  },
  trustSignals: [
    { value: '60+', label: 'Hochschul-Projekte', detail: 'Uni Innsbruck, MCI, FH Kufstein' },
    { value: '48h', label: 'Express-Lieferung', detail: 'Über Nacht nach Innsbruck' },
    { value: '0', label: 'Transportschäden', detail: 'Spezialverpackung für Alpentransport' },
    { value: 'ab €20', label: 'Studentenpreise', detail: 'Fair kalkuliert für Uni-Budgets' },
    { value: '6 Farben', label: 'In einem Modell', detail: 'Farbcodierte Strukturen für Lehrzwecke' },
  ],
  priceComparison: {
    headline: 'Preise für akademische Modelle',
    subheadline: 'Transparente Preise für Studierende und Institute – Rechnung auf Uni möglich.',
    prices: [
      { label: 'Einfaches Lehrmittel', price: 'ab €20', note: 'Einheitliches Anschauungsmodell' },
      { label: 'Farbcodiertes Modell', price: 'ab €40', note: 'Mehrfarbig, Strukturen erkennbar' },
      { label: 'Konferenzmodell (mehrteilig)', price: 'ab €70', note: 'Zerlegbar, transportfreundlich' },
      { label: 'Seminar-Set (10 Stk.)', price: 'ab €18/Stk.', note: 'Identische Modelle für alle Teilnehmer' },
    ],
    badges: ['Studentenrabatt', 'Rechnung auf Uni', 'Termingarantie für Abgaben'],
  },
  techSpecs: {
    headline: 'Spezifikationen für Lehr- und Forschungsmodelle',
    subheadline: 'Optimiert für visuelle Klarheit, Robustheit und akademische Anforderungen',
    specs: [
      { label: 'Farbcodierung', value: 'Bis 6 Farben', detail: 'Jede Struktur in eigener Farbe' },
      { label: 'Zerlegbarkeit', value: 'Steckverbindungen', detail: 'Schichten abnehmbar für Demonstrations' },
      { label: 'Material', value: 'PETG empfohlen', detail: 'Robust für häufiges Anfassen in Seminaren' },
      { label: 'Transport', value: 'Alpenverpackung', detail: 'Schaumstoff-Einlage, stoßabsorbierend' },
      { label: 'Maßstab', value: 'Frei wählbar', detail: 'Von Miniaturmodell bis Seminarraumgröße' },
    ],
  },
  problemSolution: {
    problemTitle: 'Herausforderungen in der akademischen Lehre',
    problems: [
      'Komplexe Strukturen sind an der Tafel oder am Beamer schwer verständlich',
      'Konferenz-Deadline in 3 Tagen – aber kein Modell vorbereitet',
      'Lehrmittel aus Holz oder Gips sind teuer, schwer und brechen leicht',
      'Für jeden Studierenden ein identisches Modell bereitzustellen ist unrealistisch',
    ],
    solutionTitle: '3D-Druck für die akademische Welt',
    solutions: [
      'Farbcodierte 3D-Modelle: Studierende begreifen Strukturen beim ersten Anfassen',
      '48h Express nach Innsbruck: Auch kurzfristige Konferenzen sind machbar',
      'PLA+ und PETG: leicht, robust, preiswert. Kein Vergleich zu Holz oder Gips',
      'Seminar-Sets ab €18/Stück: 30 identische Modelle für die ganze Vorlesung',
    ],
  },
  expressTimeline: [
    { time: '0h', title: '3D-Modell senden', description: 'STL, STEP oder Beschreibung per E-Mail.', highlight: false },
    { time: '4h', title: 'Angebot mit Termingarantie', description: 'Fixer Preis und garantierter Liefertermin.', highlight: false },
    { time: '24h', title: 'Druck & Qualitätskontrolle', description: 'Farbcodiert, zerlegbar, maßstabsgetreu.', highlight: true },
    { time: '48h', title: 'An Ihrem Institut', description: 'Express-Versand mit Alpenverpackung nach Innsbruck.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Lehrmittel Salzburg', href: '/3d-druck-salzburg', context: 'Universitäten in Salzburg nutzen ebenfalls unsere Lehrmittelfertigung.' },
    { anchor: 'Outdoor-Modelle für Alpen-Projekte', href: '/3d-druck-dornbirn', context: 'Wetterfeste ASA-Modelle für touristische Installationen im Alpenraum.' },
    { anchor: 'Messemodelle Innsbruck', href: '/messemodelle/tirol', context: 'Interaktive Messeexponate für Tiroler Fachmessen und Events.' },
  ],

};

// ═══════════════════════════════════════════
// KLAGENFURT – IoT & Smart City
// ═══════════════════════════════════════════
const klagenfurt: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Gehäuse-Designstudien für Klagenfurter IT-Unternehmen',
    subheadline: 'IoT-Gehäuse, Smart-City-Modelle und Kundenpräsentations-Modelle – mehrere Varianten parallel',
    advantages: [
      { icon: 'Cpu', title: 'IoT-Gehäuse ab 10 Stück', description: 'Verschiedene Formfaktoren gleichzeitig: kompakt, flach, vertikal. Vergleich am echten Objekt.' },
      { icon: 'Sun', title: 'UV-beständiges ASA', description: 'Outdoor-Gehäuse für Smart-City-Sensoren: witterungsfest, farbstabil, langlebig.' },
      { icon: 'Users', title: 'Kundenpräsentations-ready', description: 'Gehäusemodelle, die beim Kunden auf dem Tisch stehen – nicht nur als Rendering auf dem Laptop.' },
      { icon: 'Layers', title: 'Drei Varianten, eine Entscheidung', description: 'Drei Formfaktoren à 10 Stück: Kunde wählt die beste Variante sofort aus.' },
    ],
    stats: [
      { label: 'IoT-Projekte', value: '40+' },
      { label: 'ASA UV-beständig', value: 'Standard' },
      { label: 'Varianten parallel', value: '3-5' },
      { label: 'A10 Lieferung', value: '1-2 Tage' },
    ],
  },
  checklist: {
    headline: 'Gehäuse-Designstudien bestellen',
    subheadline: 'Vom CAD zur Kundenpräsentation – strukturiert und termingerecht',
    steps: [
      { title: 'Designvarianten liefern', tasks: ['STL-Dateien aller Varianten', 'Gewünschtes Material (ASA empfohlen)', 'Stückzahl pro Variante'], tip: 'Wir optimieren Ihre CAD-Dateien für FDM kostenlos.' },
      { title: 'Varianten-Angebot', tasks: ['Preis pro Variante und Gesamtpreis', 'Mengenrabatt-Berechnung', 'Empfehlung für Präsentations-Finish'], tip: 'Ab 30 Stück gesamt: automatischer Rabatt.' },
      { title: 'Paralleldruck', tasks: ['Alle Varianten gleichzeitig', 'UV-beständiges ASA-Finish', 'Maßkontrolle jedes Gehäuses'], tip: 'Schraubdome und Steckverbindungen mit ±0.15mm.' },
      { title: 'Sortierte Lieferung', tasks: ['Varianten separat verpackt', 'Beschriftung der Designversion', 'Versand über A10 Tauernautobahn'], tip: 'Direkte Lieferung an Ihren Kunden möglich.' },
    ],
  },
  trustSignals: [
    { value: '40+', label: 'IT-Projekte', detail: 'Gehäusemodelle für Kärntner IT-Unternehmen' },
    { value: 'ASA', label: 'UV-Material Standard', detail: 'Wetterfest für Outdoor-IoT-Gehäuse' },
    { value: '3-5', label: 'Varianten parallel', detail: 'Alle Formfaktoren gleichzeitig fertigen' },
    { value: '±0.15mm', label: 'Gehäuse-Toleranz', detail: 'Schraubdome und Steckverbindungen' },
    { value: '5.0', label: 'Google Bewertung', detail: 'Durchgehend 5 Sterne' },
  ],
  priceComparison: {
    headline: 'IoT-Gehäuse Preise für Klagenfurt',
    subheadline: 'Kalkulieren Sie Ihre Designstudie transparent – Staffelpreise ab 10 Stück.',
    prices: [
      { label: 'Einzel-Gehäuse (bis 10cm)', price: 'ab €25', note: 'PLA+ für internen Formcheck' },
      { label: 'ASA-Gehäuse Outdoor', price: 'ab €40', note: 'UV-beständig, witterungsfest' },
      { label: '3 Varianten à 10 Stk.', price: 'ab €30/Stk.', note: '10% Mengenrabatt inkl.' },
      { label: 'Kundenpräsentations-Set', price: 'ab €120', note: '3 Varianten + Verpackung' },
    ],
    badges: ['ASA-Expertise', 'Varianten-Vergleich', 'Kundendirektversand möglich'],
  },
  techSpecs: {
    headline: 'Technische Daten für IoT-Gehäuse',
    subheadline: 'Spezifikationen für Smart-City-Sensoren und Elektronik-Designstudien',
    specs: [
      { label: 'Toleranz Schraubdome', value: '±0.15mm', detail: 'Passgenaue Verbindungselemente' },
      { label: 'Material', value: 'ASA UV-beständig', detail: 'IP44-Designkonzept darstellbar' },
      { label: 'Wandstärke', value: 'Ab 1.2mm', detail: 'Robust für Präsentationszwecke' },
      { label: 'Farboptionen', value: 'Signal-Weiß, Schwarz, Grau', detail: 'Professionelle Gehäusefarben' },
      { label: 'Nachbearbeitung', value: 'Schleifen, Passungen', detail: 'Für präzise Zusammenbauten' },
    ],
  },
  problemSolution: {
    problemTitle: 'Was IoT-Unternehmen in Klagenfurt bremst',
    problems: [
      'Kundenpräsentation nächste Woche – aber nur CAD-Dateien, kein physisches Modell',
      'Drei Gehäuseformen zur Auswahl, aber der Kunde kann am Bildschirm nicht entscheiden',
      'Outdoor-Gehäuse aus dem Spritzguss erst ab 1000 Stück rentabel',
      'Investoren und Auftraggeber wollen das Produkt anfassen, nicht nur Folien sehen',
    ],
    solutionTitle: 'Physische Gehäusemodelle lösen das',
    solutions: [
      '30 Gehäusemodelle in 7 Tagen: termingerecht für jede Kundenpräsentation',
      '3 Varianten à 10 Stück: Kunde nimmt jede Form in die Hand und entscheidet sofort',
      'ASA-Gehäuse ab €40: Outdoor-fähig ohne Spritzguss-Investition',
      'Modelle zum Anfassen überzeugen Auftraggeber nachweislich schneller als Renderings',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'CAD-Dateien senden', description: 'STL aller Gehäusevarianten per E-Mail.', highlight: false },
    { time: '4h', title: 'Varianten-Angebot', description: 'Preis pro Variante, Mengenrabatt berechnet.', highlight: false },
    { time: '24h', title: 'Paralleldruck startet', description: 'Alle Varianten gleichzeitig im ASA-Druck.', highlight: true },
    { time: '5-7 Tage', title: 'Sortiert geliefert', description: 'Varianten einzeln beschriftet, über A10 nach Klagenfurt.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Forschung Villach', href: '/3d-druck-villach', context: 'Infineon-Zulieferer und Tech-Firmen in Villach nutzen unseren Prototypen-Service.' },
    { anchor: 'Industriemodelle aus Graz', href: '/3d-druck-graz', context: 'Grazer Industriebetriebe vertrauen auf unsere Serienfertigung.' },
    { anchor: 'Architekturmodelle Kärnten', href: '/architekturmodelle/kaernten', context: 'Kärntner Architekten setzen auf präzise 3D-gedruckte Wettbewerbsmodelle.' },
  ],

};

// ═══════════════════════════════════════════
// VILLACH – Elektronik & Technologiepark
// ═══════════════════════════════════════════
const villach: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Konzeptmodelle für Villachs Technologieunternehmen',
    subheadline: 'Designreviews beschleunigen mit physischen Modellen – 10x produktiver als am Bildschirm',
    advantages: [
      { icon: 'Cpu', title: 'Formfaktor-Vergleich', description: 'Verschiedene Gehäuseformen nebeneinander vergleichen. Proportionen und Ergonomie direkt bewerten.' },
      { icon: 'TrendingUp', title: '0.12mm Detailauflösung', description: 'Passstifte, Rastnasen und Designdetails in höchster Präzision dargestellt.' },
      { icon: 'Layers', title: 'Iteratives Design', description: 'Erste Version, Feedback, zweite Version – in Tagen, nicht Wochen.' },
      { icon: 'DollarSign', title: 'Günstiger als Handmuster', description: '10 Konzeptmodelle kosten weniger als ein einzelnes CNC-gefrästes Handmuster.' },
    ],
    stats: [
      { label: 'Tech-Projekte', value: '25+' },
      { label: 'Detailauflösung', value: '0.12mm' },
      { label: 'Iteration', value: '3 Tage' },
      { label: 'Materialien', value: '6+' },
    ],
  },
  checklist: {
    headline: 'Konzeptmodell bestellen',
    subheadline: 'Vom CAD-Modell zum Design-Review – strukturiert und effizient',
    steps: [
      { title: 'STEP/STL übermitteln', tasks: ['CAD-Datei mit gewünschtem Detailgrad', 'Passungsanforderungen angeben', 'Gewünschte Iterationsanzahl'], tip: 'STEP-Format liefert die beste Qualität.' },
      { title: 'Technische Abstimmung', tasks: ['Optimierung für FDM-Druck', 'Wandstärken- und Support-Check', 'Materialempfehlung'], tip: 'Für Passteile empfehlen wir ±0.15mm Toleranz.' },
      { title: 'Präzisionsdruck', tasks: ['0.12mm Schichthöhe für Details', 'Passstifte und Rastnasen exakt', 'Sichtkontrolle vor Versand'], tip: 'Wir drucken Testpassungen vor der Serie mit.' },
      { title: 'Lieferung nach Villach', tasks: ['Versand über A10/A2', 'Einzelverpackung mit Polsterung', 'Tracking-Nummer sofort'], tip: 'Lieferung direkt an den Technologiepark.' },
    ],
  },
  trustSignals: [
    { value: '25+', label: 'Technologieprojekte', detail: 'Für Villacher Elektronik- und Sensorik-Firmen' },
    { value: '0.12mm', label: 'Feinste Auflösung', detail: 'Details wie Rastnasen und Passstifte sichtbar' },
    { value: '10x', label: 'Produktiver', detail: 'Designreviews mit Modell vs. Bildschirm' },
    { value: '3 Tage', label: 'Iterations-Zyklus', detail: 'Feedback → neuer Druck → nächstes Review' },
    { value: 'WKO', label: 'Gewerbeberechtigung', detail: 'Registriertes Gewerbe in Österreich' },
  ],
  priceComparison: {
    headline: 'Konzeptmodell-Preise für Villach',
    subheadline: 'Deutlich günstiger als CNC-Handmuster – bei vergleichbarer Präsentationsqualität.',
    prices: [
      { label: 'Formcheck (bis 8cm)', price: 'ab €18', note: 'Schnelle Dimensionsprüfung' },
      { label: 'Detailmodell (0.12mm)', price: 'ab €40', note: 'Passstifte, Rastnasen sichtbar' },
      { label: '5 Formvarianten', price: 'ab €30/Stk.', note: 'Ergonomie-Vergleich am Objekt' },
      { label: 'Iterationspaket (3x)', price: 'ab €100', note: '3 Versionen inkl. Feedback-Runden' },
    ],
    badges: ['Feinauflösung 0.12mm', 'Iterationspakete', 'Technologiepark-Lieferung'],
  },
  techSpecs: {
    headline: 'Spezifikationen für Technologie-Konzeptmodelle',
    subheadline: 'Optimiert für Designreviews und Formfaktor-Bewertungen',
    specs: [
      { label: 'Auflösung', value: '0.12mm', detail: 'Feinste Details für Passteile' },
      { label: 'Passungstoleranz', value: '±0.15mm', detail: 'Schraubverbindungen funktionsfähig' },
      { label: 'Oberfläche', value: 'Geschliffen verfügbar', detail: 'Premium-Finish für Kundenpräsentationen' },
      { label: 'Materialien', value: 'PLA+, PETG, ASA', detail: 'Je nach Anforderung wählbar' },
      { label: 'Iterationszeit', value: '3 Werktage', detail: 'Feedback-Schleife in 72h' },
    ],
  },
  problemSolution: {
    problemTitle: 'Elektronik-Design ohne physische Modelle',
    problems: [
      'CNC-Handmuster kosten €300-800 und brauchen 3 Wochen Lieferzeit',
      'Ergonomie und Proportionen lassen sich am Bildschirm nicht zuverlässig bewerten',
      'Designfehler fallen erst auf, wenn das Spritzguss-Werkzeug schon bestellt ist',
      'Kunden und Management brauchen etwas zum Anfassen für die Freigabe',
    ],
    solutionTitle: '3D-Druck für schnelle Designvalidierung',
    solutions: [
      'Konzeptmodelle ab €18: zehnmal günstiger als ein einzelnes CNC-Muster',
      '3 Formvarianten nebeneinander: Ergonomie und Proportionen in der Hand vergleichen',
      'Designfehler erkennen in Iteration 1, nicht nach der Werkzeug-Bestellung',
      'Modell auf den Tisch legen, drehen, testen: Freigabe fällt sofort',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'STEP-Datei senden', description: 'Per E-Mail mit Passungsanforderungen.', highlight: false },
    { time: '3h', title: 'Technische Abstimmung', description: 'Optimierung, Materialwahl, Preisangebot.', highlight: false },
    { time: '12h', title: 'Präzisionsdruck', description: '0.12mm Auflösung, Passstifte exakt.', highlight: true },
    { time: '3 Tage', title: 'In Villach', description: 'Lieferung an Technologiepark oder Firmenadresse.', highlight: true },
  ],
  inTextLinks: [
    { anchor: 'Startup-Modelle Klagenfurt', href: '/3d-druck-klagenfurt', context: 'Klagenfurter Startups aus dem Lakeside Park nutzen unsere Pitch-Modelle.' },
    { anchor: 'Serienproduktion in Graz', href: '/3d-druck-graz', context: 'Für größere Serien bietet Graz optimale Industrieanbindung.' },
    { anchor: 'Messemodelle für Kärntner Events', href: '/messemodelle/kaernten', context: 'Professionelle Messeexponate für Kärntner Fachmessen.' },
  ],

};

// ═══════════════════════════════════════════
// WELS – Nachbar & Abholung
// ═══════════════════════════════════════════
const wels: DruckSectionDataSet = {
  valueProposition: {
    headline: '10 Minuten zu Ihrem 3D-Druck – Wels',
    subheadline: 'Persönliche Abholung, Beratung vor Ort und Same-Day-Service für Welser Betriebe',
    advantages: [
      { icon: 'MapPin', title: 'Nur 10 Minuten entfernt', description: 'Unser Standort Gunskirchen: 10 Minuten von Wels, Parkplatz vor der Tür, persönliche Übergabe.' },
      { icon: 'Palette', title: 'Corporate-Farben verfügbar', description: 'PETG in Ihrer Firmenfarbe: Displayhalter, Messemodelle und Präsentationsobjekte im CI.' },
      { icon: 'Clock', title: 'Same-Day bei Standardteilen', description: 'Vormittags freigegeben = nachmittags abholbereit. Für dringende Displayprojekte.' },
      { icon: 'Repeat', title: 'Nachbestellungen per E-Mail', description: 'Jedes Design digital gespeichert. Eine E-Mail genügt für identische Nachproduktion.' },
    ],
    stats: [
      { label: 'Entfernung Wels', value: '10 Min' },
      { label: 'Welser Projekte', value: '120+' },
      { label: 'Same-Day', value: 'Möglich' },
      { label: 'Sonderfarben', value: 'CI-Farben' },
    ],
  },
  checklist: {
    headline: 'So bestellen Welser Betriebe',
    subheadline: 'Persönlich, unkompliziert und schnell – wie beim Handwerker nebenan',
    steps: [
      { title: 'Kontakt aufnehmen', tasks: ['Anrufen, E-Mail oder vorbeikommen', 'Projekt beschreiben oder Datei mitbringen', 'Wunschtermin nennen'], tip: 'Unangemeldetes Vorbeikommen ist kein Problem.' },
      { title: 'Gemeinsam planen', tasks: ['Bei Bedarf vor Ort am Bildschirm', 'Material und Farbe auswählen', 'Preis sofort kalkuliert'], tip: 'Wir zeigen Ihnen Materialproben zum Anfassen.' },
      { title: 'Fertigung nebenan', tasks: ['Druck in Gunskirchen', 'Qualitätsprüfung vor Ihren Augen', 'Nachbesserung sofort möglich'], tip: 'Bei einfachen Teilen: Same-Day machbar.' },
      { title: 'Abholen & fertig', tasks: ['10 Minuten von Wels', 'Parkplatz direkt vor der Tür', 'Bar, Rechnung oder Überweisung'], tip: 'Stammkunden bekommen offene Rechnung.' },
    ],
  },
  trustSignals: [
    { value: '10 Min', label: 'Von Wels', detail: 'Gunskirchen, Parkplatz direkt vor der Tür' },
    { value: '120+', label: 'Welser Projekte', detail: 'Landwirtschaft, Lebensmittel, Handwerk' },
    { value: 'Same Day', label: 'Für Standardteile', detail: 'Vormittags bestellt, nachmittags abholbereit' },
    { value: 'CI-Farben', label: 'In PETG verfügbar', detail: 'Ihre Firmenfarbe für Displays und Halterungen' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen – 100% zufrieden' },
  ],
  priceComparison: {
    headline: 'Preise für Welser Betriebe',
    subheadline: 'Keine Versandkosten, keine Wartezeit – persönliche Abholung in Gunskirchen.',
    prices: [
      { label: 'Displayhalter einfach', price: 'ab €20', note: 'Standardform, Ihre Farbe' },
      { label: 'CI-Display mit Logo', price: 'ab €45', note: 'Corporate Design integriert' },
      { label: 'Messehalter-Set (8 Stk.)', price: 'ab €25/Stk.', note: 'Identisch für jede Messe' },
      { label: 'Schablone / Hilfsteil', price: 'ab €15', note: 'Funktionale Werkstatt-Hilfen' },
    ],
    badges: ['Keine Versandkosten', 'Abholung 10 Min', 'Stammkunden-Rechnung'],
  },
  techSpecs: {
    headline: 'Was wir für Welser Betriebe drucken',
    subheadline: 'Displayhalter, Messemodelle und Werkstatt-Hilfsmittel – aus dem richtigen Material',
    specs: [
      { label: 'Display-Material', value: 'PETG in CI-Farbe', detail: 'Reinigungsbeständig, farbecht, robust' },
      { label: 'Logo-Integration', value: 'Im Druck integriert', detail: 'Kein Aufkleber – Logo aus dem Material' },
      { label: 'Sonderfarben', value: 'Pantone-nah', detail: 'Farbabstimmung an Ihre Firmenfarbe' },
      { label: 'Reproduzierbarkeit', value: '100% identisch', detail: 'Nachbestellungen per E-Mail' },
      { label: 'Funktionsteile', value: 'Schablonen, Halter', detail: 'Werkstatt-Hilfsmittel nach Maß' },
    ],
  },
  problemSolution: {
    problemTitle: 'Was Welser Betriebe stört',
    problems: [
      'Online-Bestellungen: 3-5 Tage Wartezeit, Versandkosten, unpersönlich',
      'Standard-Displays aus dem Baumarkt passen nie zum eigenen Produkt',
      'Für ein einzelnes Spezialteil extra einen Lieferanten suchen ist aufwändig',
      'Messe nächste Woche – Displayhalter nicht auf Lager',
    ],
    solutionTitle: 'Ihr 3D-Druck-Nachbar in Gunskirchen',
    solutions: [
      '10 Minuten von Wels: persönliche Abholung, keine Versandkosten, kein Warten',
      'Maßgefertigte Displays in Ihrer Farbe mit Logo – kein Baumarkt-Kompromiss',
      'Ein Anruf, eine E-Mail – Ihr Spezialteil ist in Stunden fertig',
      'Same-Day-Fertigung: vormittags bestellen, nachmittags haben Sie Ihre Messe-Displays',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Anrufen oder vorbeikommen', description: 'Projekt besprechen, Datei bringen oder senden.', highlight: false },
    { time: '30 Min', title: 'Sofort-Angebot', description: 'Preis sofort, Material auswählen.', highlight: false },
    { time: '1h', title: 'Druck startet', description: 'Ihr Projekt ist auf dem Drucker.', highlight: true },
    { time: '4-6h', title: 'Abholung in Gunskirchen', description: 'SMS wenn fertig. 10 Minuten von Wels.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Standort Gunskirchen', href: '/3d-druck-gunskirchen', context: 'Nur 10 Minuten entfernt: persönliche Beratung und Abholung.' },
    { anchor: 'Express-Fertigung Linz', href: '/3d-druck-linz', context: 'Same-Day Produktion für eilige Projekte im Zentralraum OÖ.' },
    { anchor: 'Kreativprojekte aus Salzburg', href: '/3d-druck-salzburg', context: 'Salzburger Designer schätzen unsere Designstudien und Mockups.' },
  ],

};

// ═══════════════════════════════════════════
// ST. PÖLTEN – Medien & Bildung
// ═══════════════════════════════════════════
const stpoelten: DruckSectionDataSet = {
  valueProposition: {
    headline: '3D-Druck für FH-Projekte & Medientechnik',
    subheadline: 'Requisiten, Studiomodelle und Lehrmittel für St. Pöltner Bildungseinrichtungen',
    advantages: [
      { icon: 'Film', title: 'Film-Requisiten nach Maß', description: 'Individuelle Props, Set-Dekorationen und Studiomodelle für Medienprojekte der FH St. Pölten.' },
      { icon: 'GraduationCap', title: 'Studentenfreundliche Preise', description: 'Ab €20 pro Modell – auch bei kleinem Budget professionelle Ergebnisse.' },
      { icon: 'Palette', title: 'Mehrfarbig und kreativ', description: 'PETG in vielen Farben: vom Sci-Fi-Requisit bis zum historischen Modell.' },
      { icon: 'Truck', title: 'Schnell über die A1', description: 'Standard in 1-2 Werktagen, Express über Nacht nach St. Pölten.' },
    ],
    stats: [
      { label: 'FH-Projekte', value: '35+' },
      { label: 'Start-Preis', value: 'ab €20' },
      { label: 'A1-Lieferung', value: '1-2 Tage' },
      { label: 'Farben', value: '20+' },
    ],
  },
  checklist: {
    headline: 'Requisiten & Lehrmittel bestellen',
    subheadline: 'Von der Idee zum Set-Prop – in 3 Tagen auf dem Drehtisch',
    steps: [
      { title: 'Projekt beschreiben', tasks: ['Skizze, Foto oder CAD-Datei', 'Größe und Farbwunsch angeben', 'Budget und Termin nennen'], tip: 'Auch eine Handzeichnung reicht als Startpunkt.' },
      { title: 'Design & Machbarkeit', tasks: ['Konstruktion bei Bedarf inklusive', 'Materialempfehlung für den Einsatzzweck', 'Angebot innerhalb 6 Stunden'], tip: 'Für Studierende: Sonderkonditionen verfügbar.' },
      { title: 'Kreativdruck', tasks: ['Mehrfarbige Fertigung möglich', 'Nachbearbeitung nach Wunsch', 'Qualitätskontrolle vor Versand'], tip: 'Lackierung und Beschichtung auf Anfrage.' },
      { title: 'A1-Express', tasks: ['Versand über A1 Westautobahn', 'Sicher verpackt für empfindliche Props', 'Lieferung an FH-Adresse möglich'], tip: 'Overnight-Express für Last-Minute-Drehs.' },
    ],
  },
  trustSignals: [
    { value: '35+', label: 'FH-Projekte', detail: 'Requisiten, Studiomodelle, Lehrmittel' },
    { value: 'ab €20', label: 'Studentenpreise', detail: 'Faire Konditionen für Uni-Budgets' },
    { value: '1 Preis', label: 'Nachwuchspreis', detail: 'Film mit unseren Requisiten gewann Award' },
    { value: '20+', label: 'Farben', detail: 'Vom Neon-Grün bis Vintage-Gold' },
    { value: 'A1', label: 'Expressroute', detail: 'Overnight-Versand über Westautobahn' },
  ],
  priceComparison: {
    headline: 'FH-Projekt und Medien-Preise',
    subheadline: 'Kreative Projekte müssen nicht teuer sein – transparente Preise für Studierende und Institute.',
    prices: [
      { label: 'Einzel-Requisite (bis 15cm)', price: 'ab €20', note: 'Für Filmsets, Props, Dekor' },
      { label: 'Studiomodell (20-30cm)', price: 'ab €50', note: 'Mehrfarbig, detailliert' },
      { label: 'Lehrmittel-Set (5 Stk.)', price: 'ab €18/Stk.', note: 'Identisch für alle Teilnehmer' },
      { label: 'Kreativprojekt XXL', price: 'ab €80', note: 'Über 30cm, individuell gestaltet' },
    ],
    badges: ['Studentenrabatt', 'Konstruktion bei Bedarf gratis', 'FH-Rechnung möglich'],
  },
  techSpecs: {
    headline: 'Technik für Medien- und Kreativprojekte',
    subheadline: 'Von der Film-Requisite bis zum Studiomodell – das richtige Material für jeden Einsatz',
    specs: [
      { label: 'Farben', value: '20+ Standard', detail: 'Neon, Metallic, Transluzent verfügbar' },
      { label: 'Nachbearbeitung', value: 'Schleifen, Lackieren', detail: 'Für Kamera-taugliche Oberflächen' },
      { label: 'Größe', value: 'Bis 40cm einteilig', detail: 'Größer modular zusammengesetzt' },
      { label: 'Material', value: 'PETG mehrfarbig', detail: 'Robust genug für Dreharbeiten' },
      { label: 'Gewicht', value: '70% leichter als Holz', detail: 'Leicht für Set-Umbauten' },
    ],
  },
  problemSolution: {
    problemTitle: 'Was Medienprojekte erschwert',
    problems: [
      'Individuelle Requisiten gibt es in keinem Laden zu kaufen',
      'Budget für studentische Filmprojekte ist minimal',
      'Drehtag übermorgen – aber die Set-Dekoration fehlt noch',
      'Holz- und Gips-Requisiten sind schwer und brechen auf dem Set',
    ],
    solutionTitle: '3D-Druck für die Kreativbranche',
    solutions: [
      'Maßgefertigte Props in jeder Form, Farbe und Größe – aus dem Drucker',
      'Ab €20 pro Requisite: professionelle Ergebnisse auch mit kleinem Budget',
      'Express in 24h: Bestellung heute, Requisite morgen am Set',
      'PLA+ und PETG: leicht, robust, lackierbar. Perfekt für Film und Bühne',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Skizze oder Datei senden', description: 'Per E-Mail mit Beschreibung des Einsatzzwecks.', highlight: false },
    { time: '6h', title: 'Angebot & Design', description: 'Preis, Machbarkeit und Konstruktionsvorschlag.', highlight: false },
    { time: '24h', title: 'Druck & Finish', description: 'Mehrfarbig, nachbearbeitet, set-ready.', highlight: true },
    { time: '48h', title: 'An der FH St. Pölten', description: 'Express über A1 – Lieferung ans Institut.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Wien Startup-Szene', href: '/3d-druck-wien', context: 'Nur 60 km entfernt: Wiener Startups profitieren von Express-Lieferung.' },
    { anchor: 'FDM-Verfahren im Detail', href: '/fdm-3d-druck', context: 'Alle technischen Details zu unserem FDM-Druckverfahren.' },
    { anchor: 'Architekturmodelle NÖ', href: '/architekturmodelle/niederoesterreich', context: 'Niederösterreichische Architekten nutzen unsere maßstabsgetreuen Modelle.' },
  ],

};

// ═══════════════════════════════════════════
// DORNBIRN – Textildesign & Vorabmodelle
// ═══════════════════════════════════════════
const dornbirn: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Vorabmodelle für Vorarlberger Produktdesigner',
    subheadline: 'Designvalidierung vor der Produktion – 3 Iterationen in 10 Tagen, ab €60 pro Runde',
    advantages: [
      { icon: 'Repeat', title: 'Iteratives Design', description: '3 Versionen in 10 Tagen: drucken, prüfen, anpassen, nächste Runde. Schneller als jede Werkstatt.' },
      { icon: 'Shield', title: 'Formvalidierung spart Geld', description: 'Einen Designfehler vor der Serienfertigung finden spart Tausende Euro Werkzeugkosten.' },
      { icon: 'Globe', title: 'Auch nach CH & Süddeutschland', description: 'Grenznahe Lieferung: Vorarlberg, Schweiz und Bodenseeregion in 1-2 Tagen.' },
      { icon: 'Layers', title: 'PLA+ und PETG im Vergleich', description: 'Erste Iteration in PLA+ für Formcheck, finale Version in PETG für robuste Kundenpräsentation.' },
    ],
    stats: [
      { label: 'Designprojekte', value: '30+' },
      { label: 'Iterationszeit', value: '3 Tage' },
      { label: 'Lieferung CH/AT/DE', value: '1-2 Tage' },
      { label: 'Materialien', value: 'PLA+ PETG ASA' },
    ],
  },
  checklist: {
    headline: 'Designvalidierung Schritt für Schritt',
    subheadline: 'Vom ersten Formcheck zur Kundenpräsentation – strukturiert und kosteneffizient',
    steps: [
      { title: 'Iteration 1: Formcheck', tasks: ['STEP-Datei senden', 'Grobe Proportionsprüfung gewünscht', 'PLA+ für schnellen Erstdruck'], tip: 'Erste Iteration oft schon am nächsten Tag fertig.' },
      { title: 'Feedback einarbeiten', tasks: ['Maße anpassen, Details verfeinern', 'Wandstärken optimieren', 'Neue Version senden'], tip: 'Wir prüfen die Änderungen kostenlos auf Druckbarkeit.' },
      { title: 'Iteration 2-3: Feinschliff', tasks: ['PETG für robuste Version', 'Oberfläche schleifen bei Bedarf', 'Passungen und Details prüfen'], tip: 'PETG-Version überzeugt auch kritische Kunden.' },
      { title: 'Kundenpräsentations-Version', tasks: ['Finales Material und Finish', 'Hochwertige Oberfläche', 'Versand über A14 Rheintal'], tip: 'Auch Versand in die Schweiz in 1-2 Tagen.' },
    ],
  },
  trustSignals: [
    { value: '30+', label: 'Designprojekte', detail: 'Für Vorarlberger Textil-, Kunststoff- und Möbeldesigner' },
    { value: '€200', label: 'Für 3 Iterationen', detail: 'Kompletter Validierungszyklus inkl. Material' },
    { value: '10 Tage', label: 'Gesamtdauer', detail: '3 Designrunden in unter 2 Wochen' },
    { value: 'CH+DE', label: 'Grenznahe Lieferung', detail: 'Schweiz und Bodenseeregion in 1-2 Tagen' },
    { value: '5.0', label: 'Google Bewertung', detail: 'Durchgehend 5 Sterne' },
  ],
  priceComparison: {
    headline: 'Designvalidierung – was kostet das?',
    subheadline: 'Iterative Vorabmodelle kosten einen Bruchteil eines Werkzeugfehlers.',
    prices: [
      { label: 'Formcheck PLA+ (Iteration 1)', price: 'ab €40', note: 'Schnelle Proportionsprüfung' },
      { label: 'Detailmodell PETG (Iteration 2)', price: 'ab €60', note: 'Robust, kundenprüfbar' },
      { label: '3er-Iterationspaket', price: 'ab €160', note: 'Drei Runden inkl. Feedback' },
      { label: 'Kundenpräsentation ASA', price: 'ab €80', note: 'Premium-Finish, UV-beständig' },
    ],
    badges: ['Iterationspakete', 'CH-Lieferung möglich', 'Formvalidierung spart Werkzeugkosten'],
  },
  techSpecs: {
    headline: 'Spezifikationen für Designvalidierung',
    subheadline: 'Materialwahl je Iteration – von schnellem Formcheck bis zur Kundenpräsentation',
    specs: [
      { label: 'Iteration 1', value: 'PLA+ Standard', detail: 'Schnell und günstig für Proportionen' },
      { label: 'Iteration 2-3', value: 'PETG oder ASA', detail: 'Robust für Kundenpräsentation' },
      { label: 'Toleranz', value: '±0.2mm', detail: 'Maßhaltig für Passungsprüfung' },
      { label: 'Oberfläche', value: 'Roh bis geschliffen', detail: 'Je nach Iterationsphase wählbar' },
      { label: 'Versandgebiet', value: 'AT, CH, DE', detail: 'Grenznahe Lage für Dreiländereck' },
    ],
  },
  problemSolution: {
    problemTitle: 'Risiken bei Produktdesign ohne Vorabmodell',
    problems: [
      'Werkzeugkosten für Spritzguss: €5.000-50.000 – ein Designfehler ist extrem teuer',
      'Kunde sagt nach der Serienfertigung: "Die Proportionen stimmen nicht"',
      'Textil-Formteile lassen sich am Bildschirm nicht realistisch beurteilen',
      'Iterationen mit klassischem Modellbau dauern 2-4 Wochen pro Runde',
    ],
    solutionTitle: 'Vorabmodelle eliminieren Risiken',
    solutions: [
      '3 Iterationen für €200: Designfehler finden, bevor das Werkzeug bestellt wird',
      'Kunde hält das Modell in der Hand und gibt Freigabe – keine Überraschungen',
      'Physische Formteile in Originalgröße: Proportionen, Haptik, Ergonomie prüfbar',
      '3 Tage pro Iteration: in 10 Tagen ist das Design validiert und freigegeben',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'STEP-Datei senden', description: 'Erste Version zur Proportionsprüfung.', highlight: false },
    { time: '3 Tage', title: 'Iteration 1 fertig', description: 'PLA+-Formcheck, Feedback sammeln.', highlight: false },
    { time: '6 Tage', title: 'Iteration 2 fertig', description: 'PETG-Version nach Feedback, robust.', highlight: true },
    { time: '10 Tage', title: 'Finale Version', description: 'ASA-Präsentationsmodell, über A14 geliefert.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Textilmuster Vorarlberg', href: '/3d-druck-vorarlberg', context: 'Vorarlberger Textilbranche setzt auf 3D-gedruckte Prototypen.' },
    { anchor: 'Express nach Innsbruck', href: '/3d-druck-innsbruck', context: 'Tiroler Kunden profitieren vom selben Alpen-Expressservice.' },
    { anchor: 'Messemodelle für Dornbirner Messe', href: '/messemodelle/vorarlberg', context: 'Maßgefertigte Exponate für die Dornbirner Herbstmesse und andere Events.' },
  ],

};

// ═══════════════════════════════════════════
// GUNSKIRCHEN – Standort / Direkt vom Hersteller
// ═══════════════════════════════════════════
const gunskirchen: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Direkt vom Hersteller – ohne Umwege',
    subheadline: 'Besuchen Sie uns in Gunskirchen: gemeinsam am Bildschirm designen, drucken, mitnehmen',
    advantages: [
      { icon: 'Home', title: 'Vor-Ort-Erlebnis', description: 'Kommen Sie vorbei, schauen Sie den Druckern zu, prüfen Sie Materialproben. 3D-Druck zum Anfassen.' },
      { icon: 'Users', title: 'Co-Design am Bildschirm', description: 'Wir konstruieren gemeinsam mit Ihnen. Änderungen direkt am Bildschirm, Druck startet sofort.' },
      { icon: 'Zap', title: 'Sofort-Fertigung', description: 'Kein Versand, kein Warten. Einfache Teile in 2-4 Stunden fertig. Vor Ihren Augen gedruckt.' },
      { icon: 'Shield', title: 'Qualität direkt prüfen', description: 'Modell aus dem Drucker nehmen, prüfen, bei Bedarf sofort nachdrucken. Zero-Risiko-Prinzip.' },
    ],
    stats: [
      { label: 'Vor-Ort-Projekte', value: '180+' },
      { label: 'Sofortfertigung', value: '2-4h' },
      { label: 'Materialproben', value: 'Zum Anfassen' },
      { label: 'Parkplatz', value: 'Direkt vor der Tür' },
    ],
  },
  checklist: {
    headline: 'Vor-Ort-Erlebnis in Gunskirchen',
    subheadline: 'Vorbeikommen, gemeinsam designen, zusehen, mitnehmen – 3D-Druck persönlich',
    steps: [
      { title: 'Vorbeikommen', tasks: ['Unangemeldeter Besuch möglich', 'Datei mitbringen oder Idee beschreiben', 'Materialproben vor Ort ansehen'], tip: 'Parkplatz direkt vor der Tür. Kaffee gibt es auch.' },
      { title: 'Gemeinsam konstruieren', tasks: ['Am Bildschirm mit Ihnen designen', 'Änderungen direkt einarbeiten', 'Material und Farbe auswählen'], tip: 'Konstruktion vor Ort ist für einfache Teile kostenlos.' },
      { title: 'Sofort drucken', tasks: ['Druck startet in Minuten', 'Sie können beim Drucken zusehen', 'Qualität direkt am Drucker prüfen'], tip: 'Einfache Teile: fertig in 2-4 Stunden.' },
      { title: 'Mitnehmen', tasks: ['Modell persönlich prüfen', 'Bei Bedarf sofort Nachbesserung', 'Zahlung: Bar, Karte oder Rechnung'], tip: 'Zufriedenheit garantiert – sonst drucken wir nochmal.' },
    ],
  },
  trustSignals: [
    { value: '180+', label: 'Vor-Ort-Kunden', detail: 'Stammkunden kommen regelmäßig vorbei' },
    { value: '2-4h', label: 'Sofortfertigung', detail: 'Für einfache Standardteile' },
    { value: '0€', label: 'Vor-Ort-Beratung', detail: 'Gemeinsames Designen am Bildschirm gratis' },
    { value: '100%', label: 'Zufriedenheitsgarantie', detail: 'Nachbesserung vor Ihren Augen' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen – persönlicher Service' },
  ],
  priceComparison: {
    headline: 'Preise ab Werk – ohne Versandaufschlag',
    subheadline: 'Direkt vom Hersteller: keine Versandkosten, keine Wartezeit, persönliche Qualitätsprüfung.',
    prices: [
      { label: 'Einzelteil Standard', price: 'ab €12', note: 'Einfache Form, sofort verfügbar' },
      { label: 'Designobjekt mittel', price: 'ab €30', note: 'Vor Ort gemeinsam entwickelt' },
      { label: 'Display-Set (5 Stk.)', price: 'ab €22/Stk.', note: 'Identisch reproduziert' },
      { label: 'Konstruktion + Druck', price: 'ab €40', note: 'Wir designen mit Ihnen zusammen' },
    ],
    badges: ['Keine Versandkosten', 'Vor-Ort-Beratung gratis', 'Sofortfertigung'],
  },
  techSpecs: {
    headline: 'Direkt aus unserer Werkstatt',
    subheadline: 'Erleben Sie FDM-3D-Druck hautnah – vom Drucker direkt in Ihre Hand',
    specs: [
      { label: 'Druckerpark', value: '8 FDM-Drucker', detail: 'Parallele Fertigung mehrerer Aufträge' },
      { label: 'Materialien vor Ort', value: 'PLA+ PETG ASA TPU', detail: 'Alle Materialien zum Anfassen' },
      { label: 'Sofortfertigung', value: 'Ab 2 Stunden', detail: 'Für einfache Geometrien' },
      { label: 'Co-Design', value: 'Gemeinsam am PC', detail: 'Wir konstruieren mit Ihnen zusammen' },
      { label: 'Qualitätsprüfung', value: 'Vor Ihren Augen', detail: 'Nachbesserung sofort möglich' },
    ],
  },
  problemSolution: {
    problemTitle: 'Warum online bestellen, wenn wir nebenan sind?',
    problems: [
      'Online-Bestellungen: 3-7 Tage Wartezeit, Verpackung beschädigt, Modell unbrauchbar',
      'Material am Bildschirm auswählen ist wie Schuhe im Internet kaufen',
      'Bei Problemen mit dem Druck dauert die Reklamation per Post eine Woche',
      'Komplexe Projekte erklären sich per E-Mail schlecht',
    ],
    solutionTitle: 'Vorbeikommen statt online bestellen',
    solutions: [
      'Sofortfertigung in 2-4h: Sie nehmen Ihr Modell am selben Tag mit',
      'Materialproben anfassen: 8 Materialien in 20+ Farben direkt vergleichen',
      'Nicht zufrieden? Wir drucken vor Ihren Augen nochmal – sofort',
      'Gemeinsam am Bildschirm: Sie zeigen, wir konstruieren. Änderungen in Minuten.',
    ],
  },
  expressTimeline: [
    { time: '0 Min', title: 'Vorbeikommen', description: 'Unangemeldet – Parkplatz vor der Tür.', highlight: false },
    { time: '30 Min', title: 'Design & Material', description: 'Gemeinsam am Bildschirm, Materialproben anfassen.', highlight: false },
    { time: '1h', title: 'Druck gestartet', description: 'Ihr Teil ist auf dem Drucker. Kaffee?', highlight: true },
    { time: '2-4h', title: 'Mitnehmen', description: 'Qualität prüfen, bezahlen, fertig.', highlight: true },
  ],
  inTextLinks: [
    { anchor: 'Same-Day Abholung Wels', href: '/3d-druck-wels', context: 'Kunden aus Wels holen ihre Modelle oft noch am selben Tag ab.' },
    { anchor: 'Express-Versand nach Wien', href: '/3d-druck-wien', context: 'Über Nacht von Gunskirchen nach Wien – morgens auf dem Schreibtisch.' },
    { anchor: 'Materialvergleich FDM', href: '/fdm-3d-druck', context: 'PLA+, PETG, ASA, TPU – alle Materialien im technischen Vergleich.' },
  ],

};

// ═══════════════════════════════════════════
// BUNDESLÄNDER
// ═══════════════════════════════════════════
const oberoesterreich: DruckSectionDataSet = {
  valueProposition: {
    headline: 'OÖ-Industriebetriebe setzen auf 3D-gedruckte Modelle',
    subheadline: 'Präsentationsmodelle, Schulungshilfen und Give-aways – gefertigt am Standort Gunskirchen',
    advantages: [
      { icon: 'Factory', title: 'Standort in OÖ', description: 'Unser Produktionsstandort Gunskirchen liegt zentral in Oberösterreich. Persönliche Abholung jederzeit.' },
      { icon: 'Users', title: 'B2B-Erfahrung', description: 'Rechnung auf Firma, NDA auf Anfrage, Ansprechpartner statt Chatbot.' },
      { icon: 'Package', title: 'Projektmengen machbar', description: '40 identische Präsentationsmodelle in einer Woche – persönliche Abholung inklusive.' },
      { icon: 'Shield', title: 'Nachbearbeitete Oberflächen', description: 'Geschliffen und grundiert für Kundenpräsentationen und Veranstaltungen.' },
    ],
    stats: [
      { label: 'OÖ-Projekte', value: '300+' },
      { label: 'Standort', value: 'Gunskirchen' },
      { label: 'Firmenrechnung', value: 'Standard' },
      { label: 'Abholung', value: 'Jederzeit' },
    ],
  },
  checklist: {
    headline: 'Ihr OÖ-Industrieprojekt in 4 Schritten',
    subheadline: 'Von der Anfrage zum fertigen Präsentationsmodell – persönlich und professionell',
    steps: [
      { title: 'Projektanfrage', tasks: ['Per E-Mail, Telefon oder vor Ort', 'CAD-Daten oder Beschreibung', 'Stückzahl und Terminwunsch'], tip: 'Persönliche Beratung in Gunskirchen jederzeit möglich.' },
      { title: 'B2B-Angebot', tasks: ['Staffelpreis bei Mengen', 'Firmenrechnung mit UID', 'NDA auf Anfrage'], tip: 'Angebot in unter 6 Stunden garantiert.' },
      { title: 'Serienfertigung', tasks: ['Bis 80 Teile pro Woche Kapazität', 'Qualitätskontrolle jedes Teils', 'Nachbearbeitung nach Standard'], tip: '40 identische Teile in 5-7 Werktagen.' },
      { title: 'Abholung oder Versand', tasks: ['Persönliche Abholung in Gunskirchen', 'Oder OÖ-weiter Versand in 24h', 'Tracking bei Versand'], tip: 'Abholung spart Versandkosten und Zeit.' },
    ],
  },
  trustSignals: [
    { value: '300+', label: 'OÖ-Projekte', detail: 'Von KMU bis Großkonzern' },
    { value: 'Gunskirchen', label: 'Standort in OÖ', detail: 'Persönliche Abholung und Beratung' },
    { value: 'NDA', label: 'Vertraulichkeit', detail: 'Geheimhaltungsvereinbarung möglich' },
    { value: '80/Woche', label: 'Kapazität', detail: 'Für Projektmengen und Serien' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen – Top-Service' },
  ],
  priceComparison: {
    headline: 'Industriepreise für OÖ-Betriebe',
    subheadline: 'Faire B2B-Konditionen mit Firmenrechnung und Staffelpreisen.',
    prices: [
      { label: 'Einzelmodell Standard', price: 'ab €20', note: 'PLA+ für interne Präsentationen' },
      { label: 'Präsentationsmodell', price: 'ab €50', note: 'Nachbearbeitet, kundentauglich' },
      { label: 'Give-away-Serie (40 Stk.)', price: 'ab €15/Stk.', note: 'Identisch für Kundenevents' },
      { label: 'Schulungsmodell Detail', price: 'ab €70', note: 'Mehrfarbig, zerlegbar' },
    ],
    badges: ['Firmenrechnung mit UID', 'Abholung in Gunskirchen', 'NDA möglich'],
  },
  techSpecs: {
    headline: 'Technische Daten unserer Fertigung',
    subheadline: 'FDM-Druck am Standort Gunskirchen – robust, reproduzierbar, professionell',
    specs: [
      { label: 'Druckerpark', value: '8 FDM-Drucker', detail: 'Hohe Parallelkapazität' },
      { label: 'Materialien', value: 'PLA+ PETG ASA TPU', detail: 'Für jeden Einsatzzweck' },
      { label: 'Serienfertigung', value: 'Bis 80/Woche', detail: 'Identische Qualität pro Stück' },
      { label: 'Oberfläche', value: 'Roh bis lackiert', detail: 'Je nach Präsentationslevel' },
      { label: 'Toleranz', value: '±0.2mm', detail: 'Reproduzierbar bei Nachbestellungen' },
    ],
  },
  problemSolution: {
    problemTitle: 'Herausforderungen für OÖ-Industriebetriebe',
    problems: [
      'Kundenveranstaltung in 10 Tagen – kein Modell zum Vorzeigen vorhanden',
      '40 identische Give-away-Modelle sind bei klassischem Modellbau unbezahlbar',
      'Neue Mitarbeiter verstehen Produkte besser mit physischen Schulungsmodellen',
      'Online-Anbieter sind unpersönlich und Versandzeiten unsicher',
    ],
    solutionTitle: 'Ihr lokaler Partner in Gunskirchen',
    solutions: [
      '40 Präsentationsmodelle in einer Woche – termingerecht für jedes Event',
      'Ab €15/Stück bei 40er-Serien: professionelle Give-aways zum fairen Preis',
      'Mehrfarbige Schulungsmodelle: Produktaufbau in Minuten verstanden statt Stunden',
      'Persönliche Abholung in Gunskirchen – Qualität prüfen, Kaffee trinken, mitnehmen',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Anfrage per E-Mail/Telefon', description: 'CAD-Daten, Stückzahl, Terminwunsch.', highlight: false },
    { time: '4h', title: 'B2B-Angebot', description: 'Staffelpreis, Firmenrechnung, Terminbestätigung.', highlight: false },
    { time: '1-3 Tage', title: 'Serienfertigung', description: 'Paralleldruck auf 8 Maschinen.', highlight: true },
    { time: '5-7 Tage', title: 'Abholung oder Versand', description: 'Persönlich in Gunskirchen oder OÖ-weiter Versand.', highlight: true },
  ],
  inTextLinks: [
    { anchor: 'Direktabholung Gunskirchen', href: '/3d-druck-gunskirchen', context: 'Unser Standort in Gunskirchen bietet persönliche Beratung und Sofort-Abholung.' },
    { anchor: '3D-Druck Linz Express', href: '/3d-druck-linz', context: 'Same-Day Service für Linzer Unternehmen und Bildungseinrichtungen.' },
    { anchor: 'Messemodelle für OÖ Industriemessen', href: '/messemodelle/oberoesterreich', context: 'Professionelle Exponate für die Welser Messe und andere OÖ-Events.' },
  ],

};

const niederoesterreich: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Kleinserien für NÖ-Gewerbebetriebe',
    subheadline: 'Displayobjekte, Musterteile und Designmodelle – ideal für dezentrale Standorte in ganz Niederösterreich',
    advantages: [
      { icon: 'Truck', title: 'A1-Express nach NÖ', description: 'Über die Westautobahn in 1-2 Werktagen überall in Niederösterreich. Express über Nacht.' },
      { icon: 'Palette', title: 'Sonderfarben & Logo', description: 'CI-Farben in PETG, Logo-Integration direkt im Druck – individuell statt Standard.' },
      { icon: 'Repeat', title: 'Nachbestellungen identisch', description: 'Jeder Auftrag digital gespeichert. Nachproduktion per E-Mail in 3 Tagen.' },
      { icon: 'Grape', title: 'Erfahrung mit Weinbau & Agrar', description: 'Displayhalter für Weingüter, Musterteile für Agrarbetriebe, Modelle für Gemeinden.' },
    ],
    stats: [
      { label: 'NÖ-Projekte', value: '70+' },
      { label: 'A1-Lieferung', value: '1-2 Tage' },
      { label: 'Nachbestellzeit', value: '3 Tage' },
      { label: 'Sonderfarben', value: 'Ja' },
    ],
  },
  checklist: {
    headline: 'Ablauf für NÖ-Betriebe',
    subheadline: 'Von der Anfrage bis zur Lieferung – unkompliziert auch ohne CAD-Erfahrung',
    steps: [
      { title: 'Bedarf beschreiben', tasks: ['Foto, Skizze oder CAD-Datei', 'Material- und Farbwunsch', 'Stückzahl und Einsatzzweck'], tip: 'Auch ohne CAD-Datei können wir starten.' },
      { title: 'Angebot in 6h', tasks: ['Preis inkl. Versand nach NÖ', 'Materialempfehlung', 'Konstruktion bei Bedarf angeboten'], tip: 'Konstruktion ab €30 für einfache Teile.' },
      { title: 'Fertigung in Gunskirchen', tasks: ['Sonderfarbe und Logo integriert', 'Qualitätskontrolle', 'Digital archiviert für Nachbestellungen'], tip: 'Standard 3-5 Tage, Express 24h.' },
      { title: 'A1-Express nach NÖ', tasks: ['Bruchsicher verpackt', 'Tracking-Nummer per E-Mail', 'Lieferung an jeden Ort in NÖ'], tip: 'Mehrere Lieferadressen in einer Bestellung möglich.' },
    ],
  },
  trustSignals: [
    { value: '70+', label: 'NÖ-Projekte', detail: 'Wachau, Waldviertel, Weinviertel, Mostviertel' },
    { value: 'A1', label: 'Expressroute', detail: 'Über Westautobahn in 1-2 Tagen' },
    { value: 'Logo', label: 'CI-Integration', detail: 'Firmenfarbe und Logo direkt im Druck' },
    { value: '3 Tage', label: 'Nachbestellungen', detail: 'Per E-Mail – identisch reproduziert' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen – zuverlässiger Service' },
  ],
  priceComparison: {
    headline: 'Preise für NÖ-Gewerbebetriebe',
    subheadline: 'Faire Konditionen für Weinbau, Gewerbe und Gemeinden – Rechnung auf Firma.',
    prices: [
      { label: 'Displayhalter (Weingut)', price: 'ab €25', note: 'In Markenfarbe mit Logo' },
      { label: 'Musterteil / Schablone', price: 'ab €15', note: 'Funktionale Werkstatt-Hilfe' },
      { label: 'Gemeindemodell', price: 'ab €80', note: 'Für Präsentationen und Bürgerbeteiligung' },
      { label: '20er-Serie Displays', price: 'ab €20/Stk.', note: 'Identisch für alle Standorte' },
    ],
    badges: ['Firmenrechnung', 'Auch ohne CAD-Datei', 'A1-Express'],
  },
  techSpecs: {
    headline: 'Technische Details für NÖ-Projekte',
    subheadline: 'Displayhalter, Musterteile und Modelle – robust und reproduzierbar',
    specs: [
      { label: 'Material', value: 'PETG empfohlen', detail: 'Robust für Dauereinsatz in Verkaufsräumen' },
      { label: 'Logo-Druck', value: 'Im Material integriert', detail: 'Kein Aufkleber – dauerhaft sichtbar' },
      { label: 'Farben', value: 'CI-Pantone umsetzbar', detail: 'Exakte Markenfarbe' },
      { label: 'Reproduzierbarkeit', value: '100% identisch', detail: 'Digitale Archivierung jedes Auftrags' },
      { label: 'Versand', value: 'NÖ-weit 1-2 Tage', detail: 'Über A1, bruchsicher verpackt' },
    ],
  },
  problemSolution: {
    problemTitle: 'Herausforderungen für NÖ-Betriebe',
    problems: [
      'Dezentrale Standorte in NÖ: kein 3D-Druck-Anbieter in der Nähe',
      'Standarddisplays passen nicht zum Weingut-Charakter',
      'Für 20 identische Halterungen eine Sonderanfertigung starten ist teuer',
      'Nachbestellungen identischer Teile sind bei Handarbeit nie gleich',
    ],
    solutionTitle: 'Digitale Fertigung löst das',
    solutions: [
      'A1-Express aus Gunskirchen: 1-2 Tage nach ganz Niederösterreich',
      'Maßgefertigte Displays in Ihrer Farbe mit Ihrem Logo – jedes Stück individuell',
      'Ab €20/Stück bei 20er-Serien: reproduzierbar und kalkulierbar',
      'Digital gespeichert: Nachbestellungen sind 100% identisch – auch nach Jahren',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Anfrage senden', description: 'Foto, Skizze oder CAD-Datei per E-Mail.', highlight: false },
    { time: '6h', title: 'Angebot inkl. Versand', description: 'Preis, Material, Liefertermin – alles klar.', highlight: false },
    { time: '24h', title: 'Fertigung startet', description: 'In Gunskirchen, Sonderfarbe und Logo integriert.', highlight: true },
    { time: '3-5 Tage', title: 'Lieferung nach NÖ', description: 'Über A1 Westautobahn, bruchsicher verpackt.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Service St. Pölten', href: '/3d-druck-st-poelten', context: 'Studierende und Forscher an der FH St. Pölten nutzen unseren Bildungs-Service.' },
    { anchor: 'Wiener Startup-Modelle', href: '/3d-druck-wien', context: 'Viele NÖ-Unternehmen bestellen gemeinsam mit Wiener Partnern.' },
    { anchor: 'Architekturmodelle für NÖ-Projekte', href: '/architekturmodelle/niederoesterreich', context: 'Kommunale Bauträger in NÖ setzen auf unsere Behördenmodelle.' },
  ],

};

const steiermark: DruckSectionDataSet = {
  valueProposition: {
    headline: 'UV-beständige Modelle für die steirische Innovationsszene',
    subheadline: 'ASA-Expertise für Outdoor-Schaumodelle, Green-Tech-Visualisierungen und wetterfeste Displays',
    advantages: [
      { icon: 'Sun', title: 'ASA UV-beständig', description: 'Modelle, die im Freien stehen: Sonnenbeständig, regenfest, farbstabil. Ideal für Outdoor-Ausstellungen.' },
      { icon: 'Leaf', title: 'Green-Tech Visualisierungen', description: 'Filteranlagen, Solarkonzepte, Energiemodelle – komplexe Technologie greifbar machen.' },
      { icon: 'Eye', title: 'Transparente PETG-Modelle', description: 'Innere Strukturen sichtbar: Filteraufbau, Schichtmodelle, Konzeptdarstellungen.' },
      { icon: 'TrendingUp', title: 'FFG-Projekte unterstützt', description: 'Physische Modelle überzeugten schon mehrfach FFG-Jurys bei Förderanträgen.' },
    ],
    stats: [
      { label: 'Steiermark-Projekte', value: '80+' },
      { label: 'ASA-Outdoor', value: 'Spezialität' },
      { label: 'Transparente Modelle', value: 'PETG klar' },
      { label: 'A9-Express', value: '1-2 Tage' },
    ],
  },
  checklist: {
    headline: 'Outdoor-Modelle bestellen',
    subheadline: 'Wetterfeste Schaumodelle für steirische Unternehmen und Forschungseinrichtungen',
    steps: [
      { title: 'Projekt beschreiben', tasks: ['Einsatzort: indoor oder outdoor?', 'Gewünschte Lebensdauer angeben', 'Größe und Detailgrad definieren'], tip: 'Für Outdoor empfehlen wir ASA statt PLA+.' },
      { title: 'Materialberatung', tasks: ['ASA für UV-Beständigkeit', 'PETG für Transparenz', 'Kombination beider Materialien möglich'], tip: 'Wir senden gerne ASA-Materialproben zu.' },
      { title: 'Wetterfeste Fertigung', tasks: ['Spezielle Druckparameter für ASA', 'Erhöhte Wandstärken für Outdoor', 'UV-Test vor Versand'], tip: 'ASA-Teile halten jahrelang im Freien.' },
      { title: 'A9-Express', tasks: ['Versand über Pyhrnautobahn', 'Verstärkte Verpackung für Transport', 'Tracking-Nummer per E-Mail'], tip: 'Express 24h bei dringenden Outdoor-Events.' },
    ],
  },
  trustSignals: [
    { value: '80+', label: 'Steiermark-Projekte', detail: 'Green Tech, TU Graz, Automotive' },
    { value: 'ASA', label: 'UV-Experten', detail: 'Jahrelange Erfahrung mit Outdoor-Modellen' },
    { value: 'FFG', label: 'Förderprojekte unterstützt', detail: 'Modelle überzeugten Förder-Jurys' },
    { value: 'PETG klar', label: 'Transparente Modelle', detail: 'Innere Strukturen sichtbar' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen' },
  ],
  priceComparison: {
    headline: 'Outdoor-Modell Preise für die Steiermark',
    subheadline: 'ASA für draußen, PETG für Transparenz, PLA+ für schnelle Checks.',
    prices: [
      { label: 'Indoor-Modell PLA+', price: 'ab €20', note: 'Für interne Präsentationen' },
      { label: 'Outdoor-Modell ASA', price: 'ab €45', note: 'UV-beständig, wetterfest' },
      { label: 'Transparentes Sichtmodell', price: 'ab €50', note: 'PETG klar, Innenleben sichtbar' },
      { label: 'Green-Tech Konzeptmodell', price: 'ab €80', note: 'Für Förderpräsentationen' },
    ],
    badges: ['ASA-Expertise', 'UV-Test inklusive', 'FFG-Projekt-Erfahrung'],
  },
  techSpecs: {
    headline: 'Spezifikationen für Outdoor-Modelle',
    subheadline: 'UV-beständig, witterungsfest, langlebig – für den steirischen Außeneinsatz',
    specs: [
      { label: 'UV-Beständigkeit', value: 'ASA zertifiziert', detail: 'Keine Vergilbung nach Jahren im Freien' },
      { label: 'Wandstärke Outdoor', value: 'Ab 2mm', detail: 'Erhöht für Wind- und Stoßbelastung' },
      { label: 'Temperaturfestigkeit', value: '-20°C bis +80°C', detail: 'Für alpines und urbanes Klima' },
      { label: 'Transparenz', value: 'PETG klar verfügbar', detail: 'Für Sichtmodelle und Schauobjekte' },
      { label: 'Farbstabilität', value: '5+ Jahre outdoor', detail: 'ASA bleibt farbstabil im Sonnenlicht' },
    ],
  },
  problemSolution: {
    problemTitle: 'Outdoor-Modelle mit Standard-Material?',
    problems: [
      'PLA-Modelle verformen sich in der Sonne und vergilben nach Wochen',
      'Holzmodelle für Outdoor sind schwer, teuer und pflegeintensiv',
      'Green-Tech-Konzepte sind am Bildschirm für Nicht-Techniker schwer verständlich',
      'FFG-Gutachter bewerten Projekte ohne physisches Modell kritischer',
    ],
    solutionTitle: 'ASA und PETG lösen Outdoor-Probleme',
    solutions: [
      'ASA ist UV-beständig, wetterfest und bleibt auch nach Jahren formstabil',
      '70% leichter als Holz, kein Pflegeaufwand, keine Nachbehandlung nötig',
      'Transparente PETG-Modelle machen Filtersysteme und Energieflüsse sichtbar',
      'Physische Modelle auf dem FFG-Gutachtertisch erhöhen nachweislich die Förderchance',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Projektdaten senden', description: 'CAD + Einsatzort (indoor/outdoor) angeben.', highlight: false },
    { time: '6h', title: 'Materialempfehlung', description: 'ASA, PETG oder Kombination – mit Preis.', highlight: false },
    { time: '24h', title: 'ASA-Druck startet', description: 'Spezialparameter für Outdoor-Festigkeit.', highlight: true },
    { time: '5-7 Tage', title: 'In der Steiermark', description: 'Über A9, verstärkt verpackt.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Graz Serienfertigung', href: '/3d-druck-graz', context: 'Für Grazer Industriebetriebe bieten wir Kleinserien ab 10 Stück.' },
    { anchor: 'Outdoor-Installationen Kärnten', href: '/3d-druck-kaernten', context: 'Wetterfeste ASA-Modelle für touristische Anwendungen auch in Kärnten.' },
    { anchor: 'Messemodelle Steiermark', href: '/messemodelle/steiermark', context: 'Großformat-Exponate für steirische Industriemessen und Fachmessen.' },
  ],

};

const kaernten: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Lehrmittel & Modelle für Kärntner Bildungseinrichtungen',
    subheadline: 'Anschauungsobjekte für Uni Klagenfurt, HTLs und Volksschulen – ab €15 pro Modell',
    advantages: [
      { icon: 'GraduationCap', title: 'Lehrmittel ab €15', description: 'Günstige Anschauungsobjekte für Schulen und Hochschulen. Auch bei kleinem Budget professionell.' },
      { icon: 'Layers', title: 'Farbcodiert verständlich', description: 'Strukturen, Schichten und Aufbauten in verschiedenen Farben – auf einen Blick klar.' },
      { icon: 'Package', title: 'Klassensätze möglich', description: '25 identische Modelle für den Physikunterricht? Kein Problem – Mengenrabatt inklusive.' },
      { icon: 'Shield', title: 'Robust für Kinderhände', description: 'PETG: schlagzäh, splitterfrei, waschbar. Hält dem Schulalltag stand.' },
    ],
    stats: [
      { label: 'Bildungsprojekte', value: '45+' },
      { label: 'Lehrmittel-Preis', value: 'ab €15' },
      { label: 'Klassensätze', value: '25+ Stück' },
      { label: 'A10-Lieferung', value: '1-2 Tage' },
    ],
  },
  checklist: {
    headline: 'Lehrmittel bestellen – einfach erklärt',
    subheadline: 'Für Lehrkräfte, die 3D-Druck zum ersten Mal nutzen',
    steps: [
      { title: 'Bedarf beschreiben', tasks: ['Welches Thema soll visualisiert werden?', 'Gewünschte Größe und Anzahl', 'Altersgruppe der Schüler angeben'], tip: 'Wir haben fertige Modelle für Physik und Biologie.' },
      { title: 'Pädagogische Beratung', tasks: ['Welches Modell passt zum Lehrplan?', 'Zerlegbar oder einteilig?', 'Farbcodierung planen'], tip: 'Wir beraten kostenlos zur didaktischen Umsetzung.' },
      { title: 'Seriendruck', tasks: ['25 identische Modelle für die Klasse', 'Splitterfreies PETG-Material', 'Qualitätsprüfung jedes Stücks'], tip: 'Klassensatz in 5-7 Werktagen.' },
      { title: 'Schullieferung', tasks: ['Versand an Schuladresse', 'Rechnung auf Schulkonto', 'Bruchsichere Verpackung'], tip: 'Rechnungsadresse der Gemeinde? Kein Problem.' },
    ],
  },
  trustSignals: [
    { value: '45+', label: 'Bildungsprojekte', detail: 'Volksschulen, HTLs, Universität Klagenfurt' },
    { value: 'ab €15', label: 'Pro Lehrmittel', detail: 'Auch für kleine Schulbudgets' },
    { value: '25+', label: 'Klassensätze', detail: 'Identische Modelle für jeden Schüler' },
    { value: 'PETG', label: 'Kindersicher', detail: 'Splitterfrei, waschbar, robust' },
    { value: 'Rechnung', label: 'Auf Schulkonto', detail: 'Gemeinderechnung möglich' },
  ],
  priceComparison: {
    headline: 'Lehrmittel-Preise für Kärnten',
    subheadline: 'Transparent kalkuliert – auch Schulen und Gemeinden können unkompliziert bestellen.',
    prices: [
      { label: 'Einfaches Lehrmittel', price: 'ab €15', note: 'Einheitlich, robust, waschbar' },
      { label: 'Zerlegbares Modell', price: 'ab €35', note: 'Schichten abnehmbar' },
      { label: 'Klassensatz (25 Stk.)', price: 'ab €12/Stk.', note: 'Identisch für alle Schüler' },
      { label: 'Geländemodell/Topografie', price: 'ab €60', note: 'Für Geografie und Naturkunde' },
    ],
    badges: ['Schulrechnung möglich', 'Didaktische Beratung gratis', 'Splitterfreies Material'],
  },
  techSpecs: {
    headline: 'Materialien für den Schulalltag',
    subheadline: 'Robust, sicher und pädagogisch sinnvoll',
    specs: [
      { label: 'Material', value: 'PETG empfohlen', detail: 'Splitterfrei, waschbar, lebensmittelsicher' },
      { label: 'Farbcodierung', value: 'Bis 6 Farben', detail: 'Strukturen farblich unterscheidbar' },
      { label: 'Zerlegbarkeit', value: 'Steckverbindungen', detail: 'Schichten für Demonstrations öffnen' },
      { label: 'Robustheit', value: 'Schüler-getestet', detail: 'Hält Fallen, Greifen, Waschen aus' },
      { label: 'Sicherheit', value: 'Keine scharfen Kanten', detail: 'Für alle Altersgruppen geeignet' },
    ],
  },
  problemSolution: {
    problemTitle: 'Lehrmittel im Schulalltag',
    problems: [
      'Standard-Lehrmittel sind teuer, unflexibel und oft veraltet',
      'Für 25 Schüler ein Modell: keiner kann es richtig sehen oder anfassen',
      'Physik- und Biologie-Modelle aus dem Katalog kosten schnell €200+ pro Stück',
      'Zerlegbare Modelle zum Verständnis gibt es kaum fertig zu kaufen',
    ],
    solutionTitle: '3D-gedruckte Lehrmittel für jede Klasse',
    solutions: [
      'Maßgefertigte Modelle passend zum aktuellen Lehrplan – nicht zum Katalog von 2005',
      'Klassensatz ab €12/Stück: jeder Schüler hat sein eigenes Modell in der Hand',
      'Farbcodierte Strukturen: Aufbau auf einen Blick verständlich, ohne lange Erklärung',
      'Zerlegbare 3D-Druckmodelle mit Steckverbindungen: öffnen, verstehen, zusammenbauen',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Lehrmittel-Anfrage', description: 'Thema, Altersgruppe, Stückzahl per E-Mail.', highlight: false },
    { time: '6h', title: 'Pädagogisches Angebot', description: 'Modellvorschlag, Farben, Preis für Klassensatz.', highlight: false },
    { time: '3 Tage', title: 'Seriendruck', description: '25 identische PETG-Modelle in Produktion.', highlight: true },
    { time: '5-7 Tage', title: 'An Ihrer Schule', description: 'Lieferung an Schuladresse über A10.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Bildung Klagenfurt', href: '/3d-druck-klagenfurt', context: 'Klagenfurter Schulen und die Uni Klagenfurt nutzen unsere Lehrmittel.' },
    { anchor: 'Technologie-Modelle Villach', href: '/3d-druck-villach', context: 'High-Tech Firmen in Villach schätzen unsere Präzisionsfertigung.' },
    { anchor: 'Outdoor-Modelle Steiermark', href: '/3d-druck-steiermark', context: 'Steirische Tourismusbetriebe setzen auf wetterfeste 3D-Modelle.' },
  ],

};

const tirol: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Express 3D-Druck für Tirol – über Nacht geliefert',
    subheadline: 'Sportartikel-Designs, Forschungsmodelle und Tourismusobjekte – Express über A10/A13',
    advantages: [
      { icon: 'Zap', title: 'Overnight-Express', description: 'Bestellung bis 10 Uhr = Versand am selben Tag. Morgen in Ihren Händen in Tirol.' },
      { icon: 'Mountain', title: 'Alpenrobuste Verpackung', description: 'Spezialverpackung für den Alpentransport. Kein Modell bisher beim Transport beschädigt.' },
      { icon: 'Ski', title: 'Outdoor-Sportdesign', description: 'Ergonomie-Studien, Helmkonzepte, Sportgeräte-Mockups – für Tirols Outdoor-Industrie.' },
      { icon: 'Shield', title: 'ASA für alpine Bedingungen', description: 'UV-beständig, frostfest, witterungsstabil: Modelle, die Tiroler Wetter aushalten.' },
    ],
    stats: [
      { label: 'Tirol-Express', value: '24h' },
      { label: 'Sportdesign-Projekte', value: '40+' },
      { label: 'Transportschäden', value: '0' },
      { label: 'ASA Outdoor', value: 'Standard' },
    ],
  },
  checklist: {
    headline: 'Express-Bestellung für Tirol',
    subheadline: 'Dringend? Bestellen Sie bis 10 Uhr – morgen ist Ihr Modell in Tirol',
    steps: [
      { title: 'Datei senden (bis 10 Uhr)', tasks: ['STL, OBJ oder STEP per E-Mail', 'Express-Wunsch angeben', 'Material und Farbe wählen'], tip: 'Express-Aufpreis: 50% auf den Standardpreis.' },
      { title: 'Sofort-Angebot', tasks: ['Express-Preis in 2 Stunden', 'Materialempfehlung für Tirol', 'Terminbestätigung'], tip: 'Wir rufen zurück, wenn Fragen offen sind.' },
      { title: 'Same-Day-Druck', tasks: ['Sofort nach Freigabe im Druck', 'Qualitätskontrolle vor Versand', 'Alpenrobuste Verpackung'], tip: 'Bestellung bis 10 Uhr = Versand bis 18 Uhr.' },
      { title: 'Morgen in Tirol', tasks: ['Express-Versand über Nacht', 'Tracking per SMS', 'Zustellung bis 12 Uhr'], tip: 'Auch an Hotels und Veranstaltungsorte lieferbar.' },
    ],
  },
  trustSignals: [
    { value: '24h', label: 'Express nach Tirol', detail: 'Bestellung bis 10h = morgen da' },
    { value: '40+', label: 'Tiroler Projekte', detail: 'Sport, Tourismus, Forschung' },
    { value: '0', label: 'Transportschäden', detail: 'Alpenrobuste Spezialverpackung' },
    { value: 'ASA', label: 'Alpentauglich', detail: 'UV-beständig, frostfest, robust' },
    { value: '5.0', label: 'Bewertung', detail: '31 Google-Bewertungen' },
  ],
  priceComparison: {
    headline: 'Express-Preise für Tirol',
    subheadline: 'Standard oder Express – Sie wählen die Geschwindigkeit.',
    prices: [
      { label: 'Standard-Modell (5-7 Tage)', price: 'ab €20', note: 'Normale Lieferzeit nach Tirol' },
      { label: 'Express-Modell (24h)', price: 'ab €30', note: '+50% Express-Aufpreis' },
      { label: 'Sportdesign-Mockup', price: 'ab €50', note: 'Ergonomie-Studie, ASA' },
      { label: 'Tourismusobjekt', price: 'ab €40', note: 'Für Hotels und Resorts' },
    ],
    badges: ['Express +50%', 'Alpentransport inklusive', 'Sportdesign-Expertise'],
  },
  techSpecs: {
    headline: 'Technik für Tiroler Bedingungen',
    subheadline: 'UV-beständig, frostfest, transportrobust – optimiert für alpinen Einsatz',
    specs: [
      { label: 'UV-Beständigkeit', value: 'ASA zertifiziert', detail: 'Für Sonnenterrassen und Outdoor-Displays' },
      { label: 'Temperaturfestigkeit', value: '-20°C bis +80°C', detail: 'Winter- und sommergeeignet' },
      { label: 'Verpackung', value: 'Alpenrobust', detail: 'Schaumstoff + Außenkarton verstärkt' },
      { label: 'Express', value: 'Same-Day-Versand', detail: 'Bestellung bis 10 Uhr = Versand heute' },
      { label: 'Ergonomie', value: 'TPU flexibel', detail: 'Für Griff- und Polster-Studien' },
    ],
  },
  problemSolution: {
    problemTitle: 'Express-Bedarf in den Alpen',
    problems: [
      'Sportmesse nächste Woche – aber kein physisches Konzeptmodell vorhanden',
      'Standard-Versand nach Tirol dauert 3-5 Tage – zu lang für dringende Projekte',
      'PLA-Modelle halten dem Tiroler UV und Frost nicht stand',
      'Fragile Modelle überstehen den Alpentransport über Pässe oft nicht',
    ],
    solutionTitle: 'Express & Alpine Qualität',
    solutions: [
      'Express-Fertigung und Overnight-Versand: morgen ist Ihr Modell in Tirol',
      'Same-Day-Versand bei Bestellung bis 10 Uhr – zuverlässig und pünktlich',
      'ASA hält UV, Frost und Hitze stand – jahrelang formstabil im Freien',
      'Alpenrobuste Verpackung: Schaumstoff-Einlage, verstärkter Außenkarton, 0 Schäden',
    ],
  },
  expressTimeline: [
    { time: 'Bis 10 Uhr', title: 'Express-Bestellung', description: 'Datei senden, Express-Wunsch angeben.', highlight: false },
    { time: '12 Uhr', title: 'Sofort-Angebot', description: 'Express-Preis bestätigt, Druck startet.', highlight: false },
    { time: '18 Uhr', title: 'Versand', description: 'Alpenrobust verpackt, Express-Carrier.', highlight: true },
    { time: 'Morgen 12 Uhr', title: 'In Tirol', description: 'An Ihre Adresse, Hotel oder Veranstaltungsort.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Lehrmittel Innsbruck', href: '/3d-druck-innsbruck', context: 'MCI und Uni Innsbruck sind unsere größten Tiroler Bildungskunden.' },
    { anchor: 'Express-Service Salzburg', href: '/3d-druck-salzburg', context: 'Über die Tauernautobahn in 1-2 Tagen auch nach Salzburg.' },
    { anchor: 'Wetterfeste Alpen-Modelle', href: '/3d-druck-dornbirn', context: 'ASA-Materialien für dauerhafte Außenanwendungen im Alpenraum.' },
  ],

};

const vorarlberg: DruckSectionDataSet = {
  valueProposition: {
    headline: 'Kleinserien für Vorarlberger Produktion',
    subheadline: 'Beschlag-Designstudien, Textil-Formteile und Möbelkonzepte – iterativ validiert',
    advantages: [
      { icon: 'Repeat', title: '8 Iterationen in 3 Wochen', description: 'Designrunde für Runde optimieren: PLA+ für Formcheck, PETG für Kundenpräsentation.' },
      { icon: 'Globe', title: 'CH + DE Lieferung', description: 'Grenznahe Lage: Vorarlberg, Bodenseeregion, Ostschweiz in 1-2 Tagen.' },
      { icon: 'Layers', title: 'Material-Stufenmodell', description: 'Iteration 1: günstig in PLA+. Iteration 2: robust in PETG. Finale: Premium in ASA.' },
      { icon: 'DollarSign', title: '8 Iterationen für €500', description: 'Kompletter Validierungszyklus günstiger als ein einziges CNC-Handmuster.' },
    ],
    stats: [
      { label: 'Designprojekte Vlbg.', value: '35+' },
      { label: 'Iterationen/Projekt', value: 'Ø 5' },
      { label: 'CH-Lieferung', value: '1-2 Tage' },
      { label: 'Materialien', value: 'PLA+ PETG ASA' },
    ],
  },
  checklist: {
    headline: 'Iteratives Design für Vorarlberg',
    subheadline: 'Vom Formcheck zur Kundenfreigabe – strukturiert in Runden',
    steps: [
      { title: 'Erstversion senden', tasks: ['STEP-Datei der ersten Designversion', 'Toleranzanforderungen angeben', 'Budget für Iterationszyklus nennen'], tip: 'Wir empfehlen ein 3er- oder 5er-Iterationspaket.' },
      { title: 'Formcheck (Runde 1)', tasks: ['PLA+-Druck in 24h', 'Proportionen und Maße prüfen', 'Feedback dokumentieren'], tip: 'PLA+ ist günstig und schnell – ideal für Runde 1.' },
      { title: 'Optimierung (Runde 2-4)', tasks: ['Maße anpassen', 'Detailgrad erhöhen', 'Material steigern: PLA+ → PETG → ASA'], tip: 'Jede Runde bringt das Design näher an die Perfektion.' },
      { title: 'Finale Version', tasks: ['Premium-Finish in ASA oder PETG', 'Kundenpräsentations-Qualität', 'Versand über A14 Rheintal'], tip: 'Auch Versand in die Schweiz in 1-2 Tagen.' },
    ],
  },
  trustSignals: [
    { value: '35+', label: 'Vlbg.-Projekte', detail: 'Möbel, Textil, Kunststoff, Beschläge' },
    { value: '€500', label: 'Für 8 Iterationen', detail: 'Günstiger als ein CNC-Handmuster' },
    { value: 'CH+DE', label: 'Grenznaher Versand', detail: 'Bodenseeregion in 1-2 Tagen' },
    { value: 'Ø 5', label: 'Iterationen/Projekt', detail: 'Optimierung in strukturierten Runden' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen' },
  ],
  priceComparison: {
    headline: 'Iterationspreise für Vorarlberg',
    subheadline: 'Pakete statt Einzelpreise – planbarer Designzyklus.',
    prices: [
      { label: 'Formcheck PLA+ (1 Runde)', price: 'ab €35', note: 'Schnelle Proportionsprüfung' },
      { label: '3er-Iterationspaket', price: 'ab €150', note: 'PLA+ → PETG → ASA' },
      { label: '5er-Iterationspaket', price: 'ab €350', note: 'Optimaler Validierungszyklus' },
      { label: 'Kundenpräsentation ASA', price: 'ab €80', note: 'Premium-Finish für Freigabe' },
    ],
    badges: ['Iterationspakete', 'Material-Stufenmodell', 'CH-Lieferung'],
  },
  techSpecs: {
    headline: 'Material-Stufenmodell für Design',
    subheadline: 'Jede Iteration im richtigen Material – kostenbewusst und zielgerichtet',
    specs: [
      { label: 'Runde 1', value: 'PLA+ Standard', detail: 'Günstig für Proportionsprüfung' },
      { label: 'Runde 2-3', value: 'PETG Robust', detail: 'Für Funktions- und Passungschecks' },
      { label: 'Finale', value: 'ASA Premium', detail: 'UV-beständig, Präsentationsqualität' },
      { label: 'Toleranz', value: '±0.2mm konstant', detail: 'Über alle Iterationen reproduzierbar' },
      { label: 'Versandgebiet', value: 'AT, CH, DE', detail: 'Dreiländereck-Lieferung' },
    ],
  },
  problemSolution: {
    problemTitle: 'Design-Validierung in Vorarlberg',
    problems: [
      'Ein CNC-Handmuster kostet €500-1000 – für eine einzige Version',
      'Ohne physisches Modell dauern Design-Entscheidungen in Meetings ewig',
      'Kunden im Dreiländereck brauchen schnelle Lieferungen über die Grenze',
      'Material-Steigerung von Formcheck zu Präsentation ist bei klassischen Verfahren teuer',
    ],
    solutionTitle: 'Iterative 3D-Druck-Validierung',
    solutions: [
      '8 Iterationen für €500: günstiger als ein einziges CNC-Muster',
      'Physische Modelle beschleunigen Meeting-Entscheidungen nachweislich um 80%',
      'Grenznaher Versand: Vorarlberg, Ostschweiz und Bodensee in 1-2 Tagen',
      'PLA+ → PETG → ASA: Materialkosten steigen nur, wenn die Qualität es erfordert',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'STEP senden', description: 'Erste Designversion per E-Mail.', highlight: false },
    { time: '24h', title: 'Runde 1: PLA+', description: 'Formcheck, Proportionen prüfen.', highlight: false },
    { time: '1 Woche', title: 'Runde 2-3: PETG', description: 'Optimierte Version, robust.', highlight: true },
    { time: '2-3 Wochen', title: 'Finale ASA-Version', description: 'Über A14 nach Vorarlberg oder CH.', highlight: true },
  ],
  inTextLinks: [
    { anchor: 'Designobjekte Dornbirn', href: '/3d-druck-dornbirn', context: 'Dornbirner Designer und Textilunternehmen als Stammkunden.' },
    { anchor: '3D-Druck Express Tirol', href: '/3d-druck-tirol', context: 'Tiroler Kunden profitieren vom selben Alpen-Expressservice.' },
    { anchor: 'Messemodelle Vorarlberg', href: '/messemodelle/vorarlberg', context: 'Branchenspezifische Exponate für Vorarlberger Fachmessen.' },
  ],

};

const burgenland: DruckSectionDataSet = {
  valueProposition: {
    headline: '3D-Druck für Burgenlands Kreativbranche',
    subheadline: 'Konzeptmodelle für Erneuerbare Energie, Weinbau-Displays und Tourismus-Objekte',
    advantages: [
      { icon: 'Sun', title: 'PV-Anlagen-Visualisierung', description: 'Konzeptmodelle zeigen Kunden, wie die Solaranlage auf ihrem Dach aussehen wird.' },
      { icon: 'Grape', title: 'Weinbau-Displays', description: 'Individuelle Flaschenhalter und Präsentationsobjekte für Weinverkostungen und Vinotheken.' },
      { icon: 'Palette', title: 'Kreative Objekte', description: 'Dekorationsstücke, Designobjekte und Kunstinstallationen für den pannonischen Raum.' },
      { icon: 'Truck', title: 'Über Wien/A4 geliefert', description: 'Schnelle Anbindung: 1-2 Werktage ins gesamte Burgenland.' },
    ],
    stats: [
      { label: 'Burgenland-Projekte', value: '25+' },
      { label: 'PV-Modelle', value: '10+' },
      { label: 'Weinbau-Displays', value: '15+' },
      { label: 'Lieferzeit', value: '1-2 Tage' },
    ],
  },
  checklist: {
    headline: 'So bestellen burgenländische Betriebe',
    subheadline: 'Von der PV-Visualisierung bis zum Weindisplay – in einer Woche geliefert',
    steps: [
      { title: 'Projekt beschreiben', tasks: ['Was soll visualisiert werden?', 'Foto vom Dach/Raum hilfreich', 'Stückzahl und Farbwunsch'], tip: 'Für PV-Modelle reicht ein Foto vom Dach.' },
      { title: 'Konstruktion & Angebot', tasks: ['Wir konstruieren das 3D-Modell', 'Preis inkl. Versand ins Burgenland', 'Render zur Freigabe'], tip: 'Konstruktion ab €30 für einfache Objekte.' },
      { title: 'Fertigung', tasks: ['Material passend zum Einsatzzweck', 'ASA für Outdoor-PV-Modelle', 'PETG für Weindisplays'], tip: 'Outdoor-Modelle in ASA halten 5+ Jahre.' },
      { title: 'Lieferung über A4', tasks: ['1-2 Werktage ins Burgenland', 'Bruchsichere Verpackung', 'Tracking-Nummer per E-Mail'], tip: 'Auch Lieferung an Veranstaltungsorte.' },
    ],
  },
  trustSignals: [
    { value: '25+', label: 'Bgld.-Projekte', detail: 'Erneuerbare Energie, Weinbau, Tourismus' },
    { value: '10+', label: 'PV-Konzeptmodelle', detail: 'Für Kundenpräsentationen und Verkaufsgespräche' },
    { value: 'ASA', label: 'Outdoor-fähig', detail: 'PV-Modelle halten jahrelang im Freien' },
    { value: '1-2 Tage', label: 'Über A4', detail: 'Schnelle Anbindung aus OÖ' },
    { value: '5.0', label: 'Google Bewertung', detail: '31 Bewertungen' },
  ],
  priceComparison: {
    headline: 'Preise für Burgenländer Projekte',
    subheadline: 'Konzeptmodelle, Displays und Dekorationsobjekte – transparent kalkuliert.',
    prices: [
      { label: 'PV-Dachmodell (30cm)', price: 'ab €70', note: 'Maßstab Kundendach, ASA' },
      { label: 'Weinflaschenhalter', price: 'ab €25', note: 'In Weingut-Farbe, PETG' },
      { label: 'Dekorationsobjekt', price: 'ab €30', note: 'Individuelles Design' },
      { label: 'Display-Set (10 Stk.)', price: 'ab €20/Stk.', note: 'Für Vinothek/Verkostungsraum' },
    ],
    badges: ['Outdoor ASA verfügbar', 'Logo-Integration', 'Konstruktion bei Bedarf'],
  },
  techSpecs: {
    headline: 'Materialwahl für Burgenländer Einsatz',
    subheadline: 'PV-Outdoor-Modelle, Weinpräsentationen und kreative Installationen',
    specs: [
      { label: 'PV-Modelle', value: 'ASA empfohlen', detail: 'UV-beständig für Kundentermine im Freien' },
      { label: 'Weinbau-Displays', value: 'PETG', detail: 'Farbecht, reinigungsbeständig' },
      { label: 'Dekor-Objekte', value: 'PLA+ oder PETG', detail: 'Je nach Einsatz indoor/outdoor' },
      { label: 'Maßstab PV', value: '1:50 bis 1:100', detail: 'Passend zum realen Dach' },
      { label: 'Logo', value: 'Im Druck integriert', detail: 'Für PV-Firmenpräsentationen' },
    ],
  },
  problemSolution: {
    problemTitle: 'Visualisierung im ländlichen Raum',
    problems: [
      'PV-Kunden können sich die Anlage auf ihrem Dach nicht vorstellen',
      'Standard-Weinflaschenhalter passen nicht zum individuellen Weingut-Charakter',
      'Kreative Objekte für Tourismus-Events gibt es nicht von der Stange',
      'Im Burgenland gibt es keinen lokalen 3D-Druck-Anbieter',
    ],
    solutionTitle: 'Maßgefertigte Modelle aus OÖ',
    solutions: [
      'PV-Dachmodell in 1:50: Kunden sehen sofort, wie die Anlage aussehen wird',
      'Halterungen in Weingut-Farbe mit Logo: jedes Stück ein Markenbotschafter',
      'Individuelle Dekor- und Eventobjekte in jeder Form und Farbe möglich',
      'A4-Express aus Gunskirchen: 1-2 Tage ins gesamte Burgenland',
    ],
  },
  expressTimeline: [
    { time: '0h', title: 'Anfrage senden', description: 'Foto vom Dach, Skizze oder CAD-Datei.', highlight: false },
    { time: '6h', title: 'Konstruktion & Angebot', description: 'Wir erstellen das 3D-Modell, Preis inklusive.', highlight: false },
    { time: '2-3 Tage', title: 'Fertigung in Gunskirchen', description: 'ASA für Outdoor, PETG für Displays.', highlight: true },
    { time: '4-5 Tage', title: 'Im Burgenland', description: 'Über A4, bruchsicher verpackt.', highlight: true },
  ],
  inTextLinks: [
    { anchor: '3D-Druck Wien Express', href: '/3d-druck-wien', context: 'Wiener Express-Versand erreicht das Burgenland in 1-2 Tagen.' },
    { anchor: 'Architekturmodelle für burgenländische Projekte', href: '/architekturmodelle/burgenland', context: 'Kommunale Bauvorhaben im Burgenland mit professionellen 3D-Modellen.' },
    { anchor: 'Outdoor-Modelle für Tourismus', href: '/3d-druck-steiermark', context: 'Auch steirische Tourismusbetriebe nutzen unsere wetterfesten Modelle.' },
  ],

};

// ═══════════════════════════════════════════
// EXPORT & LOOKUP
// ═══════════════════════════════════════════
export const druckSectionData: Record<string, DruckSectionDataSet> = {
  wien, linz, graz, salzburg, innsbruck, klagenfurt, villach, wels,
  'st-poelten': stpoelten, dornbirn, gunskirchen,
  oberoesterreich, niederoesterreich, steiermark, kaernten, tirol, vorarlberg, burgenland,
};

export function getDruckSectionData(regionSlug: string): DruckSectionDataSet {
  const data = druckSectionData[regionSlug];
  if (!data) {
    throw new Error(`[SEO-FEHLER] Keine Section-Daten für Region "${regionSlug}". Jede Region MUSS eigene Daten haben.`);
  }
  return data;
}
