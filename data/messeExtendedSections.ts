// ═══════════════════════════════════════════════════════════════
// EXTENDED MESSE SECTIONS – 4 content-depth sections per region
// TypicalProjects, ProjectWorkflow, CustomerPriorities, CommonMistakes
// ═══════════════════════════════════════════════════════════════

import type { TypicalProjectData, ProjectWorkflowData, CustomerPriorityData, CommonMistakeData } from "./druckSectionData";

export interface ExtendedMesseSections {
  typicalProjects: TypicalProjectData[];
  projectWorkflow: ProjectWorkflowData;
  customerPriorities: CustomerPriorityData[];
  commonMistakes: CommonMistakeData[];
}

const wien: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Standmodelle für die Reed Messe Wien',
      description: 'Aussteller der BAUEN & WOHNEN und FERIEN-MESSE nutzen 3D-gedruckte Modelle als Blickfang. Produktmodelle im Maßstab 1:1 oder Architektur-Modelle im Maßstab 1:50 ziehen Besucher magnetisch an den Stand.',
      whyPrint: '3D-gedruckte Standmodelle sind bis zu 70% leichter als Holz oder Metall. Das spart Transportkosten und erlaubt größere Modelle. Und sie werden in 48h gefertigt – nicht in 3 Wochen.',
      requirements: ['Bis 60cm Höhe', 'PLA+ oder PETG', 'Bruchsicher verpackt', 'Express 48h'],
    },
    {
      title: 'Produktvisualisierungen für die GEWINN Messe',
      description: 'Finanzdienstleister und Startups zeigen ihre Produkte als physische Modelle am Messestand. Ein greifbares Produktmodell erzeugt mehr Gesprächsbereitschaft als ein Bildschirm.',
      whyPrint: 'Auf einer Finanzmesse fehlt oft Haptik. Ein 3D-gedrucktes Produktmodell schafft den physischen Ankerpunkt, der Gespräche eröffnet.',
      requirements: ['Maßstab 1:1 oder vergrößert', 'Mehrfarbig möglich', 'Standfuß inklusive', 'Lieferung zur Messe'],
    },
    {
      title: 'Kunst-Installationen für die Marx Halle',
      description: 'Aussteller im Salon Österreich und bei Kunstmessen in der Marx Halle nutzen 3D-gedruckte Objekte als Teil ihrer Installation. Großformatige Formen, die in keiner anderen Fertigung wirtschaftlich wären.',
      whyPrint: 'Kunstinstallationen brauchen einzigartige Formen. 3D-Druck ermöglicht organische Geometrien ab Stückzahl 1 – ohne Werkzeugkosten.',
      requirements: ['Großformat bis 40cm', 'Organische Formen', 'PLA+ oder ASA', 'Standard-Lieferung'],
    },
  ],
  projectWorkflow: {
    headline: 'So entsteht Ihr Messemodell für Wien',
    subheadline: 'Vom Standkonzept zum fertigen Blickfang – rechtzeitig vor Messeaufbau',
    steps: [
      { title: 'Standkonzept & Modellgröße klären', description: 'Wie groß ist Ihr Stand? Wo steht das Modell? Wir beraten zur optimalen Modellgröße für maximale Wirkung.', context: 'Wiener Messestände sind oft 9–18m². Modelle über 40cm brauchen einen eigenen Sockel.' },
      { title: 'Datei prüfen & Material wählen', description: 'Wir prüfen Ihre CAD-Datei und empfehlen das beste Material: PLA+ für Optik, PETG für Robustheit, ASA für UV-Stabilität.', context: 'Bei Messen mit Spotbeleuchtung empfehlen wir ASA – PLA kann unter starkem Licht weich werden.' },
      { title: 'Fertigung mit Messe-Deadline', description: 'Wir planen rückwärts vom Aufbautag: Fertigung, Nachbearbeitung, Verpackung, Versand. Jeder Schritt hat einen fixen Zeitpunkt.', context: 'Bei Reed Messe Wien können wir direkt ans Messegelände liefern.' },
      { title: 'Bruchsichere Lieferung zur Messe', description: 'Individuelle Schaumstoffverpackung, doppelwandiger Karton, Versandtracking. Lieferung direkt zum Messestand oder ins Lager.', context: 'Wir kennen die Anlieferungsbedingungen der Reed Messe Wien – keine Überraschungen beim Aufbau.' },
    ],
  },
  customerPriorities: [
    { statement: 'Messe-Deadline ist nicht verhandelbar', explanation: 'Aufbautag ist fix. Ein Tag Verspätung bedeutet: Kein Modell am Stand. Wir liefern immer 1–2 Tage vor Aufbau.' },
    { statement: 'Blickfang-Wirkung am Stand', explanation: 'Das Modell muss aus 3 Metern Entfernung Aufmerksamkeit erzeugen. Größe und Form sind wichtiger als Detailgenauigkeit.' },
    { statement: 'Transporttauglich & bruchsicher', explanation: 'Das Modell wird im Auto oder per Spedition zur Messe gebracht. Es muss den Transport unbeschadet überstehen.' },
    { statement: 'Wiederverwendbar für mehrere Messen', explanation: 'Ein Messemodell soll 3–5 Messen überleben. PETG ist robuster als PLA und hält dem Auf- und Abbau stand.' },
  ],
  commonMistakes: [
    { mistake: 'Modell zu klein für den Messestand', explanation: 'Ein 15cm-Modell auf einem 12m²-Stand geht unter. Besucher laufen vorbei, ohne es zu bemerken.', prevention: 'Wir empfehlen mindestens 30cm Modellhöhe für Stände bis 18m². Größere Stände brauchen größere Modelle.' },
    { mistake: 'PLA bei starker Beleuchtung', explanation: 'Messespot-Lampen erzeugen Hitze. PLA wird ab 55°C weich und kann sich verformen.', prevention: 'Für beleuchtete Stände empfehlen wir PETG (bis 75°C) oder ASA (bis 95°C).' },
    { mistake: 'Aufbauanleitung vergessen', explanation: 'Mehrteilige Modelle werden am Messestand falsch zusammengebaut.', prevention: 'Jedes mehrteilige Modell bekommt eine nummerierte Aufbauanleitung mit Fotos.' },
    { mistake: 'Keine Ersatzteile bestellt', explanation: 'Feine Bauteile können beim Transport oder Auf-/Abbau brechen. Ohne Ersatz steht ein beschädigtes Modell am Stand.', prevention: 'Wir empfehlen, filigrane Anbauteile doppelt zu bestellen. Kostenpunkt: wenige Euro extra.' },
  ],
};

