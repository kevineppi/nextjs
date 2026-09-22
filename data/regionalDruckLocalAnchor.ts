/**
 * Lokale Kevin-Anchor-Texte pro Bundesland · ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * NEU GESCHRIEBEN 22.09.2026 (AI-SEO-Audit B2, Kevin-Entscheid
 * „bereinigt aktivieren"): Die Vorversion enthielt erfundene Cases
 * (EMO-Fräse, Mobility-Startup, Seilbahnen-Muster …) und unbelegte
 * Markt-Claims. Diese Fassung enthält AUSSCHLIESSLICH:
 *   - operative Wahrheiten (Fahrzeiten, Versandwege, Abholung)
 *   - reale, von Kevin bestätigte Cases (verlinkbar unter /cases)
 *   - öffentlich verifizierbare Messen (bewusst mit weichen Datumsangaben)
 * Regionen ohne echte Cases haben ein leeres realCaseSnapshot-Array —
 * die Sektion rendert dann nicht. Ehrlich leer schlägt erfunden voll.
 */

export interface LocalKevinAnchor {
  anchorTitle: string
  whyThisRegion: string
  personalStory: string[]
  realCaseSnapshot: {
    customerType: string
    project: string
    outcome: string
  }[]
  deliveryReality: {
    standardDays: string
    expressOption: string
    personalDelivery: boolean
    personalDeliveryNote?: string
  }
  upcomingMessen2026: {
    name: string
    location: string
    date: string
    relevance: string
  }[]
  dominantBranchen: string[]
  localTerms?: string[]
}

