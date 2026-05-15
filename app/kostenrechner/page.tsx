import type { Metadata } from "next";
import Kostenrechner from "@/components/Kostenrechner";

// ─── SEO Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0 | ekdruck",
  description:
    "STL hochladen → Richtpreis sofort. 8 FDM-Materialien, Multi-File-Upload, Mengenvorteil ab 10 Stück. Kein Account nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen) · Gunskirchen, OÖ",
  alternates: {
    canonical: "https://www.ek-druck.at/kostenrechner",
  },
  openGraph: {
    title: "3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0",
    description:
      "STL hochladen → Richtpreis sofort. Kein Account, kein Anruf nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen)",
    url: "https://www.ek-druck.at/kostenrechner",
    siteName: "ekdruck – 3D-Druck Österreich",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0",
    description:
      "STL hochladen → Richtpreis sofort. Kein Account, kein Anruf nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen)",
    images: [
      "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
    ],
  },
};

// ─── FAQ Schema JSON-LD ───────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet ein 3D-Druck Modell bei ekdruck?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die 3D-Druck Kosten beginnen bei ekdruck ab €20 pro Teil. Der genaue Preis hängt von Modellgröße, Material und Qualitätsstufe ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Richtpreisberechnung — kostenlos und ohne Anmeldung. Für jedes Projekt erstellen wir zusätzlich ein persönlich geprüftes Festpreisangebot innerhalb von 6 Stunden.",
      },
    },
    {
      "@type": "Question",
      name: "Welche 3D-Druck Materialien kann ich wählen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir bieten 8 FDM-Materialien an: PLA (ideal für Präsentationsmodelle), PETG (UV-beständig, perfekt für Messemodelle), ABS (glätt- und lackierbar), PLA+ (verstärkt), ASA (wetterfest), TPU (flexibel), Polycarbonat (extrem schlagfest) und PA6-CF mit Carbonfaser für Premium-Showmodelle. Alle Filamente stammen aus österreichischer Produktion.",
      },
    },
    {
      "@type": "Question",
      name: "Wie genau ist der Richtpreis aus dem Kostenrechner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Richtpreis basiert auf der realen Geometrie Ihrer STL-Datei und berücksichtigt Materialverbrauch, Druckzeit, Baugröße und Setup-Aufwand. Typische Abweichung zum Endpreis: ±10 bis 15 %. Der verbindliche Festpreis wird nach persönlicher technischer Prüfung festgelegt und per E-Mail zugesendet.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mehrere 3D-Modelle gleichzeitig kalkulieren lassen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, unser Kostenrechner unterstützt Multi-File-Upload. Sie können beliebig viele STL-Dateien hochladen, jeweils mit eigenem Material und eigener Stückzahl konfigurieren und erhalten einen Gesamtrichtpreis mit automatischem Mengenvorteil ab 10 Stück.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell ist die Lieferung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standardaufträge fertigen wir in 3 bis 5 Werktagen. Im Express-Service erhalten Sie Ihr 3D-Druck Modell bereits in 24 bis 48 Stunden. Wir liefern versichert per Post in ganz Österreich — nach Wien, Linz, Graz, Salzburg, Innsbruck und alle weiteren Städte. Persönliche Abholung in Gunskirchen ist ebenfalls möglich.",
      },
    },
    {
      "@type": "Question",
      name: "Wofür eignet sich euer 3D-Druck Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir sind spezialisiert auf nicht-technische Präsentationsmodelle: Messemodelle und Standexponate, Architekturmodelle für Wettbewerbe und Kundenpräsentationen, Designstudien und Formentwürfe, Schulungs- und Lehrmodelle sowie Kleinserien ab 10 Stück. Mechanische Bauteile oder industrielle Ersatzteile fertigen wir nicht an.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich einen Account erstellen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Der Kostenrechner funktioniert ohne Anmeldung und ohne Account. Ihre STL-Datei wird ausschließlich lokal in Ihrem Browser analysiert und verlässt nie Ihren Rechner. Erst wenn Sie ein unverbindliches Angebot anfordern, benötigen wir Ihre E-Mail-Adresse für die Antwort.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Mengenrabatte für größere Projekte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Ab 10 Teilen erhalten Sie automatisch 5 % Mengenvorteil, ab 25 Teilen 7 %, ab 50 Teilen 8 % und ab 100 Teilen 10 % Rabatt auf den Gesamtpreis. Der Mengenvorteil wird direkt im Kostenrechner angezeigt. Für größere Projektmengen oder wiederkehrende Aufträge erstellen wir gerne ein individuelles Angebot.",
      },
    },
  ],
};

// ─── WebApplication Schema ────────────────────────────────────────
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ekdruck 3D-Druck Kostenrechner",
  url: "https://www.ek-druck.at/kostenrechner",
  description:
    "Online-Kostenrechner für 3D-Druck: STL-Datei hochladen, Material wählen, Richtpreis sofort berechnen. 8 FDM-Materialien, Multi-File-Upload, Mengenrabatte.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Kostenlose Nutzung des 3D-Druck Kostenrechners",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "ekdruck e.U.",
    url: "https://www.ek-druck.at",
    telephone: "+436765517197",
    email: "office@ek-druck.at",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Negrellistraße 15",
      addressLocality: "Gunskirchen",
      postalCode: "4623",
      addressRegion: "Oberösterreich",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1406,
      longitude: 13.9400,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
      bestRating: "5",
    },
  },
};

export default function KostenrechnerPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* Page Content */}
      <Kostenrechner />
    </>
  );
}
