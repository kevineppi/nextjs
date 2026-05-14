import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Graz ★5,0 – Express A9 · Angebot in 6h',
  description: 'Messemodelle für Graz ✓ Häuslbauermesse ✓ Herbstmesse ✓ Express via A9 ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/graz',
  },
  openGraph: {
    title: 'Messemodelle Graz ★5,0 – Express A9 · Angebot in 6h',
    description: 'Messemodelle für Graz ✓ Häuslbauermesse ✓ Herbstmesse ✓ Express via A9 ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/graz',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
