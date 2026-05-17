import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Hannover Messe, LIGNA, EMO, AGRITECHNICA',
  description: 'Für die weltgrößte Industriemesse: Hannover Messe, LIGNA, EMO, AGRITECHNICA. Industrie-4.0-Modelle mit beweglichen Teilen möglich.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/hannover',
  },
  openGraph: {
    title: 'Messemodelle Hannover Messe, LIGNA, EMO, AGRITECHNICA',
    description: 'Für die weltgrößte Industriemesse: Hannover Messe, LIGNA, EMO, AGRITECHNICA. Industrie-4.0-Modelle mit beweglichen Teilen möglich.',
    url: 'https://www.ek-druck.at/messemodelle/hannover',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
