// Extended data for German regional Messemodell pages
// Case studies, material recommendations, and industry focus per region

import { RegionalExtendedData } from './regionalMesseExtendedData';
import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";

// Default materials for German regions
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
    description: "Optimiert für minimales Gewicht bei maximaler Stabilität. Perfekt für große Objekte und Transport nach Deutschland.",
    bestFor: ["Großformatige Modelle", "Häufiger Transport", "Messemodelle über 50cm"],
    icon: "feather"
  }
];

const defaultCaseStudy: CaseStudyData = {
  title: "Eyecatcher-Modell für deutsche Fachmesse",
  industry: "Messebau",
  challenge: "Ein deutscher Aussteller benötigte ein beeindruckendes Präsentationsmodell für seinen Messestand. Das Modell musste leicht transportierbar, aber dennoch robust und detailreich sein.",
  solution: "Wir fertigten ein mehrteiliges Modell aus hochwertigem PETG. Die modulare Konstruktion ermöglichte einfachen Transport, während die Oberflächenbehandlung eine professionelle Optik garantierte.",
  result: "Das Modell wurde zum Blickfang am Stand. Der Kunde berichtete von deutlich mehr Standbesuchern und qualitativ besseren Gesprächen mit potenziellen Kunden.",
  specs: {
    size: "80 x 60 x 40 cm",
    material: "PETG weiß, lackiert",
    time: "5 Werktage + Versand"
  },
  quote: "Das Modell war der absolute Eyecatcher an unserem Stand. Trotz der Lieferung aus Österreich war alles pünktlich und perfekt!"
};

