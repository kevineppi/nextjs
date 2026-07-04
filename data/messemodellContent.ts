/**
 * Messemodell-Guide Skyscraper · strukturierter Inhalt
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-31: Daten-Backbone für /ratgeber/messemodell-guide
 * Ersetzt den minimalen 28-Zeilen-Guide durch wissenschaftlich-fundierten,
 * brennstoffklassen-tabellierten, ROI-berechneten Industrie-Messemodelle-Hub.
 *
 * Zielgruppe: Marketing-/Messe-Manager in DACH-Industrie-Mittelstand,
 * Architekten von Messeauftritten, Brand-Manager bei Industriegüter-Herstellern.
 *
 * Quellen:
 * - DIN 4102-1 (Brandverhalten Baustoffe)
 * - DIN EN 13501-1 (europäische Brennstoffklassifikation)
 * - VDI 3404 (Additive Fertigungsverfahren)
 * - Erfahrungswerte aus ekdruck-Werkstatt (Aufträge 2024-2026)
 */

export interface MesseModelMaterial {
  name: string
  fullName: string
  brennstoffklasseDIN4102: 'B1' | 'B2' | 'B3' | 'B1-fähig*'
  brennstoffklasseEN13501: string // z.B. "E", "D-s2,d0", "C-s2,d0"
  brennstoffklasseNote: string
  standzeitIndex: number // 1-10 Skala (10 = höchste Standzeit)
  daueranfassResistenz: 'niedrig' | 'mittel' | 'hoch' | 'sehr hoch'
  uvStabilitaet: 'nicht UV-stabil' | 'mittel' | 'hoch (Outdoor)' | 'irrelevant Indoor'
  lackierbarkeit: 'schwierig' | 'mittel' | 'sehr gut' | 'exzellent'
  preisProKg: string // z.B. "€30-40"
  empfehlungMesseEinsatz: string
  primaryUseCase: string
}

