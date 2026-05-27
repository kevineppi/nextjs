/**
 * Branchen-Cluster Daten — ek-druck
 * ──────────────────────────────────────────────────────────────────────
 * 6 Industriebranchen als SEO-Long-Tail-Pages.
 * Pro Branche: Title, Hero, Pains, Use-Cases, Materials, FAQs, Cross-Links.
 *
 * Verwendet von:
 *   - components/landing/BranchenLanding.tsx (Server-Component)
 *   - app/branchen/<slug>/page.tsx
 *
 * SEO-Strategie: jede Branche-Page targeted 8-12 Long-Tail-Keywords mit
 * geringem Wettbewerb aber hoher Commercial-Intent.
 */

export type BrancheFAQ = {
  question: string
  answer: string
}

export type BrancheUseCase = {
  title: string
  description: string
  scaleHint?: string // z.B. "Maßstab 1:5 bis 1:50"
  materialHint?: string // z.B. "PETG für UV-Beständigkeit"
}

export type BranchePain = {
  problem: string
  solution: string
}

export type Branche = {
  slug: string
  // SEO
  metaTitle: string
  metaDescription: string
  // Page-Hero
  eyebrow: string // z.B. "Branchen-Lösung"
  h1: string
  subline: string
  primaryKeyword: string // z.B. "Maschinenbau Messemodell"
  secondaryKeywords: string[] // werden in Body verstreut
  // Long-Tail SEO-Body — 2-3 Absätze natürliche Prose mit secondaryKeywords
  // semantisch eingestreut (3-5× pro Keyword statt 1-2×)
  // Dient als SEO-Body-Block direkt nach Hero
  seoLongTailBody: {
    eyebrow: string // z.B. "Was wir konkret drucken"
    h2: string
    paragraphs: string[] // 3-4 Absätze á 80-150 Wörter
  }
  // Pain-Solution
  pains: BranchePain[]
  // Use Cases
  useCases: BrancheUseCase[]
  // Materials für diese Branche
  materialEmpfehlung: {
    name: string
    why: string
  }[]
  // Branchen-typische Messen (Trust + Local-SEO Boost)
  beispielMessen: string[]
  // FAQs (5-7)
  faqs: BrancheFAQ[]
  // Cross-Links zu verwandten Branchen
  relatedBranchen: string[] // andere slugs
}

// ═══════════════════════════════════════════════════════════════════
//   1) MASCHINENBAU
// ═══════════════════════════════════════════════════════════════════
const maschinenbau: Branche = {
  slug: 'maschinenbau',
  metaTitle: 'Maschinenbau Messemodell 3D-Druck ★5,0 — Werkzeugmaschine als Tisch-Exponat in 24h',
  metaDescription:
    '8-Tonnen-CNC-Fräse als 30cm-Modell? 3D-gedruckte Maschinenbau-Messemodelle in 24-48h: maßstabsgetreu, segmentiert, bruchsicher. Made in Austria. ★5,0 (31 Reviews) →',
  eyebrow: 'Branche · Maschinenbau & Werkzeugbau',
  h1: 'Maschinenbau-Messemodell aus dem 3D-Druck — Ihre 8-Tonnen-Maschine als Tisch-Exponat',
  subline:
    'CNC-Fräsen, Drehmaschinen, Bearbeitungszentren, Werkzeugaufbauten — wenn das Original zu groß, zu schwer oder zu wertvoll für den Messestand ist, drucken wir es maßstabsgetreu. 24-48 Stunden, segmentierbar, lackierfähig, bruchsicher.',
  primaryKeyword: 'Maschinenbau Messemodell',
  secondaryKeywords: [
    'Werkzeugmaschine Modell',
    'CNC-Fräse Modell',
    'Drehmaschine Messemodell',
    'Bearbeitungszentrum Modell',
    'Maschinenbau 3D-Druck',
    'Industriemodell Messe',
    'Werkzeugbau Exponat',
    'Maschinenmodell maßstabsgetreu',
    'Präzisionsmaschine Modell',
    'Schnittmodell Maschinenbau',
  ],
  seoLongTailBody: {
    eyebrow: 'Was wir für den Maschinenbau konkret drucken',
    h2: 'Maschinenbau-Modelle aus dem 3D-Druck — Spektrum, Maßstäbe, Anwendungen',
    paragraphs: [
      'Im Maschinenbau-3D-Druck reichen unsere Anfragen vom kompakten Komponentenmodell (Werkzeughalter, Spindelaufnahme, Linearführungs-Segment in Originalgröße) bis zur kompletten Werkzeugmaschine als maßstabsgetreues Messemodell. Eine 5-Achs-Fräse wird typisch im Maßstab 1:7 bis 1:20 gedruckt, ein Bearbeitungszentrum im Maßstab 1:10 bis 1:25, eine konventionelle Drehmaschine im Maßstab 1:5 bis 1:10. Bei einer CNC-Fräse als Tisch-Exponat liegen Modellabmessungen typisch bei 30 bis 80 Zentimetern Länge — handhabbar für jeden Messestand, dabei detailliert genug für Engineering-Diskussion.',
      'Das Schnittmodell Maschinenbau ist eine eigene Disziplin: Wir halbieren das Maschinenmodell entlang einer technischen Trennebene und legen die Innenstruktur frei. Werkstoff-Transport bei einer Drehmaschine, Spindel-Lagerung beim Bearbeitungszentrum, Werkzeug-Schnellwechsel bei der CNC-Fräse — alles als Funktions-Demonstration sichtbar. Ein Schnittmodell-Werkzeugmaschine eignet sich besonders für Engineering-Schulungen und Vertriebs-Tourneen, weil es das verkauft was technische Datenblätter nicht können: die Funktions-Logik selbst.',
      'Werkzeugbau-Exponate sind die dritte Hauptkategorie: Werkstückbeispiele in Roh- und Fertigbearbeitungs-Zustand, montiert auf einem gedruckten Werkstückträger, der die Bearbeitungs-Schritte als physische Sequenz zeigt. Hier kombinieren wir oft hochdetailliertes PLA für die Schau-Werkstücke mit robustem PETG für den Träger. Ein präzises Maschinenmodell maßstabsgetreu in dieser Qualität war noch vor 5 Jahren ausschließlich im Handmodellbau machbar — heute drucken wir es in 14 Tagen Lead-Time.',
      'Typischer Workflow bei einem Maschinenbau-3D-Druck-Projekt: Ihr Konstruktions-CAD aus SolidWorks, Inventor, Creo oder NX kommt per STEP-Datei, ich reduziere die Geometrie-Details auf maßstabs-relevante Ebene (Innen-Schraubverbindungen werden weggelassen, sichtbare Anschlussflansche bleiben), wir planen Segmentierung falls nötig, und produzieren. Bei NDA-Projekten — was bei Werkzeugmaschinen-Innovationen Standard ist — läuft der CAD-Transfer verschlüsselt, die Daten werden nach Lieferung vertraglich gelöscht, kein Cloud-Storage zwischengeschaltet.',
    ],
  },
  pains: [
    {
      problem:
        'Die echte Werkzeugmaschine wiegt 8 Tonnen und passt nicht in den 30 m²-Messestand — geschweige denn in den Aufzug.',
      solution:
        'Wir drucken die Maschine im Maßstab 1:5 bis 1:20. Auf einen Klapptisch reduziert, aber jedes Detail erkennbar — Werkzeugkopf, Linearführung, Spannfutter.',
    },
    {
      problem:
        'Renderbilder am Roll-up sehen aus wie jeder andere Stand. Niemand bleibt stehen.',
      solution:
        'Ein 3D-gedrucktes Modell ist physisch greifbar, segmentierbar, drehbar. Die Lead-Capture-Rate ist nach Erfahrung 3-5× höher als bei reinem 2D-Marketing.',
    },
    {
      problem:
        'Die Originalmaschine zur Messe transportieren kostet €4.000-€15.000 Logistik plus Risiko von Transportschaden.',
      solution:
        'Maschinenmodell drucken kostet einmalig €800-€3.500. Wiederverwendbar für jede Messe. Bei Beschädigung: Nachdruck binnen 48h, da CAD-Datei vorliegt.',
    },
  ],
  useCases: [
    {
      title: 'Werkzeugmaschinen-Komplettmodell',
      description:
        'CNC-Fräsmaschine, Drehmaschine oder 5-Achs-Bearbeitungszentrum maßstabsgetreu. Inkl. detaillierter Werkzeugaufnahme, Spannfutter, Maschinengestell.',
      scaleHint: 'Maßstab 1:5–1:20, Modellgröße 30-80 cm',
      materialHint: 'PLA+ für Detailtreue, PETG für Robustheit',
    },
    {
      title: 'Schnittmodell für Funktionsdarstellung',
      description:
        'Halbiertes Modell mit sichtbaren Innenkomponenten — Spindel, Antrieb, Kühlmittelkanäle. Perfekt für Schulungen und Engineering-Präsentationen.',
      scaleHint: 'Maßstab 1:3–1:5',
      materialHint: 'PLA mit nachbearbeiteter Innenstruktur',
    },
    {
      title: 'Komponentenmodell (Spindel, Werkzeughalter, Steuerung)',
      description:
        'Wenn nur ein Detail erklärt werden soll — z.B. der eigene Spindelantrieb oder die Werkzeugschnellwechselung. Kompakt, mobil, vermarktbar als Werbegeschenk.',
      scaleHint: 'Maßstab 1:1 (Originalgröße) bis 1:2',
      materialHint: 'ABS für lackierfähige Oberfläche',
    },
    {
      title: 'Werkstück-Demo (Vorher/Nachher)',
      description:
        'Komplexes Werkstück im Roh- und Fertigbearbeitungs-Zustand — visualisiert was die Maschine kann, ohne die Maschine zu zeigen.',
      scaleHint: 'Originalgröße',
      materialHint: 'PLA in verschiedenen Farben für Kontrast',
    },
    {
      title: 'Linearführung / Antrieb Cutaway',
      description:
        'Funktionsmuster eigener Komponenten — Kugelumlaufspindel, Linearführung mit Wälzkörpern. Für Vertriebsgespräche zum Anfassen.',
      scaleHint: 'Originalgröße oder 1:2',
      materialHint: 'PETG für Robustheit beim häufigen Anfassen',
    },
  ],
  materialEmpfehlung: [
    {
      name: 'PLA / PLA+',
      why: 'Beste Detailtreue für Präsentations-Modelle. 0,1 mm Schichthöhe möglich. Geringes Gewicht für Transport.',
    },
    {
      name: 'PETG',
      why: 'Mechanisch robust — überlebt 20+ Messen ohne Beschädigung. Lackierfähig in RAL-Firmenfarbe.',
    },
    {
      name: 'ABS',
      why: 'Lackierbar wie Spritzgussteile. Aceton-Dampfglättung möglich für Hochglanz-Look.',
    },
    {
      name: 'PA6-CF (Carbon-PA)',
      why: 'Für funktionsfähige Demo-Komponenten — Linearführungen, Spindeln. Mechanisch belastbar.',
    },
  ],
  beispielMessen: [
    'EMO Hannover (Werkzeugmaschinen-Weltleitmesse)',
    'AMB Stuttgart',
    'INTEC Leipzig',
    'METAV Düsseldorf',
    'TIMTOS Taipei (für Export-orientierte AT-Hersteller)',
    'WIN EURASIA Istanbul',
  ],
  faqs: [
    {
      question: 'Wie lange dauert die Fertigung eines Werkzeugmaschinen-Modells?',
      answer:
        'Standard: 3-5 Werktage nach CAD-Übergabe. Express 24-48h bei Bedarf, gegen Aufpreis von 30%. Komplexe Schnittmodelle mit Innenstruktur können bis zu 7 Werktagen brauchen.',
    },
    {
      question: 'Welche CAD-Formate werden akzeptiert?',
      answer:
        'STEP, IGES, STL, 3MF, sowie native Formate aus SolidWorks, Inventor, Fusion 360, Creo, NX. Bei NDA-Projekten: direkter sicherer Upload, Datenlöschung nach Projektabschluss vertraglich zugesichert.',
    },
    {
      question: 'Kann das Modell zerlegbar gedruckt werden (Schnittansicht)?',
      answer:
        'Ja. Wir konstruieren bei Bedarf Steck- oder Magnet-Verbindungen für demontierbare Sektionen. Häufig genutzt für Schnittansichten, die auf der Messe geöffnet werden, um Innenstruktur zu zeigen.',
    },
    {
      question: 'Wie genau ist die Maßstabstreue?',
      answer:
        'Toleranz typisch ±0,2 mm pro 100 mm Modellgröße. Bei kritischen Funktionsdetails (z.B. Linearführung-Querschnitt) erreichen wir ±0,05 mm in einzelnen Sektionen.',
    },
    {
      question: 'Was kostet ein Maschinenbau-Messemodell?',
      answer:
        'Komponentenmodell: €300-€800. Komplette Werkzeugmaschine maßstabsgetreu mit Detailtiefe: €1.500-€4.500. Schnittmodell mit Innenstruktur: €2.500-€6.000. Festpreisangebot binnen 6 Stunden nach CAD-Upload.',
    },
    {
      question: 'Können Sie Modelle in unserer Firmenfarbe (RAL/Pantone) liefern?',
      answer:
        'Ja, Lackierung in beliebigem RAL- oder Pantone-Farbton ist Standard. Logos werden mittels CMYK-UV-Druck oder lasergravierten Inlays angebracht. Lieferzeit +2-3 Werktage.',
    },
    {
      question: 'Verschwindet das CAD-Modell nach dem Druck?',
      answer:
        'Auf Wunsch ja. Standard: Modelldatei 12 Monate sicher gespeichert für eventuelle Nachdrucke. NDA-Variante: Sofortlöschung nach Lieferung, vertraglich zugesichert.',
    },
  ],
  relatedBranchen: ['anlagenbau', 'energietechnik', 'elektrotechnik'],
}

