import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Oberösterreich: AGRARIA, Welser Messe, Power-Days',
  description: 'OÖ-Aussteller: Modelle für AGRARIA, Welser Messe, Power-Days, Bildungsmesse Wels. Abholung in Gunskirchen, Same-Day möglich.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/oberoesterreich',
  },
  openGraph: {
    title: 'Messemodelle Oberösterreich: AGRARIA, Welser Messe, Power-Days',
    description: 'OÖ-Aussteller: Modelle für AGRARIA, Welser Messe, Power-Days, Bildungsmesse Wels. Abholung in Gunskirchen, Same-Day möglich.',
    url: 'https://www.ek-druck.at/messemodelle/oberoesterreich',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