export const messemodellMaterials: MesseModelMaterial[] = [
  {
    name: 'PLA',
    fullName: 'Polylactid (mit Flammschutz-Additiv)',
    brennstoffklasseDIN4102: 'B1-fähig*',
    brennstoffklasseEN13501: 'B-s2,d0 (mit Additiv)',
    brennstoffklasseNote: 'Standard-PLA ist B2. Flammschutz-additiviertes PLA (z.B. extrudr GreenTEC Pro) erreicht B1 nach Hersteller-Zertifikat. Zertifikat bei Bedarf vorlegbar.',
    standzeitIndex: 7,
    daueranfassResistenz: 'mittel',
    uvStabilitaet: 'irrelevant Indoor',
    lackierbarkeit: 'sehr gut',
    preisProKg: '€30-45',
    empfehlungMesseEinsatz: 'Erste Wahl für Indoor-Messemodelle mit höchster Detailtreue. Architektur, Stadtmodelle, hochauflösende Schnittmodelle.',
    primaryUseCase: 'Indoor-Detail-Showcases bis 5 Messeauftritte',
  },
  {
    name: 'PETG',
    fullName: 'Polyethylenterephthalat-Glykol',
    brennstoffklasseDIN4102: 'B2',
    brennstoffklasseEN13501: 'E',
    brennstoffklasseNote: 'Standard-PETG ist B2 (normal entflammbar) · für die meisten DACH-Messen ausreichend bei Stand-Setup unter 30m². Größere Stände (Hannover Messe, Bauma) verlangen oft B1.',
    standzeitIndex: 9,
    daueranfassResistenz: 'sehr hoch',
    uvStabilitaet: 'mittel',
    lackierbarkeit: 'mittel',
    preisProKg: '€35-50',
    empfehlungMesseEinsatz: 'Beste Allround-Wahl für Multi-Messen-Strategien (5+ Auftritte). Daueranfass-resistent, transportiert sich gut, Reparaturen einfach.',
    primaryUseCase: 'Mehrjähriger Messeeinsatz mit hoher Anfass-Frequenz',
  },
  {
    name: 'ASA',
    fullName: 'Acrylester-Styrol-Acrylnitril',
    brennstoffklasseDIN4102: 'B2',
    brennstoffklasseEN13501: 'E',
    brennstoffklasseNote: 'Standard-ASA ist B2. UV-Stabilität ist Hauptargument, weniger Brandschutz.',
    standzeitIndex: 8,
    daueranfassResistenz: 'hoch',
    uvStabilitaet: 'hoch (Outdoor)',
    lackierbarkeit: 'sehr gut',
    preisProKg: '€45-60',
    empfehlungMesseEinsatz: 'Outdoor-Messen, Sommer-Events mit direkter Sonneneinstrahlung, mehrjährige Vor-Ort-Demonstratoren bei Kunden.',
    primaryUseCase: 'Outdoor + Multi-Jahres-Einsatz',
  },
  {
    name: 'ABS',
    fullName: 'Acrylnitril-Butadien-Styrol',
    brennstoffklasseDIN4102: 'B2',
    brennstoffklasseEN13501: 'E',
    brennstoffklasseNote: 'Standard-ABS ist B2. ABS-FR (Flammschutz-Variante) kann B1 erreichen · Mehrpreis ~30%.',
    standzeitIndex: 8,
    daueranfassResistenz: 'hoch',
    uvStabilitaet: 'mittel',
    lackierbarkeit: 'exzellent',
    preisProKg: '€40-55',
    empfehlungMesseEinsatz: 'Premium-Lackierung mit Aceton-Glättung für Spritzguss-Look. Bevorzugt für Automotive- und Konsumgüter-Demonstratoren.',
    primaryUseCase: 'Premium-Optik mit Spritzguss-Look',
  },
  {
    name: 'PC',
    fullName: 'Polycarbonat (Flammschutz-Variante)',
    brennstoffklasseDIN4102: 'B1',
    brennstoffklasseEN13501: 'B-s1,d0',
    brennstoffklasseNote: 'Polycarbonat-FR-Varianten erreichen direkt B1 ohne Additive. Für Strenge-Anforderungen auf Großmessen Standard-Material.',
    standzeitIndex: 9,
    daueranfassResistenz: 'sehr hoch',
    uvStabilitaet: 'mittel',
    lackierbarkeit: 'mittel',
    preisProKg: '€60-90',
    empfehlungMesseEinsatz: 'Wenn Brennstoffklasse B1 vorgeschrieben ist (Großmessen >50m² Stand, internationale Messen, Sicherheits-Anforderungen).',
    primaryUseCase: 'B1-Pflicht-Messen ohne Compromise',
  },
  {
    name: 'PA-CF',
    fullName: 'Carbon-Faser-verstärktes Polyamid',
    brennstoffklasseDIN4102: 'B2',
    brennstoffklasseEN13501: 'E',
    brennstoffklasseNote: 'Standard PA-CF ist B2. Hauptargument ist mechanische Belastbarkeit, nicht Brandschutz.',
    standzeitIndex: 10,
    daueranfassResistenz: 'sehr hoch',
    uvStabilitaet: 'mittel',
    lackierbarkeit: 'schwierig',
    preisProKg: '€80-150',
    empfehlungMesseEinsatz: 'Bewegliche Komponenten in Schnittmodellen (Zahnräder, Spindeln, Klappgelenke) wo Plastik-Material reißen würde.',
    primaryUseCase: 'Belastbare bewegliche Mechanismen',
  },
]

// ─────────────────────────────────────────────────────────────────
//   Maßstab-Strategie · wann welcher Maßstab
// ─────────────────────────────────────────────────────────────────

export interface ScaleStrategy {
  scale: string
  modelSize: string
  originalSize: string
  useCases: string[]
  exampleProducts: string[]
  pricerange: string
  recommendation: string
}