const niederoesterreich: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Agrar-Standmodelle für die Wieselburger Messe',
      description: 'Landmaschinenhersteller und Agrartechnik-Unternehmen zeigen Maschinenmodelle im Maßstab 1:10. Besucher können die Funktionsweise greifbar nachvollziehen.',
      whyPrint: 'Eine echte Landmaschine passt nicht in jeden Messestand. Ein 3D-gedrucktes 1:10-Modell zeigt alle Details und wiegt nur 2kg.',
      requirements: ['Maßstab 1:10', 'Robust für Anfassen', 'Farbcodierung', 'Standard-Lieferung'],
    },
    {
      title: 'Bau-Modelle für BAUEN & ENERGIE',
      description: 'Bauunternehmen zeigen Energiekonzepte als Schnittmodell. Wärmedämmung, Heizungsführung und Solaranlagen werden sichtbar dargestellt.',
      whyPrint: 'Energiekonzepte sind abstrakt. Ein Schnittmodell macht Dämmschichten und Haustechnik greifbar – auch für Laien.',
      requirements: ['Schnittdarstellung', 'Farbcodierte Schichten', 'PETG für Robustheit', 'Lieferung über A1'],
    },
    {
      title: 'Direktvermarkter-Displays für AB HOF',
      description: 'Direktvermarkter nutzen 3D-gedruckte Displayhalter und Produktpräsentationen. Individuelle Formen, die zum Markenauftritt passen.',
      whyPrint: 'Standarddisplays sehen generisch aus. Ein individueller 3D-gedruckter Displayhalter hebt den Stand ab und wirkt professionell.',
      requirements: ['Individuelle Form', 'PLA+ lebensmittelnah', 'Standfest', 'Budget ab €30'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle für NÖ – A1-Express aus Gunskirchen',
    subheadline: 'Rechtzeitig vor dem Messeaufbau in Wieselburg und ganz NÖ',
    steps: [
      { title: 'Messetermin & Modellgröße klären', description: 'Wann ist Aufbautag? Wie groß ist der Stand? Wir planen rückwärts vom Messetermin.', context: 'Wieselburger Messe-Termine sind uns bekannt – wir planen automatisch mit den richtigen Vorlaufzeiten.' },
      { title: 'Datei & Material abstimmen', description: 'CAD-Datei prüfen und Material empfehlen. Für Agrar-Modelle: PETG für Robustheit.', context: 'Agrar-Modelle werden oft angefasst. PETG hält das aus, PLA nicht.' },
      { title: 'Fertigung & Qualitätskontrolle', description: 'Druck, Nachbearbeitung und Montage. Jedes Modell wird vor dem Versand fotografiert und dokumentiert.', context: 'Die Fotodokumentation dient als Nachweis für den Zustand bei Versand.' },
      { title: 'Lieferung über A1', description: 'Bruchsicher verpackt, Lieferung über die Westautobahn direkt nach Wieselburg, St. Pölten oder zum gewünschten Ort.', context: 'Auch Lieferung direkt zum Messegelände Wieselburg ist möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Robust genug zum Anfassen', explanation: 'Auf Agrarmessen werden Modelle angefasst, gedreht, hochgehoben. PLA bricht dabei – PETG nicht.' },
    { statement: 'Agrar-Verständnis', explanation: 'Wir müssen die Maschine verstehen, um sie im richtigen Maßstab und mit den richtigen Details darzustellen.' },
    { statement: 'Budget für Direktvermarkter', explanation: 'Kleine Betriebe haben begrenzte Messebudgets. Individuelle Displays ab €30 sind wichtig.' },
  ],
  commonMistakes: [
    { mistake: 'Modell nicht robust genug', explanation: 'Auf Agrarmessen werden Modelle angefasst. Dünne Teile brechen beim ersten Besucher.', prevention: 'Wir verstärken alle greifbaren Teile und nutzen PETG statt PLA für Anfass-Modelle.' },
    { mistake: 'Maßstab nicht zum Stand passend', explanation: 'Ein 1:1 Modell einer Erntemaschine braucht 6m² – das passt nicht in jeden Stand.', prevention: 'Wir fragen immer nach der Standgröße und empfehlen den passenden Maßstab.' },
    { mistake: 'Keine Standfüße bei schweren Modellen', explanation: 'Große Modelle kippen um, wenn sie keinen stabilen Standfuß haben.', prevention: 'Wir fertigen immer einen integrierten Standfuß – auch bei kleinen Modellen.' },
  ],
};

const oberoesterreich: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Welser Messe – Industriemodelle für Aussteller',
      description: 'Maschinenbauer und Technologieunternehmen zeigen Produktmodelle auf der Welser Messe. Von der Steuerungsanlage bis zum Spezialwerkzeug.',
      whyPrint: 'Nur 10 Minuten von Gunskirchen zur Messe Wels. Same-Day möglich, persönliche Übergabe am Messegelände.',
      requirements: ['Maßstab variabel', 'Same-Day möglich', 'PETG für Industriemodelle', 'Persönliche Übergabe'],
    },
    {
      title: 'AGRARIA Wels – Landtechnik-Modelle',
      description: 'Agrar-Aussteller zeigen verkleinerte Maschinenmodelle und Stallsysteme. Besucher können Funktionsprinzipien am Modell verstehen.',
      whyPrint: 'Die echte Maschine kostet €500.000 und wiegt 10 Tonnen. Das 1:10-Modell kostet €200 und passt auf den Tisch.',
      requirements: ['Maßstab 1:10 bis 1:20', 'Robust', 'Bewegliche Teile möglich', 'Abholung in Gunskirchen'],
    },
    {
      title: 'Power-Days – Elektrotechnik-Schaumodelle',
      description: 'Elektrotechnik-Aussteller zeigen Schaltschrank-Modelle und Installationsbeispiele. Kabelführung und Bauteilplatzierung werden dreidimensional sichtbar.',
      whyPrint: 'Schaltschränke sind von außen langweilig. Ein aufgeschnittenes 3D-Modell zeigt das Innenleben und begeistert Fachbesucher.',
      requirements: ['Schnittmodell', 'Farbcodierte Kabel', 'PLA+ oder PETG', 'Same-Day-Abholung'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle für OÖ – 10 Min zur Welser Messe',
    subheadline: 'Lokaler Hersteller, Same-Day-Service, persönliche Übergabe',
    steps: [
      { title: 'Messetermin & Modell besprechen', description: 'Kommen Sie persönlich vorbei oder senden Sie Ihre Datei. Wir beraten vor Ort in Gunskirchen.', context: '10 Minuten zur Welser Messe – persönliche Beratung ist jederzeit möglich.' },
      { title: 'Same-Day-Fertigung', description: 'Bei Auftragseingang bis 10 Uhr ist Same-Day-Abholung für Standardmodelle realisierbar.', context: 'Wir reservieren Druckerkapazität für OÖ-Messe-Aussteller.' },
      { title: 'Qualitätskontrolle vor Ort', description: 'Sie prüfen das Modell persönlich in Gunskirchen. Korrekturen werden sofort umgesetzt.', context: 'Das ist unser größter Vorteil gegenüber Anbietern in Wien oder München.' },
      { title: 'Persönliche Lieferung zur Messe', description: 'Wir liefern direkt zum Messegelände Wels – persönlich, bruchsicher, pünktlich.', context: 'Auch Lieferung zu anderen OÖ-Messen (Ried, Freistadt) ist möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Same-Day vor der Messe', explanation: 'Last-Minute-Änderungen am Stand? Wir fertigen über Nacht und liefern morgens zur Messe.' },
    { statement: 'Persönlicher Service', explanation: 'Kein anonymes Online-Formular. Persönliche Beratung und Übergabe in Gunskirchen.' },
    { statement: 'Kenntnis der Welser Messe', explanation: 'Wir kennen die Anlieferung, die Hallen und die Zeitpläne der Welser Messe – keine Überraschungen.' },
  ],
  commonMistakes: [
    { mistake: 'Modell nicht messetauglich verpackt', explanation: 'Ein Modell im Standardkarton überlebt den Messeauf- und -abbau nicht.', prevention: 'Wir liefern in wiederverwendbaren Transportboxen mit Schaumstoffeinlage.' },
    { mistake: 'Last-Minute ohne Voranmeldung', explanation: 'Same-Day braucht freie Druckerkapazität. Ohne Voranmeldung kann es knapp werden.', prevention: 'Kurzer Anruf am Vortag reicht – wir reservieren Kapazität für Messe-Kunden.' },
    { mistake: 'Industriemodell in PLA gedruckt', explanation: 'Messehallen werden warm. PLA wird bei 55°C weich.', prevention: 'Für Messen empfehlen wir grundsätzlich PETG oder ASA.' },
  ],
};

const steiermark: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Standmodelle für die Häuslbauermesse Graz',
      description: 'Bauunternehmen und Haustechnik-Firmen zeigen Energiekonzepte und Gebäudemodelle. Schnittmodelle mit Dämmschichten und Heizungssystemen erzeugen Verständnis.',
      whyPrint: 'Ein Schnittmodell eines Hauses zeigt in 5 Sekunden, was eine 20-seitige Broschüre nicht kann: Wo sitzt die Wärmedämmung? Wie funktioniert die Lüftung?',
      requirements: ['Schnittdarstellung', 'Farbcodierte Schichten', 'PETG robust', 'Express über A9'],
    },
    {
      title: 'Grazer Herbstmesse – Produktpräsentationen',
      description: 'Steirische KMU zeigen ihre Produkte als vergrößerte oder verkleinerte 3D-Modelle. Von der Elektronikkomponente bis zum Möbelstück.',
      whyPrint: 'Eine 5mm Elektronikkomponente sieht am Stand niemand. Als 10:1 Vergrößerung wird sie zum Hingucker.',
      requirements: ['Maßstab variabel', 'Vergrößerung möglich', 'Standfuß', 'Standard-Lieferung'],
    },
    {
      title: 'BeSt³ Graz – Uni-Exponate',
      description: 'Universitäten und FHs zeigen Forschungsergebnisse als 3D-Modelle. Molekülstrukturen, technische Innovationen und Architektur-Entwürfe werden greifbar.',
      whyPrint: 'Auf Bildungsmessen entscheiden 10 Sekunden am Stand. Ein faszinierendes 3D-Modell hält Schüler länger am Stand als jede Broschüre.',
      requirements: ['Verschiedene Größen', 'PLA+ bunt', 'Budget ab €20', 'Express über A9'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle für die Steiermark – Express via A9',
    subheadline: 'Rechtzeitig zur Messe Graz – termingerecht und bruchsicher',
    steps: [
      { title: 'Messetermin & Standkonzept', description: 'Wann ist Aufbautag in der Messe Graz? Wir planen rückwärts und garantieren termingerechte Lieferung.', context: 'Häuslbauermesse, Herbstmesse, BeSt³ – wir kennen alle Grazer Messetermine.' },
      { title: 'Modellkonzept & Material', description: 'Schnittmodell, Vergrößerung oder Maßstabsmodell? Wir empfehlen die beste Darstellungsform für Ihren Messeauftritt.', context: 'Für Baumessen empfehlen wir Schnittmodelle – die erzeugen die meisten Gespräche am Stand.' },
      { title: 'Fertigung & QA', description: 'Druck, Nachbearbeitung, Montage. Jedes Modell wird auf Bruchsicherheit und optische Qualität geprüft.', context: 'Wir fotografieren jedes Modell vor dem Versand – so können Sie es vorab freigeben.' },
      { title: 'Express-Versand über A9', description: 'Bruchsichere Verpackung, Versand über die Pyhrnautobahn direkt zur Messe Graz oder an Ihre Firmenadresse.', context: 'Lieferung direkt an die Messe Graz (Halle/Standnummer angeben) ist möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Schnittmodelle für Baumessen', explanation: 'Steirische Bauaussteller setzen auf Schnittmodelle. Die erzeugen Gesprächsstoff und Vertrauen.' },
    { statement: 'Budget für KMU', explanation: 'Steirische KMU kalkulieren messescharf. Transparente Preise ohne versteckte Kosten sind Pflicht.' },
    { statement: 'Lieferung direkt zur Messe Graz', explanation: 'Kein Umweg über das Büro. Das Modell soll direkt am Stand ankommen.' },
  ],
  commonMistakes: [
    { mistake: 'Schnittebene falsch gewählt', explanation: 'Ein Schnitt durch die Treppe statt durch den Technikraum zeigt nichts Interessantes.', prevention: 'Wir besprechen die optimale Schnittebene vorab – was soll sichtbar werden?' },
    { mistake: 'Zu viele Details für Messeabstand', explanation: 'Filigrane Details unter 1mm sieht kein Messebesucher aus 1m Entfernung.', prevention: 'Für Messen empfehlen wir vereinfachte Darstellungen mit großen, klaren Formen.' },
    { mistake: 'Kein Standfuß', explanation: 'Modelle ohne Standfuß kippen bei Messeaufbau-Hektik um.', prevention: 'Jedes Messemodell bekommt einen integrierten, beschwerten Standfuß.' },
  ],
};

const kaernten: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Holzmesse Klagenfurt – Holzkonstruktions-Modelle',
      description: 'Holzbauunternehmen zeigen innovative Verbindungstechnik und Tragwerke als vergrößerte Modelle. Knotenpunkte werden sichtbar und greifbar.',
      whyPrint: 'Eine Holzverbindung im Original ist 5cm groß. Als 5:1 Vergrößerung wird sie zum didaktischen Exponat, das Zimmerer und Architekten begeistert.',
      requirements: ['Vergrößerung 5:1 bis 10:1', 'Zerlegbar für Demonstration', 'PLA+ oder PETG', 'Express über A10'],
    },
    {
      title: 'Kärntner Baumesse – Haustechnik-Modelle',
      description: 'Heizungs- und Lüftungsfirmen zeigen ihre Systeme als Funktionsmodell. Luftströme und Wärmeführung werden durch Farbcodierung sichtbar.',
      whyPrint: 'Haustechnik ist unsichtbar. Ein farbcodiertes Schnittmodell macht Luftwege und Wärmeströme für jeden Hausbesitzer verständlich.',
      requirements: ['Schnittmodell', 'Farbcodierung', 'PETG robust', 'Standard-Lieferung'],
    },
    {
      title: 'Tourismusmodelle für Kärntner Events',
      description: 'Hotels und Resorts am Wörthersee nutzen Modelle für Tourismusmessen und Investorenpräsentationen.',
      whyPrint: 'Ein Hotel-Modell mit Pool, Terrassen und Seezugang verkauft die Vision besser als jede Powerpoint.',
      requirements: ['Maßstab 1:200', 'Mit Außenanlagen', 'PLA+ weiß', 'Express über A10'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle für Kärnten – Holzmesse bis Tourismusmesse',
    subheadline: 'Zuverlässige Alpenlogistik direkt nach Klagenfurt und Villach',
    steps: [
      { title: 'Messe & Modelltyp klären', description: 'Holzmesse, Baumesse oder Tourismus-Event? Jeder Messetyp hat andere Anforderungen an das Modell.', context: 'Holzmesse-Modelle müssen zerlegbar sein. Baumesse-Modelle brauchen Schnittdarstellungen.' },
      { title: 'Material für Kärntner Messen', description: 'PETG für robuste Anfass-Modelle, PLA+ für Präsentationsmodelle. Für die Holzmesse empfehlen wir zerlegbare PETG-Modelle.', context: 'Auf der Holzmesse werden Modelle hundertfach angefasst. Nur PETG hält das aus.' },
      { title: 'Fertigung & alpine Verpackung', description: 'Druck in Gunskirchen, dann bruchsichere Verpackung für den Transport über die Tauernautobahn.', context: 'Alpentransporte sind unsere Spezialität – doppelwandige Kartons mit Schaumstoffeinlage.' },
      { title: 'Lieferung nach Kärnten', description: 'Standard 5–7 Tage, Express 48h. Lieferung direkt zum Messegelände Klagenfurt möglich.', context: 'Auch Lieferung zur Holzmesse Klagenfurt mit Angabe von Halle und Standnummer.' },
    ],
  },
  customerPriorities: [
    { statement: 'Holzmesse-Erfahrung', explanation: 'Die Internationale Holzmesse ist Kärntens wichtigste Fachmesse. Wir kennen die Anforderungen an die Modelle.' },
    { statement: 'Zerlegbare Modelle für Demonstration', explanation: 'Holzbau-Modelle sollen Knotenpunkte zeigen. Zerlegbare Modelle ermöglichen das direkt am Stand.' },
    { statement: 'Robuste alpine Logistik', explanation: 'Der Transport über die Tauernautobahn dauert 3h. Die Verpackung muss das aushalten.' },
  ],
  commonMistakes: [
    { mistake: 'Holzverbindung nicht zerlegbar', explanation: 'Ein verschlossenes Modell zeigt die Verbindung nicht. Der Besucher versteht nichts.', prevention: 'Wir fertigen zerlegbare Modelle mit Clip-Verbindungen. So kann der Besucher selbst montieren und demontieren.' },
    { mistake: 'Zu dünne Teile für Anfass-Modelle', explanation: 'Messebesucher greifen zu. Teile unter 3mm Dicke brechen beim ersten Mal.', prevention: 'Wir verstärken alle greifbaren Teile auf mindestens 3mm Wandstärke.' },
    { mistake: 'Standardverpackung für Alpentransport', explanation: 'Ein normaler Karton reicht für 3h Tauernautobahn nicht aus.', prevention: 'Doppelwandiger Karton + Schaumstoffeinlage + Fragile-Aufkleber ist unser Standard für Kärnten.' },
  ],
};

