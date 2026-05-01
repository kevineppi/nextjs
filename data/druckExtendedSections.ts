// ═══════════════════════════════════════════════════════════════
// EXTENDED DRUCK SECTIONS – 4 new content-depth sections per region
// TypicalProjects, ProjectWorkflow, CustomerPriorities, CommonMistakes
// ═══════════════════════════════════════════════════════════════

import type { TypicalProjectData, ProjectWorkflowData, CustomerPriorityData, CommonMistakeData } from "./druckSectionData";

export interface ExtendedDruckSections {
  typicalProjects: TypicalProjectData[];
  projectWorkflow: ProjectWorkflowData;
  customerPriorities: CustomerPriorityData[];
  commonMistakes: CommonMistakeData[];
}

// ═══════════════════════════════════════════
// WIEN
// ═══════════════════════════════════════════
const wien: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Pitch-Modelle für Wiener Startups',
      description: 'Gründer aus dem 7. und 9. Bezirk nutzen greifbare Prototypen für Investorengespräche. Statt nur Slides zu zeigen, überreichen sie ein physisches Modell ihres Produkts – das bleibt im Gedächtnis und zeigt Umsetzungskompetenz.',
      whyPrint: 'Investoren bewerten greifbare Modelle anders als Renderings. Ein 3D-gedruckter Prototyp signalisiert: Dieses Team kann umsetzen. Mehrere Designvarianten parallel lassen sich nur mit 3D-Druck wirtschaftlich realisieren.',
      requirements: ['10–20 cm Modellgröße', 'PLA+ oder PETG', '3–5 Varianten parallel', '48h Turnaround'],
    },
    {
      title: 'Gehäuse-Prototypen für Wiener Agenturen',
      description: 'Kreativagenturen im MuseumsQuartier entwickeln IoT-Gehäuse, Verpackungskonzepte und Produktdesigns für ihre Auftraggeber. Bevor der Industriedesigner das finale CAD freigibt, werden 5 Formvarianten physisch verglichen.',
      whyPrint: 'Am Bildschirm sehen Formen anders aus als in der Hand. Ergonomie, Proportionen und Materialanmutung lassen sich nur am physischen Modell beurteilen. Bei €20 pro Variante ist das günstiger als ein Rendering.',
      requirements: ['Multimaterial (PLA+ + TPU)', 'Farbvarianten', 'Oberflächenfinish möglich', 'Express 48h'],
    },
    {
      title: 'Konzeptvisualisierungen für Wiener Architekturbüros',
      description: 'Architekten nutzen schnelle 3D-Drucke für interne Designrunden. Keine finalen Wettbewerbsmodelle, sondern schnelle Volumenstudien – gedruckt über Nacht, besprochen am nächsten Morgen.',
      whyPrint: 'Eine Volumenstudie in 6 Stunden gedruckt ersetzt zwei Tage digitale Diskussion. Das Team sieht sofort, ob Proportionen stimmen, und kann am physischen Objekt Änderungen markieren.',
      requirements: ['Maßstab 1:200 bis 1:500', 'PLA+ in Weiß', 'Lieferung über Nacht', 'Ab €15 pro Studie'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein typisches Projekt in Wien ab',
    subheadline: 'Von der Idee zum Pitch-Modell – schnell, transparent, ohne Umwege',
    steps: [
      { title: 'Analyse der CAD-Datei & Zielanwendung', description: 'Wir prüfen Ihre Datei auf Druckbarkeit und fragen: Wofür wird das Modell genutzt? Pitch, Designreview oder Funktionstest?', context: 'Startup-Gründer senden oft Skizzen statt CAD – auch das funktioniert als Startpunkt.' },
      { title: 'Materialauswahl basierend auf Einsatz', description: 'Für Pitches empfehlen wir PLA+ mit Schleifen, für Funktionstests PETG oder TPU. Wir erklären die Unterschiede verständlich.', context: 'Die meisten Wiener Kunden wählen PLA+ wegen der besten Oberfläche bei kleinen Modellen.' },
      { title: 'Paralleldruck aller Varianten', description: 'Statt nacheinander drucken wir 3–10 Varianten gleichzeitig auf mehreren Druckern. Jedes Modell bekommt eine eigene Qualitätskontrolle.', context: 'Bei Designvergleichen sparen parallele Varianten bis zu 70% Zeit gegenüber sequentiellem Druck.' },
      { title: 'Feinabstimmung für Optik oder Stabilität', description: 'Nachbearbeitung nach Wunsch: Schleifen, Grundieren oder roh belassen. Für Pitches empfehlen wir immer Schleifen + Grundierung.', context: 'Premium-Finish kostet ca. 30% Aufpreis, wirkt aber bei Investoren professioneller.' },
      { title: 'Express-Versand nach Wien über Nacht', description: 'Bestellung bis 10 Uhr = Versand am selben Tag. Am nächsten Morgen liegt das Modell in Wien.', context: 'Persönliche Übergabe in Wien ist auf Anfrage ebenfalls möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Geschwindigkeit vor Perfektion', explanation: 'Wiener Startups brauchen in 48h ein vorzeigbares Modell – nicht in 2 Wochen ein perfektes. Die nächste Investorenrunde wartet nicht.' },
    { statement: 'Präsentationsqualität muss stimmen', explanation: 'Das Modell liegt bei einem Pitch auf dem Tisch neben einem MacBook. Es muss professionell wirken, auch wenn es ein Prototyp ist.' },
    { statement: 'Mehrere Varianten zum Vergleich', explanation: 'Kreativagenturen wollen dem Kunden 3–5 Optionen zeigen, nicht eine. Designentscheidungen fallen leichter mit physischem Vergleich.' },
    { statement: 'Transparente Preise ohne Überraschungen', explanation: 'Startups kalkulieren eng. Der Preis muss vorher klar sein – keine versteckten Setup-Gebühren oder Mindestbestellmengen.' },
  ],
  commonMistakes: [
    { mistake: 'Wandstärke unter 1mm', explanation: 'Dünne Wände brechen beim Entfernen der Stützstruktur oder beim Transport. Besonders bei kleinen Pitch-Modellen ein häufiges Problem.', prevention: 'Wir prüfen jede Datei automatisch und empfehlen Mindestwandstärken ab 1.2mm. Bei Bedarf passen wir die Datei kostenlos an.' },
    { mistake: 'Falsches Material für den Einsatzzweck', explanation: 'PLA sieht schön aus, wird aber bei Sonneneinstrahlung weich. Wer sein Modell im Auto transportiert, findet einen verformten Prototypen vor.', prevention: 'Materialberatung ist bei uns Standard. Für Transport empfehlen wir PETG, für Pitches PLA+ mit Nachbearbeitung.' },
    { mistake: 'Zu große Druckauflösung bestellt', explanation: '0.08mm Layer Height verdreifacht die Druckzeit, ist aber bei Modellen über 10cm mit bloßem Auge kaum vom 0.16mm-Druck zu unterscheiden.', prevention: 'Wir beraten ehrlich: Für die meisten Pitch-Modelle reicht 0.12–0.16mm völlig aus. Das spart Zeit und Kosten.' },
    { mistake: 'Keine Nachbearbeitung bei Präsentationsmodellen', explanation: 'Roher FDM-Druck zeigt sichtbare Layer-Lines. Bei einem Investorengespräch wirkt das unprofessionell.', prevention: 'Wir empfehlen für Pitches immer Schleifen + Grundieren. Der Aufpreis lohnt sich, weil das Modell dann wie ein Industrieprototyp wirkt.' },
    { mistake: 'Modell zu klein designt', explanation: 'Ein 5cm-Modell geht auf dem Konferenztisch unter. Investoren können Details nicht erkennen und verlieren das Interesse.', prevention: 'Wir empfehlen für Pitches mindestens 15cm. Das kostet nur wenige Euro mehr, wirkt aber deutlich professioneller.' },
  ],
};

// ═══════════════════════════════════════════
// LINZ
// ═══════════════════════════════════════════
const linz: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Schulungsmodelle für Linzer Industriebetriebe',
      description: 'Techniker der voestalpine und anderer OÖ-Industriebetriebe nutzen farbcodierte Schnittmodelle für interne Schulungen. Komplexe Baugruppen werden in zerlegbare Modelle übersetzt, die Auszubildende anfassen und verstehen können.',
      whyPrint: 'Ein digitales CAD-Modell auf dem Bildschirm vermittelt kein haptisches Verständnis. 3D-gedruckte Schnittmodelle mit farbcodierten Schichten machen innere Strukturen greifbar – das beschleunigt die Einarbeitung.',
      requirements: ['15–30 cm Modellgröße', 'Mehrteilig zerlegbar', 'Farbcodierung (bis 6 Farben)', 'Same-Day-Abholung'],
    },
    {
      title: 'Ersatzteil-Prototypen für Linzer Maschinenbauer',
      description: 'Bevor ein Metallteil in Serie geht, wird die Form als günstiger Kunststoff-Prototyp geprüft. Passt es in die Baugruppe? Stimmen die Toleranzen? Das spart teure Fehlproduktionen.',
      whyPrint: 'Ein CNC-Prototyp aus Metall kostet €500+ und dauert 2 Wochen. Ein 3D-gedruckter Formcheck aus PETG kostet €30 und ist am selben Tag abholbereit.',
      requirements: ['PETG für Belastbarkeit', 'Toleranz ±0.2mm', 'Same-Day möglich', 'Persönliche Abholung'],
    },
    {
      title: 'Architektur-Volumenstudien für Linzer Büros',
      description: 'Architekturbüros in Linz bestellen schnelle Volumenstudien für Baubesprechungen. Kein finales Wettbewerbsmodell, sondern ein schnelles Arbeitsmodell für die interne Abstimmung am nächsten Morgen.',
      whyPrint: 'Ein Volumenstudie über Nacht gedruckt ersetzt zwei Tage Diskussion am Bildschirm. Das Team kann direkt am Modell Änderungen einzeichnen.',
      requirements: ['PLA+ in Weiß', 'Maßstab 1:200', 'Abholung am nächsten Morgen', 'Ab €20'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein Projekt für Linzer Kunden ab',
    subheadline: 'Persönlich, direkt, ohne Umwege – nur 20 Minuten entfernt',
    steps: [
      { title: 'Anfrage per WhatsApp oder E-Mail', description: 'Senden Sie Ihre Datei und eine kurze Beschreibung. Bei Standard-Teilen antworten wir in 15 Minuten, bei komplexen Modellen in 1 Stunde.', context: 'WhatsApp ist der schnellste Kanal – Foto der Skizze genügt oft.' },
      { title: 'Vor-Ort-Beratung am Bildschirm', description: 'Bei komplexen Projekten kommen Sie einfach vorbei. Wir besprechen Ihr Modell gemeinsam am CAD-Bildschirm – Änderungen sofort einarbeiten.', context: 'Gunskirchen ist nur 20 Min von der Linzer Innenstadt – direkt an der A1.' },
      { title: 'Same-Day-Fertigung', description: 'Bestellung bis 9 Uhr = Abholung ab 15 Uhr. Sie bekommen eine SMS, sobald Ihr Modell fertig ist.', context: 'Standardteile sind oft schon nach 3-4 Stunden abholbereit.' },
      { title: 'Qualitätsprüfung bei Abholung', description: 'Prüfen Sie Ihr Modell vor Ort. Passt etwas nicht, besprechen wir sofort die Nachbesserung – ohne Versandweg, ohne Wartezeit.', context: 'Nachbesserungen dauern in der Regel 2-3 Stunden, nicht 2 Wochen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Persönlicher Kontakt statt anonymer Online-Shop', explanation: 'Linzer Industriekunden wollen mit einem echten Menschen sprechen, nicht mit einem Ticket-System. Bei uns gibt es Beratung am Telefon und vor Ort.' },
    { statement: 'Funktion vor Optik', explanation: 'Im industriellen Umfeld zählt: Passt das Teil? Hält es die Belastung? Die Oberfläche ist zweitrangig – Maßhaltigkeit und Materialwahl sind entscheidend.' },
    { statement: 'Same-Day-Verfügbarkeit', explanation: 'Wenn der Schulungstermin morgen ist oder der Prototyp für die Baubesprechung fehlt, zählt jede Stunde. Online-Versand mit 3 Tagen Wartezeit ist keine Option.' },
    { statement: 'Nachbestellung ohne Neuaufwand', explanation: 'Einmal konfigurierte Modelle sollen jederzeit nachbestellbar sein – gleiche Qualität, gleicher Preis, ohne die Datei nochmal erklären zu müssen.' },
    { statement: 'Rechnung auf Firma', explanation: 'Industriebetriebe brauchen eine ordentliche Rechnung mit UID-Nummer. Bar- oder Sofortzahlung ist im B2B-Umfeld unüblich.' },
  ],
  commonMistakes: [
    { mistake: 'Toleranzen nicht vorab definiert', explanation: 'Wenn ein Prototyp in eine bestehende Baugruppe passen soll, reicht „ungefähr" nicht. FDM-Druck hat typisch ±0.2mm – das muss in der Konstruktion berücksichtigt werden.', prevention: 'Wir fragen immer: Muss das Teil irgendwo einpassen? Falls ja, berücksichtigen wir Toleranzen und drucken auf Wunsch ein Testmuster zum Vorab-Check.' },
    { mistake: 'PLA statt PETG für belastete Teile', explanation: 'PLA ist spröde und bricht bei Schlagbelastung. Für Funktionsteile, die bewegt oder belastet werden, ist PETG die bessere Wahl.', prevention: 'Materialberatung gehört bei uns zum Standard. Wir empfehlen PETG für alles, was Kraft aushalten muss.' },
    { mistake: 'Schnittmodell nicht als mehrteilig geplant', explanation: 'Ein Schulungsmodell nützt wenig, wenn man die Innenseite nicht sehen kann. Die Teilung muss vorab geplant werden, nicht nachträglich gesägt.', prevention: 'Wir konstruieren die Schnittebenen mit – inklusive Passbohrungen und Magneten für wiederholtes Zerlegen.' },
    { mistake: 'Modell zu detailliert für FDM', explanation: 'FDM eignet sich hervorragend für Modelle ab 5mm Detailgröße. Filigrane Strukturen unter 1mm erfordern ein anderes Verfahren.', prevention: 'Ehrliche Einschätzung: Wenn FDM nicht passt, sagen wir das und empfehlen Alternativen, statt ein unbfriedigendes Ergebnis zu liefern.' },
  ],
};

// ═══════════════════════════════════════════
// GRAZ
// ═══════════════════════════════════════════
const graz: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Designstudien-Serien für Grazer Automotive-Zulieferer',
      description: 'Magna Steyr und andere steirische Zulieferer bewerten Designvarianten physisch statt digital. 20 Gehäusevarianten auf dem Tisch – das Entwicklungsteam wählt die beste Form innerhalb einer Stunde statt einer Woche.',
      whyPrint: 'Physische Vergleiche beschleunigen Designentscheidungen um 80%. Bei 20 Varianten à €25 ist der gesamte Designreview günstiger als ein einziges CNC-Muster.',
      requirements: ['20–50 Varianten parallel', 'ASA für UV-Beständigkeit', 'Identische Maßhaltigkeit ±0.2mm', '5 Tage für 50 Stück'],
    },
    {
      title: 'Funktionsprototypen für TU Graz Spin-offs',
      description: 'Spin-offs der TU Graz testen mechanische Konzepte als 3D-Druck, bevor sie in teure Werkzeuge investieren. Gehäuse, Halterungen und Verbinder werden iterativ optimiert – 3 Versionen pro Woche.',
      whyPrint: 'Jede Iteration als CNC-Teil würde €300+ kosten und 5 Tage dauern. Mit FDM kostet eine Iteration €25 und ist am nächsten Tag da.',
      requirements: ['PETG für mechanische Belastung', 'Schnelle Iteration (3 Versionen/Woche)', 'Toleranz ±0.2mm', 'Express 24h'],
    },
    {
      title: 'Transparente Sichtmodelle für Grazer Ingenieurbüros',
      description: 'Ingenieurbüros nutzen PETG Transparent, um innere Strukturen sichtbar zu machen. Strömungskanäle, Einbausituationen und Montagereihenfolgen werden am physischen Objekt überprüft.',
      whyPrint: 'Transparentes Material zeigt, was CAD-Schnittansichten nicht vermitteln: räumliche Zusammenhänge. Ein transparentes Gehäuse kostet €35 und erspart stundenlange CAD-Reviews.',
      requirements: ['PETG Transparent', '15–25 cm Größe', 'Saubere Innenflächen', 'Standard-Versand 1-2 Tage'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein Designstudien-Projekt in Graz ab',
    subheadline: 'Strukturiert, skalierbar, termingerecht – vom CAD zur Bewertungsrunde',
    steps: [
      { title: 'CAD-Dateien und Stückzahlplan liefern', description: 'Senden Sie alle STL/STEP-Dateien samt gewünschter Stückzahl und Materialangabe. Bei Designstudien empfehlen wir ASA für konsistente Oberfläche.', context: 'Wir prüfen alle Dateien kostenlos auf Druckbarkeit – Rückmeldung in 4h.' },
      { title: 'Staffelpreis-Angebot mit Mengenrabatt', description: 'Sie erhalten ein Angebot mit automatischem Mengenrabatt: 10% ab 10 Stück, 15% ab 50 Stück. Alle Positionen transparent aufgelistet.', context: 'Bei wiederkehrenden Bestellungen speichern wir Ihre Konfiguration für Sofort-Nachbestellung.' },
      { title: 'Parallele Serienfertigung', description: 'Alle Varianten werden gleichzeitig auf unseren Druckern gefertigt. Jedes Teil durchläuft eine eigene Qualitätskontrolle nach Maßhaltigkeit und Oberfläche.', context: '50 Teile in 5 Arbeitstagen – jedes Stück einzeln geprüft.' },
      { title: 'ASA-Nachbearbeitung für Premium-Finish', description: 'Optional: Schleifen und Grundieren für eine homogene Oberfläche. Bei Designstudien empfehlen wir das für aussagekräftige Bewertungsrunden.', context: 'Premium-Finish kostet ca. 25% Aufpreis, macht Designunterschiede deutlicher sichtbar.' },
      { title: 'Express-Versand nach Graz via A9', description: 'Bruchsichere Einzelverpackung jedes Teils. Tracking-Nummer per E-Mail. Express 24h oder Standard 1-2 Werktage.', context: 'Bei großen Serien organisieren wir auf Wunsch auch Palettenversand.' },
    ],
  },
  customerPriorities: [
    { statement: 'Reproduzierbare Qualität bei jeder Stückzahl', explanation: 'Teil Nr. 1 muss identisch zu Teil Nr. 50 sein. Für Designvergleiche ist Konsistenz wichtiger als Perfektion.' },
    { statement: 'Technische Präzision statt Marketing-Versprechen', explanation: 'Grazer Ingenieure wollen Datenblätter, nicht Werbefloskeln. Toleranzen, Zugfestigkeit, Temperaturbeständigkeit – konkrete Zahlen zählen.' },
    { statement: 'Skalierbarkeit ohne Qualitätsverlust', explanation: 'Erst 5 Prototypen, dann 50 für die Bewertungsrunde, dann 200 für den Feldtest. Der Preis muss mit der Menge sinken, die Qualität nicht.' },
    { statement: 'UV-beständiges Material für Outdoor-Tests', explanation: 'Automotive-Teile werden draußen getestet. PLA vergilbt und verzieht sich – ASA ist für steirische Kunden der Standard.' },
  ],
  commonMistakes: [
    { mistake: 'Verschiedene Varianten auf verschiedenen Druckern', explanation: 'Unterschiedliche Drucker erzeugen minimal unterschiedliche Oberflächen. Bei Designvergleichen verfälscht das die Bewertung.', prevention: 'Wir drucken alle Varianten einer Studie auf dem gleichen Druckertyp mit identischen Einstellungen. So ist der Vergleich fair.' },
    { mistake: 'PLA für Outdoor-Funktionstests', explanation: 'PLA verformt sich bei 60°C – im Auto oder in der Sonne ein echtes Problem. Das Modell funktioniert im Büro, versagt aber im Feldtest.', prevention: 'Für Outdoor-Anwendungen empfehlen wir immer ASA (UV-beständig bis 95°C) oder PETG (stabil bis 75°C).' },
    { mistake: 'Zu viele Varianten ohne klares Bewertungskriterium', explanation: '50 Varianten auf dem Tisch ohne Bewertungsmatrix führen zu Entscheidungsparalyse statt Fortschritt.', prevention: 'Wir empfehlen: Maximal 3 Hauptmerkmale definieren, die verglichen werden. Dann reichen oft 5-10 Varianten statt 50.' },
    { mistake: 'Keine Beschriftung der Varianten', explanation: 'Wenn 20 ähnliche Teile auf dem Tisch liegen, verliert man den Überblick. Welches war Variante C3?', prevention: 'Wir gravieren optional Variantenbezeichnungen direkt in das Modell – kostenlos bei Serien ab 10 Stück.' },
  ],
};

