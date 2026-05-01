// Extended data for German Architekturmodell pages
import { RegionalArchitekturExtendedData } from './regionalArchitekturExtendedData';
import { CaseStudyData } from '@/components/landing/MesseCaseStudy';
import { MaterialRecommendation } from '@/components/landing/MesseMaterialTips';

const defaultCaseStudy: CaseStudyData = {
  title: "Wettbewerbsmodell für Architekturbüro",
  industry: "Architektur",
  challenge: "Ein Architekturbüro benötigte ein maßstabsgetreues Modell im Maßstab 1:100 für einen Architekturwettbewerb. Die komplexe Fassadenstruktur musste präzise wiedergegeben werden.",
  solution: "Wir fertigten das Gebäudemodell in feiner Auflösung (0.1mm) aus weißem PLA. Die Fassadenelemente wurden separat gedruckt, Fenster aus transparentem PETG ergänzt.",
  result: "Das Modell überzeugte die Jury durch Detailgenauigkeit. Das Architekturbüro gewann den Wettbewerb.",
  specs: {
    size: "40 x 30 x 25 cm",
    material: "PLA weiß + PETG transparent",
    time: "5 Werktage"
  },
  quote: "Die Qualität hat uns und die Jury begeistert. 3D-Druck ist für unsere Wettbewerbe jetzt Standard."
};

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

