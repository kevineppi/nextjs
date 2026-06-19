import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Nürnberg: SPS, Spielwarenmesse, embedded world',
  description: 'Aussteller der NürnbergMesse: SPS, Spielwarenmesse, embedded world, BrauBeviale. Direktversand 24h aus OÖ. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/nuernberg',
  },
  openGraph: {
    title: 'Messemodelle Nürnberg: SPS, Spielwarenmesse, embedded world',
    description: 'Aussteller der NürnbergMesse: SPS, Spielwarenmesse, embedded world, BrauBeviale. Direktversand 24h aus OÖ. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/nuernberg',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
