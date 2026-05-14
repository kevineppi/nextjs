import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Friedrichshafen – 2h Bodensee ✓ | ekdruck',
  description: 'Messemodelle Friedrichshafen: Outdoor, Eurobike, AERO. Nur 2h über Vorarlberg ✓ Express-Lieferung möglich!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/friedrichshafen',
  },
  openGraph: {
    title: 'Messemodelle Friedrichshafen – 2h Bodensee ✓ | ekdruck',
    description: 'Messemodelle Friedrichshafen: Outdoor, Eurobike, AERO. Nur 2h über Vorarlberg ✓ Express-Lieferung möglich!',
    url: 'https://www.ek-druck.at/messemodelle/friedrichshafen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