// ═══════════════════════════════════════════════════════════════════
//   2) SCHIFFBAU & MARINE
// ═══════════════════════════════════════════════════════════════════
const schiffbau: Branche = {
  slug: 'schiffbau',
  metaTitle: 'Schiffbau Messemodell 3D-Druck ★5,0 — Antrieb, Propeller, Yacht maßstabsgetreu',
  metaDescription:
    'Schiffsantrieb, Schraubantrieb, Marine-Komponente zur Messe zeigen — ohne 8-Tonnen-Kran. 3D-Druck Maßstab 1:10–1:50, segmentiert, bruchsicher. ★5,0 (31 Reviews) →',
  eyebrow: 'Branche · Schiffbau, Marine & Werften',
  h1: 'Schiffbau-Messemodell aus dem 3D-Druck — Antriebe, Propeller, Yacht-Visualisierung',
  subline:
    'Schraubantriebe, Pod-Drives, Wasserstrahlantriebe, Yacht-Designs, Marine-Komponenten — wenn das Original im Hafen liegt und nicht auf die SMM, METSTRADE oder Posidonia mitkommt, drucken wir es. Segmentierbar, in Originalfarben, bis 2 m+ Länge.',
  primaryKeyword: 'Schiffbau Messemodell',
  secondaryKeywords: [
    'Schiffsantrieb Modell',
    'Schraubantrieb 3D-Druck',
    'Pod-Drive Modell',
    'Propeller Modell',
    'Yacht Messemodell',
    'Marine Exponat',
    'Schiffsschraube 3D-Druck',
    'Schiffsbug Modell',
    'Werft Messe',
    'Wasserstrahlantrieb Modell',
    'SMM Hamburg Exponat',
  ],
  seoLongTailBody: {
    eyebrow: 'Was wir für Schiffbau & Marine konkret drucken',
    h2: 'Schiffbau-Modelle aus dem 3D-Druck — Antriebe, Vollschiffe, Marine-Komponenten',
    paragraphs: [
      'Ein Schiffsantrieb-Modell ist der häufigste Auftrag aus dieser Branche. Ob Pod-Drive, Voith-Schneider-Propeller, Wasserstrahlantrieb oder konventioneller Schraubantrieb — wir reduzieren das tonnenschwere Original auf einen Maßstab 1:10 bis 1:30. Detaillierte Propeller-Blätter, Anschlussflansche, Gehäuse-Geometrie bleiben dabei naturgetreu. Bei einem Pod-Drive-Modell für die SMM Hamburg oder eine Werft-Messe gehen wir typisch bei 30 bis 80 Zentimetern Modellgröße auf eine Lead-Time von 3-5 Wochen.',
      'Vollschiff-Modelle (Yachten, Frachter, Spezialschiffe) bis 2 Meter Modelllänge segmentieren wir konstruktiv. Eine Yacht-Messemodell-Anfrage für die Boot Düsseldorf oder Monaco Yacht Show kommt typisch im Maßstab 1:50 bis 1:200, mit abnehmbaren Decks für Innenraum-Demonstration. Hochwertige Marine-RAL-Lackierung simuliert die echte Schiffsfarbe so präzise, dass das Modell aus 1 m Distanz nicht von Gussteilen unterscheidbar ist. Werften-Refit-Designs bekommen oft den vollen NDA-Workflow, weil sie hochsensible Yacht-Innovationen zeigen.',
      'Eine Schiffsschraube als 3D-Druck-Exponat in Original-Größe ist machbar bis ca. 60 cm Durchmesser. Das ist die häufigste Anfrage von Antriebs-Herstellern, die ihr neues Blatt-Design auf Engineering-Konferenzen zeigen wollen. PETG-Carbon-Filament gibt der gedruckten Schiffsschraube eine realistische maritime Anmutung. Ein Schraubantrieb-3D-Druck-Schnittmodell mit halbierter Getriebestufe zeigt Live am Stand, wie die Welle vom Motor zur Schraube läuft — perfekte Vertriebs-Bühne für komplexe technische Erklärungen.',
      'Marine-Exponat-Projekte sind oft Werften-Akquisition-Tools. Mini-Schiffsmodelle 15-25 cm dienen als Werbegeschenke für Top-Leads — eine Klein-Serie von 25-100 Stück mit erhabenem 3D-Logo, robust verpackt in Brand-Hüllen. Kosten ab €40 pro Stück bei 50er-Charge. Werften-Kunden nutzen diese als hochwertige Visitenkarten-Ersatz beim Refit-Pitch — und bekommen oft Folge-Anfragen, weil das Modell physisch beim Engineer auf dem Tisch landet, während die Brochure im Stapel verschwindet.',
    ],
  },
  pains: [
    {
      problem:
        'Eine Schiffsschraube wiegt 1-30 Tonnen. Sie auf die SMM Hamburg, Posidonia Athen oder Boot Düsseldorf zu transportieren ist logistisch und finanziell ein Albtraum.',
      solution:
        'Maßstab 1:10 bis 1:50. Aus dem Original-CAD von Schottel, Voith Schneider, Caterpillar oder anderen Antriebsherstellern in 4-7 Tagen gedruckt. Lackiert in Originalfarbe.',
    },
    {
      problem:
        'Yacht-Designs in 2D-Plänen verkaufen sich nicht. Käufer wollen das Schiff greifen, drehen, Linien fühlen.',
      solution:
        'Vollständige Yacht-Modelle bis 2 m Länge, segmentiert mit unsichtbaren Magnetverbindungen. Decks abnehmbar für Innenraum-Demo. Wiederverwendbar für 5+ Messen.',
    },
    {
      problem:
        'Bei Werft-Akquisition (Refit-Projekte) braucht der Kunde Material zum Mitnehmen — Brochures vergisst er, ein Modell behält er.',
      solution:
        'Mini-Modelle 15-25 cm als Werbegeschenk für Top-Leads. Stückpreis ab €40 in Klein-Serie 25-100 Stück. Markant gebrandet, 3D-Logo erhaben.',
    },
  ],
  useCases: [
    {
      title: 'Schiffsantrieb Komplettmodell',
      description:
        'Pod-Drive, Schottel-Antrieb, Voith-Schneider-Propeller oder Wasserstrahlantrieb maßstabsgetreu. Mit detaillierten Propeller-Blättern, Gehäuse, Anschlussflanschen.',
      scaleHint: 'Maßstab 1:10–1:30, Modellgröße 30-80 cm',
      materialHint: 'PETG für Robustheit + maritime Anmutung',
    },
    {
      title: 'Schraubantrieb-Schnittmodell',
      description:
        'Halbierter Antrieb mit sichtbarer Getriebestufe, Welle, Lagerung. Ideal für technische Vertriebsgespräche und Schulungen.',
      scaleHint: 'Maßstab 1:5–1:10',
      materialHint: 'PLA für Detailtreue, lackiert in 2 Kontrastfarben',
    },
    {
      title: 'Vollschiff-Modell (Yacht / Frachter / Spezialschiff)',
      description:
        'Komplettes Schiff bis 2 m Modelllänge. Rumpf, Aufbauten, Decks abnehmbar für Innenraum-Visualisierung. Speziell für Boot Düsseldorf, Monaco Yacht Show.',
      scaleHint: 'Maßstab 1:50–1:200 je nach Schiffsgröße',
      materialHint: 'PLA + lackiert mit Marine-RAL-Farben',
    },
    {
      title: 'Bug- oder Heck-Sektion (Detail-Modell)',
      description:
        'Wenn nur ein Schiffsdetail relevant ist — Wulstbug, Heckpropeller, Aufbauten-Design — als Teilmodell für Engineering-Diskussion.',
      scaleHint: 'Maßstab 1:25–1:50',
      materialHint: 'ABS für lackierfähigen Hochglanz',
    },
    {
      title: 'Propeller / Schiffsschraube Original-Größe',
      description:
        'Bis ca. 60 cm Durchmesser in Originalgröße druckbar. Für Vertriebsmuster, Schulungen, Konferenz-Exponate.',
      scaleHint: 'Maßstab 1:1 bei kleinen Propellern',
      materialHint: 'PETG-Carbon für realistische Anmutung',
    },
  ],
  materialEmpfehlung: [
    {
      name: 'PETG',
      why: 'Maritime-Look-and-Feel, robust beim Mehrfacheinsatz auf Messen, UV-stabil für Outdoor-Demo.',
    },
    {
      name: 'PLA + Marine-RAL-Lackierung',
      why: 'Beste Detailtreue für Yacht-Designs. RAL-Lackierung simuliert echte Schiffsfarbe.',
    },
    {
      name: 'ABS',
      why: 'Spritzguss-ähnliche Oberfläche durch Aceton-Dampfglättung. Premium-Look für High-End-Yachten.',
    },
  ],
  beispielMessen: [
    'SMM Hamburg (führende Schiffbau-Messe weltweit)',
    'METSTRADE Amsterdam',
    'Posidonia Athen',
    'Nor-Shipping Oslo',
    'Boot Düsseldorf (Yacht-Endkunden)',
    'Monaco Yacht Show',
    'Marintec China',
    'EUROPORT Rotterdam',
  ],
  faqs: [
    {
      question: 'Können Sie aus geheimen Werft-CADs (NDA) drucken?',
      answer:
        'Ja. NDA-Variante mit vertraglicher Datenlöschung nach Lieferung, geschützter Datentransfer (verschlüsseltes Upload, keine Cloud-Speicherung). Häufig genutzt für Refit-Designs und nicht öffentliche Yacht-Projekte.',
    },
    {
      question: 'Wie maritim wirkt der 3D-Druck wirklich? Sieht man die Schichten?',
      answer:
        'Standard-Druck mit 0,1mm Schichthöhe + manuelle Nachbearbeitung (Schleifen + Grundierung + Lackierung) ergibt eine Oberfläche, die von Gussteilen visuell kaum unterscheidbar ist. Für Premium-Yacht-Demos zusätzlich Aceton-Dampfglättung möglich.',
    },
    {
      question: 'Bis zu welcher Größe können Sie Schiffsmodelle drucken?',
      answer:
        'Einzelne Druckbett-Größe bis 600x600x600mm. Größere Modelle werden segmentiert gedruckt und unsichtbar verbunden — bis 2 m Modelllänge bei Yacht-Vollmodellen problemlos realisierbar, theoretisch unbegrenzt.',
    },
    {
      question: 'Werden Propeller-Blätter exakt nach Original-CAD gedruckt?',
      answer:
        'Ja. Komplexe Freiformflächen wie Voith-Schneider-Blätter oder verstellbare Schiffsschrauben sind eine Stärke des FDM-Drucks. Toleranz ±0,1mm pro Blatt.',
    },
    {
      question: 'Was kostet ein Schiffbau-Messemodell?',
      answer:
        'Mini-Modell Antrieb 15-25cm: €200-€500. Detail-Antriebsmodell mit Schnittansicht: €1.200-€3.500. Vollschiff-Yacht-Modell 1-2m segmentiert: €3.500-€12.000. Werbegeschenk-Mini-Serie 25-100 Stück: ab €40/Stück.',
    },
    {
      question: 'Liefern Sie auch zur Messe (z.B. SMM Hamburg) direkt?',
      answer:
        'Ja. Direktversand an Messeadresse, Halle und Stand-Nummer. Versand erfolgt 5-7 Tage vor Messebeginn. Auf Wunsch persönliche Anlieferung in AT/DE/CH gegen Reisepauschale.',
    },
    {
      question: 'Wie segmentieren Sie ein 2-Meter-Schiffsmodell so, dass die Stöße unsichtbar bleiben?',
      answer:
        'Konstruierte Trennlinien entlang natürlicher Schiffsmerkmale (z.B. Plankengänge), Magnet- oder Steckverbindungen im Inneren, Spachtelung und Lackierung der Außenkanten. Auf 1m Distanz sind die Stöße nicht sichtbar.',
    },
  ],
  relatedBranchen: ['energietechnik', 'maschinenbau', 'anlagenbau'],
}

