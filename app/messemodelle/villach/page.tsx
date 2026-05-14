import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Villach – Gewerbe & Events | ekdruck',
  description: 'Villacher Aussteller: Standmodelle für Gewerbeausstellungen, Tourismusevents & regionale Präsentationen. Versand via A10/A2. Jetzt anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/villach',
  },
  openGraph: {
    title: 'Messemodelle Villach – Gewerbe & Events | ekdruck',
    description: 'Villacher Aussteller: Standmodelle für Gewerbeausstellungen, Tourismusevents & regionale Präsentationen. Versand via A10/A2. Jetzt anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/villach',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
