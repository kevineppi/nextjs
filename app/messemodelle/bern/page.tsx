import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Bern | BEA · BERNEXPO · Express 24h | ekdruck',
  description: 'Messemodelle für Bern: Exponate für BEA, Suisse Public, BERNEXPO. Express 24h · ab €30 · bruchsicher · inkl. Zollabwicklung. ★5,0.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/bern' },
  openGraph: {
    title: 'Messemodelle Bern | BEA · BERNEXPO · Express | ekdruck',
    description: 'Messemodelle für Bern: Exponate für BEA, Suisse Public, BERNEXPO. Express 24h · ab €30 · inkl. Zollabwicklung. ★5,0.',
    url: 'https://www.ek-druck.at/messemodelle/bern',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
