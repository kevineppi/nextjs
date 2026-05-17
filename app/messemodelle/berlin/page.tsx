import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Berlin: für IFA, ITB, InnoTrans, Grüne Woche',
  description: 'Für Aussteller der Messe Berlin: IFA, ITB, InnoTrans, Grüne Woche, FRUIT LOGISTICA. Versand Berlin in 48h aus OÖ. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/berlin',
  },
  openGraph: {
    title: 'Messemodelle Berlin: für IFA, ITB, InnoTrans, Grüne Woche',
    description: 'Für Aussteller der Messe Berlin: IFA, ITB, InnoTrans, Grüne Woche, FRUIT LOGISTICA. Versand Berlin in 48h aus OÖ. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/berlin',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