// ═══════════════════════════════════════════
// SALZBURG
// ═══════════════════════════════════════════
const salzburg: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Hotelausstattung für Salzburger Tourismus',
      description: 'Boutiquehotels in der Altstadt bestellen individuelle Zimmerausstattung: Handtuchhalter mit Logo, Schlüsselanhänger im Hoteldesign, Miniaturen der Festung für die Rezeption. Jedes Stück wird zum Markenbotschafter.',
      whyPrint: 'Standardware gibt es überall. Individuelle Objekte mit Hotel-Logo und Salzburg-Bezug heben das Gästeerlebnis ab. 3D-Druck macht Einzelstücke wirtschaftlich.',
      requirements: ['PETG für Feuchträume', 'Logo-Integration im Druck', 'Kleinserien ab 10 Stück', 'Farblich zum Interieur passend'],
    },
    {
      title: 'Festspiel-Requisiten und Bühnenmodelle',
      description: 'Bühnenbildner der Salzburger Festspiele nutzen 3D-Druck für Modelle im Maßstab 1:25. Szenenbilder werden greifbar, bevor die Werkstatt mit dem echten Bühnenbau beginnt.',
      whyPrint: 'Ein Bühnenmodell in Handarbeit dauert 2 Wochen. Ein 3D-gedrucktes Modell steht in 3 Tagen – mit Änderungsmöglichkeit bis zum letzten Moment.',
      requirements: ['Maßstab 1:25 bis 1:50', 'Nachbearbeitung für Bühnenoptik', 'PLA+ mehrfarbig', 'Lieferung in 3-4 Tagen'],
    },
    {
      title: 'Souvenirs und Merchandising-Prototypen',
      description: 'Salzburg-Souvenirs als 3D-Druck-Prototyp: Mozart-Figuren, Festungsnachbildungen, Domsilhouetten. Händler testen neue Produkte als Kleinserientest bevor die Massenproduktion startet.',
      whyPrint: 'Ein neues Souvenir als Spritzguss-Form kostet €5.000+. Ein 3D-gedruckter Prototyp kostet €30 und zeigt, ob das Design bei Touristen ankommt.',
      requirements: ['Detailreich (0.12mm Schichthöhe)', 'Verschiedene Farbvarianten', 'Testserie 20-50 Stück', 'Budget-freundlich'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihre Salzburger Sonderanfertigung',
    subheadline: 'Kreativ, individuell, mit Liebe zum Detail',
    steps: [
      { title: 'Idee oder Skizze senden', description: 'Beschreiben Sie Ihr Wunschobjekt – eine Skizze, ein Foto oder eine Idee reicht. Wir beraten zur Umsetzbarkeit im 3D-Druck.', context: 'Für Hotels erstellen wir auch 3D-Modelle nach Foto des Gebäudes.' },
      { title: 'Kostenlose 3D-Modellierung bei Bedarf', description: 'Wenn keine CAD-Datei vorhanden ist, modellieren wir Ihr Objekt auf Basis Ihrer Vorgaben. Bei Bestellung bis 50 Stück entfällt die Modellierungsgebühr.', context: 'Einfache Objekte modellieren wir in 1-2 Stunden, komplexe Figuren in 1-2 Tagen.' },
      { title: 'Materialmuster zur Freigabe', description: 'Wir drucken ein Erstmuster in Originalgröße und -material. Sie prüfen und geben frei – erst dann starten wir die Serie.', context: 'Das Erstmuster ist kostenlos, wenn Sie die Serie bei uns bestellen.' },
      { title: 'Serienfertigung mit Qualitätskontrolle', description: 'Jedes Stück wird einzeln geprüft. Auf Wunsch mit Nachbearbeitung: Schleifen, Grundieren, Lackieren in Ihren Hotelfarben.', context: 'Wir speichern Ihre Konfiguration für einfache Nachbestellungen.' },
      { title: 'Lieferung nach Salzburg in 2-3 Tagen', description: 'Bruchsichere Verpackung, Einzelverpackung auf Wunsch. Express 24h für dringende Nachbestellungen verfügbar.', context: 'Für Festspiel-Deadlines bieten wir garantierte Terminzusagen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Einzigartigkeit statt Massenware', explanation: 'Salzburger Kunden wollen Objekte, die es nirgendwo sonst gibt. Hotel-Logo, Stadtbezug, individuelle Form – jedes Stück soll eine Geschichte erzählen.' },
    { statement: 'Ästhetik auch bei Prototypen', explanation: 'In einer Stadt wie Salzburg muss auch ein Prototyp gut aussehen. Grobe Layer-Lines sind für Tourismus- und Kultur-Kunden nicht akzeptabel.' },
    { statement: 'Termintreue für Festspiel-Saison', explanation: 'Die Salzburger Festspiele haben einen fixen Kalender. Wer den Termin verpasst, verpasst die gesamte Saison. Zuverlässige Lieferung ist nicht verhandelbar.' },
    { statement: 'Kleine Stückzahlen wirtschaftlich umsetzbar', explanation: 'Ein Boutiquehotel braucht 20 Stück, nicht 2.000. 3D-Druck muss bei Kleinserien preislich Sinn machen – ohne Werkzeugkosten.' },
  ],
  commonMistakes: [
    { mistake: 'Standard-Souvenir ohne lokalen Bezug', explanation: 'Ein generischer 3D-Druck ohne Salzburg-Identität funktioniert nicht als Souvenir. Touristen kaufen den Bezug zur Stadt, nicht das Material.', prevention: 'Wir beraten zur Integration lokaler Elemente: Festungskontour, Mozart-Silhouette, Salzburger Farbpalette.' },
    { mistake: 'Falsches Material für Nassräume', explanation: 'PLA löst sich bei dauerhafter Feuchtigkeit auf. Ein Handtuchhalter im Bad aus PLA hält maximal 6 Monate.', prevention: 'Für Nassräume empfehlen wir ausschließlich PETG – wasserresistent, stabil und in allen Hotelfarben verfügbar.' },
    { mistake: 'Zu detaillierte Figurchen unter 5cm', explanation: 'FDM kann bei Mini-Figuren keine feinen Gesichtszüge darstellen. Das Ergebnis enttäuscht bei Salzburg-Souvenirs unter 5cm.', prevention: 'Wir empfehlen Mindestgröße 8cm für Figuren mit Details. Alternativ: größerer Maßstab oder vereinfachtes Design.' },
    { mistake: 'Keine Testauflage vor Serienproduktion', explanation: 'Ein Souvenir, das im 3D-Druck perfekt aussieht, kann bei Touristen trotzdem nicht ankommen. Ohne Markttest verschwendet man Budget.', prevention: 'Wir empfehlen immer eine Testauflage von 20 Stück. Erst wenn die sich verkaufen, produzieren wir die volle Serie.' },
  ],
};

// ═══════════════════════════════════════════
// INNSBRUCK
// ═══════════════════════════════════════════
const innsbruck: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'MedTech-Prototypen für Innsbrucker Forschung',
      description: 'Die Medizinische Universität Innsbruck und MedTech-Startups testen Implantat-Geometrien, chirurgische Führungen und anatomische Modelle als 3D-Druck. Nicht für den Patienten, sondern für Design-Iteration und Schulung.',
      whyPrint: 'Anatomische Modelle aus Kunststoff kosten einen Bruchteil von Silikonmodellen. Für die Designphase von Implantaten sind 3D-gedruckte Geometrietests der schnellste Weg zur optimalen Form.',
      requirements: ['PETG für Sterilisierbarkeit', 'Biokompatibilität nicht nötig (nur Prototyp)', 'Toleranz ±0.15mm', 'Vertraulichkeit (NDA möglich)'],
    },
    {
      title: 'Outdoor-Gehäuse für Tiroler Sensorik-Unternehmen',
      description: 'Sensorik-Firmen in Innsbruck entwickeln Wetter- und Umwelt-Sensoren für den Alpenraum. Die Gehäuse müssen UV-Strahlung, Regen und Temperaturschwankungen von -20°C bis +50°C aushalten.',
      whyPrint: 'Spritzguss lohnt sich erst ab 1.000 Stück. Für Feldtests mit 20-50 Sensoren ist 3D-Druck aus ASA die wirtschaftliche Alternative mit identischer UV-Beständigkeit.',
      requirements: ['ASA für UV und Temperatur', 'Dichtungen integrierbar', 'IP54-Gehäusedesign', 'Feldtestserie 20-50 Stück'],
    },
    {
      title: 'Lehrmittel für Uni Innsbruck und FH Kufstein',
      description: 'Professoren bestellen Anschauungsmodelle für Vorlesungen: Molekülstrukturen, Geländemodelle, Maschinenelemente. Studierende verstehen komplexe Zusammenhänge am physischen Modell besser.',
      whyPrint: 'Ein 30cm-Geländemodell aus dem 3D-Drucker kostet €40. Das gleiche Modell als Handarbeit im Modellbau kostet €400 und dauert 2 Wochen.',
      requirements: ['PLA+ für Lehrmittel', 'Mehrfarbig für Codierung', 'Budget-freundlich (Uni-Mittel)', 'Standardversand ausreichend'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein Forschungsprojekt in Innsbruck ab',
    subheadline: 'Vertraulich, präzise, auf akademische Anforderungen zugeschnitten',
    steps: [
      { title: 'Vertrauliche Anfrage', description: 'Senden Sie Ihre CAD-Dateien verschlüsselt per E-Mail. Bei sensiblen Projekten unterzeichnen wir vorab ein NDA.', context: 'Für MedTech- und Patentprojekte behandeln wir alle Daten streng vertraulich.' },
      { title: 'Technische Machbarkeitsprüfung', description: 'Wir prüfen: Ist FDM das richtige Verfahren? Welches Material für Ihren Einsatzzweck? Bei MedTech beraten wir auch zu Oberflächenanforderungen.', context: 'Bei ca. 10% der Anfragen empfehlen wir ehrlich ein anderes Verfahren als FDM.' },
      { title: 'Erstmuster mit Prüfprotokoll', description: 'Sie erhalten ein Erstmuster mit dokumentierter Maßhaltigkeit. Bei Serien prüfen wir Stichproben nach denselben Kriterien.', context: 'Für akademische Veröffentlichungen stellen wir Druckparameter als Datenblatt bereit.' },
      { title: 'Iteration und Serienproduktion', description: 'Feedback einarbeiten, nächste Version drucken, testen, wiederholen. Bei stabiler Geometrie: Serienfertigung mit Mengenrabatt.', context: 'Die meisten Forschungsprojekte durchlaufen 3-5 Iterationen vor der finalen Version.' },
    ],
  },
  customerPriorities: [
    { statement: 'Vertraulichkeit bei Forschungsprojekten', explanation: 'MedTech-Startups und Uni-Spin-offs arbeiten an patentfähigen Designs. Daten dürfen nicht in falsche Hände geraten. NDA und sichere Datenübertragung sind Pflicht.' },
    { statement: 'Wissenschaftliche Dokumentation', explanation: 'Für Paper und Patentanmeldungen brauchen Forscher dokumentierte Druckparameter: Schichthöhe, Infill, Material-Batch. Nicht nur ein fertiges Teil.' },
    { statement: 'Budget-Bewusstsein bei Uni-Projekten', explanation: 'Forschungsbudgets sind begrenzt. Studierende und Doktoranden rechnen in €10-Schritten, nicht in Tausenden. Faire Preise ohne Mindestbestellmenge sind essenziell.' },
    { statement: 'Material-Expertise für Spezialanwendungen', explanation: 'Nicht jeder 3D-Druck-Anbieter versteht den Unterschied zwischen PETG und PETG-CF oder warum ASA für Outdoor-Sensorik besser ist als ABS.' },
  ],
  commonMistakes: [
    { mistake: 'Prototyp-Material mit Serienmaterial verwechseln', explanation: 'Ein PLA-Prototyp verhält sich anders als das finale Spritzguss-PP-Teil. Ergebnisse des 3D-Druck-Tests sind nicht 1:1 auf die Serie übertragbar.', prevention: 'Wir beraten zu den mechanischen Grenzen von FDM-Materialien und dokumentieren, wo Abweichungen zum Serienmaterial zu erwarten sind.' },
    { mistake: 'Zu hohe Erwartungen an Oberfläche', explanation: 'FDM erzeugt sichtbare Layer-Lines. Für medizinische Demonstrationsmodelle ist das OK, für glatte Implantat-Oberflächen nicht.', prevention: 'Ehrliche Beratung: FDM für Formtests ja, für Oberflächenqualität empfehlen wir Nachbearbeitung oder alternatives Verfahren.' },
    { mistake: 'Keine Toleranzangabe bei Passungen', explanation: 'Wenn zwei Teile ineinandergreifen sollen, muss die Passung definiert sein. „Soll halt passen" führt zu Frust.', prevention: 'Wir fragen immer nach Passungsanforderungen und empfehlen 0.15mm Spiel für Übergangspassungen im FDM-Druck.' },
    { mistake: 'Geländemodell ohne Überhöhung', explanation: 'Ein maßstabsgetreues Geländemodell sieht flach aus, weil die Höhenunterschiede im Modellmaßstab kaum sichtbar sind.', prevention: 'Wir empfehlen 2-3x Überhöhung für Lehr-Geländemodelle. Das macht topografische Unterschiede deutlich sichtbar.' },
  ],
};

