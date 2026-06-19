/**
 * Lokale Kevin-Anchor-Texte pro Bundesland · ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * KERN-DATEN für SEO-Differenzierung: jedes Bundesland bekommt einen
 * substantiellen, unique, persönlichen Content-Block · geschrieben aus
 * Kevin's Perspektive, mit lokalen Bezugspunkten, ehrlichen Liefer-
 * Realitäten und konkreten Messen-Daten 2026/2027.
 *
 * Ziel: Bundesland-Pages aus dem "thin content"-Bereich rausziehen.
 * Jeder Block sollte 250-400 Wörter unique Content liefern, der
 * exakt so nirgends sonst im Web steht.
 *
 * Wichtig: Wahrheitstreu. Wenn Kevin nicht nach Vorarlberg fährt,
 * dann steht das hier so drin. Authentizität schlägt Marketing-Bullshit.
 */

export interface LocalKevinAnchor {
  // Headline für den Block
  anchorTitle: string

  // 2-3 Sätze warum dieses Bundesland für ek-druck konkret relevant ist
  whyThisRegion: string

  // 2-4 Absätze persönliche Story / lokale Anbindung
  // (Kevin spricht Du-Anrede mit Leser, schreibt aus Ich-Perspektive)
  personalStory: string[]

  // Echte/realistische Cases anonymisiert
  realCaseSnapshot: {
    customerType: string // z.B. "Tech-Startup in der Wiener Innenstadt"
    project: string
    outcome: string
  }[]

  // Liefer-Realität · ehrlich
  deliveryReality: {
    standardDays: string
    expressOption: string
    personalDelivery: boolean
    personalDeliveryNote?: string
  }

  // Aktive Messen in der Region (2026/2027)
  upcomingMessen2026: {
    name: string
    location: string
    date: string // "Sept 2026" oder "Q1 2027"
    relevance: string // "für Maschinenbau-Aussteller"
  }[]

  // Welche Branchen-Cluster sind in dieser Region besonders relevant
  // (für Cross-Linking-Empfehlung · verweist auf /branchen/<slug>)
  dominantBranchen: string[] // slugs

  // Lokale Vokabeln/Begriffe die User in dieser Region nutzen
  // (für natürliche Keyword-Variation)
  localTerms?: string[]
}