export const regionalKevinAnchors: Record<string, LocalKevinAnchor> = {

  // ═══════════════════════════════════════════════════════════════
  //   OBERÖSTERREICH — Heimatmarkt, hier steht die Werkstatt
  // ═══════════════════════════════════════════════════════════════
  'oberoesterreich': {
    anchorTitle: 'Oberösterreich ist mein Heimspiel',
    whyThisRegion:
      'Die Werkstatt steht in Gunskirchen bei Wels · der Großteil meiner Aufträge kommt aus Oberösterreich, von Architekturbüros über Vermessungsbüros bis zu Industriebetrieben.',
    personalStory: [
      'Wels-Zentrum erreiche ich in rund 10 Minuten, Linz in etwa 20. Das heißt konkret: Abholung in Gunskirchen jederzeit nach Absprache, und wenn es brennt, bringe ich das Modell im Raum Wels/Linz auch selbst vorbei.',
      'Der kürzeste Weg zahlt sich aus: Ein Architekturbüro aus der Region hat am Freitag angefragt und sein Wettbewerbsmodell am Montag Mittag persönlich bei mir abgeholt. Solche Wochenend-Sprints gehen nur, wenn die Wege kurz sind.',
      'Und manchmal geht es schneller als gedacht: Einem Vermessungsbüro habe ich den angebotenen Express-Zuschlag wieder gestrichen, weil die Datei druckfertig kam und Kapazität frei war · geliefert wurde trotzdem in drei Tagen, per Express-Versand.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Architekturbüro, Oberösterreich',
        project: 'Wettbewerbsmodell 1:500 für einen Kindergarten · Anfrage am Freitag',
        outcome: 'Fertigung übers Wochenende, Abholung Montag Mittag in Gunskirchen · rechtzeitig zur Abgabe.',
      },
      {
        customerType: 'Vermessungsbüro (ZT), Oberösterreich',
        project: 'Projektmodell aus druckfertig gelieferter Datei',
        outcome: 'Fix-fertig in 3 Tagen · der Express-Zuschlag wurde gestrichen, weil er nicht nötig war.',
      },
      {
        customerType: 'Museum in Edt bei Lambach',
        project: 'Justitia-Statue, 70 cm, digital modelliert und gedruckt',
        outcome: 'Ausstellungsfigur in Museumsqualität · dauerhaft in der Ausstellung.',
      },
    ],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: true,
      personalDeliveryNote: 'Abholung in Gunskirchen jederzeit nach Absprache · persönliche Anlieferung im Raum Wels/Linz möglich',
    },
    upcomingMessen2026: [
      { name: 'Energiesparmesse', location: 'Wels', date: 'jährlich im Frühjahr', relevance: 'Bau, Energie, Sanitär · Publikums- und Fachtage' },
      { name: 'AGRARIA', location: 'Wels', date: 'alle zwei Jahre im Herbst', relevance: 'Landtechnik & Agrar · große Geräte, ideale Modell-Kandidaten' },
      { name: 'Welser Messe', location: 'Wels', date: 'jährlich', relevance: 'regionale Leistungsschau' },
    ],
    dominantBranchen: ['maschinenbau', 'anlagenbau', 'energietechnik'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   WIEN — wiederkehrende Aufträge, Versandmarkt
  // ═══════════════════════════════════════════════════════════════
  'wien': {
    anchorTitle: 'Wien beliefere ich laufend · auch ohne Büro vor Ort',
    whyThisRegion:
      'Aus Wien kommen wiederkehrende Aufträge · unter anderem beliefert ekdruck einen der größten österreichischen Versicherungskonzerne regelmäßig mit Geschenk- und Aktionsartikeln aus dem 3D-Druck.',
    personalStory: [
      'Die Zusammenarbeit läuft komplett digital: CAD-Daten oder eine Skizze per Mail, Abstimmung per Telefon oder WhatsApp, dann versicherter Versand nach Wien · das Paket ist üblicherweise ein bis zwei Werktage unterwegs.',
      'Wenn ein Termin es verlangt, richte ich die persönliche Übergabe in Wien ein · gegen Spesenpauschale, nach Absprache. Für die meisten Projekte ist das aber gar nicht nötig: Der Express-Versand ist schneller als jeder Stau auf der A1.',
    ],
    realCaseSnapshot: [
      {
        customerType: 'Versicherungskonzern, Wien',
        project: '1.000 Keksausstecher mit Firmenlogo für die Weihnachtsaktion',
        outcome: 'Pünktlich zur Aktion geliefert · seither wiederkehrende Aufträge für Mitarbeiter- und Partneraktionen.',
      },
    ],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand 1-2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Übergabe in Wien nach Absprache gegen Spesenpauschale',
    },
    upcomingMessen2026: [
      { name: 'Bauen & Wohnen', location: 'Messe Wien', date: 'jährlich im Frühjahr', relevance: 'Bau & Immobilien · Architekturmodelle' },
      { name: 'GEWINN-Messe', location: 'Messe Wien', date: 'jährlich im Herbst', relevance: 'B2B-Publikum, Finanz & Unternehmen' },
    ],
    dominantBranchen: ['elektrotechnik', 'maschinenbau'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   STEIERMARK — Versandmarkt über die A9
  // ═══════════════════════════════════════════════════════════════
  'steiermark': {
    anchorTitle: 'Steiermark: über die A9 gut angebunden',
    whyThisRegion:
      'Graz und die Obersteiermark beliefere ich per versichertem Versand · das Paket ist über die A9 üblicherweise ein bis zwei Werktage unterwegs.',
    personalStory: [
      'Ehrlich gesagt: Nach Graz fahre ich nicht jede Woche. Muss ich auch nicht · die Abstimmung läuft digital, das Modell kommt versichert und transportsicher verpackt per Express. Bei sehr großen oder heiklen Stücken sprechen wir über persönliche Anlieferung.',
      'Was aus der Steiermark am häufigsten angefragt wird, sind Präsentations- und Anschauungsmodelle für Technik-Unternehmen · die Region hat eine dichte Automotive- und Maschinenbau-Landschaft.',
    ],
    realCaseSnapshot: [],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand 1-2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: false,
    },
    upcomingMessen2026: [
      { name: 'Grazer Herbstmesse', location: 'Messe Graz', date: 'jährlich im Herbst', relevance: 'große regionale Publikumsmesse' },
      { name: 'Häuslbauermesse', location: 'Messe Graz', date: 'jährlich im Jänner', relevance: 'Bau & Sanierung · Architektur- und Produktmodelle' },
    ],
    dominantBranchen: ['automotive', 'maschinenbau'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   SALZBURG — Versandmarkt über die A1
  // ═══════════════════════════════════════════════════════════════
  'salzburg': {
    anchorTitle: 'Salzburg liegt direkt an meiner Versandachse',
    whyThisRegion:
      'Salzburg ist über die A1 die direkteste Strecke ab Werkstatt · versicherter Versand, üblicherweise ein bis zwei Werktage Laufzeit.',
    personalStory: [
      'Von Gunskirchen nach Salzburg ist es ein kurzer Weg · bei dringenden Terminen ist auch eine persönliche Anlieferung machbar, das besprechen wir im Einzelfall.',
      'Die Abstimmung läuft wie überall: Daten oder Pläne schicken, werktags kommt das Festpreisangebot innerhalb von 6 Stunden, dann wird gefertigt.',
    ],
    realCaseSnapshot: [],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand 1-2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Anlieferung nach Absprache · Salzburg liegt an der A1-Achse ab Werkstatt',
    },
    upcomingMessen2026: [
      { name: 'Bauen+Wohnen Salzburg', location: 'Messezentrum Salzburg', date: 'jährlich im Frühjahr', relevance: 'Bau & Immobilien' },
    ],
    dominantBranchen: ['maschinenbau'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   KÄRNTEN — Versand über die A10, ehrlich: selten vor Ort
  // ═══════════════════════════════════════════════════════════════
  'kaernten': {
    anchorTitle: 'Kärnten: zuverlässig per Versand, ehrlich gesagt selten persönlich',
    whyThisRegion:
      'Nach Kärnten liefere ich per versichertem Versand über die A10 · robust verpackt, damit auch alpine Transportwege dem Modell nichts anhaben.',
    personalStory: [
      'Persönlich bin ich selten in Kärnten · das sage ich offen. Für die Projekte spielt das keine Rolle: Abstimmung digital, Angebot in 6 Stunden werktags, Modell per Express-Versand. Bisher kam jedes Paket heil an.',
    ],
    realCaseSnapshot: [],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand 1-2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: false,
    },
    upcomingMessen2026: [
      { name: 'Klagenfurter Herbstmesse', location: 'Klagenfurt', date: 'jährlich im September', relevance: 'regionale Leistungsschau' },
      { name: 'Internationale Holzmesse', location: 'Klagenfurt', date: 'alle zwei Jahre', relevance: 'Holz & Forsttechnik · große Geräte als Modell-Kandidaten' },
    ],
    dominantBranchen: ['elektrotechnik'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   NIEDERÖSTERREICH — A1-Achse, Nähe zu Wien
  // ═══════════════════════════════════════════════════════════════
  'niederoesterreich': {
    anchorTitle: 'Niederösterreich: die A1 arbeitet für uns',
    whyThisRegion:
      'St. Pölten und der Zentralraum liegen direkt an der A1 · Versand ab Werkstatt üblicherweise ein bis zwei Werktage, bei Terminen in Wien-Nähe lässt sich eine persönliche Übergabe kombinieren.',
    personalStory: [
      'Niederösterreich ist ein reiner Versandmarkt für mich, und das funktioniert reibungslos: Daten schicken, Angebot in 6 Stunden werktags, Modell versichert per Post oder Express.',
    ],
    realCaseSnapshot: [],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand 1-2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Übergabe in Kombination mit Wien-Terminen möglich',
    },
    upcomingMessen2026: [
      { name: 'Ab Hof', location: 'Wieselburg', date: 'jährlich im Frühjahr', relevance: 'Direktvermarktung & Landwirtschaft' },
    ],
    dominantBranchen: ['maschinenbau', 'anlagenbau'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   VORARLBERG — weiteste Strecke, volle Ehrlichkeit
  // ═══════════════════════════════════════════════════════════════
  'vorarlberg': {
    anchorTitle: 'Vorarlberg: die weiteste Strecke · und trotzdem gut machbar',
    whyThisRegion:
      'Vorarlberg ist von Gunskirchen aus die längste Strecke in Österreich · deshalb bin ich hier ehrlich: persönliche Anlieferung ist die Ausnahme, versicherter Versand die Regel.',
    personalStory: [
      'Das Paket nach Dornbirn oder Bregenz ist üblicherweise zwei Werktage unterwegs. Bei fixen Terminen plane ich den Versandpuffer von Anfang an mit ein und schicke im Zweifel Express · das ist verlässlicher als jede Zusage, die von der Tagesform der Westautobahn abhängt.',
    ],
    realCaseSnapshot: [],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand ca. 2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: false,
    },
    upcomingMessen2026: [
      { name: 'Dornbirner Herbstmesse', location: 'Messe Dornbirn', date: 'jährlich im September', relevance: 'regionale Leistungsschau' },
    ],
    dominantBranchen: ['elektrotechnik'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   BURGENLAND — kompakt und ehrlich
  // ═══════════════════════════════════════════════════════════════
  'burgenland': {
    anchorTitle: 'Burgenland: kurze Wege über die Ost-Achse',
    whyThisRegion:
      'Ins Burgenland liefere ich per versichertem Versand · Eisenstadt und das Nordburgenland sind über die Ost-Achse gut erreichbar, üblicherweise ein bis zwei Werktage Laufzeit.',
    personalStory: [
      'Für burgenländische Projekte gilt dasselbe ehrliche Setup wie überall: digitale Abstimmung, Festpreisangebot in 6 Stunden werktags, versicherter Versand. Eine persönliche Übergabe lässt sich mit Wien-Terminen kombinieren.',
    ],
    realCaseSnapshot: [],
    deliveryReality: {
      standardDays: '3-5 Werktage ab Datenfreigabe, Versand 1-2 Werktage',
      expressOption: 'Express 24-48h (+50 %)',
      personalDelivery: true,
      personalDeliveryNote: 'Persönliche Übergabe in Kombination mit Wien-Terminen möglich',
    },
    upcomingMessen2026: [
      { name: 'Inform', location: 'Oberwart', date: 'jährlich im Herbst', relevance: 'größte Messe des Burgenlands · regionale Wirtschaft' },
    ],
    dominantBranchen: ['energietechnik'],
  },

}

export const getKevinAnchor = (slug: string): LocalKevinAnchor | undefined =>
  regionalKevinAnchors[slug]