// ═══════════════════════════════════════════════════════════════════
//   3) ENERGIETECHNIK & ERNEUERBARE
// ═══════════════════════════════════════════════════════════════════
const energietechnik: Branche = {
  slug: 'energietechnik',
  metaTitle: 'Energietechnik Messemodell 3D-Druck ★5,0 — Windturbine, Trafo, Kraftwerk-Modell',
  metaDescription:
    'Windturbine, PV-Anlage, Trafostation, Kraftwerks-Komponente als Messemodell. 3D-Druck maßstabsgetreu in 24-48h. ★5,0 (31 Reviews). STL hochladen →',
  eyebrow: 'Branche · Energietechnik & Erneuerbare',
  h1: 'Energietechnik-Messemodell aus dem 3D-Druck — Windturbinen, Trafostationen, Kraftwerks-Komponenten',
  subline:
    'Windkraftanlagen, PV-Strukturen, Trafostationen, Generatoren, Schaltanlagen — Anlagen die meist gigantisch oder verteilt im Feld stehen, brauchen für Messen und Kundengespräche kompakte, greifbare Modelle. Wir drucken sie maßstabsgetreu in 24-48h.',
  primaryKeyword: 'Energietechnik Messemodell',
  secondaryKeywords: [
    'Windturbine Modell',
    'Windkraftanlage 3D-Druck',
    'Trafostation Modell',
    'Photovoltaik Modell',
    'PV-Anlage Modell',
    'Generator Modell',
    'Schaltanlage Modell',
    'Wasserkraftwerk Modell',
    'Solar Modell',
    'Energiespeicher Modell',
    'Netzausbau Visualisierung',
  ],
  seoLongTailBody: {
    eyebrow: 'Was wir für Energietechnik konkret drucken',
    h2: 'Energietechnik-Modelle aus dem 3D-Druck — Wind, Solar, Schaltanlagen, Kraftwerke',
    paragraphs: [
      'Eine Windturbine-Modell-Anfrage erreicht uns typisch im Vorfeld einer Messe wie der HUSUM Wind oder WindEnergy Hamburg. Wir drucken Windkraftanlagen im Maßstab 1:50 bis 1:200 — eine moderne 150-Meter-Anlage wird damit zur 1-1,5 m hohen Tisch-Skulptur mit drehbaren Rotorblättern und abnehmbarem Maschinenhaus. Der Windkraftanlage-3D-Druck zeigt den Generator, das Getriebe, die Bremse als greifbare Innenstruktur — was am Stand mehr verkauft als jede Renderbild-Animation. PETG ist hier das Material der Wahl wegen UV-Stabilität.',
      'Ein Photovoltaik-Modell oder PV-Anlage-Modell für Bürger-Informationsveranstaltungen verändert die Akzeptanz-Dynamik bei Genehmigungs-Verfahren. Wir drucken Solarpark-Landschaftsmodelle im Maßstab 1:200 bis 1:1000 mit topographisch korrektem Untergrund, einzelne PV-Module mit verspiegelter PET-Folie, integrierte Trafostationen und Wechselrichter-Standorte. Ein Solar-Modell dieser Qualität reduziert nachweislich Bürgerwiderstand, weil die geplante Anlage erstmals physisch erfahrbar wird statt nur als CAD-Render auf der Leinwand zu erscheinen.',
      'Bei Trafostation-Modellen und Schaltanlage-Modellen geht es um eine andere Liga: Schulungsmaterial und Vertriebs-Demos für EVUs und Stadtwerke. Wir drucken MV-Schaltanlagen im Maßstab 1:5 bis 1:25 mit sichtbaren Sammelschienen, Leistungsschaltern, Stromwandlern. Eine Trafostation-Modell-Schnittansicht zeigt Live wie der Schaltvorgang abläuft — auf Drehkurbel betätigt, ohne Hochspannungs-Risiko. ABS in RAL 7035 (Standard MV-Lichtgrau) ist das Material-Setup, mit lasergravierten Typenschildern als authentischem Detail.',
      'Ein Wasserkraftwerk-Modell oder Generator-Modell mit Turbinen-Sektion ist die anspruchsvollste Kategorie. Hier kombinieren wir PLA-Detailteile (Leitapparat, Laufrad) mit klaren Acryl-Inserts für sichtbare Strömungsführung — manchmal beleuchtet mit Mini-LED zur Visualisierung. Ein Energiespeicher-Modell (BESS-Container-Stack) wird typisch im Maßstab 1:10 bis 1:25 gedruckt, mit aufklappbarer Frontwand für Modul-Innenansicht. Beide Modell-Typen sind häufige Anfragen für E-world Essen und Power-Gen Europe, wo Netzausbau-Visualisierung ein zentrales Thema ist.',
    ],
  },
  pains: [
    {
      problem:
        'Eine Windturbine ist 150-280m hoch. Ein Wasserkraftwerk hat Generatoren von 8m Durchmesser. Solche Anlagen lassen sich nicht zur HUSUM Wind oder E-world transportieren.',
      solution:
        'Maßstab 1:50 bis 1:200. Windturbine 1,5m hoch, drehbare Rotorblätter, abnehmbares Maschinenhaus für Antriebs-Demonstration. Wasserkraftwerk-Sektion 50-80 cm.',
    },
    {
      problem:
        'PV-Anlagen sehen auf Visualisierungen alle gleich aus — Behördentermine und Bürger-Infoveranstaltungen brauchen echte Modelle für Akzeptanz.',
      solution:
        'Maßstabsgetreue Landschaftsmodelle mit eingebetteten PV-Strukturen, Trafostationen, Wechselrichtern. Skala 1:200-1:500. Reduziert Bürgerwiderstand bei Genehmigungsverfahren.',
    },
    {
      problem:
        'Trafostationen und Schaltanlagen sind im Original durch Sicherheits-Vorgaben unzugänglich — Schulung und Vertrieb arbeiten mit theoretischen Plänen.',
      solution:
        'Schnittmodelle mit sichtbaren Schaltgassen, Sammelschienen, Leistungsschaltern. Greifbar für Vertriebsgespräche und Schulungen ohne Sicherheitsrisiko.',
    },
  ],
  useCases: [
    {
      title: 'Windturbine maßstabsgetreu',
      description:
        'Komplette Windkraftanlage 1-1,8m hoch. Drehbare Rotorblätter, abnehmbares Maschinenhaus mit sichtbarer Antriebs-Sektion (Generator, Getriebe, Bremse).',
      scaleHint: 'Maßstab 1:50–1:200',
      materialHint: 'PETG für UV-Stabilität, weiß lackiert',
    },
    {
      title: 'PV-Landschaftsmodell',
      description:
        'Solarpark oder Aufdach-Anlage mit topographisch korrektem Untergrund. Module einzeln gedruckt, Reflexbeschichtung möglich. Für Genehmigungs-Termine.',
      scaleHint: 'Maßstab 1:200–1:1000',
      materialHint: 'PLA mit verspiegelter PET-Folie als Modul-Oberfläche',
    },
    {
      title: 'Trafostation Schnittmodell',
      description:
        'Mittelspannungs-Schaltanlage mit sichtbaren Leistungsschaltern, Stromwandlern, Sammelschienen. Schulungs-Klassiker für EVUs und Stadtwerke.',
      scaleHint: 'Maßstab 1:10–1:25',
      materialHint: 'ABS für Lackierfähigkeit, RAL 7035 (Lichtgrau standard)',
    },
    {
      title: 'Wasserkraftwerk Sektion',
      description:
        'Turbinen-Sektion mit Leitapparat, Laufrad, Saugrohr. Halbiert für Schnittansicht, beleuchtet mit Mini-LED zur Strömungs-Visualisierung.',
      scaleHint: 'Maßstab 1:25–1:75',
      materialHint: 'PLA mit Klarteilen für sichtbare Innenführung',
    },
    {
      title: 'Energiespeicher / Batteriecontainer',
      description:
        'BESS (Battery Energy Storage System) Container-Stack maßstabsgetreu. Mit aufklappbarer Frontwand für Modul-Innenansicht.',
      scaleHint: 'Maßstab 1:10–1:25',
      materialHint: 'PETG für Robustheit',
    },
  ],
  materialEmpfehlung: [
    {
      name: 'PETG (UV-stabil)',
      why: 'Erstwahl für Outdoor-Demonstratoren — bleibt jahrelang formstabil und UV-resistent.',
    },
    {
      name: 'PLA + Lackierung',
      why: 'Beste Detailtreue für Indoor-Messemodelle. Lackierbar in RAL-Anlagenfarben.',
    },
    {
      name: 'ASA',
      why: 'Premium-UV-Beständigkeit für Außen-Ausstellung. Verarbeitung wie ABS.',
    },
  ],
  beispielMessen: [
    'HUSUM Wind',
    'WindEnergy Hamburg',
    'E-world Essen',
    'Intersolar München',
    'Power-Gen Europe',
    'Hannover Messe (Energy)',
    'Smarter E Europe',
  ],
  faqs: [
    {
      question: 'Können die Rotorblätter einer Windturbine drehbar gedruckt werden?',
      answer:
        'Ja. Lager mit Kugel- oder Gleitlager-Aufnahme werden mitgedruckt. Bei aktiver Demo: Mini-Servo-Motor (12V) im Maschinenhaus zur Demonstration der Rotation.',
    },
    {
      question: 'Wie realistisch sehen PV-Module im Modell aus?',
      answer:
        'Reflexbeschichtung mit verspiegelter PET-Folie auf gedrucktem Modul-Träger. Aus 1m Distanz nicht von echten Modulen zu unterscheiden. Auch in monokristalliner oder polykristalliner Optik.',
    },
    {
      question: 'Sind die Modelle Outdoor-tauglich (Bürger-Infoveranstaltungen)?',
      answer:
        'Mit PETG oder ASA als Material und UV-stabiler Lackierung: ja, monatelang stabil. Standard-PLA nur für Indoor-Einsatz.',
    },
    {
      question: 'Können wir Logos und Anlagen-Branding ins Modell integrieren?',
      answer:
        'Ja. UV-Druck direkt auf der Modelloberfläche, lasergravierte Metallschilder oder erhabene 3D-Beschriftung — je nach Effektwunsch und Größe.',
    },
    {
      question: 'Was kostet ein Windturbinen-Messemodell mit drehbaren Rotorblättern?',
      answer:
        '1m-Höhen-Modell mit drehbaren, lackierten Rotorblättern und abnehmbarem Maschinenhaus: €1.800-€3.500. Mit aktiver Servo-Demonstration: +€400-€600. Festpreisangebot in 6h.',
    },
    {
      question: 'Können Sie auch Innen-Komponenten (Generator, Getriebe) detailliert drucken?',
      answer:
        'Ja. Funktionsschnitt-Modelle mit lackierten Innenteilen sind eine unserer Spezialitäten. Auf Wunsch mit funktional korrekter Wellenkinematik.',
    },
  ],
  relatedBranchen: ['anlagenbau', 'maschinenbau', 'elektrotechnik'],
}

