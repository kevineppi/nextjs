import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Kiel – Kieler Woche & Maritim | ekdruck',
  description: 'Messemodelle Kiel: Kieler Woche, NordBau, maritime Messen. Schiffsmodelle ✓ Robuste Verpackung – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/kiel',
  },
  openGraph: {
    title: 'Messemodelle Kiel – Kieler Woche & Maritim | ekdruck',
    description: 'Messemodelle Kiel: Kieler Woche, NordBau, maritime Messen. Schiffsmodelle ✓ Robuste Verpackung – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/kiel',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
