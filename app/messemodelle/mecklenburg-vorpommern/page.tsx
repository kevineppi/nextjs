import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle MV – Hanse Sail & MeLa | ekdruck',
  description: 'Messemodelle MV: Hanse Sail Rostock, RoBau, MeLa. Maritime Modelle ✓ Robuste Verpackung – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/mecklenburg-vorpommern',
  },
  openGraph: {
    title: 'Messemodelle MV – Hanse Sail & MeLa | ekdruck',
    description: 'Messemodelle MV: Hanse Sail Rostock, RoBau, MeLa. Maritime Modelle ✓ Robuste Verpackung – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/mecklenburg-vorpommern',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
