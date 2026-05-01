// ═══════════════════════════════════════════════════════════════
// EXTENDED ARCHITEKTUR SECTIONS – 4 content-depth sections per region
// TypicalProjects, ProjectWorkflow, CustomerPriorities, CommonMistakes
// ═══════════════════════════════════════════════════════════════

import type { TypicalProjectData, ProjectWorkflowData, CustomerPriorityData, CommonMistakeData } from "./druckSectionData";

export interface ExtendedArchitekturSections {
  typicalProjects: TypicalProjectData[];
  projectWorkflow: ProjectWorkflowData;
  customerPriorities: CustomerPriorityData[];
  commonMistakes: CommonMistakeData[];
}

const wien: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Wettbewerbsmodelle für Wiener Architekturbüros',
      description: 'Architekturbüros im 6. und 7. Bezirk reichen bei geladenen Wettbewerben maßstabsgetreue Modelle ein. 1:200 Stadtmodelle mit Umgebungsbebauung und Grünflächen – gedruckt über Nacht vor der Deadline.',
      whyPrint: 'Handgefertigte Modelle dauern 2–3 Wochen. Ein 3D-gedrucktes 1:200 Modell ist in 48h abgabebereit – mit identischer Präzision bei Fensterteilungen und Fassadenstruktur.',
      requirements: ['Maßstab 1:200', 'Weiß oder grau monochrom', 'Umgebungsbebauung inklusive', 'Express 48h'],
    },
    {
      title: 'Stadtplanungsmodelle für MA 21',
      description: 'Die Wiener Stadtentwicklung benötigt räumliche Darstellungen ganzer Quartiere. Modulare Modelle zeigen Bestandsbebauung und Neubau farblich differenziert für Bürgerbeteiligungen im Rathaus.',
      whyPrint: 'Modulare Systeme ermöglichen es, einzelne Gebäude auszutauschen und Varianten zu zeigen. Die Farbdifferenzierung zwischen Bestand und Planung schafft sofortige Verständlichkeit.',
      requirements: ['Maßstab 1:500', 'Modulares System', 'Farbdifferenzierung', 'Lieferung ins Rathaus'],
    },
    {
      title: 'Immobilien-Präsentationsmodelle für Entwickler',
      description: 'Immobilienentwickler am Donaukanal nutzen maßstabsgetreue Wohnprojekt-Modelle für Verkaufsgespräche. Wohnungsgrundrisse werden als abnehmbare Geschosse dargestellt.',
      whyPrint: 'Ein physisches Modell erzeugt bei Wohnungskäufern mehr Vertrauen als Renderings. Abnehmbare Geschosse zeigen die Raumaufteilung intuitiv.',
      requirements: ['Maßstab 1:100', 'Abnehmbare Geschosse', 'PLA+ weiß/grau', 'Lieferung in 5–7 Tagen'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Architekturmodell für Wien',
    subheadline: 'Von der CAD-Datei zum fertigen Wettbewerbsmodell – transparent und termingerecht',
    steps: [
      { title: 'CAD-Datei & Maßstab klären', description: 'Wir prüfen Ihren Export aus ArchiCAD, Revit oder Rhino. Maßstab, Detailgrad und Farbkonzept werden gemeinsam festgelegt.', context: 'Wiener Büros liefern meist ArchiCAD-Exporte. STEP und STL funktionieren ebenso.' },
      { title: 'Modellvorbereitung & Druckplanung', description: 'Wir teilen das Modell in druckbare Segmente, planen Stützstrukturen und optimieren die Druckorientierung für maximale Detailschärfe.', context: 'Bei 1:200 entscheidet die Druckorientierung über die Sichtbarkeit von Fensterlaibungen.' },
      { title: 'Paralleldruck auf mehreren Druckern', description: 'Gebäude, Umgebung und Grundplatte werden parallel gefertigt. So sind auch komplexe Stadtmodelle in 48h fertig.', context: 'Wir setzen bis zu 8 Drucker gleichzeitig ein – das macht den Express-Service erst möglich.' },
      { title: 'Montage & Qualitätskontrolle', description: 'Alle Teile werden montiert, geprüft und für den Transport nach Wien bruchsicher verpackt.', context: 'Persönliche Übergabe in Wien ist auf Anfrage möglich – ideal bei großen Modellen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Termin ist heilig – Wettbewerbsdeadline darf nicht gerissen werden', explanation: 'Wiener Architekturbüros arbeiten auf den Tag genau. Express in 24h ist keine Option, sondern Notwendigkeit.' },
    { statement: 'Maßstabstreue bis ins Detail', explanation: 'Fensterteilungen, Fassadenraster und Geländehöhen müssen exakt sein. Die Jury prüft das Modell aus der Nähe.' },
    { statement: 'Monochrome Ästhetik bevorzugt', explanation: 'Wettbewerbsmodelle in Wien sind fast ausschließlich weiß oder grau. Farbige Modelle wirken in diesem Kontext unprofessionell.' },
    { statement: 'Umgebungsbebauung muss erkennbar sein', explanation: 'Ein Neubau wird im städtischen Kontext bewertet. Ohne Umgebung fehlt der Maßstabsbezug.' },
  ],
  commonMistakes: [
    { mistake: 'Maßstab zu groß gewählt', explanation: 'Ein 1:50 Modell einer Wohnanlage wird 80cm breit und passt nicht auf den Wettbewerbstisch.', prevention: 'Wir empfehlen 1:200 für Wettbewerbe und 1:100 nur für Detailstudien einzelner Gebäude.' },
    { mistake: 'Fassadendetails nicht druckbar', explanation: 'Fensterlaibungen unter 0.5mm werden im FDM-Druck nicht sauber dargestellt.', prevention: 'Wir prüfen jede Datei auf Mindestdetailgröße und empfehlen vereinfachte Darstellungen, die im Maßstab realistisch wirken.' },
    { mistake: 'Transport ohne Bruchsicherung', explanation: 'Filigrane Modelle überleben den Versand nur mit individueller Schaumstoffverpackung.', prevention: 'Jedes Modell wird in maßgeschnittener Verpackung verschickt. Bei Großmodellen liefern wir persönlich.' },
    { mistake: 'Umgebungsbebauung vergessen', explanation: 'Ein Neubau ohne Kontext wirkt wie ein Fremdkörper. Die Jury kann Proportionen nicht beurteilen.', prevention: 'Wir erstellen vereinfachte Umgebungsmodelle als Volumenkörper – das reicht für den räumlichen Kontext.' },
  ],
};

const niederoesterreich: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Einfamilienhaus-Modelle im Speckgürtel',
      description: 'Architekten im Wiener Umland präsentieren Bauherren das zukünftige Eigenheim als greifbares Modell. Dachneigung, Garagenzufahrt und Gartengestaltung werden sofort verständlich.',
      whyPrint: 'Bauherren ohne Architektur-Hintergrund verstehen 2D-Pläne oft nicht. Ein 3D-Modell im Maßstab 1:100 klärt mehr Fragen als 10 Planungsgespräche.',
      requirements: ['Maßstab 1:100', 'Mit Grundstücksdarstellung', 'PLA+ weiß', 'Standard 5–7 Tage'],
    },
    {
      title: 'Gemeindebauten für Bürgerinformationen',
      description: 'NÖ-Gemeinden stellen bei Bürgerversammlungen Modelle neuer Gemeindegebäude aus. Das Modell steht im Foyer des Gemeindeamts und muss Wochen standhalten.',
      whyPrint: 'Ein robustes PLA+-Modell auf einer Holzgrundplatte hält Wochen im öffentlichen Raum stand – ohne zu verblassen oder zu brechen.',
      requirements: ['PETG für Robustheit', 'Große Grundplatte', 'Beschriftungsmöglichkeit', 'Lieferung über A1'],
    },
    {
      title: 'Sanierungsmodelle historischer Ortskerne',
      description: 'Architekten dokumentieren den Bestand und zeigen den Entwurf als Vergleichsmodell. Bestand und Planung stehen nebeneinander auf dem Tisch.',
      whyPrint: 'Bestand und Entwurf als Modell-Paar machen den Unterschied sofort sichtbar. Das überzeugt Denkmalschutzbehörden schneller als digitale Renderings.',
      requirements: ['2 Modelle (Bestand + Entwurf)', 'Maßstab 1:200', 'Gleiche Grundplatte', 'Standard-Lieferung'],
    },
  ],
  projectWorkflow: {
    headline: 'Ablauf für Architekturmodelle in Niederösterreich',
    subheadline: 'Vom Planexport zum fertigen Modell – direkt über die A1',
    steps: [
      { title: 'Datei-Upload & Anforderungscheck', description: 'Senden Sie Ihren ArchiCAD- oder Revit-Export. Wir klären Maßstab, Detailgrad und ob Grundstück/Umgebung gewünscht ist.', context: 'Viele NÖ-Architekten nutzen ArchiCAD – wir kennen die typischen Exportprobleme und lösen sie vor dem Druck.' },
      { title: 'Angebot mit Visualisierung', description: 'Sie erhalten ein Angebot mit einer digitalen Vorschau des Modells. So sehen Sie vorab, wie das Ergebnis aussehen wird.', context: 'Bei Gemeindeprojekten geht das Angebot oft an den Bürgermeister – deswegen ist die Vorschau so wichtig.' },
      { title: 'Fertigung & Montage', description: 'Druck, Nachbearbeitung und Montage auf Grundplatte. Bei mehrteiligen Modellen werden alle Teile passgenau zusammengefügt.', context: 'Einfamilienhäuser drucken wir meist einteilig – das spart Montagezeit und verbessert die Oberfläche.' },
      { title: 'Versand via A1 nach NÖ', description: 'Bruchsichere Verpackung und Expressversand über die Westautobahn. Lieferung in alle NÖ-Regionen in 5–7 Tagen.', context: 'Express-Lieferung für Gemeindesitzungen ist kurzfristig möglich – bitte 3 Tage vorab anfragen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Verständlichkeit für Laien', explanation: 'Bauherren in NÖ sind oft Privatpersonen ohne Architektur-Ausbildung. Das Modell muss ohne Erklärung verständlich sein.' },
    { statement: 'Robustheit für öffentliche Ausstellung', explanation: 'Modelle in Gemeindeämtern werden von vielen Menschen betrachtet und manchmal berührt. Sie müssen das aushalten.' },
    { statement: 'Preistransparenz für Gemeindebudgets', explanation: 'Gemeinden kalkulieren eng. Der Preis muss vorab fix sein, Nachträge sind nicht vermittelbar.' },
  ],
  commonMistakes: [
    { mistake: 'Grundstück nicht im Modell berücksichtigt', explanation: 'Ein Haus ohne Gelände wirkt schwebend. Hanglage, Zufahrt und Nachbarbebauung fehlen.', prevention: 'Wir empfehlen immer eine vereinfachte Grundstücksdarstellung – selbst ein flacher Sockel gibt dem Modell Kontext.' },
    { mistake: 'Zu viele Farben für ein Wohnhaus', explanation: 'Bunte Modelle wirken spielzeugartig und untergraben die Seriosität des Architekten.', prevention: 'Monochrome Modelle in Weiß oder Grau wirken professioneller. Akzentfarben nur für Dach oder Grünflächen.' },
    { mistake: 'Modell zu filigran für den Transport', explanation: 'Dünne Vordächer oder freistehende Stützen brechen beim Versand.', prevention: 'Wir verstärken kritische Stellen und verpacken jedes Modell individuell in Schaumstoff.' },
    { mistake: 'Maßstab nicht zum Präsentationsraum passend', explanation: 'Ein 1:50 Modell braucht einen großen Tisch. Im kleinen Besprechungsraum ist 1:200 besser.', prevention: 'Wir fragen immer nach dem Präsentationskontext und empfehlen den passenden Maßstab.' },
  ],
};

