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
      'Auslieferung 4 Tage vor Weihnachts-Aktion fertig. Generali setzt seitdem ekdruck für regelmäßige Mitarbeiter-Aktionen als Stammlieferant ein. Aus dem Auftrag entstand das Sub-Format "Mehrfachfertigung 100-5.000 Stück" das jetzt ein eigener Service-Bereich ist.',

    lessons:
      'Lehre für Mehrfachfertigung: NICHT alle Drucker gleichmäßig auslasten, sondern einen als "Reserve" laufen lassen für Ausfall-Risiko. Beim Generali-Auftrag fiel an Tag 12 ein Druckbett aus (verstopfte Düse) · ohne Reserve hätten wir 2 Tage verloren.',

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
        label: 'CAD-Übernahme',
        detail: 'Daten direkt aus dem CAD-System des Kunden. Reduktion auf die sichtbaren Kern-Komponenten: Maschinengestell, Werkzeugkopf, Spannfutter, Spindel, Linearführung.',
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
    metaDescription: 'Wie wir 6 Stück Kreiselpumpen-Schnittmodelle für die deutschsprachige Vertriebs-Tournee eines OÖ-Herstellers gedruckt haben. PETG, drehbares Laufrad, gemacht für den täglichen Transport.',
    primaryKeyword: 'Pumpe Schnittmodell 3D-Druck',

    challenge:
      'Ein OÖ-Pumpenhersteller stellte 2025 eine neue Kreiselpumpen-Generation vor. 6 Vertriebs-Mitarbeiter starteten eine deutschsprachige Tournee bei Engineering-Kunden in DACH. Jeder brauchte ein griffsicheres Schnittmodell zum Auf-den-Tisch-stellen und Erklären, das den Reise-Alltag mitmacht. Originale Pumpen-Demos waren zu groß für den Koffer + zu schwer für tägliches Transportieren.',

    approach: [
      {
        label: 'Mehrfachfertigung',
        detail: '6 identische Modelle aus dem gleichen CAD. Parallel-Druck mit identischen Druck-Parametern für 1:1-Reproduzierbarkeit.',
      },
      {
        label: 'Drehbares Laufrad',
        detail: 'Laufrad auf Mini-Servo (manueller Drehknauf) montiert. Zeigt Live am Tisch wie die Strömungsdynamik funktioniert. Magnetische Verschluss-Klappe für Innenraum-Zugang.',
      },
      {
        label: 'Material-Wahl PETG',
        detail: 'PETG statt PLA, weil die Modelle täglich in die Hand genommen werden · Vertriebs-Demos bedeuten 100+ Anfass-Zyklen pro Modell. PETG steckt das weg.',
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

    relatedCases: ['ortsmodell-1-500-gemeindepraesentation'],
  },

  // ═══════════════════════════════════════════════════════════════
  //   CASE 6 · Ortsmodell 1:500 für Gemeindepräsentation (mit Fotos)
  // ═══════════════════════════════════════════════════════════════
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

    relatedCases: ['wien-stadtentwicklung-1-500-stadtmodell'],
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
