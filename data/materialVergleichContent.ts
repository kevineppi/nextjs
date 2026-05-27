/**
 * FDM-Material-Vergleichsdaten — wissenschaftliche Grundlage
 * ──────────────────────────────────────────────────────────────────
 *
 * Quellen für Materialdaten (Werte als technische Richtwerte, jeweils
 * Bandbreiten aus mehreren Filament-Herstellern für ek-druck-Stack):
 *  - ISO 527-2 (Zugversuch Kunststoffe)
 *  - ISO 178 (Biegeversuch Kunststoffe)
 *  - ISO 75-2 (Wärmeformbeständigkeit / HDT)
 *  - ISO 11357-2 (DSC für Glasübergangstemperatur Tg)
 *  - ISO 180 (Charpy-Schlagzähigkeit)
 *  - ASTM D638 (US-Äquivalent zu ISO 527)
 *  - Datenblätter Polymaker, Prusament, Bambu Lab Generic, Fillamentum,
 *    Extrudr (österreichische Filament-Produktion)
 *
 * Daten sind herstellerübergreifende typische Werte. Bei spezifischen
 * Compounds variieren Werte; für konkretes Projekt → Herstellerdatenblatt.
 */

export interface MaterialSpec {
  // Identifikation
  slug: string                    // url-slug
  name: string                    // Anzeige-Name
  fullName: string                // chemische Vollbezeichnung
  shortDescription: string        // ~120 Zeichen für Tabellen-Zelle

  // Mechanische Eigenschaften (typische Bandbreiten)
  density: string                 // g/cm³
  tensileStrength: string         // MPa (ISO 527-2)
  flexuralModulus: string         // GPa (ISO 178)
  impactStrength: string          // kJ/m² (ISO 180 Charpy)
  elongation: string              // % (ISO 527-2)

  // Thermische Eigenschaften
  glassTransition: string         // °C (Tg, ISO 11357-2)
  heatDeflection: string          // °C (HDT, ISO 75-2 bei 0.45 MPa)
  printTemp: string               // °C (typisches Druckfenster)
  bedTemp: string                 // °C (Druckbett)

  // Druck-Praxis (ek-druck-Werkstatt-Erfahrung)
  printDifficulty: 1 | 2 | 3 | 4 | 5  // 1 = einfach, 5 = schwierig
  warpingRisk: 'gering' | 'mittel' | 'hoch'
  needsEnclosure: boolean
  needsHardenedNozzle: boolean
  hygroscopic: 'gering' | 'mittel' | 'hoch'   // Feuchtigkeitsaufnahme

  // Charakteristika & Eignung
  uvResistance: 'gering' | 'mittel' | 'hoch'
  postProcessing: string[]        // mögliche Nachbearbeitungen
  bestFor: string[]               // typische Anwendungen
  avoidFor: string[]              // wofür ungeeignet
  foodSafe: 'nein' | 'mit Filament-Zertifikat'

  // Wirtschaftlichkeit
  priceCategory: '€' | '€€' | '€€€' | '€€€€'   // relative Material-Preis-Stufe
  pricePerKg: string              // ungefährer Filament-Preis

  // Nachhaltigkeit
  biodegradable: boolean
  recyclable: 'gut' | 'mittel' | 'eingeschränkt'

  // ek-druck-Empfehlung
  ekdruckUsage: string            // wann nutzt ek-druck dieses Material
}

