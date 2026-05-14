import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Essen – E-world & SPIEL ✓ | ekdruck',
  description: 'Messemodelle Messe Essen: E-world, SPIEL, Security. Energie- & Spielebranche ✓ Ab €20 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/essen',
  },
  openGraph: {
    title: 'Messemodelle Essen – E-world & SPIEL ✓ | ekdruck',
    description: 'Messemodelle Messe Essen: E-world, SPIEL, Security. Energie- & Spielebranche ✓ Ab €20 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/essen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
