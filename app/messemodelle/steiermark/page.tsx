import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Steiermark: Häuslbauer, Herbstmesse, BeSt³ Graz',
  description: 'Steirische Aussteller: Häuslbauermesse, Herbstmesse Graz, BeSt³. A9-Direktversand zur Messe Graz. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/steiermark',
  },
  openGraph: {
    title: 'Messemodelle Steiermark: Häuslbauer, Herbstmesse, BeSt³ Graz',
    description: 'Steirische Aussteller: Häuslbauermesse, Herbstmesse Graz, BeSt³. A9-Direktversand zur Messe Graz. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/steiermark',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
