import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle München: für BAU, bauma, IFAT, electronica',
  description: 'Münchner Messe Aussteller: BAU, bauma, IFAT, electronica, ISPO. Nur 3h Fahrzeit aus OÖ – auch persönliche Lieferung möglich. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/muenchen',
  },
  openGraph: {
    title: 'Messemodelle München: für BAU, bauma, IFAT, electronica',
    description: 'Münchner Messe Aussteller: BAU, bauma, IFAT, electronica, ISPO. Nur 3h Fahrzeit aus OÖ – auch persönliche Lieferung möglich. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/muenchen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
