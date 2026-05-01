// Extended data for regional Architekturmodell pages
import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

export interface RegionalArchitekturExtendedData {
  caseStudy: CaseStudyData;
  materials: MaterialRecommendation[];
  industryFocus: string;
  uniqueSellingPoints: string[];
  faqs?: { question: string; answer: string }[];
  introText?: string;
}

const defaultMaterials: MaterialRecommendation[] = [
  {
    name: "PLA Premium Weiß",
    description: "Der Klassiker für Architekturmodelle. Saubere, matte Oberfläche ideal für Studien- und Wettbewerbsmodelle.",
    bestFor: ["Studienmodelle", "Wettbewerbsmodelle", "Clean Design"],
    icon: "palette"
  },
  {
    name: "PETG Transparent",
    description: "Für Glasflächen und Fassadenelemente. Halbtransparent für moderne Architektur mit großen Glasfronten.",
    bestFor: ["Glasfassaden", "Fensterelemente", "Moderne Architektur"],
    icon: "shield"
  },
  {
    name: "PLA Leichtbau",
    description: "Optimiert für großformatige Modelle. Minimales Gewicht bei maximaler Stabilität – ideal für Transport.",
    bestFor: ["Großmodelle", "Städtebaumodelle", "Transportoptimiert"],
    icon: "feather"
  }
];

