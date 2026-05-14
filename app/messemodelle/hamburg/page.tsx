import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Hamburg – SMM & WindEnergy | ekdruck',
  description: 'Messemodelle Hamburg: SMM, WindEnergy, Internorga. Maritime & Offshore Modelle ✓ Express – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/hamburg',
  },
  openGraph: {
    title: 'Messemodelle Hamburg – SMM & WindEnergy | ekdruck',
    description: 'Messemodelle Hamburg: SMM, WindEnergy, Internorga. Maritime & Offshore Modelle ✓ Express – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/hamburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