const salzburg: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Gastronomie-Modelle für Alles-für-den-Gast',
      description: 'Gastro-Ausstatter und Küchenhersteller zeigen Küchenplanungen als 3D-Modell. Besucher sehen den Arbeitsfluss auf einen Blick.',
      whyPrint: 'Eine Großküche in 2D verstehen nur Fachplaner. Als 3D-Modell im Maßstab 1:20 versteht jeder Gastronom den Workflow.',
      requirements: ['Maßstab 1:20', 'Farbcodierte Zonen', 'PETG robust', 'Express über A1'],
    },
    {
      title: 'AutoSalon-Standmodelle',
      description: 'Autohäuser und Tuning-Firmen zeigen Fahrzeug-Teile als vergrößerte Modelle. Felgen, Spoiler und Karosserie-Elemente in Übergröße ziehen Blicke an.',
      whyPrint: 'Eine Original-Felge wiegt 12kg. Ein 3D-gedrucktes 1:1-Modell wiegt 500g und kann auf einem Sockel präsentiert werden.',
      requirements: ['1:1 oder vergrößert', 'PLA+ oder ASA', 'Standsockel inklusive', 'Standard-Lieferung'],
    },
    {
      title: 'Bau-Modelle für Bauen+Wohnen',
      description: 'Bauträger zeigen Wohnprojekte als maßstabsgetreue Modelle. Potenzielle Käufer können sich die Wohnung vorstellen.',
      whyPrint: 'Wohnungskäufer treffen Entscheidungen emotional. Ein Modell erzeugt mehr Begehrlichkeit als ein Grundrissplan.',
      requirements: ['Maßstab 1:100', 'Mit Außenanlagen', 'Abnehmbare Geschosse', 'Express über A1'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle für Salzburg – schnell über die A1',
    subheadline: 'Rechtzeitig zum Messezentrum Salzburg',
    steps: [
      { title: 'Messetermin & Standkonzept', description: 'Welche Messe? Wie groß ist der Stand? Wir beraten zur optimalen Modellgröße.', context: 'Alles-für-den-Gast ist Salzburgs wichtigste Fachmesse – wir haben Erfahrung mit Gastro-Modellen.' },
      { title: 'Material für Messe-Bedingungen', description: 'Messehallen sind warm und hell. Wir empfehlen hitzebeständige Materialien für Dauerbeleuchtung.', context: 'Das Messezentrum Salzburg hat starke Hallenbeleuchtung – PLA ist dort riskant.' },
      { title: 'Fertigung mit Messe-Deadline', description: 'Rückwärtsplanung vom Aufbautag. Jeder Schritt hat einen fixen Zeitpunkt.', context: 'Wir liefern standardmäßig 2 Tage vor Messeaufbau.' },
      { title: 'A1-Express nach Salzburg', description: 'Direkte Lieferung zum Messezentrum Salzburg. Auch persönliche Übergabe in OÖ möglich.', context: 'Salzburg ist über die A1 in 1,5h erreichbar. Express-Lieferung am nächsten Tag.' },
    ],
  },
  customerPriorities: [
    { statement: 'Gastro-Verständnis', explanation: 'Küchenlayouts brauchen Fachverständnis. Wir müssen den Arbeitsfluss verstehen, um das Modell richtig darzustellen.' },
    { statement: 'Schnelle A1-Lieferung', explanation: 'Salzburg ist über die A1 direkt erreichbar. Express am nächsten Tag ist Standard.' },
    { statement: 'Messegelände-Lieferung', explanation: 'Direkte Lieferung zum Messezentrum Salzburg mit Hallen- und Standnummer.' },
  ],
  commonMistakes: [
    { mistake: 'Küchen-Modell ohne Farbcodierung', explanation: 'Kochen, Spülen, Lager – ohne Farben sieht alles gleich aus.', prevention: 'Wir nutzen Branchenstandard-Farben: Rot=Kochen, Blau=Kühlung, Grün=Vorbereitung.' },
    { mistake: 'Fahrzeugmodell nicht maßstabstreu', explanation: 'Proportionen, die leicht abweichen, erkennt jeder Autoliebhaber sofort.', prevention: 'Wir prüfen Proportionen gegen Original-Maße und korrigieren Abweichungen vor dem Druck.' },
    { mistake: 'Modell ohne Sockel bei Bauten+Wohnen', explanation: 'Wohnmodelle brauchen einen Kontext – Straße, Garten, Nachbarbebauung.', prevention: 'Wir empfehlen immer einen Gesamtsockel mit Umgebungsdarstellung.' },
  ],
};