export const scaleStrategies: ScaleStrategy[] = [
  {
    scale: '1:5',
    modelSize: '~30-50 cm',
    originalSize: '1.5-2.5 m Original',
    useCases: ['Detail-Schnittmodelle', 'Funktions-Demonstratoren', 'Tisch-Exponate'],
    exampleProducts: ['Pumpen', 'Ventile', 'Werkzeugmaschinen-Spindeln', 'kleine Antriebe'],
    pricerange: '€1.500-3.500',
    recommendation: 'Wenn die Original-Komponente bereits zu groß für Tisch-Demo ist, aber alle Funktionen sichtbar bleiben sollen.',
  },
  {
    scale: '1:10',
    modelSize: '~50-80 cm',
    originalSize: '5-8 m Original',
    useCases: ['Werkzeugmaschinen-Showcases', 'Antriebs-Modelle', 'Kompressoren', 'mittlere Anlagen'],
    exampleProducts: ['CNC-Fräsen', 'Industrie-Kompressoren', 'Wickelmaschinen', 'mittlere Pumpenmodule'],
    pricerange: '€2.500-6.000',
    recommendation: 'Sweet-Spot für Industrie-Mittelstand. Größe = noch tisch-tauglich, Detail = noch erkennbar.',
  },
  {
    scale: '1:25',
    modelSize: '~50-120 cm',
    originalSize: '12-30 m Original',
    useCases: ['Vollanlagen', 'Mittelspannungs-Schaltanlagen', 'Mehrstöckige Industrieanlagen'],
    exampleProducts: ['MV-Schaltanlagen', 'Trafostationen', 'Verpackungsanlagen', 'Förderbänder'],
    pricerange: '€3.500-8.000',
    recommendation: 'Wenn die Anlage mehrere Stockwerke hat oder >15 m breit ist.',
  },
  {
    scale: '1:50',
    modelSize: '~80-150 cm',
    originalSize: '40-75 m Original',
    useCases: ['Vollschiff-Modelle', 'Komplette Kraftwerke', 'PV-Landschaftsmodelle'],
    exampleProducts: ['Schlepper, Yachten', 'Trafohäuser mit Umgebung', 'Wind-Park-Layouts'],
    pricerange: '€4.500-12.000',
    recommendation: 'Wenn das Originalsystem nicht mehr in einem Container transportierbar wäre.',
  },
  {
    scale: '1:100',
    modelSize: '~100-200 cm',
    originalSize: '100-200 m Original',
    useCases: ['Stadtmodelle', 'Hafenanlagen', 'Wind-Parks'],
    exampleProducts: ['Hafenmodelle', 'Industrieparks', 'große Windturbinen-Felder'],
    pricerange: '€6.000-15.000',
    recommendation: 'Wenn nicht ein einzelnes Produkt, sondern ein System-Layout präsentiert werden soll.',
  },
]

// ─────────────────────────────────────────────────────────────────
//   ROI-Berechnungs-Beispiele · konkret und nachvollziehbar
// ─────────────────────────────────────────────────────────────────

export interface ROIExample {
  branche: string
  produkt: string
  modellInvestition: number // €
  messenProJahr: number
  jahreEinsatz: number
  // Vorher (ohne Modell)
  vorherAnfragenProMesse: number
  vorherKonversionsrate: number // 0-1
  vorherAvgAuftragswert: number
  // Nachher (mit Modell)
  nachherAnfragenProMesse: number
  nachherKonversionsrate: number
  nachherAvgAuftragswert: number
  hinweis: string
}

export const roiExamples: ROIExample[] = [
  {
    branche: 'Anlagenbau',
    produkt: 'Förderanlage 8m Original → 1:10-Schnittmodell',
    modellInvestition: 4200,
    messenProJahr: 3,
    jahreEinsatz: 3,
    vorherAnfragenProMesse: 8,
    vorherKonversionsrate: 0.15,
    vorherAvgAuftragswert: 85000,
    nachherAnfragenProMesse: 18,
    nachherKonversionsrate: 0.22,
    nachherAvgAuftragswert: 105000,
    hinweis: 'Schnittmodell mit beweglichen Komponenten und farblicher Materialfluss-Markierung. Standzeit-Anfragen ~120% gesteigert, Konversion durch Fachgespräch am Modell-Detail.',
  },
  {
    branche: 'Energietechnik',
    produkt: 'Mittelspannungs-Schaltanlage 1:25',
    modellInvestition: 6800,
    messenProJahr: 2,
    jahreEinsatz: 4,
    vorherAnfragenProMesse: 12,
    vorherKonversionsrate: 0.10,
    vorherAvgAuftragswert: 180000,
    nachherAnfragenProMesse: 28,
    nachherKonversionsrate: 0.18,
    nachherAvgAuftragswert: 195000,
    hinweis: 'MV-Schaltanlage mit klappbarem Frontteil → Innenbild sichtbar. Internationale Energie-Fachmessen, Premium-Buyer.',
  },
  {
    branche: 'Maschinenbau',
    produkt: 'CNC-Fräse 1:8 mit beweglicher Spindel',
    modellInvestition: 3800,
    messenProJahr: 4,
    jahreEinsatz: 2,
    vorherAnfragenProMesse: 6,
    vorherKonversionsrate: 0.20,
    vorherAvgAuftragswert: 55000,
    nachherAnfragenProMesse: 14,
    nachherKonversionsrate: 0.28,
    nachherAvgAuftragswert: 62000,
    hinweis: 'Spindel-Bewegung als Eye-Catcher, lockt Maschinenbau-Ingenieure aktiv zum Stand. Anfragen-Steigerung über Folge-Termine messbar.',
  },
]

