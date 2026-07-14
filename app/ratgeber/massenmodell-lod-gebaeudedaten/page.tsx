import type { Metadata } from 'next'
import MassenmodellGuide from '@/src-pages/ratgeber/MassenmodellGuide'

const TITLE = 'Massenmodell, LoD1 und LoD2: welche Gebäudedaten brauche ich? | ekdruck'
const DESCRIPTION =
  'Referenz für Architektur- und Städtebaumodelle: die LoD-Stufen nach CityGML, und wo es in Österreich, Deutschland und der Schweiz die Gebäude- und Geländedaten wirklich gibt. Mit Lizenz, Format und Kosten je Quelle.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/ratgeber/massenmodell-lod-gebaeudedaten' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/massenmodell-lod-gebaeudedaten',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-kirche.jpg', width: 1200, height: 801 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

export default function Page() {
  return <MassenmodellGuide />
}
