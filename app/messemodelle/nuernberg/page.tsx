import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Nürnberg – SPS & Spielwarenmesse | ekdruck',
  description: 'Messemodelle NürnbergMesse: SPS, Spielwarenmesse, embedded world. Express aus Österreich ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/nuernberg',
  },
  openGraph: {
    title: 'Messemodelle Nürnberg – SPS & Spielwarenmesse | ekdruck',
    description: 'Messemodelle NürnbergMesse: SPS, Spielwarenmesse, embedded world. Express aus Österreich ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/nuernberg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