// ─────────────────────────────────────────────────────────────────
//   ROI-Berechnung (Helper)
// ─────────────────────────────────────────────────────────────────

export function calculateROI(example: ROIExample) {
  const vorherTotalAuftraege =
    example.vorherAnfragenProMesse *
    example.vorherKonversionsrate *
    example.vorherAvgAuftragswert *
    example.messenProJahr *
    example.jahreEinsatz

  const nachherTotalAuftraege =
    example.nachherAnfragenProMesse *
    example.nachherKonversionsrate *
    example.nachherAvgAuftragswert *
    example.messenProJahr *
    example.jahreEinsatz

  const mehrumsatz = nachherTotalAuftraege - vorherTotalAuftraege
  const roiPercent = (mehrumsatz / example.modellInvestition) * 100

  return {
    vorherTotalAuftraege: Math.round(vorherTotalAuftraege),
    nachherTotalAuftraege: Math.round(nachherTotalAuftraege),
    mehrumsatz: Math.round(mehrumsatz),
    roiPercent: Math.round(roiPercent),
    paybackMessen: Math.ceil(
      example.modellInvestition /
        ((example.nachherAnfragenProMesse * example.nachherKonversionsrate * example.nachherAvgAuftragswert) -
          (example.vorherAnfragenProMesse * example.vorherKonversionsrate * example.vorherAvgAuftragswert))
    ),
  }
}

// ─────────────────────────────────────────────────────────────────
//   Branchen-Strategien · Cluster pro Industrie
// ─────────────────────────────────────────────────────────────────

export interface BrancheStrategy {
  branche: string
  slug: string // für /branchen/{slug} und /ratgeber/messemodell-{slug}
  hauptmessen: string[]
  typischeProdukte: string[]
  empfohlenerMassstab: string
  empfohlenesMaterial: string
  brennstoffklasseAnforderung: string
  besonderheit: string
  spokeUrl: string | null // null wenn Spoke-Page noch nicht existiert
}

