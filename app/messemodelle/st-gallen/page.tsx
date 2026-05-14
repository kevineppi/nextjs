import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle St. Gallen | OLMA · Tier&Technik · Express | ekdruck',
  description: 'Messemodelle für St. Gallen: Exponate & Schaumodelle für OLMA, Tier&Technik, Offa. Express ab €30 · kürzester Weg in die Schweiz. ★5,0.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/st-gallen' },
  openGraph: {
    title: 'Messemodelle St. Gallen | OLMA · Tier&Technik | ekdruck',
    description: 'Messemodelle für St. Gallen. OLMA, Tier&Technik, Offa. Express · ab €30 · persönliche Übergabe möglich. ★5,0.',
    url: 'https://www.ek-druck.at/messemodelle/st-gallen',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
