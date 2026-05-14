import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Linz ★5,0 – Same-Day · 20 Min',
  description: 'Messemodelle für Linz ✓ Design Center ✓ Ars Electronica ✓ Same-Day ✓ 20 Min Abholung. ★ 5,0 (31 Bewertungen) · Angebot in 6h | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/linz',
  },
  openGraph: {
    title: 'Messemodelle Linz ★5,0 – Same-Day · 20 Min',
    description: 'Messemodelle für Linz ✓ Design Center ✓ Ars Electronica ✓ Same-Day ✓ 20 Min Abholung. ★ 5,0 (31 Bewertungen) · Angebot in 6h | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/linz',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
