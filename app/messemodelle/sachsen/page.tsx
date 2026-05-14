import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Sachsen – Buchmesse & denkmal | ekdruck',
  description: 'Messemodelle Sachsen: Leipziger Buchmesse, denkmal, Intec. Traditionsstandort-Kompetenz ✓ Ab €20 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/sachsen',
  },
  openGraph: {
    title: 'Messemodelle Sachsen – Buchmesse & denkmal | ekdruck',
    description: 'Messemodelle Sachsen: Leipziger Buchmesse, denkmal, Intec. Traditionsstandort-Kompetenz ✓ Ab €20 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/sachsen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