export const brancheStrategies: BrancheStrategy[] = [
  {
    branche: 'Maschinenbau',
    slug: 'maschinenbau',
    hauptmessen: ['EMO Hannover', 'AMB Stuttgart', 'IMTEX', 'Intec Leipzig'],
    typischeProdukte: ['CNC-Fräsen', 'Drehmaschinen', 'Schleifmaschinen', 'Werkzeugmaschinen-Spindeln'],
    empfohlenerMassstab: '1:8 bis 1:10',
    empfohlenesMaterial: 'PETG für Standzeit, PA-CF für bewegliche Spindeln',
    brennstoffklasseAnforderung: 'B2 reicht bei den meisten Fachmessen',
    besonderheit: 'Bewegliche Spindel als Hauptattraktor · zieht Engineers aktiv zum Stand.',
    spokeUrl: null, // Wave B
  },
  {
    branche: 'Anlagenbau',
    slug: 'anlagenbau',
    hauptmessen: ['Achema Frankfurt', 'POWTECH Nürnberg', 'IFAT München'],
    typischeProdukte: ['Verpackungsanlagen', 'Förderbänder', 'Reaktoren', 'Pumpen-Module'],
    empfohlenerMassstab: '1:10 bis 1:25',
    empfohlenesMaterial: 'PETG für Schnittmodelle, ABS für Premium-Lackierung',
    brennstoffklasseAnforderung: 'B1 oft erforderlich bei großen Achema-Ständen',
    besonderheit: 'Segmentierbare Module → Multi-Stand-Strategie (Hauptmesse + Kunden-Tour).',
    spokeUrl: null,
  },
  {
    branche: 'Schiffbau',
    slug: 'schiffbau',
    hauptmessen: ['SMM Hamburg', 'Europort Rotterdam', 'Posidonia Athen'],
    typischeProdukte: ['Antriebe', 'Propeller', 'Vollschiffmodelle', 'Schiffsdiesel'],
    empfohlenerMassstab: '1:50 bis 1:100',
    empfohlenesMaterial: 'PLA für Detail, PETG für robuste Vollschiffmodelle',
    brennstoffklasseAnforderung: 'B1 international Standard auf maritimen Messen',
    besonderheit: 'Vollschiffmodelle bis 2 m Länge · segmentiert mit Magnetverbindungen.',
    spokeUrl: null,
  },
  {
    branche: 'Energietechnik',
    slug: 'energietechnik',
    hauptmessen: ['E-world Essen', 'Hannover Messe', 'WindEnergy Hamburg'],
    typischeProdukte: ['Windturbinen', 'Trafostationen', 'PV-Anlagen', 'Mittelspannungs-Schaltanlagen'],
    empfohlenerMassstab: '1:25 bis 1:50',
    empfohlenesMaterial: 'PETG mit ABS-Detail-Akzent',
    brennstoffklasseAnforderung: 'B1 für internationale Energie-Messen',
    besonderheit: 'Klapptüren mit Innenbild-Sicht (Schaltanlagen) als Hauptattraktor.',
    spokeUrl: null,
  },
  {
    branche: 'Automotive',
    slug: 'automotive',
    hauptmessen: ['IAA Mobility', 'Vienna Autoshow', 'Auto Zürich'],
    typischeProdukte: ['Karosseriebauteile', 'E-Antriebe', 'Konzeptfahrzeuge', 'Innenraum-Module'],
    empfohlenerMassstab: '1:5 bis 1:10',
    empfohlenesMaterial: 'ABS für Premium-Spritzguss-Look mit Aceton-Glättung',
    brennstoffklasseAnforderung: 'B1 bei IAA, B2 bei kleineren Showrooms',
    besonderheit: 'Aceton-Glättung für Spritzguss-Optik = Premium-Look ohne Spritzguss-Tooling.',
    spokeUrl: null,
  },
  {
    branche: 'Elektrotechnik',
    slug: 'elektrotechnik',
    hauptmessen: ['Hannover Messe Industrial', 'electronica München', 'embedded world Nürnberg'],
    typischeProdukte: ['Schaltschränke', 'Trafos', 'Messwandler', 'Mittelspannungs-Komponenten'],
    empfohlenerMassstab: '1:10 bis 1:25',
    empfohlenesMaterial: 'PETG mit ABS-Lackier-Details',
    brennstoffklasseAnforderung: 'B1 verbreitet, besonders auf MV-Fachmessen',
    besonderheit: 'Branchen-Farbcodierung nach DIN 2403 / IEC 60446 macht Modelle technisch glaubwürdig.',
    spokeUrl: null,
  },
]

// ─────────────────────────────────────────────────────────────────
//   FAQ-Datenbank · strukturiert für FAQPage-Schema
// ─────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string
  answer: string
}