const oberoesterreich: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Industriebau-Modelle für OÖ-Planer',
      description: 'Architekten im Zentralraum OÖ präsentieren Hallenbauten und Produktionsstätten als Modell. Besonders bei Erweiterungsbauten hilft das Modell, den Anschluss an den Bestand zu zeigen.',
      whyPrint: 'Große Hallenstrukturen lassen sich als Modell in wenigen Stunden drucken. Der Bauherr sieht sofort, wie die Erweiterung zum Bestand passt.',
      requirements: ['Maßstab 1:200 bis 1:500', 'Same-Day-Abholung möglich', 'PLA+ weiß', 'Modulare Erweiterung'],
    },
    {
      title: 'Wohnquartier-Studien für Linzer Stadtrand',
      description: 'Neue Wohnquartiere am Stadtrand von Linz und Wels werden als Stadtmodell dargestellt. Erschließung, Grünflächen und Geschosshöhen sind auf einen Blick erkennbar.',
      whyPrint: 'Städtebauliche Varianten lassen sich parallel drucken und in derselben Sitzung vergleichen – das beschleunigt die Entscheidung.',
      requirements: ['Maßstab 1:500', 'Bis zu 3 Varianten', 'Gleiche Grundplatte', 'Abholung in Gunskirchen'],
    },
    {
      title: 'Gewerbeparks für Betriebsansiedlungen',
      description: 'Wirtschaftsparks in OÖ nutzen Modelle, um potenziellen Ansiedlern die Infrastruktur zu zeigen. Das Modell steht dauerhaft im Büro der Standortentwicklung.',
      whyPrint: 'Ein dauerhaftes Standortmodell zeigt verfügbare Flächen und bestehende Infrastruktur. Neue Ansiedler können ihr Gebäude als modulares Element ergänzen.',
      requirements: ['PETG für Langlebigkeit', 'Modulare Parzellen', 'Farbcodierung', 'Persönliche Übergabe'],
    },
  ],
  projectWorkflow: {
    headline: 'Ihr Architekturmodell aus OÖ – Abholung am selben Tag',
    subheadline: 'Lokale Fertigung in Gunskirchen – kein Versandrisiko, persönliche Qualitätskontrolle',
    steps: [
      { title: 'Datei hochladen & Maßstab besprechen', description: 'CAD-Export senden – wir prüfen Druckbarkeit und Detailgrad innerhalb von 2 Stunden.', context: 'OÖ-Kunden können die Besprechung auch persönlich in Gunskirchen führen.' },
      { title: 'Druck starten – Same-Day möglich', description: 'Bei Auftragseingang bis 10 Uhr ist Same-Day-Abholung für Standardmodelle möglich.', context: 'Große Modelle (>30cm) brauchen 8–12h Druckzeit – Abholung dann am Folgetag.' },
      { title: 'Qualitätskontrolle gemeinsam vor Ort', description: 'Sie prüfen das Modell persönlich in Gunskirchen. Korrekturen können sofort besprochen werden.', context: 'Das ist unser größter Vorteil: Kein Versand, kein Bruchrisiko, persönliche Abstimmung.' },
      { title: 'Fertigstellung & Abholung', description: 'Modell auf Grundplatte montiert, beschriftet und verpackt – oder direkt mitgenommen.', context: 'Wir haben immer Verpackungsmaterial vor Ort, falls Sie das Modell im Auto transportieren.' },
    ],
  },
  customerPriorities: [
    { statement: 'Same-Day-Verfügbarkeit', explanation: 'OÖ-Architekten schätzen die Möglichkeit, Modelle am selben Tag abzuholen. Kein Warten auf den Paketdienst.' },
    { statement: 'Persönliche Beratung vor Ort', explanation: 'Komplexe Modelle lassen sich in einem 15-minütigen Gespräch besser klären als in 10 E-Mails.' },
    { statement: 'Modulare Erweiterbarkeit', explanation: 'Industriebau-Projekte werden phasenweise gebaut. Das Modell muss mitwachsen können.' },
  ],
  commonMistakes: [
    { mistake: 'Modell nicht modular geplant', explanation: 'Erweiterungsbauten werden nachträglich ergänzt, aber das Grundmodell hat keine Andockstellen.', prevention: 'Wir planen von Anfang an modulare Schnittstellen ein – so lässt sich das Modell jederzeit erweitern.' },
    { mistake: 'Same-Day zu spät angefragt', explanation: 'Anfragen um 15 Uhr für Same-Day sind nicht mehr realisierbar.', prevention: 'Für Same-Day bitte bis 10 Uhr anfragen. Wir reservieren Druckerkapazität für Express-Kunden.' },
    { mistake: 'Zu filigrane Industriedetails', explanation: 'Rohrleitungen und Stahlträger unter 1mm Durchmesser brechen beim Handling.', prevention: 'Wir empfehlen vereinfachte Darstellungen mit Mindestdurchmesser 1.5mm. Das sieht im Maßstab realistischer aus.' },
    { mistake: 'Farbcodierung nicht abgesprochen', explanation: 'Bestand und Neubau in derselben Farbe – die Erweiterung ist nicht erkennbar.', prevention: 'Wir klären das Farbkonzept vorab: Bestand grau, Neubau weiß ist der bewährte Standard.' },
  ],
};

