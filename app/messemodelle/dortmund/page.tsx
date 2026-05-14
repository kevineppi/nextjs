import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Dortmund – A+A & Intermodellbau | ekdruck',
  description: 'Messemodelle Westfalenhallen: A+A, Intermodellbau, CREATIVA. Arbeitsschutz-Kompetenz ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/dortmund',
  },
  openGraph: {
    title: 'Messemodelle Dortmund – A+A & Intermodellbau | ekdruck',
    description: 'Messemodelle Westfalenhallen: A+A, Intermodellbau, CREATIVA. Arbeitsschutz-Kompetenz ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/dortmund',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