export const messeFAQs: FAQItem[] = [
  {
    question: 'Welche Brennstoffklasse muss mein Messemodell erreichen?',
    answer:
      'Hängt von der Messe und Stand-Größe ab. Für DACH-Standardmessen (Stand <30 m², Indoor) reicht meistens B2 (normal entflammbar) nach DIN 4102. Für Großmessen (Hannover Messe Industrial >50 m², Bauma, IAA, internationale Messen) und bei behördlichen Sicherheitsanforderungen ist B1 (schwer entflammbar) verbreitet. Wir prüfen vor Auftragsstart die spezifische Messe-Verordnung und empfehlen das passende Material. PETG ist Standard-B2, Polycarbonat-FR und additiviertes PLA erreichen B1.',
  },
  {
    question: 'Wie lange überlebt ein 3D-Druck-Messemodell typische 4-7 Messetage?',
    answer:
      'Bei richtiger Materialwahl (PETG, ASA, PC, PA-CF) und sachgemäßer Handhabung: 5-15 Messen ohne Reparatur. PETG ist der Standzeit-Sieger für Multi-Messen-Einsätze · wir haben Modelle die nach 12 Messen noch demonstrationsfähig sind. PLA ist für mehrjährige Messeeinsätze nicht erste Wahl (Detail-Verlust durch Anfassen, Spröde bei Stoßbelastung). Bei beweglichen Komponenten empfehlen wir PA-CF · Carbon-Faser-verstärktes Polyamid hält mechanische Belastung 2-3x länger durch als reine Thermoplaste.',
  },
  {
    question: 'Was kostet ein typisches Industrie-Messemodell?',
    answer:
      'Preisbereich je nach Komplexität: kleinere Schnittmodelle (1:5, ~30 cm) ab €1.500. Mittlere Industrieanlagen-Modelle (1:10, 60-80 cm) typisch €2.500-6.000. Großmodelle (1:25, 80-120 cm, mit beweglichen Komponenten und Lackierung) €4.500-9.000. Vollschiffmodelle oder Komplettanlagen (1:50, 1-2 m, segmentiert) €6.000-15.000. Festpreis-Angebot binnen 6 Stunden nach CAD-Eingang.',
  },
  {
    question: 'Wie lange dauert die Herstellung von der Bestellung zur Lieferung?',
    answer:
      'Standard-Lieferzeit: 3-5 Wochen ab CAD-Eingang für die meisten Industrie-Messemodelle. Bei eigener Konstruktion (Sie liefern Skizze, wir konstruieren CAD) verlängert sich auf 4-7 Wochen. Express-Lieferung 2-3 Wochen ist möglich bei verfügbarer Druckerkapazität (Aufpreis 30-50%). Für Folge-Modelle aus bestehender CAD-Datei: 10-15 Werktage. Empfehlung: 8 Wochen vor Messestart starten, sonst wird der Spielraum für Iterations-Reviews knapp.',
  },
  {
    question: 'Können bewegliche Komponenten in ein Messemodell integriert werden?',
    answer:
      'Ja · bewegliche Mechanismen sind einer der häufigsten Aufträge für Industrie-Messemodelle. Typische Beispiele: rotierende Spindeln in CNC-Fräsen, klappbare Türen an Schaltanlagen, drehende Wellen in Antrieben, segmentierbare Anlagenmodule. Für mechanisch belastete Komponenten verwenden wir PA-CF (Carbon-Faser-verstärktes Polyamid), Lager aus POM oder Messing-Inserts. Toleranzen ±0,1 mm sind im FDM-Druck mit unseren Premium-FDM-Anlagen erreichbar.',
  },
  {
    question: 'Brauchen Industrie-Messemodelle Zertifikate für DIN 4102 oder DIN EN 13501?',
    answer:
      'Für die meisten Messen: kein expliziter Nachweis, aber Anforderung steht in der Messe-Verordnung. Bei Großmessen mit strenger Standabnahme (Bauma München, Hannover Messe) verlangt der TÜV oder die Messe-Gesellschaft auf Anfrage einen Brennstoffklassen-Nachweis. Wir liefern auf Anfrage das Hersteller-Zertifikat des Materials (für B1-Materialien wie additiviertes PLA, Polycarbonat-FR, ABS-FR). Eigene Material-Brand-Tests sind nicht erforderlich, der Hersteller-Nachweis genügt.',
  },
  {
    question: 'Können die Modelle nach der Messe noch verändert werden (Folge-Messen, Updates)?',
    answer:
      'Ja, das ist sogar eine bewusste Auslegungs-Entscheidung. Wir konstruieren bei Multi-Messen-Strategien modular: einzelne Komponenten austauschbar (z.B. neues Produkt-Modul für nächste Messe), Sockel separat von Hauptmodell, segmentierbare Strukturen. Update-Modelle für Folge-Messen ab €300-800 je nach Modifikations-Umfang. CAD-Daten bleiben gespeichert (DSGVO-konform unter Geschäftsbesorgungsvertrag), Neudruck einzelner Teile ist innerhalb 5-10 Werktagen möglich.',
  },
  {
    question: 'Was passiert wenn das Modell auf der Messe beschädigt wird?',
    answer:
      'Realistische Erwartung: bei sachgemäßer Handhabung sind Standard-Messetage ohne Beschädigung. Stoß-Schäden (Modell fällt vom Stand, Transport-Crash) sind durch unsere Materialwahl (PETG, PA-CF) minimiert. Falls doch: Notfall-Reparatur am Messestand möglich mit unserem Reparaturset (Kleber, Ersatz-Komponenten falls vorbereitet). Bei größeren Schäden Neudruck einzelner Komponenten in 3-5 Werktagen. Versicherung deines Modells über deine Messe-Haftpflicht ist üblich, wir liefern Wertangabe auf Anfrage.',
  },
  {
    question: 'Wie sicher sind meine CAD-Daten? Wir haben Patente und NDA-Pflicht.',
    answer:
      'NDA-Standard-Verfahren ist Teil unseres Bestellprozesses. Vor CAD-Eingang unterzeichnen wir Ihr NDA (oder unser Standard-NDA), CAD-Daten landen in separatem verschlüsseltem Werkstattbereich. Lieferung kompletter Datenlöschung nach Auftragsabschluss + Lieferung (Standard 90 Tage Sicherheits-Backup, dann vollständige Löschung). Auf Wunsch frühere Datenlöschung mit schriftlicher Bestätigung. Auch für laufende NDA-Aufträge: separates Filament-Spulen-Setup verhindert Material-Kontamination zwischen sensiblen Projekten.',
  },
  {
    question: 'Lohnen sich Multi-Messen-Strategien · ein Modell für mehrere Messen?',
    answer:
      'Das ist die wirtschaftlich beste Auslegung. Beispielrechnung: Ein €4.500-Modell für eine einzelne Messe = €4.500/Messe. Das gleiche Modell auf 4 Messen pro Jahr × 3 Jahre = 12 Messeeinsätze = €375/Messe. Bei realistischer Anfrage-Steigerung von +50% durch das Modell und durchschnittlichem Auftragswert von €60k macht das einen ROI über 3 Jahre von 800-1500%. Wir konstruieren Modelle bewusst transport-robust und mit modularen Update-Komponenten für Multi-Messen-Tauglichkeit.',
  },
  {
    question: 'Können Sie eigene Konstruktionsdaten erstellen wenn wir nur Skizzen haben?',
    answer:
      'Ja · Konstruktion ist Teil unseres Service. Sie liefern Skizze, Foto, Maßangaben des Originalprodukts. Wir erstellen die CAD-Konstruktion (Fusion 360, FreeCAD). Aufpreis je nach Komplexität €600-2.500. Bei Skizze-zu-CAD-Aufträgen typische Iteration: 1. Skizze + Reference-Foto, 2. CAD-V1-Vorschlag binnen 5 Werktagen, 3. Feedback-Iteration, 4. Druck-Freigabe. Gesamtdauer 5-7 Wochen. Bei vorhandenen STEP-Dateien aus Ihrer Konstruktion: direkt 3-5 Wochen Produktion.',
  },
  {
    question: 'Welche CAD-Formate akzeptieren Sie?',
    answer:
      'Native STEP, IGES, STL · die Standards für Industrie-CAD-Austausch. Aus konkreten Konstruktions-Tools: SolidWorks (.sldprt, .sldasm), Fusion 360 (.f3d), Inventor (.ipt, .iam), Catia (.CATPart). Aus Architektur-Software: ArchiCAD (.pln/.gsm), Revit (.rvt) · bei diesen muss die Detailebene oft auf modellbau-tauglich reduziert werden. Bei Software-Spezifika fragen Sie uns vor Export · wir geben Tipps welcher Export-Modus für 3D-Druck optimal ist.',
  },
  {
    question: 'Was unterscheidet ekdruck von klassischen Modellbauern?',
    answer:
      'Klassische Modellbauer arbeiten mit Vakuumformen, Tiefziehen, Handarbeit aus Plastik-Platten oder Metall · Lieferzeit 8-16 Wochen, Preise oft €15.000-50.000 für Industriemodelle. Wir kombinieren FDM-3D-Druck mit Handarbeit (Lackierung, Magnet-Verbindungen, Detail-Finish). Vorteile: 3-5 Wochen statt 8-16, €3.000-12.000 statt €15.000-50.000, CAD-Direkt-Verarbeitung ohne Umweg. Trade-off: keine Hochglanz-Acryl-Klarsicht-Komponenten möglich (machen Klassische Modellbauer besser). Für Standard-Industrie-Showcase-Modelle: 3D-Druck deutlich überlegen in Cost-Speed-Detail-Balance.',
  },
  {
    question: 'Wie funktioniert die Zusammenarbeit mit unserem Messebauer?',
    answer:
      'Drei Modelle: 1. Direkt-Bestellung durch Sie als Kunde, der Messebauer integriert das Modell als zugeliefertes Exponat (oft günstigste Lösung). 2. Bestellung durch den Messebauer als White-Label-Partner, wir liefern an die Messebauer-Werkstatt (üblich bei Vollservice-Messeauftritten). 3. Drei-Wege-Abstimmung wo wir gemeinsam Konstruktion und Logistik planen (komplexe Großstände). Für die Modell-Qualität und Lieferzeit-Sicherheit empfehlen wir Modell 1 oder 3. Modell 2 reduziert Koordinations-Aufwand für Sie, kostet aber typisch 15-25% Aufschlag durch Marge des Messebauers.',
  },
  {
    question: 'Können Sie auch Sonderwünsche wie LED-Beleuchtung oder Animation umsetzen?',
    answer:
      'LED-Beleuchtung: ja, bei Aufpreis ab €200-800 je nach Komplexität. Wir integrieren LED-Strips intern, USB-Powered, mit kleinem Schalter am Sockel. Animation (Motorantriebe für drehende Komponenten): ja, Standard-Servomotoren mit Mikro-Controller (Arduino-basiert) ab €400-1.500 je nach Komplexität. Sound-Elemente: nur in Ausnahmefällen, weil Messehallen-Lärm Sound-Effekte fast immer unterläuft. Für Premium-Showcase-Modelle Bewegung + LED ist die Kombination die maximale Stand-Anfrage-Steigerung produziert (laut Practitioner-Daten +200% vs statisches Modell).',
  },
]

