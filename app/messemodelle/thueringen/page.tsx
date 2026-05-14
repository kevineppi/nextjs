import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Thüringen – Erfurt & Jena | ekdruck',
  description: 'Messemodelle Thüringen: Messe Erfurt, Optik-Messen Jena. Zentrale Lage ✓ Ab €20 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/thueringen',
  },
  openGraph: {
    title: 'Messemodelle Thüringen – Erfurt & Jena | ekdruck',
    description: 'Messemodelle Thüringen: Messe Erfurt, Optik-Messen Jena. Zentrale Lage ✓ Ab €20 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/thueringen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
