// Extended data for Swiss regional Messemodell pages
// Case studies, material recommendations, and unique content per Swiss region

import { CaseStudyData } from "@/components/landing/MesseCaseStudy";
import { MaterialRecommendation } from "@/components/landing/MesseMaterialTips";
import { RegionalExtendedData } from "@/data/regionalMesseExtendedData";

const swissMaterials: MaterialRecommendation[] = [
  { name: "PLA Premium", description: "Idealer Allrounder für Messemodelle in klimatisierten Schweizer Messehallen. Hervorragende Oberflächenqualität, einfach zu lackieren.", bestFor: ["Präsentationsmodelle", "Architekturmodelle", "Detailreiche Exponate"], icon: "palette" },
  { name: "PETG", description: "Robustes Messematerial für häufig transportierte Modelle. Temperaturbeständig bis 75°C, übersteht Spotstrahler und Logistikstress.", bestFor: ["Interaktive Exponate", "Transport-intensive Modelle", "Mehrfach-Messeeinsätze"], icon: "shield" },
  { name: "ASA (Outdoor)", description: "UV-stabil und hitzebeständig bis 95°C. Die erste Wahl für Outdoor-Messen und Freiluftveranstaltungen in der Schweiz.", bestFor: ["OLMA Freigelände", "Outdoor-Events", "Dauerausstellungen"], icon: "sun" },
];

