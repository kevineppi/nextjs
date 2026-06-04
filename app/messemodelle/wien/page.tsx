import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Wien — Reed Messe · Versand 24h',
  description: 'Für Aussteller der Reed Messe Wien, Austria Center, Marx Halle: Messemodelle mit ÖPOST-Versand am Folgetag. Bruchsicher, ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/wien',
  },
  openGraph: {
    title: 'Messemodelle Wien — Reed Messe · Versand 24h',
    description: 'Für Aussteller der Reed Messe Wien, Austria Center, Marx Halle: Messemodelle mit ÖPOST-Versand am Folgetag. Bruchsicher, ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/wien',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
