import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle St. Gallen: OLMA, Tier&Technik, Offa · Zoll inkl.',
  description: 'St. Galler Aussteller: OLMA, Tier&Technik, Offa, Aut.AG. Kürzester Weg in die Schweiz aus Vorarlberg-Nähe. Zoll inklusive.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/st-gallen' },
  openGraph: {
    title: 'Messemodelle St. Gallen: OLMA, Tier&Technik, Offa · Zoll inkl.',
    description: 'St. Galler Aussteller: OLMA, Tier&Technik, Offa, Aut.AG. Kürzester Weg in die Schweiz aus Vorarlberg-Nähe. Zoll inklusive.',
    url: 'https://www.ek-druck.at/messemodelle/st-gallen',
    siteName: 'ekdruck · 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
