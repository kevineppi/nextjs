import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Luzern | LUGA · Bauen+Wohnen · Express | ekdruck',
  description: 'Messemodelle für Luzern: Exponate für LUGA, Bauen+Wohnen, Zentralschweizer Messen. Express 24h · ab €30 · inkl. Zollabwicklung. ★5,0.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/luzern' },
  openGraph: {
    title: 'Messemodelle Luzern | LUGA · Bauen+Wohnen · Express | ekdruck',
    description: 'Messemodelle für Luzern. LUGA, Bauen+Wohnen, Zentralschweizer Messen. Express · ab €30. ★5,0.',
    url: 'https://www.ek-druck.at/messemodelle/luzern',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
