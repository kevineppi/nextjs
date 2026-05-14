import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle München – BAU & bauma ✓ | ekdruck',
  description: 'Messemodelle für alle Münchner Leitmessen: BAU, bauma, IFAT, electronica. Nur 3h Fahrzeit ✓ Persönliche Lieferung möglich!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/muenchen',
  },
  openGraph: {
    title: 'Messemodelle München – BAU & bauma ✓ | ekdruck',
    description: 'Messemodelle für alle Münchner Leitmessen: BAU, bauma, IFAT, electronica. Nur 3h Fahrzeit ✓ Persönliche Lieferung möglich!',
    url: 'https://www.ek-druck.at/messemodelle/muenchen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
