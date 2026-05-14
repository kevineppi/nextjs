import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Saarland – D-F-L Dreiländereck | ekdruck',
  description: 'Messemodelle fürs Saarland: Contact Saar, Saar-Lor-Lux Messen. Grenzübergreifend ✓ Angebot in 6h!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/saarland',
  },
  openGraph: {
    title: 'Messemodelle Saarland – D-F-L Dreiländereck | ekdruck',
    description: 'Messemodelle fürs Saarland: Contact Saar, Saar-Lor-Lux Messen. Grenzübergreifend ✓ Angebot in 6h!',
    url: 'https://www.ek-druck.at/messemodelle/saarland',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
