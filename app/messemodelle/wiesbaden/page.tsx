import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Wiesbaden – Rhein-Main Events | ekdruck',
  description: 'Messemodelle Wiesbaden: CongressCenter Events, Rhein-Main Fachmessen. Frankfurt-Nähe ✓ Express – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/wiesbaden',
  },
  openGraph: {
    title: 'Messemodelle Wiesbaden – Rhein-Main Events | ekdruck',
    description: 'Messemodelle Wiesbaden: CongressCenter Events, Rhein-Main Fachmessen. Frankfurt-Nähe ✓ Express – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/wiesbaden',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
