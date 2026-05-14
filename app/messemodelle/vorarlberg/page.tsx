import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Vorarlberg – Gustav & Herbstmesse | ekdruck',
  description: 'Vorarlberger Aussteller: Modelle für Gustav, SCHAU! & Herbstmesse Dornbirn. DACH-Lieferung, auch Schweiz & Süddeutschland. Jetzt anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/vorarlberg',
  },
  openGraph: {
    title: 'Messemodelle Vorarlberg – Gustav & Herbstmesse | ekdruck',
    description: 'Vorarlberger Aussteller: Modelle für Gustav, SCHAU! & Herbstmesse Dornbirn. DACH-Lieferung, auch Schweiz & Süddeutschland. Jetzt anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/vorarlberg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
