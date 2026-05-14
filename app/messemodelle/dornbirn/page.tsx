import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Dornbirn – Gustav & SCHAU! | ekdruck',
  description: 'Dornbirner Aussteller: Kreative Standmodelle für Gustav, SCHAU! & Herbstmesse. Design-Kompetenz für das Ländle. Auch CH/DE-Lieferung.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/dornbirn',
  },
  openGraph: {
    title: 'Messemodelle Dornbirn – Gustav & SCHAU! | ekdruck',
    description: 'Dornbirner Aussteller: Kreative Standmodelle für Gustav, SCHAU! & Herbstmesse. Design-Kompetenz für das Ländle. Auch CH/DE-Lieferung.',
    url: 'https://www.ek-druck.at/messemodelle/dornbirn',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
