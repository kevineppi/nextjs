import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Dresden – Silicon Saxony ✓ | ekdruck',
  description: 'Messemodelle Dresden: Halbleiter- & Technologiemessen. Präzisionsmodelle für Hightech ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/dresden',
  },
  openGraph: {
    title: 'Messemodelle Dresden – Silicon Saxony ✓ | ekdruck',
    description: 'Messemodelle Dresden: Halbleiter- & Technologiemessen. Präzisionsmodelle für Hightech ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/dresden',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