const steiermark: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'TU Graz Wettbewerbsmodelle',
      description: 'Studierende und Büros mit TU-Hintergrund reichen regelmäßig Wettbewerbsmodelle ein. Besonders bei Entwurfsstudios wird innerhalb von 48h ein präsentationsfähiges Modell benötigt.',
      whyPrint: 'Studierende haben weder Budget noch Zeit für handgefertigte Modelle. Ein 3D-gedrucktes Modell ab €20 ist in 48h fertig.',
      requirements: ['Maßstab 1:200', 'Budget unter €50', 'Express 48h', 'Weiß monochrom'],
    },
    {
      title: 'Smart City Graz – Quartiersmodelle',
      description: 'Grazer Stadtentwicklung nutzt Modelle für Smart-City-Projekte. Nachhaltige Quartiere mit Begrünung und Mobilitätskonzepten werden dreidimensional dargestellt.',
      whyPrint: 'Smart-City-Konzepte sind komplex. Ein physisches Modell zeigt Grünflächen, Gebäudehöhen und Mobilitätsachsen gleichzeitig – das schaffen digitale Tools nicht.',
      requirements: ['Maßstab 1:500', 'Farbige Grünflächen', 'Modulare Bausteine', 'Standard-Lieferung'],
    },
    {
      title: 'UNESCO-Altstadtsanierungen',
      description: 'Sanierungsprojekte in der Grazer Altstadt erfordern sensible Eingriffe. Modelle zeigen den Bestand und den Entwurf im direkten Vergleich.',
      whyPrint: 'Denkmalschutzbehörden bewerten am Modell, ob der Eingriff zum historischen Kontext passt. Ein gutes Modell beschleunigt die Genehmigung.',
      requirements: ['2 Modelle (Bestand + Entwurf)', 'Maßstab 1:100', 'Fassadendetails', 'Express über A9'],
    },
  ],
  projectWorkflow: {
    headline: 'Ablauf für steirische Architekturmodelle',
    subheadline: 'Von der Entwurfsdatei zum Wettbewerbsmodell – Express über die A9',
    steps: [
      { title: 'Datei & Anforderungen klären', description: 'CAD-Export hochladen, Maßstab und Detailgrad besprechen. Für TU-Projekte gibt es Sonderkonditionen.', context: 'Studierende der TU Graz erhalten Studierendenpreise – einfach Matrikelnummer angeben.' },
      { title: 'Druckoptimierung & Materialwahl', description: 'Wir wählen das optimale Material und die beste Druckorientierung für maximale Detailschärfe.', context: 'Für Wettbewerbe empfehlen wir immer 0.12mm Layer Height – der beste Kompromiss aus Qualität und Geschwindigkeit.' },
      { title: 'Parallelfertigung', description: 'Gebäude und Umgebung werden auf separaten Druckern parallel gefertigt.', context: 'So können wir auch 48h-Express für komplexe Stadtmodelle anbieten.' },
      { title: 'Express-Versand über A9', description: 'Bruchsicher verpackt und per Express über die Pyhrnautobahn nach Graz.', context: 'Zustellung direkt an die TU Graz oder ans Büro möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Studierendenfreundliche Preise', explanation: 'TU Graz Studierende kalkulieren eng. Modelle ab €20 machen 3D-Druck für jedes Entwurfsstudio bezahlbar.' },
    { statement: 'Detailtreue bei Fassaden', explanation: 'Steirische Architekten legen Wert auf erkennbare Fassadenstrukturen – selbst im kleinen Maßstab.' },
    { statement: 'Nachhaltige Materialien', explanation: 'In der Green-Tech-Hauptstadt Graz wird PLA als biobasierter Werkstoff geschätzt.' },
  ],
  commonMistakes: [
    { mistake: 'Zu detaillierte CAD-Datei exportiert', explanation: 'Inneneinrichtung und unsichtbare Bauteile machen die Datei zu groß und den Druck zu langsam.', prevention: 'Wir bereinigen die Datei kostenlos und entfernen unsichtbare Geometrie. So wird der Druck schneller und günstiger.' },
    { mistake: 'Dachbegrünung nicht darstellbar', explanation: 'Feine Gräser und Pflanzen sind im 3D-Druck nicht abbildbar.', prevention: 'Wir stellen Begrünung als texturierte Fläche oder leicht erhöhte Schicht in Grün dar – das wirkt realistisch im Maßstab.' },
    { mistake: 'Express zu spät angefragt', explanation: 'Wettbewerbsabgabe Freitag, Anfrage Donnerstag 16 Uhr – das ist nicht mehr machbar.', prevention: 'Für 48h-Express bitte mindestens 2 Tage vorab anfragen. Wir reservieren dann Druckerkapazität.' },
    { mistake: 'Maßstabsmischung im Modell', explanation: 'Gebäude in 1:200, aber Bäume in 1:100 – das wirkt unproportional.', prevention: 'Alle Elemente werden im gleichen Maßstab gefertigt. Wir prüfen die Konsistenz automatisch.' },
  ],
};

