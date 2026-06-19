import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Luzern: LUGA, Bauen+Wohnen, Zentralschweizer Messe',
  description: 'Luzerner Aussteller: LUGA, Bauen+Wohnen, Comptoir Suisse, Berufsmesse Luzern. Inkl. Schweizer Zoll, CHF-Verrechnung. Ab €30.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/luzern' },
  openGraph: {
    title: 'Messemodelle Luzern: LUGA, Bauen+Wohnen, Zentralschweizer Messe',
    description: 'Luzerner Aussteller: LUGA, Bauen+Wohnen, Comptoir Suisse, Berufsmesse Luzern. Inkl. Schweizer Zoll, CHF-Verrechnung. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/luzern',
    siteName: 'ekdruck · 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
