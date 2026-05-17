import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Baden-Württemberg: AMB, Eurobike, R+T, INTERVITIS',
  description: 'BW-Aussteller: Modelle für AMB Stuttgart, Eurobike, R+T, INTERVITIS. Versand 24-48h aus OÖ via Vorarlberg. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/baden-wuerttemberg',
  },
  openGraph: {
    title: 'Messemodelle Baden-Württemberg: AMB, Eurobike, R+T, INTERVITIS',
    description: 'BW-Aussteller: Modelle für AMB Stuttgart, Eurobike, R+T, INTERVITIS. Versand 24-48h aus OÖ via Vorarlberg. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/baden-wuerttemberg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
