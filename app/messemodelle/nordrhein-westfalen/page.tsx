import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle NRW ★5,0 – MEDICA & gamescom · günstiger',
  description: 'Messemodelle NRW ✓ MEDICA ✓ Anuga ✓ gamescom ✓ 100+ Messen ✓ günstiger als lokal. ★ 5,0 (31 Bew.) – Angebot 6h | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/nordrhein-westfalen',
  },
  openGraph: {
    title: 'Messemodelle NRW ★5,0 – MEDICA & gamescom · günstiger',
    description: 'Messemodelle NRW ✓ MEDICA ✓ Anuga ✓ gamescom ✓ 100+ Messen ✓ günstiger als lokal. ★ 5,0 (31 Bew.) – Angebot 6h | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/nordrhein-westfalen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
