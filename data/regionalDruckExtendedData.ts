// Extended data for regional 3D-Druck pages
// Unique case studies, material recommendations, and industry focus per region
// WKO-KONFORM: Nur Anschauungsmodelle, Designstudien, Präsentationsmodelle
// KEINE Funktionsteile, Serienfertigung, Medizintechnik, Maschinenbau

import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

export interface RegionalDruckExtendedData {
  caseStudy: CaseStudyData;
  materials: MaterialRecommendation[];
  industryFocus: string;
  uniqueSellingPoints: string[];
  faqs?: { question: string; answer: string }[];
  introText?: string;
}

const defaultMaterials: MaterialRecommendation[] = [
  {
    name: "PLA+",
    description: "Vielseitig, umweltfreundlich und präzise. Der Allrounder für Designstudien, Präsentationsmodelle und Anschauungsobjekte mit ausgezeichneter Oberflächenqualität.",
    bestFor: ["Designstudien", "Präsentationsmodelle", "Anschauungsobjekte"],
    icon: "palette"
  },
  {
    name: "PETG",
    description: "Schlagzäh, chemisch beständig und transparent verfügbar. Ideal für robuste Schaumodelle und Konzeptdarstellungen.",
    bestFor: ["Robuste Modelle", "Outdoor-Schaumodelle", "Transparente Objekte"],
    icon: "shield"
  },
  {
    name: "ASA",
    description: "UV-beständig und witterungsfest. Perfekt für Modelle, die dauerhaft im Außenbereich ausgestellt werden.",
    bestFor: ["Außen-Ausstellung", "UV-beständige Modelle", "Langlebige Schauobjekte"],
    icon: "feather"
  }
];

