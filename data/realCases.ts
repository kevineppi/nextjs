/**
 * Reale Cases (anonymisiert) · ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * Echte Projekt-Stories aus Kevin's Werkstatt. Anonymisiert wo nötig,
 * aber technisch konkret. Diese Cases verkaufen · keine Marketing-
 * Phrasen, sondern "ja so machen wir das"-Substance.
 *
 * Verwendet von:
 *   - app/cases/page.tsx (Hauptliste)
 *   - app/cases/[slug]/page.tsx (Detail-Page pro Case)
 *   - Components: TestimonialsSection, CaseStudiesTeaser
 *
 * Rules:
 * - Kunden nur anonymisieren wenn nicht ausdrücklich genehmigt
 * - Technische Details (Maßstab, Material, Lieferzeit) EXAKT
 * - Outcome quantifiziert wo möglich
 * - "Lessons" als ehrlicher Selbst-Reflex
 */

export interface RealCase {
  slug: string
  // Header
  title: string
  customerLabel: string // "Werkzeugmaschinen-Hersteller, Wels" · nicht "Großkunde"
  branchen: string[] // matched against /branchen/<slug>
  region?: string // Bundesland für Cross-Linking
  year: number
  status: 'completed' | 'ongoing'

  // SEO
  metaTitle: string
  metaDescription: string
  // primary keyword the case targets
  primaryKeyword: string

  // Story Components
  challenge: string // "Was war das Problem"
  approach: {
    label: string
    detail: string
  }[] // 3-5 Schritte
  technicalSpecs: {
    label: string
    value: string
  }[] // Maßstab, Material, Größe, Druckzeit, Lieferzeit, Stückzahl
  outcome: string // Ergebnis - quantifiziert wo möglich
  lessons?: string // "Was wir gelernt haben" - macht authentisch
  customerQuote?: {
    text: string
    attribution: string // "Projektleitung, anonymisiert" oder Echtname falls OK
  }

  // Optional Cross-Links
  relatedCases?: string[] // slugs

  // Optional echte Projektfotos + Fotocredit
  images?: { src: string; alt: string }[]
  photoCredit?: string
}

