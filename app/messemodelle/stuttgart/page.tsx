import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Stuttgart – AMB & Automobil | ekdruck',
  description: 'Messemodelle Messe Stuttgart: AMB, R+T, Vision, Intergastra. Automobil-Kompetenz ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/stuttgart',
  },
  openGraph: {
    title: 'Messemodelle Stuttgart – AMB & Automobil | ekdruck',
    description: 'Messemodelle Messe Stuttgart: AMB, R+T, Vision, Intergastra. Automobil-Kompetenz ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/stuttgart',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
