import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Zürich | 3D-Druck Express · ab €30 · inkl. Zollabwicklung | ekdruck',
  description: 'Messemodelle & Exponate für Messen in Zürich drucken lassen. Express 24h · ab €30 · bruchsicher · inkl. Zollabwicklung. FINANZ, Giardina, Berufsmesse. ★5,0.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/zuerich' },
  openGraph: {
    title: 'Messemodelle Zürich | 3D-Druck Express · ab €30 | ekdruck',
    description: 'Messemodelle & Exponate für Messen in Zürich. Express 24h · ab €30 · inkl. Zollabwicklung AT→CH. ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/messemodelle/zuerich',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