export const materials: MaterialSpec[] = [

  // ═══════════════════════════════════════════════════════════════
  //   PLA — Polylactid
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'pla',
    name: 'PLA',
    fullName: 'Polylactid (Polylactic Acid)',
    shortDescription:
      'Biopolymer aus Maisstärke oder Zuckerrohr. Druck-Einsteiger-Standard mit höchster Detailtreue und geringstem Warping-Risiko.',
    density: '1,24 g/cm³',
    tensileStrength: '50–65 MPa',
    flexuralModulus: '3,3–3,8 GPa',
    impactStrength: '3–7 kJ/m²',
    elongation: '3–6 %',
    glassTransition: '55–65 °C',
    heatDeflection: '55–60 °C',
    printTemp: '190–220 °C',
    bedTemp: '50–60 °C',
    printDifficulty: 1,
    warpingRisk: 'gering',
    needsEnclosure: false,
    needsHardenedNozzle: false,
    hygroscopic: 'gering',
    uvResistance: 'gering',
    postProcessing: ['Schleifen', 'Grundierung + Lackierung', 'Acryl-Klarlack'],
    bestFor: [
      'Architekturmodelle (höchste Detailtreue)',
      'Präsentations- und Showmodelle',
      'Einmalige Messemodelle',
      'Designstudien und Konzeptmodelle',
      'Indoor-Dekoration',
    ],
    avoidFor: [
      'Outdoor-Anwendungen (UV-Abbau)',
      'Temperaturen >50 °C (Verformung)',
      'Mechanisch belastete Bauteile',
      'Auto-Innenraum im Sommer',
    ],
    foodSafe: 'mit Filament-Zertifikat',
    priceCategory: '€',
    pricePerKg: '€18–€28 (Standard) bis €60+ (Spezial/Composite)',
    biodegradable: true,
    recyclable: 'gut',
    ekdruckUsage:
      'Erstes Material für Architekturmodelle 1:50 bis 1:500, Wettbewerbsabgaben, Indoor-Messemodelle. Auch für Sub-Komponenten in segmentierten Großmodellen, die durch andere Materialien geschützt sind.',
  },

  // ═══════════════════════════════════════════════════════════════
  //   PETG — Polyethylenterephthalat-Glykol
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'petg',
    name: 'PETG',
    fullName: 'Polyethylenterephthalat-Glykol-modifiziert',
    shortDescription:
      'Kunststoff der PET-Flaschen-Familie, glykol-modifiziert für besseres Druckverhalten. Robuster und temperaturbeständiger als PLA.',
    density: '1,27 g/cm³',
    tensileStrength: '45–55 MPa',
    flexuralModulus: '2,1–2,5 GPa',
    impactStrength: '7–11 kJ/m²',
    elongation: '6–13 %',
    glassTransition: '80–85 °C',
    heatDeflection: '70–75 °C',
    printTemp: '230–250 °C',
    bedTemp: '70–85 °C',
    printDifficulty: 2,
    warpingRisk: 'gering',
    needsEnclosure: false,
    needsHardenedNozzle: false,
    hygroscopic: 'mittel',
    uvResistance: 'mittel',
    postProcessing: ['Schleifen (schwerer als PLA)', 'Grundierung + Lackierung', 'Klarlack'],
    bestFor: [
      'Mehrfach-Messemodelle (5+ Messen)',
      'Outdoor-Demonstratoren (UV-stabilisiert)',
      'Mechanisch belastete Schaufläche',
      'Daueranfass-Modelle für Vertriebs-Touren',
      'Funktionsbauteile mit moderater Belastung',
    ],
    avoidFor: [
      'Höchste Detailtreue (PLA besser)',
      'Lebensmittelkontakt ohne Zertifikat',
      'Temperaturen >75 °C',
    ],
    foodSafe: 'mit Filament-Zertifikat',
    priceCategory: '€€',
    pricePerKg: '€25–€40 (Standard) bis €70+ (Spezial)',
    biodegradable: false,
    recyclable: 'gut',
    ekdruckUsage:
      'Standard für Messemodelle die mehrere Messen überstehen müssen. Auch für Pumpen- und Ventil-Schnittmodelle bei häufigem Anfassen. UV-stabilisierte PETG-Variante für Outdoor-Bürgerinfoveranstaltungen.',
  },

  // ═══════════════════════════════════════════════════════════════
  //   ASA — Acrylester-Styrol-Acrylnitril
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'asa',
    name: 'ASA',
    fullName: 'Acrylester-Styrol-Acrylnitril',
    shortDescription:
      'Strukturell ähnlich ABS, jedoch UV-stabil — der Outdoor-Spezialist unter den FDM-Materialien.',
    density: '1,07 g/cm³',
    tensileStrength: '38–45 MPa',
    flexuralModulus: '2,0–2,4 GPa',
    impactStrength: '12–25 kJ/m²',
    elongation: '15–25 %',
    glassTransition: '100–110 °C',
    heatDeflection: '90–100 °C',
    printTemp: '240–260 °C',
    bedTemp: '90–110 °C',
    printDifficulty: 4,
    warpingRisk: 'mittel',
    needsEnclosure: true,
    needsHardenedNozzle: false,
    hygroscopic: 'mittel',
    uvResistance: 'hoch',
    postProcessing: ['Schleifen', 'Aceton-Dampfglättung möglich', 'Grundierung + 2K-Lack'],
    bestFor: [
      'Outdoor-Modelle (jahrelange UV-Stabilität)',
      'Automotive-Exterieur-Demos',
      'Architekturmodelle für Sonnenstand-Tests',
      'Schaltschrank-Modelle für Außen-Demos',
    ],
    avoidFor: [
      'Ohne beheizte/geschlossene Druckbett-Kammer',
      'Hochsensible Geruchs-Umgebungen (Schul-Druck, Wohnraum)',
      'Detail-Modelle mit kleinster Schichthöhe',
    ],
    foodSafe: 'nein',
    priceCategory: '€€€',
    pricePerKg: '€35–€55',
    biodegradable: false,
    recyclable: 'mittel',
    ekdruckUsage:
      'Erste Wahl wenn das Modell länger als ein Jahr im Außenbereich steht. Beispiel: PV-Landschaftsmodelle für Bürger-Informationsveranstaltungen, die im Sommer in Freilicht-Stationen gezeigt werden.',
  },

  // ═══════════════════════════════════════════════════════════════
  //   ABS — Acrylnitril-Butadien-Styrol
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'abs',
    name: 'ABS',
    fullName: 'Acrylnitril-Butadien-Styrol',
    shortDescription:
      'Industrie-Klassiker für mechanische Robustheit. Aceton-glättbar zu spritzgussähnlicher Hochglanz-Oberfläche.',
    density: '1,04 g/cm³',
    tensileStrength: '35–45 MPa',
    flexuralModulus: '2,0–2,4 GPa',
    impactStrength: '15–35 kJ/m²',
    elongation: '15–30 %',
    glassTransition: '100–110 °C',
    heatDeflection: '95–105 °C',
    printTemp: '230–260 °C',
    bedTemp: '90–110 °C',
    printDifficulty: 4,
    warpingRisk: 'hoch',
    needsEnclosure: true,
    needsHardenedNozzle: false,
    hygroscopic: 'mittel',
    uvResistance: 'gering',
    postProcessing: [
      'Aceton-Dampfglättung (Spritzguss-Look)',
      'Schleifen, Grundieren, 2K-Lack',
      'Klebbar mit Aceton-Lösung',
    ],
    bestFor: [
      'Premium-Show-Quality Messemodelle',
      'Automotive-Bauteile mit Spritzguss-Optik',
      'Modelle mit Aceton-Glättung (Hochglanz)',
      'Schaltschrank-Modelle (lackierbar in RAL 7035)',
    ],
    avoidFor: [
      'Outdoor (UV-Abbau, Sprödebruch)',
      'Schul-/Privatdruck ohne Lüftung',
      'Höchste Detailtreue an scharfen Kanten',
    ],
    foodSafe: 'nein',
    priceCategory: '€€',
    pricePerKg: '€28–€45',
    biodegradable: false,
    recyclable: 'gut',
    ekdruckUsage:
      'Standard für Premium-Industriemodelle mit Spritzguss-Anmutung. Aceton-Dampfglättung als Wert-Steigerung — bei Automotive-Konzeptmodellen und High-End-Anlagenbau-Demos der "Go-To"-Stoff.',
  },

  // ═══════════════════════════════════════════════════════════════
  //   TPU — Thermoplastisches Polyurethan
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'tpu',
    name: 'TPU',
    fullName: 'Thermoplastisches Polyurethan',
    shortDescription:
      'Flexibles Elastomer für gummiartige Bauteile. Drei Härtegrade gängig (Shore 85A weich, 95A standard, 70D hart).',
    density: '1,20 g/cm³',
    tensileStrength: '25–50 MPa',
    flexuralModulus: '0,02–0,5 GPa (sehr niedrig — flexibel)',
    impactStrength: 'kein Bruch (elastisch)',
    elongation: '300–600 %',
    glassTransition: '-30 bis -50 °C',
    heatDeflection: '60–80 °C',
    printTemp: '210–240 °C',
    bedTemp: '40–60 °C',
    printDifficulty: 4,
    warpingRisk: 'gering',
    needsEnclosure: false,
    needsHardenedNozzle: false,
    hygroscopic: 'hoch',
    uvResistance: 'mittel',
    postProcessing: ['Begrenzt — flexibles Material'],
    bestFor: [
      'Dichtungen und Dämpfer',
      'Stoßdämpfende Elemente in Demo-Modellen',
      'Flexible Scharniere',
      'Reifen-Mockups für Konzeptfahrzeuge',
      'Kabel-Tüllen für Vertriebs-Demos',
    ],
    avoidFor: [
      'Drucker ohne Direct-Extruder (Bowden-Setup schwierig)',
      'Starre Strukturen',
      'Modelle die ihre Form präzise halten müssen',
    ],
    foodSafe: 'nein',
    priceCategory: '€€€',
    pricePerKg: '€35–€60',
    biodegradable: false,
    recyclable: 'eingeschränkt',
    ekdruckUsage:
      'Sub-Komponenten in größeren Modellen — z.B. Reifen-Schalen bei Konzeptfahrzeugen, flexible Schläuche bei Anlagenmodellen, weiche Dichtungen die Magnet-Verbindungen ergänzen.',
  },

  // ═══════════════════════════════════════════════════════════════
  //   PA-CF — Carbon-Faser-verstärktes Polyamid
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'pa-cf',
    name: 'PA-CF',
    fullName: 'Carbon-Faser-verstärktes Polyamid (PA6 + CF)',
    shortDescription:
      'Hochleistungs-Compound für funktionsfähige Bauteile. Carbon-Fasern erhöhen Steifigkeit und Festigkeit deutlich gegenüber reinem Polyamid.',
    density: '1,15 g/cm³',
    tensileStrength: '80–120 MPa',
    flexuralModulus: '7–12 GPa',
    impactStrength: '4–8 kJ/m²',
    elongation: '2–5 %',
    glassTransition: '70–80 °C (PA6-Anteil)',
    heatDeflection: '150–180 °C (durch CF-Verstärkung)',
    printTemp: '260–290 °C',
    bedTemp: '50–80 °C',
    printDifficulty: 5,
    warpingRisk: 'mittel',
    needsEnclosure: true,
    needsHardenedNozzle: true,
    hygroscopic: 'hoch',
    uvResistance: 'mittel',
    postProcessing: ['Schleifen schwierig', 'Lackierung möglich', 'Maßhaltig auch nach Wärme'],
    bestFor: [
      'Funktionsmuster mit mechanischer Belastung',
      'Vorserien-Bauteile für DV/PV-Tests',
      'Halterungen und Werkzeug-Aufnahmen',
      'E-Antriebs-Komponenten (Show + Test)',
      'Pre-Spritzguss-Validierung',
    ],
    avoidFor: [
      'Standard-FDM-Drucker (verschleißt Standard-Düsen rapide)',
      'Sichtflächen mit Hochglanz-Erwartung',
      'Anwendungen mit elektrischer Isolation (CF ist leitend)',
    ],
    foodSafe: 'nein',
    priceCategory: '€€€€',
    pricePerKg: '€80–€150+',
    biodegradable: false,
    recyclable: 'eingeschränkt',
    ekdruckUsage:
      'Funktionsmuster und Vorserien-Bauteile. Beispiel: Tier-1-Automotive-Zulieferer testet Konstruktions-Variante mit PA-CF-3D-Druck vor Spritzguss-Werkzeugbau — spart €10.000+ pro Iteration.',
  },
]