// ═══════════════════════════════════════════
// KLAGENFURT
// ═══════════════════════════════════════════
const klagenfurt: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Startup-Prototypen für den Kärntner Lakeside Park',
      description: 'Tech-Startups im Lakeside Park entwickeln Hardware-Produkte und testen ihre ersten Gehäuseentwürfe als 3D-Druck. Schnelle Iteration für Demo Days und Investorengespräche.',
      whyPrint: 'Im Lakeside Park zählt Speed-to-Demo. Ein vorzeigbarer Prototyp in 48h macht den Unterschied zwischen „interessant" und „investierbar".',
      requirements: ['PLA+ für Demo-Qualität', 'Turnaround 48h', 'Budget unter €50', 'Mehrere Farboptionen'],
    },
    {
      title: 'Tourismusmodelle für Wörthersee-Region',
      description: 'Hotels und Tourismusverbände am Wörthersee bestellen Miniaturmodelle von Sehenswürdigkeiten, Architekturmodelle neuer Resorts und interaktive Standmodelle für Messen.',
      whyPrint: 'Ein 3D-gedrucktes Modell des geplanten Resorts zeigt Investoren und Gästen auf einen Blick, was entstehen soll. Viel greifbarer als Renderings.',
      requirements: ['15-40 cm Modellgröße', 'Nachbearbeitung für Präsentation', 'ASA für Outdoor-Ausstellung', 'Lieferung in 3-4 Tagen'],
    },
    {
      title: 'Lehrmittel für Alpen-Adria-Universität',
      description: 'Professoren der AAU Klagenfurt bestellen Anschauungsmodelle für Informatik, Technik und Geografie. Modulare Modelle, die Studierende im Kurs zerlegen und zusammenbauen.',
      whyPrint: 'Ein zerlegbares Maschinenmodell aus dem 3D-Drucker kostet €35, aus dem Fachhandel €350. Bei 30 Studierenden pro Kurs macht das einen gewaltigen Unterschied.',
      requirements: ['PLA+ Budget-Material', 'Modularer Aufbau', 'Preis unter €40 pro Modell', 'Standard-Lieferung ausreichend'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Kärntner 3D-Druck Projekt',
    subheadline: 'Persönliche Beratung für Startups, Tourismus und Bildung',
    steps: [
      { title: 'Projektidee beschreiben', description: 'Eine kurze E-Mail genügt: Was soll gedruckt werden, wofür wird es genutzt, und bis wann brauchen Sie es?', context: 'Kärntner Kunden schätzen direkte Kommunikation – kein Webshop-Formular.' },
      { title: 'Individuelle Materialberatung', description: 'Tourismus-Objekte für draußen? ASA. Demo-Modelle für den Lakeside Park? PLA+. Wir erklären die Unterschiede verständlich.', context: 'Die meisten Kärntner Erstbesteller wählen PLA+ – das beste Preis-Leistungs-Verhältnis.' },
      { title: 'Fertigung und Qualitätssicherung', description: 'Druck, Qualitätskontrolle, optionale Nachbearbeitung. Bei Lehrmitteln testen wir auch die Zerlegbarkeit.', context: 'Modulare Modelle werden komplett montiert und zerlegt geliefert – beides funktioniert garantiert.' },
      { title: 'Versand nach Kärnten in 1-2 Tagen', description: 'Standardversand aus Gunskirchen über A10 Tauernautobahn. Express 24h für Lakeside-Demos.', context: 'Für regelmäßige Besteller bieten wir Rahmenverträge mit festen Lieferzeiten.' },
    ],
  },
  customerPriorities: [
    { statement: 'Schnelle Prototypen für Demo Days', explanation: 'Lakeside-Startups haben oft nur 2 Wochen Vorlaufzeit bis zum nächsten Demo Day. Der Prototyp muss rechtzeitig und vorzeigbar sein.' },
    { statement: 'Wetterfestigkeit für Tourismus-Einsatz', explanation: 'Modelle, die am Wörthersee oder auf Berghütten ausgestellt werden, müssen UV, Regen und Temperaturschwankungen standhalten.' },
    { statement: 'Günstige Lehrmittel für kleine Budgets', explanation: 'Kärntner Bildungseinrichtungen haben begrenzte Mittel. 3D-Druck muss deutlich günstiger sein als Fertigmodelle aus dem Fachhandel.' },
    { statement: 'Persönlicher Ansprechpartner', explanation: 'In Kärnten schätzt man persönlichen Kontakt. Kunden wollen wissen, wer ihr Modell druckt – nicht mit einem Bot chatten.' },
  ],
  commonMistakes: [
    { mistake: 'Outdoor-Modell aus PLA', explanation: 'PLA verformt sich ab 60°C und verblasst in der Sonne. Am Wörthersee im Sommer kann die Temperatur auf Ausstellungsflächen leicht 70°C erreichen.', prevention: 'Für Outdoor-Tourismus ausschließlich ASA. UV-beständig, hitzeresistent und in vielen Farben verfügbar.' },
    { mistake: 'Demo-Modell ohne Nachbearbeitung', explanation: 'Roher FDM-Druck zeigt Layer-Lines. Bei Demo Days vergleichen Investoren unbewusst mit hochpolierten Produkten auf dem Markt.', prevention: 'Für Lakeside-Demos empfehlen wir immer Schleifen + Grundieren. Der Aufpreis von €10-15 macht den Unterschied.' },
    { mistake: 'Zu fragiles Lehrmittel', explanation: 'Studierende gehen nicht vorsichtig mit Modellen um. Ein filigranes Teil überlebt die erste Vorlesung nicht.', prevention: 'Lehrmittel drucken wir mit höherem Infill (40-60%) und empfehlen abgerundete Kanten für Langlebigkeit.' },
    { mistake: 'Zerlegbares Modell ohne Passmarkierungen', explanation: 'Wenn 5 Teile in einer bestimmten Reihenfolge montiert werden müssen, aber nicht markiert sind, herrscht Chaos im Hörsaal.', prevention: 'Wir gravieren Nummern und Richtungspfeile direkt in die Bauteile – kostenlos bei Lehrmitteln.' },
  ],
};