const kaernten: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Holzbau-Modelle für Kärntner Architekten',
      description: 'Die Kärntner Holzbautradition spiegelt sich in Architekturmodellen wider. Holzkonstruktionen werden als transparente Schnittmodelle dargestellt, die das Tragwerk sichtbar machen.',
      whyPrint: 'Holz-Tragwerke sind komplex. Ein geschnittenes 3D-Modell zeigt Verbindungen und Knotenpunkte besser als jede Zeichnung.',
      requirements: ['Maßstab 1:50 bis 1:100', 'Schnittdarstellung', 'PLA+ oder PETG', 'Standard 5–7 Tage'],
    },
    {
      title: 'Tourismusbau-Modelle am Wörthersee',
      description: 'Hotels und Resorts am Wörthersee werden als Präsentationsmodelle für Investoren gefertigt. Seezugang, Terrassen und Poolanlagen werden maßstabsgetreu dargestellt.',
      whyPrint: 'Investoren wollen sehen, wie das Hotel in die Landschaft passt. Ein Modell mit Geländedarstellung zeigt das besser als ein Rendering.',
      requirements: ['Maßstab 1:200', 'Mit Geländedarstellung', 'Grünflächen farbig', 'Express über A10'],
    },
    {
      title: 'Gemeindeprojekte in Kärntner Orten',
      description: 'Kleine Gemeinden in Kärnten stellen Schulbauten, Feuerwehrhäuser und Dorferneuerungen als Modell vor. Das Modell wird bei der Gemeinderatssitzung präsentiert.',
      whyPrint: 'Gemeinderäte sind keine Architekten. Ein physisches Modell schafft Verständnis und Akzeptanz für Bauprojekte.',
      requirements: ['Maßstab 1:200', 'Robust für mehrfache Präsentation', 'Budget ab €30', 'A10-Lieferung'],
    },
  ],
  projectWorkflow: {
    headline: 'So entstehen Architekturmodelle für Kärnten',
    subheadline: 'Zuverlässige Fertigung und Alpenlogistik über die Tauernautobahn',
    steps: [
      { title: 'Datei & Kontext klären', description: 'CAD-Export senden und Einsatzzweck beschreiben: Wettbewerb, Präsentation oder Bürgerinformation?', context: 'Bei Holzbau-Modellen fragen wir immer nach: Soll das Tragwerk sichtbar sein?' },
      { title: 'Materialempfehlung', description: 'PLA+ für Präsentationsmodelle, PETG für dauerhafte Ausstellung. Bei Holzbau-Schnittmodellen empfehlen wir transparentes PETG.', context: 'Transparentes PETG zeigt innere Strukturen, ohne das Modell aufschneiden zu müssen.' },
      { title: 'Fertigung mit Alpen-Verpackung', description: 'Druck und Montage in Gunskirchen, dann bruchsicher verpackt für den Transport über die Tauernautobahn.', context: 'Alpentransporte brauchen extra Polsterung – wir wissen das aus Erfahrung.' },
      { title: 'Lieferung nach Kärnten', description: 'Standard in 5–7 Tagen, Express in 48h. Lieferung nach Klagenfurt, Villach und in alle Kärntner Gemeinden.', context: 'Bei großen Modellen bieten wir persönliche Lieferung nach Kärnten an.' },
    ],
  },
  customerPriorities: [
    { statement: 'Holzbau-Kompetenz', explanation: 'Kärntner Architekten erwarten, dass der Modellfertiger Holzkonstruktionen versteht und korrekt darstellt.' },
    { statement: 'Robuste Alpen-Logistik', explanation: 'Der Transport über die Tauernautobahn ist lang. Die Verpackung muss Temperaturschwankungen und Erschütterungen standhalten.' },
    { statement: 'Budget für Gemeinden', explanation: 'Kleine Gemeinden haben begrenzte Budgets. Transparente Preise ab €30 sind wichtig.' },
  ],
  commonMistakes: [
    { mistake: 'Tragwerk nicht vereinfacht', explanation: 'Jede einzelne Schraube im CAD macht den Druck unpraktikabel.', prevention: 'Wir vereinfachen das Tragwerk auf das Wesentliche: Hauptträger, Stützen, Verbindungsknoten.' },
    { mistake: 'Verpackung für Flachland statt Alpen', explanation: 'Standardkartons reichen für Wien, aber nicht für 3 Stunden Tauernautobahn.', prevention: 'Wir verwenden doppelwandige Kartons mit Schaumstoffeinlage für jeden Alpentransport.' },
    { mistake: 'Geländemodell nicht berücksichtigt', explanation: 'In Kärnten ist fast kein Bauplatz eben. Ein Modell ohne Gelände ist unrealistisch.', prevention: 'Wir erstellen Geländemodelle aus Höhendaten und integrieren sie als Sockel unter das Gebäude.' },
  ],
};

