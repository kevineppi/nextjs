import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Salzburg: A1-Direktversand zum Messezentrum',
  description: 'Für Aussteller im Messezentrum Salzburg: Häuserlbauer-Messe, AutoSalon, Bauen+Wohnen. A1-Versand in 24h, ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/salzburg',
  },
  openGraph: {
    title: 'Messemodelle Salzburg: A1-Direktversand zum Messezentrum',
    description: 'Für Aussteller im Messezentrum Salzburg: Häuserlbauer-Messe, AutoSalon, Bauen+Wohnen. A1-Versand in 24h, ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/salzburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