// ═══════════════════════════════════════════
// VILLACH
// ═══════════════════════════════════════════
const villach: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Halbleiter-Testgehäuse für Infineon Villach',
      description: 'Infineon und Zulieferer testen neue Chip-Packaging-Konzepte mit gedruckten Gehäuseprototypen. Form, Kühlung und Anschlussgeometrie werden validiert, bevor teure Spritzgusswerkzeuge entstehen.',
      whyPrint: 'Ein Spritzguss-Werkzeug für Chip-Gehäuse kostet €50.000+. Ein 3D-gedruckter Geometrietest kostet €20 und ist in 24h fertig.',
      requirements: ['PETG für Temperaturbeständigkeit', 'Toleranz ±0.15mm', 'Kleinste Details ab 0.8mm', 'Vertraulichkeit (NDA)'],
    },
    {
      title: 'Technische Vorrichtungen für Kärntner Fertigung',
      description: 'Fertigungsbetriebe in Villach bestellen Haltevorrichtungen, Lehren und Montagehilfen aus dem 3D-Drucker. Diese Werkzeuge werden täglich eingesetzt und müssen belastbar sein.',
      whyPrint: 'Eine CNC-gefräste Vorrichtung kostet €200 und dauert 5 Tage. Eine 3D-gedruckte aus PETG kostet €30, hält monatelang und ist in 24h verfügbar.',
      requirements: ['PETG oder PETG-CF', 'Belastbar bis 50kg', 'Passgenau zu Maschinen', 'Nachbestellung identischer Teile'],
    },
    {
      title: 'Drauradweg-Infotafeln und Tourismus-Objekte',
      description: 'Die Tourismusregion Villach bestellt 3D-Modelle für Infopunkte am Drauradweg. Reliefmodelle der umliegenden Berglandschaft, die Wanderer und Radfahrer anfassen können.',
      whyPrint: 'Handgefertigte Reliefmodelle kosten €500+ pro Stück. 3D-gedruckte ASA-Modelle kosten €60, sind wetterfest und jederzeit nachbestellbar.',
      requirements: ['ASA für Outdoor', 'Reliefdarstellung mit Überhöhung', 'Vandalismusresistent (hoher Infill)', 'Mehrfarbig für Höhencodierung'],
    },
  ],
  projectWorkflow: {
    headline: 'So funktioniert 3D-Druck für Villacher Betriebe',
    subheadline: 'Industriequalität mit persönlichem Service',
    steps: [
      { title: 'Technische Anforderungen klären', description: 'Wir fragen: Wofür ist das Teil? Welche Kräfte wirken? Muss es in eine bestehende Baugruppe passen? Daraus ergibt sich Material und Druckstrategie.', context: 'Für Infineon-Zulieferer bieten wir NDA-Unterzeichnung vor Datenaustausch.' },
      { title: 'Material- und Toleranzfestlegung', description: 'Für Vorrichtungen: PETG-CF. Für Gehäusetests: PETG. Für Outdoor: ASA. Wir dokumentieren alle Parameter für reproduzierbare Nachbestellungen.', context: 'Bei Passungen empfehlen wir immer ein Testmuster vor der Serie.' },
      { title: 'Fertigung mit Prüfprotokoll', description: 'Jedes Teil wird nach Druck vermessen. Bei Vorrichtungen dokumentieren wir kritische Maße mit Messschieber-Foto.', context: 'Prüfprotokolle auf Anfrage auch als PDF für Ihre QS-Dokumentation.' },
      { title: 'Express oder Standardversand', description: 'Standard: 1-2 Tage via A10/A2. Express 24h für dringende Fertigungsstillstände.', context: 'Bei Vorrichtungsbruch liefern wir Ersatz in unter 24h – Ihre Produktion steht nicht still.' },
    ],
  },
  customerPriorities: [
    { statement: 'Industrielle Belastbarkeit, nicht nur Optik', explanation: 'Vorrichtungen werden täglich benutzt. Sie müssen Kräfte, Verschleiß und Reinigungsmittel aushalten – Monate, nicht Tage.' },
    { statement: 'Reproduzierbarkeit bei Nachbestellungen', explanation: 'Wenn eine Vorrichtung verschleißt, muss die Nachbestellung exakt identisch sein. Gleiche Maße, gleiches Material, gleiche Funktion.' },
    { statement: 'Vertraulichkeit bei Chip-Designs', explanation: 'Halbleiter-Geometrien sind hochsensibel. Der 3D-Druck-Anbieter muss Vertraulichkeit garantieren und NDA-fähig sein.' },
    { statement: 'Schnelle Ersatzteillieferung bei Ausfall', explanation: 'Wenn eine Fertigungsvorrichtung bricht, steht die Linie. 24h-Express ist dann keine Option, sondern Pflicht.' },
  ],
  commonMistakes: [
    { mistake: 'Vorrichtung aus PLA', explanation: 'PLA ist spröde und bricht bei Schlag- oder Biegebelastung. Eine Montagevorrichtung aus PLA überlebt den ersten Arbeitstag selten.', prevention: 'Vorrichtungen drucken wir ausschließlich aus PETG oder PETG-CF. Deutlich schlagzäher und langlebiger.' },
    { mistake: 'Keine Passungstoleranz eingeplant', explanation: 'FDM-Teile haben typisch ±0.2mm Toleranz. Wenn das Gehäuse exakt auf den Chip passen soll, ist das zu wenig Spiel.', prevention: 'Wir empfehlen 0.15-0.2mm Spiel pro Seite für Übergangpassungen. Presssitz ist mit FDM nicht realistisch.' },
    { mistake: 'Reliefmodell ohne UV-Schutz', explanation: 'Ein Outdoor-Modell aus PLA verblasst und verformt sich nach wenigen Wochen in der Sonne.', prevention: 'Outdoor-Reliefs drucken wir aus ASA – UV-beständig, farbecht und formstabil bis 95°C.' },
    { mistake: 'Zu geringer Infill bei Vorrichtungen', explanation: 'Standard-Infill von 15% reicht für Anschauungsmodelle. Eine Vorrichtung, die täglich belastet wird, braucht 60-80%.', prevention: 'Für Fertigungsvorrichtungen verwenden wir mindestens 60% Infill und verstärkte Wände. Das kostet etwas mehr, hält aber Monate.' },
  ],
};

// ═══════════════════════════════════════════
// WELS
// ═══════════════════════════════════════════
const wels: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Messemodelle für die Welser Messe',
      description: 'Aussteller der Welser Messe bestellen Produktmodelle, Standdekorationen und Blickfang-Objekte aus dem 3D-Drucker. Direkt vor Ort in Gunskirchen gefertigt – nur 10 Minuten von den Messehallen entfernt.',
      whyPrint: 'Messedeadlines sind unverhandelbar. Wenn am Freitag der Stand stehen muss, hilft nur ein Fertiger in der Nähe. Same-Day-Abholung in Gunskirchen macht es möglich.',
      requirements: ['Same-Day-Fertigung', 'Großformate bis 40cm', 'Nachbearbeitung für Messqualität', 'Persönliche Abholung'],
    },
    {
      title: 'Künstlerische Objekte für Welser Kreativszene',
      description: 'Künstler und Designer aus Wels nutzen 3D-Druck für Skulpturen, Installationen und Mixed-Media-Werke. Formen, die in klassischen Techniken nicht möglich wären.',
      whyPrint: 'Organische Formen, mathematische Strukturen, verschachtelte Geometrien – 3D-Druck macht Unmögliches möglich. Jedes Stück ist ein Unikat.',
      requirements: ['PLA+ oder PETG', 'Großformat möglich', 'Keine Serienoptik', 'Farbvielfalt (20+ Farben)'],
    },
    {
      title: 'Prototypen für OÖ-Handwerksbetriebe',
      description: 'Tischler, Installateure und Metallbauer aus dem Welser Umland testen neue Produktideen als 3D-Druck, bevor sie in die eigene Werkstatt investieren.',
      whyPrint: 'Ein Handwerker hat eine Idee für ein neues Werkzeug oder Zubehör. Ein 3D-Druck-Prototyp für €25 zeigt, ob die Idee funktioniert, bevor Materialkosten entstehen.',
      requirements: ['Funktionstest möglich', 'Belastbar (PETG)', 'Budget-freundlich', 'Same-Day-Abholung'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein Projekt für Welser Kunden',
    subheadline: 'Persönlich, schnell, direkt nebenan in Gunskirchen',
    steps: [
      { title: 'Persönliche Besprechung oder WhatsApp', description: 'Kommen Sie einfach vorbei – Gunskirchen ist 10 Minuten von Wels. Oder senden Sie ein Foto/Skizze per WhatsApp für eine erste Einschätzung.', context: 'Die meisten Welser Kunden kommen persönlich – Parkplatz direkt vor der Tür.' },
      { title: 'Sofort-Angebot am Bildschirm', description: 'Bei Vor-Ort-Terminen erstellen wir das Angebot direkt am CAD-Bildschirm. Sie sehen sofort, was möglich ist und was es kostet.', context: 'Einfache Teile: Angebot in 10 Minuten. Komplexe Objekte: Angebot in 2 Stunden.' },
      { title: 'Same-Day oder Next-Day Fertigung', description: 'Einfache Teile bis 15cm: Same-Day. Größere oder nachbearbeitete Objekte: Next-Day. Messemodelle mit Priorität.', context: 'Für die Welser Messe bieten wir Express-Slots mit garantierter Fertigstellung.' },
      { title: 'Abholung mit Qualitätscheck', description: 'Prüfen Sie Ihr Modell vor Ort. Passt etwas nicht, bessern wir sofort nach – in der Regel in 2-3 Stunden fertig.', context: 'Bar, Karte, Überweisung oder Rechnung – alles möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Nähe und persönlicher Kontakt', explanation: '10 Minuten von Wels: Kunden wollen vorbeikommen, ihr Modell ansehen, mit einem Menschen reden. Kein anonymer Online-Bestellprozess.' },
    { statement: 'Messedeadlines müssen gehalten werden', explanation: 'Wenn am Donnerstag die Messe aufbaut und das Exponat fehlt, ist die gesamte Investition in den Messestand wertlos.' },
    { statement: 'Kreative Freiheit ohne technische Hürden', explanation: 'Künstler wollen gestalten, nicht technische Parameter optimieren. Wir übersetzen kreative Vision in druckbare Geometrie.' },
    { statement: 'Praxistest vor Investition', explanation: 'Handwerker wollen ihre Produktidee erst testen, bevor sie Zeit und Material in der eigenen Werkstatt investieren.' },
  ],
  commonMistakes: [
    { mistake: 'Messemodell zu spät bestellt', explanation: 'Die meisten Messemodelle werden 2-3 Tage vor Aufbau bestellt. Das funktioniert nur, wenn der Fertiger in der Nähe ist.', prevention: 'Dank Same-Day-Fertigung in Gunskirchen schaffen wir auch Last-Minute-Bestellungen. Trotzdem empfehlen wir 1 Woche Vorlauf für nachbearbeitete Modelle.' },
    { mistake: 'Skulptur nicht auf Druckbarkeit geprüft', explanation: 'Künstlerische Designs haben oft extreme Überhänge oder filigrane Strukturen, die im FDM-Druck Stützstrukturen brauchen.', prevention: 'Wir prüfen jede Skulptur-Datei kostenlos und empfehlen Anpassungen, die den künstlerischen Ausdruck erhalten aber die Druckbarkeit verbessern.' },
    { mistake: 'Prototyp ohne klare Testkriterien', explanation: 'Ein Handwerker druckt seine Idee, aber weiß nicht, was er testen soll. Das Ergebnis: unklares Feedback.', prevention: 'Wir fragen immer: Was soll der Prototyp beweisen? Passung? Ergonomie? Optik? Daraus ergibt sich Material und Druckstrategie.' },
    { mistake: 'Falsches Finish für den Einsatzbereich', explanation: 'Ein Messemodell muss glatt und professionell sein. Ein Funktionsprototyp darf rau sein. Verwechslung kostet unnötig Geld.', prevention: 'Wir beraten zum passenden Finish: roh für Funktionstests, geschliffen für Präsentationen, lackiert für Messen.' },
  ],
};

// ═══════════════════════════════════════════
// ST. PÖLTEN
// ═══════════════════════════════════════════
const stpoelten: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Behördenmodelle für NÖ-Landesregierung',
      description: 'Die NÖ-Landesregierung und Bezirkshauptmannschaften bestellen Geländemodelle für Raumplanung, Verkehrsmodelle für Infrastrukturprojekte und architektonische Modelle für Bürgerbeteiligungen.',
      whyPrint: 'Ein physisches Geländemodell macht Planungsentscheidungen für Bürger und Politiker greifbar. Digitale Pläne überfordern Laien – 3D-Modelle nicht.',
      requirements: ['Maßstab 1:500 bis 1:1000', 'Farbcodierung für Zonen', 'PLA+ für Innenraum', 'Budget-konform für Behörden'],
    },
    {
      title: 'FH-Projekte für die FH St. Pölten',
      description: 'Studierende der FH St. Pölten nutzen 3D-Druck für Medienprojekte, technische Entwürfe und kreative Arbeiten. Semesterabschlussarbeiten mit physischer Komponente.',
      whyPrint: 'Die FH hat keine eigenen 3D-Drucker für Studierendenprojekte. Externe Fertigung zu fairen Preisen schließt diese Lücke.',
      requirements: ['Budget unter €30', 'PLA+ Standard', 'Schnelle Lieferung in 2-3 Tagen', 'Auch ohne CAD-Kenntnisse möglich'],
    },
    {
      title: 'Präsentationsmodelle für NÖ-Wirtschaftskammer',
      description: 'Gewerbebetriebe in NÖ präsentieren ihre Produkte bei WKO-Veranstaltungen mit 3D-gedruckten Modellen. Produktneuheiten werden physisch vorgestellt statt nur als Flyer.',
      whyPrint: 'Ein physisches Modell auf dem Messetisch erzeugt 5x mehr Aufmerksamkeit als ein Produktflyer. Bei WKO-Events zählt der erste Eindruck.',
      requirements: ['10-25 cm Größe', 'Nachbearbeitung für Präsentationsqualität', 'Rechnung für WKO-Förderung', 'Express 48h möglich'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Projekt für St. Pölten und NÖ',
    subheadline: 'Verlässlich, unkompliziert, mit Verständnis für Behörden und Bildung',
    steps: [
      { title: 'Anfrage mit Projektbeschreibung', description: 'Beschreiben Sie Ihr Projekt: Behördenmodell, Studienprojekt oder Präsentationsobjekt. Wir beraten zum passenden Ansatz.', context: 'Für Behörden erstellen wir auch formale Angebote für Vergabeverfahren.' },
      { title: 'Kostenvoranschlag mit Alternativoptionen', description: 'Sie erhalten einen KV mit verschiedenen Optionen: Budget (PLA+ roh), Standard (PLA+ geschliffen), Premium (nachbearbeitet und grundiert).', context: 'Für FH-Studierende bieten wir die Budget-Option ab €15 an.' },
      { title: 'Fertigung mit Fortschrittsmeldung', description: 'Bei Behördenprojekten informieren wir proaktiv über den Fertigungsstand. Kein Nachfragen nötig.', context: 'Für Semesterendprojekte garantieren wir Lieferung vor der Abgabefrist.' },
      { title: 'Lieferung nach NÖ in 1-2 Tagen', description: 'Standardversand über Westautobahn. Für dringende Behördenprojekte: Express 24h oder persönliche Übergabe in Gunskirchen.', context: 'St. Pölten erreichen wir über A1/S33 in unter 2 Stunden.' },
    ],
  },
  customerPriorities: [
    { statement: 'Formale Abwicklung für Behördenaufträge', explanation: 'Behörden brauchen KV, Auftragsbestätigung, Rechnung mit UID – alles korrekt und nachvollziehbar für die Buchhaltung.' },
    { statement: 'Verständliche Kommunikation für Nicht-Techniker', explanation: 'Politiker und Bürger verstehen kein CAD-Fachchinesisch. Wir erklären Möglichkeiten und Grenzen in klarer Sprache.' },
    { statement: 'Faire Preise für Bildungsprojekte', explanation: 'FH-Studierende haben kein Budget für teure Prototypen. 3D-Druck ab €15 macht physische Modelle für jeden Studierenden zugänglich.' },
    { statement: 'Termingarantie für Veranstaltungen', explanation: 'WKO-Events und Bürgerbeteiligungen haben feste Termine. Das Modell muss stehen, wenn der Termin ist – keine Ausreden.' },
  ],
  commonMistakes: [
    { mistake: 'Geländemodell zu klein gewählt', explanation: 'Ein 1:2000 Modell auf A4-Größe zeigt kaum Details. Bürger können einzelne Grundstücke nicht erkennen.', prevention: 'Für Bürgerbeteiligungen empfehlen wir 1:500 und mindestens 40x40cm. Das kostet mehr, aber erfüllt den Zweck.' },
    { mistake: 'Kein Budget für Nachbearbeitung eingeplant', explanation: 'Behörden kalkulieren nur den Druckpreis. Schleifen und Grundieren kosten 30% extra, machen aber den Unterschied bei Präsentationen.', prevention: 'Wir weisen im KV explizit auf die Nachbearbeitungsoptionen hin und empfehlen mindestens Schleifen für alle Präsentationsmodelle.' },
    { mistake: 'Studienprojekt ohne Maßangabe', explanation: 'Studierende senden eine CAD-Datei ohne Größenangabe. Im 3D-Drucker gibt es keinen „Standardmaßstab".', prevention: 'Wir fragen immer nach der gewünschten Größe und empfehlen Maßstäbe basierend auf dem Einsatzzweck.' },
    { mistake: 'Farbcodierung nachträglich aufgemalt', explanation: 'Aufgemalte Farben auf PLA halten schlecht und sehen unprofessionell aus. Besonders bei Behördenmodellen wirkt das amateurhaft.', prevention: 'Wir drucken direkt in verschiedenen Farben – Zonenwechsel im Modell durch Materialwechsel, nicht durch Nachbemalen.' },
  ],
};