export const cases: RealCase[] = [

  // ═══════════════════════════════════════════════════════════════
  //   CASE 1 · RITZ Dubai (NDA-konform, bestehender Auftrag)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'industriemodell-mittelspannungs-anlage-dubai',
    title: 'Mittelspannungs-Anlage 1:25 für Messeauftritt in Dubai',
    customerLabel: 'Messwandler-Hersteller, deutscher Konzern',
    branchen: ['elektrotechnik', 'energietechnik'],
    region: 'oberoesterreich',
    year: 2025,
    status: 'completed',

    metaTitle: 'Case: MV-Schaltanlage 1:25 für Dubai-Messe · 3D-Druck ekdruck',
    metaDescription: 'Wie wir eine 3-stöckige MV-Schaltanlage als Tischmodell für eine Energie-Messe in Dubai gedruckt haben. Maßstab 1:25, lackiert RAL 7035, segmentiert mit Magnetverbindungen.',
    primaryKeyword: 'Mittelspannungs-Schaltanlage Messemodell',

    challenge:
      'Der Kunde · ein Messwandler-Hersteller mit Hauptkunden im Stromnetz-Ausbau · musste auf einer Energie-Fachmesse in Dubai seine Mittelspannungs-Schaltanlage zeigen. Die Originalanlage wiegt 2,8 Tonnen, ist 3 Stockwerke hoch, kostet 6-stellig pro Stück und hätte für die Demo ein extra Container-Setup gebraucht. Logistik-Kosten allein wären 18.000 € gewesen · nur für eine 4-Tages-Messe.',

    approach: [
      {
        label: 'CAD-Übernahme + NDA',
        detail: 'STEP-Dateien direkter Transfer per verschlüsselter Strecke. NDA mit Datenlöschung nach Lieferung, separater Werkstattbereich für sensible Projekte.',
      },
      {
        label: 'Segmentierungs-Planung',
        detail: 'Aufgrund der 3-Stockwerke-Höhe Modell in 4 Hauptsegmente aufgeteilt. Unsichtbare Magnet-Verbindungen entlang natürlicher Wand-Übergänge. Trennstellen mit Spachtel und Lackierung kaschiert.',
      },
      {
        label: 'Produktion + Lackierung',
        detail: 'ABS für Lackierfähigkeit, Aceton-Dampfglättung an sichtbaren Sektionen. 2K-Lackierung in RAL 7035 (Standard MV-Lichtgrau). Lasergravierte Typenschilder als Inlay.',
      },
      {
        label: 'Detail zum Öffnen',
        detail: 'Eine Sektion mit klappbarer Tür → öffnet die Sicht auf gedruckte Sammelschienen, Stromwandler, Leistungsschalter. Live-Demo am Messestand möglich.',
      },
      {
        label: 'Versand direkt Messeadresse',
        detail: 'Holzkiste mit Schaumstoff-Inserts, Versand per Luftfracht direkt an Stand-Nummer in Dubai. Anlieferung 3 Tage vor Messe-Aufbau.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:25' },
      { label: 'Modell-Höhe', value: '~65 cm (4 Segmente)' },
      { label: 'Material', value: 'ABS, Aceton-geglättet' },
      { label: 'Lackierung', value: 'RAL 7035, 2K-Klarlack-Versiegelung' },
      { label: 'Druckzeit gesamt', value: '~140 Stunden über 8 Tage' },
      { label: 'Lead-Time', value: '4 Wochen Brief-to-Versand' },
      { label: 'Special', value: 'NDA + verschlüsselter CAD-Transfer + lasergravierte Typenschilder' },
    ],

    outcome:
      'Modell am Stand der zentrale Eyecatcher der Messe. Nach Kunden-Feedback >40 qualifizierte Lead-Gespräche entlang des Modells geführt · Lead-Capture-Rate 3× höher als bei den 2D-Roll-ups daneben. Folgeauftrag für eine Variante zur AMPEC Indien.',

    lessons:
      'Was ich beim nächsten Mal anders machen würde: Die Magnetverbindungen hatten zu viel Spielraum bei einem der Übergänge · manuelle Nachjustierung am Aufbautag nötig. Heute fixiere ich kritische Verbindungen mit Konus-Steckung + Magnet kombiniert.',

    customerQuote: {
      text: 'Die Detailtreue hat selbst unsere Engineering-Kollegen überrascht. Am Stand wirkte es, als stünde unsere Anlage im Maßstab 1:25 vor uns.',
      attribution: 'Marketing-Leitung (auf Wunsch anonymisiert)',
    },

    relatedCases: ['ortsmodell-express-zwei-tage', 'justitia-statue-museum-edt-bei-lambach'],
  },
  {
    slug: 'generali-keksausstecher-1000-stueck',
    title: '1.000 Firmen-Keksausstecher mit Logo für die Weihnachtsaktion',
    customerLabel: 'Generali Versicherung Österreich',
    branchen: ['einzelanfertigung'],
    region: 'wien',
    year: 2024,
    status: 'completed',

    metaTitle: 'Case: 1.000 Keksausstecher mit Generali-Logo · 3D-Druck Mehrfachfertigung',
    metaDescription: 'Wie 1.000 Keksausstecher mit Firmenlogo für die Generali-Weihnachtsaktion entstanden sind: Logo-Aufbereitung, Mehrfachfertigung, termingerechte Lieferung.',
    primaryKeyword: 'Keksausstecher mit Logo 3D-Druck',

    challenge:
      'Generali plante eine interne Weihnachtsaktion mit personalisierten Keksausstechern im eigenen Branding · in vierstelliger Stückzahl und mit fixem Termin vor der Aktion. Gesucht war ein Fertiger, der diese Menge zuverlässig und termingerecht liefert.',

    approach: [
      {
        label: 'Logo als druckbares Relief aufbereitet',
        detail: 'Das Generali-Logo wurde als erhabenes Relief in die Ausstecher-Form eingearbeitet · so bleibt es beim Ausstechen sichtbar und druckt sauber.',
      },
      {
        label: 'Mehrfachfertigung über mehrere Tage',
        detail: 'Die Stückzahl entstand in durchgängiger Parallelfertigung, mit laufender Sichtkontrolle über die gesamte Laufzeit.',
      },
      {
        label: 'Gebündelte Verpackung',
        detail: 'Ausstecher gebündelt verpackt, damit die Verteilung im Unternehmen ohne Nacharbeit funktioniert.',
      },
    ],

    technicalSpecs: [
      { label: 'Stückzahl', value: '1.000 Stück' },
      { label: 'Material', value: 'PETG' },
      { label: 'Lieferung', value: 'termingerecht vor der Weihnachtsaktion' },
    ],

    outcome:
      'Pünktlich zur Aktion geliefert. Generali ist seither wiederkehrender Auftraggeber für Mitarbeiter- und Partnergeschenke aus dem 3D-Druck.',

    lessons:
      'Bei großen Stückzahlen entscheidet die Vorbereitung: ein sauber aufbereitetes Modell zahlt sich über tausend Drucke hinweg mehr aus als jede Eile beim Drucken.',
  },
  {
    slug: 'ortsmodell-1-500-gemeindepraesentation',
    title: 'Ein ganzer Ort als Modell 1:500 für eine Gemeindepräsentation',
    customerLabel: 'Bauträger und Projektentwickler, Raum Salzburg',
    branchen: ['architektur'],
    region: 'salzburg',
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Ortsmodell 1:500 im A1-Format für eine Gemeindepräsentation · 3D-Druck',
    metaDescription:
      'Wie wir einen ganzen Ort als Modell im Maßstab 1:500 gedruckt haben. A1-Format 841 × 594 mm, weißes PLA, sechs Teile, rund 80 Stunden Druckzeit, circa 6 Tage Lead-Time.',
    primaryKeyword: 'Ortsmodell 1:500',

    challenge:
      'Ein Bauträger aus dem Raum Salzburg musste ein Vorhaben vor einer Gemeinde präsentieren. Pläne und Renderings gab es. Aber bei so einem Termin sitzen Gemeindevertreter und Anrainer im Raum, keine Fachplaner. Gesucht war etwas, das jeder auf den ersten Blick versteht: der ganze Ort mit dem Vorhaben mittendrin, zum Drumherumgehen und Drüberbeugen.',

    approach: [
      {
        label: 'Gelände, Straßen und Bestand aufbereiten',
        detail:
          'Das Gelände mit allen Höhenlinien, das Straßennetz und die bestehende Bebauung aus den Planungsdaten aufbereitet. Im Maßstab 1:500 fliegt alles raus, was man ohnehin nicht mehr erkennt. Was bleibt, sind saubere Dachkanten, klare Höhenlinien und die Kirche als Orientierungspunkt.',
      },
      {
        label: 'Aufteilung in sechs Teile',
        detail:
          'Fertig misst das Modell 841 × 594 mm, also A1, und passt am Stück auf kein Druckbett. Aufgeteilt in sechs Teile, die Trennlinien entlang von Straßen und Geländekanten gelegt, wo sie am wenigsten auffallen.',
      },
      {
        label: 'Weißes PLA, rund 80 Stunden',
        detail:
          'Alles in einem durchgehenden Weiß, damit das Auge auf Höhen und Volumen schaut statt auf Farben. Rund 80 Stunden Druckzeit über mehrere Tage, Schicht für Schicht.',
      },
      {
        label: 'Von Hand zu einem Stück zusammengesetzt',
        detail:
          'Die sechs Teile von Hand zusammengesetzt und die Übergänge nachgearbeitet, bis der Ort wieder wie aus einem Guss auf dem Tisch liegt. Rund 6 Tage von der fertigen Datei bis zur Übergabe.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:500' },
      { label: 'Modelltyp', value: 'Ortsmodell / Massenmodell (Gebäudevolumen ohne Fassadendetail)' },
      { label: 'Modell-Maße', value: '841 × 594 × ca. 50 mm (A1)' },
      { label: 'Material', value: 'Weißes PLA' },
      { label: 'Aufbau', value: '6 Teile, von Hand zusammengesetzt' },
      { label: 'Druckzeit', value: 'ca. 80 Stunden' },
      { label: 'Lead-Time', value: 'ca. 6 Tage plus Dateiaufbereitung' },
      { label: 'Anlass', value: 'Gemeindepräsentation' },
    ],

    outcome:
      'Das Modell lag bei der Gemeindepräsentation auf dem Tisch. Ein Plan braucht Erklärung, ein Modell nicht. Die Anwesenden haben sich drübergebeugt und das Vorhaben im Zusammenhang mit dem ganzen Ort sofort erfasst, mit Geländeverlauf, Nachbarschaft und Wegen. Genau die Diskussion, die man in so einem Termin haben will.',

    lessons:
      'Im Maßstab 1:500 gewinnt man nichts durch mehr Detail, sondern durch Weglassen. Entscheidend sind ein durchgehendes Weiß, saubere Dachkanten und ein Geländeverlauf, der stimmt. Und die Trennlinien der sechs Teile gehören dorthin, wo ohnehin eine Kante ist. Dann sieht sie später niemand mehr.',

    images: [
      { src: '/cases/ortsmodell-kirche.jpg', alt: 'Kirche im Zentrum des 3D-gedruckten Ortsmodells im Maßstab 1:500' },
      { src: '/cases/ortsmodell-uebersicht.jpg', alt: 'Übersicht des weißen Ortsmodells mit Bebauung, Straßen und Gelände' },
      { src: '/cases/ortsmodell-hoehenlinien.jpg', alt: 'Detail des Ortsmodells mit Höhenlinien, Straßenverlauf und Gebäuden' },
      { src: '/cases/ortsmodell-tiefe.jpg', alt: 'Blick über das weiße Ortsmodell, Häuser im Maßstab 1:500 aus PLA' },
    ],

    relatedCases: ['ortsmodell-express-zwei-tage', 'architekturmodell-vereinsheim-ried'],
  },
  {
    slug: 'ortsmodell-express-zwei-tage',
    title: 'Ortsmodell in zwei Tagen: vom Auftrag bis in den Sitzungssaal',
    customerLabel: 'Auftraggeber mit kurzfristigem Sitzungstermin',
    branchen: ['architektur'],
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Ortsmodell in 2 Tagen gedruckt, pünktlich zur Sitzung · 3D-Druck',
    metaDescription:
      'Auftrag am Sonntagabend, Versand am Dienstagmittag: ein komplettes Ortsmodell in unter zwei Tagen aufbereitet und aus weißem PLA gedruckt, pünktlich zum Sitzungstermin.',
    primaryKeyword: 'Ortsmodell Express 3D-Druck',

    challenge:
      'Der Auftraggeber brauchte für einen Sitzungstermin ein Ortsmodell, und zwar sehr kurzfristig. Pläne und Renderings lagen vor, aber im Raum wollte er den Ort greifbar auf den Tisch legen. Das Zeitfenster war eng: zwischen Auftrag und Termin lagen nur zwei Tage, das Wochenende inklusive.',

    approach: [
      {
        label: 'Sonntagabend: Auftrag und Daten',
        detail:
          'Der Auftrag kam am Sonntagabend. Noch am selben Abend habe ich die Planungsdaten gesichtet, das Gelände und die Bebauung aufbereitet und geprüft, was im Maßstab sinnvoll darstellbar ist.',
      },
      {
        label: 'Alles neu aufbereitet',
        detail:
          'Das komplette Ortsmodell wurde in diesem Fenster aufbereitet: Gelände mit Höhenlinien, Straßen und die Baukörper als saubere Volumen. Nichts von der Stange, alles auf dieses Projekt zugeschnitten.',
      },
      {
        label: 'Parallel gedruckt, auch über Nacht',
        detail:
          'Damit die zwei Tage reichen, lief der Druck parallel und durchgehend, auch nachts. Weißes PLA, Schicht für Schicht, die Geländeschichten geben dem Relief seine Struktur.',
      },
      {
        label: 'Dienstagmittag: Versand',
        detail:
          'Dienstagmittag ging das fertige Modell raus, von Hand zusammengesetzt und kontrolliert. Rechtzeitig, um es zum Termin auf den Tisch zu bringen.',
      },
    ],

    technicalSpecs: [
      { label: 'Modelltyp', value: 'Ortsmodell / Geländemodell (Massenmodell)' },
      { label: 'Material', value: 'Weißes PLA' },
      { label: 'Auftragserteilung', value: 'Sonntagabend' },
      { label: 'Versand', value: 'Dienstagmittag' },
      { label: 'Turnaround', value: 'Unter 2 Tage, aufbereitet und gedruckt' },
      { label: 'Anlass', value: 'Kurzfristiger Sitzungstermin' },
    ],

    outcome:
      'Der Auftraggeber kam zwei Minuten nach Sitzungsbeginn mit dem fertigen Modell in den Raum. Pünktlich, obwohl der Auftrag erst am Sonntagabend gekommen war. Ein Plan wäre rechtzeitig gewesen, ein Modell zum Angreifen normalerweise nicht. Genau das war hier der Unterschied.',

    lessons:
      'Ein Ortsmodell in zwei Tagen geht nur, wenn zwei Dinge zusammenkommen: eine saubere, schnelle Datenaufbereitung und Anlagen, die parallel und über Nacht durchlaufen. Beides muss vorher stehen, sonst reicht das Fenster nicht. Wenn es steht, ist auch ein Wochenende kein Hindernis.',

    images: [
      { src: '/cases/ortsmodell-express-uebersicht.jpg', alt: 'Fertiges 3D-gedrucktes Ortsmodell aus weißem PLA vor weißem Studio-Hintergrund' },
      { src: '/cases/ortsmodell-express-relief.jpg', alt: 'Reliefartiges Gelände des Ortsmodells mit Höhenschichten und Gebäuden aus dem 3D-Druck' },
    ],

    relatedCases: ['ortsmodell-1-500-gemeindepraesentation', 'architekturmodell-vereinsheim-ried'],
  },
  {
    slug: 'justitia-statue-museum-edt-bei-lambach',
    title: 'Justitia für ein Museum: 70 cm Ausstellungsfigur, digital modelliert und gedruckt',
    customerLabel: 'KUNSTundHISTORISCHES Hofmuseum, Edt bei Lambach',
    branchen: ['einzelanfertigung'],
    region: 'Oberösterreich',
    year: 2026,
    status: 'completed',

    metaTitle: 'Justitia-Statue aus dem 3D-Druck · 70 cm für ein Museum | ekdruck',
    metaDescription:
      'Ausstellungsfigur für das KUNSTundHISTORISCHE Hofmuseum in Edt bei Lambach: eigene Justitia-Deutung, digital modelliert, 70 cm inkl. Sockel mit gravierter Inschrift, gedruckt aus weißem PETG.',
    primaryKeyword: 'statue 3d-druck ausstellung',

    challenge:
      'Das KUNSTundHISTORISCHE Hofmuseum in Edt bei Lambach wollte für seine Ausstellung eine eigene Justitia, keine Kopie einer bestehenden Figur, sondern eine eigenständige Deutung: ohne Augenbinde, ohne Schwert, dafür mit einer Inschrift am Sockel. Eine 3D-Datei gab es nicht, und eine klassisch von Hand modellierte Figur in dieser Größe hätte Monate gedauert.',

    approach: [
      {
        label: 'Motiv gemeinsam festgelegt',
        detail:
          'Haltung, Gewand und die Botschaft am Sockel wurden mit dem Museum abgestimmt: eine Justitia mit offenem Haar und ausgestrecktem Waagen-Arm, dazu die Inschrift "Gerechtigkeit braucht Wahrheit. Menschlichkeit. Zeit."',
      },
      {
        label: 'Digital modelliert in der Werkstatt',
        detail:
          'Die Figur entstand komplett digital bei uns: Faltenwurf, Haarsträhnen, Gürtel mit Sternornament und der runde Sockel mit eingelassener Schrifttafel, alles in einem Datensatz.',
      },
      {
        label: 'Gedruckt in Weiß, 70 cm inkl. Sockel',
        detail:
          'Gefertigt aus weißem PETG. Die Inschrift ist direkt in den Sockel graviert statt aufgesetzt, die Waage bekommt eine eigene Halterung am ausgestreckten Arm.',
      },
      {
        label: 'Übergabe im Rohzustand',
        detail:
          'Bewusste Arbeitsteilung: Wir liefern die weiße Figur, das Museum übernimmt Fassung, Lackierung und setzt die Waage selbst auf. So trägt das fertige Ausstellungsstück beide Handschriften.',
      },
    ],

    technicalSpecs: [
      { label: 'Modelltyp', value: 'Ausstellungsfigur / Statue' },
      { label: 'Material', value: 'Weißes PETG' },
      { label: 'Größe', value: '70 cm hoch inkl. Sockel' },
      { label: 'Besonderheit', value: 'Gravierte Sockel-Inschrift, eigene Justitia-Deutung ohne Augenbinde und Schwert' },
      { label: 'Fassung', value: 'Lackierung und Waagen-Montage durch das Museum' },
      { label: 'Standort', value: 'Ausstellung in Edt bei Lambach, 5 Autominuten von unserer Werkstatt' },
    ],

    outcome:
      'Die Figur steht künftig in der Ausstellung des Museums, keine fünf Autominuten von unserer Werkstatt entfernt. Vom ersten Motivgespräch bis zur Übergabe blieb alles in einer Hand: Modellierung, Fertigung und die gravierte Inschrift kamen aus Gunskirchen, die Fassung macht das Museum selbst.',

    lessons:
      'Haarsträhnen und Faltenwurf sind bei einer Figur der ehrlichste Qualitätstest, dort sieht man jede Schwäche zuerst. Und: Eine Inschrift direkt in den Sockel zu gravieren wirkt hochwertiger als jedes aufgeklebte Schild, kostet im Druck aber keinen Cent extra. Die Arbeitsteilung mit dem Kunden, Rohfigur von uns, Fassung vom Museum, hat sich bewährt.',

    images: [
      { src: '/cases/justitia-front.jpg', alt: 'Weiße Justitia-Statue aus dem 3D-Druck, 70 cm, Frontansicht mit Sockel-Inschrift' },
      { src: '/cases/justitia-gesicht.jpg', alt: 'Gesicht und Oberkörper der 3D-gedruckten Justitia-Figur mit offenem Haar' },
      { src: '/cases/justitia-rueckansicht.jpg', alt: 'Rückansicht der Justitia mit Faltenwurf des Gewands aus weißem PETG' },
      { src: '/cases/justitia-haar-detail.jpg', alt: 'Detail der gedruckten Haarsträhnen der Justitia-Ausstellungsfigur' },
    ],
  },
  {
    slug: 'architekturmodell-wechsel-einsaetze-loftop',
    title: 'Ein Modell, mehrere Varianten: Architekturmodell mit Wechsel-Einsätzen',
    customerLabel: 'Loftop AG',
    branchen: ['architektur'],
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Architekturmodell mit Wechsel-Einsätzen auf Magnetbasis · 3D-Druck',
    metaDescription: 'Architekturmodell mit austauschbaren Gebäude-Einsätzen auf Magnetaufnahmen: mehrere Planungsvarianten auf einer Trägerplatte, versichert ins Ausland geliefert.',
    primaryKeyword: 'Architekturmodell Varianten Wechseleinsätze',

    challenge:
      'Der Kunde wollte mehrere Planungsvarianten desselben Areals zeigen können · ohne für jede Variante ein eigenes Vollmodell zu beauftragen. Das Modell musste die Varianten im Gespräch schnell wechselbar machen und den Versand ins Ausland unbeschadet überstehen.',

    approach: [
      {
        label: 'Gemeinsame Trägerplatte',
        detail: 'Das Umfeld des Areals steht fix auf einer Trägerplatte · nur der Planungsbereich ist als Einsatz ausgeführt.',
      },
      {
        label: 'Wechsel-Einsätze auf Magnetbasis',
        detail: 'Die Varianten sitzen auf Magnetaufnahmen und lassen sich im Gespräch in Sekunden tauschen, ohne Werkzeug und ohne sichtbare Befestigung.',
      },
      {
        label: 'Versicherter Auslandsversand',
        detail: 'Transportsichere Verpackung, versichert versendet · das Modell kam unbeschädigt beim Kunden an.',
      },
    ],

    technicalSpecs: [
      { label: 'Besonderheit', value: 'austauschbare Einsätze auf Magnetaufnahmen' },
      { label: 'Aufbau', value: 'fixe Trägerplatte + Wechsel-Einsätze' },
      { label: 'Lieferung', value: 'versicherter Auslandsversand' },
    ],

    outcome:
      'Der Kunde präsentiert mehrere Varianten auf einer Platte statt mit mehreren Vollmodellen · der Variantenwechsel passiert direkt im Gespräch.',
  },
  {
    slug: 'architekturmodell-vereinsheim-ried',
    title: 'Städtebauliches Ensemble als Modell: Vereinsheim in Ried',
    customerLabel: 'Bauprojekt in Ried, Oberösterreich',
    branchen: ['architektur'],
    region: 'oberoesterreich',
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Städtebau-Modell Vereinsheim Ried · mehrfarbiger 3D-Druck',
    metaDescription: 'Städtebauliches Ensemble mit mehreren Baukörpern und zentraler Platzsituation als mehrfarbiges Architekturmodell, 60 × 30 cm, segmentiert gefertigt, in 7 Tagen geliefert.',
    primaryKeyword: 'Städtebauliches Modell 3D-Druck',

    challenge:
      'Ein Ensemble aus mehreren Gebäudekörpern mit unterschiedlichen Höhen und einer zentralen Platzsituation sollte für Präsentation und Abstimmung greifbar werden · als ein zusammenhängendes Modell in Präsentationsgröße.',

    approach: [
      {
        label: 'Segmentierte Fertigung',
        detail: 'Das Modell wurde in mehreren Segmenten gefertigt und zu einer durchgehenden Fläche zusammengefügt · so ist die Gesamtgröße nicht durch den Einzeldruck begrenzt.',
      },
      {
        label: 'Kontrastierende Baukörper',
        detail: 'Die reduzierte, mehrfarbige Gestaltung hebt die einzelnen Gebäude voneinander ab und macht die räumliche Struktur auf einen Blick lesbar.',
      },
      {
        label: 'Maßstabspunkte gesetzt',
        detail: 'Einzelne Elemente wie der zentrale Baum geben dem Betrachter sofort ein Gefühl für Größenverhältnisse.',
      },
    ],

    technicalSpecs: [
      { label: 'Größe', value: '600 × 300 × 150 mm' },
      { label: 'Material', value: 'PLA, mehrfarbig' },
      { label: 'Fertigung', value: 'segmentiert, zusammengefügt' },
      { label: 'Lieferzeit', value: '7 Tage ab Datenfreigabe' },
    ],

    outcome:
      'Höhen, Volumen und die Platzsituation sind am Modell auf einen Blick erfassbar · genau das, was in Abstimmungsrunden den Unterschied zu Plänen und Renderings macht.',

    images: [
      { src: 'https://jkzrpjlfdsxvcfwhuoey.supabase.co/storage/v1/object/public/reference-images/1775222702205-f733824d-427f-4f29-9521-f0a99bc95969.png', alt: 'Mehrfarbiges Städtebau-Modell des Vereinsheim-Ensembles in Ried aus dem 3D-Druck' },
    ],
  },

]

// ─── Helpers ─────────────────────────────────────────────────────
export const getCaseBySlug = (slug: string): RealCase | undefined =>
  cases.find((c) => c.slug === slug)

export const getCasesByBranche = (brancheSlug: string): RealCase[] =>
  cases.filter((c) => c.branchen.includes(brancheSlug))

export const getCasesByRegion = (regionSlug: string): RealCase[] =>
  cases.filter((c) => c.region === regionSlug)

export const featuredCases = cases.slice(0, 3) // first 3 für Home/Teaser
