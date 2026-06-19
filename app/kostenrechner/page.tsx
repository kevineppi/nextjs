import type { Metadata } from "next";
import Kostenrechner from "@/src-pages/Kostenrechner";

export const metadata: Metadata = {
  title: "3D-Druck Preisrechner: STL hochladen, Preis in 60 Sekunden",
  description:
    "STL-Datei rein → Sofortpreis raus. 8 Materialien, Multi-File, Mengenrabatt ab 10 Stück. Kein Login, keine E-Mail nötig. Verbindlich in 6h.",
  alternates: {
    canonical: "https://www.ek-druck.at/kostenrechner",
  },
  openGraph: {
    title: "3D-Druck Preisrechner: STL hochladen, Preis in 60 Sekunden",
    description: "STL-Datei rein → Sofortpreis raus. 8 Materialien, Multi-File, Mengenrabatt ab 10 Stück. Kein Login, keine E-Mail nötig. Verbindlich in 6h.",
    url: "https://www.ek-druck.at/kostenrechner",
    siteName: "ekdruck · 3D-Druck Österreich",
    locale: "de_AT",
    type: "website",
    images: [{ url: "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D-Druck Preisrechner: STL hochladen, Preis in 60 Sekunden",
    description: "STL-Datei rein → Sofortpreis raus. 8 Materialien, Multi-File, Mengenrabatt ab 10 Stück. Kein Login, keine E-Mail nötig. Verbindlich in 6h.",
    images: ["https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Was kostet ein 3D-Druck Modell bei ekdruck?", acceptedAnswer: { "@type": "Answer", text: "Die 3D-Druck Kosten beginnen bei ekdruck ab €20 pro Teil. Der genaue Preis hängt von Modellgröße, Material und Qualitätsstufe ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Richtpreisberechnung · kostenlos und ohne Anmeldung." } },
    { "@type": "Question", name: "Welche 3D-Druck Materialien kann ich wählen?", acceptedAnswer: { "@type": "Answer", text: "Wir bieten 8 FDM-Materialien an: PLA, PETG, ABS, PLA+, ASA, TPU, Polycarbonat und PA6-CF mit Carbonfaser. Alle Filamente stammen aus österreichischer Produktion." } },
    { "@type": "Question", name: "Wie genau ist der Richtpreis?", acceptedAnswer: { "@type": "Answer", text: "Typische Abweichung zum Endpreis: ±10 bis 15 %. Der verbindliche Festpreis wird nach persönlicher technischer Prüfung festgelegt." } },
    { "@type": "Question", name: "Kann ich mehrere Modelle gleichzeitig kalkulieren?", acceptedAnswer: { "@type": "Answer", text: "Ja, Multi-File-Upload wird unterstützt. Mengenvorteil ab 10 Stück automatisch." } },
    { "@type": "Question", name: "Wie schnell ist die Lieferung?", acceptedAnswer: { "@type": "Answer", text: "Standard 3-5 Werktage, Express 24-48 Stunden. Versand in ganz Österreich." } },
    { "@type": "Question", name: "Muss ich einen Account erstellen?", acceptedAnswer: { "@type": "Answer", text: "Nein. Kostenrechner ohne Anmeldung. STL-Analyse läuft lokal im Browser." } },
    { "@type": "Question", name: "Gibt es Mengenrabatte?", acceptedAnswer: { "@type": "Answer", text: "Ab 10 Teilen 5 %, ab 50 Teilen 8 %, ab 100 Teilen 10 % Rabatt." } },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ekdruck 3D-Druck Kostenrechner",
  url: "https://www.ek-druck.at/kostenrechner",
  description: "STL-Datei rein → Sofortpreis raus. 8 Materialien, Multi-File, Mengenrabatt ab 10 Stück. Kein Login, keine E-Mail nötig. Verbindlich in 6h.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  provider: {
    "@type": "LocalBusiness",
    name: "ekdruck e.U.",
    url: "https://www.ek-druck.at",
    telephone: "+436765517197",
    address: { "@type": "PostalAddress", streetAddress: "Negrellistraße 15", addressLocality: "Gunskirchen", postalCode: "4623", addressRegion: "Oberösterreich", addressCountry: "AT" },
  },
};

export default function KostenrechnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Kostenrechner />
    </>
  );
}
