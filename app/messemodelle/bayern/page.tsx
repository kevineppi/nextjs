import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Bayern: BAU, bauma, SPS – nur 3h aus OÖ',
  description: 'Bayerische Aussteller: BAU München, bauma, SPS Nürnberg, IFAT. Nur 3h Fahrzeit – persönliche Lieferung möglich. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/bayern',
  },
  openGraph: {
    title: 'Messemodelle Bayern: BAU, bauma, SPS – nur 3h aus OÖ',
    description: 'Bayerische Aussteller: BAU München, bauma, SPS Nürnberg, IFAT. Nur 3h Fahrzeit – persönliche Lieferung möglich. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/bayern',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
