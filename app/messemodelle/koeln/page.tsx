import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  robots: { index: false, follow: true }, // DACH-Noindex (Thin/Doorway, AT-Fokus)
  title: 'Messemodelle Köln: Anuga, gamescom, FIBO, imm cologne, IDS',
  description: 'Koelnmesse-Aussteller: Anuga, gamescom, FIBO, imm cologne, IDS. Versand 48h aus OÖ, mit Aufbau-Service auf Wunsch. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/koeln',
  },
  openGraph: {
    title: 'Messemodelle Köln: Anuga, gamescom, FIBO, imm cologne, IDS',
    description: 'Koelnmesse-Aussteller: Anuga, gamescom, FIBO, imm cologne, IDS. Versand 48h aus OÖ, mit Aufbau-Service auf Wunsch. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/koeln',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
