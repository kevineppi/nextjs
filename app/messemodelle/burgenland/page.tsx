import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Burgenland – Weinmessen & Oberwart | ekdruck',
  description: 'Burgenländische Aussteller: Standmodelle für Inform Oberwart, Weinmessen & Tourismusevents. Lieferung via Wien/A4. Ab €20 anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/burgenland',
  },
  openGraph: {
    title: 'Messemodelle Burgenland – Weinmessen & Oberwart | ekdruck',
    description: 'Burgenländische Aussteller: Standmodelle für Inform Oberwart, Weinmessen & Tourismusevents. Lieferung via Wien/A4. Ab €20 anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/burgenland',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
