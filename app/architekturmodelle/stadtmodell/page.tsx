import type { Metadata } from 'next'
import Stadtmodell from '@/src-pages/Stadtmodell'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

const TITLE = 'Städtebaumodell & Stadtmodell 3D-Druck ★5,0 | ekdruck'
const DESCRIPTION =
  'Stadt- und Städtebaumodelle aus dem 3D-Druck: Maßstab 1:500-1:1000, segmentiert bis XXL. Für Gemeinde, Bauträger und Planung. Angebot in 6h. ★5,0 (31).'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'städtebaumodell, stadtmodell 3d druck, ortsmodell drucken lassen, umgebungsmodell, städtebaumodell 3d druck, stadtmodell drucken lassen, geländemodell architektur, massenmodell, bebauungsmodell, gemeindemodell, stadtmodell 1:500, städtebaumodell österreich',
  alternates: buildDachAlternates('/architekturmodelle/stadtmodell'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/architekturmodelle/stadtmodell',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-uebersicht.jpg', width: 1200, height: 630, alt: 'ekdruck · Städtebaumodell / Ortsmodell 1:500 aus dem 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Städtebaumodell / Stadtmodell 3D-Druck',
  description:
    'Stadt-, Orts- und Umgebungsmodelle aus dem 3D-Druck. Maßstab 1:500 bis 1:1000, segmentiert bis XXL, durchgehend weiß. Für Gemeinde, Bauträger und Planung. Festpreis-Angebot in 6h. Aus Gunskirchen, OÖ in ganz DACH.',
  url: 'https://www.ek-druck.at/architekturmodelle/stadtmodell',
})

const FAQ_LD = faqSchema([
  { q: 'Was kostet ein Städtebaumodell oder Stadtmodell?', a: 'Das hängt von Fläche, Maßstab und Detailgrad ab. Nach einer kurzen Sichtung Ihrer Daten erhalten Sie ein verbindliches Festpreis-Angebot innerhalb von 6 Stunden. Einen ersten Richtwert liefert der Kostenrechner.' },
  { q: 'Welcher Maßstab ist für ein Stadtmodell sinnvoll?', a: '1:500 für Orts-, Quartiers- und Bebauungsmodelle, 1:1000 für größere Areale und Stadtausschnitte. Im großen Maßstab gewinnt man nichts durch mehr Detail, sondern durch Weglassen: durchgehendes Weiß, saubere Dachkanten und ein Geländeverlauf, der stimmt.' },
  { q: 'Wie groß kann ein Stadtmodell sein?', a: 'Es gibt keine feste Größengrenze. Große Modelle setzen wir aus mehreren Teilen zusammen, mit unsichtbaren Trennkanten. So sind auch großflächige Areale bis XXL als ein zusammenhängendes Modell möglich.' },
  { q: 'Welche Daten braucht ihr für ein Stadtmodell?', a: 'Lage- und Höhendaten sowie Gebäudedaten, zum Beispiel CityGML/LoD-Datensätze, Kataster oder Vermessung. Wir bereiten die Daten druckfertig auf.' },
  { q: 'Wie schnell ist ein Stadtmodell fertig?', a: 'Je nach Umfang wenige Tage. Ein komplettes Ortsmodell haben wir schon in unter zwei Tagen aufbereitet, gedruckt und pünktlich zum Sitzungstermin geliefert. Das Angebot kommt in 6 Stunden.' },
  { q: 'Wofür wird ein Stadtmodell eingesetzt?', a: 'Für Gemeinde- und Bürgerpräsentationen, Bebauungspläne, die Vermarktung durch Bauträger und als Umgebungsmodell für Architektur-Wettbewerbe.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Architekturmodelle', url: '/architekturmodelle' },
  { name: 'Städtebaumodell', url: '/architekturmodelle/stadtmodell' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Stadtmodell />
    </>
  )
}
