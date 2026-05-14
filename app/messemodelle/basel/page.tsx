import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Basel | Swissbau · PRODEX · Express 24h | ekdruck',
  description: 'Messemodelle für Basel: Exponate & Präsentationsmodelle für Swissbau, PRODEX, ILMAC. Express 24h · ab €30 · Zollabwicklung inklusive. ★5,0.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/basel' },
  openGraph: {
    title: 'Messemodelle Basel | Swissbau · PRODEX · Express | ekdruck',
    description: 'Messemodelle für Basel: Exponate für Swissbau, PRODEX, ILMAC. Express 24h · ab €30 · inkl. Zollabwicklung. ★5,0.',
    url: 'https://www.ek-druck.at/messemodelle/basel',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