// ═══════════════════════════════════════════
// DORNBIRN
// ═══════════════════════════════════════════
const dornbirn: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Outdoor-Gehäuse für Vorarlberger Sensorik',
      description: 'Vorarlberger Umwelttechnik-Firmen entwickeln Sensoren für Lawinenwarnung, Gewässerüberwachung und Luftqualitätsmessung. Die Gehäuse müssen extremen Alpenbedingungen standhalten.',
      whyPrint: 'Spritzguss für 50 Sensorgehäuse kostet €15.000 Werkzeugkosten. 50 ASA-Gehäuse aus dem 3D-Drucker kosten €1.500 – und sind in einer Woche fertig.',
      requirements: ['ASA für -20°C bis +60°C', 'UV-beständig', 'Dichtungsnut integriert', 'Feldtest-Serie 20-50 Stück'],
    },
    {
      title: 'Textilmaschinenteile für Dornbirner Industrie',
      description: 'Die Dornbirner Textilindustrie nutzt 3D-gedruckte Vorrichtungen, Fadenführungen und Spulenhalter. Ersatzteile für ältere Maschinen, die nicht mehr lieferbar sind.',
      whyPrint: 'Originalteile für Textilmaschinen aus den 90ern gibt es nicht mehr. 3D-Druck nach Vermessung des Originals ist die einzige wirtschaftliche Lösung.',
      requirements: ['PETG für Verschleißfestigkeit', 'Exakte Reproduktion nach Muster', 'Nachbestellung identischer Teile', 'Standard-Lieferung 2-3 Tage'],
    },
    {
      title: 'Alpin-Tourismusmodelle für Vorarlberg Tourismus',
      description: 'Tourismusverbände bestellen Reliefmodelle der Vorarlberger Alpen für Infocenter, Hotels und Bergstationen. Wanderer und Skifahrer orientieren sich am 3D-Modell.',
      whyPrint: 'Ein handgefertigtes Alpenrelief kostet €2.000. Ein 3D-gedrucktes ASA-Modell kostet €80, ist wetterfest und jederzeit nachbestellbar.',
      requirements: ['ASA für Outdoor-Einsatz', 'Höhenüberhöhung 2-3x', 'Farbcodierung für Pisten/Wege', '30-50 cm Modellgröße'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Vorarlberger Outdoor-Projekt',
    subheadline: 'Wetterfest, präzise, für alpine Bedingungen optimiert',
    steps: [
      { title: 'Technische Anforderungen definieren', description: 'Welche Temperaturen? Welche UV-Belastung? Kontakt mit Wasser? Wir definieren gemeinsam die Materialanforderungen.', context: 'Für alpine Anwendungen empfehlen wir fast immer ASA – getestet von -20°C bis +95°C.' },
      { title: 'Materialtest bei Erstprojekten', description: 'Bei neuen Outdoor-Anwendungen drucken wir ein Testmuster, das Sie 2 Wochen im Einsatz testen. Erst dann starten wir die Serie.', context: 'Wir stellen das Testmuster kostenlos bei Serienbestellung.' },
      { title: 'Serienfertigung mit Qualitätskontrolle', description: 'Jedes Gehäuse wird auf Maßhaltigkeit geprüft. Bei Dichtungsnutzen kontrollieren wir den Sitz mit Prüfdichtungen.', context: 'Bei Sensorgehäusen testen wir die Dichtung stichprobenartig unter Wasser.' },
      { title: 'Versand in 2-3 Tagen nach Vorarlberg', description: 'Bruchsichere Einzelverpackung. Express 24h für dringende Nachbestellungen bei Geräteausfällen.', context: 'Für regelmäßige Besteller bieten wir Lagerhaltung mit Abrufauftrag an.' },
    ],
  },
  customerPriorities: [
    { statement: 'Alpine Tauglichkeit garantiert', explanation: 'In Vorarlberg zählt nur: Hält es den Winter durch? UV, Frost, Schnee, Regen – ein Gehäuse muss 12 Monate draußen überleben.' },
    { statement: 'Ersatzteile für Maschinen, die keiner mehr baut', explanation: 'Die Dornbirner Textilindustrie hat Maschinen im Einsatz, deren Hersteller längst nicht mehr existieren. 3D-Druck ist die letzte Möglichkeit.' },
    { statement: 'Nachhaltigkeit und lokale Fertigung', explanation: 'Vorarlberger Unternehmen legen Wert auf kurze Lieferwege und recycelbare Materialien. PLA+ ist biobasiert, ASA langlebig – beides passt.' },
  ],
  commonMistakes: [
    { mistake: 'Dichtung nicht im Design berücksichtigt', explanation: 'Ein Gehäuse ohne Dichtungsnut ist nicht wetterfest. Nachträgliche Dichtungen kleben schlecht auf FDM-Oberflächen.', prevention: 'Wir konstruieren Dichtungsnuten direkt in das Gehäusedesign – passend für Standard-O-Ringe oder Flachdichtungen.' },
    { mistake: 'ABS statt ASA für Outdoor', explanation: 'ABS vergilbt unter UV und ist weniger witterungsbeständig als ASA. Trotzdem wird es oft fälschlich als „Outdoor-Material" empfohlen.', prevention: 'Wir verwenden ausschließlich ASA für Outdoor-Anwendungen – gleiche Verarbeitbarkeit wie ABS, aber deutlich UV-beständiger.' },
    { mistake: 'Ersatzteil nur visuell nachgebaut', explanation: 'Ein Ersatzteil nach Augenschein modelliert hat falsche Maße. Das Teil klemmt oder wackelt in der Maschine.', prevention: 'Wir vermessen das Original mit Messschieber und dokumentieren alle kritischen Maße. Bei komplexen Teilen nutzen wir 3D-Scan.' },
    { mistake: 'Alpenrelief ohne Drainage', explanation: 'Ein Outdoor-Reliefmodell sammelt Regenwasser in Tälern. Im Winter gefriert es und sprengt das Modell.', prevention: 'Wir integrieren unsichtbare Drainage-Kanäle in der Rückseite des Reliefs. Wasser läuft ab, das Modell bleibt intakt.' },
  ],
};

