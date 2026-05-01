// Extended data for regional Messemodell pages
// Case studies, material recommendations, and industry focus per region

import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

export interface RegionalExtendedData {
  caseStudy: CaseStudyData;
  materials: MaterialRecommendation[];
  industryFocus: string;
  uniqueSellingPoints: string[];
  faqs?: { question: string; answer: string }[];
  introText?: string;
}

// Default case study for regions without specific data
const defaultCaseStudy: CaseStudyData = {
  title: "Eyecatcher-Modell für Fachmesse",
  industry: "Messebau",
  challenge: "Ein Aussteller benötigte ein beeindruckendes Präsentationsmodell für seinen Messestand. Das Modell musste leicht transportierbar, aber dennoch robust und detailreich sein.",
  solution: "Wir fertigten ein mehrteiliges Modell aus hochwertigem PETG. Die modulare Konstruktion ermöglichte einfachen Transport, während die Oberflächenbehandlung eine professionelle Optik garantierte.",
  result: "Das Modell wurde zum Blickfang am Stand. Der Kunde berichtete von deutlich mehr Standbesuchern und qualitativ besseren Gesprächen mit potenziellen Kunden.",
  specs: {
    size: "80 x 60 x 40 cm",
    material: "PETG weiß, lackiert",
    time: "5 Werktage"
  },
  quote: "Das Modell war der absolute Eyecatcher an unserem Stand. So viele Besucher wie dieses Jahr hatten wir noch nie!"
};

// Default materials
const defaultMaterials: MaterialRecommendation[] = [
  {
    name: "PLA Premium",
    description: "Der Allrounder für Messemodelle. Hervorragende Oberflächenqualität, einfach zu lackieren und umweltfreundlich.",
    bestFor: ["Präsentationsmodelle", "Designobjekte", "Detailreiche Exponate"],
    icon: "palette"
  },
  {
    name: "PETG",
    description: "Robust und widerstandsfähig. Ideal für Modelle, die häufig transportiert oder angefasst werden.",
    bestFor: ["Interaktive Exponate", "Outdoor-Modelle", "Langlebige Messeobjekte"],
    icon: "shield"
  },
  {
    name: "PLA Leichtbau",
    description: "Optimiert für minimales Gewicht bei maximaler Stabilität. Perfekt für große Objekte und einfachen Transport.",
    bestFor: ["Großformatige Modelle", "Häufiger Transport", "Messemodelle über 50cm"],
    icon: "feather"
  }
];

