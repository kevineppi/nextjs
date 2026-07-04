import type { Metadata } from 'next'
import Messemodelle from '@/src-pages/Messemodelle'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

const TITLE = 'Messemodelle 3D-Druck ★5,0 · Tisch-Exponat in 24h | ekdruck'
const DESCRIPTION = 'Ihr Produkt zu groß für den Messestand? 3D-gedrucktes Messemodell maßstabsgetreu in 24-48h. Bruchsicher, segmentiert, DACH-Express. ab €30 ★5,0 (31 Reviews) →'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/messemodelle'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/messemodelle',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck · Messemodelle 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Messemodelle 3D-Druck',
  description:
    'Bewegliche, miniaturisierte oder funktionale Messemodelle für Industrie-Aussteller. 8-Tonnen-Maschine als Tisch-Exponat. Express-Lieferung zu Messeterminen. Maschinenbau, Anlagenbau, Energietechnik.',
  url: 'https://www.ek-druck.at/messemodelle',
  lowPrice: '30',
  highPrice: '8000',
})

const FAQ_LD = faqSchema([
  {
    q: 'Wie lange dauert ein Messemodell für einen Industrie-Aussteller?',
    a: 'Standard-Messemodelle sind in 5-10 Werktagen versandfertig. Bei knappen Messeterminen bieten wir Express-Service ab 48h. Je früher die CAD-Daten kommen, desto entspannter die Produktion.',
  },
  {
    q: 'Können bewegliche Elemente (Rotoren, Getriebe) im Modell integriert werden?',
    a: 'Ja. Wir integrieren bewegliche Mechaniken direkt ins Modell: Drehgelenke, Schiebemechaniken, Demonstrations-Knöpfe. Multi-Material-Druck vereint Bewegung und Optik in einem Stück.',
  },
  {
    q: 'Welche Maßstäbe sind üblich für Messemodelle?',
    a: 'Für Tisch-Exponate üblich 1:10 bis 1:25. Für Stand-Hingucker auch 1:5 oder 1:8. Wir beraten zum optimalen Maßstab je nach Messe-Setting und Transportlogistik.',
  },
  {
    q: 'Was kostet ein hochwertiges Messemodell?',
    a: 'Tisch-Modelle ohne Mechanik typisch €800-2.500. Mit beweglichen Komponenten und Multi-Material €1.500-5.000. Vor-Ort-Beratung und CAD-Aufbereitung im Preis enthalten.',
  },
  {
    q: 'Ist das Modell transportsicher für Messe-Logistik?',
    a: 'Ja. Wir segmentieren große Modelle in transportfreundliche Module mit Magnet-Verbindungen · Aufbau am Stand in unter 5 Minuten, kein Werkzeug nötig.',
  },
  {
    q: 'Können wir das Modell mehrfach auf verschiedenen Messen einsetzen?',
    a: 'Genau dafür sind unsere Messemodelle gebaut. ASA-Filament für UV-Beständigkeit, kratzfeste Oberflächen, austauschbare Komponenten falls Schäden auftreten.',
  },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Messemodelle', url: '/messemodelle' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Messemodelle />
    </>
  )
}