export const germanExtendedData: Record<string, RegionalExtendedData> = {
  'bayern': {
    caseStudy: {
      title: "Baumaschinenmodell für bauma München",
      industry: "Baumaschinen & Bautechnik",
      challenge: "Ein bayerischer Baumaschinenhersteller wollte auf der bauma in München ein neues Kompaktbagger-Modell präsentieren. Das Modell sollte bewegliche Teile haben und die Hydraulik sichtbar machen.",
      solution: "Wir erstellten ein 1:10 Modell mit funktionsfähigem Ausleger und Schaufel. Transparente PETG-Elemente zeigten die Hydraulikleitungen. Die farbliche Gestaltung entsprach exakt dem Corporate Design.",
      result: "Das Modell generierte über 200 qualifizierte Leads auf der bauma. Drei Großbestellungen folgten direkt nach der Messe.",
      specs: {
        size: "90 x 40 x 50 cm",
        material: "PLA + PETG transparent, lackiert",
        time: "8 Werktage + 3 Tage Versand"
      },
      quote: "Trotz Fertigung in Österreich war das Modell 5 Tage vor Messebeginn da. Die Qualität hat unsere Erwartungen übertroffen."
    },
    materials: [
      {
        name: "PLA Industrial",
        description: "Robuste Oberfläche für Maschinenmodelle. Ideal für technische Demonstrationen auf der bauma.",
        bestFor: ["Maschinenmodelle", "Technische Schnittmodelle", "Funktionsmodelle"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Für Schnittdarstellungen und sichtbare Innenleben. Ideal für technische Erklärungen.",
        bestFor: ["Hydraulik-Visualisierung", "Schnittmodelle", "Technische Details"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau XXL",
        description: "Für übergroße Modelle auf der bauma. Minimales Gewicht trotz beeindruckender Größe.",
        bestFor: ["Großmaschinenmodelle", "Krananlagen", "Baustellenszenarien"],
        icon: "feather"
      }
    ],
    industryFocus: "Bau, Industrie & Präsentation in Bayern",
    uniqueSellingPoints: [
      "Grenznahe Fertigung – schnellste Lieferung nach Bayern",
      "Erfahrung mit bauma und Messe München",
      "Funktionsmodelle mit beweglichen Teilen"
    ]
  },

  'nordrhein-westfalen': {
    caseStudy: {
      title: "Vergrößertes Produktmodell für MEDICA Düsseldorf",
      industry: "Fachpräsentation",
      challenge: "Ein NRW-Unternehmen brauchte ein vergrößertes Anschauungsmodell eines neuen Produkts für die MEDICA. Das Modell sollte die interne Struktur zeigen und professionell aussehen.",
      solution: "Wir fertigten ein 20-fach vergrößertes Modell mit aufklappbaren Segmenten. Die Oberfläche wurde so veredelt, dass sie den professionellen Ansprüchen optisch entsprach.",
      result: "Das Modell ermöglichte detaillierte Erklärungen, die mit Bildern allein nicht möglich gewesen wären. Der Messestand verzeichnete 40% mehr Fachbesucher.",
      specs: {
        size: "30 x 20 x 15 cm",
        material: "PLA weiß, professionelle Optik",
        time: "6 Werktage + Expressversand"
      },
      quote: "Endlich konnten wir unser Produkt dreidimensional erklären. Das Modell hat den Unterschied gemacht."
    },
    materials: [
      {
        name: "PLA Premium Weiß",
        description: "Reinweißer, glatter Druck für professionelle Präsentationen. Hochwertige Optik.",
        bestFor: ["Vergrößerte Produktmodelle", "Anatomische Schaumodelle", "Detailmodelle"],
        icon: "palette"
      },
      {
        name: "PETG Halbtransparent",
        description: "Halbtransparente Oberfläche für elegante Ästhetik. Robust für häufige Handhabung.",
        bestFor: ["Gehäuse-Modelle", "Schaumodelle", "Präsentationsobjekte"],
        icon: "shield"
      },
      {
        name: "PLA Mehrfarbig",
        description: "Farbcodierte Modelle für komplexe Strukturen. Ideal für Schulungszwecke.",
        bestFor: ["Schaumodelle", "Schnittdarstellungen", "Präsentationsmodelle"],
        icon: "feather"
      }
    ],
    industryFocus: "Fachpräsentationen, Energie & Handel in NRW",
    uniqueSellingPoints: [
      "Erfahrung mit MEDICA und Düsseldorfer Leitmessen",
      "Präzisionsmodelle für professionelle Präsentationen",
      "Express-Versand für kurzfristige NRW-Messetermine"
    ]
  },

  'berlin': {
    caseStudy: {
      title: "Verkehrstechnik-Modell für InnoTrans Berlin",
      industry: "Verkehrstechnik & Mobilität",
      challenge: "Ein Verkehrstechnik-Unternehmen wollte auf der InnoTrans einen neuen Straßenbahnwagen präsentieren. Das maßstabsgetreue Modell sollte das innovative Fahrgastkonzept zeigen.",
      solution: "Wir erstellten ein 1:20 Modell mit abnehmbarem Dach zur Einsicht in den Innenraum. Transparente Fenster und detaillierte Sitzanordnungen machten das Konzept greifbar.",
      result: "Das Modell wurde in Fachmedien fotografiert und sorgte für hohes Interesse bei Verkehrsbetrieben aus ganz Europa.",
      specs: {
        size: "120 x 15 x 20 cm",
        material: "PLA weiß + transparent, lackiert",
        time: "10 Werktage + Versand"
      },
      quote: "Die Detailtreue des Modells hat bei Einkäufern und Presse gleichermaßen Eindruck gemacht."
    },
    materials: defaultMaterials,
    industryFocus: "Mobilität, Technologie & Tourismus in Berlin",
    uniqueSellingPoints: [
      "Erfahrung mit InnoTrans, IFA und ITB",
      "Kompetenz für Verkehrstechnik-Modelle",
      "Express-Versand nach Berlin"
    ]
  },

  'hamburg': {
    caseStudy: {
      title: "Offshore-Windanlage für WindEnergy Hamburg",
      industry: "Windenergie & Maritime Technik",
      challenge: "Ein Windenergie-Unternehmen brauchte ein maßstabsgetreues Modell einer neuen Offshore-Windanlage für die WindEnergy Hamburg. Das Modell sollte die Fundament- und Gondeltechnik zeigen.",
      solution: "Wir bauten ein 1:100 Modell der Anlage mit abnehmbarer Gondel und sichtbarer Fundamentstruktur. Die Rotorblätter waren drehbar montiert.",
      result: "Das Modell stand zentral am Stand und ermöglichte technische Erklärungen für Investoren und Fachbesucher. Zwei Großprojekte wurden direkt angebahnt.",
      specs: {
        size: "30 x 30 x 150 cm (Höhe)",
        material: "PLA weiß + graue Akzente",
        time: "8 Werktage + Versand"
      },
      quote: "Das Modell war perfekt für unsere Investorengespräche. Die Qualität aus Österreich ist erstklassig."
    },
    materials: [
      {
        name: "PLA Weiß Marine",
        description: "UV-beständige Optik für maritime Anwendungen. Perfekt für Wind- und Schiffsmodelle.",
        bestFor: ["Windanlagen", "Schiffsmodelle", "Hafenmodelle"],
        icon: "palette"
      },
      {
        name: "PETG Robust",
        description: "Für Modelle, die häufig transportiert und demonstriert werden. Bruchsicher.",
        bestFor: ["Demonstrationsmodelle", "Interaktive Exponate", "Messemodelle"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für große maritime Modelle. Minimales Gewicht für einfachen Transport nach Hamburg.",
        bestFor: ["Offshore-Modelle", "Plattform-Modelle", "Großanlagen"],
        icon: "feather"
      }
    ],
    industryFocus: "Maritime Industrie, Windenergie & Logistik in Hamburg",
    uniqueSellingPoints: [
      "Spezialist für Offshore- und Windenergie-Modelle",
      "Erfahrung mit SMM und WindEnergy Hamburg",
      "Robuste Verpackung für den Transport"
    ]
  },

  'hessen': {
    caseStudy: {
      title: "Gebäudetechnik-Modell für Light + Building Frankfurt",
      industry: "Gebäudetechnik & Licht",
      challenge: "Ein Gebäudetechnik-Hersteller wollte auf der Light + Building ein Smart-Building-Konzept präsentieren. Das Modell sollte verschiedene Beleuchtungsszenarien und Haustechnik-Komponenten zeigen.",
      solution: "Wir erstellten ein aufgeschnittenes Gebäudemodell mit transparenten Elementen für die Lichtführung. Die verschiedenen technischen Ebenen (Elektrik, Heizung, Lüftung) wurden farbcodiert dargestellt.",
      result: "Das Modell wurde zum zentralen Beratungstool am Messestand. Architekten und Planer konnten das Zusammenspiel der Systeme sofort erfassen.",
      specs: {
        size: "60 x 60 x 50 cm",
        material: "PLA mehrfarbig + PETG transparent",
        time: "7 Werktage + Versand"
      },
      quote: "Endlich konnten wir zeigen, wie alle Gewerke zusammenspielen. Das Modell war unser bestes Verkaufstool."
    },
    materials: defaultMaterials,
    industryFocus: "Gebäudetechnik, Automobil & Konsumgüter in Hessen",
    uniqueSellingPoints: [
      "Erfahrung mit Messe Frankfurt",
      "Kompetenz für Gebäudetechnik-Modelle",
      "Express-Option für Frankfurter Leitmessen"
    ]
  },

  'niedersachsen': {
    caseStudy: {
      title: "Industrie-4.0-Demonstrator für Hannover Messe",
      industry: "Industrie & Automatisierung",
      challenge: "Ein Automatisierungstechnik-Unternehmen brauchte ein anschauliches Modell einer vernetzten Produktionslinie für die Hannover Messe. Das Modell sollte die digitale Vernetzung physisch erlebbar machen.",
      solution: "Wir konstruierten eine Miniatur-Produktionslinie mit 5 Stationen. Farbige Markierungen zeigten die Datenflüsse, transparente Gehäuse die Sensorik. Modularer Aufbau für einfachen Transport.",
      result: "Das Modell wurde auf Social Media geteilt und in Fachmagazinen erwähnt. Über 150 qualifizierte Kontakte wurden am Stand generiert.",
      specs: {
        size: "120 x 40 x 30 cm",
        material: "PLA + PETG, mehrfarbig",
        time: "10 Werktage + Versand"
      },
      quote: "Industrie 4.0 endlich zum Anfassen. Unsere Besucher haben es geliebt, die Produktionslinie im Miniaturformat zu sehen."
    },
    materials: [
      {
        name: "PLA Industrial",
        description: "Für technische Präsentationsmodelle. Präzise Oberflächen für Anschauungsexponate.",
        bestFor: ["Produktionslinien-Modelle", "Maschinenmodelle (Anschauung)", "Ausstellungsexponate"],
        icon: "palette"
      },
      {
        name: "PETG Transparent",
        description: "Für sichtbare Innenleben und Sensorik-Darstellungen. Ideal für Industrie 4.0 Modelle.",
        bestFor: ["Sensorgehäuse", "Datenfluss-Visualisierung", "Funktionsmodelle"],
        icon: "shield"
      },
      {
        name: "PLA Mehrfarbig",
        description: "Farbcodierung für komplexe Systeme. Macht Prozesse auf einen Blick verständlich.",
        bestFor: ["Prozessdarstellungen", "Schulungsmodelle", "Systembeschreibungen"],
        icon: "feather"
      }
    ],
    industryFocus: "Industrie 4.0 & Automatisierung in Niedersachsen",
    uniqueSellingPoints: [
      "Spezialist für Hannover Messe Exponate",
      "Industrie-4.0-Kompetenz",
      "Modulare Bauweise für einfachen Transport"
    ]
  },

  'sachsen': {
    caseStudy: {
      title: "Fertigungstechnik-Modell für Intec Leipzig",
      industry: "Fertigungstechnik",
      challenge: "Ein sächsisches Unternehmen wollte auf der Intec ein neuartiges Bearbeitungszentrum als Anschauungsmodell präsentieren. Das Modell sollte die Spindelanordnung und den Werkzeugwechsler zeigen.",
      solution: "Wir erstellten ein Schnittmodell im Maßstab 1:5 mit abnehmbarer Verkleidung. Der Werkzeugwechsler wurde mit beweglichen Teilen realisiert.",
      result: "Fachbesucher konnten die Innovation sofort erfassen. Das Modell führte zu intensiven technischen Gesprächen und mehreren Vertriebsanbahnungen.",
      specs: {
        size: "50 x 40 x 45 cm",
        material: "PLA grau + Akzente",
        time: "6 Werktage + Versand"
      },
      quote: "Komplexe Technik einfach erklärt – das Modell war Gold wert für unsere Vertriebsgespräche."
    },
    materials: defaultMaterials,
    industryFocus: "Fertigungstechnik & Halbleiter in Sachsen",
    uniqueSellingPoints: [
      "Erfahrung mit Leipziger Messe",
      "Kompetenz für Präsentationsmodelle von Maschinen",
      "Präzisionsdruck für hochdetaillierte Anschauungsmodelle"
    ]
  },

  'baden-wuerttemberg': {
    caseStudy: {
      title: "Automobil-Interieur für Messe Stuttgart",
      industry: "Automobil & Zulieferer",
      challenge: "Ein baden-württembergischer Zulieferer brauchte ein maßstabsgetreues Modell eines neuen Fahrzeug-Interieurs für die AMB in Stuttgart. Die Oberflächentextur und Farbgebung mussten dem Original entsprechen.",
      solution: "Wir fertigten ein 1:3 Modell der Fahrzeugkonsole mit allen Bedienelementen. Spezialfinishes simulierten verschiedene Materialien wie Leder, Aluminium und Carbon.",
      result: "Das Modell überzeugte den Kunden und führte zu einem Folgeauftrag für den Zulieferer.",
      specs: {
        size: "60 x 40 x 25 cm",
        material: "PLA mit Spezialfinish",
        time: "8 Werktage + Versand"
      },
      quote: "Die Materialimitation war verblüffend echt. Unser Kunde konnte das neue Interieur regelrecht fühlen."
    },
    materials: [
      {
        name: "PLA mit Spezialfinish",
        description: "Verschiedene Oberflächenveredelungen: Carbon-Look, Aluminium-Optik, Leder-Textur.",
        bestFor: ["Interieur-Designstudien", "Premium-Oberflächen", "Haptische Muster"],
        icon: "palette"
      },
      {
        name: "PETG Industrial",
        description: "Für robuste Präsentationsmodelle. Temperaturbeständig und schlagfest.",
        bestFor: ["Designstudien", "Gehäusemodelle", "Anschauungsobjekte"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für großformatige Automobilmodelle. Reduziertes Gewicht bei voller Detailtreue.",
        bestFor: ["Fahrzeugmodelle", "Karosserie-Studien", "Interieur-Mockups"],
        icon: "feather"
      }
    ],
    industryFocus: "Design, Präsentation & Outdoor in Baden-Württemberg",
    uniqueSellingPoints: [
      "Kompetenz für Interieur-Designmodelle",
      "Erfahrung mit Messe Stuttgart",
      "Spezialfinishes für realistische Materialimitation"
    ]
  },

  'muenchen': {
    caseStudy: {
      title: "Umwelttechnologie-Modell für IFAT München",
      industry: "Umwelttechnologie",
      challenge: "Ein Umwelttechnik-Unternehmen wollte auf der IFAT eine neue Wasseraufbereitungsanlage präsentieren. Das Modell sollte den Reinigungsprozess in mehreren Stufen visualisieren.",
      solution: "Wir konstruierten ein transparentes Schnittmodell mit farbcodierten Stufen. Der Wasserfluss wurde durch blaue Transparentelemente dargestellt. Die modulare Bauweise ermöglichte die Erklärung jeder Stufe.",
      result: "Das Modell wurde zum didaktischen Hauptwerkzeug am Stand. Kommunale Entscheider konnten den Prozess sofort nachvollziehen.",
      specs: {
        size: "100 x 50 x 40 cm",
        material: "PETG transparent + PLA farbig",
        time: "8 Werktage + 3 Tage Versand"
      },
      quote: "Komplexe Verfahrenstechnik verständlich gemacht – das Modell war unser überzeugenstes Verkaufsargument."
    },
    materials: [
      {
        name: "PETG Kristallklar",
        description: "Für transparente Anlagenmodelle. Zeigt Prozessabläufe im Inneren.",
        bestFor: ["Verfahrenstechnik", "Wasseraufbereitung", "Filtersysteme"],
        icon: "palette"
      },
      {
        name: "PLA Farbcodiert",
        description: "Verschiedene Farben für Prozessstufen. Didaktisch optimal.",
        bestFor: ["Prozessvisualisierung", "Schulungsmodelle", "Stufendarstellungen"],
        icon: "shield"
      },
      {
        name: "PLA Leichtbau",
        description: "Für große Anlagenmodelle. Leicht zu transportieren zur Messe München.",
        bestFor: ["Anlagenmodelle", "Fabrikmodelle", "Infrastrukturprojekte"],
        icon: "feather"
      }
    ],
    industryFocus: "Umwelttechnik, Bau & Elektronik in München",
    uniqueSellingPoints: [
      "Grenznahe Fertigung – schnellste Lieferung nach München",
      "Erfahrung mit IFAT, BAU und bauma",
      "Persönliche Lieferung möglich"
    ]
  },

  'frankfurt': {
    caseStudy: {
      title: "Zulieferer-Präsentationsmodell für Automechanika Frankfurt",
      industry: "Automobil-Design & Präsentation",
      challenge: "Ein Zulieferer brauchte ein vergrößertes Schnittmodell eines innovativen Bremssystems als Anschauungsmodell für die Automechanika. Die inneren Komponenten sollten sichtbar und entnehmbar sein.",
      solution: "Wir fertigten ein 5-fach vergrößertes Schnittmodell mit 12 entnehmbaren Einzelteilen. Jedes Teil wurde farbcodiert und beschriftet.",
      result: "Werkstätten und Händler konnten die Vorteile des neuen Systems sofort verstehen. 300+ Visitenkarten wurden am Stand gesammelt.",
      specs: {
        size: "40 x 40 x 35 cm",
        material: "PLA mehrfarbig, beschriftet",
        time: "6 Werktage + Expressversand"
      },
      quote: "Ein Bild sagt mehr als tausend Worte – ein 3D-Modell sagt mehr als tausend Bilder. Genau so war es auf der Automechanika."
    },
    materials: defaultMaterials,
    industryFocus: "Präsentation, Gebäudetechnik & Konsumgüter in Frankfurt",
    uniqueSellingPoints: [
      "Erfahrung mit Messe Frankfurt – eine der größten weltweit",
      "Express-Versand für internationale Leitmessen",
      "Kompetenz für alle Branchen"
    ]
  },

  'duesseldorf': {
    caseStudy: {
      title: "Kunststoff-Werkzeugmodell für K-Messe",
      industry: "Kunststofftechnik",
      challenge: "Ein Werkzeugbauer wollte auf der K-Messe ein komplexes Werkzeugmodell mit Heißkanalsystem als Anschauungsmodell präsentieren. Das Modell sollte alle internen Kanäle und Kavitäten zeigen.",
      solution: "Wir erstellten ein aufgeschnittenes Modell mit transparenten Elementen für die Heißkanalführung. Die Kavitäten wurden farblich hervorgehoben.",
      result: "Das Modell ermöglichte technische Diskussionen auf einem neuen Level. Der Werkzeugbauer gewann drei neue Großkunden.",
      specs: {
        size: "45 x 35 x 30 cm",
        material: "PLA grau + PETG transparent",
        time: "7 Werktage + Versand"
      },
      quote: "Unsere Kunden konnten das Werkzeug von innen sehen, bevor es gefertigt wird. Ein unschätzbarer Vorteil."
    },
    materials: defaultMaterials,
    industryFocus: "Kunststoff, Fachpräsentationen & Handel in Düsseldorf",
    uniqueSellingPoints: [
      "Erfahrung mit K-Messe und MEDICA",
      "Kompetenz für Werkzeug-Schnittmodelle",
      "Express-Lieferung zur Messe Düsseldorf"
    ]
  },

  'koeln': {
    caseStudy: {
      title: "Food-Packaging-Modell für Anuga Köln",
      industry: "Lebensmittel & Verpackung",
      challenge: "Ein Verpackungshersteller brauchte übergroße Modelle verschiedener innovativer Verpackungslösungen für die Anuga. Die Modelle sollten die nachhaltigen Materialien optisch darstellen.",
      solution: "Wir fertigten 5-fach vergrößerte Verpackungsmodelle mit abnehmbaren Deckeln. Spezielle Oberflächen simulierten recyceltes Material und Bio-Kunststoff.",
      result: "Die übergroßen Modelle waren aus der Ferne sichtbar und zogen Besucher zum Stand. 200+ Kontakte in 4 Messetagen.",
      specs: {
        size: "5 Modelle, je ca. 40 x 30 x 25 cm",
        material: "PLA in Naturfarben",
        time: "7 Werktage + Versand"
      },
      quote: "Die Modelle haben unsere nachhaltigen Verpackungen perfekt in Szene gesetzt. Genau der richtige Eyecatcher."
    },
    materials: defaultMaterials,
    industryFocus: "Food, Gaming & Möbel in Köln",
    uniqueSellingPoints: [
      "Erfahrung mit Anuga und gamescom",
      "Kompetenz für Verpackungsmodelle",
      "Express-Versand zur Koelnmesse"
    ]
  },

  'hannover': {
    caseStudy: {
      title: "Smart-Factory-Demonstrator für Hannover Messe",
      industry: "Industrie 4.0",
      challenge: "Ein Automationsunternehmen benötigte einen physischen Demonstrator einer Smart Factory für die Hannover Messe. Das Modell sollte Roboter, Förderbänder und vernetzte Sensorik zeigen.",
      solution: "Wir konstruierten eine Miniatur-Smart-Factory mit 8 Arbeitsstationen. Farbcodierte Datenpfade zeigten die Vernetzung. Der modulare Aufbau ermöglichte stufenweisen Zusammenbau live am Stand.",
      result: "Der live-Aufbau am Stand wurde zum Event. Fachbesucher blieben stehen und diskutierten das Konzept.",
      specs: {
        size: "150 x 60 x 35 cm",
        material: "PLA + PETG, mehrfarbig, modular",
        time: "12 Werktage + Versand"
      },
      quote: "Die modulare Bauweise war genial – wir konnten die Smart Factory Schritt für Schritt erklären."
    },
    materials: defaultMaterials,
    industryFocus: "Industrie 4.0, Logistik & Landtechnik in Hannover",
    uniqueSellingPoints: [
      "Spezialist für Hannover Messe Exponate",
      "Modulare Smart-Factory-Modelle",
      "Erfahrung mit Industrie-4.0-Demonstratoren"
    ]
  },

  'nuernberg': {
    caseStudy: {
      title: "Automatisierungskomponente für SPS Nürnberg",
      industry: "Automatisierungstechnik",
      challenge: "Ein Automatisierungsunternehmen brauchte ein vergrößertes Modell eines neuen Industrie-Controllers für die SPS-Messe. Das Modell sollte die Anschlüsse und das Innenleben zeigen.",
      solution: "Wir erstellten ein 10-fach vergrößertes Modell mit abnehmbarem Gehäuse. Alle Platinen, Anschlüsse und Kühlkanäle wurden detailgetreu nachgebildet.",
      result: "Techniker und Ingenieure konnten die Vorteile der neuen Architektur sofort erkennen. Das Modell wurde zum Social-Media-Hit der SPS.",
      specs: {
        size: "50 x 30 x 20 cm",
        material: "PLA grau + grüne Platinen",
        time: "5 Werktage + Versand"
      },
      quote: "Das Modell war der Star unseres Stands auf der SPS. Selbst erfahrene Ingenieure waren beeindruckt."
    },
    materials: defaultMaterials,
    industryFocus: "Automatisierung, Spielwaren & Verpackung in Nürnberg",
    uniqueSellingPoints: [
      "Erfahrung mit SPS und Spielwarenmesse",
      "Kompetenz für Elektronik-Modelle",
      "Kurze Lieferwege nach Franken"
    ]
  },

  'stuttgart': {
    caseStudy: {
      title: "Metallbearbeitungsmaschine für AMB Stuttgart",
      industry: "Metallbearbeitung",
      challenge: "Ein Werkzeugmaschinenhersteller wollte auf der AMB ein neues 5-Achs-Bearbeitungszentrum als Modell präsentieren. Das Modell sollte alle 5 Achsen und den Werkzeugwechsler darstellen.",
      solution: "Wir konstruierten ein 1:5 Modell mit allen beweglichen Achsen. Der Werkzeugwechsler wurde mit entnehmbaren Werkzeugen realisiert.",
      result: "Das Modell war ideal für erste Beratungsgespräche und Vorabpräsentationen. Kunden konnten die Maschine 'begreifen'.",
      specs: {
        size: "60 x 50 x 50 cm",
        material: "PLA grau + Metalloptik-Finish",
        time: "8 Werktage + Versand"
      },
      quote: "Unsere Vertriebsingenieure lieben das Modell. Es macht jede Präsentation anschaulicher."
    },
    materials: defaultMaterials,
    industryFocus: "Metallbearbeitung, Automobil & Bildverarbeitung in Stuttgart",
    uniqueSellingPoints: [
      "Kompetenz für Werkzeugmaschinen-Modelle",
      "Erfahrung mit AMB Stuttgart",
      "Metalloptik-Finish für realistische Darstellung"
    ]
  },

  'essen': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Energie, Sicherheit & Gaming in Essen",
    uniqueSellingPoints: [
      "Erfahrung mit E-world und SPIEL",
      "Kompetenz für Energietechnik-Modelle",
      "Express-Versand nach NRW"
    ]
  },

  'dortmund': {
    caseStudy: {
      title: "Arbeitsschutz-Demonstrationsmodell für A+A Dortmund",
      industry: "Arbeitsschutz & Sicherheit",
      challenge: "Ein Arbeitsschutz-Hersteller brauchte ein Demonstrationsmodell für ein neues Absturzsicherungssystem für die A+A Messe.",
      solution: "Wir fertigten ein maßstabsgetreues Modell einer Dachkonstruktion mit installiertem Sicherungssystem. Detaillierte Befestigungspunkte zeigten die korrekte Installation.",
      result: "Das Modell ermöglichte anschauliche Schulungen direkt am Messestand. Fachkräfte für Arbeitssicherheit waren begeistert.",
      specs: {
        size: "80 x 60 x 40 cm",
        material: "PLA + farbige Sicherheitsmarkierungen",
        time: "6 Werktage + Versand"
      },
      quote: "Arbeitsschutz zum Anfassen – genau so muss eine Messepräsentation sein."
    },
    materials: defaultMaterials,
    industryFocus: "Arbeitsschutz, Modellbau & Kreativ in Dortmund",
    uniqueSellingPoints: [
      "Erfahrung mit A+A und Intermodellbau",
      "Kompetenz für Sicherheitstechnik-Modelle",
      "Express-Versand ins Ruhrgebiet"
    ]
  },

  'friedrichshafen': {
    caseStudy: {
      title: "Fahrrad-Innovationsmodell für Eurobike",
      industry: "Fahrrad & Mobilität",
      challenge: "Ein Fahrradkomponenten-Hersteller wollte ein neues Federungssystem auf der Eurobike präsentieren. Das vergrößerte Modell sollte die interne Mechanik zeigen.",
      solution: "Wir erstellten ein 5-fach vergrößertes Schnittmodell der Federung. Transparente Elemente zeigten die Ölkammern, farbcodierte Teile die verschiedenen Einstellmöglichkeiten.",
      result: "Bikejournalisten fotografierten das Modell für ihre Testberichte. Die Innovation wurde dank der Visualisierung sofort verstanden.",
      specs: {
        size: "35 x 15 x 60 cm",
        material: "PLA + PETG transparent",
        time: "5 Werktage + Versand"
      },
      quote: "Endlich konnten wir zeigen, was in unserer Gabel steckt. Das Modell war unser PR-Hit auf der Eurobike."
    },
    materials: defaultMaterials,
    industryFocus: "Outdoor, Fahrrad & Luftfahrt in Friedrichshafen",
    uniqueSellingPoints: [
      "Kurze Wege über Vorarlberg/Bodensee",
      "Erfahrung mit Eurobike und Outdoor",
      "Kompetenz für Sport- und Technikmodelle"
    ]
  },

  'karlsruhe': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Kunst, Bildung & Nutzfahrzeuge in Karlsruhe",
    uniqueSellingPoints: [
      "Erfahrung mit art KARLSRUHE",
      "Kompetenz für Kunstobjekte",
      "Express-Versand nach Baden"
    ]
  },

  'augsburg': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Leichtbau, Energie & Schleiftechnik in Augsburg",
    uniqueSellingPoints: [
      "Kurze Lieferwege über A8",
      "Erfahrung mit Grindtec",
      "Kompetenz für Leichtbau-Modelle"
    ]
  },

  'leipzig': {
    caseStudy: {
      title: "Denkmalpflege-Modell für denkmal Leipzig",
      industry: "Denkmalpflege & Restaurierung",
      challenge: "Ein Restaurierungsunternehmen wollte auf der denkmal-Messe die geplante Sanierung eines historischen Gebäudes visualisieren. Das Modell sollte den Ist- und Soll-Zustand zeigen.",
      solution: "Wir erstellten ein zweiteiliges Modell: eine Hälfte im historischen Zustand, die andere im sanierten Zustand. Abnehmbare Fassadenelemente zeigten die Dämmschichten.",
      result: "Denkmalschutzbehörden und Bauherren waren begeistert. Das Modell wurde als Best Practice in einem Fachmagazin erwähnt.",
      specs: {
        size: "70 x 50 x 40 cm",
        material: "PLA zweifarbig",
        time: "8 Werktage + Versand"
      },
      quote: "Alt und Neu in einem Modell – genau das brauchten wir, um unsere Kunden zu überzeugen."
    },
    materials: defaultMaterials,
    industryFocus: "Denkmalpflege, Buch & Fertigungstechnik in Leipzig",
    uniqueSellingPoints: [
      "Erfahrung mit denkmal-Messe Leipzig",
      "Kompetenz für historische Gebäudemodelle",
      "Tradition trifft Innovation"
    ]
  },

  'dresden': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Halbleiter, Technologie & Tourismus in Dresden",
    uniqueSellingPoints: [
      "Kompetenz für Hightech-Modelle",
      "Erfahrung mit Silicon Saxony",
      "Präzisionsdruck für Mikroelektronik-Modelle"
    ]
  },

  'wiesbaden': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Kongresse & Events in Wiesbaden",
    uniqueSellingPoints: [
      "Nähe zu Frankfurt",
      "Kompetenz für Kongressmodelle",
      "Express-Versand in die Rhein-Main Region"
    ]
  },

  'mainz': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Wein, Medien & Wirtschaft in Mainz",
    uniqueSellingPoints: [
      "Nähe zu Frankfurt für doppelten Messestandort",
      "Flexible Terminplanung",
      "Express-Option verfügbar"
    ]
  },

  'kiel': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Maritime Industrie & Schiffbau in Kiel",
    uniqueSellingPoints: [
      "Spezialist für Schiffsmodelle",
      "Erfahrung mit maritimer Industrie",
      "Robuste Verpackung für langen Transport"
    ]
  },

  'potsdam': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Luft- & Raumfahrt, Wirtschaft in Potsdam",
    uniqueSellingPoints: [
      "Direkte Anbindung an Berlin",
      "Erfahrung mit ILA",
      "Express-Versand nach Brandenburg"
    ]
  },

  'erfurt': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Innovation, Optik & Bau in Erfurt",
    uniqueSellingPoints: [
      "Zentrale Lage in Deutschland",
      "Erfahrung mit Messe Erfurt",
      "Express-Option verfügbar"
    ]
  },

  'magdeburg': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Sakralbau & Wirtschaft in Magdeburg",
    uniqueSellingPoints: [
      "Zuverlässiger Versand nach Sachsen-Anhalt",
      "Flexible Lieferoptionen",
      "Express-Option verfügbar"
    ]
  },

  'schwerin': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Landwirtschaft & Wirtschaft in Schwerin",
    uniqueSellingPoints: [
      "Robuste Verpackung für langen Transport",
      "Express-Option verfügbar",
      "Zuverlässiger Versand"
    ]
  },

  'saarbruecken': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Industrie & Handwerk im Saarland",
    uniqueSellingPoints: [
      "Kompetenz für Dreiländereck-Messen",
      "Express-Versand verfügbar",
      "Grenzübergreifende Erfahrung"
    ]
  },

  // Defaults for remaining regions
  'rheinland-pfalz': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Wein, Handwerk & Wirtschaft in Rheinland-Pfalz",
    uniqueSellingPoints: [
      "Nähe zu Frankfurt",
      "Express-Versand verfügbar",
      "Flexible Terminplanung"
    ]
  },

  'schleswig-holstein': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Maritime Industrie & Bau in Schleswig-Holstein",
    uniqueSellingPoints: [
      "Erfahrung mit NordBau",
      "Maritime Modell-Kompetenz",
      "Robuste Verpackung"
    ]
  },

  'brandenburg': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Luft- & Raumfahrt, Landwirtschaft in Brandenburg",
    uniqueSellingPoints: [
      "Nähe zu Berlin",
      "ILA-Erfahrung",
      "Express-Versand verfügbar"
    ]
  },

  'thueringen': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Optik, Innovation & Bau in Thüringen",
    uniqueSellingPoints: [
      "Zentrale Lage in Deutschland",
      "Express-Option verfügbar",
      "Flexible Terminplanung"
    ]
  },

  'sachsen-anhalt': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Industrie & Wirtschaft in Sachsen-Anhalt",
    uniqueSellingPoints: [
      "Zuverlässiger Versand",
      "Express-Option verfügbar",
      "Flexible Lieferoptionen"
    ]
  },

  'mecklenburg-vorpommern': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Maritime Wirtschaft & Landwirtschaft in MV",
    uniqueSellingPoints: [
      "Maritime Modell-Kompetenz",
      "Robuste Verpackung für langen Transport",
      "Express-Option verfügbar"
    ]
  },

  'saarland': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Industrie & Handwerk im Saarland",
    uniqueSellingPoints: [
      "Grenznahe Kompetenz",
      "Express-Versand verfügbar",
      "Dreiländereck-Erfahrung"
    ]
  },

  'bremen': {
    caseStudy: defaultCaseStudy,
    materials: defaultMaterials,
    industryFocus: "Luft- & Raumfahrt, Fischerei in Bremen",
    uniqueSellingPoints: [
      "Kompetenz für Raumfahrtmodelle",
      "Maritime Erfahrung",
      "Express-Option verfügbar"
    ]
  },
};

// Helper to get German extended data by slug
export const getGermanExtendedDataBySlug = (slug: string): RegionalExtendedData | undefined =>
  germanExtendedData[slug];
