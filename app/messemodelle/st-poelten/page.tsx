import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle St. Pölten – VAZ & Fachmessen | ekdruck',
  description: 'St. Pöltner Aussteller: Standmodelle für VAZ-Events, WK-Veranstaltungen & regionale Fachmessen. A1-Express ab OÖ. Jetzt Modell anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/st-poelten',
  },
  openGraph: {
    title: 'Messemodelle St. Pölten – VAZ & Fachmessen | ekdruck',
    description: 'St. Pöltner Aussteller: Standmodelle für VAZ-Events, WK-Veranstaltungen & regionale Fachmessen. A1-Express ab OÖ. Jetzt Modell anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/st-poelten',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
