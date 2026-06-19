import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Essen: für E-world, SPIEL, Security, Equitana',
  description: 'Aussteller der Messe Essen: E-world (Energie), SPIEL (Brettspiele), Security, Equitana. Branchenspezifische Materialwahl. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/essen',
  },
  openGraph: {
    title: 'Messemodelle Essen: für E-world, SPIEL, Security, Equitana',
    description: 'Aussteller der Messe Essen: E-world (Energie), SPIEL (Brettspiele), Security, Equitana. Branchenspezifische Materialwahl. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/essen',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