export const germanArchitekturExtendedData: Record<string, RegionalArchitekturExtendedData> = {
  'bayern': {
    caseStudy: {
      title: "Wohnquartier-Modell für Münchner Entwickler",
      industry: "Stadtentwicklung",
      challenge: "Ein Münchner Projektentwickler plante ein neues Wohnquartier mit 200 Einheiten und brauchte ein Modell im Maßstab 1:200 für die Bürgerinformation.",
      solution: "Wir fertigten ein modulares Quartiers-Modell mit farblich codierten Bauphasen. Die Bestandsbebauung in Grau, Neubauten in Weiß. Same-Day über A8.",
      result: "Das Modell überzeugte bei der Bürgerinformation. Das Projekt wurde ohne Einsprüche genehmigt.",
      specs: { size: "100 x 80 x 25 cm", material: "PLA weiß/grau + farbige Akzente", time: "7 Werktage" },
      quote: "Grenznahe Fertigung aus Österreich war ideal – schnell, günstig und die Qualität stimmt."
    },
    materials: defaultMaterials,
    industryFocus: "Stadtentwicklung & Wohnbau in Bayern",
    uniqueSellingPoints: ["Grenznahe Fertigung – kürzeste Wege", "Erfahrung mit Münchner Büros", "Express über A8"]
  },

  'baden-wuerttemberg': {
    caseStudy: {
      title: "Universitätscampus-Modell für KIT Karlsruhe",
      industry: "Bildungsbau",
      challenge: "Das KIT Karlsruhe benötigte ein Campus-Modell für die Planung eines neuen Forschungsgebäudes. Der bestehende Campus musste im Kontext dargestellt werden.",
      solution: "Wir erstellten ein Modell im Maßstab 1:500 mit abnehmbarem Neubau. Die Integration in den Campus war sofort ersichtlich.",
      result: "Das Modell wurde zum zentralen Planungsinstrument. Die Finanzierung wurde genehmigt.",
      specs: { size: "80 x 60 x 15 cm", material: "PLA weiß + grau", time: "6 Werktage" },
      quote: "Das Campusmodell hat die Entscheidungsträger sofort überzeugt. Schnelle Lieferung aus Österreich!"
    },
    materials: defaultMaterials,
    industryFocus: "Bildungsbau & Innovation in Baden-Württemberg",
    uniqueSellingPoints: ["Nähe zu Vorarlberg", "Kompetenz für Bildungsbauten", "Express über A96"]
  },

  'nordrhein-westfalen': {
    caseStudy: {
      title: "Industriekonversions-Modell für Essener Zeche",
      industry: "Strukturwandel",
      challenge: "Ein Essener Architekturbüro entwarf die Umnutzung eines ehemaligen Zechengeländes zu einem Kreativquartier. Das Modell musste Bestand und Neubau zeigen.",
      solution: "Wir fertigten ein zweiteiliges Modell: historische Industriebauten in grauem PLA, neue Einbauten in weißem PLA mit transparenten PETG-Dachflächen.",
      result: "Das Modell gewann den Wettbewerb. Der IBA-Jury überzeugte die sensible Bestandsintegration.",
      specs: { size: "70 x 50 x 30 cm", material: "PLA grau/weiß + PETG", time: "7 Werktage" },
      quote: "Alt und Neu im selben Modell – genau so haben wir es uns vorgestellt. Express aus Österreich war perfekt."
    },
    materials: [
      { name: "PLA Grau", description: "Für Bestandsgebäude und Industriebauten. Authentische Darstellung.", bestFor: ["Industriebauten", "Bestandsgebäude", "Kontextmodelle"], icon: "palette" },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Strukturwandel & Industriekonversion in NRW",
    uniqueSellingPoints: ["Erfahrung mit Strukturwandel-Modellen", "Express-Versand", "Günstiger als lokale Anbieter"]
  },

  'hessen': {
    caseStudy: {
      title: "Hochhaus-Modell für Frankfurter Bankenviertel",
      industry: "Hochbau",
      challenge: "Ein Frankfurter Büro entwarf ein 180m-Hochhaus und brauchte ein Modell im Maßstab 1:200 mit Skyline-Kontext für die Investorenpräsentation.",
      solution: "Wir druckten das Hochhaus mit transparenter PETG-Fassade. Die umliegende Skyline wurde als Silhouette in grauem PLA ergänzt.",
      result: "Die Investoren genehmigten das Projekt. Das transparente Modell zeigte die Etagen und den Gebäudekern.",
      specs: { size: "25 x 25 x 90 cm", material: "PETG transparent + PLA grau", time: "6 Werktage" },
      quote: "Ein 90cm hohes transparentes Hochhausmodell – das hat selbst erfahrene Investoren beeindruckt."
    },
    materials: [
      { name: "PETG Transparent", description: "Ideal für Frankfurter Hochhaus-Fassaden. Zeigt Geschossstruktur und Gebäudekern.", bestFor: ["Hochhäuser", "Bürotürme", "Glasfassaden"], icon: "shield" },
      ...defaultMaterials.filter(m => m.name !== "PETG Transparent")
    ],
    industryFocus: "Hochhausarchitektur & Bürobau in Hessen",
    uniqueSellingPoints: ["Spezialist für Hochhausmodelle", "Transparente Fassaden möglich", "Express nach Frankfurt"]
  },

  'niedersachsen': {
    caseStudy: { ...defaultCaseStudy, title: "Expo-Gelände Umnutzungsmodell Hannover", industry: "Stadtentwicklung" },
    materials: defaultMaterials,
    industryFocus: "Stadtentwicklung & Industriearchitektur in Niedersachsen",
    uniqueSellingPoints: ["Express-Versand nach Hannover", "Kompetenz für Industriearchitektur", "Flexible Termine"]
  },

  'sachsen': {
    caseStudy: {
      title: "Barockpalais-Sanierungsmodell für Dresdner Büro",
      industry: "Denkmalpflege",
      challenge: "Ein Dresdner Architekturbüro plante die Sanierung eines barocken Stadtpalais. Das Modell musste historische Details und moderne Eingriffe zeigen.",
      solution: "Wir erstellten ein Schnittmodell: Außenfassade in detailliertem PLA, Inneres als moderner Einbau. Das Dach war abnehmbar.",
      result: "Die Denkmalbehörde genehmigte die Sanierung. Das Schnittmodell war ausschlaggebend.",
      specs: { size: "50 x 40 x 35 cm", material: "PLA weiß detailliert", time: "7 Werktage" },
      quote: "Die Detailgenauigkeit der Barockfassade war erstaunlich. Perfekt für die Denkmalbehörde."
    },
    materials: defaultMaterials,
    industryFocus: "Denkmalpflege & Barock-Architektur in Sachsen",
    uniqueSellingPoints: ["Kompetenz für historische Modelle", "Feinste Detailauflösung", "Express nach Dresden/Leipzig"]
  },

  'rheinland-pfalz': {
    caseStudy: { ...defaultCaseStudy, title: "Weingut-Neubaumodell für Rheinhessen", industry: "Weinbau-Architektur" },
    materials: defaultMaterials,
    industryFocus: "Weinbau-Architektur & Sanierung in Rheinland-Pfalz",
    uniqueSellingPoints: ["Nähe zu Frankfurt", "Express verfügbar", "Flexible Termine"]
  },

  'schleswig-holstein': {
    caseStudy: { ...defaultCaseStudy, title: "Hafenquartier-Modell für Kieler Architekturbüro", industry: "Maritime Architektur" },
    materials: defaultMaterials,
    industryFocus: "Maritime Architektur & Küstenschutz in Schleswig-Holstein",
    uniqueSellingPoints: ["Maritime Architektur-Kompetenz", "Robuste Verpackung", "Express verfügbar"]
  },

  'brandenburg': {
    caseStudy: {
      title: "Schlosspark-Erweiterungsmodell Potsdam",
      industry: "Denkmalpflege",
      challenge: "Ein Potsdamer Büro plante eine moderne Erweiterung im Umfeld eines denkmalgeschützten Schlossparks. Das Modell musste den historischen Kontext zeigen.",
      solution: "Wir fertigten ein Geländemodell mit historischem Bestand in Grau und dem modernen Neubau in Weiß. Bäume und Parkanlage wurden stilisiert dargestellt.",
      result: "Die Denkmalbehörde genehmigte den Entwurf. Der historische Kontext war sofort nachvollziehbar.",
      specs: { size: "80 x 60 x 20 cm", material: "PLA grau/weiß + Geländemodell", time: "6 Werktage" },
      quote: "Alt und Neu im Parkkontext – das Modell hat die Behörde sofort überzeugt."
    },
    materials: defaultMaterials,
    industryFocus: "Denkmalpflege & Stadtentwicklung in Brandenburg",
    uniqueSellingPoints: ["Erfahrung mit historischem Kontext", "Express nach Berlin-Brandenburg", "Geländemodelle möglich"]
  },

  'thueringen': {
    caseStudy: { ...defaultCaseStudy, title: "Bauhaus-inspiriertes Wettbewerbsmodell Weimar", industry: "Bauhaus-Architektur" },
    materials: defaultMaterials,
    industryFocus: "Bauhaus-Architektur & Denkmalpflege in Thüringen",
    uniqueSellingPoints: ["Kompetenz für Bauhaus-Ästhetik", "Express verfügbar", "Flexible Termine"]
  },

  'sachsen-anhalt': {
    caseStudy: { ...defaultCaseStudy, title: "Bauhaus-Campus-Modell Dessau", industry: "Kulturerbe" },
    materials: defaultMaterials,
    industryFocus: "Bauhaus-Erbe & Stadtentwicklung in Sachsen-Anhalt",
    uniqueSellingPoints: ["Erfahrung mit Bauhaus-Architektur", "Express verfügbar", "Flexible Lieferung"]
  },

  'mecklenburg-vorpommern': {
    caseStudy: { ...defaultCaseStudy, title: "Bäderarchitektur-Sanierungsmodell Usedom", industry: "Bäderarchitektur" },
    materials: defaultMaterials,
    industryFocus: "Bäderarchitektur & Backsteinbau in Mecklenburg-Vorpommern",
    uniqueSellingPoints: ["Bäderarchitektur-Kompetenz", "Robuste Verpackung", "Express verfügbar"]
  },

  'saarland': {
    caseStudy: { ...defaultCaseStudy, title: "Völklinger Hütte Umfeld-Modell", industry: "Industriekonversion" },
    materials: defaultMaterials,
    industryFocus: "Industriekonversion & Grenzarchitektur im Saarland",
    uniqueSellingPoints: ["Grenzregion-Kompetenz", "Express verfügbar", "Flexible Termine"]
  },

  'berlin': {
    caseStudy: {
      title: "Stadtentwicklungsmodell für Berliner Wettbewerb",
      industry: "Stadtplanung",
      challenge: "Ein Berliner Architekturbüro nahm an einem Wettbewerb für ein neues Stadtquartier in Berlin-Kreuzberg teil. 500 Wohnungen auf 4 Hektar mussten dargestellt werden.",
      solution: "Wir erstellten ein modulares Quartiers-Modell im Maßstab 1:500. Die einzelnen Gebäudegruppen waren herausnehmbar, um Varianten zu zeigen.",
      result: "Das Büro erreichte die engere Auswahl. Die Jury lobte die Qualität des Modells.",
      specs: { size: "100 x 80 x 20 cm", material: "PLA weiß + farbige Akzente", time: "8 Werktage" },
      quote: "Für den Preis in Berlin ein Modell in dieser Qualität zu bekommen – unmöglich. Danke an ek-druck!"
    },
    materials: defaultMaterials,
    industryFocus: "Stadtentwicklung & Großprojekte in Berlin",
    uniqueSellingPoints: ["Erfahrung mit Berliner Großprojekten", "Bis 80% günstiger als Berliner Modellbauer", "Express-Versand"]
  },

  'hamburg': {
    caseStudy: {
      title: "HafenCity-Wettbewerbsmodell für Hamburger Büro",
      industry: "Maritime Stadtentwicklung",
      challenge: "Ein Hamburger Architekturbüro entwarf ein Wohn- und Geschäftshaus in der HafenCity. Das Modell musste die Wasserlage und die Nachbarbebauung zeigen.",
      solution: "Wir fertigten ein Modell mit blau-transparentem PETG für die Wasserfläche. Das Gebäude in weißem PLA, Nachbarbebauung in Grau.",
      result: "Das Modell kam in die engere Auswahl. Die Darstellung der Wasserlage überzeugte.",
      specs: { size: "60 x 40 x 25 cm", material: "PLA weiß/grau + PETG blau", time: "6 Werktage" },
      quote: "Die blaue Wasserfläche war ein Hingucker. So wird HafenCity-Architektur greifbar."
    },
    materials: [
      { name: "PETG Blau-Transparent", description: "Für Wasserflächen in Hafenstadt-Modellen. Authentische Darstellung.", bestFor: ["Hafenmodelle", "Wasserflächen", "Maritime Projekte"], icon: "shield" },
      ...defaultMaterials.filter(m => m.name !== "PETG Transparent")
    ],
    industryFocus: "Maritime Stadtentwicklung & HafenCity in Hamburg",
    uniqueSellingPoints: ["Maritime Architektur-Kompetenz", "Wasser-Darstellung möglich", "Express nach Hamburg"]
  },

  'bremen': {
    caseStudy: { ...defaultCaseStudy, title: "Überseestadt-Konversionsmodell Bremen", industry: "Hafenkonversion" },
    materials: defaultMaterials,
    industryFocus: "Hafenkonversion & Stadtentwicklung in Bremen",
    uniqueSellingPoints: ["Kompetenz für Hafenarchitektur", "Express verfügbar", "Flexible Termine"]
  },

  'muenchen': {
    caseStudy: {
      title: "Büroquartier-Modell für Münchner Investor",
      industry: "Bürobau",
      challenge: "Ein Münchner Investor plante ein Büroquartier im Werksviertel und brauchte drei Varianten für die Investorenentscheidung.",
      solution: "Wir fertigten drei Modelle im Maßstab 1:200 mit identischer Umgebung. Express-Lieferung über A8 in nur 3 Stunden.",
      result: "Variante A wurde gewählt. Der Investor lobte die schnelle Umsetzung und die Möglichkeit, direkt zu vergleichen.",
      specs: { size: "3x 50 x 40 x 20 cm", material: "PLA weiß + PETG Fassaden", time: "5 Werktage" },
      quote: "Drei Varianten parallel – und in 3 Stunden geliefert. Das gibt's nur grenznahe!"
    },
    materials: defaultMaterials,
    industryFocus: "Bürobau & Stadtentwicklung in München",
    uniqueSellingPoints: ["Nur 3 Stunden Lieferzeit", "Persönliche Lieferung möglich", "Erfahrung mit Münchner Markt"]
  },

  'nuernberg': {
    caseStudy: { ...defaultCaseStudy, title: "Altstadtsanierungs-Modell Nürnberg", industry: "Denkmalpflege" },
    materials: defaultMaterials,
    industryFocus: "Altstadtsanierung & Denkmalpflege in Nürnberg",
    uniqueSellingPoints: ["Kurze Wege nach Franken", "Kompetenz für historische Modelle", "Express verfügbar"]
  },

  'augsburg': {
    caseStudy: { ...defaultCaseStudy, title: "UNESCO-Wassersystem-Modell Augsburg", industry: "Kulturerbe" },
    materials: defaultMaterials,
    industryFocus: "Kulturerbe & Stadtentwicklung in Augsburg",
    uniqueSellingPoints: ["Kurze Lieferwege über A8", "Kompetenz für historische Modelle", "Express verfügbar"]
  },

  'stuttgart': {
    caseStudy: {
      title: "Stuttgart 21 Umfeld-Modell für Stadtplanungsbüro",
      industry: "Stadtplanung",
      challenge: "Ein Stuttgarter Büro brauchte ein Modell des neuen Rosenstein-Quartiers im Kontext des Stuttgart 21-Areals.",
      solution: "Wir erstellten ein großformatiges Modell im Maßstab 1:500 mit dem neuen Bahnhof und dem geplanten Quartier. Modulare Bauphasen.",
      result: "Das Modell wurde bei der Bürgerbeteiligung eingesetzt und half, das Projekt verständlich zu machen.",
      specs: { size: "120 x 80 x 20 cm", material: "PLA weiß + farbcodiert", time: "8 Werktage" },
      quote: "Das größte Modell, das wir je in Auftrag gegeben haben – und die Qualität stimmt."
    },
    materials: defaultMaterials,
    industryFocus: "Stadtplanung & Innovation in Stuttgart",
    uniqueSellingPoints: ["Großformat-Modelle möglich", "Express über A8", "Kompetenz für Stadtentwicklung"]
  },

  'friedrichshafen': {
    caseStudy: { ...defaultCaseStudy, title: "Seeufer-Architekturmodell Friedrichshafen", industry: "Seearchitektur" },
    materials: defaultMaterials,
    industryFocus: "Seearchitektur & Tourismus am Bodensee",
    uniqueSellingPoints: ["Kurze Wege über Vorarlberg", "Bodensee-Kompetenz", "Express verfügbar"]
  },

  'karlsruhe': {
    caseStudy: { ...defaultCaseStudy, title: "KIT-Campuserweiterungsmodell Karlsruhe", industry: "Bildungsbau" },
    materials: defaultMaterials,
    industryFocus: "Bildungsbau & Technologie in Karlsruhe",
    uniqueSellingPoints: ["Kompetenz für Campusmodelle", "Express verfügbar", "Flexible Termine"]
  },

  'duesseldorf': {
    caseStudy: {
      title: "Medienhafen-Wettbewerbsmodell Düsseldorf",
      industry: "Bürobau",
      challenge: "Ein Düsseldorfer Büro entwarf ein Bürogebäude im Medienhafen neben den Gehry-Bauten. Das Modell musste den prominenten Kontext zeigen.",
      solution: "Wir fertigten das Neubaumodell in Weiß mit den umgebenden Gehry-Bauten als Kontextmodell in Grau. Transparente Fassade aus PETG.",
      result: "Das Büro gewann den Wettbewerb. Die Jury lobte die Kontextsensibilität.",
      specs: { size: "60 x 40 x 30 cm", material: "PLA weiß/grau + PETG", time: "6 Werktage" },
      quote: "Den Gehry-Kontext im Modell zu haben war entscheidend. Perfekt umgesetzt!"
    },
    materials: defaultMaterials,
    industryFocus: "Star-Architektur & Bürobau in Düsseldorf",
    uniqueSellingPoints: ["Erfahrung mit Medienhafen-Projekten", "Kontextmodelle möglich", "Express verfügbar"]
  },

  'koeln': {
    caseStudy: { ...defaultCaseStudy, title: "Rheinufer-Wohnbauprojekt Köln-Deutz", industry: "Wohnbau" },
    materials: defaultMaterials,
    industryFocus: "Wohnbau & Stadtentwicklung in Köln",
    uniqueSellingPoints: ["Erfahrung mit Kölner Architektur", "Express über A3", "Flexible Termine"]
  },

  'essen': {
    caseStudy: { ...defaultCaseStudy, title: "Zeche-Zollverein-Erweiterungsmodell", industry: "Industriekonversion" },
    materials: defaultMaterials,
    industryFocus: "Industriekonversion & Strukturwandel in Essen",
    uniqueSellingPoints: ["Kompetenz für Industriekonversion", "Express verfügbar", "Günstige Preise"]
  },

  'dortmund': {
    caseStudy: { ...defaultCaseStudy, title: "Phoenix-See-Quartier-Modell Dortmund", industry: "Stadtentwicklung" },
    materials: defaultMaterials,
    industryFocus: "Stadtentwicklung & Transformation in Dortmund",
    uniqueSellingPoints: ["Kompetenz für Stadtentwicklung", "Express verfügbar", "Flexible Termine"]
  },

  'frankfurt': {
    caseStudy: {
      title: "Hochhaus-Wettbewerbsmodell Frankfurt Bankenviertel",
      industry: "Hochbau",
      challenge: "Ein internationales Architekturbüro brauchte ein Modell eines 200m-Hochhauses für einen Investorenpitch in Frankfurt.",
      solution: "Wir druckten ein 1m hohes Modell mit transparenter PETG-Fassade. Der Gebäudekern und die Geschossebenen waren sichtbar. Express-Versand nach Frankfurt.",
      result: "Die Investoren waren beeindruckt. Das transparente Modell zeigte die Raumstruktur auf allen Ebenen.",
      specs: { size: "30 x 30 x 100 cm", material: "PETG transparent + PLA Kern", time: "7 Werktage" },
      quote: "Ein Meter hohes transparentes Hochhaus – das hat den Pitch gewonnen!"
    },
    materials: [
      { name: "PETG Transparent", description: "Ideal für Frankfurter Hochhäuser. Zeigt Geschossstruktur und Gebäudekern.", bestFor: ["Hochhäuser", "Skyline-Modelle", "Investoren-Pitches"], icon: "shield" },
      ...defaultMaterials.filter(m => m.name !== "PETG Transparent")
    ],
    industryFocus: "Hochhausarchitektur & Skyline in Frankfurt",
    uniqueSellingPoints: ["Spezialist für Hochhausmodelle", "1m+ Modelle möglich", "Express nach Frankfurt"]
  },

  'wiesbaden': {
    caseStudy: { ...defaultCaseStudy, title: "Villenviertel-Sanierungsmodell Wiesbaden", industry: "Sanierung" },
    materials: defaultMaterials,
    industryFocus: "Villensanierung & Stadtentwicklung in Wiesbaden",
    uniqueSellingPoints: ["Nähe zu Frankfurt", "Express verfügbar", "Flexible Termine"]
  },

  'hannover': {
    caseStudy: { ...defaultCaseStudy, title: "Expo-Gelände-Umnutzungsmodell Hannover", industry: "Stadtentwicklung" },
    materials: defaultMaterials,
    industryFocus: "Expo-Architektur & Stadtentwicklung in Hannover",
    uniqueSellingPoints: ["Erfahrung mit Expo-Architektur", "Express nach Hannover", "Flexible Termine"]
  },

  'dresden': {
    caseStudy: {
      title: "Barockfassaden-Sanierungsmodell Dresden",
      industry: "Denkmalpflege",
      challenge: "Ein Dresdner Büro plante die Sanierung einer barocken Fassade und brauchte ein 1:25-Detailmodell für die Abstimmung mit der Denkmalbehörde.",
      solution: "Wir druckten das Fassadenmodell in höchster Auflösung (0.05mm). Jedes Stuckelement, jede Rosette war detailgetreu dargestellt.",
      result: "Die Denkmalbehörde genehmigte die Sanierung. Die Detailtreue war ausschlaggebend.",
      specs: { size: "60 x 15 x 40 cm", material: "PLA weiß Feinauflösung", time: "6 Werktage" },
      quote: "0.05mm Auflösung für Barockstuck – unglaublich detailliert. Die Behörde war begeistert."
    },
    materials: defaultMaterials,
    industryFocus: "Barockarchitektur & Denkmalpflege in Dresden",
    uniqueSellingPoints: ["Feinste Auflösung für historische Details", "Kompetenz für Barockarchitektur", "Express verfügbar"]
  },

  'leipzig': {
    caseStudy: { ...defaultCaseStudy, title: "Gründerzeit-Quartier-Sanierungsmodell Leipzig", industry: "Gründerzeit-Sanierung" },
    materials: defaultMaterials,
    industryFocus: "Gründerzeit-Architektur & Transformation in Leipzig",
    uniqueSellingPoints: ["Kompetenz für Gründerzeit-Modelle", "Express nach Leipzig", "Günstige Preise"]
  },

  'mainz': {
    caseStudy: { ...defaultCaseStudy, title: "Zollhafen-Quartier-Modell Mainz", industry: "Stadtentwicklung" },
    materials: defaultMaterials,
    industryFocus: "Stadtentwicklung & Weinbau-Architektur in Mainz",
    uniqueSellingPoints: ["Nähe zu Frankfurt", "Express verfügbar", "Flexible Termine"]
  },

  'kiel': {
    caseStudy: { ...defaultCaseStudy, title: "Hafenquartier-Modell Kieler Förde", industry: "Maritime Architektur" },
    materials: defaultMaterials,
    industryFocus: "Maritime Architektur & Küstenschutz in Kiel",
    uniqueSellingPoints: ["Maritime Kompetenz", "Robuste Verpackung", "Express verfügbar"]
  },

  'potsdam': {
    caseStudy: {
      title: "Schlosspark-Erweiterungsmodell Potsdam",
      industry: "Denkmalpflege",
      challenge: "Moderne Ergänzung im UNESCO-Welterbe-Kontext. Das Modell musste die sensible Integration in die historische Parklandschaft zeigen.",
      solution: "Geländemodell mit historischem Park in Grün/Grau, Neubau in Weiß. Maßstab 1:200 mit modellierten Baumgruppen.",
      result: "Die UNESCO-Kommission akzeptierte den Entwurf. Das Modell war entscheidend.",
      specs: { size: "80 x 60 x 20 cm", material: "PLA weiß/grau/grün", time: "7 Werktage" },
      quote: "Im UNESCO-Kontext braucht man perfekte Modelle. ek-druck hat geliefert."
    },
    materials: defaultMaterials,
    industryFocus: "Denkmalpflege & UNESCO-Welterbe in Potsdam",
    uniqueSellingPoints: ["UNESCO-Kontext-Kompetenz", "Geländemodelle möglich", "Express nach Berlin/Potsdam"]
  },

  'erfurt': {
    caseStudy: { ...defaultCaseStudy, title: "Altstadtsanierungs-Modell Erfurt", industry: "Denkmalpflege" },
    materials: defaultMaterials,
    industryFocus: "Altstadtsanierung & Mittelalter-Architektur in Erfurt",
    uniqueSellingPoints: ["Zentrale Lage", "Express verfügbar", "Flexible Termine"]
  },

  'magdeburg': {
    caseStudy: { ...defaultCaseStudy, title: "Elbufer-Entwicklungsmodell Magdeburg", industry: "Stadtentwicklung" },
    materials: defaultMaterials,
    industryFocus: "Stadtentwicklung & Elbufer-Architektur in Magdeburg",
    uniqueSellingPoints: ["Zuverlässiger Versand", "Express verfügbar", "Kompetente Beratung"]
  },

  'schwerin': {
    caseStudy: { ...defaultCaseStudy, title: "Schlossumfeld-Wettbewerbsmodell Schwerin", industry: "Denkmalpflege" },
    materials: defaultMaterials,
    industryFocus: "Schlossarchitektur & Seenlandschaft in Schwerin",
    uniqueSellingPoints: ["Robuste Verpackung", "Express verfügbar", "Zuverlässiger Versand"]
  },

  'saarbruecken': {
    caseStudy: { ...defaultCaseStudy, title: "Grenzquartier-Modell Saarbrücken", industry: "Grenzarchitektur" },
    materials: defaultMaterials,
    industryFocus: "Grenzarchitektur & Industriekonversion in Saarbrücken",
    uniqueSellingPoints: ["Dreiländereck-Kompetenz", "Express verfügbar", "Flexible Termine"]
  },
};

export const getGermanArchitekturExtendedBySlug = (slug: string): RegionalArchitekturExtendedData => {
  return germanArchitekturExtendedData[slug] || {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Architekturmodelle",
    uniqueSellingPoints: ["Professionelle 3D-gedruckte Architekturmodelle", "Express-Lieferung möglich", "Persönliche Beratung"]
  };
};
