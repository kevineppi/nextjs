import type { Metadata } from 'next'
import Prototyping from '@/src-pages/Prototyping'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

/**
 * Title-Schärfung 2026-05-27: Position 1.2 in GSC, aber 0 Klicks für "3d druck prototypen".
 * Hypothese: alter Title zu generisch ("Rapid Prototyping Österreich") · kein konkreter Hook.
 * Neuer Title: Spezifisch (24h Express), Social Proof (★5,0), Pain-Mitigation (ab €20).
 * Description: Pain-Pull-Format (Spritzguss 6 Wochen → 24h Prototyp) statt Feature-Dump.
 */

const TITLE = '3D-Druck Prototypen in 24h ★5,0 · Designmuster | ekdruck'
const DESCRIPTION =
  'Spritzguss braucht 6 Wochen · Ihr Design-Prototyp in 24-48h. PLA, PETG, ABS, PETG-CF. Feine Details, saubere Oberfläche. Festpreis in 6h. ★5,0 (31).'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'rapid prototyping, prototyp drucken lassen, 3d druck prototyp, designprototyp, anschauungsmuster, konzeptmodell, fdm prototyp, sla prototyp, sls prototyp, prototyping österreich, prototyp express, designmuster 3d druck, pa12 sls, reverse engineering, 3d druck prototypen 24h, prototyp express österreich, mehrfachfertigung 3d druck',
  alternates: buildDachAlternates('/prototyping'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/prototyping',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck · 3D-Druck Prototypen 24h Express' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Rapid Prototyping 3D-Druck',
  description:
    'Design-Prototypen und Anschauungsmuster in 24-48h aus FDM, SLA, SLS. PLA, PETG, ABS, ASA, PETG-CF. Feine Details, saubere Oberfläche. Festpreis-Angebot in 6h. Aus Gunskirchen, OÖ in ganz DACH.',
  url: 'https://www.ek-druck.at/prototyping',
  lowPrice: '20',
  highPrice: '3000',
})

const FAQ_LD = faqSchema([
  {
    q: 'Wie schnell bekomme ich einen Prototyp aus dem 3D-Druck?',
    a: 'Bei Standardgeometrien und gängigen Materialien (PLA, PETG, ABS) liefern wir innerhalb 24-48 Stunden. Express-Service mit Versand am selben Werktag bei Anfrage vor 10:00 Uhr möglich.',
  },
  {
    q: 'Wie fein sind die Details beim Prototypen-Druck?',
    a: 'Je nach Verfahren sind sehr feine Strukturen möglich: SLA und SLS lösen filigrane Details besonders sauber auf, FDM eignet sich für größere Modelle. Wir empfehlen das passende Verfahren · kostenfreie Vorab-Beratung in 6h.',
  },
  {
    q: 'Welche Materialien gibt es für Prototypen?',
    a: 'PETG-CF (carbonverstärkt) für besonders formstabile Modelle, ASA für UV- und temperaturbeständige Außenmodelle, PA12 SLS für filigrane, robuste Muster. Wir beraten zur passenden Material-Verfahren-Kombination.',
  },
  {
    q: 'Was kostet ein Prototyp typischerweise?',
    a: 'Ab €20 für kleine FDM-Modelle, typische Design-Prototypen zwischen €40-300. Komplexe SLS-Muster €150-800. Sofort-Preis im Kostenrechner mit STL-Upload.',
  },
  {
    q: 'Können iterative Design-Anpassungen schnell umgesetzt werden?',
    a: 'Ja, das ist unser Stärkenfeld: Design-Update am Tag, Druck am nächsten Tag. Drei Iterationen in einer Woche sind Standard.',
  },
  {
    q: 'Liefert ihr DACH-weit für Prototypen-Aufträge?',
    a: 'Ja. Österreich 24-48h Express, Deutschland 2-4 Tage, Schweiz 3-5 Tage mit Zoll-Abwicklung. DHL Express oder Post je nach Eilbedarf.',
  },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Prototyping', url: '/prototyping' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Prototyping />
    </>
  )
}