const salzburg: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Altstadtsanierungs-Modelle für UNESCO-Kontext',
      description: 'Sanierungsprojekte in der Salzburger Altstadt erfordern sensible Eingriffe. Bestand und Entwurf werden als Modellpaar dargestellt, um den Denkmalschutz zu überzeugen.',
      whyPrint: 'Die UNESCO-Altstadt hat strenge Auflagen. Ein physisches Modell zeigt, dass der Eingriff den Charakter des Ensembles respektiert.',
      requirements: ['2 Modelle (Bestand/Entwurf)', 'Maßstab 1:100', 'Fassadendetails', 'Standard-Lieferung'],
    },
    {
      title: 'Hotel-Präsentationen im Salzburger Land',
      description: 'Hotelprojekte in Tourismusregionen werden Investoren als maßstabsgetreues Modell präsentiert. Zimmeraufteilung, Spa-Bereich und Außenanlagen werden sichtbar.',
      whyPrint: 'Hotel-Investoren treffen Entscheidungen oft bei einer einzigen Präsentation. Ein physisches Modell erhöht die Abschlussquote messbar.',
      requirements: ['Maßstab 1:200', 'Mit Außenanlagen', 'Abnehmbare Geschosse', 'Express über A1'],
    },
    {
      title: 'Festspielhaus-Erweiterungen',
      description: 'Kulturbauten in Salzburg werden als Wettbewerbsmodelle gefertigt. Der Kontext zum Bestand (Felswand, Kapitelplatz) muss im Modell erkennbar sein.',
      whyPrint: 'Kulturbauten in Salzburg werden kritisch beobachtet. Ein Modell zeigt die räumliche Wirkung im bestehenden Stadtbild.',
      requirements: ['Maßstab 1:200', 'Mit Bestandsbebauung', 'Monochrom weiß', 'Express 48h'],
    },
  ],
  projectWorkflow: {
    headline: 'Architekturmodelle für Salzburg – schnell über die A1',
    subheadline: 'Von der CAD-Datei zum UNESCO-tauglichen Modell',
    steps: [
      { title: 'Projekt- und Kontextanalyse', description: 'Wir prüfen nicht nur die Datei, sondern auch den Kontext: UNESCO-Zone? Denkmalschutz? Ensembleschutz?', context: 'Salzburger Projekte im UNESCO-Bereich erfordern besondere Sensibilität bei der Modelldarstellung.' },
      { title: 'Material & Farbkonzept', description: 'Für Altstadtprojekte empfehlen wir monochrom weiß. Für Hotels mit Außenanlagen nutzen wir dezente Farbakzente.', context: 'Denkmalschutzmodelle wirken in Weiß seriöser und lenken nicht vom Entwurf ab.' },
      { title: 'Fertigung mit Kontextbebauung', description: 'Neubau und Bestand werden parallel gefertigt. Die Kontextbebauung als vereinfachte Volumenkörper.', context: 'Bei Altstadtprojekten ist der Kontext mindestens so wichtig wie das Gebäude selbst.' },
      { title: 'A1-Express nach Salzburg', description: 'Bruchsicher verpackt und per Express über die Westautobahn. Lieferung direkt ans Büro oder zur Jury.', context: 'Wir liefern auch direkt an Wettbewerbsadressen – Adresse einfach bei der Bestellung angeben.' },
    ],
  },
  customerPriorities: [
    { statement: 'UNESCO-konforme Darstellung', explanation: 'Modelle für Altstadtprojekte müssen den bestehenden Charakter respektieren – auch in der Darstellungsart.' },
    { statement: 'Schnelle A1-Lieferung', explanation: 'Salzburg ist über die A1 schnell erreichbar. Express-Lieferung am nächsten Tag ist Standard.' },
    { statement: 'Investoren-taugliche Präsentationsqualität', explanation: 'Hotel-Investoren erwarten polierte, professionelle Modelle – keine rohen Prototypen.' },
  ],
  commonMistakes: [
    { mistake: 'Altstadtkontext vergessen', explanation: 'Ein Neubau ohne Nachbargebäude wirkt in der Salzburger Altstadt deplatziert.', prevention: 'Wir erstellen immer vereinfachte Kontextbebauung. Das kostet wenig extra, macht aber den entscheidenden Unterschied.' },
    { mistake: 'Farbiges Modell für Denkmalschutz', explanation: 'Bunte Modelle werden von Denkmalschutzbehörden als unseriös empfunden.', prevention: 'Für Behördenpräsentationen empfehlen wir immer monochromes Weiß oder Grau.' },
    { mistake: 'Gelände nicht berücksichtigt', explanation: 'Salzburg hat viele Hanglagen. Ein flaches Modell ist unrealistisch.', prevention: 'Wir integrieren Geländemodelle als Sockel – besonders wichtig bei Hanggrundstücken.' },
  ],
};

