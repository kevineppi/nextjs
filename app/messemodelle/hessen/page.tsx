import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Hessen: Automechanika, Ambiente, Buchmesse',
  description: 'Hessische Aussteller: Automechanika Frankfurt, Ambiente, Buchmesse, Achema. Versand 48h aus Österreich. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/hessen',
  },
  openGraph: {
    title: 'Messemodelle Hessen: Automechanika, Ambiente, Buchmesse',
    description: 'Hessische Aussteller: Automechanika Frankfurt, Ambiente, Buchmesse, Achema. Versand 48h aus Österreich. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/hessen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
