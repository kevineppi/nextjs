import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Bern: für BEA, BERNEXPO, Suisse Public',
  description: 'Berner Aussteller: BEA (Frühjahrsmesse), Suisse Public, BERNEXPO. Schweizer Zollabwicklung inklusive, CHF möglich. Ab €30.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/bern' },
  openGraph: {
    title: 'Messemodelle Bern: für BEA, BERNEXPO, Suisse Public',
    description: 'Berner Aussteller: BEA (Frühjahrsmesse), Suisse Public, BERNEXPO. Schweizer Zollabwicklung inklusive, CHF möglich. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/bern',
    siteName: 'ekdruck · 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
