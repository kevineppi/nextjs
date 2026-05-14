import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle BW ★5,0 – AMB & Eurobike · Angebot 6h',
  description: 'Messemodelle Baden-Württemberg ✓ AMB Stuttgart ✓ Eurobike ✓ Express via Vorarlberg ✓ Angebot 6h. ★ 5,0 (31 Bew.) | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/baden-wuerttemberg',
  },
  openGraph: {
    title: 'Messemodelle BW ★5,0 – AMB & Eurobike · Angebot 6h',
    description: 'Messemodelle Baden-Württemberg ✓ AMB Stuttgart ✓ Eurobike ✓ Express via Vorarlberg ✓ Angebot 6h. ★ 5,0 (31 Bew.) | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/baden-wuerttemberg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
