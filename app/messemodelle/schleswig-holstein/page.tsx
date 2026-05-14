import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle SH – NordBau & Kieler Woche | ekdruck',
  description: 'Messemodelle Schleswig-Holstein: NordBau, Kieler Woche. Maritime Modelle ✓ Robuste Verpackung – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/schleswig-holstein',
  },
  openGraph: {
    title: 'Messemodelle SH – NordBau & Kieler Woche | ekdruck',
    description: 'Messemodelle Schleswig-Holstein: NordBau, Kieler Woche. Maritime Modelle ✓ Robuste Verpackung – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/schleswig-holstein',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
