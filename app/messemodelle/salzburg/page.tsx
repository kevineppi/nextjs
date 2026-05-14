import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Salzburg ★5,0 – A1-Express · Angebot 6h',
  description: 'Messemodelle für Salzburg ✓ Gastro & AutoSalon ✓ Express via A1 ✓ Angebot in 6h ✓ ab €20. ★ 5,0 (31 Bewertungen) | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/salzburg',
  },
  openGraph: {
    title: 'Messemodelle Salzburg ★5,0 – A1-Express · Angebot 6h',
    description: 'Messemodelle für Salzburg ✓ Gastro & AutoSalon ✓ Express via A1 ✓ Angebot in 6h ✓ ab €20. ★ 5,0 (31 Bewertungen) | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/salzburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