const tirol: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Interalpin – Seilbahn- und Pistenmodelle',
      description: 'Seilbahnhersteller und Skigebiet-Betreiber zeigen Infrastruktur-Modelle. Stationsgebäude, Pistenführung und Beschneiungsanlagen als 3D-Modell.',
      whyPrint: 'Ein Skigebiet passt nicht in eine Messehalle. Aber ein 1:1000-Modell zeigt die gesamte Infrastruktur auf 1m².',
      requirements: ['Maßstab 1:500 bis 1:1000', 'Mit Topografie', 'PETG robust', 'Express über A13'],
    },
    {
      title: 'FAFGA – Gastronomie-Ausstattungsmodelle',
      description: 'Hotel- und Restaurant-Ausstatter zeigen Raumkonzepte und Küchenplanungen als 3D-Modell.',
      whyPrint: 'Gastronomen treffen Investitionsentscheidungen auf der FAFGA. Ein Modell der geplanten Küche überzeugt schneller als ein Prospekt.',
      requirements: ['Maßstab 1:20', 'Farbcodierung', 'PLA+ oder PETG', 'Standard-Lieferung'],
    },
    {
      title: 'Tiroler Baumesse – Energiehaus-Modelle',
      description: 'Energieberater und Haustechnik-Firmen zeigen Schnittmodelle von Passivhäusern. Dämmung, Lüftung und Heizung werden schichtweise sichtbar.',
      whyPrint: 'Energieeffizienz ist abstrakt. Ein Schnittmodell mit farbcodierten Schichten macht sie greifbar und verständlich.',
      requirements: ['Schnittdarstellung', 'Farbcodierte Schichten', 'PETG', 'Express über A13'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle für Tirol – Interalpin bis Baumesse',
    subheadline: 'Bruchsichere Alpenlogistik direkt nach Innsbruck',
    steps: [
      { title: 'Messe & Modelltyp festlegen', description: 'Interalpin, FAFGA oder Baumesse? Jede Messe hat andere Modell-Anforderungen.', context: 'Interalpin ist alle 2 Jahre – wir kennen den Rhythmus und die typischen Modellgrößen.' },
      { title: 'Topografie & Material', description: 'Für Skigebiet-Modelle erstellen wir Geländemodelle aus Höhendaten. Material: PETG für Robustheit.', context: 'Tiroler Höhendaten beziehen wir aus dem TIRIS – das spart Ihnen die Aufbereitung.' },
      { title: 'Fertigung mit Alpen-QA', description: 'Jedes Modell wird auf Transporttauglichkeit geprüft. Filigrane Teile werden verstärkt.', context: 'Für die Interalpin fertigen wir regelmäßig Modelle – unser Workflow ist darauf optimiert.' },
      { title: 'Alpen-Express nach Innsbruck', description: 'Bruchsichere Verpackung für den Alpentransport. Lieferung direkt zur Messe Innsbruck.', context: 'Lieferung mit Hallen- und Standnummer direkt zum Messegelände möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Topografie-Kompetenz', explanation: 'Seilbahnmodelle ohne Gelände sind sinnlos. Wir können Topografie integrieren.' },
    { statement: 'Interalpin-Erfahrung', explanation: 'Die Interalpin ist Europas wichtigste Seilbahnmesse. Wir kennen die Anforderungen.' },
    { statement: 'Bruchsicherer Alpentransport', explanation: 'Die Brennerautobahn ist lang und holprig. Verpackung muss stimmen.' },
  ],
  commonMistakes: [
    { mistake: 'Pistenmodell ohne Schnee-Darstellung', explanation: 'Ein Skigebiet ohne Schnee sieht wie ein Bergwandergebiet aus.', prevention: 'Wir stellen Schneebedeckung als weiße Oberfläche dar und markieren Pisten farbig.' },
    { mistake: 'Geländemodell zu grob', explanation: 'Seilbahnstationen stehen an exakten Positionen. Ein grobes Gelände verschiebt sie.', prevention: 'Wir nutzen hochauflösende Höhendaten für Geländemodelle im Alpenraum.' },
    { mistake: 'Messemodell in PLA für warme Hallen', explanation: 'Messehallen in Innsbruck werden auf 22°C geheizt. Spotbeleuchtung kommt dazu.', prevention: 'Grundsätzlich PETG oder ASA für Messemodelle – kein Risiko mit PLA.' },
  ],
};

const vorarlberg: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Gustav Design-Messe – Kreative Standmodelle',
      description: 'Designer und Manufakturen zeigen auf der Gustav ihre Produkte. 3D-gedruckte Displays und vergrößerte Produktmodelle heben den Stand ab.',
      whyPrint: 'Die Gustav ist eine Design-Messe. Der Stand selbst ist Teil des Designs. Individuelle 3D-gedruckte Elemente statt Standardregale.',
      requirements: ['Individuelle Formen', 'PLA+ oder ASA', 'Design-Qualität', 'Standard-Lieferung'],
    },
    {
      title: 'SCHAU! Messe – Lifestyle-Produkte',
      description: 'Lifestyle-Aussteller nutzen 3D-gedruckte Produktvergrößerungen und Displayhalter. Der Stand soll wie ein Concept Store wirken.',
      whyPrint: 'Concept-Store-Ästhetik braucht individuelle Einrichtung. 3D-Druck ermöglicht maßgeschneiderte Displays ab Stückzahl 1.',
      requirements: ['Individuelle Displays', 'Verschiedene Farben', 'PLA+ matt', 'Express möglich'],
    },
    {
      title: 'Herbstmesse Dornbirn – Regionale Aussteller',
      description: 'Vorarlberger Unternehmen zeigen ihre Produkte und Dienstleistungen. Von Handwerk bis Technologie – jeder Stand braucht einen Blickfang.',
      whyPrint: 'Ein individuelles 3D-Modell am Stand signalisiert Innovationskraft – auch bei traditionellen Handwerksbetrieben.',
      requirements: ['Maßstab variabel', 'Robust', 'PETG empfohlen', 'Lieferung über A14'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle fürs Ländle – Gustav bis Herbstmesse',
    subheadline: 'Design-Kompetenz für Vorarlberger Aussteller, auch mit CH/DE-Lieferung',
    steps: [
      { title: 'Standkonzept & Design besprechen', description: 'Welche Wirkung soll das Modell erzielen? Wir beraten zu Form, Größe und Material.', context: 'Gustav-Aussteller brauchen Design-Qualität. Wir verstehen den Unterschied zwischen Industrie- und Design-Modellen.' },
      { title: 'Material für Vorarlberger Standards', description: 'Vorarlberger Design setzt auf Reduktion und Qualität. PLA+ matt in Weiß oder Schwarz ist der Favorit.', context: 'Glänzende Oberflächen sind bei Design-Messen verpönt. Matt ist das Stichwort.' },
      { title: 'Fertigung & Finish', description: 'Druck mit feinstem Layer Height (0.1mm) und optionalem Schleifen + Grundieren.', context: 'Für Design-Messen empfehlen wir immer geschliffene Oberflächen – der Aufpreis lohnt sich.' },
      { title: 'Lieferung ins Rheintal', description: 'Versand über A14 nach Dornbirn und ganz Vorarlberg. Auch Lieferung in die Schweiz und nach Süddeutschland.', context: 'Grenznahe Messen in St. Gallen oder Friedrichshafen beliefern wir regelmäßig.' },
    ],
  },
  customerPriorities: [
    { statement: 'Design-Ästhetik', explanation: 'Die Gustav ist eine Designmesse. Das Modell muss selbst ein Design-Objekt sein.' },
    { statement: 'Matte Oberflächen', explanation: 'Vorarlberger Design bevorzugt matte Oberflächen. Hochglanz wirkt billig.' },
    { statement: 'DACH-Lieferung', explanation: 'Vorarlberger Aussteller stellen auch in der Schweiz und in Bayern aus. Grenzüberschreitende Lieferung ist wichtig.' },
  ],
  commonMistakes: [
    { mistake: 'Glänzende Oberfläche für Design-Messe', explanation: 'Glänzender PLA-Druck wirkt auf einer Design-Messe wie Spielzeug.', prevention: 'Schleifen + Grundieren für matte, professionelle Oberfläche. Aufpreis ca. 30%.' },
    { mistake: 'Standard-Display statt individuelles Design', explanation: 'Auf der Gustav fällt ein Standardregal negativ auf.', prevention: 'Wir entwerfen individuelle Displayhalter, die zum Markenauftritt passen.' },
    { mistake: 'Lieferung nur nach Österreich geplant', explanation: 'Vorarlberger Aussteller stellen oft auch in der Schweiz aus.', prevention: 'Wir liefern problemlos in die Schweiz und nach Süddeutschland – gleiche Konditionen.' },
  ],
};

