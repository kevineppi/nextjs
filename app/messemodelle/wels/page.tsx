import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Wels – 10 Min zum Messegelände | ekdruck',
  description: 'Welser Messe-Aussteller: Modelle für AGRARIA, Power-Days & FISCH&FEINES. 10 Min Abholung in Gunskirchen. Last-Minute möglich.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/wels',
  },
  openGraph: {
    title: 'Messemodelle Wels – 10 Min zum Messegelände | ekdruck',
    description: 'Welser Messe-Aussteller: Modelle für AGRARIA, Power-Days & FISCH&FEINES. 10 Min Abholung in Gunskirchen. Last-Minute möglich.',
    url: 'https://www.ek-druck.at/messemodelle/wels',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