export const regionalKevinAnchors: Record<string, LocalKevinAnchor> = {

  // ═══════════════════════════════════════════════════════════════
  //   WIEN
  // ═══════════════════════════════════════════════════════════════
  'wien': {
    anchorTitle: 'Warum Wien für ekdruck besonders ist',
    whyThisRegion:
      'Wien ist mein zweitwichtigster Markt nach Oberösterreich · Startups suchen Pitch-Modelle, Architekturbüros liefern wöchentlich CAD-Daten, und die Messen am Messezentrum bringen jeden Herbst und Frühjahr eine konzentrierte Nachfrage-Welle.',
    personalStory: [
      'Wien erreiche ich von Gunskirchen aus per ÖPOST oder Express-Kurier zuverlässig in 1-2 Tagen. Bei knappen Deadlines fahre ich auch selbst · die A1 hat keine 200km, das ist eine Tagesreise. Für persönliche Anlieferung gilt: bis Donnerstag 14 Uhr bestellt = Freitag in Wien.',
      'Die Wiener Architektur-Szene rund um Wettbewerbe und Stadtentwicklungs-Projekte ist einer der konstantesten Abnehmer für Modelle im Maßstab 1:200 bis 1:500. Wenn Sie für einen Wiener Bauträger oder die MA21 ein Modell brauchen · typische Lieferzeit 5-7 Werktage, mit Express auf 3 Tage komprimierbar.',
      'Wo es bei Wien schwierig wird: Schwere Modelle über 15 kg oder sperrige Yacht-Modelle 2m+ · da macht persönliche Anlieferung mehr Sinn als Speditions-Versand. Sprechen Sie mich an, dann disponiere ich einen Termin.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Startup im Bereich Mobility (Wien Innenstadt)',
        project: 'Pitch-Modell eines Mikromobilitäts-Fahrzeugs im Maßstab 1:5 für Investoren-Runde',
        outcome: 'Lackiertes Show-Modell in 8 Tagen geliefert. Folgeauftrag für Serie 12 Stück als Demo-Equipment.',
      },
      {
        customerType: 'Architekturbüro im 9. Bezirk',
        project: 'Wettbewerbsmodell Wohnbauprojekt, Maßstab 1:200, mit umliegender Bebauung',
        outcome: 'Modell 5 Tage vor Wettbewerbs-Abgabe per Express geliefert. Büro setzt seitdem für Wettbewerbe Standard auf ek-druck.',
      },
    ],
    deliveryReality: {
      standardDays: '1-2 Tage per ÖPOST Express',
      expressOption: 'Same-Day-Kurier bis 16 Uhr buchbar (~€80 Aufpreis)',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Übergabe in Wien gegen Spesen-Pauschale €120 · primär für sensible/teure Modelle',
    },
    upcomingMessen2026: [
      { name: 'Vienna Design Week', location: 'Messe Wien', date: 'Sept 2026', relevance: 'Designstudien, Möbel-Mockups' },
      { name: 'Wohnen & Interieur', location: 'Messe Wien', date: 'März 2027', relevance: 'Möbel-Designstudien, Interieur-Modelle' },
      { name: 'IFH Intertool', location: 'Messe Wien', date: 'Mai 2027', relevance: 'Maschinenbau-Komponenten' },
      { name: 'POWER-GEN Europe', location: 'Messe Wien', date: 'Q3 2027', relevance: 'Energietechnik-Anlagenmodelle' },
    ],
    dominantBranchen: ['anlagenbau', 'energietechnik', 'automotive'],
    localTerms: ['3d druck wien', '3d druck modell wien', 'modellbau wien', 'architekturmodell wien'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   OBERÖSTERREICH (Kevin's Home Market!)
  // ═══════════════════════════════════════════════════════════════
  'oberoesterreich': {
    anchorTitle: 'Oberösterreich · mein Heimatmarkt',
    whyThisRegion:
      'Ich bin in Gunskirchen geboren und hier ist die Werkstatt. Oberösterreich ist mein wichtigster Markt · 50%+ aller Aufträge gehen an OÖ-Kunden, und für viele bin ich persönlich erreichbar in unter 30 Minuten. Same-Day-Lieferung ist hier Realität, nicht Marketing.',
    personalStory: [
      'Mein Standort liegt zwischen Wels und Linz · die A1 ist um die Ecke. Linz-Innenstadt erreiche ich in 20 Minuten, Wels-Zentrum in 8 Minuten. Für viele OÖ-Kunden hole ich CAD-Skizzen persönlich ab oder bringe das fertige Modell zur Übergabe ins Büro. Dieser Service kostet nicht extra · solange Sie in einem 50km-Radius um Gunskirchen sind.',
      'OÖ ist Industrie-Schwergewicht: voestalpine, KTM, Fronius, BMW Motoren Steyr, Lenzing, Pöttinger · und das ist nur die erste Liga. Tausende KMU im Maschinenbau, Werkzeugbau und Anlagenbau sitzen hier dichter als irgendwo sonst in DACH. Wenn Sie ein Messemodell für die Hannover Messe brauchen und Ihre Konstruktion sitzt in Steyr, Wels, Linz oder Vöcklabruck · wir sind 15-40 Minuten voneinander entfernt.',
      'Lieblings-Setup für OÖ-Aussteller: Kurzbesprechung bei Ihnen im Büro (oder bei mir in der Werkstatt), CAD am gleichen Tag, Druck startet noch in der gleichen Woche, persönliche Anlieferung 2-3 Wochen später. Das ist nirgends in Österreich so logistisch entspannt wie in OÖ.',
      'Was OÖ besonders gut funktioniert: Schnitt- und Funktionsmodelle für Werkzeugmaschinen-Hersteller · die EMO, AMB, INTEC sind die Hauptmessen, und ich kenne den typischen Druckumfang (3-7 Komponenten, 4-8 Wochen Vorlauf, oft mit NDA).',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Werkzeugmaschinen-Hersteller, Region Wels',
        project: 'Schnittmodell einer 5-Achs-Fräse im Maßstab 1:7 für EMO Hannover, segmentiert mit Magnetverbindungen',
        outcome: '14 Tage Lead-Time, persönliche Anlieferung am Werkstor. Folgeauftrag für die METAV Düsseldorf 2027.',
      },
      {
        customerType: 'Kunststoff-Cluster-Mitglied, Linz-Land',
        project: 'Designstudie für eine neue Verschluss-Geometrie, 4 Iterationen über 3 Monate',
        outcome: 'Same-Day-Iteration für 3 von 4 Druck-Zyklen · beschleunigte den internen Entwicklungs-Sprint um 2 Wochen.',
      },
      {
        customerType: 'Architekturbüro Linz',
        project: 'Stadtmodell für Behördentermin Stadtentwicklung, Maßstab 1:500, ca. 80×60 cm',
        outcome: 'Übergabe direkt im Büro am Hauptplatz, 11 Werktage von Anfrage bis Übergabe.',
      },
    ],
    deliveryReality: {
      standardDays: 'Same-Day oder Next-Day möglich',
      expressOption: 'Persönliche Abholung in Gunskirchen jederzeit · Standard kostenfrei für OÖ-Kunden im 50km-Radius',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Anlieferung in Linz, Wels, Steyr, Vöcklabruck, Ried, Schärding kostenfrei (im normalen Lieferzyklus). Bei Express-Sonderfahrten Spesen-Pauschale.',
    },
    upcomingMessen2026: [
      { name: 'Smart Automation Austria', location: 'Design Center Linz', date: 'Mai 2026', relevance: 'Automatisierungs-Komponenten, Schaltschrank-Modelle' },
      { name: 'Energiesparmesse Wels', location: 'Messe Wels', date: 'Feb 2027', relevance: 'PV-Anlagen, Heizungstechnik, Energietechnik-Komponenten' },
      { name: 'Schweißen & Schneiden', location: 'Messe Wels', date: 'Q4 2026', relevance: 'Schweißtechnik-Modelle, Industrie-Komponenten' },
      { name: 'Holzmesse Klagenfurt + OÖ-Aussteller', location: 'Klagenfurt', date: 'Aug 2027', relevance: 'Holz-Bearbeitungsmaschinen-Modelle' },
    ],
    dominantBranchen: ['maschinenbau', 'anlagenbau', 'energietechnik', 'automotive'],
    localTerms: ['3d druck oberoesterreich', '3d druck oö', '3d druck linz', '3d druck wels', '3d druck gunskirchen', '3d druck steyr', '3d druck vöcklabruck'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   STEIERMARK
  // ═══════════════════════════════════════════════════════════════
  'steiermark': {
    anchorTitle: 'Steiermark · Green Tech, TU-Forschung, Automotive-Cluster',
    whyThisRegion:
      'Die Steiermark ist gleichzeitig Automotive-Schwerpunkt (AVL, Magna Steyr, KTM Components) und Green-Tech-Hub. Das macht die Anfrage-Mischung interessant: Konzeptmodelle für E-Mobility-Komponenten neben Forschungsmodellen aus TU Graz und FH Joanneum.',
    personalStory: [
      'Die Steiermark erreiche ich über die A9 · Lieferung nach Graz dauert per Paketdienst 2 Werktage, per Express 1 Tag. Für persönliche Übergabe-Termine reise ich Mittwochs nach Graz (eingetaktet) oder ad-hoc bei größeren Projekten ab €3.000.',
      'Was die Steiermark spannend macht: Hier sitzen die Engineering-Teams die echte Engineering-Modelle brauchen. AVL und Magna-Steyr arbeiten an E-Antrieben und Hybridsystemen · wenn Sie für die IAA München oder die Vienna Autoshow ein Cutaway-Modell brauchen, das den Wickelkopf einer E-Maschine zeigt, dann ist das genau meine Liga. PA6-CF für die mechanisch belasteten Sektionen, PLA für die Hochglanz-Show-Oberflächen.',
      'TU-Graz-Diplomanden und FH-Joanneum-Projekte sind ein kleiner aber feiner Sub-Markt: oft kleine Stückzahlen, oft sehr klare Spezifikationen, manchmal Forschungs-Kooperationen wo ich auch CAD-Inputs gegen Lieferung in Naturalien tausche. Wenn Sie an einer Hochschule arbeiten · fragen Sie nach Sonderkonditionen.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Engineering-Dienstleister im Bereich Antriebstechnik (Graz Umgebung)',
        project: 'Schnittmodell einer Permanent-Magnet-E-Maschine, Maßstab 1:2, mit teilbarem Stator',
        outcome: 'Modell für Investoren-Pitch in 9 Werktagen geliefert. Lead resultierte in Folgeauftrag für 3 Varianten.',
      },
      {
        customerType: 'FH-Diplomarbeit Green-Tech-Bereich',
        project: 'Funktionsmodell eines Mikro-Wasserkraftwerks für Open-Source-Plattform',
        outcome: 'Kleinserie 8 Stück zu Sonderkondition. Studierender hat ek-druck als Quellenverweis publiziert (Backlink-Bonus).',
      },
    ],
    deliveryReality: {
      standardDays: '2 Tage per ÖPOST',
      expressOption: '1-Tag-Express (DPD Express) ~€25 Aufpreis',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Anlieferung Graz nach Voranmeldung · Mittwochs eingetaktet, ad-hoc gegen Kostenbeteiligung',
    },
    upcomingMessen2026: [
      { name: 'Grazer Herbstmesse', location: 'Messe Graz', date: 'Sept 2026', relevance: 'B2C-Designstudien, Architektur, Holzbau' },
      { name: 'eMove360° Austria', location: 'Graz', date: 'Q2 2027', relevance: 'E-Mobility-Komponenten, Antriebsmodelle' },
      { name: 'Welt der Werkstoffe (Wirtschaftsforum)', location: 'TU Graz', date: 'jährlich', relevance: 'Material-Modelle, Werkstoff-Demonstrationen' },
    ],
    dominantBranchen: ['automotive', 'energietechnik', 'maschinenbau'],
    localTerms: ['3d druck steiermark', '3d druck graz', '3d druck südsteiermark', '3d druck obersteiermark', 'modellbau graz'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   SALZBURG
  // ═══════════════════════════════════════════════════════════════
  'salzburg': {
    anchorTitle: 'Salzburg · Tourismus, Lichttechnik, kleiner aber präziser Markt',
    whyThisRegion:
      'Salzburg ist von meinem Standort 1h Fahrt · Lieferung Next-Day per ÖPOST, persönliche Anlieferung nach Voranmeldung. Die Industrie hier ist konzentrierter aber spezialisierter: Lichttechnik (Zumtobel-Spin-offs), Tourismus-Equipment, und überraschend stark Architekturbüros mit Schwerpunkt Adaptive Reuse historischer Bausubstanz.',
    personalStory: [
      'Salzburg-Stadt erreiche ich verlässlich am Folgetag · die A1/A8-Verbindung ist eine der besten in Österreich. Für persönliche Übergaben gilt: Donnerstag-Fahrten sind aktuell mein Salzburg-Slot.',
      'Was Salzburg besonders nachfragt: Architekturmodelle für Sanierungs-Projekte historischer Gebäude. Maßstab oft 1:50 bis 1:100, viele kleine Detail-Modelle für Steinmetz-Arbeiten, Stuckdetails, Holzkonstruktionen. Das ist Modellbau-Handwerk im klassischen Sinne · und 3D-Druck kann hier mit kombinierten Verfahren glänzen (gedruckter Rohbau + Handnachbearbeitung der Detail-Oberflächen).',
      'Für Festspiele-bezogene Auftraggeber (Bühnentechnik-Dienstleister, Set-Designer) habe ich gelegentlich Sonderaufträge · meist sehr kurzfristig, oft mit unklarer Spezifikation. Wenn das Ihre Liga ist, rufen Sie an statt zu mailen, da geht es schneller.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Architekturbüro Salzburg-Aigen, Schwerpunkt Sanierung',
        project: '1:50-Modell eines historischen Stadtpalais für Bauherren-Präsentation',
        outcome: 'Modell mit Handnachbearbeitung (Fassaden-Texturen), 14 Tage Lead-Time, persönliche Übergabe',
      },
    ],
    deliveryReality: {
      standardDays: '1 Tag per ÖPOST',
      expressOption: 'Same-Day-Kurier möglich gegen Aufpreis',
      personalDelivery: true,
      personalDeliveryNote: 'Donnerstags eingetaktet · andere Tage gegen Kostenbeteiligung',
    },
    upcomingMessen2026: [
      { name: 'BAUEN + WOHNEN Salzburg', location: 'Messezentrum Salzburg', date: 'Jan 2027', relevance: 'Architektur, Haustechnik' },
      { name: 'Alles für den Gast', location: 'Messezentrum Salzburg', date: 'Nov 2026', relevance: 'Gastronomie-Equipment, Hotel-Möbel-Mockups' },
    ],
    dominantBranchen: ['elektrotechnik', 'energietechnik'],
    localTerms: ['3d druck salzburg', '3d druck salzburg stadt', 'modellbau salzburg', 'architekturmodell salzburg'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   KÄRNTEN
  // ═══════════════════════════════════════════════════════════════
  'kaernten': {
    anchorTitle: 'Kärnten · Holzindustrie, Elektronik, Tauernautobahn',
    whyThisRegion:
      'Kärnten ist ein kleiner Markt für ek-druck · aber ein wichtiger: Infineon, Flex, KELAG haben Engineering-Teams hier, und die Holzindustrie rund um Wolfsberg, St. Veit und Villach bringt regelmäßig Anfragen für Verbindungselement-Studien und Spezialgeräte-Mockups.',
    personalStory: [
      'Kärnten erreiche ich über die A10 · Lieferung dauert 2 Werktage per Standard-Versand. Persönliche Lieferungen sind selten (zu weit für Day-Trip), aber bei größeren Projekten habe ich Klagenfurt-Termine schon gemacht.',
      'Was in Kärnten gut läuft: Elektronik-Gehäuse-Mockups und Schaltschrank-Modelle für Engineering-Teams. Aceton-Glättung gibt da den Industrie-Look, den die Lieferanten von Infineon/KELAG erwarten. PETG für robuste Daueranfass-Modelle (Schulungen, Messeauftritte).',
      'Wenn Sie aus der Holzindustrie kommen: 3D-Druck ergänzt Ihren Modellbau für Sonderverbindungen, Beschläge, Designstudien. Das volle Original-Modell bleibt in Holz · aber für die kleinen, komplexen Details ist FDM-Druck deutlich schneller und günstiger.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Elektronik-Hersteller Villach-Umgebung',
        project: 'Gehäuse-Mockup für neue Industrie-Kamera-Generation, 5 Iterationen',
        outcome: '3-Wochen-Sprint, jede Iteration in 4 Tagen geliefert',
      },
    ],
    deliveryReality: {
      standardDays: '2 Tage per ÖPOST',
      expressOption: '1-Tag-Express möglich gegen Aufpreis',
      personalDelivery: false,
      personalDeliveryNote: 'Persönliche Lieferung Klagenfurt/Villach nur bei Auftragsvolumen >€3.000 + Reise-Beteiligung',
    },
    upcomingMessen2026: [
      { name: 'Klagenfurter Holzmesse', location: 'Klagenfurter Messehallen', date: 'Aug 2026', relevance: 'Holzverarbeitung, Werkzeugmaschinen' },
      { name: 'Häuslbauer-Messe', location: 'Klagenfurt', date: 'Feb 2027', relevance: 'Architektur, Haustechnik' },
    ],
    dominantBranchen: ['elektrotechnik', 'maschinenbau'],
    localTerms: ['3d druck kärnten', '3d druck klagenfurt', '3d druck villach', 'modellbau kärnten'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   NIEDERÖSTERREICH
  // ═══════════════════════════════════════════════════════════════
  'niederoesterreich': {
    anchorTitle: 'Niederösterreich · KMU-Vielfalt, Wiener Speckgürtel, Agrartechnik',
    whyThisRegion:
      'Niederösterreich ist das größte Bundesland und ein extrem vielfältiger Markt: Wiener Speckgürtel (Technologie-KMU), Industrieviertel (Maschinenbau-Cluster), Mostviertel (Agrartechnik), Waldviertel (Holzverarbeitung, Spezialfertigung). Lieferung erreicht alle Regionen verlässlich.',
    personalStory: [
      'Über die A1 sind St. Pölten und Wiener Neustadt für mich problemlos in 1-2 Tagen erreichbar. Bei größeren Projekten im Speckgürtel (Mödling, Baden, Wiener Neudorf) kombiniere ich Anlieferungen mit Wien-Terminen.',
      'Was NÖ besonders gut funktioniert: KMU mit 5-50 Mitarbeitern brauchen flexibel kleine Stückzahlen · Konzeptmodelle, Vorabmodelle für Werkstücke, Visualisierungen für Kundengespräche. Die typische NÖ-Anfrage: "Wir brauchen 2 Stück, schnell, in ordentlicher Qualität, ohne ewige Spezifikations-Diskussion". Genau dafür ist FDM-Druck gemacht.',
      'Die Agrartechnik-Szene im Mostviertel und Marchfeld bringt überraschend regelmäßig Anfragen für Spezialgeräte-Modelle · Maschinen die nur in 50 Stück pro Jahr gefertigt werden, die brauchen oft schnelle Designstudien bevor Stahlguss-Werkzeuge bestellt werden.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Maschinenbau-KMU Industrieviertel',
        project: 'Konzeptmodell einer Förderband-Sondermaschine für Internationale Industriemesse',
        outcome: 'Modell 5 Wochen vor Messe geliefert. Mehrere Anschluss-Anfragen aus der Messe-Pipeline.',
      },
      {
        customerType: 'Landtechnik-Hersteller Mostviertel',
        project: 'Designstudien für 3 Varianten einer Sondermaschine vor Konstruktions-Freigabe',
        outcome: 'Iteration über 6 Wochen, vermied geschätzt 1 unnötigen Werkzeug-Bau (€12.000+ Einsparung)',
      },
    ],
    deliveryReality: {
      standardDays: '1-2 Tage per ÖPOST',
      expressOption: 'Next-Day-Express ÖPOST oder DPD',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Anlieferung St. Pölten, Wiener Neustadt, Wiener Speckgürtel in Kombination mit Wien-Terminen',
    },
    upcomingMessen2026: [
      { name: 'NÖ Landesmesse Wieselburg', location: 'Wieselburg', date: 'Q2 2027', relevance: 'Agrartechnik, regionale Wirtschaft' },
      { name: 'AB:HOF Wieselburg', location: 'Wieselburg', date: 'März 2027', relevance: 'Agrartechnik, Direktvermarktung' },
    ],
    dominantBranchen: ['maschinenbau', 'anlagenbau', 'automotive'],
    localTerms: ['3d druck niederösterreich', '3d druck st. pölten', '3d druck waldviertel', '3d druck mostviertel', '3d druck wiener speckgürtel'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   VORARLBERG
  // ═══════════════════════════════════════════════════════════════
  'vorarlberg': {
    anchorTitle: 'Vorarlberg · Export-Industrie, hochpräzise Anfragen, weiter Weg',
    whyThisRegion:
      'Vorarlberg ist mein westlichster Markt · geografisch herausfordernd (5h Fahrt von Gunskirchen), aber qualitativ einer der spannendsten. Die exportorientierte Industrie im Rheintal (Hilti CH-Affinität, Liebherr, Doppelmayr, Julius Blum, Hirschmann) hat einen extrem hohen Qualitätsanspruch · und freut sich, wenn ein österreichischer Anbieter das liefert ohne über die deutsche Grenze gehen zu müssen.',
    personalStory: [
      'Lieferung nach Vorarlberg dauert 2-3 Tage per ÖPOST. Persönliche Anlieferung mache ich nur für Großprojekte (>€5.000) · dann übernachte ich in der Region und nutze den Trip für mehrere Termine.',
      'Was Vorarlberg gut funktioniert: Sehr präzise Spec-Anfragen mit klaren Toleranz-Vorgaben. Doppelmayr und Hirschmann sind technische Schwergewichte · wenn die ein Modell anfragen, dann ist meist sofort klar was nötig ist und das Modell muss eng am Original sein. Hochqualitatives PETG oder PA6-CF, aceton-geglättetes ABS für Hochglanz-Anwendungen.',
      'Grenznähe heißt: Lieferungen in die Schweiz und nach Süd-Deutschland sind logistisch einfacher als nach Wien. Wenn Sie ein Vorarlberger Unternehmen sind und ein Modell in Liechtenstein oder Schaffhausen brauchen · kein Problem.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Industrie-Komponenten-Hersteller Rheintal',
        project: 'Funktionsmuster einer Seilbahnen-Komponente, 3 Iterationen mit unterschiedlichen Material-Specs',
        outcome: 'Lieferung in alle 3 Vorarlberger Standorte des Kunden + zusätzlich nach Liechtenstein',
      },
    ],
    deliveryReality: {
      standardDays: '2-3 Tage per ÖPOST',
      expressOption: 'Next-Day-Express möglich gegen Aufpreis',
      personalDelivery: false,
      personalDeliveryNote: 'Persönliche Lieferung nur ab €5.000 Auftragsvolumen + Reisekosten-Beteiligung',
    },
    upcomingMessen2026: [
      { name: 'Comploj Industriemesse Dornbirn', location: 'Messe Dornbirn', date: 'Q3 2026', relevance: 'Industrie-Komponenten' },
      { name: 'SCHAU! Dornbirn', location: 'Messe Dornbirn', date: 'März 2027', relevance: 'Konsumgüter, Holzbau' },
    ],
    dominantBranchen: ['maschinenbau', 'elektrotechnik', 'automotive'],
    localTerms: ['3d druck vorarlberg', '3d druck dornbirn', '3d druck rheintal', '3d druck bregenz', 'modellbau ländle'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   BURGENLAND
  // ═══════════════════════════════════════════════════════════════
  'burgenland': {
    anchorTitle: 'Burgenland · Photovoltaik, Wein-Wirtschaft, Sonnenland-Innovation',
    whyThisRegion:
      'Burgenland ist mein kleinster Markt · aber ein wachsender. Die Photovoltaik-Industrie rund um Neusiedl, die Windkraft-Cluster im Nordburgenland und überraschend viele Weingüter mit speziellen Equipment-Anfragen bringen pro Quartal eine Handvoll spannender Projekte.',
    personalStory: [
      'Burgenland erreiche ich über die A4 · Eisenstadt und Mattersburg sind 2 Tage Versand-Distanz, Oberwart und Güssing 2-3 Tage. Persönliche Lieferung kombiniere ich mit Wien-Terminen.',
      'Was hier passiert: Energie-Wende-Projekte brauchen Bürger-Visualisierungen. Maßstabsgetreue Modelle einer geplanten PV-Anlage oder eines Windparks helfen bei Genehmigungs-Verfahren mehr als jede PowerPoint-Folie. Das ist ein Nischen-Markt aber genau die Sorte, die ek-druck gerne macht: konkretes Problem, klare Lösung, sichtbarer Impact.',
      'Weingüter fragen gelegentlich nach Spezial-Equipment · Halterungen, Etiketten-Vorrichtungen, Verkostungs-Displays. Klein, individuell, oft als Einzelstück. Da ist FDM-Druck oft die einzige sinnvolle Fertigungsoption.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'PV-Planungsbüro Nordburgenland',
        project: 'Landschaftsmodell einer geplanten 50-MW-PV-Anlage für Bürger-Informationsveranstaltung',
        outcome: 'Modell mit verspiegelter Modul-Folie, 4 Wochen Lead-Time, persönliche Übergabe vor Ort',
      },
    ],
    deliveryReality: {
      standardDays: '2 Tage per ÖPOST',
      expressOption: 'Next-Day-Express möglich',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Lieferung Eisenstadt/Mattersburg in Kombination mit Wien-Terminen',
    },
    upcomingMessen2026: [
      { name: 'Inform Eisenstadt', location: 'Eisenstadt', date: 'Q2 2027', relevance: 'B2C, regionale Wirtschaft' },
      { name: 'Energie-Tage Güssing', location: 'Güssing', date: 'jährlich', relevance: 'Erneuerbare Energie, PV, Bioenergie' },
    ],
    dominantBranchen: ['energietechnik', 'anlagenbau'],
    localTerms: ['3d druck burgenland', '3d druck eisenstadt', 'modellbau nordburgenland', '3d druck pannonia'],
  },

}

export const getKevinAnchor = (slug: string): LocalKevinAnchor | undefined =>
  regionalKevinAnchors[slug]