const burgenland: ExtendedMesseSections = {
  typicalProjects: [
    {
      title: 'Weinmessen – Vinothek-Displays',
      description: 'Burgenländische Winzer zeigen ihre Vinothek-Konzepte als 3D-Modell. Raumfluss, Verkostungsbereiche und Lagerung werden sichtbar.',
      whyPrint: 'Ein Vinothek-Modell auf einer Weinmesse zeigt dem Besucher: Hier wird nicht nur Wein produziert, sondern erlebt.',
      requirements: ['Maßstab 1:50', 'Schnittdarstellung', 'PLA+ oder PETG', 'Standard-Lieferung'],
    },
    {
      title: 'Inform Oberwart – Regionale Aussteller',
      description: 'Burgenländische KMU zeigen Produkte und Dienstleistungen auf der Inform. 3D-gedruckte Produktmodelle und Displayhalter heben den Stand ab.',
      whyPrint: 'Ein individuelles Modell am Stand signalisiert Innovationskraft. Standarddisplays tun das nicht.',
      requirements: ['Individuelle Form', 'Robust', 'Budget ab €30', 'Lieferung via Wien/A4'],
    },
    {
      title: 'Tourismusmodelle für Neusiedler See',
      description: 'Tourismusverbände zeigen Hotelmodelle und Freizeitanlagen für Investorenpräsentationen auf regionalen Events.',
      whyPrint: 'Investoren für Tourismusprojekte wollen das Gesamtkonzept sehen. Ein Modell mit Landschaftskontext überzeugt.',
      requirements: ['Maßstab 1:200', 'Mit Landschaft', 'PLA+ weiß', 'Standard-Lieferung'],
    },
  ],
  projectWorkflow: {
    headline: 'Messemodelle fürs Burgenland – via Wien/A4',
    subheadline: 'Termingerechte Lieferung für Oberwart, Neusiedl und das ganze Burgenland',
    steps: [
      { title: 'Messetermin & Modelltyp', description: 'Inform Oberwart, Weinmesse oder Tourismusevent? Jeder Anlass hat andere Anforderungen.', context: 'Weinmessen brauchen andere Modelle als Gewerbemessen – wir kennen den Unterschied.' },
      { title: 'Material & Budget', description: 'Transparentes Angebot in 6h. Für kleine Budgets: PLA+ ab €30 pro Modell.', context: 'Burgenländische Direktvermarkter schätzen ehrliche, niedrige Preise.' },
      { title: 'Fertigung', description: 'Druck und Montage in Gunskirchen. Qualitätskontrolle vor Versand.', context: 'Jedes Modell wird fotografiert und dokumentiert – Nachweis für den Versandzustand.' },
      { title: 'Lieferung via Wien/A4', description: 'Bruchsicher verpackt, Versand über Wien ins gesamte Burgenland.', context: 'Auch Lieferung direkt zum Messegelände Oberwart ist möglich.' },
    ],
  },
  customerPriorities: [
    { statement: 'Weinbau-Ästhetik', explanation: 'Vinothek-Modelle sollen die Wertigkeit des Weinerlebnisses transportieren.' },
    { statement: 'Budget für Kleinbetriebe', explanation: 'Burgenländische KMU und Direktvermarkter haben begrenzte Messebudgets.' },
    { statement: 'Zuverlässige Lieferung', explanation: 'Burgenland ist etwas weiter weg – aber die A4 macht Express am nächsten Tag möglich.' },
  ],
  commonMistakes: [
    { mistake: 'Vinothek ohne Schnittdarstellung', explanation: 'Der Raumfluss ist das Herzstück einer Vinothek. Ohne Schnitt sieht man nur die Außenhülle.', prevention: 'Wir empfehlen Schnittmodelle, die Verkostung, Lager und Produktion zeigen.' },
    { mistake: 'Zu filigran für Messetransport', explanation: 'Der Transport über Wien dauert. Feine Teile brechen.', prevention: 'Verstärkte Verpackung und robustere Druckeinstellungen für Burgenland-Lieferungen.' },
    { mistake: 'Kein Kontext bei Tourismusmodellen', explanation: 'Ein Hotel ohne Seelandschaft verliert seine Wirkung.', prevention: 'Wir empfehlen Landschaftssockel mit vereinfachter See-/Hügeldarstellung.' },
  ],
};

// Stadt-Referenzen
const linz = oberoesterreich;
const wels = oberoesterreich;
const graz = steiermark;
const klagenfurt = kaernten;
const villach = kaernten;
const stPoelten = niederoesterreich;
const innsbruck = tirol;
const dornbirn = vorarlberg;

const allSections: Record<string, ExtendedMesseSections> = {
  wien, niederoesterreich, oberoesterreich, steiermark, kaernten,
  salzburg, tirol, vorarlberg, burgenland,
  linz, wels, graz, klagenfurt, villach,
  'st-poelten': stPoelten, innsbruck, dornbirn,
};

export const getExtendedMesseSections = (region: string): ExtendedMesseSections | undefined =>
  allSections[region];
