import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle RLP – Frankfurt-Nähe ✓ | ekdruck',
  description: 'Messemodelle Rheinland-Pfalz: Fachmessen Mainz, Frankfurt-Nähe. Express über A3 ✓ Angebot in 6h – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/rheinland-pfalz',
  },
  openGraph: {
    title: 'Messemodelle RLP – Frankfurt-Nähe ✓ | ekdruck',
    description: 'Messemodelle Rheinland-Pfalz: Fachmessen Mainz, Frankfurt-Nähe. Express über A3 ✓ Angebot in 6h – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/rheinland-pfalz',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
