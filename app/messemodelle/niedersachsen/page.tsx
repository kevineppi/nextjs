import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Niedersachsen: Hannover, LIGNA, AGRITECHNICA',
  description: 'Niedersächsische Aussteller: Hannover Messe (weltgrößte Industriemesse), LIGNA, AGRITECHNICA. Industriespezifische Modelle. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/niedersachsen',
  },
  openGraph: {
    title: 'Messemodelle Niedersachsen: Hannover, LIGNA, AGRITECHNICA',
    description: 'Niedersächsische Aussteller: Hannover Messe (weltgrößte Industriemesse), LIGNA, AGRITECHNICA. Industriespezifische Modelle. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/niedersachsen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
