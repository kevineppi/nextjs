import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Steiermark – Häuslbauer & Graz | ekdruck',
  description: 'Steirische Aussteller: Standmodelle für Häuslbauermesse, Herbstmesse Graz & BeSt³. Express über A9 direkt zur Messe Graz. Angebot in 6h.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/steiermark',
  },
  openGraph: {
    title: 'Messemodelle Steiermark – Häuslbauer & Graz | ekdruck',
    description: 'Steirische Aussteller: Standmodelle für Häuslbauermesse, Herbstmesse Graz & BeSt³. Express über A9 direkt zur Messe Graz. Angebot in 6h.',
    url: 'https://www.ek-druck.at/messemodelle/steiermark',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