const tirol: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Bergstations-Modelle für Seilbahnprojekte',
      description: 'Tiroler Seilbahnbetreiber und Architekten benötigen Modelle von Bergstationen. Das Modell zeigt das Gebäude im Geländekontext mit Topografie und Zufahrt.',
      whyPrint: 'Bergstationen stehen in exponierter Lage. Ein Geländemodell zeigt die Einbettung in die Landschaft besser als jedes Rendering.',
      requirements: ['Maßstab 1:200', 'Mit Topografie', 'Robust für Präsentation', 'Standard 5–7 Tage'],
    },
    {
      title: 'Hotel-Modelle für Tiroler Skigebiete',
      description: 'Neue Hotels in Skigebieten werden Investoren als 3D-Modell präsentiert. Ski-in/Ski-out Zugang, Wellnessbereich und Tiefgarage werden sichtbar dargestellt.',
      whyPrint: 'Investorenentscheidungen für Hotel-Neubauten fallen oft beim ersten Meeting. Ein Modell auf dem Tisch überzeugt schneller als ein Laptop-Rendering.',
      requirements: ['Maßstab 1:200', 'Mit Außenanlagen', 'Geländeeinbettung', 'Express über A13'],
    },
    {
      title: 'Uni Innsbruck – Entwurfsstudio-Modelle',
      description: 'Architektur-Studierende der Universität Innsbruck benötigen Modelle für Semesterprojekte und Diplomarbeiten. Budgetfreundlich und in 48h verfügbar.',
      whyPrint: 'Studienmodelle müssen schnell und günstig sein. Ab €20 ist ein 1:200 Modell machbar – das passt ins Studierendenbudget.',
      requirements: ['Maßstab 1:200 bis 1:500', 'Budget ab €20', 'Express 48h', 'Weiß monochrom'],
    },
  ],
  projectWorkflow: {
    headline: 'Architekturmodelle für Tirol – vom Entwurf zum Geländemodell',
    subheadline: 'Spezialisiert auf alpine Architektur mit topografischer Einbettung',
    steps: [
      { title: 'Datei & Gelände klären', description: 'CAD-Export senden. Bei Geländemodellen benötigen wir zusätzlich Höhendaten oder GIS-Exporte.', context: 'Wir können Höhendaten aus öffentlichen Quellen (TIRIS) selbst beziehen – das spart Ihnen Arbeit.' },
      { title: 'Topografie-Integration', description: 'Das Gelände wird als 3D-Sockel modelliert. Das Gebäude wird passgenau eingebettet.', context: 'Tiroler Projekte ohne Topografie sind die Ausnahme – wir haben dafür einen standardisierten Workflow.' },
      { title: 'Druck mit Alpen-Qualität', description: 'Robuster Druck in PETG oder PLA+ mit verstärkten Verbindungspunkten für den Transport.', context: 'Geländemodelle werden immer einteilig gedruckt, um Bruchstellen zu vermeiden.' },
      { title: 'Alpenversand', description: 'Bruchsichere Verpackung für den Transport über die Brennerautobahn nach Innsbruck und ganz Tirol.', context: 'Auch Lieferung direkt an die Universität Innsbruck ist möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Topografie ist Pflicht', explanation: 'In Tirol ist fast kein Bauplatz eben. Ein Modell ohne Gelände ist unbrauchbar.' },
    { statement: 'Studierendenpreise', explanation: 'Die Uni Innsbruck ist ein wichtiger Kunde. Faire Preise ab €20 sind entscheidend.' },
    { statement: 'Robustheit für Bergstation-Modelle', explanation: 'Modelle werden in Besprechungsräumen, auf Baustellen und bei Gemeinderatssitzungen gezeigt. Sie müssen das aushalten.' },
  ],
  commonMistakes: [
    { mistake: 'Gelände als flache Platte', explanation: 'Ein Berghotel auf einer flachen Grundplatte sieht absurd aus.', prevention: 'Wir erstellen immer ein realistisches Geländemodell. Die Kosten sind gering, der Effekt ist enorm.' },
    { mistake: 'Zu feine Geländestrukturen', explanation: 'Einzelne Felsen und Bäume im 3D-Druck führen zu Bruchstellen.', prevention: 'Wir glätten das Gelände leicht und setzen Vegetation als vereinfachte Volumen ein.' },
    { mistake: 'Maßstab für Bergstation zu groß', explanation: 'Eine Bergstation in 1:50 wird unhandlich groß und passt nicht auf den Besprechungstisch.', prevention: 'Wir empfehlen 1:200 für Gesamtansichten und 1:50 nur für Detailausschnitte.' },
  ],
};

