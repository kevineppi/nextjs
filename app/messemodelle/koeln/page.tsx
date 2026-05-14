import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Köln – Anuga & gamescom ✓ | ekdruck',
  description: 'Messemodelle Koelnmesse: Anuga, gamescom, FIBO, imm cologne. Express aus Österreich ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/koeln',
  },
  openGraph: {
    title: 'Messemodelle Köln – Anuga & gamescom ✓ | ekdruck',
    description: 'Messemodelle Koelnmesse: Anuga, gamescom, FIBO, imm cologne. Express aus Österreich ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/koeln',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