export const regionalDruckExtendedData: Record<string, RegionalDruckExtendedData> = {
  'wien': {
    caseStudy: {
      title: "Pitch-Modell für Wiener Startup",
      industry: "Startups & Kreativwirtschaft",
      challenge: "Ein Wiener Startup benötigte innerhalb von 48 Stunden drei Gehäuse-Designstudien für einen Investoren-Pitch. Die Modelle mussten professionell aussehen und die Produktidee greifbar machen.",
      solution: "Wir fertigten drei Designvarianten in unterschiedlichen Proportionen aus weißem PLA+ mit feiner 0.12mm Auflösung. Jede Variante zeigte einen anderen Designansatz. Alle drei Modelle waren innerhalb von 36 Stunden fertig.",
      result: "Das Startup überzeugte die Investoren mit greifbaren Modellen statt nur Bildschirmpräsentationen. Die physischen Modelle machten den Unterschied im Pitch.",
      specs: {
        size: "3x 12 x 8 x 4 cm",
        material: "PLA+ weiß, 0.12mm",
        time: "36 Stunden Express"
      },
      quote: "Drei Designvarianten in 36 Stunden – das hat den Investoren gezeigt, wie durchdacht unser Produkt ist."
    },
    materials: [
      {
        name: "PLA+ Premium",
        description: "Glatte Oberflächen für professionelle Präsentationen. Ideal für Startup-Pitches und Investorenmodelle in der Wiener Tech-Szene.",
        bestFor: ["Pitch-Modelle", "Designstudien", "Konzeptvisualisierungen"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Teiltransparent für Schaumodelle, bei denen das Innere sichtbar sein soll. Robust und langlebig.",
        bestFor: ["Transparente Schaumodelle", "Displayobjekte", "Konzeptmodelle"],
        icon: "shield"
      },
      {
        name: "TPU Flexibel",
        description: "Elastisches Material für flexible Designstudien. Perfekt für Modelle, die Biegsamkeit demonstrieren sollen.",
        bestFor: ["Flexible Designstudien", "Ergonomie-Modelle", "Konzeptmuster"],
        icon: "feather"
      }
    ],
    industryFocus: "Startups & Kreativwirtschaft in Wien",
    uniqueSellingPoints: [
      "Express-Modelle für Wiener Startups",
      "Erfahrung mit Investoren-Pitch-Modellen",
      "Vielfältige Materialien für Designstudien"
    ]
  },

  'linz': {
    caseStudy: {
      title: "Schnittmodell für Linzer Präsentation",
      industry: "Industriepräsentation",
      challenge: "Ein Linzer Unternehmen brauchte für eine interne Schulung ein Schnittmodell, das den Aufbau eines Produktes zeigt. Das Modell musste anschaulich und farblich differenziert sein.",
      solution: "Wir erstellten ein mehrfarbiges Schnittmodell aus PLA+ in vier Farben. Jede Schicht wurde farblich codiert, damit der Aufbau auf einen Blick verständlich wird. Same-Day-Abholung in Gunskirchen.",
      result: "Die Schulungsteilnehmer verstanden den Produktaufbau deutlich schneller als mit Bildmaterial. Das Modell wird seitdem bei jeder Einschulung eingesetzt.",
      specs: {
        size: "20 x 15 x 10 cm",
        material: "PLA+ vierfarbig",
        time: "Same Day – Abholung in Gunskirchen"
      },
      quote: "Ein Bild sagt mehr als tausend Worte – ein Modell zum Anfassen sagt noch mehr."
    },
    materials: [
      {
        name: "PLA+ Präzision",
        description: "Für maßhaltige Modelle mit sauberer Oberfläche. ±0.2mm Toleranz.",
        bestFor: ["Schnittmodelle", "Schulungsmodelle", "Präsentationsobjekte"],
        icon: "palette"
      },
      {
        name: "ASA Outdoor",
        description: "UV- und witterungsbeständig. Für Modelle, die im Freien oder in rauen Umgebungen ausgestellt werden.",
        bestFor: ["Outdoor-Schaumodelle", "Dauerausstellungen", "Wetterfeste Objekte"],
        icon: "feather"
      }
    ],
    industryFocus: "Industriepräsentation in Linz",
    uniqueSellingPoints: [
      "Nur 20 Minuten von Linz – Same-Day-Abholung",
      "Erfahrung mit Schulungs- und Anschauungsmodellen",
      "Express-Service für dringende Präsentationen"
    ]
  },

  'graz': {
    caseStudy: {
      title: "Designstudie für steirisches Technologieunternehmen",
      industry: "Produktdesign & Konzeptentwicklung",
      challenge: "Ein steirisches Technologieunternehmen entwickelte ein neues Produktdesign und benötigte 50 Gehäuse-Designstudien für interne Bewertungsrunden. Die Modelle mussten maßgenau und professionell sein.",
      solution: "Wir fertigten 50 Designstudien aus schwarzem ASA mit fein aufgelösten Details. Die Oberflächen wurden nachbearbeitet für ein hochwertiges Erscheinungsbild.",
      result: "Die Bewertungsrunden verliefen deutlich effizienter mit physischen Modellen. Der Kunde spart Zeit in der Designentscheidung, weil alle Beteiligten das Objekt anfassen können.",
      specs: {
        size: "50x 6 x 4 x 3 cm",
        material: "ASA schwarz, nachbearbeitet",
        time: "5 Werktage"
      },
      quote: "Physische Modelle beschleunigen Designentscheidungen enorm – jeder kann das Objekt drehen und bewerten."
    },
    materials: [
      {
        name: "ASA Premium",
        description: "UV-beständig, witterungsfest, hochwertige Oberfläche. Ideal für Designmodelle, die langlebig sein sollen.",
        bestFor: ["Designstudien", "Konzeptmodelle", "Outdoor-Schaumodelle"],
        icon: "shield"
      },
      {
        name: "PETG Transparent",
        description: "Für Sichtmodelle und transparente Konzeptdarstellungen. Zeigt innere Strukturen.",
        bestFor: ["Sichtmodelle", "Konzeptvisualisierungen", "Transparente Objekte"],
        icon: "palette"
      },
      {
        name: "PLA+ Rapid",
        description: "Für schnelle Designvalidierung und Formchecks. Günstig und präzise.",
        bestFor: ["Schnelle Iterationen", "Formstudien", "Designvalidierung"],
        icon: "feather"
      }
    ],
    industryFocus: "Produktdesign & Technologie in Graz",
    uniqueSellingPoints: [
      "ASA-Expertise für hochwertige Designmodelle",
      "Projektmengen ab 10 Stück mit Mengenrabatt",
      "Express-Lieferung über A9 nach Graz"
    ]
  },

  'salzburg': {
    caseStudy: {
      title: "Displayhalter-Serie für Salzburger Hotellerie",
      industry: "Tourismus & Hotellerie",
      challenge: "Eine Salzburger Hotelkette suchte individuelle Displayhalter für Tablets an der Rezeption. Die Halterungen sollten zum CI des Hotels passen und in 15 Filialen identisch eingesetzt werden.",
      solution: "Wir entwickelten einen maßgeschneiderten Tablethalter mit integriertem Kabelmanagement und Logo-Prägung. 30 Stück in der Corporate-Farbe des Hotels aus PETG gefertigt.",
      result: "Alle 15 Filialen wurden einheitlich ausgestattet. Die Gäste nutzen die Check-in-Terminals intuitiv. Nachbestellungen erfolgen per E-Mail in 3 Werktagen.",
      specs: {
        size: "30x 25 x 18 x 12 cm",
        material: "PETG in Sonderfarbe",
        time: "5 Werktage"
      },
      quote: "Endlich Halterungen, die zu unserem Design passen. Die Gäste nutzen die Terminals jetzt viel häufiger."
    },
    materials: defaultMaterials,
    industryFocus: "Tourismus & Gastronomie in Salzburg",
    uniqueSellingPoints: [
      "Erfahrung mit Hotelausstattung und Tourismusbedarf",
      "Sonderfarben und Logo-Integration möglich",
      "Schnelle Nachbestellungen für Filialkonzepte"
    ]
  },

  'innsbruck': {
    caseStudy: {
      title: "Anschauungsmodell für Innsbrucker Forschungsprojekt",
      industry: "Forschung & Bildung",
      challenge: "Ein Forschungsteam der Universität Innsbruck benötigte ein detailliertes Anschauungsmodell für eine Konferenzpräsentation. Das Modell sollte komplexe Strukturen verständlich darstellen.",
      solution: "Wir erstellten ein mehrteiliges Modell mit abnehmbaren Schichten aus PETG. Farbcodierte Bereiche machten die verschiedenen Strukturen sofort erkennbar. Versand über Nacht nach Innsbruck.",
      result: "Die Konferenzpräsentation war ein Erfolg. Das Publikum konnte die Strukturen am Modell nachvollziehen. Das Team bestellt seitdem regelmäßig Modelle für Vorträge.",
      specs: {
        size: "Mehrteilig, ø 15 cm",
        material: "PETG mehrfarbig",
        time: "48 Stunden inkl. Versand"
      },
      quote: "Das Modell hat unsere Präsentation auf ein ganz anderes Niveau gehoben. Die Zuhörer konnten alles sofort nachvollziehen."
    },
    materials: [
      {
        name: "PETG Transparent",
        description: "Teiltransparent und robust. Für Schaumodelle, bei denen innere Strukturen sichtbar sein sollen.",
        bestFor: ["Forschungsmodelle", "Schaumodelle", "Konferenz-Präsentationen"],
        icon: "shield"
      },
      {
        name: "PLA+ Bio",
        description: "Biobasiert und umweltfreundlich. Für Anschauungsmodelle, Lehrmittel und Dekoration.",
        bestFor: ["Anschauungsmodelle", "Bildungsmodelle", "Dekoration"],
        icon: "palette"
      },
      {
        name: "TPU Shore 95A",
        description: "Flexibel und elastisch. Für Designstudien, die Flexibilität demonstrieren sollen.",
        bestFor: ["Flexible Modelle", "Ergonomie-Studien", "Konzeptmuster"],
        icon: "feather"
      }
    ],
    industryFocus: "Forschung & Sportartikel-Design in Innsbruck",
    uniqueSellingPoints: [
      "Erfahrung mit Universitäts- und Forschungsmodellen",
      "48h-Turnaround für Konferenz-Modelle",
      "Robuster Alpentransport inklusive"
    ]
  },

  'klagenfurt': {
    caseStudy: {
      title: "IoT-Gehäusemodell für Klagenfurter IT-Unternehmen",
      industry: "IT & Produktdesign",
      challenge: "Ein Klagenfurter IoT-Spezialist benötigte 30 Gehäuse-Designstudien für Smart-City-Sensoren. Die Modelle sollten verschiedene Designvarianten zeigen und für Kundenpräsentationen eingesetzt werden.",
      solution: "Wir fertigten die Designstudien aus UV-beständigem ASA in drei Designvarianten à 10 Stück. Jede Variante unterschied sich in Form und Proportionen.",
      result: "Der Kunde konnte seinen Auftraggebern verschiedene Designoptionen physisch präsentieren. Die bevorzugte Variante wurde deutlich schneller identifiziert als bei reinen Bildschirmpräsentationen.",
      specs: {
        size: "30x 10 x 8 x 5 cm",
        material: "ASA weiß, UV-beständig",
        time: "7 Werktage"
      },
      quote: "Drei Designvarianten zum Anfassen – das hat die Entscheidung unserer Auftraggeber enorm beschleunigt."
    },
    materials: [
      {
        name: "ASA Signal-Weiß",
        description: "UV-beständig und langlebig. Optimal für Designmodelle, die bei Kundenpräsentationen im Freien gezeigt werden.",
        bestFor: ["Designmodelle", "Outdoor-Präsentationen", "Konzeptmodelle"],
        icon: "shield"
      },
      ...defaultMaterials.slice(0, 2)
    ],
    industryFocus: "IT & Elektronik-Design in Klagenfurt",
    uniqueSellingPoints: [
      "ASA-Expertise für wetterfeste Designmodelle",
      "Erfahrung mit Designstudien-Serien",
      "Mehrere Varianten parallel möglich"
    ]
  },

  'villach': {
    caseStudy: {
      title: "Konzeptmodell für Villacher Technologieunternehmen",
      industry: "Technologie & Elektronik-Design",
      challenge: "Ein Elektronikunternehmen in Villach brauchte Konzeptmodelle für eine neue Produktlinie. Die Modelle sollten bei internen Designreviews eingesetzt werden und verschiedene Formfaktoren zeigen.",
      solution: "Wir druckten 10 Konzeptmodelle in verschiedenen Formfaktoren aus PLA+ mit hoher Oberflächenqualität. Passstifte und Designdetails wurden mit 0.12mm Auflösung präzise dargestellt.",
      result: "Das Designreview verlief deutlich produktiver mit physischen Modellen. Proportionen und Ergonomie konnten direkt bewertet werden statt nur am Bildschirm.",
      specs: {
        size: "10x 15 x 10 x 3 cm",
        material: "PLA+ weiß, 0.12mm",
        time: "5 Werktage"
      },
      quote: "Physische Konzeptmodelle machen Designreviews 10x produktiver. Am Bildschirm sieht alles anders aus als in der Hand."
    },
    materials: defaultMaterials,
    industryFocus: "Technologie & Elektronik-Design in Villach",
    uniqueSellingPoints: [
      "Maßhaltige Konzeptmodelle mit hoher Oberflächenqualität",
      "Verschiedene Designvarianten parallel möglich",
      "Erfahrung mit Technologieunternehmen"
    ]
  },

  'wels': {
    caseStudy: {
      title: "Displayobjekte für Welser Lebensmittelbetrieb",
      industry: "Lebensmittel & Präsentation",
      challenge: "Ein Lebensmittelbetrieb in Wels brauchte maßgeschneiderte Displayhalter für die Produktpräsentation auf Fachmessen und im Showroom.",
      solution: "Wir konstruierten die Displayhalter nach Maß und druckten sie aus PETG in der Corporate-Farbe. Persönliche Abholung in Gunskirchen – der Kunde sah die Teile noch am selben Tag.",
      result: "Die Displays werden auf jeder Messe eingesetzt und machen die Produkte deutlich ansprechender. Für jedes neue Produkt werden passende Halter nachbestellt.",
      specs: {
        size: "8x diverse Größen",
        material: "PETG in Sonderfarbe",
        time: "Same Day – Abholung Gunskirchen"
      },
      quote: "Same-Day Abholung direkt nebenan. So muss Service sein."
    },
    materials: [
      {
        name: "PETG Sonderfarbe",
        description: "In Corporate-Farben verfügbar. Für Displayobjekte und Präsentationshalter mit Markenidentität.",
        bestFor: ["Displayhalter", "Präsentationsobjekte", "Corporate-Design"],
        icon: "shield"
      },
      ...defaultMaterials.slice(0, 2)
    ],
    industryFocus: "Lebensmittel & Präsentation in Wels",
    uniqueSellingPoints: [
      "Nur 10 Minuten zur Abholung",
      "Sonderfarben für Corporate-Design verfügbar",
      "Same-Day-Fertigung für Welser Betriebe"
    ]
  },

  'st-poelten': {
    caseStudy: {
      title: "Studiomodelle für FH St. Pölten Medienprojekt",
      industry: "Medientechnik & Bildung",
      challenge: "Studierende der FH St. Pölten benötigten individuelle Modelle für ein experimentelles Filmprojekt – Requisiten und Set-Dekorationen, die es in keinem Laden gibt.",
      solution: "Wir druckten modulare Requisiten und Dekorationsobjekte aus PETG in verschiedenen Farben. Die Teile waren in 3 Tagen fertig und über A1 in St. Pölten.",
      result: "Das Filmprojekt gewann einen Nachwuchspreis. Die FH bestellt seitdem regelmäßig Modelle und Requisiten für Medienprojekte.",
      specs: {
        size: "5x diverse Objekte",
        material: "PETG mehrfarbig",
        time: "3 Werktage"
      },
      quote: "Ohne die maßgeschneiderten Requisiten wäre das Set-Design nicht möglich gewesen."
    },
    materials: defaultMaterials,
    industryFocus: "Medientechnik & Bildung in St. Pölten",
    uniqueSellingPoints: [
      "Erfahrung mit Bildungs- und Kreativprojekten",
      "Schnelle Lieferung über A1",
      "Studentenfreundliche Preise ab €20"
    ]
  },

  'dornbirn': {
    caseStudy: {
      title: "Vorabmodell für Vorarlberger Kunststoffdesigner",
      industry: "Kunststoffdesign",
      challenge: "Ein Vorarlberger Designer wollte ein neues Formteil vor der Produktion validieren. Ein Fehler im Design wäre teuer – deshalb sollte vorab ein maßstabsgetreues Modell geprüft werden.",
      solution: "Wir druckten das Designmodell in Originalgröße aus PLA+ und später aus PETG für eine robustere Variante. Drei Iterationen in 10 Tagen – jede Änderung visuell geprüft, bevor die Produktion startet.",
      result: "Die dritte Iteration war perfekt. Der Designer konnte seinem Kunden das finale Design als greifbares Modell zeigen. Die Entscheidung fiel sofort.",
      specs: {
        size: "3 Iterationen, je 15 x 10 x 5 cm",
        material: "PLA+ und PETG",
        time: "3x 3 Werktage"
      },
      quote: "Drei Designiterationen für €200 – das Ergebnis war perfekt und der Kunde sofort überzeugt."
    },
    materials: [
      {
        name: "PLA+ Dimensionsstabil",
        description: "Maßhaltig und verzugsarm. Perfekt für Designstudien und Vorabmodelle.",
        bestFor: ["Vorabmodelle", "Designvalidierung", "Formchecks"],
        icon: "palette"
      },
      {
        name: "PETG Robust",
        description: "Für robuste Modelle und Präsentationsstücke, die häufig angefasst werden.",
        bestFor: ["Robuste Modelle", "Kundenpräsentationen", "Dauerhafte Ausstellung"],
        icon: "shield"
      },
      {
        name: "ASA für Outdoor-Ausstellung",
        description: "UV-beständig und witterungsfest. Wenn das Modell dauerhaft im Freien steht.",
        bestFor: ["Outdoor-Modelle", "Dauerausstellungen", "Wetterfeste Objekte"],
        icon: "feather"
      }
    ],
    industryFocus: "Kunststoffdesign & Textil in Dornbirn",
    uniqueSellingPoints: [
      "Vorabmodelle sparen teure Designfehler",
      "Drei Iterationen in unter zwei Wochen",
      "Erfahrung mit Vorarlberger Designkunden"
    ]
  },

  'gunskirchen': {
    caseStudy: {
      title: "Displayobjekte für lokalen Handwerksbetrieb",
      industry: "Handwerk & Gewerbe",
      challenge: "Ein Handwerksbetrieb in Gunskirchen suchte maßgeschneiderte Displayobjekte für seine Ausstellungsräume. Standardlösungen passten nicht zum Sortiment.",
      solution: "Der Inhaber kam persönlich vorbei, wir besprachen die Anforderungen direkt am Bildschirm, modellierten gemeinsam und druckten die ersten Muster – alles in einem Vormittag.",
      result: "20 individuelle Displayobjekte, jedes perfekt an das jeweilige Produkt angepasst. Der Kunde kommt seitdem mit jeder neuen Anforderung vorbei und bekommt die Lösung am selben Tag.",
      specs: {
        size: "20x individuelle Objekte",
        material: "PETG schwarz",
        time: "Same Day – gemeinsam vor Ort entwickelt"
      },
      quote: "Einfach vorbeikommen, gemeinsam designen, mitnehmen. So stelle ich mir Service vor."
    },
    materials: defaultMaterials,
    industryFocus: "Direkt vom Hersteller in Gunskirchen",
    uniqueSellingPoints: [
      "Gemeinsame Entwicklung vor Ort möglich",
      "Qualitätsprüfung persönlich vor Abholung",
      "Same-Day: morgens bestellt, mittags fertig"
    ]
  },

  'oberoesterreich': {
    caseStudy: {
      title: "Präsentationsmodelle für OÖ Industrieunternehmen",
      industry: "Industriepräsentation",
      challenge: "Ein oberösterreichisches Industrieunternehmen benötigte 40 Präsentationsmodelle für eine Kundenveranstaltung. Die Modelle sollten das Produktdesign visualisieren und als Give-aways dienen.",
      solution: "Wir druckten 40 maßstabsgetreue Präsentationsmodelle aus PLA+ mit hochwertiger Oberflächenqualität. Persönliche Abholung in Gunskirchen.",
      result: "Die Veranstaltung war ein Erfolg. Die Kunden waren beeindruckt von den greifbaren Modellen. Das Unternehmen bestellt seitdem für jede Kundenveranstaltung individuelle Modelle.",
      specs: {
        size: "40x 12 x 10 x 8 cm",
        material: "PLA+ weiß, nachbearbeitet",
        time: "7 Werktage + Abholung"
      },
      quote: "Greifbare Modelle überzeugen Kunden mehr als jede Powerpoint-Präsentation."
    },
    materials: defaultMaterials,
    industryFocus: "Industriepräsentation in Oberösterreich",
    uniqueSellingPoints: [
      "Lokaler Hersteller – Abholung am selben Tag",
      "Erfahrung mit Präsentationsmodellen in Projektmengen",
      "Hochwertige Oberflächen für Kundenpräsentationen"
    ]
  },

  'niederoesterreich': {
    caseStudy: {
      title: "Displayobjekte für niederösterreichischen Winzer",
      industry: "Weinbau & Präsentation",
      challenge: "Ein Winzer in der Wachau brauchte individuelle Displayobjekte für die Weinpräsentation im Verkostungsraum und auf Weinmessen. Standard-Displays passten nicht zum Markenimage.",
      solution: "Wir fertigten maßgeschneiderte Flaschenhalter und Displayobjekte aus PETG in der Markenfarbe des Weinguts. Logo-Integration und individuelle Formgebung inklusive.",
      result: "Die Displays werden auf jeder Weinmesse eingesetzt und im Verkostungsraum dauerhaft ausgestellt. Besucher kommentieren regelmäßig das einzigartige Design.",
      specs: {
        size: "15x diverse Display-Objekte",
        material: "PETG in Sonderfarbe",
        time: "5 Werktage"
      },
      quote: "Endlich Displays, die zu unserem Weingut passen. Unsere Gäste sind begeistert."
    },
    materials: defaultMaterials,
    industryFocus: "Weinbau & KMU in Niederösterreich",
    uniqueSellingPoints: [
      "Individuelle Displayobjekte mit Logo-Integration",
      "Zentrale Lage zwischen Wien und Linz",
      "Erfahrung mit Landwirtschaft und Weinbau"
    ]
  },

  'steiermark': {
    caseStudy: {
      title: "Konzeptmodelle für steirisches Green-Tech-Unternehmen",
      industry: "Umwelttechnologie & Design",
      challenge: "Ein steirisches Cleantech-Startup entwickelte ein neues Filtersystem und brauchte 25 unterschiedliche Gehäuse-Designstudien für interne Bewertungsrunden.",
      solution: "Wir druckten 25 Designstudien mit unterschiedlichen Formfaktoren aus transparentem PETG, damit das Designkonzept von allen Seiten bewertet werden konnte.",
      result: "Die optimale Designform wurde in 3 Wochen gefunden. Das Startup erhielt daraufhin eine Förderung der FFG – auch weil die physischen Modelle die Jury überzeugten.",
      specs: {
        size: "25 Varianten, je 8 x 8 x 12 cm",
        material: "PETG transparent",
        time: "3 Wochen iterativ"
      },
      quote: "25 Designvarianten in 3 Wochen bewerten – mit physischen Modellen geht das unglaublich effizient."
    },
    materials: [
      {
        name: "PETG Transparent",
        description: "Für transparente Designstudien und Konzeptmodelle. Klar und robust.",
        bestFor: ["Transparente Modelle", "Designstudien", "Konzeptvisualisierungen"],
        icon: "palette"
      },
      ...defaultMaterials.slice(1)
    ],
    industryFocus: "Green Tech & Design in der Steiermark",
    uniqueSellingPoints: [
      "Transparente Designmodelle für Konzeptbewertung",
      "Iterative Designstudien für Forschungsprojekte",
      "Express-Lieferung über A9"
    ]
  },

  'kaernten': {
    caseStudy: {
      title: "Präsentationsmodelle für Kärntner Elektrounternehmen",
      industry: "Elektrotechnik & Präsentation",
      challenge: "Ein Kärntner Elektrounternehmen brauchte individuelle Präsentationsmodelle für eine Kundenveranstaltung. Jedes Modell sollte eine andere Produktvariante darstellen.",
      solution: "Wir fertigten die Modelle nach Designvorgaben aus PLA+ in drei Farben. 15 verschiedene Modelle in einer Woche – jedes mit individuellen Details.",
      result: "Die Kundenveranstaltung war ein voller Erfolg. Die Kunden konnten alle Produktvarianten physisch vergleichen und Bestellungen wurden direkt vor Ort aufgenommen.",
      specs: {
        size: "15x 20 x 15 x 5 cm",
        material: "PLA+ dreifarbig",
        time: "5 Werktage"
      },
      quote: "15 verschiedene Modelle in einer Woche – und jedes sieht professionell aus."
    },
    materials: defaultMaterials,
    industryFocus: "Elektrotechnik & Präsentation in Kärnten",
    uniqueSellingPoints: [
      "Individuelle Modellserien für Kundenpräsentationen",
      "Mehrfarbige Modelle für Produktvergleiche",
      "Zuverlässiger Versand über A10"
    ]
  },

  'vorarlberg': {
    caseStudy: {
      title: "Beschlag-Designstudie für Vorarlberger Möbelhersteller",
      industry: "Möbel- & Beschlagdesign",
      challenge: "Ein Vorarlberger Möbelhersteller entwickelte einen neuartigen Beschlag. Vor der teuren Produktion sollte das Design mit 3D-gedruckten Modellen validiert werden.",
      solution: "Wir druckten 5 Iterationen des Beschlagmodells aus PLA+ für die Formvalidierung und anschließend 3 Versionen aus PETG als robustere Anschauungsmodelle. Insgesamt 8 Iterationen in 3 Wochen.",
      result: "Die finale Designversion überzeugte den Kunden sofort. Die Entscheidung zur Produktion fiel innerhalb eines Tages – dank der greifbaren Modelle.",
      specs: {
        size: "8 Iterationen, je 6 x 4 x 2 cm",
        material: "PLA+ und PETG",
        time: "3 Wochen iterativ"
      },
      quote: "8 Designiterationen für unter €500 – und das finale Modell hat den Kunden sofort überzeugt."
    },
    materials: [
      {
        name: "PLA+ Formcheck",
        description: "Für schnelle visuelle und dimensionale Validierung. Ideal für Möbelbeschlag-Designstudien.",
        bestFor: ["Beschlag-Designstudien", "Formstudien", "Konzeptmuster"],
        icon: "palette"
      },
      {
        name: "PETG Präsentationsmodell",
        description: "Robust für Kundenpräsentationen und Dauereinsatz in Showrooms.",
        bestFor: ["Showroom-Modelle", "Kundenpräsentationen", "Langzeitausstellung"],
        icon: "shield"
      },
      {
        name: "ASA Outdoor-Modell",
        description: "Für Designmodelle, die im Freien ausgestellt werden sollen.",
        bestFor: ["Outdoor-Modelle", "Dauerausstellungen", "Wetterfeste Präsentation"],
        icon: "feather"
      }
    ],
    industryFocus: "Möbel- & Beschlagdesign in Vorarlberg",
    uniqueSellingPoints: [
      "Designstudien-Workflow für Möbelhersteller",
      "8 Iterationen in 3 Wochen machbar",
      "Grenznahe Lieferung auch nach CH und Süddeutschland"
    ]
  },

  'burgenland': {
    caseStudy: {
      title: "Konzeptmodell für burgenländischen Photovoltaik-Betrieb",
      industry: "Erneuerbare Energie & Visualisierung",
      challenge: "Ein burgenländischer PV-Installateur brauchte ein Konzeptmodell einer Solaranlage für Kundenpräsentationen. Potenzielle Kunden sollten sehen, wie die Anlage auf ihrem Dach aussehen würde.",
      solution: "Wir konstruierten ein maßstabsgetreues Dachmodell mit aufgesetzten PV-Modulen aus ASA. Das Modell zeigt die Anordnung und Proportionen der geplanten Anlage.",
      result: "Die Abschlussrate bei Kundengesprächen stieg deutlich. Kunden verstehen mit dem Modell sofort, wie die Anlage aussehen wird.",
      specs: {
        size: "30 x 20 x 10 cm",
        material: "ASA schwarz/silber",
        time: "4 Werktage"
      },
      quote: "Seit wir das Modell bei Kundenterminen dabeihaben, entscheiden sich mehr Kunden für eine Anlage."
    },
    materials: defaultMaterials,
    industryFocus: "Erneuerbare Energie & Agrar im Burgenland",
    uniqueSellingPoints: [
      "Konzeptmodelle für Kundenpräsentationen",
      "Erfahrung mit Visualisierung von Energieanlagen",
      "Schnelle Lieferung über Wien/A4"
    ]
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EINZIGARTIGE FAQs PRO REGION – 3D-Druck
// Jede Region bekommt eigene Fragen & Schwerpunkte
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

regionalDruckExtendedData['wien'].faqs = [
  { question: "Welche Branchen in Wien nutzen Ihren 3D-Druck Service?", answer: "Wiener Startups, Kreativagenturen, Architekturbüros und Designstudios zählen zu unseren häufigsten Kunden. Typische Projekte: Pitch-Modelle, Designstudien, Konzeptvisualisierungen und Kunstobjekte." },
  { question: "Können mehrere Designvarianten parallel gefertigt werden?", answer: "Ja – drei, fünf oder zehn Varianten gleichzeitig drucken kostet nur marginal mehr als eine einzelne. Ideal für Investoren-Pitches und Designentscheidungen." },
  { question: "Wie schnell sind Express-Modelle für Wiener Startups verfügbar?", answer: "Express-Fertigung in 24-36 Stunden. Versand nach Wien über Nacht. So haben Sie Ihre Modelle rechtzeitig für den Pitch oder das Meeting." },
  { question: "Eignet sich 3D-Druck für Requisiten und Set-Dekorationen?", answer: "Ja – wir fertigen individuelle Requisiten, Dekorationsobjekte und Bühnenelemente für Film, Theater und Events. In beliebiger Form, Farbe und Größe." },
  { question: "Können Modelle mit unterschiedlichen Materialien kombiniert werden?", answer: "Ja – verschiedene Teile in unterschiedlichen Materialien. Zum Beispiel ein starrer Korpus aus PLA+ und flexible Elemente aus TPU." },
];
regionalDruckExtendedData['wien'].introText = "3D-Druck für Wiener Startups, Kreativagenturen und Designstudios – Express-Pitch-Modelle in 36h, parallele Designvarianten und professionelle Konzeptvisualisierungen.";

regionalDruckExtendedData['linz'].faqs = [
  { question: "Wie nah ist Ihr Standort an Linz?", answer: "Nur 20 Minuten – unser Standort in Gunskirchen liegt direkt an der A1 Richtung Linz. Same-Day-Abholung und persönliche Beratung sind jederzeit möglich." },
  { question: "Können Schnittmodelle für interne Schulungen gefertigt werden?", answer: "Ja – mehrfarbige Schnittmodelle mit farbcodierten Schichten sind unsere Spezialität. Jede Ebene in einer anderen Farbe macht den Aufbau auf einen Blick verständlich." },
  { question: "Eignen sich 3D-gedruckte Modelle als Schulungsmaterial?", answer: "Absolut – physische Modelle beschleunigen das Verständnis von Strukturen und Aufbauten deutlich. Viele Linzer Unternehmen nutzen unsere Modelle bei jeder Einschulung." },
  { question: "Welche Farben sind für mehrfarbige Modelle verfügbar?", answer: "Über 20 Standardfarben in PLA+, PETG und ASA. Für exakte Farbwünsche bieten wir Sonderlackierung an. Mehrfarbige Modelle mit bis zu 6 Farben in einem Objekt." },
  { question: "Können Modelle für Installationen und kreative Projekte gefertigt werden?", answer: "Ja – von der Tabakfabrik bis zum Ars Electronica Center: Wir fertigen Modelle für Installationen, Ausstellungen und kreative Projekte aller Art." },
];
regionalDruckExtendedData['linz'].introText = "Nur 20 Minuten von Linz entfernt – Same-Day-Abholung, mehrfarbige Schnittmodelle und Express-Service für Schulungen, Präsentationen und kreative Projekte.";

regionalDruckExtendedData['graz'].faqs = [
  { question: "Können größere Stückzahlen von Designstudien gefertigt werden?", answer: "Ja – ab 10 Stück mit 10% Mengenrabatt, ab 50 Stück mit 15%. Qualität und Maßhaltigkeit bleiben bei jeder Stückzahl identisch." },
  { question: "Welche Materialien eignen sich für langlebige Designmodelle?", answer: "ASA für UV-Beständigkeit und Premium-Oberflächen, PETG für Robustheit und Transparenz, PLA+ für schnelle Formchecks und Designvalidierung." },
  { question: "Wie präzise sind die Maße bei 3D-gedruckten Designstudien?", answer: "Toleranz ±0.2mm bei Standardeinstellungen, ±0.1mm bei Feinauflösung. Für Passteile und Funktionschecks optimieren wir individuell." },
  { question: "Können transparente Konzeptmodelle erstellt werden?", answer: "Ja – PETG Transparent zeigt innere Strukturen und Aufbauten. Ideal für Design-Reviews, bei denen das Innenleben sichtbar sein soll." },
  { question: "Wie ist die Lieferzeit nach Graz?", answer: "1-2 Werktage über die A9. Express 24h bei dringenden Designprojekten. Tracking-Nummer per E-Mail nach Versand." },
];
regionalDruckExtendedData['graz'].introText = "Designstudien und Konzeptmodelle für Grazer Technologieunternehmen – ASA-Expertise, Projektmengen mit Mengenrabatt und Express-Lieferung über die A9.";

regionalDruckExtendedData['salzburg'].faqs = [
  { question: "Können individuelle Displayhalter für Hotels gefertigt werden?", answer: "Ja – maßgeschneiderte Tablethalter, Infoständer und Displayobjekte in der Corporate-Farbe Ihres Hotels. Logo-Integration und individuelle Formgebung inklusive." },
  { question: "Sind Nachbestellungen identischer Teile möglich?", answer: "Ja – jeder Auftrag wird digital gespeichert. Nachbestellungen sind per E-Mail in 3 Werktagen fertig. Ideal für Filialkonzepte mit identischer Ausstattung." },
  { question: "Welche Materialien eignen sich für den Dauereinsatz in Hotels?", answer: "PETG für hohe Beanspruchung und Reinigungsbeständigkeit, PLA+ für dekorative Objekte, ASA für Objekte im Außenbereich wie Terrasse oder Pool." },
  { question: "Können Halterungen mit integriertem Kabelmanagement gefertigt werden?", answer: "Ja – Kabelführung, USB-Aussparungen und Lüftungsschlitze können direkt ins Design eingebaut werden. Funktional und ästhetisch." },
  { question: "Wie schnell ist die Lieferung nach Salzburg?", answer: "1-2 Werktage über die A1 Westautobahn. Projektlieferungen an mehrere Filialen gleichzeitig sind möglich." },
];
regionalDruckExtendedData['salzburg'].introText = "3D-gedruckte Displayhalter und Hotelausstattung für die Salzburger Tourismusbranche – individuelle Tablethalter, Logo-Displays und Filialkonzepte.";

regionalDruckExtendedData['innsbruck'].faqs = [
  { question: "Können Anschauungsmodelle für Universitäts-Konferenzen gefertigt werden?", answer: "Ja – mehrteilige Modelle mit abnehmbaren Schichten für Konferenzpräsentationen. Wir haben langjährige Erfahrung mit akademischen Projekten in Innsbruck." },
  { question: "Welche Materialien eignen sich für transportable Konferenzmodelle?", answer: "PETG für Robustheit beim Transport, PLA+ Bio für umweltbewusste Projekte, TPU für flexible Demonstrationsmodelle." },
  { question: "Können farbcodierte Strukturmodelle erstellt werden?", answer: "Ja – verschiedene Bereiche in unterschiedlichen Farben. Bis zu 6 Farben in einem Modell für visuelle Unterscheidung von Strukturelementen." },
  { question: "Wie schnell können Modelle für eine kurzfristige Konferenz geliefert werden?", answer: "Express in 24h plus Overnight-Versand nach Innsbruck. 48 Stunden von der Bestellung bis zur Lieferung." },
  { question: "Gibt es Erfahrung mit akademischen Lehrmodellen?", answer: "Ja – wir fertigen regelmäßig Modelle für die Universität Innsbruck, MCI und andere Tiroler Hochschulen. Anschauungsmodelle, Lehrmittel und Konferenzobjekte." },
];
regionalDruckExtendedData['innsbruck'].introText = "Anschauungsmodelle für Innsbrucker Hochschulen und Forschungsprojekte – farbcodierte Strukturmodelle, Lehrmittel und 48h-Express für Konferenztermine.";

regionalDruckExtendedData['klagenfurt'].faqs = [
  { question: "Können Gehäusemodelle für Kundenpräsentationen gefertigt werden?", answer: "Ja – verschiedene Designvarianten aus UV-beständigem ASA. Ideal für die Präsentation von Produktdesigns bei Kundenbesuchen." },
  { question: "Wie viele Designvarianten können parallel gefertigt werden?", answer: "Beliebig viele – 10, 20 oder 50 Varianten parallel möglich. Ab 10 Stück mit 10% Mengenrabatt." },
  { question: "Welches Material eignet sich für Outdoor-Präsentationen?", answer: "ASA ist UV-beständig, witterungsfest und farbstabil. Ideal für Modelle, die auch im Außenbereich gezeigt werden." },
  { question: "Können unterschiedliche Formfaktoren zum Vergleich bestellt werden?", answer: "Ja – verschiedene Größen, Proportionen und Designansätze parallel. Physische Modelle machen Designentscheidungen deutlich einfacher." },
  { question: "Wie werden Modelle nach Klagenfurt geliefert?", answer: "Versand über die Tauernautobahn in 2-3 Werktagen. Express über Nacht für dringende Projekte. Tracking inklusive." },
];
regionalDruckExtendedData['klagenfurt'].introText = "ASA-Designmodelle und Gehäuseserien für Klagenfurter IT- und Technologieunternehmen – UV-beständig, wetterfest und in beliebig vielen Varianten parallel.";

regionalDruckExtendedData['villach'].faqs = [
  { question: "Können Konzeptmodelle für Technologieunternehmen gefertigt werden?", answer: "Ja – Formfaktor-Studien, Ergonomie-Checks und Designreviews. Unsere Modelle werden von Villacher Technologiefirmen für interne Bewertungen eingesetzt." },
  { question: "Wie hoch ist die Oberflächenqualität bei Konzeptmodellen?", answer: "Mit 0.12mm Auflösung und Nachbearbeitung erreichen wir Oberflächen, die direkt für Kundenpräsentationen geeignet sind." },
  { question: "Können verschiedene Formfaktoren zum Vergleich bestellt werden?", answer: "Ja – 5, 10 oder mehr Varianten parallel. Proportionen und Ergonomie lassen sich nur am physischen Modell wirklich beurteilen." },
  { question: "Welche Toleranzen sind bei maßhaltigen Modellen erreichbar?", answer: "±0.2mm Standard, ±0.1mm bei Feinauflösung. Für funktionale Passstücke optimieren wir die Parameter individuell." },
  { question: "Wie ist die Lieferzeit nach Villach?", answer: "2-3 Werktage per Paketversand mit Tracking. Express über Nacht für dringende Projekte möglich." },
];
regionalDruckExtendedData['villach'].introText = "Maßhaltige Konzeptmodelle für Villacher Technologieunternehmen – Designreviews, Ergonomie-Checks und Formfaktor-Studien in Präsentationsqualität.";

regionalDruckExtendedData['wels'].faqs = [
  { question: "Ist Same-Day-Service für Welser Betriebe verfügbar?", answer: "Ja – unser Standort ist nur 10 Minuten entfernt. Morgens bestellt, nachmittags fertig. Persönliche Abholung in Gunskirchen jederzeit möglich." },
  { question: "Können maßgeschneiderte Displayhalter gefertigt werden?", answer: "Ja – individuelle Halterungen, Ständer und Displayobjekte nach Maß in Ihrer Corporate-Farbe, mit Logo-Integration." },
  { question: "Eignen sich 3D-gedruckte Displays für den Dauereinsatz?", answer: "Ja – PETG-Displays sind robust und langlebig. Für Showroom, Messen und Kundenbesuche gleichermaßen geeignet." },
  { question: "Können Nachbestellungen schnell umgesetzt werden?", answer: "Ja – jedes Design wird digital gespeichert. Nachbestellungen per E-Mail, fertig in 1-3 Werktagen." },
  { question: "Welche Farben stehen für Corporate-Design zur Verfügung?", answer: "Über 20 Standardfarben. Sonderfarben nach RAL oder Pantone durch professionelle Lackierung. Farbproben auf Wunsch vorab." },
];
regionalDruckExtendedData['wels'].introText = "Same-Day-Service für Wels – nur 10 Minuten zur Abholung. Maßgeschneiderte Displayhalter, Präsentationsobjekte und Corporate-Design in Ihrer Farbe.";

regionalDruckExtendedData['st-poelten'].faqs = [
  { question: "Können individuelle Requisiten für Medienprojekte gefertigt werden?", answer: "Ja – Requisiten, Set-Dekorationen und Props in jeder Form und Farbe. Von der FH St. Pölten bis zu professionellen Filmproduktionen." },
  { question: "Welche Materialien eignen sich für Filmrequisiten?", answer: "PETG für robuste, häufig genutzte Requisiten. PLA+ für Dekorationsobjekte. TPU für flexible Elemente. Alle in vielen Farben verfügbar." },
  { question: "Wie schnell können kurzfristige Projekte umgesetzt werden?", answer: "Express in 24-48h. Standardlieferung nach St. Pölten in 1-2 Werktagen über die A1. Ideal für Projekte mit engem Zeitplan." },
  { question: "Gibt es studentenfreundliche Preise?", answer: "Unsere Preise starten ab €20 und sind bereits studentenfreundlich. Ab 10 Stück zusätzlich 10% Mengenrabatt. Ideal für Hochschulprojekte." },
  { question: "Können modulare, zusammensteckbare Objekte gefertigt werden?", answer: "Ja – Stecksysteme, Schraubverbindungen und Magnetsysteme direkt ins Design integriert. Ideal für transport- und lagerfreundliche Objekte." },
];
regionalDruckExtendedData['st-poelten'].introText = "3D-Druck für Medienprojekte, FH-Arbeiten und kreative Produktion in St. Pölten – individuelle Requisiten, Props und Dekorationsobjekte ab €20.";

regionalDruckExtendedData['dornbirn'].faqs = [
  { question: "Können Vorabmodelle vor der Serienfertigung erstellt werden?", answer: "Ja – 3D-gedruckte Designstudien zeigen Form, Proportionen und Details, bevor teure Werkzeuge gebaut werden. Spart typischerweise 50-80% gegenüber Fehlproduktionen." },
  { question: "Sind mehrere Iterationsrunden in kurzer Zeit möglich?", answer: "Ja – drei Iterationen in unter zwei Wochen sind Standard. Jede Änderung wird visuell geprüft, bevor die nächste Version gedruckt wird." },
  { question: "Können verschiedene Materialien innerhalb eines Projekts verglichen werden?", answer: "Ja – das gleiche Design in PLA+, PETG und ASA drucken lassen. So vergleichen Sie Haptik, Stabilität und Optik direkt am Objekt." },
  { question: "Können Modelle für Kundenpräsentationen veredelt werden?", answer: "Ja – geschliffene, grundierte und lackierte Oberflächen für ein Spritzguss-nahes Finish. Ideal für Kundentermine und Entscheidungspräsentationen." },
  { question: "Ist eine Lieferung in die Schweiz und nach Süddeutschland möglich?", answer: "Ja – unkomplizierter Versand in den Bodenseeraum, nach Liechtenstein und in die Ostschweiz. Standardversand in 3-4 Tagen." },
];
regionalDruckExtendedData['dornbirn'].introText = "Vorabmodelle und Designstudien für Vorarlberger Hersteller – drei Iterationen in zwei Wochen, Materialvergleich und grenznahe Lieferung in die Schweiz.";

regionalDruckExtendedData['gunskirchen'].faqs = [
  { question: "Kann ich die Entwicklung meines Modells vor Ort begleiten?", answer: "Ja – als lokaler Kunde können Sie bei der Entwicklung dabei sein. Gemeinsam am Bildschirm designen, drucken und direkt mitnehmen – alles an einem Vormittag." },
  { question: "Wie funktioniert der Same-Day-Service?", answer: "Morgens anrufen oder vorbeikommen, Projekt besprechen, drucken, abends mitnehmen. Für einfache Projekte ist Same-Day unser Standard." },
  { question: "Können kurzfristig Änderungen am Design vorgenommen werden?", answer: "Ja – vor Ort können wir Änderungen in Echtzeit umsetzen. Sie sehen die Anpassung am Bildschirm und das neue Modell kommt direkt aus dem Drucker." },
  { question: "Gibt es eine Mindestbestellmenge?", answer: "Nein – wir drucken ab 1 Stück. Keine Mindestbestellmenge, keine Einrichtungskosten. Ideal für Einzelstücke und kleine Projekte." },
  { question: "Kann ich meine Modelle vor der Abholung begutachten?", answer: "Ja – persönliche Qualitätsprüfung vor Ort. Sie können das Modell begutachten und bei Bedarf letzte Anpassungen besprechen." },
];
regionalDruckExtendedData['gunskirchen'].introText = "Direkt vom Hersteller – gemeinsam vor Ort entwickeln, drucken und mitnehmen. Same-Day-Service, persönliche Beratung und Qualitätsprüfung bei der Abholung.";

regionalDruckExtendedData['oberoesterreich'].faqs = [
  { question: "Können Präsentationsmodelle in größeren Stückzahlen gefertigt werden?", answer: "Ja – ab 10 Stück mit 10% Mengenrabatt, ab 50 Stück mit 15%. Jedes Modell in identischer Qualität. Persönliche Abholung in Gunskirchen." },
  { question: "Eignen sich 3D-gedruckte Modelle als Kunden-Give-aways?", answer: "Ja – individuelle Modelle mit Ihrem Logo als Giveaway hinterlassen bleibenden Eindruck. Deutlich wirkungsvoller als herkömmliche Werbegeschenke." },
  { question: "Wie werden große Projektmengen qualitätsgesichert?", answer: "Ab 20 Stück erstellen wir ein Referenzmuster zur Freigabe. Jedes einzelne Modell wird nach identischen Parametern gedruckt und individuell geprüft." },
  { question: "Welche OÖ-Branchen nutzen den Service am häufigsten?", answer: "Industriepräsentationen, Lebensmittelbetriebe, Handwerksbetriebe und Kreativagenturen. Oberösterreich ist unser Heimatmarkt mit den meisten Kunden." },
  { question: "Können Modelle auch am Wochenende abgeholt werden?", answer: "Nach Vereinbarung – kontaktieren Sie uns und wir finden eine Lösung. Für dringende Projekte sind wir flexibel." },
];
regionalDruckExtendedData['oberoesterreich'].introText = "Lokaler 3D-Druck Hersteller in Oberösterreich – persönliche Abholung, Projektmengen mit Mengenrabatt und Give-aways mit Logo für OÖ-Unternehmen.";

regionalDruckExtendedData['niederoesterreich'].faqs = [
  { question: "Können individuelle Displayobjekte für Winzer gefertigt werden?", answer: "Ja – maßgeschneiderte Flaschenhalter, Displayobjekte und Präsentationsständer in Ihrer Markenfarbe. Logo-Integration und individuelle Formgebung inklusive." },
  { question: "Sind Modelle für Weinmessen und Verkostungsräume geeignet?", answer: "Ja – PETG-Displays sind robust genug für den Messeeinsatz und gleichzeitig edel genug für den Verkostungsraum." },
  { question: "Können verschiedene Produktvarianten als Serie bestellt werden?", answer: "Ja – verschiedene Flaschenformate, Halterungen oder Displays in einer Bestellung. Jedes Stück individuell, aber im einheitlichen Markendesign." },
  { question: "Wie schnell ist die Lieferung nach Niederösterreich?", answer: "1-2 Werktage über die A1. Von St. Pölten bis Krems, von Wiener Neustadt bis Zwettl – ganz NÖ schnell erreichbar." },
  { question: "Eignen sich 3D-gedruckte Objekte als Geschenke für Verkostungen?", answer: "Ja – individuelle Miniatur-Objekte mit Logo oder als Weinflaschen-Replika. Ab €5 pro Stück als hochwertiges Give-away." },
];
regionalDruckExtendedData['niederoesterreich'].introText = "3D-gedruckte Displayobjekte für niederösterreichische Winzer und KMU – Flaschenhalter, Verkostungsraum-Displays und Messeobjekte in Ihrer Markenfarbe.";

regionalDruckExtendedData['steiermark'].faqs = [
  { question: "Können transparente Designstudien für Cleantech-Projekte gefertigt werden?", answer: "Ja – PETG Transparent zeigt innere Strukturen und ermöglicht visuelle Bewertung von Designkonzepten. Besonders beliebt bei steirischen Green-Tech-Unternehmen." },
  { question: "Sind iterative Designstudien für Forschungsprojekte möglich?", answer: "Ja – 25 Varianten in 3 Wochen sind für steirische Technologiekunden Standard. Jede Runde wird gedruckt, bewertet und optimiert." },
  { question: "Können 3D-Modelle für FFG-Förderanträge eingesetzt werden?", answer: "Ja – physische Modelle überzeugen Jurys. Unsere Modelle wurden bereits mehrfach erfolgreich als Teil von Förderanträgen eingesetzt." },
  { question: "Wie werden größere Stückzahlen qualitätsgesichert?", answer: "Referenzmuster zur Freigabe, identische Druckparameter und individuelle Endkontrolle jedes einzelnen Modells." },
  { question: "Können Modelle mit Premium-Oberfläche nachbearbeitet werden?", answer: "Ja – Schleifen, Grundieren und Lackieren für ein Finish, das von Spritzguss kaum zu unterscheiden ist. Ideal für Kundenpräsentationen." },
];
regionalDruckExtendedData['steiermark'].introText = "Transparente Designstudien und iterative Konzeptmodelle für steirische Green-Tech-Unternehmen – PETG-Expertise, FFG-Projektmengen und Express-Lieferung über die A9.";

regionalDruckExtendedData['kaernten'].faqs = [
  { question: "Können individuelle Modellserien für Kundenpräsentationen gefertigt werden?", answer: "Ja – von der Einzelanfertigung bis zur Serie. Verschiedene Varianten parallel möglich, jedes Modell in professioneller Qualität." },
  { question: "Wie viele verschiedene Modelle können in einer Woche gefertigt werden?", answer: "15-20 verschiedene Modelle pro Woche sind problemlos machbar. Jedes Modell wird individuell gedruckt und geprüft." },
  { question: "Können Modelle in mehreren Farben gedruckt werden?", answer: "Ja – bis zu 6 verschiedene Farben in einem Modell. Farbcodierung macht Produktvarianten auf einen Blick unterscheidbar." },
  { question: "Wie werden empfindliche Modelle für den Versand geschützt?", answer: "Maßgefertigte Schaumstoff-Verpackung, versicherter Versand mit Tracking über die Tauernautobahn in 2-3 Tagen." },
  { question: "Können Modelle nach der Präsentation dauerhaft verwendet werden?", answer: "Ja – alle unsere Modelle sind als Dauerpräsentation im Showroom, Empfang oder Besprechungsraum geeignet." },
];
regionalDruckExtendedData['kaernten'].introText = "Mehrfarbige Präsentationsmodelle und Designserien für Kärntner Unternehmen – individuelle Varianten parallel, farbcodiert und für den Dauereinsatz geeignet.";

regionalDruckExtendedData['vorarlberg'].faqs = [
  { question: "Können Vorabmodelle für die Designvalidierung erstellt werden?", answer: "Ja – 3D-gedruckte Modelle zeigen Form, Proportionen und Passgenauigkeit, bevor teure Werkzeuge gebaut werden. Spart bis zu 80% gegenüber Fehlproduktionen." },
  { question: "Sind mehrere Material-Varianten zum Vergleich möglich?", answer: "Ja – das gleiche Design in PLA+, PETG und ASA. Haptik, Gewicht und Stabilität direkt am Objekt vergleichen." },
  { question: "Wie viele Iterationsrunden sind in 3 Wochen realistisch?", answer: "6-8 Iterationen. Jede Runde wird digital angepasst und in 2-3 Tagen als neues Modell gedruckt." },
  { question: "Können Modelle für Kundenpräsentationen veredelt werden?", answer: "Ja – geschliffene und lackierte Oberflächen für ein Spritzguss-nahes Finish. Ideal für Entscheidungspräsentationen." },
  { question: "Ist Lieferung in die Schweiz und nach Süddeutschland möglich?", answer: "Ja – unkomplizierter Versand in den Bodenseeraum, nach Liechtenstein und die Ostschweiz in 3-4 Tagen." },
];
regionalDruckExtendedData['vorarlberg'].introText = "Designvalidierung und Vorabmodelle für Vorarlberger Hersteller – 6-8 Iterationen in 3 Wochen, Materialvergleich und grenznahe Lieferung in CH/DE.";

regionalDruckExtendedData['burgenland'].faqs = [
  { question: "Können Konzeptmodelle für Photovoltaik-Präsentationen gefertigt werden?", answer: "Ja – maßstabsgetreue Dachmodelle mit PV-Modulen. Kunden sehen sofort, wie die Anlage auf ihrem Dach aussehen wird." },
  { question: "Welches Material eignet sich für Outdoor-Kundentermine?", answer: "ASA – wetterfest, UV-beständig und farbstabil. PLA+ für Indoor-Präsentationen mit hoher Detailtreue." },
  { question: "Können verschiedene Anlagengrößen als Set bestellt werden?", answer: "Ja – verschiedene Dachformen und Anlagengrößen. Für jeden Kunden das passende Demonstrationsmodell." },
  { question: "Wie schnell ist die Lieferung ins Burgenland?", answer: "1-2 Werktage über Wien/A4. Express über Nacht bei dringenden Projekten." },
  { question: "Können Modelle mit Farbcodierung erstellt werden?", answer: "Ja – Dachfläche, PV-Module, Leitungsführung und Speicher in unterschiedlichen Farben. Macht die Erklärung beim Kunden einfacher." },
];
regionalDruckExtendedData['burgenland'].introText = "Konzeptmodelle für burgenländische Energiebetriebe – PV-Dachmodelle, farbcodierte Anlagenvisualisierungen und ASA-Outdoor-Modelle für Kundentermine.";

regionalDruckExtendedData['tirol'] = {
  caseStudy: {
    title: "Sportartikel-Designstudie für Tiroler Hersteller",
    industry: "Sport & Outdoor-Design",
    challenge: "Ein Tiroler Sportartikelhersteller entwickelte ein neues Helmdesign und brauchte physische Modelle für Ergonomie-Tests und Kundenfeedback, bevor die Produktion startet.",
    solution: "Wir druckten 5 Helmschalen-Varianten in Originalgröße aus PLA+ und TPU. PLA+ für die äußere Form, TPU für flexible Polsterbereiche. Jede Variante mit unterschiedlicher Belüftungsgeometrie.",
    result: "Das Designteam identifizierte die optimale Belüftungsvariante in nur einer Woche. Der Kunde sparte drei Monate Entwicklungszeit gegenüber traditionellem Formenbau.",
    specs: {
      size: "5x Helmschalen, Originalgröße",
      material: "PLA+ + TPU flexibel",
      time: "5 Werktage"
    },
    quote: "Fünf Helmvarianten in einer Woche – das hätte mit traditionellen Methoden Monate gedauert."
  },
  materials: [
    {
      name: "PLA+ Sport-Design",
      description: "Für Formstudien und äußere Designvalidierung. Leicht, präzise und schnell zu produzieren.",
      bestFor: ["Helmstudien", "Gehäuse-Formchecks", "Sportartikel-Design"],
      icon: "palette"
    },
    {
      name: "TPU Shore 95A",
      description: "Flexibel und elastisch. Für Polster, Griffe und ergonomische Studien.",
      bestFor: ["Ergonomie-Modelle", "Flexible Konzepte", "Polster-Studien"],
      icon: "shield"
    },
    {
      name: "ASA Outdoor",
      description: "UV-beständig für Modelle, die im Freien getestet oder ausgestellt werden.",
      bestFor: ["Outdoor-Tests", "UV-beständige Modelle", "Dauerausstellung"],
      icon: "feather"
    }
  ],
  industryFocus: "Sport & Outdoor-Design in Tirol",
  uniqueSellingPoints: [
    "PLA+ und TPU Kombination für Sportartikel-Studien",
    "Erfahrung mit Ergonomie- und Designmodellen",
    "Robuster Alpentransport nach Innsbruck"
  ],
  faqs: [
    { question: "Können Sportartikel-Designstudien in Originalgröße gefertigt werden?", answer: "Ja – Helmschalen, Griffe, Gehäuse und Schuhelemente in Originalgröße für Ergonomie-Tests und Designbewertungen." },
    { question: "Welche Materialien eignen sich für Ergonomie-Modelle?", answer: "TPU Shore 95A für flexible, polsterähnliche Bereiche. PLA+ für starre Formteile. Beide können in einem Modell kombiniert werden." },
    { question: "Können Modelle für alpine Outdoor-Einsätze gefertigt werden?", answer: "Ja – ASA-Modelle sind UV-beständig und witterungsfest. Für Feld-Demonstrationen und Outdoor-Tests bestens geeignet." },
    { question: "Wie schnell können Designstudien nach Innsbruck geliefert werden?", answer: "2-3 Werktage per Paketversand. Express in 24h plus Overnight-Versand. Robuste Verpackung für den Alpentransport." },
    { question: "Können mehrere Designvarianten parallel bewertet werden?", answer: "Ja – 5, 10 oder mehr Varianten gleichzeitig. Jede mit unterschiedlichen Details, Geometrien oder Materialien." },
  ],
  introText: "Sportartikel-Designstudien und Ergonomie-Modelle für Tiroler Hersteller – Helmschalen, Griffstudien und Outdoor-Konzepte in PLA+ und TPU."
};

export const getDruckExtendedDataBySlug = (slug: string): RegionalDruckExtendedData => {
  return regionalDruckExtendedData[slug] || {
    caseStudy: {
      title: "Designmodell für lokales Unternehmen",
      industry: "Diverse Branchen",
      challenge: "Ein regionaler Betrieb benötigte kurzfristig ein Anschauungsmodell für eine Kundenpräsentation.",
      solution: "Wir erstellten ein maßstabsgetreues Modell in passendem Material. Lieferung erfolgte innerhalb weniger Tage.",
      result: "Die Präsentation war ein Erfolg und der Betrieb bestellt seitdem regelmäßig Modelle für Kundentermine.",
      specs: {
        size: "Individuell",
        material: "PLA+ / PETG",
        time: "3-5 Werktage"
      },
      quote: "Schnell, unkompliziert und genau passend – so muss 3D-Druck sein."
    },
    materials: defaultMaterials,
    industryFocus: "Allgemeiner 3D-Druck Service",
    uniqueSellingPoints: [
      "Professioneller FDM 3D-Druck",
      "Express-Fertigung möglich",
      "Persönliche Beratung"
    ]
  };
};