export const swissExtendedData: Record<string, RegionalExtendedData> = {
  'zuerich': {
    caseStudy: {
      title: "Finanzinfrastruktur-Modell für FINANZ Zürich",
      industry: "Banking & FinTech",
      challenge: "Ein Schweizer FinTech-Unternehmen wollte seine Cloud-Infrastruktur als physisches Modell für die FINANZ-Messe im Kongresshaus Zürich darstellen – abstrakt genug für Marketing, aber technisch korrekt für Fachbesucher.",
      solution: "Wir entwickelten ein modulares Serverrack-Modell im Maßstab 1:10 aus PETG, mit farbcodierten Ebenen (Daten, Verarbeitung, Schnittstellen). Jedes Modul ist einzeln entnehmbar und dient als Gesprächsstarter.",
      result: "Das Modell generierte laut Kunde 40% mehr Standgespräche als im Vorjahr. Drei Module wurden als Give-away an Key Accounts überreicht.",
      specs: { size: "30 x 20 x 50 cm", material: "PETG mehrfarbig, mattlackiert", time: "7 Werktage" },
      quote: "Unsere Software ist komplex – das Modell hat sie für jeden Besucher sofort verständlich gemacht."
    },
    materials: swissMaterials,
    industryFocus: "Banking, FinTech, Versicherungen, Medtech",
    uniqueSellingPoints: [
      "Direkte Zollabwicklung AT→CH – Sie erhalten Ihr Modell verzollt",
      "Erfahrung mit Kongresshaus Zürich und Messezentrum Zürich",
      "CHF-Rechnung oder EUR – flexibel nach Ihren Bedürfnissen",
      "Express-Lieferung 48h ab Auftragsbestätigung"
    ],
    faqs: [
      { question: "Wie funktioniert die Lieferung von Messemodellen nach Zürich?", answer: "Wir liefern versichert via DPD/DHL von unserem Standort in Oberösterreich. Der Grenzübergang St. Margrethen ist nur 2h entfernt. Die Zollabwicklung (T1-Versandschein, Handelsrechnung, Ursprungserklärung) übernehmen wir komplett. Lieferzeit: 3–5 Werktage, Express 48h." },
      { question: "Kann ich mein Messemodell in CHF bezahlen?", answer: "Ja. Wir stellen Rechnungen wahlweise in EUR oder CHF aus. Die Schweizer MWST wird korrekt ausgewiesen (Reverse Charge bei B2B)." },
      { question: "Liefern Sie direkt zum Messezentrum Zürich?", answer: "Ja. Wir adressieren Pakete direkt an Ihren Standplatz am Messezentrum Zürich, Kongresshaus oder an die Halle 550. Bitte geben Sie Hallen- und Standnummer bei der Bestellung an." },
      { question: "Welche Messen in Zürich beliefern Sie regelmäßig?", answer: "FINANZ, Giardina, ArbeitsSicherheit Schweiz, Bauen & Modernisieren, Berufsmesse Zürich, Blickfang und viele weitere. Wir liefern zu jeder Veranstaltung am Messezentrum Zürich." },
    ],
    introText: "Zürich ist mit über 40 jährlichen Fachmessen der wichtigste Messestandort der Schweiz. Das Messezentrum Zürich, das Kongresshaus und die Halle 550 bieten Ausstellern aus Finanz, Technologie, Bau und Gesundheit eine internationale Bühne. Wer sein Produkt als physisches Ausstellungsmodell oder Exponat am Zürcher Messestand präsentieren möchte, findet in ekdruck einen erfahrenen Partner: Wir fertigen Ihre Schaumodelle, Demonstrationsmodelle und Präsentationsmodelle aus dem 3D-Druck und liefern sie termingerecht und verzollt nach Zürich."
  },

  'basel': {
    caseStudy: {
      title: "Gebäudesanierung als Schnittmodell für die Swissbau",
      industry: "Bau & Architektur",
      challenge: "Ein Schweizer Bauunternehmen brauchte für die Swissbau ein Schnittmodell, das die Schichten einer energetischen Gebäudesanierung zeigt – vom Mauerwerk über Dämmung bis zur Fassadenverkleidung.",
      solution: "Wir druckten ein Wandsegment im Maßstab 1:5 aus verschiedenfarbigen Materialien. Jede Schicht ist einzeln entnehmbar und mit beschrifteten Sockeln versehen. Das Modell steht auf einer drehbaren Grundplatte.",
      result: "Der Aussteller berichtete, dass das Schnittmodell zum meistfotografierten Exponat seines Stands wurde. Zwei Architekten bestellten direkt am Stand ähnliche Modelle für eigene Kundenpräsentationen.",
      specs: { size: "40 x 30 x 60 cm", material: "PLA mehrfarbig + PETG Sockelplatte", time: "8 Werktage" },
      quote: "Endlich verstehen Bauherren auf Anhieb, was wir mit ‚Mehrschicht-Dämmung' meinen."
    },
    materials: swissMaterials,
    industryFocus: "Bau, Architektur, Pharma, Chemie, Fertigungsindustrie",
    uniqueSellingPoints: [
      "Dreiländereck-Standort – kurze Wege zur Messe Basel",
      "Erfahrung mit Swissbau, PRODEX, ILMAC-Ausstellern",
      "Großmodelle bis 2m+ für die großen Basler Messehallen",
      "Verzollte Lieferung direkt zum Messestand"
    ],
    faqs: [
      { question: "Wie schnell können Messemodelle nach Basel geliefert werden?", answer: "Standard 3–5 Werktage, Express 48h. Basel ist über das Dreiländereck gut erreichbar. Zollabwicklung übernehmen wir." },
      { question: "Fertigen Sie Modelle für die Swissbau?", answer: "Ja. Wir haben Erfahrung mit Architekturmodellen, Gebäudeschnitten und Infrastrukturmodellen für Baumessen. Lieferung direkt zur Messe Basel, Hallen- und Standnummer angeben." },
      { question: "Können Sie auch Modelle für PRODEX und ILMAC fertigen?", answer: "Natürlich. Für die PRODEX fertigen wir Maschinenmodelle und Werkzeugmodelle, für die ILMAC Labor- und Anlagenmodelle für die Chemieindustrie." },
    ],
    introText: "Die Messe Basel zählt zu den bedeutendsten Messestandorten Europas. Mit der Swissbau (Bau und Immobilien), der PRODEX (Fertigungsindustrie) und der ILMAC (Chemie und Pharma) beherbergt Basel internationale Leitmessen, auf denen Aussteller ihre Innovationen einem Fachpublikum präsentieren. Ein 3D-gedrucktes Messemodell – ob Anlagenmodell für die Fertigungsindustrie, Gebäudeschnitt für die Swissbau oder Produktmodell für die Pharmabranche – schafft am Basler Messestand den entscheidenden Blickfang. Wir liefern Ihre Exponate, Präsentationsmodelle und Schaumodelle termingerecht und verzollt zur Messe Basel."
  },

  'bern': {
    caseStudy: {
      title: "Infrastrukturmodell für Suisse Public",
      industry: "Öffentlicher Sektor",
      challenge: "Eine Schweizer Gemeinde wollte auf der Suisse Public ihr geplantes Fernwärmenetz als Anschauungsmodell präsentieren – inklusive Einbettung in die lokale Topografie.",
      solution: "Wir erstellten ein Geländemodell im Maßstab 1:500 mit eingebetteten Fernwärmeleitungen (rot eingefärbt) und den versorgten Gebäuden. Das Modell basiert auf GIS-Höhendaten, die wir in ein 3D-Druckformat konvertierten.",
      result: "Das Modell wurde zum Mittelpunkt des Gemeindeauftritts. Der Gemeinderat berichtete, dass Bürger nach der Messe erstmals die geplante Fernwärmelösung visuell verstanden und die Zustimmungsrate in der Volksabstimmung deutlich stieg.",
      specs: { size: "80 x 60 x 15 cm", material: "PLA weiß + farbige Akzente, Sockelplatte", time: "10 Werktage" },
      quote: "Das Modell hat unsere Fernwärme-Abstimmung entschieden. Die Leute haben endlich gesehen, was wir planen."
    },
    materials: swissMaterials,
    industryFocus: "Öffentlicher Sektor, Infrastruktur, Landwirtschaft, Medtech",
    uniqueSellingPoints: [
      "Erfahrung mit Infrastruktur- und Geländemodellen",
      "Direktlieferung zum BERNEXPO-Gelände",
      "GIS-Datenverarbeitung für topografische Modelle",
      "Schweizer Zollabwicklung inklusive"
    ],
    faqs: [
      { question: "Liefern Sie Messemodelle direkt zum BERNEXPO?", answer: "Ja. Wir adressieren an Ihren Standplatz am BERNEXPO-Gelände. Bitte Hallen- und Standnummer angeben. Lieferzeit 4–6 Werktage, Express 48h." },
      { question: "Können Sie topografische Geländemodelle drucken?", answer: "Ja. Wir verarbeiten GIS-Höhendaten, Grundrisse und Katasterpläne zu maßstabsgetreuen Geländemodellen. Ideal für Infrastrukturprojekte, Bauvorhaben und Gemeindepräsentationen." },
      { question: "Welche Messen in Bern beliefern Sie?", answer: "BEA, Suisse Public, Swiss Medtech Expo, Ferienmesse Bern, BERNA und alle weiteren Veranstaltungen am BERNEXPO-Gelände." },
    ],
    introText: "Bern ist als Bundesstadt Schauplatz wichtiger Fachmessen für den öffentlichen Sektor und die Gesundheitsbranche. Die BEA zieht als größte Frühjahrsmesse der Schweiz über 300.000 Besucher an, die Suisse Public ist der Treffpunkt für Infrastruktur und Beschaffung im öffentlichen Raum. Wir fertigen Ihre Messemodelle und Exponate für Berner Messen: Infrastrukturmodelle für Gemeinden, Anlagenmodelle für Industrieaussteller oder Demonstrationsmodelle für die Medizintechnik. Lieferung verzollt direkt zum BERNEXPO-Gelände."
  },

  'st-gallen': {
    caseStudy: {
      title: "Landwirtschaftliches Stallgebäude für Tier&Technik",
      industry: "Agrar & Stallbau",
      challenge: "Ein Stallbauunternehmen aus der Ostschweiz wollte auf der Tier&Technik ein komplett neues Stallkonzept präsentieren – inklusive Belüftungssystem, Melkroboter-Station und Fressplatzgestaltung.",
      solution: "Wir druckten ein aufklappbares Stallmodell im Maßstab 1:50 mit abnehmbarem Dach. Das Belüftungssystem wurde mit farbigen Pfeilen dargestellt, der Melkroboter als separates Detailmodell in 1:10.",
      result: "Das aufklappbare Modell zog Landwirte an den Stand wie ein Magnet. Der Kunde erhielt 28 qualifizierte Anfragen während der 4-tägigen Messe – doppelt so viele wie im Vorjahr.",
      specs: { size: "60 x 40 x 25 cm (Stall) + 15 x 15 x 20 cm (Melkroboter)", material: "PETG weiß + PLA Detailteile", time: "12 Werktage" },
      quote: "Das aufklappbare Dach war genial. Jeder Besucher wollte reinschauen – und dann reden."
    },
    materials: swissMaterials,
    industryFocus: "Landwirtschaft, Lebensmittel, Stallbau, Ostschweizer Gewerbe",
    uniqueSellingPoints: [
      "Kürzester Weg in die Schweiz – nur 2h zum Grenzübergang",
      "Persönliche Übergabe in St. Gallen möglich",
      "Erfahrung mit OLMA und Tier&Technik-Ausstellern",
      "Aufklappbare und interaktive Modelle als Spezialität"
    ],
    faqs: [
      { question: "Wie schnell können Modelle nach St. Gallen geliefert werden?", answer: "3–4 Werktage Standard, 48h Express. Der Grenzübergang St. Margrethen ist nur 2h von unserem Standort entfernt – damit ist St. Gallen unsere schnellste Schweizer Lieferadresse." },
      { question: "Fertigen Sie Modelle für die OLMA?", answer: "Ja. Wir haben Erfahrung mit landwirtschaftlichen Modellen, Lebensmittelverarbeitungsanlagen und Gewerbemodellen für OLMA-Aussteller." },
      { question: "Ist eine persönliche Übergabe möglich?", answer: "Ja. Aufgrund der Grenznähe können wir Modelle persönlich zum OLMA-Messegelände bringen. Ideal für empfindliche Großmodelle." },
    ],
    introText: "St. Gallen ist das Messezentrum der Ostschweiz. Die OLMA zählt mit über 350.000 Besuchern zu den größten Schweizer Publikumsmessen, die Tier&Technik ist die wichtigste Schweizer Fachmesse für Nutztierhaltung und Agrartechnik. Unser Standort in Gunskirchen liegt nur 2 Autostunden vom Grenzübergang St. Margrethen entfernt – das macht St. Gallen zu unserer schnellsten Schweizer Lieferadresse. Wir fertigen Anschauungsmodelle für die Landwirtschaft, Industriemodelle für das Ostschweizer Gewerbe und Präsentationsmodelle für Fachaussteller an der OLMA."
  },

  'luzern': {
    caseStudy: {
      title: "Nachhaltiges Wohnprojekt für Bauen+Wohnen Luzern",
      industry: "Bau & Immobilien",
      challenge: "Ein Zentralschweizer Architekturbüro präsentierte auf der Bauen+Wohnen Luzern ein CO₂-neutrales Wohnquartier. Das Modell sollte Photovoltaik-Fassade, Gründächer und Quartiers-Infrastruktur zeigen.",
      solution: "Ein segmentiertes Quartiersmodell im Maßstab 1:200 mit abnehmbaren Gebäuden. Die PV-Fassade wurde durch reflektierendes Filament dargestellt, Gründächer mit grünem PLA.",
      result: "Das Modell überzeugte die Messejury: Der Stand gewann den ‚Nachhaltigkeitspreis' der Bauen+Wohnen. Drei Gemeinden meldeten sich für Machbarkeitsstudien.",
      specs: { size: "80 x 80 x 20 cm", material: "PLA mehrfarbig + PETG Grundplatte", time: "14 Werktage" },
      quote: "Das Modell hat unsere Idee greifbar gemacht. Die Gemeindevertreter haben sofort verstanden, wie das Quartier funktioniert."
    },
    materials: swissMaterials,
    industryFocus: "Bau, Immobilien, Energie, Gesundheit, Zentralschweizer Gewerbe",
    uniqueSellingPoints: [
      "Erfahrung mit Quartiersmodellen und Nachhaltigkeitsprojekten",
      "Direktlieferung zur Messe Luzern",
      "Segmentierte Modelle für einfachen Transport",
      "Zollabwicklung und CHF-Rechnung möglich"
    ],
    faqs: [
      { question: "Liefern Sie Messemodelle direkt zur Messe Luzern?", answer: "Ja. Versicherter Versand direkt an Ihren Standplatz. Bitte Hallen- und Standnummer angeben. 4–5 Werktage Standard, Express 48h." },
      { question: "Können Sie Architekturmodelle für Schweizer Wettbewerbe fertigen?", answer: "Ja. Wir haben Erfahrung mit Wettbewerbsmodellen in Maßstäben von 1:50 bis 1:500, mit Geländemodellierung und Umgebungsdarstellung." },
    ],
    introText: "Die Messe Luzern ist die wichtigste Messeplattform der Zentralschweiz. Die LUGA als Gewerbemesse und die Bauen+Wohnen als Fachmesse für die Baubranche ziehen jährlich Zehntausende Fachbesucher an. Für Aussteller an der Messe Luzern fertigen wir Architekturmodelle, Gebäudeschnitte und Infrastrukturmodelle aus dem 3D-Druck – präzise, termingerecht und mit vollständiger Zollabwicklung. Ob Wohnbauprojekt, Gewerbeimmobilie oder Energieinfrastruktur: Ihr Exponat wird zum Blickfang am Zentralschweizer Messestand."
  },
};

export const getSwissExtendedDataBySlug = (slug: string): RegionalExtendedData | undefined =>
  swissExtendedData[slug];