// ═══════════════════════════════════════════
// GUNSKIRCHEN (Standort)
// ═══════════════════════════════════════════
const gunskirchen: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Same-Day Ersatzteile für lokale Betriebe',
      description: 'Handwerks- und Industriebetriebe aus Gunskirchen, Lambach und Stadl-Paura kommen persönlich vorbei, wenn ein Maschinenteil bricht. Vormittags anfragen, nachmittags abholen – ohne Versandkosten.',
      whyPrint: 'Wenn die Maschine steht, kostet jede Stunde Stillstand Geld. Ein 3D-gedrucktes Ersatzteil in 4 Stunden überbrückt die Wartezeit auf das Originalteil.',
      requirements: ['PETG für Belastbarkeit', 'Same-Day-Fertigung', 'Persönliche Abholung', 'Vermessung des Originalteils vor Ort'],
    },
    {
      title: 'Prototypen für Erfinder aus der Region',
      description: 'Tüftler und Erfinder aus dem Hausruckviertel bringen ihre Ideen als Skizze oder Beschreibung. Wir modellieren und drucken den ersten Prototypen – oft noch am selben Tag.',
      whyPrint: 'Eine Idee im Kopf ist wertlos, wenn man sie nicht zeigen kann. Ein 3D-Druck-Prototyp für €25 macht aus einer Idee etwas Greifbares.',
      requirements: ['Modellierung nach Skizze/Beschreibung', 'Budget-freundlich ab €15', 'Persönliche Beratung vor Ort', 'Iterative Verbesserung möglich'],
    },
    {
      title: 'Schulprojekte und MINT-Förderung',
      description: 'Schulen in Gunskirchen und Umgebung bestellen Anschauungsmodelle für MINT-Unterricht. Planetensysteme, Moleküle, Zahnradgetriebe – alles, was Schüler anfassen und begreifen können.',
      whyPrint: 'Ein Zahnradmodell zum Anfassen macht Mechanik verständlicher als jedes Schulbuch. Bei €10 pro Modell können alle Schüler eigene Modelle bekommen.',
      requirements: ['PLA+ Budget-Material', 'Einfache, robuste Designs', 'Preis unter €15 pro Modell', 'Persönliche Abholung kostenlos'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein Projekt direkt am Standort ab',
    subheadline: 'Persönlich, sofort, ohne Umwege – direkt in Gunskirchen',
    steps: [
      { title: 'Vorbeikommen oder anrufen', description: 'Unsere Werkstatt in der Negrellistraße 15 ist Ihr 3D-Druck-Nachbar. Kommen Sie vorbei oder rufen Sie an – wir besprechen alles persönlich.', context: 'Öffnungszeiten: Montag bis Freitag, nach Vereinbarung auch abends.' },
      { title: 'Beratung und Angebot vor Ort', description: 'Bringen Sie Ihr Musterteil, Ihre Skizze oder Ihre Idee mit. Wir beraten am CAD-Bildschirm und erstellen das Angebot direkt.', context: 'Bei einfachen Teilen starten wir den Druck oft noch während der Besprechung.' },
      { title: 'Fertigung zusehen (optional)', description: 'Sie können dem Drucker bei der Arbeit zusehen. Bei Erstbestellern erklären wir gerne den gesamten Prozess.', context: 'Besonders für Schulklassen bieten wir Kurzführungen durch die Werkstatt an.' },
      { title: 'Modell gemeinsam prüfen und mitnehmen', description: 'Qualitätskontrolle zusammen am Tisch. Passt alles? Dann mitnehmen. Passt etwas nicht? Sofort nachbessern.', context: 'Bezahlung: Bar, Karte, Überweisung oder Rechnung für Firmen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Direkte Kommunikation ohne Umwege', explanation: 'Kein Kontaktformular, kein Ticket-System. Hier reden Sie direkt mit der Person, die Ihr Modell druckt.' },
    { statement: 'Sofort-Verfügbarkeit bei Maschinenausfall', explanation: 'Wenn die Fräse steht, zählt jede Stunde. Same-Day-Fertigung mit persönlicher Abholung: schneller geht es nicht.' },
    { statement: 'Keine Versandkosten, keine Wartezeit', explanation: 'Abholung in Gunskirchen = 0€ Versand. Fertigung zusehen = 0 Tage Wartezeit.' },
    { statement: 'Ehrliche Beratung statt Upselling', explanation: 'Wenn PLA+ reicht, empfehlen wir PLA+. Wir verkaufen kein teures Material, das Sie nicht brauchen.' },
    { statement: 'Nachbarschaftspreise für Schulen und Vereine', explanation: 'Für lokale Schulen, Feuerwehren und Vereine bieten wir Sonderkonditionen. Wir sind Teil der Gemeinde.' },
  ],
  commonMistakes: [
    { mistake: 'Ersatzteil nach Augenschein modelliert', explanation: 'Ein abgebrochenes Teil kann man nicht einfach „so ungefähr" nachbauen. Die Maße stimmen nicht, und das Teil passt nicht.', prevention: 'Bringen Sie das Originalteil mit – wir vermessen alles vor Ort mit Messschieber. Bei Bruchstücken rekonstruieren wir die Geometrie.' },
    { mistake: 'Zu wenig Infill für Maschinenteile', explanation: 'Ein Ersatzteil mit 15% Infill sieht aus wie das Original, bricht aber bei der ersten Belastung.', prevention: 'Für Maschinenteile verwenden wir mindestens 60% Infill und dickere Wände. Das kostet €5 mehr, hält aber monatelang.' },
    { mistake: 'Schulmodell zu detailliert und fragil', explanation: 'Schüler sind keine Modellbauer. Ein filigranes Zahnrad überlebt die Pause nicht.', prevention: 'Schulmodelle drucken wir extra robust: dickere Zähne, abgerundete Kanten, höherer Infill. Form follows Function.' },
    { mistake: 'Erfindung ohne Patent-Überlegung', explanation: 'Manche Erfinder zeigen ihren Prototypen überall herum, bevor sie ihn schützen lassen. Dann kann jemand die Idee kopieren.', prevention: 'Wir weisen auf Patentmöglichkeiten hin und behandeln alle Projekte vertraulich. Ihr Prototyp bleibt Ihr Geheimnis.' },
  ],
};

// ═══════════════════════════════════════════
// OBERÖSTERREICH (Bundesland)
// ═══════════════════════════════════════════
const oberoesterreich: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Industrieprototypen für den OÖ-Zentralraum',
      description: 'Automotive-Zulieferer, Maschinenbauer und Elektronikfirmen zwischen Linz und Wels testen neue Konzepte als 3D-Druck. Funktionsprototypen für interne Freigaben und Kundenpräsentationen.',
      whyPrint: 'OÖ ist Österreichs Industriezentrum. Schnelle Prototypen beschleunigen Entwicklungszyklen – von Wochen auf Tage.',
      requirements: ['PETG für Belastungstests', 'Reproduzierbar für Serienanlauf', 'Toleranz ±0.2mm', 'Express 24h möglich'],
    },
    {
      title: 'Schulungsmodelle für OÖ-Berufsschulen',
      description: 'Berufsschulen in Linz, Wels und Steyr bestellen Schnittmodelle, die Lehrlinge zerlegen und verstehen können. Motoren, Getriebe, Ventile – alles als farbcodiertes 3D-Modell.',
      whyPrint: 'Ein Schnittmodell aus dem Fachhandel kostet €500. Ein 3D-gedrucktes zerlegbares Modell kostet €50 und kann in jedem Lehrgang eingesetzt werden.',
      requirements: ['Zerlegbar und zusammenbaubar', 'Farbcodierte Baugruppen', 'Robust für täglichen Einsatz', 'Budget-freundlich für Schulen'],
    },
    {
      title: 'Messe-Exponate für OÖ-Veranstaltungen',
      description: 'Aussteller bei OÖ-Messen (Wels, Linz, Ried) brauchen Blickfang-Modelle für ihre Stände. Produktnachbildungen, Schnittmodelle und interaktive Exponate.',
      whyPrint: 'Vergrößerte Produktmodelle aus dem 3D-Drucker sind leichter als Handarbeit, günstiger als CNC und schneller verfügbar.',
      requirements: ['Großformat bis 40cm', 'Nachbearbeitung für Messqualität', 'Same-Day in Gunskirchen', 'Transport-sichere Verpackung'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein OÖ-Industrieprojekt ab',
    subheadline: 'Vom Prototypen zur Kleinserie – direkt aus dem Herzen Oberösterreichs',
    steps: [
      { title: 'Technisches Briefing', description: 'Wir klären: Wofür ist das Teil? Welche Belastungen? Passung in bestehende Baugruppe? Daraus definieren wir Material, Orientierung und Infill.', context: 'Für Automobilzulieferer arbeiten wir regelmäßig mit STEP-Dateien direkt aus dem CAD-System.' },
      { title: 'Prototyp in 24h', description: 'Erste Iteration innerhalb eines Arbeitstages. Sie prüfen Passung und Funktion, wir iterieren bis es sitzt.', context: 'Die meisten OÖ-Industrieprojekte brauchen 2-3 Iterationen bis zur Freigabe.' },
      { title: 'Kleinserie mit Qualitätssicherung', description: 'Ab Freigabe fertigen wir die Serie. Jedes Teil wird vermessen, dokumentiert und einzeln verpackt.', context: 'Mengenrabatt: 10% ab 10, 15% ab 50, individuell ab 100 Stück.' },
      { title: 'Abholung oder Express-Versand', description: 'Standort Gunskirchen: zentral in OÖ gelegen. Persönliche Abholung oder Versand am selben Tag.', context: 'Von Gunskirchen aus erreichen Sie ganz OÖ in unter 90 Minuten.' },
    ],
  },
  customerPriorities: [
    { statement: 'Industriequalität zu fairen Preisen', explanation: 'OÖ-Betriebe kennen den Wert von Qualität. Billig ist nicht genug – es muss funktionieren. Aber überteuert darf es auch nicht sein.' },
    { statement: 'Lokaler Ansprechpartner in OÖ', explanation: 'Ein Fertiger in Wien oder München hilft wenig, wenn man den Prototypen morgen braucht. Gunskirchen liegt zentral in OÖ.' },
    { statement: 'Mengenrabatt für Schulungsserien', explanation: 'Berufsschulen bestellen 30 identische Modelle. Der Stückpreis muss dann spürbar sinken.' },
    { statement: 'Nachbestellung ohne Neuaufwand', explanation: 'Wenn das gleiche Teil in 6 Monaten wieder gebraucht wird, soll es genauso aussehen wie beim letzten Mal. Ohne alles neu erklären.' },
  ],
  commonMistakes: [
    { mistake: 'Funktionsprototyp aus PLA', explanation: 'PLA ist für Anschauung top, für Belastungstests nicht geeignet. Es bricht spröde und verformt sich bei Wärme.', prevention: 'Für Funktionstests empfehlen wir PETG (zäh) oder ASA (UV-beständig). Beratung ist bei uns inklusive.' },
    { mistake: 'Keine Serienkonfigurations-Dokumentation', explanation: 'Wenn nach 6 Monaten nachbestellt wird und die Druckparameter nicht dokumentiert sind, wird das Ergebnis anders.', prevention: 'Wir speichern alle Druckparameter jeder Bestellung. Nachbestellungen sind identisch – garantiert.' },
    { mistake: 'Messemodell mit sichtbaren Nähten', explanation: 'Großformate bestehen aus mehreren Teilen. Schlecht verklebte Nähte ruinieren den professionellen Eindruck.', prevention: 'Wir spachteln und schleifen Klebenähte unsichtbar. Bei Messmodellen ist Nahtbearbeitung im Preis enthalten.' },
    { mistake: 'Schulungsmodell ohne Montage-Anleitung', explanation: 'Ein zerlegbares Modell nützt wenig, wenn die Lehrkraft nicht weiß, welches Teil wohin gehört.', prevention: 'Wir liefern farbcodierte Teile mit Nummern und eine einseitige Montageanleitung als PDF dazu.' },
  ],
};

// ═══════════════════════════════════════════
// NIEDERÖSTERREICH
// ═══════════════════════════════════════════
const niederoesterreich: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Weinpräsentations-Objekte für NÖ-Winzer',
      description: 'Winzer in der Wachau und im Weinviertel bestellen individuelle Flaschenständer, Weinregal-Elemente und Dekorationsobjekte mit Weingut-Logo für Verkostungen und Hofläden.',
      whyPrint: 'Jedes Weingut braucht individuelle Ausstattung. Standard-Weinregale gibt es überall – personalisierte Objekte mit Logo und Weingutsname heben das Erlebnis ab.',
      requirements: ['PETG für Feuchtigkeitsresistenz', 'Logo-Integration im Druck', 'Kleinserien 10-50 Stück', 'Budget-freundlich'],
    },
    {
      title: 'Architekturmodelle für NÖ-Bauträger',
      description: 'Bauträger in NÖ bestellen Siedlungsmodelle für Gemeinderatspräsentationen und Vermarktung. Ganze Wohnviertel im Maßstab 1:200 machen Bauprojekte greifbar.',
      whyPrint: 'Ein physisches Siedlungsmodell überzeugt Gemeinderäte schneller als digitale Pläne. Die Investition von €200 für ein Modell sichert Baugenehmigungen im Wert von Millionen.',
      requirements: ['Maßstab 1:200 bis 1:500', 'Mehrere Gebäude auf einer Grundplatte', 'Farbcodierung für Nutzungszonen', 'Lieferung in 3-5 Tagen'],
    },
    {
      title: 'Technische Vorrichtungen für NÖ-Gewerbe',
      description: 'Handwerks- und Gewerbebetriebe in NÖ bestellen Montagehilfen, Schablonen und Spezialwerkzeuge. Maßgeschneidert für ihre Maschinen und Arbeitsabläufe.',
      whyPrint: 'Eine maßgeschneiderte Montagehilfe spart pro Arbeitsgang 2 Minuten. Bei 200 Arbeitsgängen pro Tag amortisiert sich der 3D-Druck in einer Woche.',
      requirements: ['PETG für Langlebigkeit', 'Passgenau zu bestehenden Maschinen', 'Nachbestellung identischer Teile', 'Express bei Maschinenausfall'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr NÖ-Projekt',
    subheadline: 'Unkompliziert, verlässlich, mit Verständnis für Gewerbe und Landwirtschaft',
    steps: [
      { title: 'Projektanfrage per E-Mail oder Telefon', description: 'Beschreiben Sie, was Sie brauchen. Foto, Skizze oder CAD-Datei – alles ist ein guter Startpunkt.', context: 'Für Winzer erstellen wir auch 3D-Modelle nach Foto der Flasche oder des Logos.' },
      { title: 'Angebot mit Material-Empfehlung', description: 'Sie erhalten ein Angebot mit passender Materialempfehlung. Für Weinobjekte PETG, für Vorrichtungen PETG-CF, für Modelle PLA+.', context: 'Bei Bauträger-Projekten bieten wir verschiedene Maßstabsoptionen mit Preisvergleich.' },
      { title: 'Fertigung mit Zwischenmeldung', description: 'Bei größeren Projekten informieren wir über den Fertigungsstand. Bei Architekturmodellen senden wir ein Foto vor dem Versand.', context: 'Standardteile fertigen wir innerhalb von 1-2 Arbeitstagen.' },
      { title: 'Versand oder Abholung', description: 'Bruchsichere Verpackung, Standardversand in 1-2 Tagen. Express 24h für dringende Vorrichtungen. Abholung in Gunskirchen jederzeit.', context: 'NÖ-Kunden westlich von St. Pölten fahren oft direkt nach Gunskirchen – nur 1h entfernt.' },
    ],
  },
  customerPriorities: [
    { statement: 'Individuelle Stücke statt Massenware', explanation: 'NÖ-Winzer und Handwerker wollen Unikate, die zu ihrem Betrieb passen. Kein Produkt von der Stange.' },
    { statement: 'Robustheit für täglichen Gewerbe-Einsatz', explanation: 'Eine Montagehilfe, die nach 2 Wochen bricht, ist wertlos. Material und Verarbeitung müssen stimmen.' },
    { statement: 'Faire Preise für Klein- und Mittelbetriebe', explanation: 'NÖ-KMUs rechnen genau. Der 3D-Druck muss sich wirtschaftlich rechnen, nicht nur technisch überzeugen.' },
    { statement: 'Verlässliche Liefertermine', explanation: 'Wenn das Modell für die Gemeinderatssitzung am Dienstag da sein muss, muss es am Dienstag da sein.' },
  ],
  commonMistakes: [
    { mistake: 'Weinobjekt aus PLA', explanation: 'PLA ist feuchtigkeitsempfindlich. Ein Flaschenständer, der bei der Verkostung nass wird, quillt auf und verliert die Form.', prevention: 'Für Weinobjekte verwenden wir PETG – wasserbeständig, robust und in allen Weinfarben verfügbar.' },
    { mistake: 'Architekturmodell ohne Maßstabsangabe bestellt', explanation: 'Ohne klaren Maßstab kann das Modell zu groß für den Gemeindesaal oder zu klein für Details sein.', prevention: 'Wir beraten zum optimalen Maßstab basierend auf Raumgröße und Präsentationszweck. 1:200 ist unser Standardempfehlung.' },
    { mistake: 'Vorrichtung ohne Verschleißkante', explanation: 'An der Kontaktstelle verschleißt das Material zuerst. Ohne verstärkte Kante muss das ganze Teil nachgedruckt werden.', prevention: 'Wir verstärken Kontaktstellen mit 100% Infill und dickeren Wänden. Nur die Verschleißkante wird bei Bedarf nachgedruckt.' },
    { mistake: 'Logo als Aufkleber statt integriert', explanation: 'Ein Aufkleber löst sich bei Feuchtigkeit. Eingedrucktes Logo ist permanent und wirkt professioneller.', prevention: 'Wir integrieren Logos direkt in den Druck – erhaben oder vertieft, in Kontrastfarbe möglich.' },
  ],
};

