import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Niedersachsen – Hannover Messe | ekdruck',
  description: 'Messemodelle für die weltgrößte Industriemesse: Hannover Messe, LIGNA, AGRITECHNICA. Industrie 4.0 Kompetenz ✓',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/niedersachsen',
  },
  openGraph: {
    title: 'Messemodelle Niedersachsen – Hannover Messe | ekdruck',
    description: 'Messemodelle für die weltgrößte Industriemesse: Hannover Messe, LIGNA, AGRITECHNICA. Industrie 4.0 Kompetenz ✓',
    url: 'https://www.ek-druck.at/messemodelle/niedersachsen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