// ═══════════════════════════════════════════════════════════════════
//   4) AUTOMOTIVE & MOBILITY
// ═══════════════════════════════════════════════════════════════════
const automotive: Branche = {
  slug: 'automotive',
  metaTitle: 'Automotive Messemodell 3D-Druck ★5,0 — Fahrzeugbauteil, Mobility-Konzept in 24h',
  metaDescription:
    'Fahrzeugbauteil, E-Antrieb, Karosseriedetail, Mobility-Studie als Messemodell. 3D-Druck Maßstab 1:1–1:10, lackierbar. ★5,0 (31 Reviews) →',
  eyebrow: 'Branche · Automotive & Mobility',
  h1: 'Automotive-Messemodell aus dem 3D-Druck — Bauteile, E-Antriebe, Mobility-Konzepte',
  subline:
    'OEM-Zulieferer, Tier-1-Hersteller, Mobility-Startups — von Karosseriedetails über E-Antriebs-Komponenten bis zu Showcase-Modellen neuer Mobilitätskonzepte. 3D-Druck reduziert Werkzeugkosten um 95% und liefert in 24-48h.',
  primaryKeyword: 'Automotive Messemodell',
  secondaryKeywords: [
    'Fahrzeugbauteil Modell',
    'Karosserie 3D-Druck',
    'E-Antrieb Modell',
    'Mobility Konzept Modell',
    'Auto Messemodell',
    'IAA Exponat',
    'Showcar Komponente',
    'Innenraum Modell',
    'Konzeptfahrzeug Modell',
  ],
  seoLongTailBody: {
    eyebrow: 'Was wir für Automotive & Mobility konkret drucken',
    h2: 'Automotive-Modelle aus dem 3D-Druck — Bauteile, E-Antriebe, Konzeptfahrzeuge',
    paragraphs: [
      'Ein Fahrzeugbauteil-Modell für die IAA Mobility oder Automechanika ist die typische Tier-1-Zulieferer-Anfrage. Tür-Sektionen, Heckklappen, Stoßfänger-Ausschnitte mit eingebauter Zulieferer-Komponente — das Karosserie-3D-Druck-Modell lackiert in OEM-Originalfarbe (BMW Alpine White, Audi Ibis White, Mercedes-Benz Polarweiß) macht aus dem Schraubenladen-Auftritt eine Storytelling-Bühne. Wir treffen den Original-Farbcode über RAL/Pantone/OEM-Spezifikation. 2K-Profi-Lackierung mit Klarlack-Versiegelung ergibt Show-Quality-Finish.',
      'Das E-Antrieb-Modell zeigt was unter der Designhaube versteckt ist und kein Endkunde ohne Cutaway versteht: Permanent-Magnet-Motor, Inverter, Differential, Wickelköpfe. Ein E-Achse-Schnittmodell im Maßstab 1:1 oder 1:2 mit lackierten Kontrastflächen erklärt die Funktion in 30 Sekunden — was am Stand sonst eine 20-minütige Erläuterung mit Schnittzeichnungen wäre. Diese Auto-Messemodelle-Kategorie wächst stark mit der E-Mobility-Welle.',
      'Konzeptfahrzeug-Modelle für die IAA, Geneva Motor Show oder Auto Shanghai sind unsere Premium-Liga. Statt €50.000-€200.000 für ein Werkzeugbau-Modell und 8-12 Wochen Lead-Time liefern wir ein Show-Quality-Konzeptfahrzeug aus dem 3D-Druck in 1-2 Wochen für €3.000-€12.000. Modell-Maßstab typisch 1:5 bis 1:10, mit drehbaren Rädern, magnetischen Türen, sichtbarem Innenraum durch Klarteile. Diese Mobility-Konzept-Modelle sind oft mit NDA verbunden, weil sie Vorab-Designs zeigen.',
      'Innenraum-Modelle (Cockpit, Sitzanordnung, HMI-Display-Position) sind die dritte Sub-Kategorie. Sie werden für OEM-Materialien-Konzept-Diskussionen verwendet — Sitze, Dashboard, Interieur-Komponenten im Maßstab 1:5 bis 1:10, oft mit textilbespannten Sitzflächen für realistische Anmutung. Funktionsmuster-Bauteile in Original-Größe für DV/PV-Tests fertigen wir in PA6-CF (Carbon-Polyamid), das mechanisch nahe Aluminium kommt. Eine Showcar-Komponente in dieser Qualität entspricht zu 95% dem späteren Serienteil.',
    ],
  },
  pains: [
    {
      problem:
        'Tier-1-Zulieferer können auf IAA und Automechanika nicht das ganze Auto zeigen — nur ihre Komponente. Aber 100 Bauteile in Vitrinen sehen aus wie ein Schraubenladen.',
      solution:
        'Storytelling-Modell: Die Komponente in einem Karosserie-Ausschnitt eingebettet, lackiert in OEM-Farbe. Sofort verständlich, was wo verbaut wird.',
    },
    {
      problem:
        'E-Mobility-Antriebe sind unter Designhauben versteckt — Endkunden verstehen den Mehrwert nicht.',
      solution:
        'Cutaway-Modelle von E-Achsen mit sichtbarem Motor, Inverter, Getriebe. Lackiert in Kontrastfarben für Funktions-Demo.',
    },
    {
      problem:
        'Konzeptfahrzeuge in Werkzeugbau-Qualität kosten €50.000-€200.000 und brauchen 8-12 Wochen.',
      solution:
        'Show-Quality Konzeptmodell aus dem 3D-Druck: 1-2 Wochen, €3.000-€12.000. Lackiert wie ein Showcar.',
    },
  ],
  useCases: [
    {
      title: 'Karosserie-Detailmodell mit eingebetteter Komponente',
      description:
        'Tür, Heckklappe oder Stoßfänger-Sektion lackiert mit OEM-Farbe, deine Zulieferer-Komponente sichtbar verbaut — perfekte Storytelling-Bühne für die IAA.',
      scaleHint: 'Maßstab 1:1 bis 1:3',
      materialHint: 'ABS mit Aceton-Glättung + 2K-Lackierung',
    },
    {
      title: 'E-Antrieb Cutaway',
      description:
        'E-Achse halbiert mit sichtbarem Permanent-Magnet-Motor, Inverter-Pack, Differential. Kontrast-Lackierung für Funktions-Erklärung.',
      scaleHint: 'Maßstab 1:1 bis 1:2',
      materialHint: 'PLA-Detailteile + lackierte Schauflächen',
    },
    {
      title: 'Konzeptfahrzeug-Modell (Sportwagen, Mobility-Studie)',
      description:
        'Komplettes Fahrzeug in Show-Quality. Lackiert wie ein 1:1-Showcar, Innenraum durch Klarteile sichtbar, Räder drehbar.',
      scaleHint: 'Maßstab 1:5–1:10',
      materialHint: 'PLA + Profi-Lackierung + Klar-Acryl-Scheiben',
    },
    {
      title: 'Innenraum-Modell mit Sitz-Elemente',
      description:
        'Cockpit oder Heck-Innenraum maßstäblich. Sitze, Dashboard, HMI-Display-Position. Für Materialien-Konzept-Diskussionen mit OEMs.',
      scaleHint: 'Maßstab 1:5–1:10',
      materialHint: 'PLA-Komponenten + textilbespannte Sitzflächen',
    },
    {
      title: 'Funktionsmuster Bauteil (Original-Größe)',
      description:
        'Original-große Funktionsmuster für DV/PV-Tests, Design-Reviews, OEM-Abnahmen. Auch in PA-Carbon für funktionsfähige Belastungstests.',
      scaleHint: 'Maßstab 1:1',
      materialHint: 'PA6-CF für Funktion, ABS für Optik',
    },
  ],
  materialEmpfehlung: [
    {
      name: 'ABS + Aceton-Glättung',
      why: 'Spritzguss-ähnliche Oberfläche — Standard für Automotive-Show-Quality.',
    },
    {
      name: 'PA6-CF (Carbon-PA)',
      why: 'Für funktionsfähige Bauteile mit mechanischer Belastbarkeit nahe Aluminium.',
    },
    {
      name: 'PLA + 2K-Profi-Lackierung',
      why: 'Beste Detailtreue, lackiert in OEM-Originalfarbe nicht von echtem Teil unterscheidbar.',
    },
  ],
  beispielMessen: [
    'IAA Mobility München',
    'Automechanika Frankfurt',
    'CES Las Vegas (Mobility)',
    'Geneva Motor Show',
    'Auto Shanghai',
    'EVS (Electric Vehicle Symposium)',
  ],
  faqs: [
    {
      question: 'Können Sie Original-OEM-Farben (z.B. BMW Alpine White, Audi Ibis White) treffen?',
      answer:
        'Ja. Wir arbeiten mit RAL- und Pantone-Codes sowie OEM-Original-Farbcodes. 2K-Profi-Lackierung mit Klarlack-Versiegelung für Show-Quality-Finish.',
    },
    {
      question: 'Sind die gedruckten Bauteile crashfähig oder nur visuell?',
      answer:
        'Standard ist visuell. Für funktionsfähige Bauteile (DV/PV-Tests) verwenden wir PA6-CF (Carbon-Polyamid), das mechanisch nahe Aluminium kommt — Belastbarkeit auf Anfrage präzise spezifizierbar.',
    },
    {
      question: 'Wie schnell kann ein Konzeptmodell für die IAA fertig sein?',
      answer:
        '4-Wochen-Vorlauf: Show-Quality-Konzeptmodell mit Lackierung + Inneneinrichtung möglich. Express 7-10 Tage: einfachere Modelle. Bei <7 Tagen: Kontakt für Verfügbarkeits-Check.',
    },
    {
      question: 'NDA bei vorab-Konzeptfahrzeugen?',
      answer:
        'Standard. NDA-Vertrag mit Datenlöschung nach Lieferung, segregierter Werkstattbereich für sensible Projekte. Häufig genutzt für IAA-Vorbereitungen.',
    },
    {
      question: 'Was kostet ein Automotive-Konzeptmodell?',
      answer:
        'Detailmodell Karosserie-Sektion: €600-€2.000. E-Antrieb-Cutaway 1:1: €2.500-€5.500. Komplettes Showcar-Konzeptmodell 1:5 lackiert: €3.500-€12.000.',
    },
    {
      question: 'Können Räder, Türen und Heckklappen funktional beweglich sein?',
      answer:
        'Ja. Magnet-Verbindungen für Türen, Lager für drehbare Räder, ggf. Servo-Motoren für aktive Demonstration auf Knopfdruck.',
    },
  ],
  relatedBranchen: ['maschinenbau', 'elektrotechnik', 'anlagenbau'],
}

