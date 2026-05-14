import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Bremen – Raumfahrt & Maritim | ekdruck',
  description: 'Messemodelle Bremen: Space Tech Expo, fish international. Luft- & Raumfahrt-Kompetenz ✓ Express – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/bremen',
  },
  openGraph: {
    title: 'Messemodelle Bremen – Raumfahrt & Maritim | ekdruck',
    description: 'Messemodelle Bremen: Space Tech Expo, fish international. Luft- & Raumfahrt-Kompetenz ✓ Express – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/bremen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