// ═══════════════════════════════════════════
// STEIERMARK
// ═══════════════════════════════════════════
const steiermark: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Automotive-Designstudien für steirische Zulieferer',
      description: 'Magna, AVL und hunderte Zulieferer bewerten Formvarianten physisch. 20 Gehäuseoptionen auf dem Tisch beschleunigen Design-Freeze-Meetings um 80%.',
      whyPrint: 'Ein Design-Review mit 3D-Drucken dauert 1 Stunde. Am Bildschirm dauert die gleiche Entscheidung eine Woche. Physische Modelle beschleunigen Konsensfindung.',
      requirements: ['ASA für Outdoor-Tests', 'Parallele Serienfertigung', 'Reproduzierbare Maßhaltigkeit', 'Express 24h möglich'],
    },
    {
      title: 'Outdoor-Ausrüstungsprototypen',
      description: 'Die steirische Outdoor-Industrie testet Halterungen, Gehäuse und Zubehör für Bergsport, Jagd und Forstwirtschaft. UV-Beständigkeit und Stoßfestigkeit sind Pflicht.',
      whyPrint: 'Outdoor-Prototypen müssen ins Gelände, nicht in die Vitrine. ASA-Teile überstehen Regen, UV und Temperaturen von -20°C bis +60°C.',
      requirements: ['ASA Material', 'Feldtest-geeignet', 'Stoßfest (hoher Infill)', 'Neon-Farben für Sichtbarkeit'],
    },
    {
      title: 'Gießereimodelle für steirische Metallverarbeitung',
      description: 'Gießereien nutzen 3D-gedruckte Urmodelle für Sandgussverfahren. Das 3D-Modell dient als Form, aus der die Metallteile entstehen.',
      whyPrint: 'Ein CNC-gefrästes Urmodell kostet €800 und dauert 2 Wochen. Ein 3D-gedrucktes Urmodell kostet €60 und ist in 48h fertig – bei gleicher Formgenauigkeit.',
      requirements: ['PLA+ für einmaliges Abgießen', 'Glatte Oberfläche (geschliffen)', 'Maßgenau für Formenbau', 'Budget-optimiert'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein steirisches Industrieprojekt',
    subheadline: 'Vom ersten Prototyp zur Feldserie – robust und termingerecht',
    steps: [
      { title: 'STEP/STL-Dateien und Lastenheft', description: 'Senden Sie CAD-Daten und beschreiben Sie den Einsatzzweck. Bei Automobilteilen brauchen wir auch Belastungsangaben.', context: 'Wir arbeiten regelmäßig mit CATIA-, Solidworks- und Fusion360-Daten.' },
      { title: 'Materialauswahl mit Datenblatt', description: 'Sie erhalten eine Materialempfehlung mit technischem Datenblatt: Zugfestigkeit, Temperaturbereich, UV-Beständigkeit.', context: 'Für Automotive-Kunden dokumentieren wir nach VDA-Standards auf Anfrage.' },
      { title: 'Erstmuster und Freigabe', description: 'Erstes Teil in 24h. Sie testen Passung und Funktion, wir optimieren bis zur Freigabe.', context: 'Die meisten Automotive-Projekte brauchen 2-4 Iterationen.' },
      { title: 'Serienfertigung und Versand', description: 'Ab Freigabe: Serienfertigung mit Stückpreis-Staffelung. Versand nach Graz via A9 in 1-2 Tagen.', context: 'Für die gesamte Steiermark bieten wir zentrale Logistik aus Gunskirchen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Automotive-taugliche Qualitätsdokumentation', explanation: 'Zulieferer brauchen Prüfprotokolle und Materialzertifikate – auch für Prototypen. Das gehört zur Branchenkultur.' },
    { statement: 'Outdoor-Tauglichkeit bewiesen, nicht versprochen', explanation: 'Steirische Kunden wollen Testdaten, keine Marketing-Versprechen. UV-Test, Kältekammer-Test, Schlagtest – Zahlen statt Adjektive.' },
    { statement: 'Reproduzierbare Serie, nicht nur ein guter Prototyp', explanation: 'Wenn das erste Teil passt, müssen auch die nächsten 100 passen. Konsistenz ist wichtiger als ein einzelnes Highlight.' },
  ],
  commonMistakes: [
    { mistake: 'Designstudie mit verschiedenen Infill-Einstellungen', explanation: 'Unterschiedlicher Infill erzeugt unterschiedliches Gewicht und Haptik. Der Designvergleich wird verfälscht.', prevention: 'Alle Varianten einer Designstudie drucken wir mit identischen Parametern. Der Vergleich ist fair.' },
    { mistake: 'Gießereimodell nicht entformt gedacht', explanation: 'Das 3D-gedruckte Urmodell muss aus der Sandform entfernbar sein. Hinterschnitte machen das unmöglich.', prevention: 'Wir prüfen jedes Gießereimodell auf Entformbarkeit und empfehlen Anpassungen für sauberen Sandguss.' },
    { mistake: 'Outdoor-Prototyp nicht im Einsatzgebiet getestet', explanation: 'Ein Teil, das im Büro funktioniert, kann im steirischen Berggelände versagen. Kälte, Nässe und UV sind unerbittlich.', prevention: 'Wir empfehlen 2 Wochen Feldtest vor der Serie. Das Testmuster stellen wir bei Serienbestellung kostenlos.' },
    { mistake: 'Keine Farbcodierung bei Designvarianten', explanation: 'Wenn 20 graue Teile auf dem Tisch liegen, verliert das Entwicklungsteam den Überblick.', prevention: 'Wir drucken auf Wunsch jede Variante in einer anderen Farbe. Oder gravieren Bezeichnungen direkt ins Teil.' },
  ],
};

// ═══════════════════════════════════════════
// KÄRNTEN (Bundesland)
// ═══════════════════════════════════════════
const kaernten: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Lehrmittel für Kärntner Bildungseinrichtungen',
      description: 'Schulen, HTLs und die FH Kärnten bestellen Anschauungsmodelle für Technik, Naturwissenschaften und Geografie. Zerlegbare Motoren, Geländemodelle und biologische Strukturen.',
      whyPrint: 'Kärntner Schulen haben begrenzte Budgets. 3D-Druck liefert Lehrmittel für 10% des Preises von Fachhandels-Modellen – und in exakt der Größe, die in den Unterricht passt.',
      requirements: ['PLA+ Budget-Material', 'Robust für Schülergebrauch', 'Zerlegbar für Demonstrationen', 'Preis unter €25 pro Modell'],
    },
    {
      title: 'Tourismus-Reliefs für Kärntner Seen',
      description: 'Die Tourismusregion Wörthersee, Millstätter See und Ossiacher See bestellt Reliefmodelle für Infocenter. Besucher sehen Wanderwege, Badestrände und Bergpanoramen auf einen Blick.',
      whyPrint: 'Ein 3D-gedrucktes Relief mit Höhenüberhöhung macht die Kärntner Seenlandschaft greifbar. Maßstabsgetreue Modelle können Distanzen nicht zeigen – überhöhte schon.',
      requirements: ['ASA für Outdoor', 'Farbcodierung (See/Wald/Berg)', 'Höhenüberhöhung 3x', '40-60 cm Modellgröße'],
    },
    {
      title: 'Hardware-Prototypen für Kärntner Startups',
      description: 'Tech-Startups in Klagenfurt und Villach entwickeln IoT, CleanTech und MedTech. Erste Gehäuseentwürfe und mechanische Konzepte werden als 3D-Druck getestet.',
      whyPrint: 'Kärntner Startups haben begrenztes Kapital. Ein 3D-gedruckter Prototyp für €30 beweist die Machbarkeit, bevor tausende Euro in Werkzeuge fließen.',
      requirements: ['PLA+ oder PETG', 'Budget unter €50', 'Turnaround 48h', 'Iterative Verbesserung'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Kärntner 3D-Druck Projekt',
    subheadline: 'Für Bildung, Tourismus und Innovation – zuverlässig aus Oberösterreich',
    steps: [
      { title: 'Anfrage mit Einsatzzweck', description: 'Sagen Sie uns, wofür das Modell ist: Unterricht, Tourismus oder Prototyp. Das bestimmt Material, Größe und Finish.', context: 'Für Schulprojekte bieten wir vereinfachte Bestellprozesse und Sammelrechnungen.' },
      { title: 'Budget-optimiertes Angebot', description: 'Wir bieten drei Preisstufen: Budget (roh), Standard (geschliffen), Premium (lackiert). So finden Sie die passende Option.', context: 'Schulen und Vereine erhalten Sonderkonditionen auf Anfrage.' },
      { title: 'Fertigung und Qualitätskontrolle', description: 'Druck, Prüfung, optionale Nachbearbeitung. Bei Lehrmitteln testen wir die Zerlegbarkeit und Robustheit extra.', context: 'Reliefmodelle werden auf korrekte Höhenverhältnisse geprüft.' },
      { title: 'Versand nach Kärnten über Tauernautobahn', description: 'Standard 1-2 Tage. Express 24h für dringende Projekte. Bruchsichere Verpackung, besonders für Reliefmodelle.', context: 'Sammelbestellungen für Schulen versenden wir versandkostenfrei ab €100.' },
    ],
  },
  customerPriorities: [
    { statement: 'Bildungsfreundliche Preise', explanation: 'Kärntner Bildungseinrichtungen haben die niedrigsten Budgets. 3D-Druck muss billiger sein als Lehrmittel aus dem Katalog.' },
    { statement: 'Wetterfeste Tourismus-Objekte', explanation: 'Reliefmodelle im Freien müssen Kärntner Winter und Sommersonne überstehen. PLA ist keine Option – nur ASA.' },
    { statement: 'Verständliche Kommunikation', explanation: 'Nicht jeder Lehrer oder Tourismusmanager versteht 3D-Druck-Fachbegriffe. Wir erklären alles in Alltagssprache.' },
    { statement: 'Sammelbestellungen für Schulen', explanation: 'Mehrere Lehrkräfte bestellen für verschiedene Fächer. Eine Sammelbestellung spart Versandkosten und Verwaltungsaufwand.' },
  ],
  commonMistakes: [
    { mistake: 'Lehrmittel aus zu dünnem Material', explanation: 'Schüler sind nicht vorsichtig. Ein filigranes Modell überlebt den ersten Unterrichtstag nicht.', prevention: 'Lehrmittel drucken wir mit 40% Infill und 1.6mm Wandstärke. Robuster als nötig, aber langlebiger.' },
    { mistake: 'Relief ohne UV-Schutz aufgestellt', explanation: 'PLA-Reliefs verblassen und verformen sich nach wenigen Wochen in der Sonne.', prevention: 'Outdoor-Reliefs nur aus ASA. Zusätzlich empfehlen wir eine überdachte Aufstellung, wenn möglich.' },
    { mistake: 'Startup-Prototyp zu früh finalisiert', explanation: 'Der erste Entwurf ist nie der beste. Wer sofort 50 Stück bestellt, verschwendet Budget.', prevention: 'Wir empfehlen: 1 Prototyp → testen → verbessern → 5 Stück → validieren → Serie. Jeder Schritt kostet wenig, spart langfristig viel.' },
    { mistake: 'Geländemodell im falschen Maßstab', explanation: 'Ein 1:5000-Modell zeigt den Wörthersee als Pfütze. Ein 1:500-Modell ist 3 Meter breit und passt nirgends hin.', prevention: 'Wir beraten zum optimalen Maßstab basierend auf dem verfügbaren Platz. 1:2000 mit 3x Überhöhung ist unser Standardempfehlung für Infocenter.' },
  ],
};

// ═══════════════════════════════════════════
// TIROL
// ═══════════════════════════════════════════
const tirol: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Seilbahntechnik-Prototypen für Tiroler Hersteller',
      description: 'Seilbahnhersteller wie Doppelmayr-Zulieferer testen Klemmengehäuse, Kabinenteil-Prototypen und Sicherheitsbauteile als 3D-Druck, bevor teure Metallteile gefertigt werden.',
      whyPrint: 'Ein Aluminium-Prototyp einer Gondelbaugruppe kostet €2.000 und dauert 3 Wochen. Ein 3D-gedruckter Formcheck kostet €40 und zeigt in 48h, ob das Design stimmt.',
      requirements: ['PETG für mechanische Prüfung', 'Toleranz ±0.2mm für Passungen', 'Vertraulichkeit (NDA)', 'Express 48h'],
    },
    {
      title: 'Alpin-Sensor-Gehäuse für Tiroler Wetterdienste',
      description: 'Tiroler Lawinenwarndienste und Wetterstationen brauchen Gehäuse, die -30°C im Winter und UV-Strahlung im Hochgebirge standhalten. Kleine Serien für spezielle Standorte.',
      whyPrint: 'Standard-Industriegehäuse passen nicht an spezielle Messstandorte. 3D-Druck ermöglicht maßgeschneiderte Lösungen für jeden einzelnen Gipfel.',
      requirements: ['ASA für extreme UV und Kälte', 'IP54-Dichtung', 'Montageösen integriert', 'Feldserie 10-30 Stück'],
    },
    {
      title: 'Skigebiet-Modelle für Tiroler Tourismusverbände',
      description: 'Tiroler Skigebiete bestellen Reliefmodelle für Bergstationen, Ticketshops und Hotellobbys. Pistenplan als 3D-Objekt – zum Anfassen und Orientieren.',
      whyPrint: 'Ein Pistenplan als 3D-Modell zeigt Höhenunterschiede, Steilheit und Waldgrenzen auf einen Blick. Das hilft Gästen bei der Routenplanung besser als jede Karte.',
      requirements: ['ASA für Outdoor (Bergstation)', 'Farbcodierung (blau/rot/schwarz)', 'Höhenüberhöhung 2x', '50-80 cm Modellgröße'],
    },
  ],
  projectWorkflow: {
    headline: 'So läuft ein Tiroler Alpinprojekt ab',
    subheadline: 'Für Seilbahntechnik, Wetterdienste und Tourismus – präzise und alpin-tauglich',
    steps: [
      { title: 'Anforderungsprofil mit Einsatzbedingungen', description: 'Wir klären: Welche Temperaturen? Welche UV-Belastung? Kontakt mit Schnee/Wasser? Höhenmeter? Daraus ergibt sich das Materialkonzept.', context: 'Für Hochgebirgs-Anwendungen über 2.500m empfehlen wir immer ASA mit erhöhtem Infill.' },
      { title: 'Materialtest unter Realbedingungen', description: 'Bei Erstprojekten drucken wir ein Testmuster, das 2-4 Wochen im alpinen Einsatz getestet wird.', context: 'Wir haben ASA-Testmuster, die seit 3 Jahren auf 2.800m stehen – ohne sichtbare Degradation.' },
      { title: 'Serienfertigung mit Kälteschutz-Verpackung', description: 'Teile werden in klimastabiler Verpackung versandt, damit sie im Winter unbeschädigt ankommen.', context: 'Im Winter versenden wir mit Kälteschutz, damit Bauteile nicht verspröden.' },
      { title: 'Express-Versand nach Tirol', description: 'Standard: 1-2 Tage. Express 24h. Für Seilbahn-Notfälle: Same-Day-Versand mit Kurier.', context: 'Bei Seilbahnausfällen liefern wir Ersatzteile in unter 24h.' },
    ],
  },
  customerPriorities: [
    { statement: 'Alpine Extremtauglichkeit ohne Kompromisse', explanation: '-30°C, extreme UV auf 3.000m, Schnee und Eis: Materialien müssen das beweisen, nicht nur versprechen.' },
    { statement: 'Sicherheitsrelevante Dokumentation', explanation: 'Seilbahn-Komponenten brauchen lückenlose Dokumentation. Auch 3D-gedruckte Prototypen müssen nachvollziehbar sein.' },
    { statement: 'Tourismus-Objekte als Gästeerlebnis', explanation: 'Ein 3D-Pistenmodell auf der Bergstation ist ein Instagrammable Moment. Qualität muss Social-Media-tauglich sein.' },
    { statement: 'Schnelle Ersatzteilversorgung bei Ausfall', explanation: 'Wenn im Winter eine Seilbahnkomponente ausfällt, stehen tausende Gäste. 24h-Express ist dann keine Option, sondern Pflicht.' },
  ],
  commonMistakes: [
    { mistake: 'Standard-Gehäuse für Hochgebirge', explanation: 'Standard-Kunststoffgehäuse werden bei -30°C spröde und reißen. UV auf 3.000m ist 50% stärker als im Tal.', prevention: 'Ausschließlich ASA für Hochgebirgsanwendungen. Wir testen Material regelmäßig unter alpinen Realbedingungen.' },
    { mistake: 'Pistenmodell ohne wasserfeste Oberfläche', explanation: 'Auf einer Bergstation kondensiert Feuchtigkeit. Ein PLA-Modell quillt auf und verformt sich.', prevention: 'Pistenmodelle drucken wir aus ASA und versiegeln die Oberfläche zusätzlich für maximale Langlebigkeit.' },
    { mistake: 'Montageösen nachträglich angeklebt', explanation: 'Angeklebte Halterungen reißen bei Wind und Vibration ab. Besonders an exponierten Bergstandorten ein Problem.', prevention: 'Montageösen werden direkt in das Design integriert – ein Teil, keine Klebestelle, volle Belastbarkeit.' },
    { mistake: 'Reliefmodell ohne Windlastberechnung', explanation: 'Ein großes 3D-Modell auf einer Bergstation wird vom Föhn erfasst und beschädigt oder weggeweht.', prevention: 'Wir empfehlen stabile Montagerahmen und berechnen die nötige Befestigung basierend auf Standort und Größe.' },
  ],
};