export const regionalExtendedData: Record<string, RegionalExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Produktmodell-Eyecatcher für FERIEN-MESSE Wien",
      industry: "Tourismus & Messepräsentation",
      challenge: "Ein Wiener Reiseveranstalter wollte auf der FERIEN-MESSE Wien ein aufmerksamkeitsstarkes Modell einer neuen Hotelanlage als Eyecatcher für seinen Stand. Das Modell musste leicht transportierbar und robust genug für 4 Messetage sein.",
      solution: "Wir fertigten ein farbiges Modell der Hotelanlage mit Pool-Landschaft im Maßstab 1:100. Palmen aus grünem PLA, Wasserflächen aus blau-transparentem PETG. Die modulare Konstruktion passte in zwei Transportkoffer.",
      result: "Der Stand verzeichnete 60% mehr Besucher als im Vorjahr. Das Modell wurde zum meistfotografierten Objekt der Messe und generierte zahlreiche Social-Media-Posts.",
      specs: {
        size: "80 x 60 x 30 cm",
        material: "PLA mehrfarbig + PETG blau",
        time: "6 Werktage"
      },
      quote: "Das Modell hat unseren Stand zur Attraktion gemacht. Die Besucher blieben stehen und wollten alles über die Anlage wissen."
    },
    materials: [
      {
        name: "PLA Premium Weiß",
        description: "Professionelle Oberfläche für Messeexponate. Leicht, robust und einfach zu transportieren.",
        bestFor: ["Produktmodelle", "Standexponate", "Clean Design"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Für transparente Elemente und Effekte am Messestand. Klare Optik und hohe Schlagfestigkeit.",
        bestFor: ["Transparente Exponate", "Spezialeffekte", "Interaktive Modelle"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für großformatige Exponate, die nach Wien transportiert werden müssen. Minimales Gewicht, maximale Wirkung.",
        bestFor: ["Großmodelle", "Messeinstallationen", "Transport-optimiert"],
        icon: "feather"
      }
    ],
    industryFocus: "Messepräsentation & Events in Wien",
    uniqueSellingPoints: [
      "Express-Lieferung direkt zur Reed Messe Wien",
      "Erfahrung mit FERIEN-MESSE und BAUEN & WOHNEN Ausstellern",
      "Modulare Konstruktion für einfachen Messetransport"
    ]
  },

  'oberoesterreich': {
    caseStudy: {
      title: "Produktpräsentation für die Welser Messe",
      industry: "Präsentation & Anschauung",
      challenge: "Ein oberösterreichisches Unternehmen benötigte ein überdimensionales Schnittmodell eines Produkts für die Welser Messe. Das Modell sollte die inneren Komponenten sichtbar machen.",
      solution: "Wir fertigten ein 60cm großes Schnittmodell mit herausnehmbaren Elementen. Die farbige Kennzeichnung der Komponenten ermöglichte eine klare Visualisierung. Die Fertigung erfolgte in nur 3 Tagen durch unsere lokale Nähe.",
      result: "Same-Day-Lieferung zur Messe Wels. Das interaktive Modell generierte hohes Interesse und ermöglichte anschauliche Erklärungen am Stand.",
      specs: {
        size: "60 x 45 x 45 cm",
        material: "PLA mehrfarbig",
        time: "3 Werktage + Same-Day Lieferung"
      },
      quote: "Als lokaler Partner war ekdruck unschlagbar. Abholung in Gunskirchen, und 30 Minuten später stand das Modell am Messestand in Wels."
    },
    materials: defaultMaterials,
    industryFocus: "Präsentationsmodelle für oberösterreichische Unternehmen",
    uniqueSellingPoints: [
      "Lokaler Hersteller – nur 10 Minuten zur Messe Wels",
      "Persönliche Abholung in Gunskirchen möglich",
      "Same-Day-Service für Last-Minute-Projekte"
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Großformat-Exponat für Grazer Herbstmesse",
      industry: "Konsumgüter & Messepräsentation",
      challenge: "Ein steirisches Unternehmen wollte auf der Grazer Herbstmesse ein überdimensionales Produktmodell als Eyecatcher einsetzen. Das Modell musste von Weitem sichtbar sein und Messebesucher zum Stand ziehen.",
      solution: "Wir fertigten ein 1,5 Meter hohes Produktmodell in leuchtenden Firmenfarben. Die mehrteilige Konstruktion erlaubte den Transport im PKW. Vor Ort wurde das Modell in 15 Minuten aufgebaut.",
      result: "Der Aussteller berichtete von doppelt so vielen Standbesuchen im Vergleich zum Vorjahr. Das Modell wurde zum Foto-Hotspot der Messe.",
      specs: {
        size: "150 x 60 x 60 cm",
        material: "PLA in Corporate-Farben, mehrteilig",
        time: "8 Werktage"
      },
      quote: "Das riesige Modell hat alle Blicke auf sich gezogen. Jeder Besucher wollte ein Foto damit machen."
    },
    materials: [
      {
        name: "PLA Mehrfarbig",
        description: "Ideal für farbkräftige Messeexponate in Corporate-Farben. Leuchtende Optik für maximale Standwirkung.",
        bestFor: ["Großformat-Exponate", "Corporate-Modelle", "Eyecatcher-Objekte"],
        icon: "palette"
      },
      {
        name: "PETG Robust",
        description: "Für interaktive Modelle, die häufig angefasst werden. Kratzfest und langlebig für mehrtägige Messen.",
        bestFor: ["Hands-on Exponate", "Interaktive Standmodelle", "Dauerbelastbare Objekte"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für große Messemodelle. Einfacher Transport zur Messe Graz.",
        bestFor: ["Großformat-Modelle", "Transport-optimiert", "XXL-Exponate"],
        icon: "feather"
      }
    ],
    industryFocus: "Messepräsentation & Events in der Steiermark",
    uniqueSellingPoints: [
      "Erfahrung mit Grazer Herbstmesse und Frühjahrsmesse",
      "Express-Lieferung zur Messe Graz",
      "XXL-Modelle bis 2 Meter Höhe"
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Designmodell für Art & Antique Salzburg",
      industry: "Kunst & Design",
      challenge: "Eine Salzburger Galerie benötigte ein hochdetailliertes Modell einer geplanten Skulptur für die Art & Antique. Das Modell sollte die Oberflächentextur des finalen Kunstwerks authentisch wiedergeben.",
      solution: "Wir druckten das Modell in feiner Auflösung (0.1mm Schichthöhe) und veredelten es mit einer speziellen Oberflächenbehandlung, die die geplante Bronze-Patina simulierte.",
      result: "Das Modell wurde zum Verkaufsargument für das 50.000€ Kunstwerk. Mehrere Sammler zeigten Interesse nach Betrachtung des Modells.",
      specs: {
        size: "35 x 25 x 60 cm",
        material: "PLA, patiniert",
        time: "5 Werktage"
      },
      quote: "Die Detailtreue war beeindruckend. Unsere Kunden konnten sich das finale Werk perfekt vorstellen."
    },
    materials: [
      {
        name: "PLA Fine Detail",
        description: "Ultrafeine Auflösung für kunstvolle Details. Perfekt für Skulptur-Vorschauen und Designmodelle.",
        bestFor: ["Skulpturmodelle", "Kunstobjekte", "Detailmodelle"],
        icon: "palette"
      },
      {
        name: "PLA mit Spezialfinish",
        description: "Verschiedene Oberflächenveredelungen möglich: Bronze, Marmor, Holz-Optik.",
        bestFor: ["Kunstgalerien", "Hochwertige Präsentationen", "Luxusprodukte"],
        icon: "shield"
      },
      {
        name: "PETG Kristallklar",
        description: "Für transparente Kunstobjekte und Designstücke. Glasklare Optik.",
        bestFor: ["Glas-Imitate", "Transparente Kunst", "Lichtinstallationen"],
        icon: "feather"
      }
    ],
    industryFocus: "Kunst, Kultur & Tourismus in Salzburg",
    uniqueSellingPoints: [
      "Erfahrung mit Salzburger Galerien und Museen",
      "Spezialfinishes für hochwertige Kunstmodelle",
      "Schnelle Lieferung über A1 Westautobahn"
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Holzstruktur-Modell für Internationale Holzmesse",
      industry: "Holz & Forstwirtschaft",
      challenge: "Ein Kärntner Holzbauunternehmen wollte ein innovatives Holzbausystem auf der Internationalen Holzmesse in Klagenfurt präsentieren. Das Modell sollte die Holzstruktur authentisch wiedergeben.",
      solution: "Wir verwendeten spezielles holzfarbenes PLA mit sichtbarer Maserungsstruktur. Das modulare System wurde maßstabsgetreu nachgebaut, sodass die Verbindungstechnik demonstriert werden konnte.",
      result: "Das Modell überzeugte Architekten und Bauherren von der innovativen Bauweise. Mehrere Großaufträge folgten nach der Messe.",
      specs: {
        size: "100 x 80 x 60 cm",
        material: "PLA Holzoptik",
        time: "8 Werktage"
      },
      quote: "Perfekt für die Holzmesse! Das Material sah täuschend echt aus und die Besucher waren begeistert vom modularen Konzept."
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Authentische Holzmaserung für Holzbau-Modelle. Ideal für die Internationale Holzmesse.",
        bestFor: ["Holzkonstruktionen", "Möbeldesign", "Holzarchitektur"],
        icon: "palette"
      },
      {
        name: "PETG Natur",
        description: "Natürliche Materialoptik. Robust und wetterfest für Outdoor-Präsentationen.",
        bestFor: ["Outdoor-Modelle", "Alpenhütten", "Naturprojekte"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für große Konstruktionsmodelle. Leicht zu transportieren über die Tauernautobahn.",
        bestFor: ["Großbauprojekte", "Gebäudekomplexe", "Dachkonstruktionen"],
        icon: "feather"
      }
    ],
    industryFocus: "Holzbau & Forstwirtschaft in Kärnten",
    uniqueSellingPoints: [
      "Spezialist für Holzmesse-Modelle",
      "Authentische Holzoptik-Materialien",
      "Erfahrung mit alpiner Logistik"
    ]
  },

  'tirol': {
    caseStudy: {
      title: "Skigebiet-Modell für Interalpin Innsbruck",
      industry: "Tourismus & Wintersport",
      challenge: "Ein Tiroler Seilbahnunternehmen benötigte ein topografisches Modell eines geplanten Skigebietsausbaus für die Interalpin-Messe. Die Geländeform und Lifttrassen mussten exakt dargestellt werden.",
      solution: "Basierend auf Höhendaten erstellten wir ein maßstabsgetreues Geländemodell mit markierten Pistenflächen und integrierten Seilbahntrassen. Abnehmbareabnehmbare Seilbahnstützen zeigten die Details.",
      result: "Das Modell wurde zentral am Stand positioniert und ermöglichte Investorengespräche auf einer ganz neuen Ebene. Das Projekt erhielt grünes Licht.",
      specs: {
        size: "120 x 90 x 30 cm",
        material: "PLA weiß + farbige Akzente",
        time: "10 Werktage"
      },
      quote: "Die Investoren konnten das Projekt endlich greifen. Das Modell war entscheidend für die Projektgenehmigung."
    },
    materials: [
      {
        name: "PLA Schnee-Weiß",
        description: "Perfekt für Gebirgsmodelle und Skigebiet-Visualisierungen. Authentische Schneeoptik.",
        bestFor: ["Topografie-Modelle", "Skigebiete", "Berglandschaften"],
        icon: "palette"
      },
      {
        name: "PETG Frost-Optik",
        description: "Halbtransparent für Eis- und Gletschereffekte. Robust für den Transport ins Gebirge.",
        bestFor: ["Gletschermodelle", "Eisstrukturen", "Alpine Objekte"],
        icon: "shield"
      },
      {
        name: "PLA Ultra-Leicht",
        description: "Für große Geländemodelle. Minimales Gewicht für den Transport nach Tirol.",
        bestFor: ["Großflächige Topografie", "Panorama-Modelle", "Regionsdarstellungen"],
        icon: "feather"
      }
    ],
    industryFocus: "Tourismus & Wintersport in Tirol",
    uniqueSellingPoints: [
      "Spezialist für Interalpin-Aussteller",
      "Erfahrung mit topografischen Geländemodellen",
      "Robuste Verpackung für Alpentransport"
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Design-Möbelmodell für Gustav Dornbirn",
      industry: "Design & Lifestyle",
      challenge: "Ein Vorarlberger Möbeldesigner wollte auf der Gustav-Messe ein neuartiges Möbelkonzept präsentieren, bevor die Produktion anlief. Die organischen Formen waren mit traditionellem Modellbau nicht umsetzbar.",
      solution: "Wir druckten ein maßstabsgetreues Modell (1:5) der organisch geformten Sitzgruppe. Die fließenden Linien wurden durch optimierte Druckausrichtung perfekt wiedergegeben.",
      result: "Das Design gewann den Gustav Design Award. Mehrere Möbelhäuser zeigten Kaufinteresse noch vor Produktionsstart.",
      specs: {
        size: "40 x 35 x 20 cm",
        material: "PLA matt schwarz",
        time: "4 Werktage"
      },
      quote: "Ohne 3D-Druck hätten wir das organische Design niemals so überzeugend präsentieren können. Der Award war das Ergebnis!"
    },
    materials: [
      {
        name: "PLA Premium Matt",
        description: "Edle matte Oberfläche für Design-Präsentationen. Perfekt für die Gustav-Messe.",
        bestFor: ["Möbeldesign", "Produktdesign", "Lifestyle-Objekte"],
        icon: "palette"
      },
      {
        name: "PETG Hochglanz",
        description: "Glänzende Oberfläche für moderne Designkonzepte. Kratzfest und langlebig.",
        bestFor: ["Hochglanz-Design", "Premium-Produkte", "Showpieces"],
        icon: "shield"
      },
      {
        name: "PLA Organisch",
        description: "Optimiert für fließende, organische Formen. Minimale Nachbearbeitung.",
        bestFor: ["Organische Designs", "Ergonomische Formen", "Skulpturale Möbel"],
        icon: "feather"
      }
    ],
    industryFocus: "Design & Lifestyle im Ländle",
    uniqueSellingPoints: [
      "Partner für Gustav Design-Aussteller",
      "Erfahrung mit organischen Designformen",
      "Grenznahe Lieferung nach CH/DE möglich"
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      title: "Agrar-Demonstrationsmodell für AB HOF Messe",
      industry: "Landwirtschaft & Direktvermarktung",
      challenge: "Ein niederösterreichischer Agrarbetrieb wollte auf der AB HOF Messe ein neuartiges Verarbeitungskonzept für Direktvermarkter präsentieren.",
      solution: "Wir erstellten ein anschauliches Demonstrationsmodell mit beweglichen Elementen, das den Verarbeitungsprozess visualisiert. Farbcodierte Bereiche zeigten die verschiedenen Prozessschritte.",
      result: "Das interaktive Modell war der Hauptanziehungspunkt am Stand. Zahlreiche Direktvermarkter zeigten Interesse an dem Konzept.",
      specs: {
        size: "55 x 40 x 30 cm",
        material: "PETG robust + bewegliche Teile",
        time: "6 Werktage"
      },
      quote: "Endlich konnten wir zeigen, wie einfach unser System funktioniert. Das bewegliche Modell hat alles verständlich gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Landwirtschaft & Regionalmessen in NÖ",
    uniqueSellingPoints: [
      "Erfahrung mit Wieselburger Messe und AB HOF",
      "Zentrale Lage zwischen Wien und Linz",
      "Funktionsmodelle mit beweglichen Teilen"
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Weingut-Modell für Weinmesse",
      industry: "Wein & Tourismus",
      challenge: "Ein burgenländisches Weingut plante einen Neubau des Verkostungsraums und wollte das Konzept potenziellen Investoren auf einer Weinmesse präsentieren.",
      solution: "Wir fertigten ein detailliertes Architekturmodell des geplanten Weingut-Neubaus. Die umliegenden Weinberge wurden stilisiert dargestellt, um das Ensemble zu zeigen.",
      result: "Das Modell überzeugte zwei Investoren, die sich am Projekt beteiligten. Der Bau konnte früher als geplant beginnen.",
      specs: {
        size: "70 x 50 x 25 cm",
        material: "PLA weiß + Landschaftselemente",
        time: "7 Werktage"
      },
      quote: "Mit dem Modell konnten wir unsere Vision greifbar machen. Die Investoren waren sofort überzeugt."
    },
    materials: defaultMaterials,
    industryFocus: "Wein & Tourismus im Burgenland",
    uniqueSellingPoints: [
      "Erfahrung mit Wein- und Tourismusmessen",
      "Schnelle Lieferung über Wien/A4",
      "Architekturmodelle für Weingüter"
    ]
  },

  // Stadt-spezifische Daten
  'linz': {
    caseStudy: {
      title: "Kreativ-Installation für Tabakfabrik Linz",
      industry: "Kreativwirtschaft",
      challenge: "Ein Linzer Kreativstudio benötigte ein großformatiges Modell für eine Installation in der Tabakfabrik. Die geometrisch komplexe Form war mit herkömmlichen Methoden nicht realisierbar.",
      solution: "Wir druckten das Modell in Segmenten und fügten es nahtlos zusammen. Die innere Wabenstruktur reduzierte das Gewicht um 70% bei voller Stabilität.",
      result: "Die Installation wurde zum Publikumsliebling des Events. Das Studio erhielt mehrere Folgeaufträge für ähnliche Projekte.",
      specs: {
        size: "150 x 100 x 80 cm",
        material: "PLA weiß, mehrteilig",
        time: "5 Werktage + Same-Day Lieferung"
      },
      quote: "Die Nähe zu ekdruck war ein Riesenvorteil. Wir konnten das Modell selbst abholen und sofort einsetzen."
    },
    materials: defaultMaterials,
    industryFocus: "Kreativwirtschaft & Design in Linz",
    uniqueSellingPoints: [
      "Nur 20 Minuten von Linz entfernt",
      "Same-Day-Delivery nach Linz",
      "Partner für Tabakfabrik und Design Center Events"
    ]
  },

  'wels': {
    caseStudy: {
      title: "Landmaschinen-Demonstrationsmodell für AGRARIA",
      industry: "Landwirtschaft",
      challenge: "Ein Aussteller auf der AGRARIA Wels benötigte ein maßstabsgetreues Demonstrationsmodell einer neuen Landmaschine. Das Modell sollte alle wichtigen Details anschaulich darstellen.",
      solution: "Wir fertigten ein detailliertes Modell im Maßstab 1:10 mit beweglichen Elementen. Die Konstruktion ermöglichte das Öffnen wichtiger Komponenten zur Erklärung.",
      result: "Das Modell war leichter und detaillierter als vergleichbare Metallmodelle. Der Kunde setzte es auch nach der Messe für Kundenbesuche ein.",
      specs: {
        size: "45 x 25 x 20 cm",
        material: "PETG robust + bewegliche Teile",
        time: "4 Werktage"
      },
      quote: "Persönliche Abholung in Gunskirchen – und 10 Minuten später stand das Modell auf unserem Stand in Wels!"
    },
    materials: defaultMaterials,
    industryFocus: "Messen in Wels",
    uniqueSellingPoints: [
      "Direkter Nachbar der Messe Wels",
      "Persönliche Abholung möglich",
      "Last-Minute-Service für AGRARIA und Welser Messe"
    ]
  },

  'graz': {
    caseStudy: {
      title: "Produktpräsentation für Grazer Herbstmesse",
      industry: "Konsumgüter & Präsentation",
      challenge: "Ein steirisches Unternehmen wollte auf der Grazer Herbstmesse ein neues Produktsortiment mit einem überdimensionalen Schaumodell bewerben. Das Modell musste von Weitem sichtbar und fotografierbar sein.",
      solution: "Wir fertigten ein 120cm großes Modell mit leuchtenden Farben und glattem Finish. Die mehrteilige Konstruktion ermöglichte den Transport im Lieferwagen zur Messe Graz.",
      result: "Der Stand gewann den Publikumspreis für die beste Standgestaltung. Das Modell wird seitdem auf drei weiteren Messen eingesetzt.",
      specs: {
        size: "120 x 60 x 80 cm",
        material: "PLA mehrfarbig, lackiert",
        time: "7 Werktage"
      },
      quote: "Ein Modell, drei Messen – die Investition hat sich mehrfach bezahlt gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Messepräsentation & Events in Graz",
    uniqueSellingPoints: [
      "Express-Lieferung zur Messe Graz",
      "Erfahrung mit Häuslbauermesse und Herbstmesse",
      "Großformat-Modelle für maximale Standwirkung"
    ]
  },

  'klagenfurt': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Holzkonstruktions-Modell für Holzmesse Klagenfurt",
      industry: "Holzbau"
    },
    materials: [
      {
        name: "PLA Holzoptik",
        description: "Authentische Holzmaserung für Holzbau-Modelle. Perfekt für die Holzmesse.",
        bestFor: ["Holzkonstruktionen", "Möbeldesign", "Alpine Architektur"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Holzbau & Kärntner Messen",
    uniqueSellingPoints: [
      "Spezialist für Internationale Holzmesse",
      "Holzoptik-Materialien verfügbar",
      "Erfahrung mit Kärntner Ausstellern"
    ]
  },

  'villach': {
    caseStudy: {
      title: "Tourismusmodell für Villacher Kirchtag-Event",
      industry: "Tourismus & Events",
      challenge: "Ein Villacher Tourismusbetrieb brauchte ein ansprechendes Modell einer geplanten Thermenanlage als Blickfang bei einer Investorenveranstaltung während des Villacher Kirchtags.",
      solution: "Wir druckten ein stilisiertes Modell der Thermenanlage mit blau-transparenten PETG-Wasserflächen und weißen Gebäuden. Grüne PLA-Elemente stellten die Gartenlandschaft dar.",
      result: "Das Modell überzeugte auf der Veranstaltung und wurde anschließend im Foyer des Hotels als Dauerpräsentation eingesetzt.",
      specs: {
        size: "60 x 40 x 20 cm",
        material: "PLA weiß/grün + PETG blau",
        time: "5 Werktage"
      },
      quote: "Das Thermenmodell begeistert unsere Gäste täglich. Ein tolles Gesprächsstück im Hotelfoyer."
    },
    materials: defaultMaterials,
    industryFocus: "Tourismus & regionale Events in Villach",
    uniqueSellingPoints: [
      "Zuverlässige Lieferung nach Villach",
      "Tourismus-Kompetenz für Kärntner Events",
      "Modelle auch als Dauerpräsentation einsetzbar"
    ]
  },

  'st-poelten': {
    caseStudy: {
      title: "Standmodell für Gewerbemesse VAZ St. Pölten",
      industry: "Gewerbe & Regionalmessen",
      challenge: "Ein niederösterreichisches Unternehmen brauchte ein kompaktes Produktmodell für eine Gewerbemesse im VAZ St. Pölten. Das Modell sollte auf einem Stehtisch platzierbar und von allen Seiten betrachtet werden können.",
      solution: "Wir fertigten ein 360°-optimiertes Tischmodell aus weißem PLA+ mit farblichen Akzenten in der Corporate-Farbe. Die Rückseite war genauso detailliert wie die Front.",
      result: "Das Modell generierte deutlich mehr Gespräche als der bisherige Roll-up. Kunden konnten das Produkt von allen Seiten betrachten und verstehen.",
      specs: {
        size: "30 x 20 x 25 cm",
        material: "PLA+ weiß + farbige Akzente",
        time: "3 Werktage"
      },
      quote: "Klein, aber wirkungsvoll. Das Modell hat mehr Gespräche gebracht als jeder Prospekt."
    },
    materials: defaultMaterials,
    industryFocus: "Regionale Gewerbemessen in St. Pölten",
    uniqueSellingPoints: [
      "Schnelle Lieferung über A1",
      "Partner für VAZ St. Pölten Events",
      "Kompakte Tischmodelle für Gewerbeausstellungen"
    ]
  },

  'innsbruck': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Bergstation-Modell für Interalpin",
      industry: "Tourismus & Seilbahnen"
    },
    materials: [
      {
        name: "PLA Alpine Weiß",
        description: "Perfekt für Bergmodelle und alpine Architektur. Authentische Schneeoptik.",
        bestFor: ["Bergstationen", "Skigebiet-Modelle", "Alpine Projekte"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Wintersport & alpine Messen in Innsbruck",
    uniqueSellingPoints: [
      "Spezialist für Interalpin-Aussteller",
      "Erfahrung mit alpinen Geländemodellen",
      "Robuste Verpackung für Alpentransport"
    ]
  },

  'dornbirn': {
    caseStudy: {
      ...defaultCaseStudy,
      title: "Design-Objekt für Gustav Messe",
      industry: "Design & Lifestyle"
    },
    materials: [
      {
        name: "PLA Design Matt",
        description: "Edle matte Oberfläche für Designobjekte. Perfekt für Gustav-Aussteller.",
        bestFor: ["Designmöbel", "Produktpräsentationen", "Lifestyle-Objekte"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Design & Messen in Dornbirn",
    uniqueSellingPoints: [
      "Partner für Gustav Design-Messe",
      "Design-Kompetenz für kreative Projekte",
      "Grenznahe Lieferung CH/DE"
    ]
  }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EINZIGARTIGE FAQs PRO REGION – Messe
// Jede Region bekommt eigene Fragen & Schwerpunkte
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

regionalExtendedData['wien'].faqs = [
  { question: "Können Modelle direkt zur Reed Messe Wien geliefert werden?", answer: "Ja – wir liefern direkt an das Messegelände der Reed Messe Wien. Die Zustellung erfolgt über Nacht. Für Messen wie FERIEN-MESSE, BAUEN & WOHNEN oder die Wiener Immobilienmesse haben wir langjährige Logistik-Erfahrung." },
  { question: "Wie werden große Exponate sicher nach Wien transportiert?", answer: "Großformatige Messemodelle werden mehrteilig konstruiert und in Transportkoffern geliefert. Der Aufbau am Stand dauert typischerweise 15-20 Minuten. Für Wien nutzen wir versicherten Express-Versand." },
  { question: "Können Corporate-Farben für Wiener Messe-Aussteller exakt umgesetzt werden?", answer: "Über 20 Standard-Filamentfarben stehen zur Verfügung. Für exakte Corporate-Farben bieten wir professionelle Lackierung nach RAL oder Pantone an. Eine Farbprobe vorab ist auf Wunsch möglich." },
  { question: "Sind transparente Elemente für Messe-Exponate möglich?", answer: "Ja – mit PETG Transparent können Glasflächen, Flüssigkeiten oder Beleuchtungseffekte realistisch dargestellt werden. Das Material ist gleichzeitig schlagfest und transportrobust." },
  { question: "Wie viele Messemodelle können gleichzeitig produziert werden?", answer: "Unsere Kapazität erlaubt die parallele Fertigung beliebig vieler Modelle. Für Aussteller mit mehreren Standorten sind exakte Kopien in gleichbleibender Qualität möglich." },
];
regionalExtendedData['wien'].introText = "Direkt zur Reed Messe Wien geliefert – ob FERIEN-MESSE, BAUEN & WOHNEN oder Immobilienmesse. Wir fertigen Eyecatcher-Modelle, Produktpräsentationen und XXL-Exponate für Wiener Aussteller.";

regionalExtendedData['oberoesterreich'].faqs = [
  { question: "Kann ich Messemodelle persönlich in Gunskirchen abholen?", answer: "Ja – unser Standort in Gunskirchen ist nur 10 Minuten von der Messe Wels entfernt. Persönliche Abholung ist jederzeit nach Terminvereinbarung möglich. Same-Day-Service verfügbar." },
  { question: "Gibt es Same-Day-Fertigung für Last-Minute-Messe-Projekte?", answer: "Ja – als lokaler Hersteller in Oberösterreich können wir bei dringenden Anfragen am selben Tag fertigen und übergeben. Besonders für Aussteller der Welser Messe und Energiesparmesse ideal." },
  { question: "Wie robust sind 3D-gedruckte Messemodelle bei Mehrfacheinsatz?", answer: "PETG-Modelle sind schlagzäh und kratzfest – ideal für den wiederholten Messeeinsatz. Viele Kunden setzen unsere Modelle auf 5-10 Messen ein, ohne dass die Qualität nachlässt." },
  { question: "Können Modelle nach der Messe als Showroom-Objekte weiterverwendet werden?", answer: "Absolut – alle unsere Messemodelle sind als Dauerpräsentation geeignet. PLA hält Indoor jahrelang. Für Schaufenster oder Sonnenlicht empfehlen wir ASA als UV-beständiges Material." },
  { question: "Welche oberösterreichischen Messen werden regelmäßig beliefert?", answer: "Wir beliefern alle großen OÖ-Messen: Welser Messe, Energiesparmesse, AGRARIA, Jugend & Beruf, und Power Circle. Durch unsere Nähe bieten wir auch kurzfristige Expresslieferung." },
];
regionalExtendedData['oberoesterreich'].introText = "Direkt vom Hersteller in Gunskirchen – nur 10 Minuten zur Messe Wels. Same-Day-Abholung, lokale Beratung und Express-Service für alle oberösterreichischen Messen.";

regionalExtendedData['steiermark'].faqs = [
  { question: "Können überdimensionale Eyecatcher für die Grazer Herbstmesse gefertigt werden?", answer: "Ja – wir fertigen Modelle bis 2 Meter Höhe. Mehrteilige Konstruktionen ermöglichen den Transport im PKW. Der Aufbau am Stand ist in wenigen Minuten erledigt." },
  { question: "Wie wird ein großes Modell sicher zur Messe Graz transportiert?", answer: "Unsere modulare Bauweise mit Steckverbindungen macht den Transport einfach. Jedes Teil wird einzeln in Schaumstoff verpackt. Lieferzeit nach Graz: 1-2 Werktage." },
  { question: "Welche Nachbearbeitung ist für messetaugliche Oberflächen empfehlenswert?", answer: "Für optimale Messeoptik empfehlen wir Schleifen und Grundierung bei großen Flächen, Lackierung für glatte Oberflächen und farbliche Highlights durch Airbrush-Akzente." },
  { question: "Eignen sich 3D-gedruckte Modelle auch für die Häuslbauermesse?", answer: "Ja – besonders für Aussteller, die Gebäudekonzepte oder Produkte greifbar präsentieren möchten. Physische Modelle steigern die Aufmerksamkeit am Stand nachweislich." },
  { question: "Können Modelle für steirische Branchenmessen individuell gestaltet werden?", answer: "Jedes Modell wird individuell nach Ihren Vorgaben gefertigt. Von der Farbe über die Größe bis zur Oberflächenbehandlung – alles wird an Ihre Messepräsentation angepasst." },
];
regionalExtendedData['steiermark'].introText = "Für Grazer Herbstmesse, Häuslbauermesse und Frühjahrsmesse – wir fertigen XXL-Exponate und Präsentationsmodelle, die steirische Messebesucher begeistern.";

regionalExtendedData['salzburg'].faqs = [
  { question: "Können Kunstobjekt-Modelle für die Art & Antique Salzburg gefertigt werden?", answer: "Ja – wir fertigen hochdetaillierte Modelle in feiner 0.1mm Auflösung. Spezialveredelungen wie Bronze-Patina, Marmor-Optik oder Gold-Finish sind möglich." },
  { question: "Wie realistisch sind Materialimitationen (Bronze, Marmor)?", answer: "Durch spezielle Filamente und professionelle Nachbearbeitung erreichen wir täuschend echte Materialoptiken. Bronze-Patina, Stein-Texturen und Holzmaserungen sind besonders beliebt bei Galerien." },
  { question: "Können fragile Modelle für Messen sicher verpackt werden?", answer: "Jedes Modell erhält eine maßgefertigte Verpackung aus Schaumstoff. Für die Lieferung nach Salzburg nutzen wir versicherten Express-Versand mit Tracking." },
  { question: "Eignen sich 3D-gedruckte Modelle für Luxusgüter-Messen?", answer: "Ja – mit Premium-Oberflächen und Spezialfinishes erreichen unsere Modelle ein Qualitätsniveau, das in der Luxusgüterbranche überzeugt. Hochglanz, Matt-Edel oder Metallic möglich." },
  { question: "Wie schnell ist die Lieferung zum Messezentrum Salzburg?", answer: "Über die A1 Westautobahn erreichen unsere Sendungen Salzburg in 1-2 Werktagen. Express-Lieferung über Nacht ist bei dringenden Messeterminen möglich." },
];
regionalExtendedData['salzburg'].introText = "Hochwertige Exponate für Art & Antique, Salzburger Tourismusmessen und Kulturevents. Spezialfinishes in Bronze, Marmor und Metallic-Optik für anspruchsvolle Aussteller.";

regionalExtendedData['kaernten'].faqs = [
  { question: "Können Holzoptik-Modelle für die Internationale Holzmesse gefertigt werden?", answer: "Ja – mit speziellem Holz-PLA erhalten Modelle eine authentische Holzmaserung. Verschiedene Holztöne von hell (Fichte) bis dunkel (Nussbaum) sind verfügbar." },
  { question: "Sind funktionale Demonstrationsmodelle mit beweglichen Teilen möglich?", answer: "Ja – Scharniere, Steckverbindungen und herausnehmbare Elemente können direkt ins Modell integriert werden. Ideal für die Demonstration von Bausystemen auf der Holzmesse." },
  { question: "Wie lange halten 3D-gedruckte Messemodelle?", answer: "PLA-Modelle sind Indoor praktisch unbegrenzt haltbar. Für Outdoor-Events oder Modelle mit Sonneneinstrahlung empfehlen wir ASA – UV-beständig und witterungsfest." },
  { question: "Können mehrere unterschiedliche Modelle gleichzeitig bestellt werden?", answer: "Ja – unsere Druckkapazität erlaubt die parallele Fertigung verschiedener Modelle. Besonders für Aussteller, die mehrere Produktvarianten zeigen möchten." },
  { question: "Wie ist die Lieferlogistik nach Kärnten?", answer: "Versand über die Tauernautobahn in 2-3 Werktagen. Express-Zustellung über Nacht ist für dringende Messetermine jederzeit möglich." },
];
regionalExtendedData['kaernten'].introText = "Spezialist für die Internationale Holzmesse Klagenfurt – authentische Holzoptik-Modelle, modulare Bausysteme und robuste Exponate für Kärntner Aussteller.";

regionalExtendedData['tirol'].faqs = [
  { question: "Können topografische Geländemodelle für die Interalpin erstellt werden?", answer: "Ja – auf Basis von Höhendaten (DGM/DEM) erstellen wir maßstabsgetreue Geländemodelle mit Pistenflächen, Seilbahntrassen und Bergstationen. Ideal für Skigebietsprojekte." },
  { question: "Wie werden Schneedecken und Pistenflächen im Modell dargestellt?", answer: "Weißes PLA bildet die Schneeoberfläche, grüne Flächen zeigen Almgebiete, blaue Markierungen die Pistenschwierigkeitsgrade. Seilbahnstützen werden als abnehmbare Elemente gefertigt." },
  { question: "Wie wird ein Geländemodell sicher nach Innsbruck transportiert?", answer: "Große Geländemodelle werden mehrteilig gefertigt. Jedes Segment passt in Standardverpackungen. Die Montage am Messestand erfolgt durch einfaches Zusammenstecken." },
  { question: "Wie schwer ist ein großes Geländemodell aus PLA?", answer: "Ein Geländemodell 120x90cm wiegt mit unserer Leichtbau-Technik nur ca. 2-3 kg. Das ist rund 70% leichter als vergleichbare Holz- oder Gipsmodelle." },
  { question: "Können DGM-Daten als Grundlage für topografische Modelle verwendet werden?", answer: "Ja – wir verarbeiten digitale Geländemodelle direkt. Höhenprofile, Flusssysteme und Geländeformen werden präzise im 3D-Modell umgesetzt." },
];
regionalExtendedData['tirol'].introText = "Topografische Geländemodelle, Skigebiet-Visualisierungen und Bergstation-Modelle für die Interalpin und Tiroler Tourismusmessen – maßstabsgetreu aus Höhendaten.";

regionalExtendedData['vorarlberg'].faqs = [
  { question: "Können organische Designformen für die Gustav-Messe gedruckt werden?", answer: "Ja – 3D-Druck ist ideal für fließende, organische Formen, die mit traditionellen Methoden kaum realisierbar wären. Wir optimieren die Druckausrichtung für perfekte Oberflächen." },
  { question: "Ist eine Lieferung in die Schweiz oder nach Süddeutschland möglich?", answer: "Ja – durch unsere österreichweite Versandlogistik ist auch die Lieferung in grenznahe Gebiete der Schweiz und Süddeutschlands problemlos möglich." },
  { question: "Welche Oberflächenqualität ist für Design-Messen erreichbar?", answer: "Mit 0.1mm Schichthöhe und professioneller Nachbearbeitung erreichen wir Oberflächen, die höchste Design-Ansprüche erfüllen. Matt, seidenmatt oder hochglänzend – nach Wunsch." },
  { question: "Können maßstabsgetreue Möbelmodelle für Aussteller gefertigt werden?", answer: "Ja – vom Maßstab 1:10 bis 1:1 für kleine Designobjekte. Organische Formen, Texturen und Farbverläufe können präzise umgesetzt werden." },
  { question: "Wie werden filigrane Designdetails beim Transport geschützt?", answer: "Empfindliche Elemente erhalten Stützstrukturen während des Drucks und werden in maßgefertigten Verpackungen geschützt. Transport zur Gustav-Messe in 2-3 Tagen." },
];
regionalExtendedData['vorarlberg'].introText = "Designmodelle für die Gustav-Messe Dornbirn – organische Formen, edle Oberflächen und grenznahe Lieferung in den Bodenseeraum, nach Liechtenstein und die Ostschweiz.";

regionalExtendedData['niederoesterreich'].faqs = [
  { question: "Können Demonstrationsmodelle für die AB HOF Messe gefertigt werden?", answer: "Ja – wir haben langjährige Erfahrung mit Modellen für Agrarmessen. Interaktive Modelle mit beweglichen Teilen und farbcodierte Prozessmodelle sind unsere Spezialität." },
  { question: "Sind Modelle mit beweglichen Funktionselementen möglich?", answer: "Ja – Klappenmechanismen, herausnehmbare Komponenten und drehbare Teile können direkt ins Modell integriert werden. Ideal für die Demonstration von Verarbeitungsprozessen." },
  { question: "Wie schnell ist die Lieferung nach Niederösterreich?", answer: "Über die A1 erreichen unsere Sendungen ganz Niederösterreich in 1-2 Werktagen. Für St. Pölten und das Mostviertel sogar noch schneller." },
  { question: "Eignen sich 3D-Modelle für Direktvermarkter-Präsentationen?", answer: "Ja – anschauliche Modelle erklären komplexe Verarbeitungsprozesse besser als Bilder. Ideal für Direktvermarkter auf Messen und Verkostungen." },
  { question: "Können farblich codierte Prozessmodelle erstellt werden?", answer: "Ja – wir drucken einzelne Bereiche in unterschiedlichen Farben, sodass Prozessschritte auf einen Blick erkennbar sind. Bis zu 6 verschiedene Farben in einem Modell." },
];
regionalExtendedData['niederoesterreich'].introText = "Interaktive Messemodelle für AB HOF, Wieselburger Messe und niederösterreichische Regionalmessen – mit beweglichen Teilen und farbcodierter Prozessvisualisierung.";

regionalExtendedData['burgenland'].faqs = [
  { question: "Können Modelle für Weingut-Präsentationen auf Weinmessen gefertigt werden?", answer: "Ja – wir fertigen Displayobjekte, Produktmodelle und Architekturmodelle von Weingütern. Landschaftselemente wie Weinberge und Terrassen inklusive." },
  { question: "Sind transparente Elemente wie Wasserflächen oder Glas möglich?", answer: "Ja – PETG Transparent eignet sich perfekt für Pool-Bereiche, Glasfassaden oder Wasserelemente. In Kombination mit weißem PLA entstehen eindrucksvolle Gesamtansichten." },
  { question: "Wie wird ein Messemodell ins Burgenland geliefert?", answer: "Versand über Wien/A4 in 1-2 Werktagen. Für Eisenstadt, Oberpullendorf oder Güssing bieten wir Express-Zustellung über Nacht an." },
  { question: "Können individuelle Displayhalter für Weinflaschen gefertigt werden?", answer: "Ja – maßgeschneiderte Displays für Weinflaschen in Ihrer Corporate-Farbe. Logo-Integration und individuelle Formgebung nach Wunsch." },
  { question: "Eignen sich Messemodelle als Dauerpräsentation im Weingut?", answer: "Absolut – PLA-Modelle sind als Indoor-Dauerpräsentation unbegrenzt einsetzbar. Viele Weingüter stellen unsere Modelle nach der Messe im Verkostungsraum aus." },
];
regionalExtendedData['burgenland'].introText = "Messemodelle für die burgenländische Wein- und Tourismusbranche – von edlen Weingut-Modellen bis zu Displayobjekten für Weinmessen und Verkostungen.";

regionalExtendedData['linz'].faqs = [
  { question: "Können kreative Installationsmodelle für Linzer Events gefertigt werden?", answer: "Ja – von der Tabakfabrik bis zum Lentos: Wir fertigen maßgeschneiderte Modelle für Events und Installationen in Linz. Geometrisch komplexe Formen sind unsere Stärke." },
  { question: "Bieten Sie Same-Day-Service für Linzer Aussteller?", answer: "Ja – unser Standort in Gunskirchen ist nur 20 Minuten von Linz entfernt. Same-Day-Fertigung und persönliche Abholung sind jederzeit möglich." },
  { question: "Wie groß können Installationsmodelle werden?", answer: "Bis zu 2 Meter und darüber – mehrteilig konstruiert und nahtlos zusammengefügt. Die innere Wabenstruktur reduziert das Gewicht um bis zu 70%." },
  { question: "Sind geometrisch komplexe, unregelmäßige Formen realisierbar?", answer: "Ja – organische, parametrische und mathematisch definierte Formen können ohne Mehrkosten gedruckt werden. Genau hier zeigt FDM-3D-Druck seine Stärke." },
  { question: "Wie werden mehrteilige Modelle am Standort zusammengebaut?", answer: "Wir konstruieren passgenaue Steckverbindungen oder Magnetsysteme. Der Zusammenbau vor Ort dauert typischerweise 10-20 Minuten – ohne Werkzeug." },
];
regionalExtendedData['linz'].introText = "Nur 20 Minuten von Linz – kreative Messemodelle, Installationsobjekte und Express-Exponate mit Same-Day-Abholung für Linzer Aussteller und Events.";

regionalExtendedData['wels'].faqs = [
  { question: "Können Modelle am selben Tag für die Welser Messe geliefert werden?", answer: "Ja – unser Standort ist nur 10 Minuten entfernt. Same-Day-Abholung in Gunskirchen oder Direktlieferung zum Messestand ist unser Standard für Welser Aussteller." },
  { question: "Sind Demonstrationsmodelle mit herausnehmbaren Teilen möglich?", answer: "Ja – aufklappbare Bereiche, herausnehmbare Komponenten und bewegliche Elemente machen technische Erklärungen am Messestand anschaulich." },
  { question: "Wie kurzfristig kann ein Messemodell für die AGRARIA bestellt werden?", answer: "Dank unserer lokalen Nähe können wir auch Last-Minute-Aufträge bis 24h vor Messebeginn annehmen. Sprechen Sie uns bei dringenden Projekten direkt an." },
  { question: "Wie langlebig sind Messemodelle bei mehrtägigem Dauereinsatz?", answer: "PETG-Modelle sind extrem robust – kratzfest, schlagzäh und formstabil. Bei typischem Messeeinsatz über 4-5 Tage gibt es keinerlei Qualitätsverlust." },
  { question: "Können auch Modellständer und Displays mitgefertigt werden?", answer: "Ja – passende Sockel, Ständer und Displayhalter als Set mit dem Messemodell. Alles aus einem Guss und in Ihrer Corporate-Farbe." },
];
regionalExtendedData['wels'].introText = "Direkter Nachbar der Messe Wels – Same-Day-Service, persönliche Abholung und Last-Minute-Express für AGRARIA, Energiesparmesse und Welser Messe.";

regionalExtendedData['graz'].faqs = [
  { question: "Können XXL-Exponate für die Grazer Messen gefertigt werden?", answer: "Ja – ob Herbstmesse, Häuslbauermesse oder Frühjahrsmesse: Wir fertigen Modelle bis 2m Höhe. Mehrteilige Konstruktionen ermöglichen den Transport im Lieferwagen." },
  { question: "Wie wird die Oberfläche für messetaugliche Optik vorbereitet?", answer: "Je nach Anforderung: Standard-Finish direkt vom Drucker, geschliffen und grundiert, oder professionell lackiert in Wunschfarbe." },
  { question: "Können Modelle in leuchtenden Corporate-Farben gedruckt werden?", answer: "Ja – über 20 Standardfarben verfügbar, darunter Neonfarben und Metallicfilamente. Für exakte Corporate-Farben bieten wir Sonderlackierung nach RAL an." },
  { question: "Eignen sich 3D-Modelle auch als Trophäen für Messepreise?", answer: "Ja – wir fertigen individuelle Trophäen und Awards für Messepreise und Publikumswettbewerbe. Jedes Stück ein Unikat in gewünschter Form und Farbe." },
  { question: "Wie ist die Lieferzeit zur Messe Graz?", answer: "1-2 Werktage über die A9. Express-Zustellung über Nacht ist bei dringenden Messeterminen jederzeit möglich. Für große Projekte empfehlen wir 5-7 Tage Vorlauf." },
];
regionalExtendedData['graz'].introText = "Messemodelle für Grazer Herbstmesse, Häuslbauermesse und Frühjahrsmesse – XXL-Exponate, Publikumsmagnete und Corporate-Modelle für steirische Aussteller.";

regionalExtendedData['klagenfurt'].faqs = [
  { question: "Können authentische Holzoptik-Modelle zur Holzmesse geliefert werden?", answer: "Ja – unser holzfarbenes PLA-Filament imitiert echte Holzmaserung: Fichte hell, Eiche natur oder Nussbaum dunkel. Direkte Lieferung zur Messe Klagenfurt möglich." },
  { question: "Welche Holzarten können im 3D-Druck imitiert werden?", answer: "Helle Nadelhölzer (Fichte, Lärche), Mitteltöne (Eiche, Buche) und dunkle Harthölzer (Nussbaum, Wenge) – durch Spezialfilamente mit echten Holzfasern." },
  { question: "Sind modulare Bausystem-Modelle für die Holzmesse realisierbar?", answer: "Ja – Modelle mit abnehmbaren Dachelementen, herausnehmbaren Wandteilen und sichtbaren Verbindungsdetails. Ideal für die Demonstration innovativer Holzbausysteme." },
  { question: "Können Modelle nach der Holzmesse im Showroom eingesetzt werden?", answer: "Ja – Holzoptik-Modelle ergänzen reale Holzproben perfekt in Ausstellungsräumen und Planungsbüros. Als Indoor-Dauerpräsentation unbegrenzt einsetzbar." },
  { question: "Wie werden empfindliche Holzoptik-Modelle für den Transport geschützt?", answer: "Maßgefertigte Schaumstoff-Einlagen schützen jedes Modellteil. Für den Versand nach Klagenfurt verwenden wir verstärkte Kartonagen mit Tracking." },
];
regionalExtendedData['klagenfurt'].introText = "Holzoptik-Modelle und modulare Bausystem-Exponate für die Internationale Holzmesse Klagenfurt – authentische Maserung, abnehmbare Elemente und anschauliche Verbindungsdetails.";

regionalExtendedData['villach'].faqs = [
  { question: "Können Tourismusmodelle für Kärntner Events gefertigt werden?", answer: "Ja – von Thermenanlagen über Hotelkomplexe bis zu Freizeitparks: Wir fertigen ansprechende Präsentationsmodelle für die Tourismus- und Eventbranche in Kärnten." },
  { question: "Ist eine Kombination aus Gebäuden und Landschaftselementen möglich?", answer: "Ja – Gebäude aus weißem PLA, Wasserflächen aus PETG Transparent, Grünflächen aus grünem PLA. So entstehen lebendige, realistische Gesamtansichten." },
  { question: "Können Messemodelle gleichzeitig als Dauerinstallation im Hotel dienen?", answer: "Ja – viele unserer Modelle werden nach der Messe im Hotelfoyer oder Empfangsbereich als permanente Präsentation eingesetzt." },
  { question: "Wie werden transparente Wasserflächen realistisch dargestellt?", answer: "PETG Transparent in verschiedenen Blautönen imitiert Seen, Pools und Flüsse. Durch leichte Texturierung entsteht ein natürlicher Wassereffekt." },
  { question: "Wie ist die Lieferzeit nach Villach?", answer: "2-3 Werktage über die Tauernautobahn. Express-Zustellung über Nacht für dringende Messetermine möglich." },
];
regionalExtendedData['villach'].introText = "Tourismusmodelle für Villacher Events und Kärntner Messen – Thermenanlagen, Hotelmodelle und Landschaftsmodelle mit transparenten Wasserflächen.";

regionalExtendedData['st-poelten'].faqs = [
  { question: "Können kompakte Tischmodelle für das VAZ St. Pölten gefertigt werden?", answer: "Ja – wir fertigen 360°-optimierte Modelle speziell für Stehtisch-Präsentationen. Gleichmäßig detailliert von allen Seiten, mit stabilem Standfuß." },
  { question: "Wie werden Modelle für Stehtisch-Präsentationen optimiert?", answer: "Proportionen werden an die Betrachtungshöhe angepasst, der Standfuß extra stabil konstruiert, und alle Seiten erhalten gleichmäßige Detaillierung." },
  { question: "Können 3D-Logo-Elemente ins Messemodell integriert werden?", answer: "Ja – Firmenlogos als erhabene 3D-Elemente auf dem Modell oder als separater Aufsatz. In der Corporate-Farbe des Unternehmens." },
  { question: "Eignen sich kompakte Modelle auch für regionale Gewerbeschauen?", answer: "Ja – gerade bei kleineren Messen und Gewerbeausstellungen im VAZ wirken physische Modelle als starke Blickfänger und Gesprächsstarter." },
  { question: "Wie schnell ist die Lieferung nach St. Pölten?", answer: "1-2 Werktage über die A1 Westautobahn. St. Pölten liegt auf unserer direkten Versandroute Richtung Wien." },
];
regionalExtendedData['st-poelten'].introText = "Kompakte Tischmodelle und Standexponate für das VAZ St. Pölten und niederösterreichische Gewerbeschauen – 360°-optimiert und mit Logo-Integration.";

regionalExtendedData['innsbruck'].faqs = [
  { question: "Können Bergstation- und Seilbahnmodelle für die Interalpin gefertigt werden?", answer: "Ja – maßstabsgetreue Modelle von Seilbahnstationen, Bergstationen und Liftanlagen. Abnehmbare Stützen und Gondeln ermöglichen die Demonstration geplanter Erweiterungen." },
  { question: "Wie werden realistische Schnee- und Gletscheroberflächen dargestellt?", answer: "Schnee-weißes PLA mit leichter Textur für Bergflanken, PETG Frost-Optik für Gletscherelemente, und farbige Markierungen für Pisten und Wanderwege." },
  { question: "Können Modelle für Tiroler Tourismusmessen gefertigt werden?", answer: "Ja – von der Interalpin über die Ferienmesse Innsbruck bis zu regionalen Tourismusschauen. Skigebiet-Modelle, Hotelmodelle und Anlagen in höchster Qualität." },
  { question: "Wie stabil sind Geländemodelle beim Transport nach Tirol?", answer: "Unsere mehrteilige Konstruktion mit Steckverbindungen ist transportoptimiert. Bruchsichere Verpackung mit Schaumstoff-Einlagen schützt auch bei längerem Transport." },
  { question: "Können Höhenunterschiede realistisch dargestellt werden?", answer: "Ja – basierend auf DGM-Daten werden Höhenprofile, Täler, Grate und Gipfel präzise im Modell umgesetzt. Ideal für Skigebiet-Planungen und Touristik-Präsentationen." },
];
regionalExtendedData['innsbruck'].introText = "Interalpin-Modelle, Skigebiet-Visualisierungen und Bergstation-Exponate für Innsbrucker Tourismusmessen – topografisch präzise aus Höhendaten gefertigt.";

regionalExtendedData['dornbirn'].faqs = [
  { question: "Können Design-Möbelmodelle für die Gustav-Messe gefertigt werden?", answer: "Ja – maßstabsgetreue Modelle von Möbeldesigns, auch mit organischen, fließenden Formen. Matte oder hochglänzende Oberflächen nach Wunsch." },
  { question: "Welche Oberflächenqualität ist für Design-Aussteller erreichbar?", answer: "Mit 0.1mm Schichthöhe und professioneller Nachbearbeitung erreichen wir Oberflächen, die höchste Design-Ansprüche erfüllen. Matt-edel, seidenglanz oder spiegelnd." },
  { question: "Ist eine Lieferung auch nach Lindau, Konstanz oder in die Schweiz möglich?", answer: "Ja – Vorarlbergs Grenzlage ermöglicht unkomplizierte Lieferung in den Bodenseeraum, nach Liechtenstein und in die Ostschweiz." },
  { question: "Wie werden organische Formen ohne sichtbare Drucklinien erreicht?", answer: "Optimierte Druckausrichtung minimiert sichtbare Schichtlinien. Nachbearbeitung durch Schleifen und Grundierung ergibt makellose Oberflächen für Design-Exponate." },
  { question: "Können Designobjekte in limitierter Auflage für Messe-Besucher produziert werden?", answer: "Ja – identische Serien ab 10 Stück. Ideal als Give-aways oder limitierte Editions für Design-Events und Ausstellungen." },
];
regionalExtendedData['dornbirn'].introText = "Design-Exponate für die Gustav-Messe – organische Formen, Premium-Oberflächen und grenznahe Lieferung nach Dornbirn, in die Schweiz und nach Süddeutschland.";

// Helper to get extended data by slug with fallback
export const getExtendedDataBySlug = (slug: string): RegionalExtendedData => {
  return regionalExtendedData[slug] || {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Messemodelle",
    uniqueSellingPoints: [
      "Professionelle 3D-gedruckte Messemodelle",
      "Express-Lieferung möglich",
      "Persönliche Beratung"
    ]
  };
};
