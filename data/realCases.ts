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

  // Optional: Kosten-Gegenüberstellung (z. B. Großgerät vs. Modell am Messestand)
  costComparison?: {
    title: string
    intro: string
    colA: string // Spaltentitel links, z. B. "Großgerät am Stand"
    colB: string // Spaltentitel rechts, z. B. "Modell am Stand"
    rows: { posten: string; a: string; b: string }[]
    fazit: string // klar gelabelte Beispielrechnung
    /** Große Stat-Kacheln über den Charts (CostComparisonShowcase) */
    stats?: { value: string; label: string; sub?: string }[]
    /** Budget-Balkenvergleich: min/max je Szenario, highlight = Modell-Balken */
    budgetBars?: { label: string; min: number; max: number; highlight?: boolean }[]
    /** Amortisationskurve: kumulierte Ersparnis (konservativ) je Messe */
    amortisation?: { perMesse: number; einmalkosten: number; messen: number; note: string }
  }

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
    customerLabel: 'Messwandler-Hersteller aus Deutschland',
    branchen: ['elektrotechnik', 'energietechnik'],
    region: 'oberoesterreich',
    year: 2025,
    status: 'completed',

    metaTitle: 'Case: MV-Schaltanlage 1:25 für Dubai-Messe · 3D-Druck ekdruck',
    metaDescription: 'Für eine Energie-Fachmesse in Dubai hat ekdruck eine Mittelspannungs-Anlage als Messemodell gebaut: 1.600 × 800 × 800 mm, aus 15 bis 20 Einzelteilen, mehrfarbig und in Modulen, die als Handgepäck mitreisen.',
    primaryKeyword: 'Mittelspannungs-Schaltanlage Messemodell',

    challenge:
      'Ein Messwandler-Hersteller wollte auf einer Energie-Fachmesse in Dubai seine Mittelspannungs-Anlage zeigen. Die Originalanlage lässt sich nicht sinnvoll zu einer Messe bringen, schon gar nicht ins Ausland. Gesucht war ein Modell, das die Anlage mit ihren Details zeigt und trotzdem zur Messe nach Dubai mitreisen kann.',

    approach: [
      {
        label: 'Modell nach den CAD-Daten des Kunden',
        detail: 'Grundlage waren die CAD-Daten des Herstellers. Daraus entstand ein Modell mit 1.600 × 800 × 800 mm, das die Anlage mit ihren sichtbaren Details zeigt.',
      },
      {
        label: 'Aufgeteilt in Module',
        detail: 'Das Modell besteht aus 15 bis 20 Einzelteilen. Die Aufteilung ist so gewählt, dass die Module einzeln verpackt als Handgepäck zu internationalen Messen mitreisen können.',
      },
      {
        label: 'Mehrfarbig, mit sehr feinen Strukturen',
        detail: 'Die Teile wurden mehrfarbig gedruckt. Bei den feinsten Strukturen wurde so lange nachgedruckt, bis jedes Teil sauber war.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:25' },
      { label: 'Modellgröße', value: '1.600 × 800 × 800 mm, segmentiert' },
      { label: 'Aufbau', value: '15 bis 20 Einzelteile, modular' },
      { label: 'Ausführung', value: 'mehrfarbig, sehr feine Strukturen' },
      { label: 'Transport', value: 'in Modulen, als Handgepäck' },
    ],

    outcome:
      'Das Modell ist laut Kunde auf der Messe in Dubai sehr gut angekommen. Durch die Aufteilung in Module reist es ohne Spedition mit zur Messe.',

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
      'Der künstlerische Entwurf der neuen Justitia stammt vom KUNSTundHISTORISCHEN Hofmuseum in Edt bei Lambach. ekdruck hat den fertigen Entwurf digital modelliert, in sieben Einzelteile aufgeteilt und im 3D-Druck umgesetzt.',
    primaryKeyword: 'statue 3d-druck ausstellung',

    challenge:
      'Die Grundidee, das Erscheinungsbild und der künstlerische Entwurf der neuen Justitia stammen vom KUNSTundHISTORISCHEN Hofmuseum in Edt bei Lambach, entwickelt als zentrale Figur des Ausstellungskonzepts „Das Dreieck der Zeit": eine eigenständige Deutung ohne Augenbinde und ohne Schwert, mit einer Inschrift am Sockel. Der Entwurf lag fertig vor. Unser Auftrag war die technische Umsetzung: den Entwurf digital modellieren und für den 3D-Druck fertigungsgerecht aufbereiten.',

    approach: [
      {
        label: 'Der Entwurf: vom Museum',
        detail:
          'Haltung, Gewand, offenes Haar, der ausgestreckte Waagen-Arm und die Inschrift „Gerechtigkeit braucht Wahrheit. Menschlichkeit. Zeit." sind der künstlerische Entwurf des Museums. Das geistige Eigentum an der Figur liegt beim Künstler.',
      },
      {
        label: 'Digitale Modellierung nach Vorlage',
        detail:
          'Wir haben den fertigen Entwurf in einen druckbaren Datensatz übersetzt: Faltenwurf, Haarsträhnen, Gürtel mit Sternornament und der runde Sockel mit eingelassener Schrifttafel.',
      },
      {
        label: 'In sieben Teilen gedruckt, 70 cm inkl. Sockel',
        detail:
          'Für den Druck wurde die Figur in sieben Einzelteile aufgeteilt und aus weißem PETG gefertigt. Die Inschrift ist direkt in den Sockel graviert statt aufgesetzt, die Waage bekommt eine eigene Halterung am ausgestreckten Arm.',
      },
      {
        label: 'Vollendet wurde die Figur im Museum',
        detail:
          'Nach der Übergabe der Druckteile folgten viele Arbeitsstunden über mehrere Wochen, von Hand und durch den Künstler selbst: Nachbearbeiten der Einzelteile, teils händische Neuanfertigung von Bereichen, Verspachteln, Schleifen, mehrmaliges Auftragen der Feinstruktur und die gesamte Farbgestaltung. Erst dadurch wurde aus den gedruckten Teilen die fertige Justitia.',
      },
    ],

    technicalSpecs: [
      { label: 'Künstlerischer Entwurf', value: 'KUNSTundHISTORISCHES Hofmuseum (geistiges Eigentum beim Künstler)' },
      { label: 'Leistung ekdruck', value: 'Digitale Modellierung des Entwurfs, Aufteilung in 7 Teile, 3D-Druck' },
      { label: 'Material', value: 'Weißes PETG' },
      { label: 'Größe', value: '70 cm hoch inkl. Sockel' },
      { label: 'Ausarbeitung & Farbgestaltung', value: 'in Wochen Handarbeit durch das Museum' },
      { label: 'Standort', value: 'Ausstellung „Das Dreieck der Zeit", Edt bei Lambach' },
    ],

    outcome:
      'Der künstlerische Entwurf und die Grundidee der neuen Justitia stammen vom KUNSTundHISTORISCHEN Hofmuseum. Auf Grundlage dieses fertigen Entwurfs wurde die Figur von ekdruck digital modelliert, in sieben Einzelteile aufgeteilt und im 3D-Druck technisch umgesetzt. Die weitere handwerkliche Ausarbeitung, Oberflächenbearbeitung und Farbgestaltung erfolgte anschließend im Museum. Heute ist die Justitia das zentrale Element der Ausstellung „Das Dreieck der Zeit", erstmals öffentlich präsentiert bei der Langen Nacht der Museen am 3. Oktober 2026.',

    lessons:
      'Haarsträhnen und Faltenwurf sind beim Modellieren einer Figur der ehrlichste Qualitätstest, dort sieht man jede Schwäche zuerst. Eine Inschrift direkt in den Sockel zu gravieren wirkt hochwertiger als jedes aufgeklebte Schild. Und: Bei Kunstprojekten gehört die Trennung zwischen künstlerischem Entwurf und technischer Umsetzung klar benannt, der Entwurf gehört hier zu jeder Zeit dem Künstler.',

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

  {
    slug: 'messemodell-rudermaschine-becker-marine-systems',
    title: 'Rudermaschine als Messemodell: im Handgepäck zur Messe nach Griechenland',
    customerLabel: 'Becker Marine Systems GmbH, Hamburg',
    branchen: ['schiffbau'],
    region: 'oberoesterreich',
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Rudermaschine als Messemodell für Becker Marine Systems · ekdruck',
    metaDescription: 'Für einen Messeauftritt in Griechenland hat ekdruck die Rudermaschine von Becker Marine Systems als Ausstellungsmodell aus dem 3D-Druck gebaut: rund 32 × 19 × 32 cm, mit Schutzring für den Transport, verpackt fürs Handgepäck. Rund zehn Tage von der Freigabe bis zum Versand.',
    primaryKeyword: 'Messemodell Rudermaschine',

    challenge:
      'Becker Marine Systems aus Hamburg entwickelt Ruder- und Manövriersysteme für Schiffe. Für einen Messeauftritt in Griechenland sollte die Rudermaschine am Stand zu sehen sein. Das Original kommt dafür nicht infrage: zu groß, zu schwer und für eine Reise zur Messe nicht gedacht. Gesucht war ein Modell, das den Aufbau zeigt und mit dem Standteam mitreisen kann, und das in kurzer Zeit.',

    approach: [
      {
        label: 'Modell nach der CAD-Datei des Herstellers',
        detail: 'Grundlage war die CAD-Datei von Becker. Das Modell entstand in der Größe, in der die Datei angelegt war, rund 32 × 19 × 32 cm, mit allen sichtbaren Details der Rudermaschine.',
      },
      {
        label: 'Schicht für Schicht gedruckt, von Hand nachbearbeitet',
        detail: 'Gedruckt im 3D-Druck und anschließend von Hand nachbearbeitet. Farbton und Oberfläche wurden vorab mit dem Kunden abgestimmt.',
      },
      {
        label: 'Schutzring für die Unterseite',
        detail: 'An der Unterseite sitzen feine Lamellen. Ein eigener Schutzring hält sie beim Transport frei, damit am Stand nichts abgebrochen ankommt.',
      },
      {
        label: 'Verpackt fürs Handgepäck',
        detail: 'Das Modell ist so verpackt, dass es als Handgepäck mit dem Standteam zur Messe fliegen kann. Keine Spedition, kein Warten auf die Fracht.',
      },
    ],

    technicalSpecs: [
      { label: 'Gegenstand', value: 'Rudermaschine, Ausstellungsmodell' },
      { label: 'Größe', value: 'rund 32 × 19 × 32 cm' },
      { label: 'Datengrundlage', value: 'CAD-Datei des Herstellers' },
      { label: 'Extras', value: 'Schutzring für die Unterseite' },
      { label: 'Transport', value: 'als Handgepäck verpackt' },
      { label: 'Lieferzeit', value: 'rund 10 Tage von der Freigabe bis zum Versand' },
    ],

    outcome:
      'Freigabe am 21. September, Versand am 30. September, wenige Tage später war das Modell wohlbehalten in Hamburg. Von dort reist es mit dem Standteam zur Messe nach Griechenland. Am Stand lässt sich der Aufbau der Rudermaschine damit von allen Seiten zeigen, statt nur auf Bildschirm und Prospekt.',

    lessons:
      'Die empfindlichste Stelle eines Modells ist selten die, die man am Stand sieht. Hier waren es die Lamellen an der Unterseite. Ein eigener Schutzring kostet wenig und erspart beim Transport jede Diskussion.',

    customerQuote: {
      text: 'Das Paket mit Modell ist wohlbehalten bei uns angekommen. Wir haben es gerade ausgepackt und es gefällt uns sehr gut.',
      attribution: 'Marketing, Becker Marine Systems',
    },

    relatedCases: ['industriemodell-mittelspannungs-anlage-dubai', 'messemodell-stalltechnik-statt-grossgeraet'],

    images: [
      { src: '/cases/rudermaschine-messemodell-detail.jpg', alt: 'Messemodell der Rudermaschine von Becker Marine Systems aus dem 3D-Druck, Detailansicht' },
      { src: '/cases/rudermaschine-messemodell-schraeg.jpg', alt: 'Ausstellungsmodell einer Rudermaschine für den Messestand, Schrägansicht' },
      { src: '/cases/rudermaschine-messemodell-draufsicht.jpg', alt: 'Draufsicht auf das 3D-gedruckte Messemodell der Rudermaschine' },
      { src: '/cases/rudermaschine-messemodell-oben.jpg', alt: 'Messemodell der Rudermaschine mit Schutzring an der Unterseite' },
    ],
    photoCredit: 'ekdruck',
  },
  {
    slug: 'messemodell-stalltechnik-statt-grossgeraet',
    title: 'Vier Modelle statt Sperrguttransport: Stalltechnik auf Messegröße gebracht',
    customerLabel: 'Hersteller von Stall- und Fütterungstechnik, Österreich',
    branchen: ['maschinenbau'],
    region: 'oberoesterreich',
    year: 2026,
    status: 'ongoing',

    metaTitle: 'Case: Messemodell statt Großgerät · Beispielrechnung: rund 6.000 € je Messe gespart',
    metaDescription: 'Ein Stalltechnik-Hersteller zeigt seine Geräte als 3D-gedruckte Modelle statt als Originale: 8 m² kleinere Stände, Paket statt Spedition. Die Beispielrechnung mit AUMA-Richtwerten und echten Messetarifen ergibt rund 6.000 bis 7.600 € weniger pro Messe · bei einmalig ab €500 pro Modell.',
    primaryKeyword: 'Messemodell statt Maschine Transport Kosten',

    challenge:
      'Die Geräte des Herstellers sind zu groß und zu schwer, um sie zu jeder Messe zu bringen: Spedition statt Paketdienst, Staplertermine, ein Aufbau-Team und eine Standfläche, die das Gerät samt Rangier- und Sicherheitsabstand überhaupt erst aufnehmen kann. Das Gerät diktiert damit die Standgröße · und die Standgröße diktiert das Messebudget: Nach dem Branchenrichtwert des Messeverbands AUMA kostet ein Messeauftritt im Schnitt 750 bis 950 € je Quadratmeter Standfläche, alles eingerechnet. Gesucht war ein Weg, die Produkte zu zeigen, ohne die Geräte selbst zu bewegen.',

    approach: [
      {
        label: 'Maßstabsmodell nach Original-Daten',
        detail: 'Das Gerät wurde als maßstabsgetreues Anschauungsmodell umgesetzt · mit dem Detailgrad, der am Messestand und im Kundengespräch wirklich sichtbar ist.',
      },
      {
        label: 'Für den Dauereinsatz gebaut',
        detail: 'Das Modell ist für den wiederholten Einsatz ausgelegt: Messen, Showroom, Kundentermine · einpacken, mitnehmen, aufstellen. Die Logistik-Ersparnis fällt damit nicht einmal an, sondern bei jedem einzelnen Auftritt neu.',
      },
      {
        label: 'Vom ersten Modell zum Programm',
        detail: 'Nach dem ersten Modell entschied der Kunde, das Prinzip auszurollen: insgesamt vier Modelle sind in Planung · für Showroom, Messen und wichtige Kunden.',
      },
    ],

    technicalSpecs: [
      { label: 'Einsatz', value: 'Messen, Showroom, Kundenpräsentationen' },
      { label: 'Umfang', value: '4 Modelle in Planung (laufende Zusammenarbeit)' },
      { label: 'Modellpreis', value: 'einmalig ab rund €500 pro Modell' },
      { label: 'Ersparnis je Messe', value: 'rechnerisch €6.000 bis €7.600 (Beispielrechnung unten)' },
      { label: 'Transport', value: 'Paket statt Spedition' },
    ],

    outcome:
      'Das erste Modell war laut Kunde ein voller Erfolg · so überzeugend, dass insgesamt vier Modelle in Planung sind. Der für die Entscheidung wesentliche Punkt: Der Hersteller kann jetzt deutlich kleinere Messestände buchen, weil keine sperrigen Geräte mehr transportiert und aufgebaut werden müssen. Was das in Euro heißt, zeigt die Beispielrechnung oben: Schon 8 m² weniger Standfläche sind nach AUMA-Richtwert 6.000 bis 7.600 € weniger Messebudget · pro Messe, Jahr für Jahr. Das Modell kostet einmalig ab rund €500.',

    costComparison: {
      title: 'Die Beispielrechnung: 20 m² Stand gegen 12 m² Stand',
      intro: 'Gerechnet mit veröffentlichten Zahlen statt Behauptungen: dem Hallentarif der agraria Messe Wels (57,50 € je m² Platzmiete bis 30 m², netto) und dem AUMA-Richtwert für die vollen Kosten einer Messebeteiligung (750 bis 950 € je m² · inklusive Standbau, Personal, Reise und Logistik). Angenommen: Das Gerät braucht mit Rangier- und Sicherheitsfläche einen 20-m²-Stand, das Modell auf dem Sockel kommt mit 12 m² aus.',
      colA: 'Großgerät am Stand (20 m²)',
      colB: 'Modell am Stand (12 m²)',
      rows: [
        { posten: 'Platzmiete (agraria-Hallentarif, 57,50 €/m²)', a: '€1.150 netto', b: '€690 netto · €460 weniger, jede Messe' },
        { posten: 'Messebudget gesamt (AUMA-Richtwert, 750 bis 950 €/m²)', a: '€15.000 bis €19.000', b: '€9.000 bis €11.400 · €6.000 bis €7.600 weniger' },
        { posten: 'Transport', a: 'Spedition mit Staplertermin, je Messe neu', b: 'Paket ab rund €10 oder im Kofferraum, von einer Person getragen' },
        { posten: 'Auf- und Abbau', a: 'Team, Zeitfenster, teils Hebetechnik', b: 'hinstellen, fertig · Minuten statt Stunden' },
        { posten: 'Risiko', a: 'Transportschäden am Originalgerät', b: 'Modell ist ersetzbar, Nachdruck möglich' },
        { posten: 'Einmalkosten', a: 'keine', b: 'Modell ab rund €500 · wiederverwendbar über Jahre' },
      ],
      fazit: 'Quellen: Platzmietentarif der agraria Messe Wels (Halle bis 30 m², zuletzt veröffentlichter Tarif, netto) und AUMA-Durchschnittskosten einer Messebeteiligung (750 bis 950 € je m²). Der AUMA-Wert ist ein Richtwert über alle Kostenarten, einzelne Posten wie Personal schrumpfen nicht 1:1 mit der Fläche · die Größenordnung bleibt: Das Modell hat sich rechnerisch beim ersten Auftritt bezahlt gemacht, ab der zweiten Messe ist es reine Ersparnis. Rechnen Sie mit Ihren eigenen Standkosten nach.',
      stats: [
        { value: '8 m²', label: 'weniger Standfläche', sub: '20 m² Stand wird zum 12-m²-Stand' },
        { value: '€6.000', label: 'weniger Messebudget · je Messe', sub: 'bis €7.600 nach AUMA-Richtwert' },
        { value: '1. Messe', label: 'und das Modell ist bezahlt', sub: 'einmalig ab rund €500' },
      ],
      budgetBars: [
        { label: 'Großgerät am Stand · 20 m²', min: 15000, max: 19000 },
        { label: 'Modell am Stand · 12 m²', min: 9000, max: 11400, highlight: true },
      ],
      amortisation: {
        perMesse: 6000,
        einmalkosten: 500,
        messen: 5,
        note: 'Konservativ gerechnet: unterer AUMA-Wert (€6.000 Ersparnis je Messe) abzüglich einmaliger Modellkosten ab rund €500. Mit dem oberen Richtwert wären es nach fünf Messen rund €37.500.',
      },
    },
  },
  {
    slug: 'gelaendemodell-vermessungsbuero-3-tage',
    title: 'Fix-fertig in drei Tagen · und der Express-Zuschlag flog raus',
    customerLabel: 'Vermessungsbüro (ZT), Oberösterreich',
    branchen: ['architektur'],
    region: 'oberoesterreich',
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Projektmodell in 3 Tagen geliefert · Express-Zuschlag gestrichen',
    metaDescription: 'Ein Vermessungsbüro brauchte sein Projektmodell schnell. Geliefert wurde fix-fertig in drei Tagen · und der angebotene Express-Zuschlag wurde gestrichen, weil er nicht nötig war.',
    primaryKeyword: 'Modell Vermessungsbüro schnell drucken',

    challenge:
      'Ein Ziviltechniker-Büro für Vermessung brauchte sein Projektmodell mit fixem Termin und rechnete mit dem Express-Zuschlag, der für vorgezogene Fertigung anfällt.',

    approach: [
      {
        label: 'Druckfertige Datei, sofort geprüft',
        detail: 'Das Büro lieferte eine sauber aufbereitete, druckfertige Datei · die Datenprüfung war in kurzer Zeit erledigt, Aufbereitungsaufwand fiel keiner an.',
      },
      {
        label: 'Freie Kapazität genutzt',
        detail: 'Die Fertigung konnte direkt eingeplant werden, ohne andere Aufträge zu verschieben · der Grund, warum kein Express-Aufschlag nötig war.',
      },
      {
        label: 'Trotzdem Express versendet',
        detail: 'Verschickt wurde per Express-Versand, damit der gewonnene Zeitpuffer beim Kunden ankommt und nicht beim Paketdienst liegen bleibt.',
      },
    ],

    technicalSpecs: [
      { label: 'Lieferzeit', value: '3 Tage ab Beauftragung, fix-fertig' },
      { label: 'Datenlage', value: 'druckfertige Datei vom Büro' },
      { label: 'Versand', value: 'Express, versichert' },
      { label: 'Express-Zuschlag', value: 'gestrichen · war nicht nötig' },
    ],

    outcome:
      'Das Modell war drei Tage nach Beauftragung fix-fertig beim Kunden. Den angebotenen Express-Zuschlag haben wir gestrichen: Die Datei kam druckfertig und die Kapazität war frei · verrechnet wird Express nur, wenn er wirklich gebraucht wird.',

    lessons:
      'Eine sauber vorbereitete Datei ist der schnellste Beschleuniger · manchmal schneller als jeder Zuschlag. Und ein gestrichener Aufpreis sagt mehr über eine Zusammenarbeit als jede Werbezeile.',

    relatedCases: ['ortsmodell-express-zwei-tage', 'wettbewerbsmodell-kiga-express-wochenende'],
  },
  {
    slug: 'wettbewerbsmodell-kiga-express-wochenende',
    title: 'Wettbewerbsmodell übers Wochenende: Anfrage Freitag, Abholung Montag Mittag',
    customerLabel: 'Architekturbüro, Oberösterreich',
    branchen: ['architektur'],
    region: 'oberoesterreich',
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Wettbewerbsmodell 1:500 übers Wochenende gefertigt · Express',
    metaDescription: 'Kindergarten-Wettbewerb, Anfrage am Freitag: Das Modell 1:500 wurde übers Wochenende gefertigt und Montag Mittag in Gunskirchen abgeholt.',
    primaryKeyword: 'Wettbewerbsmodell Express drucken lassen',

    challenge:
      'Ein Architekturbüro stand kurz vor der Abgabe eines Kindergarten-Wettbewerbs und fragte am Freitag an · das Modell im Maßstab 1:500 musste zum Wochenstart fertig sein.',

    approach: [
      {
        label: 'Freitag: Anfrage, Angebot, Freigabe',
        detail: 'Anfrage und Freigabe am selben Tag · die Express-Option stand als eigene Position im Angebot, das Büro hat sie ohne Zögern gezogen.',
      },
      {
        label: 'Wochenende: Fertigung',
        detail: 'Das Modell entstand übers Wochenende · vorgezogen vor andere Aufträge, genau dafür ist der Express-Zuschlag da.',
      },
      {
        label: 'Montag Mittag: Abholung in Gunskirchen',
        detail: 'Das Büro holte das fertige Modell persönlich in der Werkstatt ab · kein Versandrisiko, kein Warten auf den Paketdienst.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:500' },
      { label: 'Zeitraum', value: 'Anfrage Freitag → Abholung Montag Mittag' },
      { label: 'Übergabe', value: 'persönliche Abholung in Gunskirchen' },
      { label: 'Option', value: 'Express-Fertigung (+50 %)' },
    ],

    outcome:
      'Von der Anfrage bis zur Übergabe lag ein Wochenende. Montag Mittag nahm das Büro sein Wettbewerbsmodell in Gunskirchen mit · rechtzeitig zur Abgabe. Der Express-Zuschlag war dem Büro den Termin wert.',

    relatedCases: ['gelaendemodell-vermessungsbuero-3-tage', 'ortsmodell-express-zwei-tage'],
  },
  {
    slug: 'einfamilienhaus-modell-1-100',
    title: 'Ein modernes Einfamilienhaus in 1:100 · das Haus auf dem Schreibtisch',
    customerLabel: 'Eigenprojekt aus der Werkstatt · Demonstrationsmodell',
    branchen: ['architektur'],
    region: 'oberoesterreich',
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Einfamilienhaus als 1:100-Modell · Flachdach, PV-Feld, Garage',
    metaDescription:
      'Ein modernes EFH als weißes Präsentationsmodell im Maßstab 1:100: Flachdach mit PV-Feld, Balkonnische, Garage und Grundstücksplatte. So sieht ein Einfamilienhaus-Modell aus unserer Werkstatt aus.',
    primaryKeyword: 'Einfamilienhaus Modell 3D-Druck 1:100',

    challenge:
      'Bauträger, Planungsbüros und private Bauherren fragen regelmäßig an, wie ihr Haus als Modell aussehen würde · und genau das lässt sich schlecht beschreiben, man muss es sehen. Deshalb haben wir ein typisches modernes Einfamilienhaus als Demonstrationsmodell gefertigt: transparent als Eigenprojekt der Werkstatt, mit dem Detailgrad, den ein Kunde bei einem EFH-Modell bekommt.',

    approach: [
      {
        label: 'Ein Haus, wie es heute geplant wird',
        detail: 'Flachdach mit PV-Feld und Attika, Balkonnische, versetzte Baukörper, Garage mit Zufahrt · die Architektursprache, die in aktuellen Einreichungen tatsächlich vorkommt.',
      },
      {
        label: 'Maßstab 1:100 mit Grundstücksplatte',
        detail: 'Bei 1:100 wird aus dem Haus ein Objekt von 220 × 165 mm: groß genug für Fensterfaschen, Eingangspodest und die PV-Rasterung am Dach, klein genug für Schreibtisch und Schauraum.',
      },
      {
        label: 'Weiße Ausführung',
        detail: 'Monochrom weiß, wie es Architekturbüros für Präsentation und Jury kennen · die Form spricht, nicht die Farbe.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:100' },
      { label: 'Abmessungen', value: '220 × 165 × 78 mm' },
      { label: 'Ausführung', value: 'PETG, weiß matt' },
      { label: 'Einsatz', value: 'Verkaufsgespräch, Schauraum, Schlüsselübergabe' },
    ],

    outcome:
      'Das Modell ist unser Anschauungsstück für Einfamilienhaus-Anfragen: Es zeigt, welchen Detailgrad ein EFH-Modell in 1:100 hat · vom PV-Raster am Flachdach bis zur Zufahrt auf der Grundstücksplatte. Wer sein eigenes Projekt so sehen will, schickt uns die CAD- oder Plandaten und bekommt das Angebot innerhalb von 6 Stunden.',

    relatedCases: ['architekturmodell-vereinsheim-ried', 'wettbewerbsmodell-kiga-express-wochenende', 'architekturmodell-wechsel-einsaetze-loftop'],

    images: [
      { src: '/referenzen/efh-modell-1zu100-gesamt.jpg', alt: 'Modernes Einfamilienhaus als weißes 3D-Druck-Modell im Maßstab 1:100 mit Garage und Grundstücksplatte' },
      { src: '/referenzen/efh-modell-1zu100-strassenseite.jpg', alt: 'Straßenseite des Einfamilienhaus-Modells 1:100 mit Fensterfaschen, Eingang und Zufahrt' },
      { src: '/referenzen/efh-modell-1zu100-zwei-modelle.jpg', alt: 'Zwei weiße Einfamilienhaus-Modelle im Maßstab 1:100 mit Balkonnische und Flachdach' },
      { src: '/referenzen/efh-modell-1zu100-dachdetail.jpg', alt: 'Detail des Flachdachs mit PV-Feld und Attikakante am Architekturmodell 1:100' },
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
