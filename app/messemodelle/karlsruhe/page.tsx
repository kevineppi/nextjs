import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Karlsruhe – art & LEARNTEC | ekdruck',
  description: 'Messemodelle Karlsruhe: art KARLSRUHE, LEARNTEC, REHAB. Kunst- & Tech-Kompetenz ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/karlsruhe',
  },
  openGraph: {
    title: 'Messemodelle Karlsruhe – art & LEARNTEC | ekdruck',
    description: 'Messemodelle Karlsruhe: art KARLSRUHE, LEARNTEC, REHAB. Kunst- & Tech-Kompetenz ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/karlsruhe',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
