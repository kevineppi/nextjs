import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Sachsen-Anhalt – Magdeburg ✓ | ekdruck',
  description: 'Messemodelle Sachsen-Anhalt: Messe Magdeburg, Industriemessen Halle. Express über A9 ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/sachsen-anhalt',
  },
  openGraph: {
    title: 'Messemodelle Sachsen-Anhalt – Magdeburg ✓ | ekdruck',
    description: 'Messemodelle Sachsen-Anhalt: Messe Magdeburg, Industriemessen Halle. Express über A9 ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/sachsen-anhalt',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
