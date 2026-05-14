import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Hessen ★5,0 – Messe Frankfurt · 6h',
  description: 'Messemodelle Hessen ✓ Automechanika ✓ Ambiente ✓ Buchmesse ✓ Express via A3 ✓ Angebot 6h. ★ 5,0 (31 Bew.) | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/hessen',
  },
  openGraph: {
    title: 'Messemodelle Hessen ★5,0 – Messe Frankfurt · 6h',
    description: 'Messemodelle Hessen ✓ Automechanika ✓ Ambiente ✓ Buchmesse ✓ Express via A3 ✓ Angebot 6h. ★ 5,0 (31 Bew.) | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/hessen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