// ═══════════════════════════════════════════════════════════════════
//   5) ANLAGENBAU & VERFAHRENSTECHNIK
// ═══════════════════════════════════════════════════════════════════
const anlagenbau: Branche = {
  slug: 'anlagenbau',
  metaTitle: 'Anlagenbau Messemodell 3D-Druck ★5,0 — Pumpe, Ventil, Reaktor maßstabsgetreu',
  metaDescription:
    'Pumpen, Ventile, Reaktoren, Verfahrenstechnik-Anlagen als Messemodell. 3D-Druck Maßstab 1:5–1:50, segmentierbar, lackierbar. ★5,0 (31 Reviews) →',
  eyebrow: 'Branche · Anlagenbau & Verfahrenstechnik',
  h1: 'Anlagenbau-Messemodell aus dem 3D-Druck — Pumpen, Ventile, Reaktoren, Komplettanlagen',
  subline:
    'Verfahrenstechnik, Chemie-Anlagen, Pharma, Lebensmittelproduktion — wenn die Anlage 20m hoch und 50m breit ist, drucken wir sie auf 1m. Mit Rohrleitungen, Pumpen, Reaktoren in Originalfarben. Für ACHEMA, Pharma-EXPO, Anuga FoodTec.',
  primaryKeyword: 'Anlagenbau Messemodell',
  secondaryKeywords: [
    'Pumpe Modell',
    'Ventil Modell',
    'Reaktor Modell',
    'Verfahrenstechnik Messe',
    'Chemieanlage Modell',
    'Pharmaanlage Modell',
    'Prozessanlage Visualisierung',
    'Apparatemodell',
    'Mischer Modell',
    'Wärmetauscher Modell',
    'Behälterbau Modell',
  ],
  seoLongTailBody: {
    eyebrow: 'Was wir für Anlagenbau & Verfahrenstechnik konkret drucken',
    h2: 'Anlagenbau-Modelle aus dem 3D-Druck — Pumpen, Ventile, Komplettanlagen',
    paragraphs: [
      'Ein Pumpe-Modell als Schnittansicht ist der häufigste Auftrag in dieser Branche — typisch Kreiselpumpe, Membranpumpe oder Dosierpumpe halbiert im Maßstab 1:2 bis 1:5. Das Laufrad ist drehbar gelagert, der Antrieb mit Drehkurbel betätigt, Welle und Lagerung sichtbar in Kontrast-Lackierung. Diese Pumpen-Schnittmodelle sind die Standard-Vertriebs-Muster für Pumpenbauer aus Österreich und Bayern, die auf der ACHEMA Frankfurt oder Powtech Nürnberg konkurrenzfähig auftreten müssen. PETG für mechanische Robustheit beim häufigen Anfassen, PLA für höchste Detailtreue.',
      'Ventil-Modelle und Apparatemodelle für Vertriebs-Demos drucken wir mit beweglichem Verschluss-Mechanismus. Ob Schieber-, Klappen- oder Kugelventil — Mini-Servo oder manueller Drehknauf macht die Funktion am Stand greifbar. Originalgröße bis Maßstab 1:3 ist die häufige Kombination. Bei sehr komplexen Apparate-Anfragen (Mischer, Rührwerksbehälter, Spezialventile) gehen wir bis Original-Größe, wenn das Bauteil unter 60 cm Kantenlänge bleibt.',
      'Komplettanlagen-Modelle für die Verfahrenstechnik-Messe sind die anspruchsvollste Kategorie: eine ganze Chemieanlage-Modell- oder Pharmaanlage-Modell-Sektion im Maßstab 1:25 bis 1:50 mit allen Hauptkomponenten farbkodiert nach DIN 2403 (Wasser grün, Dampf rot, Erdgas gelb). Behälter, Rohrleitungen, Pumpen, Wärmetauscher, Reaktoren — alles maßstabsgetreu. Eine solche Prozessanlage-Visualisierung kostet €3.000-€10.000, dauert 4-6 Wochen Lead-Time, ersetzt aber 2D-PFD-Schemas die niemand auf der Messe versteht.',
      'Wärmetauscher-Modelle und Reaktor-Modelle drucken wir als Schnittansicht mit sichtbarem Rohrbündel oder Heizmantel. ABS mit Aceton-Glättung ergibt eine spritzgussähnliche Oberfläche, die für Hochglanz-Pharma-Pitches passt. Behälterbau-Modelle bekommen oft Chrom-Lackierung oder echte Galvanisierung für die Edelstahl-Anmutung — gerade bei Hygienic-Design-Anlagen für Pharma- und Lebensmittel-Kunden ist diese Optik kritisch für die Glaubwürdigkeit. Bei Investor-Pitches und Tendering-Vorlagen liefern wir auch Premium-Versionen mit beleuchteten Sektionen.',
    ],
  },
  pains: [
    {
      problem:
        'Eine Chemie-Anlage besteht aus 100+ Komponenten verteilt über 3 Stockwerke. Auf der ACHEMA zeigen Sie davon nichts — nur 2D-PFDs am Bildschirm.',
      solution:
        'Komplettanlagen-Modell 1:25 bis 1:50 mit allen Hauptkomponenten farbkodiert (Pumpen blau, Wärmetauscher orange, Reaktoren grün). Sofort verständlich, was wo passiert.',
    },
    {
      problem:
        'Einzelkomponenten-Hersteller (Pumpen, Ventile, Wärmetauscher) konkurrieren auf Messen mit ähnlichen Specs-Tabellen — niemand erinnert sich an die Specs.',
      solution:
        'Schnittmodell der eigenen Pumpe/Ventil mit sichtbarer Innenstruktur. Mechanisch betätigbar. Bleibt im Gedächtnis und am Tisch des Engineers.',
    },
    {
      problem:
        'Tendering für Großprojekte braucht oft physische Modelle für Investor-Pitches und Behörden-Termine.',
      solution:
        'Premium-Anlagenmodell in Show-Quality. Lackiert in Kundenfarbe, beleuchtet, ggf. mit Mini-LED-Strömungs-Visualisierung.',
    },
  ],
  useCases: [
    {
      title: 'Pumpen-Schnittmodell',
      description:
        'Kreiselpumpe, Membranpumpe, Dosierpumpe halbiert mit sichtbarem Laufrad, Welle, Lagerung. Antrieb drehbar. Standard-Verkaufsmuster.',
      scaleHint: 'Maßstab 1:2 bis 1:5',
      materialHint: 'PLA für Detailtreue, lackiert in 2 Kontrastfarben',
    },
    {
      title: 'Ventil-Funktionsmodell',
      description:
        'Schieber-, Klappen-, Kugelventil mit beweglichem Verschluss. Betätigung durch Mini-Servo oder manuell — perfekte Vertriebsmuster.',
      scaleHint: 'Originalgröße bis 1:3',
      materialHint: 'PETG für Robustheit beim häufigen Öffnen/Schließen',
    },
    {
      title: 'Reaktor / Wärmetauscher Sektionsmodell',
      description:
        'Rohrbündelwärmetauscher mit sichtbarer Rohrführung, Reaktor mit Rührwerk und Heizmantel. Halbiert für Innenraum-Demonstration.',
      scaleHint: 'Maßstab 1:5 bis 1:25',
      materialHint: 'ABS mit Aceton-Glättung für Premium-Look',
    },
    {
      title: 'Komplettanlage 1:25 bis 1:50',
      description:
        'Verfahrenstechnik-Komplettanlage mit Behältern, Rohrleitungen (verschiedene Durchmesser), Pumpen, Wärmetauschern, Reaktoren. Farbkodiert nach Medienführung.',
      scaleHint: 'Maßstab 1:25–1:50',
      materialHint: 'PLA-Komponenten, lackiert in Medien-Farbcode',
    },
    {
      title: 'Hygienic-Design-Modell (Pharma, Lebensmittel)',
      description:
        'Anlagen mit Edelstahl-Optik (lackiert oder chromiert), totraumfreien Übergängen, CIP/SIP-Anschlüssen. Zeigt Hygienic-Design-Kompetenz.',
      scaleHint: 'Maßstab 1:5–1:10',
      materialHint: 'PLA + Chrom-Lackierung oder echte Galvanisierung',
    },
  ],
  materialEmpfehlung: [
    {
      name: 'PLA + Lackierung (Medienfarbcode)',
      why: 'Optimale Detailtreue für komplexe Rohrführungen + saubere Farbtrennung.',
    },
    {
      name: 'PETG',
      why: 'Robust für oft benutzte Funktionsmuster (Ventile, Pumpen mit Drehantrieb).',
    },
    {
      name: 'ABS + Aceton-Glättung',
      why: 'Premium-Hochglanz für High-End-Anlagenmodelle (Pharma-Pitches).',
    },
  ],
  beispielMessen: [
    'ACHEMA Frankfurt',
    'Pharma-EXPO',
    'Anuga FoodTec',
    'Powtech Nürnberg',
    'IPACK-IMA Mailand',
    'CHEMSPEC Europe',
    'INTERPACK Düsseldorf',
  ],
  faqs: [
    {
      question: 'Können Pumpen-Schnittmodelle mechanisch betätigt werden?',
      answer:
        'Ja. Eingebauter Mini-Servo (12V) oder manueller Drehknauf, der das Laufrad rotieren lässt. Perfekt für Live-Demos am Messestand.',
    },
    {
      question: 'Können Ventile mit echtem Medium (Wasser) demonstriert werden?',
      answer:
        'Mit speziellem Konstruktions-Ansatz: ja. Wasserdichte Modelle mit Hand-Pumpe + Reservoir realisieren wir auf Anfrage. Standard ist trocken-mechanisch.',
    },
    {
      question: 'Wie farbkodieren Sie komplexe Rohrleitungs-Modelle?',
      answer:
        'Standardisierter Medien-Farbcode (DIN 2403): Wasser grün, Dampf rot, Luft hellblau, Erdgas gelb usw. Auf Wunsch Sonderfarbschema nach Kunden-Spezifikation.',
    },
    {
      question: 'Können wir Anlagenmodelle in mehreren Exemplaren bekommen (z.B. für verschiedene Niederlassungen)?',
      answer:
        'Ja. Erstmodell €1.500-€8.000, jede weitere identische Kopie nur 30-50% des Erstpreises. Auch in Kleinserie 5-20 Stück.',
    },
    {
      question: 'Was kostet ein Anlagenmodell für die ACHEMA?',
      answer:
        'Pumpen-Schnittmodell: €400-€900. Ventil-Funktionsmuster: €250-€600. Komplettanlagen-Modell 1m mit Detailtreue: €3.000-€10.000. Premium-Pharma-Modell mit beleuchteten Sektionen: bis €15.000.',
    },
    {
      question: 'Können Sie Original-Hersteller-Logos lasergraviert ins Modell integrieren?',
      answer:
        'Ja. Erhabene 3D-Logos, lasergravierte Metall-Inlays, oder UV-Druck direkt auf Modell. Mehrere Logos für Hersteller-Komponenten in einer Komplettanlage problemlos.',
    },
  ],
  relatedBranchen: ['maschinenbau', 'energietechnik', 'elektrotechnik'],
}

