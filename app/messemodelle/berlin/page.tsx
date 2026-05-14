import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Berlin – IFA, ITB & InnoTrans | ekdruck',
  description: 'Messemodelle für alle Berliner Leitmessen: IFA, ITB, InnoTrans, Grüne Woche. Express aus Österreich ✓ Jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/berlin',
  },
  openGraph: {
    title: 'Messemodelle Berlin – IFA, ITB & InnoTrans | ekdruck',
    description: 'Messemodelle für alle Berliner Leitmessen: IFA, ITB, InnoTrans, Grüne Woche. Express aus Österreich ✓ Jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/berlin',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
