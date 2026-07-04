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
    attribution: string // "Konstruktionsleiter, anonymisiert" oder Echtname falls OK
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
        detail: 'Aufgrund der 3-Stockwerke-Höhe Modell in 4 Hauptsegmente konstruiert. Unsichtbare Magnet-Verbindungen entlang natürlicher Wand-Übergänge. Trennstellen mit Spachtel und Lackierung kaschiert.',
      },
      {
        label: 'Produktion + Lackierung',
        detail: 'ABS für Lackierfähigkeit, Aceton-Dampfglättung an sichtbaren Sektionen. 2K-Lackierung in RAL 7035 (Standard MV-Lichtgrau). Lasergravierte Typenschilder als Inlay.',
      },
      {
        label: 'Funktions-Detail',
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
      text: 'Die Genauigkeit der Detailwiedergabe hat selbst unsere Engineering-Kollegen überrascht. Das war kein Modell · das war eine glaubwürdige 1:25-Replik unserer Anlage.',
      attribution: 'Marketing-Leitung (auf Wunsch anonymisiert)',
    },

    relatedCases: ['anlagenbau-pumpen-schnittmodell', 'maschinenbau-werkzeugmaschine-schnitt'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   CASE 2 · Generali Keksausstecher (passiv-Stammkunde, explizit OK)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'generali-firmen-keksausstecher-3500-stueck',
    title: '3.500 Firmen-Keksausstecher als Weihnachts-Streumaterial',
    customerLabel: 'Generali Versicherung Österreich',
    branchen: ['einzelanfertigung'],
    region: 'wien',
    year: 2024,
    status: 'completed',

    metaTitle: 'Case: 3.500 Custom-Keksausstecher für Generali Weihnachten · 3D-Druck',
    metaDescription: 'Wie wir in 3 Wochen 3.500 individuelle Keksausstecher mit Generali-Logo für die Mitarbeiter-Aktion produziert haben. Lebensmittelechtes PETG, kombinierte Parallelfertigung.',
    primaryKeyword: 'Custom Keksausstecher 3D-Druck',

    challenge:
      'Generali plante eine Mitarbeiter-Weihnachts-Aktion: 3.500 personalisierte Keksausstecher in Generali-Brand mit dem Firmenlogo zum Verteilen an alle österreichischen Standorte. Lead-Time: 3 Wochen ab Auftragsfreigabe · inkl. Verpackung. Die meisten 3D-Druck-Anbieter haben Stückzahlen >2.000 abgelehnt oder Lead-Times von 6-8 Wochen genannt.',

    approach: [
      {
        label: 'CAD-Optimierung für Druck-Effizienz',
        detail: 'Eigene CAD-Variation mit erhabenem Logo (statt graviertem) · reduziert Druckzeit pro Stück um 40%, weil keine zusätzlichen Verfahrwege für die Logo-Gravur nötig sind.',
      },
      {
        label: 'Parallelfertigung',
        detail: 'Alle FDM-Anlagen 24/7 in Parallel-Betrieb. Pro Druckbett 28 Ausstecher gleichzeitig. Ø-Ausstoß 850 Stück/Tag in Spitzenphasen.',
      },
      {
        label: 'Material: lebensmittelechtes PETG',
        detail: 'PETG aus geprüfter österreichischer Produktion mit FDA-Konformitäts-Zertifikat. Für Lebensmittelkontakt geeignet, spülmaschinenfest.',
      },
      {
        label: 'QA + Verpackung',
        detail: 'Jeder 50. Ausstecher manuell QA-geprüft (Stichprobe). Verpackung in 100er-Bündeln mit Lieferschein pro Standort.',
      },
    ],

    technicalSpecs: [
      { label: 'Stückzahl', value: '3.500 Stück' },
      { label: 'Material', value: 'PETG, lebensmittelecht' },
      { label: 'Größe pro Stück', value: '~9 × 7 × 1,5 cm' },
      { label: 'Druckzeit pro Stück', value: '~22 Min (in 28er-Batch parallel)' },
      { label: 'Lead-Time', value: '18 Werktage von Briefing bis Lieferung' },
      { label: 'Verpackung', value: '35 × 100er-Bündel mit Standort-Verteilung' },
    ],

    outcome:
      'Auslieferung 4 Tage vor Weihnachts-Aktion fertig. Generali setzt seitdem ekdruck für regelmäßige Mitarbeiter-Aktionen als Stammlieferant ein. Aus dem Auftrag entstand das Sub-Format "Klein-Serie 100-5.000 Stück" das jetzt ein eigener Service-Bereich ist.',

    lessons:
      'Lehre für Klein-Serie: NICHT alle Drucker gleichmäßig auslasten, sondern einen als "Reserve" laufen lassen für Ausfall-Risiko. Beim Generali-Auftrag fiel an Tag 12 ein Druckbett aus (verstopfte Düse) · ohne Reserve hätten wir 2 Tage verloren.',

    customerQuote: {
      text: 'Wir hatten in 3 Wochen eine ganze Charge in Weihnachts-Qualität · das schaffen sonst nicht mal die Spritzguss-Anbieter mit Werkzeugbau-Vorlauf.',
      attribution: 'Marketing-Verantwortliche Generali Österreich',
    },

    relatedCases: ['anlagenbau-pumpen-schnittmodell'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   CASE 3 · Werkzeugmaschine Schnittmodell (anonymisierter Maschinenbau-Kunde)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'maschinenbau-werkzeugmaschine-schnitt',
    title: '5-Achs-Bearbeitungszentrum als Schnitt-Modell für die EMO',
    customerLabel: 'Werkzeugmaschinen-Hersteller, Industrieviertel NÖ',
    branchen: ['maschinenbau'],
    region: 'niederoesterreich',
    year: 2025,
    status: 'completed',

    metaTitle: 'Case: 5-Achs-Bearbeitungszentrum als Schnittmodell für EMO Hannover',
    metaDescription: 'Wie wir eine 8-Tonnen-5-Achs-Fräse als 50-cm-Schnittmodell mit sichtbarem Werkzeugkopf und drehbarer Spindel für die EMO Hannover gedruckt haben.',
    primaryKeyword: 'Werkzeugmaschine Schnittmodell EMO',

    challenge:
      'Der Kunde · ein NÖ-Hersteller von Bearbeitungszentren · hatte eine Neuentwicklung für die EMO Hannover am Stand. Das Original wiegt 8 Tonnen, hätte den halben Stand belegt und wäre für die Engineering-Konversation eher abgelenkt als geholfen. Gesucht: ein Tisch-Modell, das den USP der Maschine (innovative 5-Achs-Kinematik mit kompakter Bauweise) auf einen Blick zeigt.',

    approach: [
      {
        label: 'Konstruktions-Übernahme',
        detail: 'CAD direkt aus dem Konstruktions-System. Reduktion auf die SEO-relevanten Komponenten: Maschinengestell, Werkzeugkopf, Spannfutter, Spindel, Linearführung.',
      },
      {
        label: 'Schnittebene-Design',
        detail: 'Halbmodell entlang der zentralen Werkzeug-Y-Achse. Schnittfläche markiert in Kontrast-Lackierung (rot) gegen das matte Anthrazit der Maschinengeometrie.',
      },
      {
        label: 'Bewegliche Spindel',
        detail: 'Spindel auf Mini-Kugellager montiert, manuell drehbar. Zeigt Live am Stand wie die Werkzeugaufnahme funktioniert.',
      },
      {
        label: 'Druckstrategie',
        detail: 'PLA+ für Detailtreue (0,1mm Schichthöhe an Schauflächen, 0,2mm an Innenstrukturen). Manuelles Schleifen der Schauflächen + Grundierung + 2K-Lackierung.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:7' },
      { label: 'Modell-Maße', value: '52 × 38 × 41 cm' },
      { label: 'Material', value: 'PLA+ + manuelle Nachbearbeitung' },
      { label: 'Druckzeit', value: '~95 Stunden über 6 Tage' },
      { label: 'Nachbearbeitung', value: '~12 Stunden Schleifen, Grundieren, Lackieren' },
      { label: 'Lead-Time', value: '14 Werktage' },
      { label: 'Special', value: 'Drehbare Spindel mit Mini-Kugellager' },
    ],

    outcome:
      'Maschinenmodell verbrachte 4 Messetage als zentraler Diskussionspunkt am Stand. 28 qualifizierte Engineering-Gespräche entlang des Modells. Zwei Folgeprojekte zur AMB Stuttgart 2026 bereits geplant.',

    customerQuote: {
      text: 'Wir hatten erwartet ein "nettes Beigabe-Modell" · bekommen haben wir ein Werkzeug für die Verkaufs-Diskussion. Jeder Engineer der den Stand besucht hat, hat sich am Modell aufgehalten.',
      attribution: 'Vertriebs-Leitung (anonymisiert)',
    },

    lessons:
      'Schnittebenen-Markierung in Kontrastfarbe ist ein Game-Changer · der Pain "ich erkenne nicht was die Schnittfläche zeigt" verschwindet sofort. Mache ich jetzt bei allen Cutaway-Modellen standardmäßig.',

    relatedCases: ['anlagenbau-pumpen-schnittmodell', 'industriemodell-mittelspannungs-anlage-dubai'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   CASE 4 · Pumpen-Schnittmodell für Vertriebs-Schulung
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'anlagenbau-pumpen-schnittmodell',
    title: 'Kreiselpumpen-Schnittmodell für Vertriebs-Tournee',
    customerLabel: 'Pumpen-Hersteller, OÖ-Industrieregion',
    branchen: ['anlagenbau'],
    region: 'oberoesterreich',
    year: 2025,
    status: 'completed',

    metaTitle: 'Case: Kreiselpumpen-Schnittmodell mit drehbarem Laufrad · 3D-Druck',
    metaDescription: 'Wie wir 6 Stück Kreiselpumpen-Schnittmodelle für die deutschsprachige Vertriebs-Tournee eines OÖ-Herstellers gedruckt haben. PLA, drehbar, mechanisch belastbar.',
    primaryKeyword: 'Pumpe Schnittmodell 3D-Druck',

    challenge:
      'Ein OÖ-Pumpenhersteller stellte 2025 eine neue Kreiselpumpen-Generation vor. 6 Vertriebs-Mitarbeiter starteten eine deutschsprachige Tournee bei Engineering-Kunden in DACH. Jeder brauchte ein griffsicheres, belastbares Schnittmodell zum Auf-den-Tisch-stellen und Erklären. Originale Pumpen-Demos waren zu groß für den Koffer + zu schwer für tägliches Transportieren.',

    approach: [
      {
        label: 'Mehrfach-Produktion in Klein-Serie',
        detail: '6 identische Modelle aus dem gleichen CAD. Parallel-Druck mit identischen Druck-Parametern für 1:1-Reproduzierbarkeit.',
      },
      {
        label: 'Drehbares Laufrad',
        detail: 'Laufrad auf Mini-Servo (manueller Drehknauf) montiert. Zeigt Live am Tisch wie die Strömungsdynamik funktioniert. Magnetische Verschluss-Klappe für Innenraum-Zugang.',
      },
      {
        label: 'Material-Wahl PETG',
        detail: 'PETG statt PLA wegen mechanischer Belastung · Vertriebs-Demos bedeuten 100+ Anfass-Zyklen pro Modell. PETG hält das ohne Spannungsrisse.',
      },
      {
        label: 'Transportkoffer + Reset-Anleitung',
        detail: 'Custom-3D-gedruckte Schaumstoff-Inserts in Standard-Transportkoffer. Plus laminierte A5-Karte mit Reset-Anleitung falls Verschluss-Magnet verrutscht.',
      },
    ],

    technicalSpecs: [
      { label: 'Stückzahl', value: '6 identische Sets' },
      { label: 'Maßstab', value: '1:3' },
      { label: 'Größe', value: '~28 × 22 × 18 cm pro Modell' },
      { label: 'Material', value: 'PETG, lackiert RAL 5012 (Lichtblau Anlagentyp)' },
      { label: 'Druckzeit', value: '~14 Stunden pro Modell' },
      { label: 'Lead-Time', value: '12 Werktage' },
      { label: 'Special', value: 'Drehbarer Antrieb, Magnetklappe, Transport-Koffer' },
    ],

    outcome:
      'Vertriebs-Tournee lief 4 Monate. Conversion-Rate Kundenbesuch → Angebotsanfrage stieg im Vergleich zu pre-Modell-Touren um geschätzt 35% (Customer-Feedback an Vertriebs-Leitung). Modelle wurden 2 Mal nachbestellt nach Reise-Verschleiß.',

    customerQuote: {
      text: 'Wenn ein Engineering-Kunde das Laufrad selbst drehen kann während er die Strömung im Kopf nachvollzieht, dann brauchen wir nicht mehr argumentieren. Die Pumpe verkauft sich selbst.',
      attribution: 'Vertriebs-Leiter Pumpenbau OÖ',
    },

    relatedCases: ['maschinenbau-werkzeugmaschine-schnitt', 'industriemodell-mittelspannungs-anlage-dubai'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   CASE 5 · Architekturmodell Stadtentwicklung Wien
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'wien-stadtentwicklung-1-500-stadtmodell',
    title: 'Stadtmodell 1:500 für Behördentermin Wien Stadtentwicklung',
    customerLabel: 'Architekturbüro, Wien 9. Bezirk',
    branchen: ['architektur'],
    region: 'wien',
    year: 2025,
    status: 'completed',

    metaTitle: 'Case: Stadtmodell 1:500 Wien Stadtentwicklung · Architekturmodell 3D-Druck',
    metaDescription: 'Wie wir ein 80×60cm Stadtmodell 1:500 mit umliegender Bebauung in 11 Werktagen für ein Wiener Architekturbüro gedruckt haben.',
    primaryKeyword: 'Stadtmodell 1:500 Wien',

    challenge:
      'Wiener Architekturbüro hatte einen Behördentermin bei der MA21 zur Stadtentwicklungs-Projekt-Vorstellung. Ein 80×60cm Stadtmodell im Maßstab 1:500 wurde gebraucht · Hauptobjekt + umliegende Bebauung (ca. 4 Blocks) zur Kontext-Darstellung. Zeitfenster: 11 Werktage von Auftrag bis Termin.',

    approach: [
      {
        label: 'CAD-Aufbereitung aus ArchiCAD',
        detail: 'Direkt-Import aus ArchiCAD. Reduktion der Geometrie-Details auf maßstabsrelevante Ebene (Dächer, Fenster-Strukturen, Erdgeschoss-Eingänge · keine Ornamente die im 1:500 nicht erkennbar sind).',
      },
      {
        label: 'Segmentierung',
        detail: 'Modell in 4 Sektionen aufgeteilt (jeweils ~40×30cm). Segmente passen einzeln auf das Druckbett, werden über Holz-Trägerplatte unsichtbar verbunden.',
      },
      {
        label: 'Hauptobjekt-Kontrast',
        detail: 'Hauptobjekt in Weiß-Lackierung, umliegende Bebauung in mattem Beton-Grauton. Klare visuelle Hierarchie zwischen "neu geplant" und "Bestand".',
      },
      {
        label: 'Übergabe vor Ort',
        detail: 'Persönliche Übergabe im Wiener Büro (9. Bezirk). Aufbau und Erklärung der Magnet-Reset-Punkte direkt mit dem Modellbauer.',
      },
    ],

    technicalSpecs: [
      { label: 'Maßstab', value: '1:500' },
      { label: 'Modell-Maße', value: '80 × 60 cm, 4 Sektionen' },
      { label: 'Material', value: 'PLA, lackiert in 2 Farbtönen (Weiß + Beton-Grau)' },
      { label: 'Druckzeit', value: '~70 Stunden' },
      { label: 'Lead-Time', value: '11 Werktage inkl. Übergabe' },
      { label: 'Special', value: 'CAD-Direkt-Import ArchiCAD, persönliche Übergabe Wien' },
    ],

    outcome:
      'Behördentermin erfolgreich. Projekt erhielt die nächste Planungsphase-Freigabe. Architekturbüro setzt seitdem für jeden Behörden-/Bauherren-Termin Modelle bei ekdruck in Auftrag (Wiederkehr-Kunde).',

    customerQuote: {
      text: 'Direkt-CAD-Import aus ArchiCAD ohne Konvertierungs-Drama, persönliche Übergabe in Wien, 11 Werktage Lead-Time. Das ist die Geschwindigkeit die wir brauchen, wenn die Behörde den Termin um 3 Wochen vorzieht.',
      attribution: 'Projekt-Leitung, Architekturbüro Wien',
    },

    relatedCases: ['wien-stadtentwicklung-1-500-stadtmodell'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   CASE 6 · Theater Zackbumm · Bühnenbild-Verbinder (mit Fotos)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: 'theater-zackbumm-buehnenbild-verbinder',
    title: 'Bühnenbild für die Theaterproduktion Zackbumm, 170 Verbindungsstücke aus dem 3D-Druck',
    customerLabel: 'Theaterproduktion Zackbumm',
    branchen: [],
    year: 2026,
    status: 'completed',

    metaTitle: 'Case: Bühnenbild-Verbinder für die Theaterproduktion Zackbumm · 3D-Druck',
    metaDescription:
      'Wie ek-druck 170 Verbindungsstücke in vier Typen für die verzweigten Baum-Strukturen im Bühnenbild der Theaterproduktion Zackbumm gefertigt hat. Kleinserie aus dem 3D-Druck.',
    primaryKeyword: 'Bühnenbild 3D-Druck',

    challenge:
      'Für das Bühnenbild der Theaterproduktion Zackbumm sollten mehrere mannshohe, verzweigte Baum-Strukturen entstehen, aufgebaut aus schlanken Bambusstäben. Das Problem: für die vielen organischen Verzweigungswinkel gibt es keine fertigen Verbinder. Jeder Ast zweigt in einem anderen Winkel ab, stabil genug für den Bühnenbetrieb und leicht genug, damit die Struktur nicht kippt.',

    approach: [
      {
        label: 'Vier Verbinder-Typen aus der Skizze',
        detail:
          'Aus der Handskizze der Ausstattung habe ich vier Typen abgeleitet, nach Verzweigung geordnet: gerade Verlängerung, einfache Gabelung, Dreifach-Knoten und der große Verzweiger. Jeder Typ nimmt die Bambusstäbe im passenden Winkel auf.',
      },
      {
        label: 'Hohl gedruckt, leicht und stabil',
        detail:
          'Die Stücke sind hohl ausgelegt, circa 15 cm groß. So bleiben die Baum-Strukturen leicht und stehen trotzdem sicher. Grün eingefärbt, damit die Verbinder im Bühnenlicht mit den Ästen verschmelzen.',
      },
      {
        label: 'Kleinserie mit 170 Stück',
        detail:
          '170 Stücke in Mehrfachfertigung: 45 vom Typ I, 15 vom Typ II, 45 vom Typ III und 65 vom Typ IV. Alle Schicht für Schicht aus dem 3D-Druck, in gleichbleibender Qualität.',
      },
      {
        label: 'Werkzeugloses Stecksystem',
        detail:
          'Die Verbinder funktionieren als Stecksystem. Die Bühnentechnik setzt die Baum-Strukturen ohne Werkzeug zusammen, baut sie um und zerlegt sie für den Transport wieder.',
      },
    ],

    technicalSpecs: [
      { label: 'Einsatz', value: 'Bühnenbild und Requisiten' },
      { label: 'Typen', value: '4 Verbinder-Typen' },
      { label: 'Stückzahl', value: '170 Stück (45 / 15 / 45 / 65)' },
      { label: 'Größe', value: 'circa 15 cm je Stück, hohl' },
      { label: 'Farbe', value: 'Grün eingefärbt' },
      { label: 'Fertigung', value: 'Kleinserie aus dem 3D-Druck (FDM)' },
      { label: 'Aufbau', value: 'Werkzeugloses Stecksystem für Bambusstäbe' },
    ],

    outcome:
      'Aus den 170 Verbindungsstücken und den Bambusstäben sind die verzweigten Baum-Strukturen entstanden, die das Bühnenbild der Produktion prägen. Ein Projekt abseits der Industrie, das zeigt, wie vielseitig 3D-Druck im Bühnen- und Ausstattungsbereich ist.',

    lessons:
      'Organische, verzweigte Formen lassen sich mit wenigen klug gewählten Verbinder-Typen erstaunlich flexibel aufbauen. Vier Typen haben für die ganze Bühne gereicht.',

    images: [
      { src: '/cases/zackbumm-vogel-marionette.jpg', alt: 'Vogelfigur mit gedrucktem Kopf im Bühnenbild der Theaterproduktion Zackbumm' },
      { src: '/cases/zackbumm-buehne.jpg', alt: 'Bühne mit verzweigten Baum-Strukturen aus Bambus und gedruckten Verbindungsstücken' },
      { src: '/cases/zackbumm-musiker.jpg', alt: 'Musikerinnen und Figuren im Bühnenbild der Produktion Zackbumm' },
      { src: '/cases/zackbumm-detail.jpg', alt: 'Detail der verzweigten Ast-Strukturen im Bühnenbild' },
    ],
    photoCredit: 'Hanna Naske',
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