const vorarlberg: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Bregenzerwald-Holzbau Wettbewerbe',
      description: 'Die Vorarlberger Baukultur ist weltweit bekannt. Architekten im Bregenzerwald reichen bei Wettbewerben Modelle ein, die die Materialität von Holz und Glas transportieren.',
      whyPrint: 'Die Baukultur im Bregenzerwald setzt auf Reduktion und Materialehrlichkeit. Ein monochromes 3D-Modell zeigt die Formensprache, ohne durch Material abzulenken.',
      requirements: ['Maßstab 1:100 bis 1:200', 'Monochrom weiß', 'Fassadenstruktur erkennbar', 'Standard-Lieferung'],
    },
    {
      title: 'Kunsthaus-Erweiterungen und Kulturbauten',
      description: 'Kulturprojekte wie das KUB Bregenz setzen architektonische Maßstäbe. Wettbewerbsmodelle für Kulturbauten in Vorarlberg müssen höchsten Ansprüchen genügen.',
      whyPrint: 'Vorarlberger Architekten erwarten Präzision. Jede Fuge, jeder Rücksprung muss im Modell sichtbar sein.',
      requirements: ['Maßstab 1:200', 'Höchste Detailauflösung', 'PLA+ weiß', 'Express möglich'],
    },
    {
      title: 'Gewerbe-Architektur im Rheintal',
      description: 'Das Rheintal ist Wirtschaftsmotor Vorarlbergs. Firmengebäude, Produktionshallen und Bürokomplexe werden als Modell für Baugenehmigungen und interne Präsentationen genutzt.',
      whyPrint: 'Gewerbebauten im Rheintal sollen sich architektonisch in die Landschaft einfügen. Ein Modell zeigt, ob das gelingt.',
      requirements: ['Maßstab 1:200 bis 1:500', 'Mit Umgebung', 'Modulare Erweiterung', 'Lieferung über A14'],
    },
  ],
  projectWorkflow: {
    headline: 'Architekturmodelle für Vorarlberg – Baukultur-Kompetenz',
    subheadline: 'Vom Bregenzerwald-Entwurf zum Wettbewerbsmodell',
    steps: [
      { title: 'Entwurf & Baukultur-Kontext', description: 'Wir besprechen nicht nur die Datei, sondern auch den architektonischen Anspruch. Vorarlberger Baukultur hat eigene Maßstäbe.', context: 'Wir kennen die Vorarlberger Architekturszene und wissen, was bei Jurys zählt.' },
      { title: 'Präzisionsdruck', description: 'Für Vorarlberger Modelle nutzen wir 0.1mm Layer Height – das Maximum an Detailschärfe im FDM-Druck.', context: 'Die Differenz zwischen 0.12mm und 0.1mm ist bei Fassadenstrukturen sichtbar.' },
      { title: 'Qualitätskontrolle', description: 'Jedes Modell wird unter Lupe auf Schichtfehler und Detailgenauigkeit geprüft.', context: 'Vorarlberger Architekten sind anspruchsvoll – unsere QA-Standards passen dazu.' },
      { title: 'Lieferung ins Ländle', description: 'Versand über A14 Rheintal. Auch Lieferung in die Schweiz und nach Süddeutschland möglich.', context: 'Grenznahe Projekte beliefern wir regelmäßig – auch nach St. Gallen und Lindau.' },
    ],
  },
  customerPriorities: [
    { statement: 'Höchste Detailauflösung', explanation: 'Vorarlberger Architekten arbeiten mit reduzierten Formen, in denen jedes Detail zählt.' },
    { statement: 'Monochrome Ästhetik', explanation: 'Die Baukultur im Bregenzerwald bevorzugt weiße Modelle, die die Form sprechen lassen.' },
    { statement: 'Grenzüberschreitende Lieferung', explanation: 'Viele Vorarlberger Büros arbeiten auch in der Schweiz und in Bayern. Das Modell muss überall hin lieferbar sein.' },
  ],
  commonMistakes: [
    { mistake: 'Zu viel Farbe für Baukultur-Modelle', explanation: 'Farbige Modelle widersprechen der Vorarlberger Ästhetik der Reduktion.', prevention: 'Wir empfehlen grundsätzlich monochromes Weiß. Farbakzente nur nach expliziter Absprache.' },
    { mistake: 'Fassadenstruktur nicht erkennbar', explanation: 'Vorarlberger Architektur lebt von Materialität – Holzlamellen, Metallverkleidungen, Glasfugen.', prevention: 'Wir drucken Fassadenstrukturen als Relief mit Mindesttiefe 0.3mm. Das ist im Modell sichtbar.' },
    { mistake: 'Grundstückskontext vergessen', explanation: 'Vorarlberger Architektur reagiert auf den Ort. Ohne Kontext fehlt die Aussage.', prevention: 'Wir empfehlen immer eine vereinfachte Umgebungsdarstellung – auch bei kleinen Projekten.' },
  ],
};

const burgenland: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Weingut-Architektur am Neusiedlersee',
      description: 'Moderne Weingut-Gebäude verbinden Produktion und Verkostung. Architekten zeigen die Raumfolge als Modell – von der Vinothek bis zum Weinkeller.',
      whyPrint: 'Winzer sind visuell orientiert. Ein Modell zeigt den Raumfluss vom Eingang über die Verkostung bis zur Produktion intuitiv.',
      requirements: ['Maßstab 1:100', 'Schnittdarstellung möglich', 'Mit Außenanlagen', 'Standard-Lieferung'],
    },
    {
      title: 'Tourismusprojekte am Neusiedler See',
      description: 'Hotels und Freizeitanlagen rund um den Neusiedler See werden als Standmodell für Investoren und Gemeinden gefertigt.',
      whyPrint: 'Tourismus ist der Wirtschaftsmotor des nördlichen Burgenlands. Investoren wollen sehen, wie sich das Projekt in die Seelandschaft einfügt.',
      requirements: ['Maßstab 1:200', 'Mit Landschaftskontext', 'Robust', 'Lieferung via Wien/A4'],
    },
    {
      title: 'Dorfkernsanierungen',
      description: 'Historische Ortskerne im Burgenland werden behutsam saniert. Modelle zeigen den Bestand und den geplanten Eingriff im Vergleich.',
      whyPrint: 'Bürger und Gemeinderat müssen verstehen, was sich ändert. Ein Modellpaar (Bestand + Entwurf) macht das sofort klar.',
      requirements: ['2 Modelle', 'Maßstab 1:200', 'Budget ab €40', 'Standard-Lieferung'],
    },
  ],
  projectWorkflow: {
    headline: 'Architekturmodelle fürs Burgenland – Lieferung via Wien',
    subheadline: 'Schnelle Anbindung über A4 ins gesamte Bundesland',
    steps: [
      { title: 'Datei & Projektkontext', description: 'CAD-Export hochladen und Einsatzzweck beschreiben. Bei Weingut-Projekten fragen wir nach der gewünschten Schnittebene.', context: 'Weinbau-Architektur hat eigene Anforderungen: Keller, Vinothek und Produktion müssen erkennbar sein.' },
      { title: 'Angebot & Materialwahl', description: 'Transparentes Angebot innerhalb von 6 Stunden. Materialempfehlung basierend auf dem Einsatzzweck.', context: 'Für dauerhafte Ausstellung in Vinotheken empfehlen wir PETG statt PLA.' },
      { title: 'Fertigung', description: 'Druck und Montage in Gunskirchen. Bei Modellpaaren werden beide Modelle parallel gefertigt.', context: 'Modellpaare (Bestand + Entwurf) drucken wir immer gleichzeitig für einheitliche Qualität.' },
      { title: 'Versand via Wien/A4', description: 'Lieferung über Wien ins gesamte Burgenland. Bruchsicher verpackt.', context: 'Express-Lieferung auch kurzfristig möglich – bitte 2 Tage vorab anfragen.' },
    ],
  },
  customerPriorities: [
    { statement: 'Schnittdarstellungen für Weinbau', explanation: 'Weingut-Architektur lebt vom Raumfluss. Schnittmodelle zeigen Keller, Vinothek und Produktion in einem Bild.' },
    { statement: 'Budget für kleine Gemeinden', explanation: 'Burgenländische Gemeinden haben begrenzte Budgets. Modelle ab €30 sind wichtig.' },
    { statement: 'Landschaftseinbettung', explanation: 'Am Neusiedler See ist die Landschaft Teil des Entwurfs. Das Modell muss das zeigen.' },
  ],
  commonMistakes: [
    { mistake: 'Weinkeller nicht im Modell', explanation: 'Der unterirdische Teil ist bei Weingütern architektonisch entscheidend – aber oft nicht im Modell.', prevention: 'Wir empfehlen Schnittmodelle, die den Keller als Teil der Gesamtkomposition zeigen.' },
    { mistake: 'Flache Darstellung ohne Kontext', explanation: 'Das Burgenland hat sanfte Hügel und den See. Ein flaches Modell ignoriert die Topografie.', prevention: 'Auch bei leichtem Gelände erstellen wir einen Geländesockel – das kostet wenig und bringt viel.' },
    { mistake: 'Material nicht UV-beständig', explanation: 'PLA verfärbt sich bei Sonneneinstrahlung. Modelle in Vinotheken mit Südfenstern sind betroffen.', prevention: 'Für dauerhafte Ausstellung empfehlen wir ASA oder PETG – UV-stabiler und langlebiger.' },
  ],
};

