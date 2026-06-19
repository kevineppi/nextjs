import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Linz: Same-Day für Design Center & Ars Electronica',
  description: 'Aussteller in Linz: Modell heute bestellen, in 20 Min abholen in Gunskirchen. Für Design Center, TechnologyCenter, Ars Electronica.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/linz',
  },
  openGraph: {
    title: 'Messemodelle Linz: Same-Day für Design Center & Ars Electronica',
    description: 'Aussteller in Linz: Modell heute bestellen, in 20 Min abholen in Gunskirchen. Für Design Center, TechnologyCenter, Ars Electronica.',
    url: 'https://www.ek-druck.at/messemodelle/linz',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
