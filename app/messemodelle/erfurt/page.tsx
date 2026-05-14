import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Erfurt – Mitte Deutschlands ✓ | ekdruck',
  description: 'Messemodelle Messe Erfurt: SampleX, Bautag, Garten-Events. Zentrale Lage ✓ Ab €20 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/erfurt',
  },
  openGraph: {
    title: 'Messemodelle Erfurt – Mitte Deutschlands ✓ | ekdruck',
    description: 'Messemodelle Messe Erfurt: SampleX, Bautag, Garten-Events. Zentrale Lage ✓ Ab €20 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/erfurt',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