// ═══════════════════════════════════════════════════════════════════
//   6) ELEKTROTECHNIK & MESSWANDLER
// ═══════════════════════════════════════════════════════════════════
const elektrotechnik: Branche = {
  slug: 'elektrotechnik',
  metaTitle: 'Elektrotechnik Messemodell 3D-Druck ★5,0 — Schaltschrank, Trafo, MV-Komponente in 24h',
  metaDescription:
    'Schaltschrank, Trafo, Schaltanlage, MV-Komponente als Messemodell. 3D-Druck Maßstab 1:1–1:10, schnittfähig, lackierbar. ★5,0 (31 Reviews) →',
  eyebrow: 'Branche · Elektrotechnik & Messwandler',
  h1: 'Elektrotechnik-Messemodell aus dem 3D-Druck — Schaltschränke, Trafos, MV-Komponenten',
  subline:
    'Mittelspannungs-Schaltanlagen, Schaltschränke, Trafostationen, Messwandler, Schutzgeräte — wenn die Originalkomponente unter Spannung steht oder im Cage festsitzt, machen Sie eine offene, schnittfähige Show-Version. Drucken wir in 24-48h.',
  primaryKeyword: 'Elektrotechnik Messemodell',
  secondaryKeywords: [
    'Schaltschrank Modell',
    'Schaltanlage 3D-Druck',
    'Trafo Modell',
    'Messwandler Modell',
    'MV Schaltanlage Modell',
    'Schutzgerät Modell',
    'Stromwandler Modell',
    'Spannungswandler Modell',
    'NS Verteiler Modell',
    'IGBT Modul Modell',
  ],
  seoLongTailBody: {
    eyebrow: 'Was wir für Elektrotechnik & Messwandler konkret drucken',
    h2: 'Elektrotechnik-Modelle aus dem 3D-Druck — Schaltanlagen, Trafos, MV-Komponenten',
    paragraphs: [
      'Ein MV-Schaltanlage-Modell als Schnittmodell ist die häufigste Anfrage aus dieser Branche. Wir drucken Mittelspannungs-Schaltanlagen im Maßstab 1:5 bis 1:10 mit sichtbarem Leistungsschalter, Sammelschienen, Erdungs-Schalter — alle drei Schaltstellungen mechanisch demonstrierbar über Drehkurbel. ABS in RAL 7035 (Standard MV-Lichtgrau) ist das Material-Setup. Diese Schaltanlage-3D-Druck-Modelle landen typisch auf der Hannover Messe oder CIRED European Conference, wo Schutzgeräte-Hersteller und EVUs gezielt nach physisch greifbaren Demonstrationen suchen.',
      'Ein Trafo-Modell oder Messwandler-Modell drucken wir mit detaillierten Kühlrippen, Anschluss-Bushings, Ölausgleichsbehälter. Verteiltrafo im Maßstab 1:5, Leistungstrafo im Maßstab 1:10 bis 1:25, oder Stromwandler/Spannungswandler in Original-Größe als Vertriebs-Tournee-Muster. PETG mit Strukturlackierung simuliert die Gussgehäuse-Oberfläche überzeugend. Lasergravierte Metall-Inlays für authentische Typenschild-Optik sind Standard — gerade bei MV-Komponenten muss das Etikett aussehen wie das Echte.',
      'Schaltschrank-Innenraum-Modelle für Vertriebs-Pitches drucken wir im Maßstab 1:3 bis 1:10 mit sichtbaren NH-Sicherungen, Stromwandlern, Reihenklemmen — die Tür geöffnet, alles farbkodiert nach IEC 60446 (braun/schwarz/grau für L1/L2/L3). Ein NS-Verteiler-Modell zeigt das Innenleben das im Original immer hinter geschraubten Türen verschwindet. Schulungs-Sets für neue Mitarbeiter sind eine wachsende Nische — zerlegbare MV-Komponenten ohne Hochspannungs-Risiko, oft genutzt, bei Beschädigung in 48h nachgedruckt.',
      'Eine besondere Spezialität sind IGBT-Modul-Cutaways und Leistungselektronik-Modelle. Geöffnete IGBT-Module mit sichtbarer Bondtechnik, Frequenzumrichter mit Kühlkörper-Innenstruktur, Schutzgerät-Modelle im Maßstab 1:1 bis 1:2 — alles für Engineering-Pitches und CWIEME-Berlin-Auftritte. PLA mit Klarteil-Deckel ergibt den Effekt von durchsichtigem Industriegehäuse mit funktionalem Inneren. Diese hochdetaillierten Modelle landen typisch bei Kunden mit hohem Engineering-IQ, die Specs-Sheets durchschauen — und durch das Modell trotzdem einen anderen, körperlichen Zugang bekommen.',
    ],
  },
  pains: [
    {
      problem:
        'Schaltanlagen sind im Original-Cage unzugänglich, gefährlich, verschlossen. Auf der HANNOVER MESSE zeigen Sie nur die Außenwand mit Logo.',
      solution:
        'Schnittmodell mit offenen Schaltgassen, sichtbaren Leistungsschaltern, Stromwandlern, Sammelschienen. Greifbar, ungefährlich, sofort verstehbar.',
    },
    {
      problem:
        'Trafo-Hersteller konkurrieren mit Specs-Sheets — gefühlt austauschbar. Customer kann sich später an niemanden erinnern.',
      solution:
        'Mini-Trafo als 3D-gedrucktes Tisch-Modell mit Original-Schaltbild, lasergraviertes Hersteller-Logo. Wird mitgenommen und steht im Engineer-Büro.',
    },
    {
      problem:
        'Schulungen für neue Mitarbeiter brauchen physische Modelle der MV-Komponenten — Originale sind gesperrt unter Hochspannung.',
      solution:
        'Schulungs-Sets mit zerlegbaren MV-Komponenten. Sicher, oft genutzt, bei Beschädigung in 48h nachgedruckt.',
    },
  ],
  useCases: [
    {
      title: 'MV-Schaltanlage Schnittmodell',
      description:
        'Mittelspannungs-Schaltanlage halbiert mit sichtbarem Leistungsschalter, Sammelschienen, Erdungs-Schalter. Drehkurbel für Schalterbetätigung.',
      scaleHint: 'Maßstab 1:5 bis 1:10',
      materialHint: 'ABS + RAL 7035 (Standard MV-Lichtgrau)',
    },
    {
      title: 'Trafo-Modell mit Kühlrippen',
      description:
        'Verteiltrafo oder Leistungstrafo mit detaillierten Kühlrippen, Anschluss-Bushings, Ölausgleichsbehälter. Lackiert wie Original.',
      scaleHint: 'Maßstab 1:5 bis 1:25',
      materialHint: 'PLA + RAL 9001 (Cremeweiß) oder Kunden-Farbcode',
    },
    {
      title: 'Stromwandler / Spannungswandler 1:1',
      description:
        'Originalgröße-Modell des eigenen Messwandlers — gedruckt für Vertriebs-Tournee. Tragbar, lasergraviertes Typenschild.',
      scaleHint: 'Maßstab 1:1',
      materialHint: 'PETG + Strukturlackierung wie Gussgehäuse',
    },
    {
      title: 'Schaltschrank Innenraum-Modell',
      description:
        'Niederspannungs-Verteiler mit sichtbaren NH-Sicherungen, Stromwandlern, Reihenklemmen. Tür geöffnet, alles farbkodiert.',
      scaleHint: 'Maßstab 1:3 bis 1:10',
      materialHint: 'ABS für Lackierfähigkeit',
    },
    {
      title: 'IGBT-Modul / Leistungselektronik Cutaway',
      description:
        'Geöffnetes IGBT-Modul oder Frequenzumrichter mit sichtbarer Bondtechnik, Kühlkörper, Leiterbahnen. Hochwertig für Engineering-Pitches.',
      scaleHint: 'Maßstab 1:1 bis 1:2',
      materialHint: 'PLA mit Klarteil-Deckel',
    },
  ],
  materialEmpfehlung: [
    {
      name: 'ABS + RAL 7035',
      why: 'Standard für MV-Komponenten (Schaltschrank-Lichtgrau). Lackierfähig in jedem RAL-Ton.',
    },
    {
      name: 'PETG',
      why: 'Strukturlackierung simuliert Gussgehäuse-Optik bei Trafos und Wandlern.',
    },
    {
      name: 'PLA + Klar-Acryl-Inserts',
      why: 'Für aufgeschnittene Cutaway-Modelle mit sichtbarer Innenkomponenten.',
    },
  ],
  beispielMessen: [
    'Hannover Messe',
    'CWIEME Berlin (Coil Winding & Magnetics)',
    'Eltefa Stuttgart',
    'E-world Essen',
    'CIRED European Conference',
    'Smarter E Europe',
    'electronica München',
  ],
  faqs: [
    {
      question: 'Können wir kundenspezifische Typenschilder und Logos ins Modell integrieren?',
      answer:
        'Ja. Lasergravierte Metall-Inlays für authentische Typenschild-Optik, erhabene 3D-Logos, oder UV-Druck direkt auf das Modell. Auch mit echten Etiketten-Klebern, falls Kompatibilität gewünscht.',
    },
    {
      question: 'Sind die Schaltvorgänge in einem MV-Modell mechanisch demonstrierbar?',
      answer:
        'Ja. Leistungsschalter-Trennstellung über Drehkurbel oder Hebel beweglich. Erdungs-Schalter, Wartungs-Trennposition — alle drei Schaltstellungen demonstrierbar.',
    },
    {
      question: 'Können wir aus mehreren Modellen einen kompletten Anlagenraum bauen?',
      answer:
        'Ja. Modular gedruckt mit standardisierten Anschluss-Interfaces. Nach 5-10 Aufträgen entsteht ein kompletter Schaltanlagenraum für Schulungen oder Vertriebs-Demos.',
    },
    {
      question: 'Welche Farbcodes nach IEC werden unterstützt?',
      answer:
        'IEC 60446 (Aderfarben): braun/schwarz/grau für L1/L2/L3, blau Neutralleiter, grün-gelb Schutzleiter. Alle Standard-Farbcodes nach DIN, IEC, ANSI in Lackierung umsetzbar.',
    },
    {
      question: 'Was kostet ein MV-Schaltanlagen-Modell?',
      answer:
        'Kompakt-Modell 1:10 (40cm): €600-€1.200. Schnittmodell mit beweglichen Schaltern: €1.500-€3.500. Vollausgestattete Schaltanlage 1:5 mit Beleuchtung: €4.000-€9.000.',
    },
    {
      question: 'Können IP-Schutzklassen visuell gezeigt werden (z.B. IP65 vs IP54)?',
      answer:
        'Ja. Konstruktive Dichtungen, Lüftungsschlitze, Verschluss-Mechanismen werden maßstäblich gedruckt. Macht den IP-Schutz-Unterschied physisch erkennbar.',
    },
  ],
  relatedBranchen: ['energietechnik', 'anlagenbau', 'maschinenbau'],
}

// ═══════════════════════════════════════════════════════════════════
//   EXPORT
// ═══════════════════════════════════════════════════════════════════
export const branchen: Branche[] = [
  maschinenbau,
  schiffbau,
  energietechnik,
  automotive,
  anlagenbau,
  elektrotechnik,
]

export const branchenMap: Record<string, Branche> = Object.fromEntries(
  branchen.map((b) => [b.slug, b])
)

export const getBranche = (slug: string): Branche | undefined => branchenMap[slug]
