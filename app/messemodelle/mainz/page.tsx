import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Mainz – Frankfurt-Nähe ✓ | ekdruck',
  description: 'Messemodelle Mainz: Rheingoldhalle, Fachmessen. Frankfurt-Nähe = doppelter Standort ✓ Express – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/mainz',
  },
  openGraph: {
    title: 'Messemodelle Mainz – Frankfurt-Nähe ✓ | ekdruck',
    description: 'Messemodelle Mainz: Rheingoldhalle, Fachmessen. Frankfurt-Nähe = doppelter Standort ✓ Express – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/mainz',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