// ─────────────────────────────────────────────────────────────────
//   Standzeit-Komponenten · was die Standzeit reduziert
// ─────────────────────────────────────────────────────────────────

export const standzeitFaktoren = [
  {
    faktor: 'Materialwahl',
    impact: 'Höchster Hebel',
    details: 'PETG schlägt PLA um Faktor 2-3 in Standzeit bei Multi-Messen.',
  },
  {
    faktor: 'Lackierung',
    impact: 'Hoch',
    details: '2K-Lack mit Klarlack-Versiegelung verlängert Anfass-Lebensdauer um 50-100%.',
  },
  {
    faktor: 'Detail-Toleranzen',
    impact: 'Hoch',
    details: 'Filigrane Details (<0,8mm Wandstärke) sind Bruch-Punkte. Schnittmodelle bewusst robust konstruieren.',
  },
  {
    faktor: 'Transport-Verpackung',
    impact: 'Mittel',
    details: 'Maßgefertigte Schaumstoff-Inserts in Holzkisten verhindern 90% aller Transport-Schäden.',
  },
  {
    faktor: 'Handhabung am Stand',
    impact: 'Mittel',
    details: 'Klare "Anfass"-Zonen vs "Nicht-Anfass"-Zonen am Modell signalisieren (Beschriftung, Material-Wechsel).',
  },
  {
    faktor: 'Klimatisierung der Messehalle',
    impact: 'Niedrig',
    details: 'Standard-Hallen-Klimatisierung ist unkritisch. Outdoor-Messen brauchen ASA statt PETG.',
  },
]