// Städte mit Verweis auf Bundesland-Daten + stadtspezifischen Anpassungen
const linz: ExtendedArchitekturSections = {
  typicalProjects: [
    {
      title: 'Stadtentwicklungsmodelle für Linz',
      description: 'Die Stadt Linz plant Quartiere am Hafen und im Süden. Architekten reichen städtebauliche Modelle ein, die Verkehrsachsen, Grünflächen und Gebäudehöhen zeigen.',
      whyPrint: 'Städtebauliche Varianten lassen sich als 3D-Modelle parallel drucken und in derselben Sitzung vergleichen – Same-Day aus Gunskirchen.',
      requirements: ['Maßstab 1:500', 'Bis zu 3 Varianten', 'Same-Day-Abholung', 'PLA+ weiß'],
    },
    {
      title: 'Industriearchitektur im voestalpine-Areal',
      description: 'Erweiterungsbauten auf dem voestalpine-Gelände werden als Modell dargestellt, um den Anschluss an bestehende Produktionshallen zu zeigen.',
      whyPrint: 'In 20 Minuten abgeholt und auf dem Besprechungstisch. Kein Versandrisiko, kein Warten.',
      requirements: ['Maßstab 1:200', 'Modulare Erweiterung', 'Same-Day möglich', 'Persönliche Übergabe'],
    },
    {
      title: 'Tabakfabrik-Umbauten',
      description: 'Die Tabakfabrik Linz wird laufend umgebaut. Architekten nutzen Modelle, um neue Nutzungskonzepte im Bestandsgebäude zu visualisieren.',
      whyPrint: 'Umbauten im Bestand sind komplex. Ein Schnittmodell zeigt, wie neue Elemente in die bestehende Struktur passen.',
      requirements: ['Maßstab 1:100', 'Schnittdarstellung', 'PLA+ oder PETG', 'Same-Day-Abholung'],
    },
  ],
  projectWorkflow: {
    headline: 'Architekturmodelle für Linz – in 20 Minuten abgeholt',
    subheadline: 'Same-Day-Service direkt aus Gunskirchen',
    steps: [
      { title: 'Datei senden – Angebot in 2h', description: 'CAD-Export hochladen. Bei Same-Day-Anfragen bis 10 Uhr ist Abholung am selben Abend möglich.', context: 'Linzer Architekten kennen den Weg nach Gunskirchen – 20 Minuten über die B1.' },
      { title: 'Same-Day-Druck starten', description: 'Bei Standardmodellen starten wir sofort. Druckzeit 4–8h je nach Größe.', context: 'Wir reservieren Druckerkapazität für Linzer Express-Kunden.' },
      { title: 'Persönliche Übergabe', description: 'Sie prüfen das Modell vor Ort, wir besprechen eventuelle Anpassungen.', context: 'Korrekturen können oft am selben Tag nachgedruckt werden.' },
      { title: 'Direkt mitnehmen', description: 'Modell verpackt und bereit zur Mitnahme. Kein Versandrisiko.', context: 'Wir haben Transportboxen in verschiedenen Größen vorrätig.' },
    ],
  },
  customerPriorities: [
    { statement: 'Same-Day ist kein Luxus, sondern Standard', explanation: 'Linzer Architekten erwarten Abholung am selben Tag. 20 Minuten Fahrzeit statt 5 Tage Versand.' },
    { statement: 'Persönliche Qualitätskontrolle', explanation: 'Das Modell wird vor Ort geprüft. Fehler werden sofort erkannt und korrigiert.' },
    { statement: 'Flexible Nachbestellung', explanation: 'Bei Wettbewerben ändern sich Entwürfe oft kurzfristig. Nachdrucke am selben Tag sind möglich.' },
  ],
  commonMistakes: [
    { mistake: 'Same-Day zu spät angefragt', explanation: 'Anfragen nach 14 Uhr für Same-Day sind bei komplexen Modellen nicht mehr realisierbar.', prevention: 'Bis 10 Uhr anfragen = Abholung am selben Abend. Bis 14 Uhr = Abholung am nächsten Morgen.' },
    { mistake: 'Modell zu groß für den Autotransport', explanation: 'Ein 60cm-Modell passt nicht auf den Beifahrersitz.', prevention: 'Wir informieren vorab über die Modellgröße und stellen passende Transportboxen bereit.' },
    { mistake: 'Keine Reservierung bei Express', explanation: 'Ohne Voranmeldung kann es sein, dass alle Drucker belegt sind.', prevention: 'Kurze E-Mail oder Anruf am Vortag reicht – wir reservieren Druckerkapazität.' },
  ],
};

const wels = oberoesterreich; // Wels nutzt OÖ-Daten mit Same-Day-Fokus
const graz = steiermark; // Graz nutzt Steiermark-Daten
const klagenfurt = kaernten; // Klagenfurt nutzt Kärnten-Daten
const villach = kaernten; // Villach nutzt Kärnten-Daten
const stPoelten = niederoesterreich; // St. Pölten nutzt NÖ-Daten
const innsbruck = tirol; // Innsbruck nutzt Tirol-Daten
const dornbirn = vorarlberg; // Dornbirn nutzt Vorarlberg-Daten

// ═══════════════════════════════════════════
// EXPORT MAP
// ═══════════════════════════════════════════
const allSections: Record<string, ExtendedArchitekturSections> = {
  wien, niederoesterreich, oberoesterreich, steiermark, kaernten,
  salzburg, tirol, vorarlberg, burgenland,
  linz, wels, graz, klagenfurt, villach,
  'st-poelten': stPoelten, innsbruck, dornbirn,
};

export const getExtendedArchitekturSections = (region: string): ExtendedArchitekturSections | undefined =>
  allSections[region];
