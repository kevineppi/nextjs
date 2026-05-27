/**
 * Service-Page SEO-Content — ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * Long-Tail-keyword-reiche Prose-Blöcke + FAQ-Sets pro Service-Page.
 * Wird gerendert in ServiceLongTailSection und ServiceFaqSection.
 *
 * Strategie: jede Service-Page bekommt 4-5 Absätze á 80-150 Wörter
 * mit den primären + sekundären Keywords semantisch eingestreut.
 * Plus 7-10 FAQs mit FAQPage-Schema für AI-Overview-Optimierung.
 */

export interface ServiceSeoContent {
  slug: string
  // Long-Tail-Body
  longTailBody: {
    eyebrow: string
    h2: string
    paragraphs: string[]
  }
  // FAQ-Set für FAQPage-Schema + AI-Overviews
  faqs: {
    question: string
    answer: string
  }[]
}

// ═══════════════════════════════════════════════════════════════════
//   MESSEMODELLE
// ═══════════════════════════════════════════════════════════════════
const messemodelle: ServiceSeoContent = {
  slug: 'messemodelle',
  longTailBody: {
    eyebrow: 'Was Messemodelle bei ek-druck konkret bedeuten',
    h2: 'Messemodelle drucken lassen — Maßstäbe, Materialien, Lead-Times im Detail',
    paragraphs: [
      'Ein Messemodell aus dem 3D-Druck ersetzt das, was im Original zu groß, zu schwer oder zu wertvoll für den Messestand ist. Eine 8-Tonnen-Werkzeugmaschine wird zum 50-Zentimeter-Tisch-Exponat. Eine 280-Meter-Windturbine wird zum 1,5-Meter-Demonstrator mit drehbaren Rotorblättern. Eine 2-Tonnen-Schiffsschraube wird zum maßstabsgetreuen Anschauungsmodell. Die Lead-Time für ein 3D-gedrucktes Messemodell liegt zwischen 2 und 6 Wochen, abhängig von Größe, Material und Veredelungstiefe — bei Express auch in 24-48 Stunden machbar.',
      'Der Maßstab für ein Messemodell drucken zu lassen wird durch zwei Faktoren bestimmt: Originalgröße und verfügbare Tischfläche am Messestand. Faustregel für die Maßstabswahl bei Messemodellen: bei einer 2-5 Meter großen Maschine ist 1:5 bis 1:10 üblich (ergibt 30-60 cm Modellgröße), bei 5-15 Meter Originalgröße ist 1:10 bis 1:25 typisch, bei 15-50 Meter (Komplettanlagen) 1:25 bis 1:50 mit Segmentierung. Bei einem Schiff- oder Yacht-Messemodell sind Maßstäbe 1:50 bis 1:200 üblich, je nach Schiffsgröße.',
      'Material-Wahl beim Messemodell-Druck hängt ab von Einsatz-Häufigkeit und gewünschter Optik. PLA ist die Standard-Wahl für einmalige Messen mit beste Detailtreue. PETG ist robuster und hält 5-10 Messen ohne sichtbaren Verschleiß. ABS mit Aceton-Dampfglättung ergibt eine Spritzguss-ähnliche Oberfläche für Premium-Show-Quality-Modelle. Carbon-PA wird verwendet wenn das Messemodell mechanisch belastet wird (z.B. tragende Strukturen bei aktiven Demonstratoren mit Servo-Motor). Lackierung in RAL- oder Pantone-Codes ist Standard, OEM-Originalfarben werden auf Anfrage präzise getroffen.',
      'Express-Messemodelle in 24-48 Stunden sind möglich, wenn die Voraussetzungen passen: CAD muss druckreif sein (keine Geometrie-Korrekturen mehr nötig), Material muss verfügbar sein (keine Sonder-Filamente bestellen), und das Modell darf nicht zu groß sein (Express funktioniert bis ca. 40-50 cm Maximalkante). Bei Express-Messemodellen wird ein Aufschlag von 30% auf den Standardpreis fällig. Bei Standard-Lead-Time von 3-4 Wochen ist der Express-Aufpreis vermeidbar. Wer schon 6-8 Wochen vor der Messe anfragt, bekommt zusätzlich die Möglichkeit für Veredelungs-Optionen wie Aceton-Glättung oder mehrfarbige Profi-Lackierung.',
      'Messemodell drucken lassen lohnt sich finanziell, wenn die Alternative — Originalanlage zur Messe transportieren — Logistik-Kosten von 5.000 € bis 20.000 € verursachen würde plus Risiko von Transportschäden. Ein typisches Messemodell kostet zwischen 800 € (Komponentenmodell) und 12.000 € (Komplettanlage segmentiert, 1m+, lackiert). Die Investition lohnt sich ab der ersten Messe und das Modell ist für mindestens 5-10 weitere Messen wiederverwendbar. Bei Industriegüter-Ausstellern in Maschinenbau, Schiffbau, Energietechnik, Automotive, Anlagenbau und Elektrotechnik ist das Messemodell aus dem 3D-Druck inzwischen Standard-Setup statt Sonderfall.',
    ],
  },
  faqs: [
    {
      question: 'Was kostet ein Messemodell aus dem 3D-Druck?',
      answer:
        'Mini-Komponentenmodell 15-25cm: €150-€500. Mittleres Bauteil-Modell mit Lackierung: €600-€1.800. Schnittmodell mit beweglichen Teilen: €1.500-€4.500. Komplettanlage segmentiert (1m+): €3.500-€12.000. Premium-Show-Quality mit Beleuchtung und aktiven Funktionen: bis €18.000. Verbindliches Festpreisangebot binnen 6 Stunden nach CAD-Upload.',
    },
    {
      question: 'Wie lange dauert die Herstellung eines Messemodells?',
      answer:
        'Standard-Lead-Time 2-6 Wochen, abhängig von Größe und Komplexität. Express 48 Stunden gegen 15% Aufpreis möglich, Express 24h gegen 30% Aufpreis. Bei sehr komplexen segmentierten Großmodellen (>1m, viele Sektionen) kann die Lead-Time bis zu 8 Wochen betragen. Empfehlung: 6-8 Wochen Vorlauf einplanen für entspannte Veredelungs-Optionen.',
    },
    {
      question: 'Welcher Maßstab passt zu meinem Messemodell?',
      answer:
        'Faustregel: Maßstab so wählen, dass das Modell auf einen Standard-Messestand-Tisch (60×80cm oder 80×120cm) passt. Bei 2-5m Originalgröße ist 1:5 bis 1:10 typisch. Bei 5-15m Originalgröße 1:10 bis 1:25. Bei Schiffen/Yachten 1:50 bis 1:200. Wir kalkulieren bei Anfrage automatisch den optimalen Maßstab basierend auf Standgröße und Sichtbarkeit.',
    },
    {
      question: 'Welche CAD-Formate werden für Messemodelle akzeptiert?',
      answer:
        'STEP (.step, .stp), IGES (.iges, .igs), STL (.stl), 3MF, sowie native Formate aus SolidWorks, Inventor, Fusion 360, Creo, NX, ArchiCAD, Revit und Rhino. Bei NDA-Projekten erfolgt der CAD-Transfer über verschlüsselte Strecke, die Daten werden nach Lieferung vertraglich gelöscht. Falls kein CAD vorhanden: wir modellieren nach Skizze oder Fotos für €80/Stunde (typisch 2-6 Stunden für ein mittleres Maschinenmodell).',
    },
    {
      question: 'Kann das Messemodell zerlegbar oder segmentiert gedruckt werden?',
      answer:
        'Ja, Standard bei größeren Modellen über 60cm. Wir konstruieren Steck- oder Magnetverbindungen entlang natürlicher Trennebenen. Bei segmentierten Komplettanlagen sind die Stöße nach Spachtelung und Lackierung aus 1m Distanz nicht sichtbar. Aufbau am Messestand dauert typisch unter 10 Minuten mit beigelegter Aufbau-Anleitung.',
    },
    {
      question: 'Welche Materialien eignen sich am besten für Messemodelle?',
      answer:
        'PLA für einmalige Messen mit höchster Detailtreue. PETG für 5-10 Messen — robuster, UV-stabil. ABS mit Aceton-Glättung für Premium-Show-Quality (Spritzguss-Optik). Carbon-PA bei mechanisch belasteten Demonstratoren mit Servo-Motoren. ASA für Outdoor-tauglichkeit. Lackierung in beliebigem RAL- oder Pantone-Ton ist Standard.',
    },
    {
      question: 'Liefern Sie das Messemodell direkt an die Messeadresse?',
      answer:
        'Ja. Direktversand an Messehalle und Stand-Nummer ist Standard. Versand erfolgt 5-7 Tage vor Messebeginn. Bei wertvollen Großmodellen empfehlen wir Spedition mit Versicherung oder persönliche Anlieferung in AT/DE/CH gegen Reisepauschale. Bei Last-Minute-Aufträgen organisieren wir auch Kurier-Express-Versand.',
    },
    {
      question: 'Können bewegliche Teile (drehbare Räder, Klappen) integriert werden?',
      answer:
        'Ja. Drehbare Räder, Spindeln, Rotorblätter auf Mini-Kugellagern sind Standard. Magnet-Klappen für aufklappbare Sektionen. Servo-Motor (12V) für aktive Live-Demonstrationen am Stand. Jeder mechanische Mechanismus kostet zwischen €80 und €500 Aufpreis je nach Komplexität.',
    },
    {
      question: 'Wie wird das Logo am Messemodell integriert?',
      answer:
        'Vier Optionen: erhabenes 3D-Logo (inklusive im Standardpreis), graviertes Logo (inklusive), UV-Druck CMYK direkt auf Oberfläche (ab €30 pro Logo), lasergraviertes Metall-Inlay für authentische Typenschild-Optik (ab €40). Mehrere Logos pro Modell sind möglich.',
    },
    {
      question: 'Was passiert wenn das Modell auf der Messe beschädigt wird?',
      answer:
        'Standard-Reparatur-Kit für unterwegs auf Anfrage gegen €25 mitgeliefert (Sekundenkleber-Stift, Sandpapier, Reserve-Magnete, Edding für Lack-Touch-Ups). Bei kritischen Schäden Express-Nachdruck startet binnen 24h (Sa+So eingeschränkt). WhatsApp-Notfall-Hotline +43 676 5517197 mit Antwortzeit unter 30 Minuten werktags.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//   ARCHITEKTURMODELLE
// ═══════════════════════════════════════════════════════════════════
const architekturmodelle: ServiceSeoContent = {
  slug: 'architekturmodelle',
  longTailBody: {
    eyebrow: 'Was Architekturmodelle bei ek-druck konkret bedeuten',
    h2: 'Architekturmodell drucken lassen — Maßstäbe, CAD-Workflows, typische Projekte',
    paragraphs: [
      'Ein Architekturmodell aus dem 3D-Druck ist das physische Kommunikations-Werkzeug für Wettbewerbsabgaben, Behördentermine, Bauherrenpräsentationen und Investorenpitches. Der typische Maßstab für ein 3D-gedrucktes Architekturmodell liegt zwischen 1:50 (Detail-Modell eines Gebäudes) und 1:1000 (Stadtmodell mit weitläufiger Bebauung). Für Wettbewerbsmodelle ist 1:200 bis 1:500 die häufigste Wahl, weil ein einzelnes Gebäude mit seiner näheren Umgebung darstellbar bleibt ohne dass das Modell zu groß für den Wettbewerbs-Standard wird.',
      'CAD-Import für Architekturmodelle bedeutet: wir nehmen Ihre ArchiCAD-, Revit-, Rhino-, SketchUp-, Vectorworks- oder AutoCAD-Datei direkt entgegen. Bei Direkt-Import aus ArchiCAD/Revit kommt es darauf an, dass die Geometrie wasserdicht ist und Details im Maßstabs-relevanten Bereich liegen — eine 8mm-Türklinke wird im Maßstab 1:500 ohnehin nicht sichtbar gedruckt, daher konstruktiv reduziert. Wir machen diese Reduzierung beim Slicing automatisch, ohne dass Sie das CAD vorher aufräumen müssen.',
      'Wettbewerbsmodell drucken lassen ist die häufigste Anfrage von Architekturbüros bei ek-druck. Ein typisches Wettbewerbsmodell für eine Wohnbau-Abgabe im Maßstab 1:200 mit Hauptgebäude und 2-3 Umgebungsblöcken kostet zwischen €600 und €1.800 und braucht 8-15 Werktage Lead-Time. Express-Wettbewerbsmodelle in 5 Werktagen sind gegen 30% Aufpreis machbar, wenn die Geometrie nicht zu komplex ist. Häufig kombiniert mit Sockel aus Holz oder MDF, den wir auf Wunsch maßgenau zuschneiden lassen.',
      'Stadtmodell drucken im großen Maßstab (60×80cm bis 120×80cm) ist die anspruchsvollste Kategorie. Hier konstruieren wir Segmentierungen entlang natürlicher Straßenführungen, sodass die Stoßstellen optisch unsichtbar bleiben. Hauptobjekt der Visualisierung wird in Kontrast-Lackierung (typisch weiß) gegen die umliegende Bestandsbebauung (matt-grau, "Beton-Look") gedruckt — das macht die visuelle Hierarchie sofort lesbar. Stadtmodelle für Wiener Bauherrenprojekte, Linzer Stadtentwicklung oder Salzburger Sanierungsprojekte sind regelmäßige Aufträge.',
      'Architekturmodell ab €20 ist eine Untergrenze für sehr kleine Einzelobjekte ohne Umgebung — z.B. ein einzelner Pavillon im Maßstab 1:200 in Weiß. Das deckt selten den tatsächlichen Projektbedarf — die meisten Architekturbüros bestellen Modelle zwischen €400 und €3.500 mit Umgebung, Lackierung und Sockel. Architekturmodell-Flatrate für Architekturbüros mit regelmäßigem Bedarf ab €199 pro Monat — beinhaltet ein freies Modell-Kontingent plus garantierte Lead-Time. Details unter /architekturmodelle-abo.',
    ],
  },
  faqs: [
    {
      question: 'Was kostet ein Architekturmodell aus dem 3D-Druck?',
      answer:
        'Kleinmodell 1:200, einzelner Baukörper in Weiß: €120-€400. Mittleres Wettbewerbsmodell mit Sockel + Umgebung: €600-€1.800. Großes Stadtmodell 1:500-1:1000, 60×80cm+: €2.500-€8.000. Premium-Modell mit Beleuchtung und mehreren Detailebenen: bis €15.000.',
    },
    {
      question: 'Welche CAD-Software wird unterstützt für Architekturmodelle?',
      answer:
        'Direkt-Import aus ArchiCAD, Revit, Rhino, SketchUp, Vectorworks, AutoCAD, sowie alle Standard-Austauschformate (STEP, IGES, STL, 3MF, OBJ). Bei komplexen Modellen mit viel Innenstruktur reduzieren wir die Geometrie auf maßstabsrelevante Ebene — Sie müssen das CAD nicht vorher aufräumen.',
    },
    {
      question: 'Welcher Maßstab passt für ein Wettbewerbsmodell?',
      answer:
        'Für klassische Wettbewerbsabgaben ist 1:200 oder 1:500 Standard. Bei Detail-Studien einzelner Gebäude 1:50 bis 1:100. Bei großen Stadt-Wettbewerben 1:500 bis 1:1000. Faustregel: Modell sollte auf einer Fläche von 60×80cm oder 80×120cm passen für gute Sichtbarkeit am Wettbewerbstisch.',
    },
    {
      question: 'Wie schnell ist ein Express-Wettbewerbsmodell machbar?',
      answer:
        'Express 5-7 Werktage gegen 30% Aufpreis machbar — falls Geometrie nicht zu komplex ist und Lackierungs-Wunsch sich auf 1-2 Farben begrenzt. Bei knapp zur Wettbewerbs-Frist: rufen Sie an unter +43 676 5517197, ich prüfe Kapazität sofort.',
    },
    {
      question: 'Wird das Architekturmodell lackiert oder bleibt es weiß?',
      answer:
        'Beides möglich. Standardmäßig weiß (PLA-Material-Originalfarbe) für klassischen Architekturmodell-Look. Alternativ lackiert in RAL/Pantone für realistische Materialdarstellung (z.B. Beton-Grau für Bestand, Holz-Optik für Holzbau-Elemente). Aufpreis Grundlackierung pro Sektion ab €40, 2K-Profi-Lackierung ab €120.',
    },
    {
      question: 'Können Stadt- und Umgebungsmodelle segmentiert geliefert werden?',
      answer:
        'Ja, Standard bei Modellen über 60cm. Segmentierung entlang natürlicher Straßenführungen mit Magnetverbindungen. Bei 100×80cm-Stadtmodellen typisch 4-6 Sektionen, Aufbau in 5-10 Minuten am Bauherrentermin.',
    },
    {
      question: 'Was ist die Architekturmodell-Flatrate?',
      answer:
        'Festpreis-Abo für Architekturbüros mit regelmäßigem Modellbedarf: ab €199/Monat. Beinhaltet eine bestimmte Anzahl Modelle pro Monat (je nach Tarif 3-15 Stück), garantierte Lead-Time und persönlichen Ansprechpartner. Erstes Modell kostenlos testen, monatlich kündbar. Details unter /architekturmodelle-abo.',
    },
    {
      question: 'Liefern Sie das Architekturmodell mit Sockel?',
      answer:
        'Sockel aus Holz oder MDF auf Wunsch — entweder von uns auf Maß zugeschnitten (ab €40) oder Sie liefern den Sockel und wir bauen das Modell direkt darauf. Bei Wettbewerbsmodellen oft mit beschriftbarem Plexiglas-Cover, das wir auf Maß bestellen.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//   PROTOTYPING
// ═══════════════════════════════════════════════════════════════════
const prototyping: ServiceSeoContent = {
  slug: 'prototyping',
  longTailBody: {
    eyebrow: 'Was Rapid Prototyping bei ek-druck konkret bedeutet',
    h2: 'Rapid Prototyping — Funktionsmuster und Designstudien in 24-48 Stunden',
    paragraphs: [
      'Rapid Prototyping aus dem FDM-3D-Druck heißt: vom CAD zur physischen Komponente in 24-48 Stunden Standard-Express. Funktionsmuster für mechanische Tests, Designstudien für Konzept-Iterationen, Vorabmodelle für Spritzguss-Entscheidungen — der 3D-Druck-Prototyp ersetzt klassische Werkzeugbau-Lead-Times von 6-12 Wochen mit dem Bruchteil der Kosten. Ein typisches Funktionsmuster im PLA kostet €25-€80 pro Stück, ein anspruchsvolles Carbon-PA-Bauteil für mechanische DV/PV-Tests €120-€400.',
      'Funktionsprototyp drucken bedeutet bei ek-druck konkret: die Geometrie wird so optimiert, dass das Bauteil tatsächlich seine Funktion erfüllt. Wandstärken, Materialwahl, Druckrichtung (Layer-Orientation) — alles wird auf die geplante Belastung abgestimmt. Carbon-PA hat eine Festigkeit nahe Aluminium und eignet sich für mechanisch belastete Funktionsmuster. PETG ist robust und schlagfest für stoßbelastete Komponenten. Für reine Designstudien ohne mechanische Belastung ist PLA ausreichend und detailgetreuer.',
      'Designprototyp für die Produktentwicklung wird typisch in Iterationen gedruckt — Version 1, Version 2, Version 3 — mit jeweils 3-5 Werktagen Lead-Time pro Iteration. Bei Stammkunden mit regelmäßigem Prototyping-Bedarf vergeben wir bis zu 20% Stammkunden-Rabatt auf Folgeaufträge. Klein-Serien-Fertigung von Vorserien ab 10 Stück mit 10-30% Mengenrabatt machbar. Carbon-PA-Komponenten für DV/PV-Tests vor Spritzguss-Werkzeugbau sind eine häufige Anfrage von Industriegüter-Herstellern.',
      'Toleranzen beim FDM-Prototyping: typisch ±0,1 mm pro 100 mm Bauteilgröße. Bei kritischen Funktionsdetails (z.B. Lagerungs-Bohrungen, Steck-Verbindungen) erreichen wir ±0,05 mm in einzelnen Bereichen durch Nachbearbeitung. Wenn engere Toleranzen nötig sind (<±0,02 mm), ist FDM-3D-Druck an Grenzen — dann empfehlen wir SLA-Druck über Partner-Netzwerk oder klassische Zerspanung. Reverse Engineering von vorhandenen Bauteilen via 3D-Scan und CAD-Rekonstruktion ist auf Anfrage möglich.',
      'Prototyp drucken lassen mit Express 24h funktioniert wenn drei Voraussetzungen passen: CAD ist druckreif, Material ist verfügbar, Bauteil ist unter 30 cm Maximalkante. Express 24h kostet 30% Aufpreis auf Standard. Express same-day (Versand am Bestelltag) ist selten möglich und nur für kleine Bauteile bis 15 cm und PLA/PETG. Bei Anfragen sehr kurzfristig: rufen Sie an unter +43 676 5517197, ich prüfe Kapazität live. Stammkunden mit DfAM-Beratung (Design for Additive Manufacturing): konstruktive Pre-Flight-Begleitung der Geometrie für optimale Druck-Tauglichkeit.',
    ],
  },
  faqs: [
    {
      question: 'Was kostet ein 3D-Druck-Prototyp?',
      answer:
        'Kleines Bauteil PLA (Faustgröße, 1 Stück): €25-€80. Mittleres Bauteil mit Carbon-PA für mechanische Tests: €120-€400 pro Stück. Klein-Serie 10-50 Stück: 15-30% Mengenrabatt. Ab 100 Stück individuelle Kalkulation, oft günstiger durch Druckbett-Optimierung.',
    },
    {
      question: 'Wie lange dauert ein Funktionsprototyp?',
      answer:
        'Standard 3-5 Werktage. Express 24-48h gegen 30% Aufpreis machbar. Bei sehr kleinen Bauteilen unter 15 cm Maximalkante teils auch same-day möglich. Lead-Time abhängig von Material-Verfügbarkeit und aktueller Kapazitäts-Auslastung.',
    },
    {
      question: 'Welche Materialien eignen sich für Funktionsprototypen?',
      answer:
        'PLA für Designstudien ohne mechanische Belastung. PETG für robuste Daueranwendungen und Schlagfestigkeit. ABS für Aceton-Glättung und Spritzguss-ähnliche Oberfläche. Carbon-PA (PA6-CF) für mechanisch belastete Funktionsmuster mit Festigkeit nahe Aluminium. ASA für UV-stabile Outdoor-Anwendungen.',
    },
    {
      question: 'Welche Toleranzen sind beim FDM-Prototyping erreichbar?',
      answer:
        'Typisch ±0,1 mm pro 100 mm Bauteilgröße. Bei kritischen Funktionsdetails durch Nachbearbeitung ±0,05 mm in einzelnen Bereichen. Engere Toleranzen unter ±0,02 mm sind mit FDM nicht zuverlässig — dann SLA-Druck über Partner oder klassische Zerspanung empfohlen.',
    },
    {
      question: 'Können Sie auch nach Skizze oder Foto modellieren?',
      answer:
        'Ja. CAD-Modellierung nach Skizze, Foto oder Bemaßungs-Zeichnung gegen €80/Stunde. Typisch 2-6 Stunden für ein mittleres Bauteil, 6-20 Stunden für komplexe Maschinen-Geometrien. Reverse Engineering von vorhandenen Bauteilen via 3D-Scan und CAD-Rekonstruktion auf Anfrage.',
    },
    {
      question: 'Gibt es Stammkunden-Rabatte für regelmäßiges Prototyping?',
      answer:
        'Ja. Bei regelmäßigen Prototyping-Aufträgen (3+ Projekte pro Quartal) bis zu 20% Stammkunden-Rabatt auf Folgeaufträge. Bei Rahmenverträgen mit garantierter Mindestabnahme zusätzliche Konditionen verhandelbar.',
    },
    {
      question: 'Können Sie Kleinserien (10-100 Stück) fertigen?',
      answer:
        'Ja. Kleinserien bis 500 Stück über parallelisiertes Drucker-Setup. Ab 10 Stück 10% Rabatt, ab 50 Stück 15%, ab 100 Stück 20%. Druckbett-Optimierung ermöglicht oft zusätzliche Kostenvorteile bei größeren Stückzahlen.',
    },
    {
      question: 'Was ist DfAM-Beratung?',
      answer:
        'Design for Additive Manufacturing — konstruktive Pre-Flight-Begleitung Ihrer Geometrie für optimale Druck-Tauglichkeit. Wir prüfen vor dem Druck: Wandstärken, Überhänge, Support-Strategien, Layer-Orientation, kritische Funktionsdetails. Beratung gegen Stundensatz oder pauschal im Stammkunden-Rahmen.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//   FIRMENKUNDEN / B2B
// ═══════════════════════════════════════════════════════════════════
const firmenkunden: ServiceSeoContent = {
  slug: 'firmenkunden',
  longTailBody: {
    eyebrow: 'B2B-Konditionen bei ek-druck konkret',
    h2: 'Firmenkunden & B2B — Rahmenverträge, NDA, Mengenrabatt im Detail',
    paragraphs: [
      'B2B-3D-Druck mit ek-druck bedeutet: Mengenrabatt ab 5 Stück, Zahlungsziel 30 Tage nach Auftragserteilung, NDA-fähige Projektabwicklung mit verschlüsseltem Datentransfer, persönlicher Ansprechpartner ohne Vertriebsfilter. Als österreichisches Einzelunternehmen mit Kleinunternehmer-Regelung stelle ich ohne USt-Aufschlag aus — für B2B-Kunden mit UID neutral, für AT-Privatkunden ist das ein direkter Preisvorteil. Rahmenverträge mit garantierter Mindestabnahme und Sonderkonditionen sind verhandelbar ab €5.000 jährlichem Auftragsvolumen.',
      'Rahmenvertrag 3D-Druck B2B funktioniert so: Sie definieren ein jährliches Auftragsvolumen (typisch €5.000-€50.000), wir vereinbaren Sonderkonditionen (Rabattstaffel, Lead-Time-Garantie, persönlicher Ansprechpartner). Zahlungsziele 30 oder 60 Tage nach Lieferung, Quartals-Reporting der bezogenen Leistungen, jährliche Konditions-Review. Bei größeren Industrie-Kunden auch Lagerhaltung gängig genutzter Komponenten gegen Mindestabnahme verhandelbar.',
      'NDA 3D-Druck bei ek-druck heißt: verschlüsselter Datentransfer über separate Strecke (kein Standard-Email-Anhang), separater Werkstattbereich für sensible Projekte, automatische CAD-Löschung nach Lieferung mit vertraglicher Zusicherung. Standard-NDA-Vertrag liegt vor, Sonder-NDA mit branchen-spezifischen Klauseln (z.B. für Verteidigungs- oder Pharma-Projekte) wird auf Anfrage individuell formuliert. NDA-Aufschlag €150 einmalig pro Projekt — deckt den zusätzlichen Verwaltungsaufwand.',
      'Mengenrabatt 3D-Druck startet bei 5 Stück mit 5% — ein praktischer Einstieg für Klein-Serien. Ab 10 Stück 10%, ab 50 Stück 15%, ab 100 Stück 20% Rabatt auf den Listenpreis. Bei Stückzahlen über 500 verlassen wir die Standard-Rabattstaffel und kalkulieren individuell, weil ab da Druckbett-Optimierung und Material-Bulk-Einkauf signifikante Skaleneffekte bringen — oft -30% bis -50% gegenüber Stückpreis. Werbeartikel-Klein-Serien (z.B. 1.000-5.000 Stück gebrandet) ab €6 pro Stück.',
      'Zahlungsziel 30 Tage ist Standard für etablierte B2B-Kunden ab dem 2. Auftrag. Beim Erstauftrag mit neuem Kunden bevorzugen wir 30% Anzahlung bei Auftragserteilung, 70% bei Lieferung — das reduziert Risiko für beide Seiten. Bei größeren Aufträgen über €5.000 individuelles Zahlungs-Setup verhandelbar (z.B. 30/40/30 in 3 Tranchen). UID-Vermerk auf Rechnung Standard, Reverse-Charge-Verfahren bei EU-B2B-Kunden möglich. Buchhaltungs-Standard nach österreichischer UGB.',
    ],
  },
  faqs: [
    {
      question: 'Welche B2B-Konditionen bietet ek-druck?',
      answer:
        'Mengenrabatt ab 5 Stück (5%), ab 10 Stück 10%, ab 50 Stück 15%, ab 100 Stück 20%. Zahlungsziel 30 Tage ab dem 2. Auftrag. NDA-fähige Projektabwicklung mit verschlüsseltem Datentransfer. Persönlicher Ansprechpartner direkt zum Inhaber.',
    },
    {
      question: 'Sind Rahmenverträge möglich?',
      answer:
        'Ja, ab €5.000 jährlichem Auftragsvolumen. Verhandlung von Sonderkonditionen (Rabattstaffel, Lead-Time-Garantie, Quartals-Reporting). Bei größeren Kunden auch Lagerhaltung gängig genutzter Komponenten verhandelbar.',
    },
    {
      question: 'Wie funktioniert NDA-Abwicklung bei ek-druck?',
      answer:
        'Standard-NDA-Vertrag liegt vor. Verschlüsselter Datentransfer (kein Standard-Email-Anhang). Separater Werkstattbereich für sensible Projekte. Vertragliche CAD-Löschung nach Lieferung. NDA-Aufschlag €150 einmalig pro Projekt.',
    },
    {
      question: 'Wie schnell antwortet ek-druck auf B2B-Anfragen?',
      answer:
        'Werktags Mail/Telefon/WhatsApp Antwort unter 2 Stunden. Verbindliches Festpreisangebot binnen 6 Stunden nach CAD-Eingang. Bei komplexen Projekten (NDA, große Stückzahlen, Rahmenvertrag) bis zu 24h mit Zwischenmeldung.',
    },
    {
      question: 'Ist ek-druck für österreichische und deutsche B2B-Kunden gleichermaßen?',
      answer:
        'Ja. AT-Kunden mit UID: Reverse-Charge-Verfahren nicht nötig, Rechnung mit UID-Vermerk. DE-Kunden: EU-Reverse-Charge möglich, USt-IDNr auf Rechnung. CH-Kunden: Export-Lieferung mit ZollPapieren, MWSt-frei.',
    },
    {
      question: 'Welche Branchen bedient ek-druck primär im B2B-Bereich?',
      answer:
        'Maschinenbau, Schiffbau, Energietechnik, Automotive, Anlagenbau, Elektrotechnik — siehe /branchen für Detail-Cluster pro Branche. Plus Architekturbüros und Eventagenturen. Schwerpunkt sind Industriegüter-Hersteller mit Messemodell- und Funktionsmuster-Bedarf.',
    },
    {
      question: 'Gibt es eine Mindestauftragshöhe für B2B-Kunden?',
      answer:
        'Nein. Erstauftrag ab €100 problemlos. Für Stamm-Konditionen empfehlen wir 3+ Aufträge im Jahr oder Rahmenvertrag ab €5.000 Volumen.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//   EINZELANFERTIGUNGEN
// ═══════════════════════════════════════════════════════════════════
const einzelanfertigungen: ServiceSeoContent = {
  slug: 'einzelanfertigungen',
  longTailBody: {
    eyebrow: 'Was Einzelanfertigungen bei ek-druck konkret bedeuten',
    h2: 'Einzelanfertigung 3D-Druck — vom Unikat bis zur kleinen Sonderserie',
    paragraphs: [
      'Einzelanfertigung 3D-Druck ist die Antwort auf alle Anfragen, die nicht in eine Standard-Kategorie passen: Spezialhalterungen, Ersatzteile für nicht mehr produzierte Geräte, Sonder-Designs für Hochzeiten, Custom-Werbeartikel, künstlerische Objekte, Ein-Stück-Auftragsfertigungen aller Art. Ein einzelnes Bauteil zu drucken kostet ab €20 — keine Mindestmenge, kein Aufpreis für Stückzahl 1. Lead-Time typisch 3-7 Werktage, Express 24-48h bei kleineren Objekten möglich.',
      'Vom CAD oder Skizze zum fertigen Unikat — wenn Sie kein CAD haben, modelliere ich nach Skizze, Foto oder Bemaßungs-Zeichnung gegen €80/Stunde. Typisch 1-3 Stunden CAD-Arbeit für ein kleines Bauteil, 3-8 Stunden für komplexe Geometrien. Bei sehr ausgefallenen Designs (z.B. organische Formen, künstlerische Objekte) gerne längere Vorab-Beratung — entweder Telefon-Termin oder Werkstatt-Besichtigung in Gunskirchen.',
      'Ersatzteile drucken für Geräte die nicht mehr hergestellt werden ist eine wachsende Nische. Eine kaputte Halterung aus dem Auto der 1980er, ein Knopf aus einer alten Espressomaschine, ein verlorenes Spezialwerkzeug — wenn das Original noch da ist oder vermessbar ist, drucken wir es nach. Material-Wahl je nach Belastung: PETG für mechanisch beanspruchte Teile, PLA für reine Schauflächen, Carbon-PA wenn Original aus Aluminium war.',
      'Sonder-Designs als Geschenkidee oder Custom-Werbeartikel: 3D-gedruckte personalisierte Keksausstecher, Logo-Halterungen, Custom-Vasen, ausgefallene Schmuck-Komponenten, Mini-Architekturmodelle als Bauleitungs-Geschenk, Custom-Trophäen für Firmen-Awards. Klein-Serien-Fertigung 10-100 Stück ab €15 pro Stück möglich (je nach Größe). Custom-Werbeartikel in 250-5.000 Stück ab €6 pro Stück mit individuellem Branding.',
      'Ein einzelnes Bauteil drucken lassen heißt bei ek-druck konkret: Sie schicken CAD, Skizze oder Foto, ich bestätige Machbarkeit binnen 2 Stunden werktags, das Festpreis-Angebot kommt in 6 Stunden, der Druck startet noch am gleichen Tag bei Express oder spätestens am nächsten Werktag. Bei kleineren Einzelanfertigungen unter €100 Vorkasse-Bezahlung üblich (per Überweisung oder PayPal), bei größeren Aufträgen über €500 auch Anzahlung 30% / Restzahlung bei Lieferung.',
    ],
  },
  faqs: [
    {
      question: 'Was kostet ein einzelnes 3D-Druck-Bauteil als Einzelanfertigung?',
      answer:
        'Ab €20 für kleine Bauteile (Faustgröße, PLA). Mittlere Bauteile €60-€200. Größere Sonderanfertigungen €200-€800. Kein Mindestmenge, kein Aufpreis für Stückzahl 1.',
    },
    {
      question: 'Kann ich Ersatzteile für alte Geräte drucken lassen?',
      answer:
        'Ja. Wenn das Original noch da ist oder vermessbar ist, drucke ich nach. Häufige Anfragen: Halterungen, Knöpfe, Räder, kleine Mechanik-Komponenten. Material-Wahl je nach mechanischer Belastung. CAD-Aufnahme nach Skizze/Foto/Vermessung gegen €80/Stunde.',
    },
    {
      question: 'Was wenn ich kein CAD habe?',
      answer:
        'Kein Problem. Schicken Sie Skizze, Foto, Bemaßungs-Zeichnung oder beschreiben Sie das Vorhaben — ich modelliere für Sie zum Stundensatz €80 (typisch 1-3 Stunden für ein kleines Bauteil). Bei sehr komplexen oder organischen Designs ggf. Vorab-Telefon-Termin zur Spec-Klärung.',
    },
    {
      question: 'Wie lange dauert eine Einzelanfertigung?',
      answer:
        'Standard 3-7 Werktage. Express 24-48h bei kleineren Objekten möglich. Bei sehr ausgefallenen Designs mit nötiger CAD-Modellierung 5-10 Werktage einplanen (inkl. CAD-Iteration mit Ihnen).',
    },
    {
      question: 'Welche Materialien für Einzelanfertigungen?',
      answer:
        'Alle gängigen FDM-Materialien: PLA (Standard), PETG (robust), ABS (lackier-fähig), TPU (flexibel), Carbon-PA (mechanisch belastbar), ASA (UV-stabil), plus Spezial-Filamente wie Wood-Fill, Marble-Optik, Metal-Fill, PLA Silk für seidigen Glanz.',
    },
    {
      question: 'Können personalisierte Geschenke oder Werbeartikel gedruckt werden?',
      answer:
        'Ja. Custom-Keksausstecher (lebensmittelechtes PETG), personalisierte Vasen, Custom-Halterungen, Mini-Architekturmodelle als Bauleitungs-Geschenk. Ab 25 Stück gestaffelte Mengenrabatte, ab 250 Stück Custom-Werbeartikel-Konditionen.',
    },
    {
      question: 'Gibt es eine Mindestbestellmenge?',
      answer:
        'Nein. Stückzahl 1 ist Standard und kein Aufpreis. Auch kleinste Einzelaufträge ab €20 sind willkommen.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════
//   EXPORT
// ═══════════════════════════════════════════════════════════════════
export const serviceSeoMap: Record<string, ServiceSeoContent> = {
  messemodelle,
  architekturmodelle,
  prototyping,
  firmenkunden,
  einzelanfertigungen,
}

export const getServiceSeoContent = (slug: string): ServiceSeoContent | undefined =>
  serviceSeoMap[slug]