export const regionalArchitekturExtendedData: Record<string, RegionalArchitekturExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Wettbewerbsmodell für Wiener Stadtentwicklungsprojekt",
      industry: "Stadtplanung & Architektur",
      challenge: "Ein renommiertes Wiener Architekturbüro benötigte ein detailliertes Modell im Maßstab 1:200 für einen städtebaulichen Wettbewerb. Das Ensemble aus mehreren Gebäuden musste die Umgebungsbebauung einbeziehen.",
      solution: "Wir fertigten ein modulares Stadtmodell mit abnehmbaren Gebäudeteilen. Die Bestandsbebauung wurde in Grau, der Neubau in Weiß realisiert. Transparente PETG-Elemente zeigten die Glasfassaden.",
      result: "Das Modell wurde zum Herzstück der Wettbewerbspräsentation. Die Jury lobte die Klarheit der räumlichen Darstellung. Das Büro erreichte den 2. Platz.",
      specs: { size: "80 x 60 x 30 cm", material: "PLA weiß/grau + PETG transparent", time: "7 Werktage" },
      quote: "Die modulare Bauweise war genial – wir konnten verschiedene Varianten direkt in der Präsentation zeigen."
    },
    materials: [
      { name: "PLA Premium Weiß", description: "Perfekt für Wiener Architektur. Saubere Oberflächen für elegante Stadtmodelle und Wettbewerbsmodelle.", bestFor: ["Wettbewerbsmodelle", "Stadtmodelle", "Präsentationsmodelle"], icon: "palette" },
      { name: "PETG Transparent", description: "Für Glasfassaden moderner Wiener Architektur. Klare Optik für Büro- und Wohnbauten.", bestFor: ["Glasfassaden", "Moderne Architektur", "Bürogebäude"], icon: "shield" },
      { name: "PLA Grau", description: "Ideal für Bestandsbebauung und Umgebungsmodelle. Kontrastreiche Darstellung in Stadtmodellen.", bestFor: ["Umgebungsmodelle", "Bestandsgebäude", "Kontextmodelle"], icon: "feather" }
    ],
    industryFocus: "Stadtplanung & Architektur in Wien",
    uniqueSellingPoints: ["Erfahrung mit Wiener Architekturbüros", "Modulare Stadtmodelle für Wettbewerbe", "Express für Wettbewerbstermine"],
    introText: "Wien ist die Bundeshauptstadt und einer der bedeutendsten Architekturstandorte Mitteleuropas. Zwischen historischen Gründerzeitbauten und modernen Stadtentwicklungsprojekten wie der Seestadt Aspern oder dem Nordbahnhofviertel stehen Wiener Architekturbüros vor der Herausforderung, ihre Entwürfe in einem anspruchsvollen städtischen Kontext zu präsentieren. Die MA 21 (Stadtteilplanung) und zahlreiche Investorenprojekte setzen auf physische Modelle als Entscheidungsgrundlage.",
    faqs: [
      { question: "Können Wiener Stadtentwicklungsprojekte mit Umgebungsbebauung dargestellt werden?", answer: "Ja – modulare Stadtmodelle mit Bestandsbebauung in Grau und Neubauten in Weiß sind unsere Spezialität. Die herausnehmbaren Gebäudeteile ermöglichen die Darstellung verschiedener Planungsvarianten, ideal für Bürgerbeteiligungen und MA 21-Präsentationen." },
      { question: "Gibt es persönliche Übergabe in Wien?", answer: "Ja, auf Anfrage ist persönliche Übergabe in Wien möglich. Standardversand nach Wien dauert 5-7 Werktage, Express in 24h für Wettbewerbstermine." },
      { question: "Welche Maßstäbe eignen sich für Wiener Investorenprojekte?", answer: "Für Investorenpräsentationen empfehlen wir 1:100 für Einzelgebäude und 1:200 für Quartiersprojekte. Transparente PETG-Glasflächen und farbliche Akzente steigern die Überzeugungskraft gegenüber Investoren erheblich." },
      { question: "Wie werden Modelle für TU Wien oder Akademie-Projekte preislich behandelt?", answer: "Studienmodelle für Universitätsprojekte starten ab €20. Wir bieten keine Studentenrabatte, aber unsere Studienmodelle sind bereits preislich optimiert – ideal für Semesterentwürfe und Abschlussprojekte." },
      { question: "Kann eine Wettbewerbsabgabe über Nacht realisiert werden?", answer: "Ja – unser Express-Service ermöglicht die Fertigung in 24 Stunden (50% Aufpreis). Bestellung bis 10 Uhr, Versand am selben Abend, Lieferung nächsten Tag in Wien." }
    ]
  },

  'oberoesterreich': {
    caseStudy: {
      title: "Industriegebäude-Modell für OÖ Unternehmen",
      industry: "Industrie & Gewerbe",
      challenge: "Ein oberösterreichisches Unternehmen plante einen Neubau seiner Produktionshalle und benötigte ein Präsentationsmodell für die Gemeinderatssitzung.",
      solution: "Wir fertigten ein detailliertes Modell im Maßstab 1:100 mit aufklappbarem Dach zur Visualisierung der Innenraumgestaltung. Die Umgebung wurde als Geländemodell ergänzt.",
      result: "Same-Day-Lieferung nach Wels. Das Modell überzeugte den Gemeinderat. Die Baugenehmigung wurde in Rekordzeit erteilt.",
      specs: { size: "60 x 40 x 20 cm", material: "PLA weiß + Geländemodell", time: "4 Werktage + Same-Day Lieferung" },
      quote: "Dank der persönlichen Abholung in Gunskirchen hatten wir das Modell rechtzeitig zur Sitzung. Baugenehmigung erhalten!"
    },
    materials: defaultMaterials,
    industryFocus: "Industrie- & Gewerbebau in Oberösterreich",
    uniqueSellingPoints: ["Lokaler Hersteller – nur 10 Minuten zur Abholung", "Same-Day-Service für dringende Präsentationen", "Erfahrung mit Industriebauten"],
    introText: "Oberösterreich ist Industrieland – und genau das spiegelt sich in den Architekturanforderungen wider. Gewerbeparks, Produktionshallen, Logistikzentren: OÖ-Architekturbüros planen Gebäude, die Funktion und Wirtschaftlichkeit verbinden müssen. Unser Standort in Gunskirchen macht uns zum idealen Partner: persönliche Abholung in 10 Minuten, Same-Day-Service ohne Aufpreis, gemeinsame Abstimmung vor Ort.",
    faqs: [
      { question: "Kann ich das Modell in Gunskirchen persönlich abholen?", answer: "Ja – persönliche Abholung ist jederzeit möglich. Unser Standort liegt in Gunskirchen, nur 10 Minuten von Wels und 20 Minuten von Linz entfernt. Qualitätsprüfung gemeinsam vor Ort." },
      { question: "Sind aufklappbare oder zerlegbare Modelle möglich?", answer: "Absolut – das ist eine unserer Spezialitäten. Modelle mit abnehmbaren Dächern, herausnehmbaren Geschossen oder aufklappbaren Fassaden zeigen den Entwurf auf einer neuen Ebene. Besonders beliebt bei Gemeinderatspräsentationen." },
      { question: "Wie schnell ist ein Same-Day-Modell machbar?", answer: "Studienmodelle und kleine Wettbewerbsmodelle können in wenigen Stunden gedruckt werden. Bei Bestellung bis 8 Uhr ist Abholung ab 16 Uhr am selben Tag realistisch. Größere Modelle brauchen 2-3 Tage." },
      { question: "Welche Gewerbebau-Modelltypen sind am häufigsten?", answer: "In OÖ dominieren Produktionshallen (1:200), Gewerbeparks mit mehreren Gebäuden (1:500) und Bürokomplexe (1:100). Häufig werden Parzellenpläne und Verkehrserschließung mit dargestellt." }
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Wohnbauprojekt-Modell für Grazer Architekturbüro",
      industry: "Wohnbau",
      challenge: "Ein Grazer Architekturbüro benötigte Modelle dreier Wohnbauvarianten für eine Investorenpräsentation. Die Varianten mussten vergleichbar und professionell dargestellt werden.",
      solution: "Wir fertigten drei Modelle im gleichen Maßstab (1:100) mit identischer Umgebungsdarstellung. Unterschiedliche Farbakzente machten die Varianten auf den ersten Blick unterscheidbar.",
      result: "Die parallele Darstellung überzeugte die Investoren. Variante B wurde gewählt, das Projekt mit 45 Wohneinheiten realisiert.",
      specs: { size: "3x 35 x 25 x 20 cm", material: "PLA weiß + farbige Akzente", time: "6 Werktage" },
      quote: "Drei Varianten parallel zu vergleichen war der Schlüssel. So eine schnelle Umsetzung wäre im Modellbau unmöglich."
    },
    materials: defaultMaterials,
    industryFocus: "Wohnbau & Architektur in der Steiermark",
    uniqueSellingPoints: ["Express-Lieferung nach Graz", "Parallele Variantenmodelle möglich", "TU Graz Kooperationserfahrung"],
    introText: "Die Steiermark vereint den urbanen Architekturmarkt von Graz mit ländlichen Gemeindeprojekten. Die TU Graz als technische Hochschule sorgt für innovationsgetriebene Architekturansätze: Smart-City-Quartiere, nachhaltige Wohnbauprojekte, und experimentelle Entwürfe. Gleichzeitig brauchen steirische Gemeinden Modelle für Schul- und Kulturbauten. Die Vielfalt erfordert flexible Lösungen – genau unser Metier.",
    faqs: [
      { question: "Können mehrere Entwurfsvarianten gleichzeitig gedruckt werden?", answer: "Ja – parallele Variantenmodelle kosten ca. 20% mehr als ein einzelnes Modell. Alle Varianten werden im gleichen Maßstab und Materialstil gefertigt, sodass ein direkter Vergleich beim Bauherrn oder Investor möglich ist." },
      { question: "Wie wird nach Graz geliefert?", answer: "Versand über die A9 Pyhrnautobahn. Standardlieferung 5-7 Werktage, Express in 24h. Versand mit Tracking und versicherter Lieferung." },
      { question: "Werden Projekte der TU Graz unterstützt?", answer: "Wir haben Erfahrung mit Semesterentwürfen, Diplomarbeiten und Forschungsprojekten der TU Graz. Studienmodelle starten ab €20, größere Modelle nach Aufwand." },
      { question: "Was kostet ein Variantenvergleich mit drei Modellen?", answer: "Drei Wohnbau-Modelle im Maßstab 1:100 liegen typischerweise zwischen €200-400 insgesamt. Die identische Umgebungsdarstellung und Farbcodierung sind im Preis enthalten." }
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Sanierungsmodell für Salzburger Altstadt",
      industry: "Denkmalpflege & Sanierung",
      challenge: "Ein Salzburger Architekturbüro plante die Sanierung eines denkmalgeschützten Gebäudes in der UNESCO-Altstadt. Das Modell musste den Bestand und die geplanten Änderungen zeigen.",
      solution: "Wir erstellten ein zweiteiliges Modell: den Bestand in grauem PLA und die geplante Sanierung als weißen Overlay. Beide Teile konnten übereinandergelegt werden.",
      result: "Das Modell überzeugte die Denkmalschutzbehörde. Die Sanierungsgenehmigung wurde erteilt.",
      specs: { size: "45 x 35 x 40 cm", material: "PLA grau + weiß (zweiteilig)", time: "6 Werktage" },
      quote: "Bestand und Planung übereinander zu legen war brillant. Die Behörde war sofort überzeugt."
    },
    materials: [
      { name: "PLA Premium Weiß", description: "Für Neubauten und Sanierungskonzepte. Klare Formensprache für Salzburger Architektur.", bestFor: ["Sanierungsmodelle", "Neubaupläne", "Präsentationsmodelle"], icon: "palette" },
      { name: "PLA Grau", description: "Für Bestandsgebäude und historische Kontextmodelle. Authentische Darstellung.", bestFor: ["Bestandsaufnahme", "Historische Gebäude", "Kontextmodelle"], icon: "shield" },
      { name: "PETG Transparent", description: "Für moderne Ergänzungen und Glaselemente in historischem Kontext.", bestFor: ["Glasanbauten", "Moderne Eingriffe", "Dachverglasungen"], icon: "feather" }
    ],
    industryFocus: "Sanierung & Denkmalpflege in Salzburg",
    uniqueSellingPoints: ["Erfahrung mit denkmalgeschützten Gebäuden", "Bestand-/Neubau-Overlay-Technik", "Schnelle Lieferung über A1"],
    introText: "Salzburg ist geprägt von historischer Bausubstanz und strengem Denkmalschutz. Die UNESCO-Altstadt stellt an Sanierungsprojekte höchste Anforderungen – jeder Eingriff muss der Altstadterhaltungskommission vorgelegt werden. Unsere Overlay-Technik, bei der Bestand und Planung als separate Modellschichten übereinandergelegt werden, hat sich als besonders überzeugend für Behördenpräsentationen erwiesen.",
    faqs: [
      { question: "Was ist die Overlay-Technik für Sanierungsmodelle?", answer: "Wir drucken den Gebäudebestand in Grau und die geplante Sanierung in Weiß als separates Bauteil. Beide Teile können übereinandergelegt werden – die Behörde sieht auf einen Blick, was sich ändert und was erhalten bleibt." },
      { question: "Eignen sich 3D-Modelle für Denkmalschutzbehörden?", answer: "Sehr gut sogar. Physische Modelle zeigen räumliche Proportionen, die kein Plan vermitteln kann. Besonders bei Dachaufbauten, Anbauten oder Fassadenänderungen sind Modelle ein starkes Argument in der Kommissionssitzung." },
      { question: "Wie schnell geht die Lieferung nach Salzburg?", answer: "Standardlieferung über A1 Westautobahn: 5-7 Werktage. Express in 24h möglich. Salzburg liegt verkehrstechnisch günstig – die Lieferung ist schnell und unkompliziert." },
      { question: "Können historische Fassadendetails originalgetreu dargestellt werden?", answer: "Ja – wir drucken mit 0.1mm Schichthöhe, was feine Stuckprofile, Fensterumrahmungen und Gesimse ab ca. 1mm realem Maßstab sichtbar macht. Für 1:50-Modelle sind auch feinste Details darstellbar." }
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Holzbau-Architekturmodell für Kärntner Planer",
      industry: "Holzbau & Architektur",
      challenge: "Ein Kärntner Architekturbüro plante ein innovatives Holzhaus und benötigte ein Modell, das die Holzkonstruktion authentisch darstellt.",
      solution: "Wir verwendeten holzfarbenes PLA mit sichtbarer Maserung. Das Modell zeigte die Konstruktion als Schnittmodell mit freiliegender Holzstruktur.",
      result: "Der Bauherr war begeistert von der authentischen Darstellung. Das Haus wurde wie geplant realisiert.",
      specs: { size: "50 x 40 x 30 cm", material: "PLA Holzoptik + weiß", time: "5 Werktage" },
      quote: "Die Holzoptik war erstaunlich authentisch. Unser Bauherr konnte sich das Haus perfekt vorstellen."
    },
    materials: [
      { name: "PLA Holzoptik", description: "Authentische Holzmaserung für Kärntner Holzbau-Architektur. Naturnahes Erscheinungsbild.", bestFor: ["Holzhäuser", "Alpine Architektur", "Holzkonstruktionen"], icon: "palette" },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Holzbau & alpine Architektur in Kärnten",
    uniqueSellingPoints: ["Holzoptik-Materialien für authentische Modelle", "Erfahrung mit alpiner Architektur", "Schnittmodelle für Konstruktionsdarstellungen"],
    introText: "Kärnten hat eine starke Holzbau-Tradition. Die Region rund um Klagenfurt und Villach ist Heimat zahlreicher Holzbau-Architekten, die Wohnhäuser, Hotels und öffentliche Gebäude in Holzbauweise planen. Unsere Holzoptik-Materialien mit sichtbarer Maserung haben sich als besonders überzeugend erwiesen – Bauherren erleben das natürliche Materialkonzept bereits am Modell.",
    faqs: [
      { question: "Wie realistisch wirkt das Holzoptik-Material?", answer: "Unser PLA Holzoptik enthält echte Holzfasern und zeigt eine sichtbare Maserung. Im Maßstab 1:50 bis 1:100 wirkt das Material täuschend echt – ideal für Holzbau-Projekte, bei denen der Materialcharakter entscheidend ist." },
      { question: "Können Schnittmodelle die Holzkonstruktion zeigen?", answer: "Ja – Schnittmodelle mit freiliegender Tragstruktur gehören zu unseren Spezialitäten. Wände werden teilweise offen gestaltet, damit Balken, Stützen und Verbindungen sichtbar werden." },
      { question: "Eignen sich Modelle für Tourismusbauten am Wörthersee?", answer: "Absolut. Für Hotelprojekte und Tourismusbauten erstellen wir Modelle mit Geländeintegration und Umgebungsdarstellung. Seeflächen in blau-transparentem PETG sind besonders wirkungsvoll." },
      { question: "Wie wird nach Kärnten geliefert?", answer: "Versand über A10 Tauernautobahn mit robuster Alpenverpackung. Standardlieferung 5-7 Werktage, Express in 24h für Wettbewerbstermine." }
    ]
  },

  'tirol': {
    caseStudy: {
      title: "Bergstation-Architekturmodell für Tiroler Seilbahnprojekt",
      industry: "Infrastruktur & alpine Architektur",
      challenge: "Ein Innsbrucker Architekturbüro entwarf eine neue Bergstation und brauchte ein topografisches Modell mit integriertem Gebäude für die Genehmigungspräsentation.",
      solution: "Basierend auf Höhendaten erstellten wir ein maßstabsgetreues Geländemodell mit integrierter Bergstation. Das Gebäude war abnehmbar, um die Geländeintegration zu zeigen.",
      result: "Das Modell war entscheidend für die Baugenehmigung. Die Behörde konnte die Landschaftsintegration sofort nachvollziehen.",
      specs: { size: "100 x 70 x 35 cm", material: "PLA weiß/grau + Geländemodell", time: "8 Werktage" },
      quote: "Ohne das Geländemodell hätte die Behörde die Landschaftsintegration nie so schnell verstanden."
    },
    materials: [
      { name: "PLA Alpine Weiß", description: "Perfekt für Bergarchitektur und alpine Geländemodelle. Authentische Darstellung.", bestFor: ["Bergstationen", "Geländemodelle", "Alpine Architektur"], icon: "palette" },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Alpine Architektur & Infrastruktur in Tirol",
    uniqueSellingPoints: ["Topografische Geländemodelle aus Höhendaten", "Erfahrung mit Bergstationen", "Robuster Alpentransport"],
    introText: "Tirol ist ein Sonderfall in der Architektur: Jedes Gebäude muss sich in eine anspruchsvolle alpine Topografie einfügen. Bergstationen, Hotels in Steilhanglagen, Seilbahntrassen – die Herausforderung liegt in der Geländeintegration. Unsere topografischen Modelle basieren auf echten Höhendaten und zeigen exakt, wie sich ein Gebäude in die Landschaft einfügt. Für Genehmigungsbehörden und Naturschutzbeiräte oft das entscheidende Argument.",
    faqs: [
      { question: "Wie werden topografische Geländemodelle erstellt?", answer: "Wir nutzen digitale Höhendaten (z.B. aus Open Data Tirol oder Vermessungsbüros) und erstellen daraus ein maßstabsgetreues 3D-Gelände. Das Gebäude wird abnehmbar integriert, damit die Landschaftswirkung mit und ohne Bau sichtbar ist." },
      { question: "Welche Maßstäbe eignen sich für Hanglagen?", answer: "Für Einzelgebäude in Hanglagen empfehlen wir 1:100, für Gebietsprojekte 1:500. Bei Seilbahnprojekten oder Skigebiets-Ausbauten arbeiten wir oft im Maßstab 1:1000 mit markierten Trassen." },
      { question: "Übersteht das Modell den Transport über den Brenner?", answer: "Ja – wir verwenden verstärkte Verpackung mit Schaumstoff-Einlagen speziell für Alpentransport. Großformatige Modelle werden in zerlegbare Segmente aufgeteilt und mit Passstiften exakt zusammengefügt." },
      { question: "Können Modelle für den Naturschutzbeirat gefertigt werden?", answer: "Ja. Für Naturschutzbeirats-Sitzungen fertigen wir Modelle, die den Landschaftskontext besonders betonen: Bestandsvegetation, Geländelinien und bestehende Infrastruktur werden mit dargestellt." }
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Holzbau-Wettbewerbsmodell für Vorarlberger Architekten",
      industry: "Baukultur Vorarlberg",
      challenge: "Ein Vorarlberger Architekturbüro – bekannt für die regionale Baukultur – benötigte ein Wettbewerbsmodell, das die innovative Holzkonstruktion eines öffentlichen Gebäudes zeigt.",
      solution: "Wir druckten ein Modell im Maßstab 1:50 mit sichtbarer Konstruktion. Die Holzelemente in Holzoptik-PLA, die Glasfassade in transparentem PETG.",
      result: "Das Modell gewann den 1. Platz im Wettbewerb. Die Jury hob die Qualität der Modelldarstellung hervor.",
      specs: { size: "55 x 40 x 30 cm", material: "PLA Holzoptik + PETG transparent", time: "5 Werktage" },
      quote: "Die Kombination aus Holzoptik und Transparenz hat die Jury überzeugt. Wettbewerb gewonnen!"
    },
    materials: [
      { name: "PLA Holzoptik", description: "Für Vorarlberger Baukultur. Authentische Darstellung der regionalen Holzbauarchitektur.", bestFor: ["Holzkonstruktionen", "Vorarlberger Baukultur", "Öffentliche Gebäude"], icon: "palette" },
      { name: "PETG Transparent", description: "Für großflächige Glasfassaden der modernen Vorarlberger Architektur.", bestFor: ["Glasfassaden", "Lichtdurchflutete Räume", "Moderne Architektur"], icon: "shield" },
      { name: "PLA Matt Schwarz", description: "Für kontraststarke Wettbewerbsmodelle. Edle Optik für Präsentationen.", bestFor: ["Wettbewerbsmodelle", "Kontrastmodelle", "Designarchitektur"], icon: "feather" }
    ],
    industryFocus: "Baukultur & Holzbau in Vorarlberg",
    uniqueSellingPoints: ["Erfahrung mit Vorarlberger Baukultur", "Holzoptik-Materialien verfügbar", "Grenznahe Lieferung CH/DE"],
    introText: "Vorarlberg gilt als die Architektur-Hochburg Österreichs. Die Bregenzerwälder Baukultur, die Rheintal-Moderne und die internationale Strahlkraft Vorarlberger Büros setzen höchste Maßstäbe an Modellqualität. Hier wird Architektur als Gesamtkunstwerk verstanden – und das Modell muss diesen Anspruch widerspiegeln. Unsere Kombination aus Holzoptik-Materialien und transparentem PETG trifft den Nerv dieser Designkultur.",
    faqs: [
      { question: "Können Vorarlberger Holzbau-Details im Modell dargestellt werden?", answer: "Ja – in 1:50 werden Holzbalken, Fensterrahmen und konstruktive Details sichtbar. Wir nutzen PLA Holzoptik mit echter Holzfaser für authentische Materialwirkung. Ideal für die Darstellung typischer Bregenzerwälder Baukultur." },
      { question: "Ist grenznahe Lieferung in die Schweiz oder nach Deutschland möglich?", answer: "Ja – wir liefern regelmäßig nach Vorarlberg, Liechtenstein und die angrenzende Schweiz/Süddeutschland. Zollfreie EU-Lieferung nach Vorarlberg in 5-7 Tagen, Express in 24h." },
      { question: "Welche Materialien empfehlen Sie für Wettbewerbsmodelle?", answer: "Für Vorarlberger Wettbewerbe: PLA Matt Schwarz für reduzierten, eleganten Look oder PLA Weiß für den klassischen Wettbewerbsstil. Bei Holzkonstruktionen: PLA Holzoptik für die Tragstruktur, PETG Transparent für Glasfassaden." },
      { question: "Wie detailliert können 1:50-Modelle werden?", answer: "In 1:50 werden Fensterprofile, Dachabschlüsse, Balkongeländer und Fassadengliederungen sichtbar. Mit 0.1mm Auflösung sind Details ab ca. 0.5mm Modellmaß darstellbar – das entspricht 25mm in der Realität." }
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      title: "Gemeindezentrum-Modell für NÖ Architekturwettbewerb",
      industry: "Kommunalbau",
      challenge: "Eine niederösterreichische Marktgemeinde schrieb einen Wettbewerb für ein neues Gemeindezentrum aus. Das teilnehmende Architekturbüro brauchte ein Modell, das die Einbettung in den Ortskern zeigt – Kirche, Hauptplatz und Bestandsgebäude als Kontext.",
      solution: "Wir druckten den Neubau in Weiß und das Kontextmodell (Kirche, umliegende Häuser, Platzfläche) in Hellgrau. Das modulare Design erlaubte das Herausnehmen des Neubaus zur besseren Vergleichbarkeit.",
      result: "Das Büro gewann den Wettbewerb. Die Gemeinderäte lobten, dass die Einbettung in den Ortskern erstmals wirklich greifbar wurde.",
      specs: { size: "55 x 45 x 18 cm", material: "PLA weiß + grau, modular", time: "5 Werktage" },
      quote: "Im Gemeinderat konnte jeder sofort sehen, wie sich der Neubau ins Ortsbild einfügt. Das Modell hat den Ausschlag gegeben."
    },
    materials: defaultMaterials,
    industryFocus: "Kommunalbau & Wohnbau in Niederösterreich",
    uniqueSellingPoints: ["Zentrale Lage zwischen Wien und Linz", "Erfahrung mit Gemeinde-Projekten", "Flexible Lieferoptionen"],
    introText: "Niederösterreich ist das flächengrößte Bundesland und geprägt von kommunalen Bauprojekten: Gemeindezentren, Kindergärten, Schulen, Aufbahrungshallen. Die enge Verzahnung von Dorfkern und Neubau stellt besondere Anforderungen an Architekturmodelle – der Kontext ist hier wichtiger als in der Stadt. Deshalb setzen wir bei NÖ-Projekten auf modulare Modelle mit Umgebungsdarstellung.",
    faqs: [
      { question: "Wie werden Gemeinde-Kontextmodelle aufgebaut?", answer: "Der Neubau wird in Weiß, die Umgebung (Kirche, Bestandsgebäude, Platz) in Grau gedruckt. Das Kontextmodell bildet die Basis, der Neubau wird als separates Modul eingesetzt – herausnehmbar für Vergleichszwecke." },
      { question: "Eignen sich Modelle für Gemeinderats-Präsentationen?", answer: "Perfekt. Gemeinderäte sind oft keine Baufachleute – ein physisches Modell vermittelt räumliche Zusammenhänge, die Grundrisse und Visualisierungen nicht leisten können. Besonders die Einbettung in den Ortskern wird greifbar." },
      { question: "Wie schnell kommt ein Modell nach Niederösterreich?", answer: "Über A1/S33 in 5-7 Werktagen. Express in 24h für Wettbewerbstermine. Nach St. Pölten über A1 besonders schnell." },
      { question: "Was kosten Modelle für Einfamilienhäuser?", answer: "Einfamilienhäuser im Maßstab 1:100 kosten typischerweise €80-150 inkl. Sockel. Mit Grundstücksdarstellung und Einfahrt ca. €120-200. Ideal für Bauherren-Gespräche im Speckgürtel Wien." }
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Weingut-Architekturmodell für burgenländischen Investor",
      industry: "Wein & Architektur",
      challenge: "Ein burgenländisches Weingut plante einen architektonisch anspruchsvollen Neubau für Verkostungsräume und benötigte ein Modell für die Investorenpräsentation.",
      solution: "Wir fertigten ein Modell im Maßstab 1:50 mit Weinberglandschaft. Das Gebäude wurde in weißem PLA, die umliegenden Weinberge stilisiert in Grün dargestellt.",
      result: "Das Modell überzeugte zwei Investoren. Der Bau konnte planmäßig starten.",
      specs: { size: "70 x 50 x 25 cm", material: "PLA weiß + Landschaftselemente", time: "6 Werktage" },
      quote: "Mit dem Modell konnten wir die Vision greifbar machen. Die Investoren sagten sofort zu."
    },
    materials: defaultMaterials,
    industryFocus: "Weingut-Architektur & Tourismus im Burgenland",
    uniqueSellingPoints: ["Erfahrung mit Weingut-Architektur", "Landschaftsmodelle möglich", "Schnelle Lieferung über Wien"],
    introText: "Das Burgenland ist geprägt vom Weinbau und Tourismus rund um den Neusiedler See. Die Architektur der Region bewegt sich zwischen modernen Weingut-Neubauten, Tourismusbauten und der Sanierung pannonischer Dorfstrukturen. Besonders Weingüter investieren in architektonisch ambitionierte Verkostungsräume und Vinotheken – Modelle mit Landschaftskontext (Weinberge, See-Nähe) sind hier entscheidend.",
    faqs: [
      { question: "Können Weinberglandschaften im Modell dargestellt werden?", answer: "Ja – wir erstellen stilisierte Landschaftsmodelle mit grünen PLA-Elementen für Rebflächen und braunem PLA für Wege. Die Geländeform (leichte Hügel) wird maßstabsgetreu aus den Höhendaten übernommen." },
      { question: "Eignen sich Modelle für Weingut-Investorenpräsentationen?", answer: "Hervorragend. Investoren schätzen greifbare Modelle, die Architektur und Landschaftskontext verbinden. Ein 1:50-Modell eines Weingut-Neubaus mit Umgebung kostet typischerweise €200-350." },
      { question: "Wie wird ins Burgenland geliefert?", answer: "Versand über Wien/A4. Standardlieferung 5-7 Werktage, Express in 24h. Die Nähe zu Wien sorgt für unkomplizierte Logistik." },
      { question: "Welche Tourismusbauten-Modelle sind möglich?", answer: "Vom Thermenhotel am See über Ferienhaussiedlungen bis zu Veranstaltungsräumen – wir haben Erfahrung mit allen Tourismus-Gebäudetypen. Wasserflächen in blau-transparentem PETG verleihen See-Projekten besondere Wirkung." }
    ]
  },

  'linz': {
    caseStudy: {
      title: "Stadtentwicklungs-Modell für Linzer Architekturbüro",
      industry: "Stadtplanung",
      challenge: "Ein Linzer Büro benötigte ein Quartiers-Modell im Maßstab 1:500 für eine Bürgerbeteiligung. Das Modell musste verschiedene Bauphasen zeigbar machen.",
      solution: "Wir fertigten ein modulares Modell mit herausnehmbaren Bauphasen. Jede Phase war farblich codiert – Same-Day-Lieferung nach Linz.",
      result: "Das interaktive Modell ermöglichte konstruktive Bürgerbeteiligung. Das Projekt wurde ohne Einsprüche genehmigt.",
      specs: { size: "90 x 70 x 20 cm", material: "PLA mehrfarbig, modular", time: "5 Werktage + Same-Day" },
      quote: "Die Bürger konnten die Entwicklung Schritt für Schritt nachvollziehen. Keine Einsprüche – ein Novum!"
    },
    materials: defaultMaterials,
    industryFocus: "Stadtplanung & Kreativwirtschaft in Linz",
    uniqueSellingPoints: ["Nur 20 Minuten entfernt", "Same-Day-Delivery nach Linz", "Modulare Modelle für Bürgerbeteiligung"],
    introText: "Linz befindet sich im Wandel: vom Industriestandort zur Kulturhauptstadt. Die Tabakfabrik, das Ars Electronica Center und zahlreiche Stadtentwicklungsprojekte prägen die Architekturlandschaft. Linzer Büros arbeiten an der Schnittstelle von Industrie-Konversion und urbanem Wohnen. Unser Vorteil: nur 20 Minuten Fahrzeit – Same-Day-Delivery ohne Aufpreis.",
    faqs: [
      { question: "Wie funktioniert Same-Day-Delivery nach Linz?", answer: "Unser Standort Gunskirchen liegt nur 20 Minuten von Linz entfernt. Studienmodelle, die bis 8 Uhr beauftragt werden, sind ab Nachmittag abholbereit. Persönliche Übergabe in Linz auf Anfrage möglich." },
      { question: "Können Bürgerbeteiligungsmodelle interaktiv gestaltet werden?", answer: "Ja – modulare Modelle mit herausnehmbaren Bauphasen ermöglichen es Bürgern, verschiedene Entwicklungsszenarien nachzuvollziehen. Farbcodierung macht die Phasen auf einen Blick unterscheidbar." },
      { question: "Welche Maßstäbe für Quartiersentwicklung?", answer: "Für Quartiere empfehlen wir 1:500 (Überblick) oder 1:200 (detailliert). Bei Bürgerbeteiligungen hat sich 1:500 bewährt – groß genug für Verständlichkeit, kompakt genug für den Präsentationsraum." },
      { question: "Werden auch Tabakfabrik-Konversionsprojekte unterstützt?", answer: "Wir haben Erfahrung mit Industriekonversions-Modellen: Bestandshallen in Grau, neue Einbauten in Weiß. Modulare Darstellung von Bestand und Planung ist bei diesen Projekten besonders wirkungsvoll." }
    ]
  },

  'wels': {
    caseStudy: {
      title: "Gewerbepark-Modell für Welser Entwickler",
      industry: "Gewerbebau",
      challenge: "Ein Welser Projektentwickler benötigte ein Modell eines geplanten Gewerbeparks für die Vermarktung an potenzielle Mieter.",
      solution: "Wir erstellten ein maßstabsgetreues Modell mit beschrifteten Parzellen. Persönliche Abholung in Gunskirchen.",
      result: "80% der Flächen waren noch vor Baubeginn vermietet.",
      specs: { size: "50 x 40 x 15 cm", material: "PLA weiß + beschriftete Parzellen", time: "3 Werktage" },
      quote: "Persönliche Abholung in 10 Minuten – und das Modell hat sich sofort bezahlt gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Gewerbebau & Entwicklung in Wels",
    uniqueSellingPoints: ["Direkter Nachbar – 10 Minuten", "Persönliche Abholung möglich", "Last-Minute-Service"],
    introText: "Wels ist das wirtschaftliche Zentrum des Traunviertels und ein aktiver Gewerbestandort. Die Nähe zu unserem Standort Gunskirchen (nur 10 Minuten) macht uns zum natürlichen Partner für Welser Architekten. Gewerbeparks, Schulbauten, Wohnhausanlagen – das Spektrum in Wels ist breit. Der größte Vorteil: persönliche Abholung am selben Tag, gemeinsame Abstimmung vor Ort, kein Versandrisiko.",
    faqs: [
      { question: "Wie nah liegt Gunskirchen an Wels?", answer: "Nur 10 Minuten Fahrzeit. Sie können Ihr Modell persönlich abholen, vor Ort prüfen und bei Bedarf direkt Änderungen besprechen. Kein Versandrisiko, keine Wartezeit." },
      { question: "Ist Same-Day-Fertigung für Wels möglich?", answer: "Ja – für kleinere Modelle (Studienmodelle, Maquetten) ist Bestellung am Morgen und Abholung am Nachmittag realistisch. Größere Modelle brauchen 2-3 Werktage." },
      { question: "Können Gewerbeparks mit Parzellenbeschriftung gedruckt werden?", answer: "Ja – wir erstellen Modelle mit beschrifteten Parzellen, farblich codierten Nutzungszonen und maßstabsgetreuer Verkehrserschließung. Ideal für Vermarktungsunterlagen von Gewerbeflächen." },
      { question: "Was kosten Modelle für Schulbauten?", answer: "Schulgebäude-Modelle im Maßstab 1:100 kosten typischerweise €100-250, je nach Komplexität. Mit Außenanlagen und Sportplatz-Darstellung etwas mehr. Für HTL Wels und FH OÖ-Projekte haben wir Erfahrung." }
    ]
  },

  'graz': {
    caseStudy: {
      title: "Smart-City-Quartier-Modell für Grazer Wettbewerb",
      industry: "Stadtplanung & Innovation",
      challenge: "Ein Grazer Architekturbüro entwarf ein Smart-City-Quartier für die Grazer Stadtentwicklung und brauchte ein Modell, das die innovative Infrastruktur und Gebäudetypologie zeigt.",
      solution: "Wir fertigten ein modulares Modell im Maßstab 1:200 mit farbcodierten Nutzungszonen: Wohnen (weiß), Gewerbe (hellgrau), Grünflächen (grün). Die Smart-Infrastruktur wurde durch feine Linienstrukturen angedeutet.",
      result: "Das Modell wurde in der Jury-Sitzung als 'besonders gut lesbar' gelobt. Das Büro erreichte Platz 2 im Wettbewerb.",
      specs: { size: "70 x 50 x 15 cm", material: "PLA mehrfarbig, modular", time: "6 Werktage" },
      quote: "Durch die Farbcodierung war der Entwurf sofort verständlich. Das Modell hat den Unterschied gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Smart City & Stadtplanung in Graz",
    uniqueSellingPoints: ["Express-Lieferung nach Graz", "TU Graz Kooperationserfahrung", "Modulare Modelle für Quartiersprojekte"],
    introText: "Graz ist Österreichs zweitgrößte Stadt und ein Architektur-Hotspot: Die TU Graz bildet eine neue Generation von Architekten aus, die UNESCO-Altstadt stellt höchste Anforderungen an Eingriffe im historischen Bestand, und Smart-City-Projekte treiben die Stadtentwicklung voran. Grazer Architekturbüros brauchen Modelle, die Innovation und Kontext gleichermaßen transportieren.",
    faqs: [
      { question: "Wie werden Smart-City-Quartiere im Modell dargestellt?", answer: "Durch farbcodierte Nutzungszonen (Wohnen, Gewerbe, Grünflächen) und modulare Bauweise. Gebäude können herausgenommen werden, um Infrastruktur-Ebenen sichtbar zu machen. Lieferung nach Graz über A9." },
      { question: "Werden Modelle für die Grazer Altstadt-Kommission akzeptiert?", answer: "Ja – für Eingriffe im UNESCO-geschützten Bereich erstellen wir Kontextmodelle mit Bestandsbebauung. Die räumliche Wirkung neuer Bauteile im historischen Umfeld wird sofort begreifbar." },
      { question: "Kann die TU Graz Modelle für Forschung bestellen?", answer: "Selbstverständlich. Studienmodelle für Semesterentwürfe ab €20, Diplomarbeitsmodelle nach Aufwand. Wir haben regelmäßig Projekte von TU Graz-Studierenden." },
      { question: "Was kostet ein Wohnbau-Modell für Grazer Projekte?", answer: "Wohnbauten im Maßstab 1:100 kosten €80-200. Bei Mehrfach-Varianten (z.B. drei Entwürfe zum Vergleich) ca. 20% Aufpreis pro Variante. Umgebungsdarstellung optional." }
    ]
  },

  'klagenfurt': {
    caseStudy: {
      title: "Seevilla-Modell für Wörthersee-Projekt",
      industry: "Tourismus-Architektur",
      challenge: "Ein Klagenfurter Architekturbüro entwarf eine moderne Seevilla am Wörthersee. Der Bauherr wollte die Seeintegration und die Terrassenlandschaft vorab erleben – Pläne allein reichten nicht.",
      solution: "Wir druckten ein detailliertes 1:50-Modell mit blau-transparentem PETG für den Poolbereich und See-Bezug. Die gestaffelten Terrassen wurden als separate Ebenen gefertigt, das Gelände naturgetreu modelliert.",
      result: "Der Bauherr gab nach der Modellpräsentation sofort grünes Licht. Das Modell steht heute als Erinnerungsstück im Foyer der fertigen Villa.",
      specs: { size: "60 x 45 x 25 cm", material: "PLA weiß + PETG blau-transparent", time: "6 Werktage" },
      quote: "Erst am Modell konnte ich mir vorstellen, wie die Terrassen zum See hin fließen. Perfekt."
    },
    materials: [
      { name: "PLA Holzoptik", description: "Authentische Holzmaserung für Kärntner Holzbau-Architektur.", bestFor: ["Holzkonstruktionen", "Alpine Architektur", "Holzhäuser"], icon: "palette" },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Seearchitektur & Holzbau in Klagenfurt",
    uniqueSellingPoints: ["Spezialist für See-Architekturmodelle", "Holzoptik-Materialien verfügbar", "Express für Wettbewerbe"],
    introText: "Klagenfurt am Wörthersee ist geprägt von einer einzigartigen Verbindung aus See, Stadt und Bergen. Architektonisch dominieren Seezugang-Projekte, Tourismusbauten und Holzbau-Architektur. Der direkte Bezug zum Wasser erfordert Modelle, die Geländeform und Seefläche integrieren – eine unserer Spezialitäten.",
    faqs: [
      { question: "Können Seeflächen im Modell dargestellt werden?", answer: "Ja – blau-transparentes PETG erzeugt einen überzeugenden Wassereffekt. Seeufer, Pools und Teiche werden maßstabsgetreu in das Geländemodell integriert." },
      { question: "Eignen sich Holzoptik-Materialien für Kärntner Projekte?", answer: "Absolut. PLA Holzoptik mit echter Holzfaser ist ideal für die traditionelle Kärntner Holzbauarchitektur. In 1:50 wirkt das Material erstaunlich authentisch." },
      { question: "Was kostet ein Seevilla-Modell?", answer: "Ein detailliertes 1:50-Modell einer Seevilla mit Geländedarstellung und Seebezug kostet typischerweise €200-400. Mit transparentem Pool und gestaffelten Terrassen am oberen Ende." },
      { question: "Wie wird nach Klagenfurt geliefert?", answer: "Über A10 Tauernautobahn mit robuster Verpackung. 5-7 Werktage Standard, 24h Express für dringende Wettbewerbstermine." }
    ]
  },

  'villach': {
    caseStudy: {
      title: "Thermenhotel-Modell für Villacher Investorenpräsentation",
      industry: "Tourismus-Architektur",
      challenge: "Ein Kärntner Architekturbüro plante ein Thermenhotel am Faaker See und benötigte ein überzeugendes Modell für die Präsentation vor potenziellen Investoren.",
      solution: "Wir erstellten ein Modell im Maßstab 1:100 mit blau-transparentem PETG für den Poolbereich und weißem PLA für die Gebäudestruktur. Ein Geländemodell zeigte die Seelage.",
      result: "Die Investoren sagten nach der Präsentation zu. Das Modell war laut Bauherr 'der entscheidende Faktor'.",
      specs: { size: "60 x 45 x 25 cm", material: "PLA weiß + PETG blau + Geländemodell", time: "6 Werktage" },
      quote: "Am See gebaut, am Modell verkauft. Die Investoren konnten sich alles sofort vorstellen."
    },
    materials: defaultMaterials,
    industryFocus: "Tourismus-Architektur & Hotelbau in Villach",
    uniqueSellingPoints: ["Zuverlässige Lieferung nach Villach", "Tourismus-Architektur Kompetenz", "Geländemodelle mit Wasserflächen"],
    introText: "Villach ist der Dreh- und Angelpunkt des Kärntner Tourismus: Thermenregion, Faaker See, Ossiacher See. Die Architektur dreht sich um Hotels, Wellness-Anlagen und Freizeitinfrastruktur. Investoren erwarten bei diesen Projekten mehr als Pläne – sie wollen die Atmosphäre spüren. Unsere Modelle mit transparenten Wasserflächen und Geländeintegration machen genau das möglich.",
    faqs: [
      { question: "Können Thermenanlagen mit Poolbereichen dargestellt werden?", answer: "Ja – blau-transparentes PETG simuliert Wasserflächen überzeugend. Poolbereiche, Thermalbecken und Seeufer werden als separate Elemente in das Geländemodell integriert." },
      { question: "Welcher Maßstab eignet sich für Hotelprojekte?", answer: "Für Hotels empfehlen wir 1:100 für Gebäudedetails oder 1:200 für Gesamtanlagen mit Umgebung. Bei großen Anlagen mit mehreren Gebäuden ist 1:200 wirtschaftlicher und transportfreundlicher." },
      { question: "Wie wird nach Villach geliefert?", answer: "Über A10/A2 mit verstärkter Verpackung. 5-7 Werktage Standard, Express in 24h. Villach ist über die Autobahn gut erreichbar." },
      { question: "Können Ferienhaussiedlungen modular dargestellt werden?", answer: "Ja – einzelne Ferienhäuser werden als Module gedruckt und auf einer Basisfläche mit Geländeform arrangiert. Ideal für Investorenpräsentationen, bei denen verschiedene Anordnungen gezeigt werden sollen." }
    ]
  },

  'st-poelten': {
    caseStudy: {
      title: "Gemeindezentrum-Modell für NÖ Architekturwettbewerb",
      industry: "Kommunalbau",
      challenge: "Ein Architekturbüro in St. Pölten nahm an einem Wettbewerb für ein neues Gemeindezentrum teil. Das Modell musste die Integration in den bestehenden Ortskern zeigen.",
      solution: "Wir fertigten ein Modell im Maßstab 1:200 mit dem Neubau in Weiß und der Umgebungsbebauung in Hellgrau. Der Dorfplatz und die Kirche als Kontextgebäude waren inbegriffen.",
      result: "Der Entwurf gewann den Wettbewerb. Die Gemeinde hob hervor, dass das Modell die Einbettung in den Ort besonders gut zeigte.",
      specs: { size: "50 x 40 x 15 cm", material: "PLA weiß + grau", time: "5 Werktage" },
      quote: "Im Gemeinderat konnte jeder sofort sehen, wie sich der Neubau ins Ortsbild einfügt."
    },
    materials: defaultMaterials,
    industryFocus: "Kommunalbau & öffentliche Bauten in St. Pölten",
    uniqueSellingPoints: ["Schnelle Lieferung über A1", "Erfahrung mit öffentlichen Bauten und Gemeindeprojekten", "Kontextmodelle mit Umgebungsbebauung"],
    introText: "St. Pölten ist als NÖ-Landeshauptstadt Verwaltungssitz und Standort der FH St. Pölten. Architektonisch dominieren öffentliche Bauten – vom Regierungsviertel über Schulen bis zu kommunalen Einrichtungen. Die kurze Distanz über A1 macht uns zum schnellen Partner für Wettbewerbe und Behördenpräsentationen in St. Pölten und dem niederösterreichischen Zentralraum.",
    faqs: [
      { question: "Eignen sich Modelle für Behördenpräsentationen im Regierungsviertel?", answer: "Ja – wir fertigen professionelle Kontextmodelle speziell für Behördengespräche: Neubau und Umgebung in unterschiedlichen Farben, herausnehmbarer Gebäudekörper, klare Maßstabsangaben am Sockel." },
      { question: "Werden FH St. Pölten Projekte unterstützt?", answer: "Ja – Studienmodelle für Semesterprojekte ab €20. Medienprojekte mit Designmodellen und Requisiten sind ebenfalls möglich." },
      { question: "Wie schnell wird nach St. Pölten geliefert?", answer: "Über A1 Westautobahn in 5-7 Werktagen. Express in 24h für Wettbewerbe. St. Pölten ist verkehrstechnisch ideal angebunden." },
      { question: "Was kostet ein Kontextmodell mit Kirche und Platz?", answer: "Ein Kontextmodell mit Neubau + 3-4 Bestandsgebäuden im Maßstab 1:200 kostet typischerweise €150-300. Je mehr Kontextgebäude dargestellt werden, desto höher der Preis – aber desto überzeugender die Präsentation." }
    ]
  },

  'innsbruck': {
    caseStudy: {
      title: "Nordketten-Restaurantmodell für Innsbrucker Wettbewerb",
      industry: "Alpine Gastronomie-Architektur",
      challenge: "Ein Innsbrucker Büro plante ein Panorama-Restaurant an der Nordkette. Die Behörde verlangte ein Modell, das die Einbindung in den Bergrücken und die Sichtbarkeit aus dem Tal zeigt.",
      solution: "Wir erstellten ein großformatiges Geländemodell im Maßstab 1:200 mit dem Restaurant als abnehmbarem Element. Zwei Blickwinkel – vom Tal und von der Bergstation – wurden durch die Modellorientierung ermöglicht.",
      result: "Die Naturschutzbehörde genehmigte das Projekt nach nur einer Sitzung. Die Landschaftsintegration war am Modell sofort nachvollziehbar.",
      specs: { size: "80 x 60 x 40 cm", material: "PLA weiß/grau + Geländemodell", time: "8 Werktage" },
      quote: "Zwei Perspektiven – vom Tal und vom Gipfel. Die Behörde hatte keine Fragen mehr."
    },
    materials: [
      { name: "PLA Alpine Weiß", description: "Perfekt für Bergarchitektur und Geländemodelle.", bestFor: ["Bergstationen", "Geländemodelle", "Alpine Projekte"], icon: "palette" },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Alpine Architektur & Infrastruktur in Innsbruck",
    uniqueSellingPoints: ["Topografische Geländemodelle", "Erfahrung mit Bergarchitektur", "Robuster Alpentransport"],
    introText: "Innsbruck ist die Hauptstadt der alpinen Architektur. Zwischen Inn und Nordkette planen Innsbrucker Büros Gebäude, die sich in die extremste Topografie einfügen müssen. Die Universität Innsbruck und die einzigartige Lage zwischen den Bergen machen die Stadt zu einem architektonischen Experimentierfeld – von der Hungerburgbahn (Zaha Hadid) bis zu zeitgenössischen Bergstationen.",
    faqs: [
      { question: "Wie werden Bergarchitektur-Modelle mit Gelände umgesetzt?", answer: "Wir erstellen aus digitalen Höhendaten ein maßstabsgetreues Geländemodell. Das Gebäude wird als separates, abnehmbares Element integriert. So kann die Landschaftswirkung mit und ohne Bau gezeigt werden." },
      { question: "Können Modelle für die Universität Innsbruck gefertigt werden?", answer: "Ja – wir haben Erfahrung mit Semesterentwürfen und Abschlussprojekten. Studienmodelle ab €20, Geländemodelle für alpine Standorte nach Aufwand." },
      { question: "Welche Versandverpackung wird für Alpenregionen verwendet?", answer: "Verstärkte Kartons mit mehrseitigem Schaumstoff-Schutz. Großformatige Modelle werden in zerlegbare Segmente mit Passstiften aufgeteilt. Spezialverpackung für fragile Details." },
      { question: "Sind Seilbahn-Trassenmodelle möglich?", answer: "Ja – Seilbahntrassen werden als filigrane Linienelemente im Geländemodell integriert. Stützen, Stationen und Pistenflächen können farblich markiert werden. Ideal für Genehmigungspräsentationen." }
    ]
  },

  'dornbirn': {
    caseStudy: {
      title: "Bregenzerwald-Wohnhaus für internationalen Architekturpreis",
      industry: "Vorarlberger Baukultur",
      challenge: "Ein Dornbirner Büro reichte ein Bregenzerwald-Wohnhaus für einen internationalen Architekturpreis ein. Die Jury verlangte ein physisches Modell, das die charakteristische Holzkonstruktion und Landschaftsintegration zeigt.",
      solution: "Wir druckten ein 1:50-Modell in PLA Holzoptik mit sichtbarem Tragwerk. Die Umgebungslandschaft wurde als grünes Geländemodell mit Wiesenflächen gestaltet. Transparente PETG-Fenster zeigten die Durchlässigkeit des Entwurfs.",
      result: "Das Modell wurde bei der Preisjury als besonders aussagekräftig gelobt. Das Büro erhielt eine lobende Erwähnung.",
      specs: { size: "50 x 35 x 25 cm", material: "PLA Holzoptik + PETG transparent + Gelände", time: "6 Werktage" },
      quote: "Die Holzoptik und das Landschaftsmodell haben den Charakter unseres Entwurfs perfekt transportiert."
    },
    materials: [
      { name: "PLA Design Matt", description: "Edle matte Oberfläche für Vorarlberger Architekturmodelle.", bestFor: ["Baukultur-Projekte", "Wettbewerbsmodelle", "Design-Architektur"], icon: "palette" },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Baukultur & Design-Architektur in Dornbirn",
    uniqueSellingPoints: ["Erfahrung mit Vorarlberger Baukultur", "Design-Kompetenz", "Grenznahe Lieferung CH/DE"],
    introText: "Dornbirn ist das wirtschaftliche Zentrum Vorarlbergs und Messestadt. Aber die eigentliche architektonische DNA liegt im Bregenzerwald: eine Baukultur, die international bewundert wird. Dornbirner Architekturbüros verbinden diese Tradition mit zeitgenössischer Formensprache. Unsere Holzoptik-Materialien und das Verständnis für diese besondere Architektursprache machen uns zum passenden Partner.",
    faqs: [
      { question: "Können Bregenzerwald-typische Holzdetails dargestellt werden?", answer: "Ja – in 1:50 werden Holzfassaden, Schindeln, Holzrahmen und konstruktive Details wie Stützen und Balken sichtbar. PLA Holzoptik mit echter Holzfaser verstärkt den authentischen Eindruck." },
      { question: "Ist Lieferung nach Liechtenstein oder in die Schweiz möglich?", answer: "Ja – wir liefern regelmäßig nach Vorarlberg und die angrenzenden DACH-Regionen. Zollfreie EU-Lieferung nach Vorarlberg, Lieferung nach CH auf Anfrage möglich." },
      { question: "Was kostet ein Wettbewerbsmodell im Vorarlberger Stil?", answer: "Ein 1:50-Modell mit Holzoptik und Umgebungsmodell kostet typischerweise €200-400. Reine Wettbewerbsmodelle in Weiß ab €100. Express in 24h mit 50% Aufpreis." },
      { question: "Werden internationale Architekturpreis-Einreichungen unterstützt?", answer: "Ja – wir fertigen Modelle für nationale und internationale Preisjurys. Die Modelle können nach Juryvorgaben gestaltet werden (bestimmter Sockel, Maßstabsangabe, Material)." }
    ]
  }
};

export const getArchitekturExtendedDataBySlug = (slug: string): RegionalArchitekturExtendedData => {
  return regionalArchitekturExtendedData[slug] || {
    caseStudy: {
      title: "Wettbewerbsmodell für Architekturbüro",
      industry: "Architektur",
      challenge: "Ein Architekturbüro benötigte ein maßstabsgetreues Modell im Maßstab 1:100 für einen Architekturwettbewerb.",
      solution: "Wir fertigten das Gebäudemodell in feiner Auflösung aus weißem PLA mit transparenten PETG-Fensterelementen.",
      result: "Das Modell überzeugte die Jury durch Detailgenauigkeit und professionelle Verarbeitung.",
      specs: { size: "40 x 30 x 25 cm", material: "PLA weiß + PETG transparent", time: "5 Werktage" },
      quote: "Die Qualität hat uns und die Jury begeistert."
    },
    materials: defaultMaterials,
    industryFocus: "Architekturmodelle",
    uniqueSellingPoints: ["Professionelle 3D-gedruckte Architekturmodelle", "Express-Lieferung möglich", "Persönliche Beratung"],
    faqs: [
      { question: "Was kostet ein 3D-gedrucktes Architekturmodell?", answer: "Einfache Studienmodelle ab €20, Präsentationsmodelle €80-200, Wettbewerbsmodelle mit Umgebung €150-500. Kostenloses Angebot innerhalb von 6 Stunden." },
      { question: "Welche CAD-Formate werden unterstützt?", answer: "STL, OBJ und 3MF aus ArchiCAD, Revit, SketchUp, Rhino und Vectorworks. Kostenlose Dateihilfe bei Export-Problemen." },
      { question: "Wie schnell können Modelle geliefert werden?", answer: "Standard 5-7 Werktage, Express in 24h für Wettbewerbstermine (50% Aufpreis)." },
      { question: "Können transparente Glasfassaden dargestellt werden?", answer: "Ja – mit PETG Transparent für Glasflächen, Fensterbänder und Glasdächer. Separate Fertigung und Einsetzung für beste Optik." }
    ],
    introText: ""
  };
};
