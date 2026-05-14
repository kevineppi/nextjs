import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Saarbrücken – Dreiländereck ✓ | ekdruck',
  description: 'Messemodelle Saarbrücken: Contact Saar, Saar-Lor-Lux Events. Grenzübergreifend ✓ Jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/saarbruecken',
  },
  openGraph: {
    title: 'Messemodelle Saarbrücken – Dreiländereck ✓ | ekdruck',
    description: 'Messemodelle Saarbrücken: Contact Saar, Saar-Lor-Lux Events. Grenzübergreifend ✓ Jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/saarbruecken',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