// ═══════════════════════════════════════════
// VORARLBERG
// ═══════════════════════════════════════════
const vorarlberg: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'Präzisionsteile für Vorarlberger Feinmechanik',
      description: 'Vorarlbergs Feinmechanik- und Uhrenindustrie testet Gehäuse, Zahnräder und Mechanismen als 3D-Druck. Form- und Passungstests vor der CNC-Fertigung sparen tausende Euro.',
      whyPrint: 'Ein CNC-gefrästes Testgehäuse kostet €300 und dauert 5 Tage. Ein 3D-gedrucktes kostet €25 und ist in 48h fertig – bei ausreichender Genauigkeit für Formtests.',
      requirements: ['PETG für Passfähigkeit', 'Toleranz ±0.15mm', 'Kleine Modelle (3-15 cm)', 'Express 48h'],
    },
    {
      title: 'Nachhaltigkeits-Demonstrationen für Vorarlberger Firmen',
      description: 'Vorarlberger Unternehmen mit Nachhaltigkeitsfokus zeigen Kreislaufwirtschaft und Energiesysteme als 3D-Modell. PV-Anlagen, Holzbausysteme und Recyclingschemata werden physisch erklärt.',
      whyPrint: 'Nachhaltigkeitskommunikation braucht greifbare Beispiele. Ein 3D-Modell einer PV-Anlage auf dem eigenen Dach überzeugt Stakeholder schneller als PowerPoint.',
      requirements: ['PLA+ (biobasiert)', 'Modular zusammensetzbar', 'Firmenfarben und Logo', 'Lieferung in 3-4 Tagen'],
    },
    {
      title: 'Bregenzer Festspiel-Modelle und Kulturprojekte',
      description: 'Bühnenbildner der Bregenzer Festspiele und andere Vorarlberger Kulturveranstalter nutzen 3D-Druck für Bühnenmodelle, Kulissenelemente und Konzeptvisualisierungen.',
      whyPrint: 'Bühnenmodelle im Maßstab 1:25 zeigen Lichteinfall, Publikumssicht und Raumwirkung. Änderungen bis kurz vor der Premiere sind mit 3D-Druck kein Problem.',
      requirements: ['PLA+ für Detailtreue', 'Maßstab 1:25', 'Mehrfarbig', 'Änderungen in 48h'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Vorarlberger Projekt',
    subheadline: 'Schweizer Präzision, österreichische Verlässlichkeit',
    steps: [
      { title: 'Präzise Anforderungen definieren', description: 'Vorarlberger Kunden wissen, was sie wollen. Wir prüfen die technische Machbarkeit und bestätigen Toleranzen.', context: 'Für Feinmechanik empfehlen wir immer ein Erstmuster zur Toleranzprüfung.' },
      { title: 'Material und Finish abstimmen', description: 'PLA+ für Modelle, PETG für Funktionsteile, ASA für Outdoor. Nachbearbeitung nach Wunsch.', context: 'Vorarlberger Kunden wählen überdurchschnittlich oft Premium-Finish.' },
      { title: 'Fertigung mit Qualitätsprotokoll', description: 'Jedes Teil wird vermessen und dokumentiert. Bei Feinmechanik-Teilen messen wir 3 kritische Maße.', context: 'Messprotokolle senden wir als PDF mit – auf Wunsch auch als Excel.' },
      { title: 'Expressversand nach Vorarlberg', description: 'Standard: 2-3 Tage. Express 24h. Für Festspiel-Deadlines: garantierte Terminzusage.', context: 'Vorarlberg ist unser westlichstes Liefergebiet – Express über Nacht funktioniert zuverlässig.' },
    ],
  },
  customerPriorities: [
    { statement: 'Höchste Präzision bei kleinen Teilen', explanation: 'Vorarlbergs Feinmechanik-Tradition setzt hohe Standards. ±0.15mm ist das Minimum, was akzeptiert wird.' },
    { statement: 'Nachhaltigkeit im Material', explanation: 'Vorarlberg ist Vorreiter bei Nachhaltigkeit. Biobasiertes PLA+ und recycelbare Materialien werden bevorzugt.' },
    { statement: 'Premium-Qualität auch bei Prototypen', explanation: 'Ein roh gedrucktes Teil zeigen Vorarlberger Unternehmen nicht. Auch Prototypen müssen geschliffen und sauber sein.' },
    { statement: 'Zuverlässige Festspiel-Deadlines', explanation: 'Die Bregenzer Festspiele haben fixe Premierentermine. Kein Spielraum für Verspätungen.' },
  ],
  commonMistakes: [
    { mistake: 'Feinmechanikteil ohne Toleranzangabe', explanation: 'Ohne definierte Toleranz druckt der Anbieter nach Standard. Für Feinmechanik ist Standard zu ungenau.', prevention: 'Wir fragen immer nach kritischen Maßen und empfehlen ein Erstmuster zur Validierung vor der Serie.' },
    { mistake: 'Nachhaltiges Image mit nicht-recycelbarem Material', explanation: 'Wer Nachhaltigkeit kommuniziert und sein Modell aus ABS druckt, ist unglaubwürdig.', prevention: 'PLA+ ist biobasiert und industriell kompostierbar. Für Nachhaltigkeit-Demonstrationen die einzig konsequente Wahl.' },
    { mistake: 'Bühnenmodell nicht zerlegbar für Transport', explanation: 'Ein 1:25-Bühnenmodell passt selten in einen normalen Transportkoffer.', prevention: 'Wir konstruieren Bühnenmodelle modular mit Steckverbindungen. Jedes Modul passt in einen Standardkarton.' },
    { mistake: 'Zu kleines Testmuster für Feinmechanik', explanation: 'Ein 2cm-Testmuster zeigt nicht dieselben Toleranzen wie das finale 10cm-Teil. Die Ergebnisse sind nicht übertragbar.', prevention: 'Testmuster immer in Originalgröße drucken. Nur so sind Passungstests aussagekräftig.' },
  ],
};

// ═══════════════════════════════════════════
// BURGENLAND
// ═══════════════════════════════════════════
const burgenland: ExtendedDruckSections = {
  typicalProjects: [
    {
      title: 'PV-Anlagen-Modelle für burgenländische Solarteure',
      description: 'Photovoltaik-Installateure zeigen Kunden ein 3D-Modell ihres Daches mit geplanter PV-Anlage. Die Module, Wechselrichter-Position und Kabelführung werden greifbar.',
      whyPrint: 'Ein 3D-Modell der PV-Anlage auf dem eigenen Dach überzeugt Kunden in 5 Minuten. Digitale Pläne brauchen 30 Minuten Erklärung und wirken trotzdem abstrakt.',
      requirements: ['ASA für Outdoor-Kundentermine', 'Maßstab 1:50 bis 1:100', 'Module als separate Teile', 'Budget unter €60'],
    },
    {
      title: 'Weinbau-Merchandising für Neusiedlersee-Winzer',
      description: 'Winzer am Neusiedlersee bestellen individuelle Weinflaschenständer, Weingut-Logos als 3D-Objekt und personalisierte Geschenke für Stammkunden.',
      whyPrint: 'Jedes Weingut ist einzigartig. Personalisierte 3D-Druck-Objekte mit Logo und Jahrgang machen aus einem Produkt ein Markenerlebnis.',
      requirements: ['PETG für Weinumgebung', 'Logo-Integration', 'Kleinserien 10-30 Stück', 'Farblich zum Etikett passend'],
    },
    {
      title: 'Kreative Installationen für Kulturevents',
      description: 'Opernfestspiele St. Margarethen und kulturelle Events im Burgenland nutzen 3D-Druck für Bühnenelemente, Dekorationen und temporäre Kunstinstallationen.',
      whyPrint: 'Temporäre Installationen müssen schnell produzierbar und günstig sein. 3D-Druck ermöglicht komplexe Formen, die in traditioneller Handarbeit Wochen dauern würden.',
      requirements: ['PLA+ für Indoor-Events', 'Großformat bis 40cm', 'Leichtgewicht (niedrigerer Infill)', 'Express für Eventdeadlines'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr burgenländisches Projekt',
    subheadline: 'Für Solarteure, Winzer und Kulturschaffende – praktisch und individuell',
    steps: [
      { title: 'Foto oder Skizze senden', description: 'Fotografieren Sie Ihr Dach für PV-Modelle, Ihr Logo für Weinobjekte oder Ihre Bühnenidee. Wir machen den Rest.', context: 'Für PV-Modelle brauchen wir: Dachfoto, Dachmaße und geplante Modulanzahl.' },
      { title: '3D-Modellierung inklusive', description: 'Wir erstellen das 3D-Modell aus Ihren Vorgaben. Bei PV-Dachmodellen verwenden wir Google Maps für die Dachform.', context: 'Modellierungsgebühr entfällt bei Bestellungen ab 5 Stück.' },
      { title: 'Erstmuster zur Freigabe', description: 'Sie erhalten ein Muster in Originalmaterial und -farbe. Erst nach Ihrer Freigabe starten wir die Serie.', context: 'Für Winzer senden wir das Muster mit einer Testflasche zur Passungsprüfung.' },
      { title: 'Versand ins Burgenland in 1-2 Tagen', description: 'Über A4 Ostautobahn. Express 24h für Event-Deadlines. Bruchsichere Verpackung Standard.', context: 'Das Nordburgenland erreichen wir am schnellsten – oft schon am nächsten Vormittag.' },
    ],
  },
  customerPriorities: [
    { statement: 'Visualisierung für Endkunden-Überzeugung', explanation: 'PV-Kunden müssen sehen und anfassen, was auf ihr Dach kommt. Abstrakte Pläne führen zu Unsicherheit und verzögerter Entscheidung.' },
    { statement: 'Weingut-Identität in jedem Detail', explanation: 'Burgenländer Winzer sind stolz auf ihre Marke. Jedes Objekt muss das Weingut repräsentieren – Farbe, Logo, Qualität.' },
    { statement: 'Eventdeadlines sind unverhandelbar', explanation: 'Wenn am Samstag die Premiere ist, muss am Freitag alles stehen. Keine Ausreden, keine Verzögerungen.' },
    { statement: 'Robustheit für Outdoor-Einsatz', explanation: 'PV-Modelle werden beim Kundentermin draußen gezeigt. Regen und Sonne sind normal – das Material muss das abkönnen.' },
  ],
  commonMistakes: [
    { mistake: 'PV-Modell aus PLA für Kundentermine im Freien', explanation: 'PLA verformt sich bei Sonneneinstrahlung ab 60°C. Auf einem schwarzen Dach wird es schnell heißer.', prevention: 'PV-Dachmodelle drucken wir aus ASA – formstabil bis 95°C und UV-beständig. Perfekt für Kundentermine.' },
    { mistake: 'Weinobjekt mit ablösbarem Logo', explanation: 'Ein aufgeklebtes Logo löst sich bei Feuchtigkeit. In der Vinothek ist das peinlich.', prevention: 'Logos werden direkt in den Druck integriert – erhaben oder vertieft, unlösbar und professionell.' },
    { mistake: 'Event-Dekoration zu schwer', explanation: 'Massive 3D-Drucke sind schwer und brauchen stabile Befestigung. Bei temporären Events oft nicht vorhanden.', prevention: 'Für Events drucken wir mit reduziertem Infill (10-15%) – leicht genug für temporäre Aufhängung.' },
    { mistake: 'Kein Farbmuster vor der Serie', explanation: 'Farben sehen am Bildschirm anders aus als gedruckt. Ohne Farbmuster riskiert man eine Serie in der falschen Nuance.', prevention: 'Wir drucken immer ein Farbmuster vor der Serie. Besonders bei Weingut-Objekten, wo die Farbe zum Etikett passen muss.' },
  ],
};

// ═══════════════════════════════════════════
// SALZBURG-STADT (falls separat von Bundesland)
// ═══════════════════════════════════════════
const salzburgStadt = salzburg; // shares data with Bundesland for now

// ═══════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════
export const extendedDruckSections: Record<string, ExtendedDruckSections> = {
  wien,
  linz,
  graz,
  salzburg,
  innsbruck,
  klagenfurt,
  villach,
  wels,
  'st-poelten': stpoelten,
  dornbirn,
  gunskirchen,
  oberoesterreich,
  niederoesterreich,
  steiermark,
  kaernten,
  tirol,
  vorarlberg,
  burgenland,
};

export function getExtendedDruckSections(regionSlug: string): ExtendedDruckSections {
  const data = extendedDruckSections[regionSlug];
  if (!data) {
    throw new Error(`[SEO-FEHLER] Keine erweiterten Section-Daten für Region "${regionSlug}".`);
  }
  return data;
}