export const getMaterial = (slug: string): MaterialSpec | undefined =>
  materials.find((m) => m.slug === slug)

/**
 * Anwendungs-Entscheidungsmatrix — welches Material wofür?
 */
export interface DecisionScenario {
  scenario: string
  context: string
  recommendation: string
  recommendedSlug: string
  alternatives?: string[]
}

export const decisionMatrix: DecisionScenario[] = [
  {
    scenario: 'Architekturmodell für Wettbewerbsabgabe (Indoor)',
    context: 'Maßstab 1:200 bis 1:500, einmaliger Einsatz, höchste Detailtreue gefordert.',
    recommendation:
      'PLA — bietet beste Schichthöhe-Auflösung (0,1mm) und ist druckseitig konfliktarm. Lackierung optional.',
    recommendedSlug: 'pla',
  },
  {
    scenario: 'Messemodell für 5+ Messen Vertriebs-Tournee',
    context: 'Häufiges Anfassen, Versand-Transport, mehrfache Auf-/Abbau-Zyklen.',
    recommendation:
      'PETG — robust gegen Druck/Schlag bei häufigem Handling, kein Sprödebruch wie PLA bei Stoß.',
    recommendedSlug: 'petg',
    alternatives: ['abs (für Premium-Optik mit Aceton-Glättung)'],
  },
  {
    scenario: 'Outdoor-Demo (PV-Landschaftsmodell, Bürger-Info)',
    context: 'Modell steht 6+ Monate teils unter direkter Sonneneinstrahlung.',
    recommendation:
      'ASA — einziges FDM-Standardmaterial mit dauerhaft UV-stabiler Pigmentierung. PETG nur zweite Wahl wenn UV-stabilisiert.',
    recommendedSlug: 'asa',
    alternatives: ['petg (UV-stabilisierte Variante als günstigere Wahl)'],
  },
  {
    scenario: 'Premium-Show-Quality mit Spritzguss-Optik',
    context: 'Automotive-Konzept, High-End-Anlagenbau, Investor-Pitch.',
    recommendation:
      'ABS mit Aceton-Dampfglättung — chemische Oberflächenglättung erzeugt hochglänzende, nahezu schichtlose Anmutung.',
    recommendedSlug: 'abs',
  },
  {
    scenario: 'Funktionsmuster für mechanische Tests (DV/PV)',
    context: 'Belastungstests vor Werkzeugbau, Maßhaltigkeit unter Last gefordert.',
    recommendation:
      'PA-CF — Carbon-Faser-Verstärkung erreicht Aluminium-nahe Steifigkeit, Maßhaltigkeit auch nach Wärme-Zyklen.',
    recommendedSlug: 'pa-cf',
  },
  {
    scenario: 'Flexible Sub-Komponente (Dichtung, Tülle)',
    context: 'Elastisches Verhalten benötigt, kein steifes Bauteil.',
    recommendation:
      'TPU Shore 95A — Standard-Härtegrad für die meisten Industrie-Dichtungen und Stoßdämpfer.',
    recommendedSlug: 'tpu',
  },
]
