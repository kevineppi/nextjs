import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  robots: { index: false, follow: true }, // DACH-Noindex (Thin/Doorway, AT-Fokus)
  title: 'Messemodelle NRW: MEDICA, Anuga, gamescom, drupa · 100+ Messen',
  description: 'NRW-Aussteller: über 100 Leitmessen in Düsseldorf, Köln, Essen. Branchenspezifische Modelle, günstiger als lokale Anbieter. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/nordrhein-westfalen',
  },
  openGraph: {
    title: 'Messemodelle NRW: MEDICA, Anuga, gamescom, drupa · 100+ Messen',
    description: 'NRW-Aussteller: über 100 Leitmessen in Düsseldorf, Köln, Essen. Branchenspezifische Modelle, günstiger als lokale Anbieter. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/nordrhein-westfalen',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
