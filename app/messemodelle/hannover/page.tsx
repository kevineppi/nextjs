import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Hannover – weltgrößte Industriemesse | ekdruck',
  description: 'Messemodelle für Hannover Messe, LIGNA & EMO. Industrie 4.0 Modelle ✓ Express über A7 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/hannover',
  },
  openGraph: {
    title: 'Messemodelle Hannover – weltgrößte Industriemesse | ekdruck',
    description: 'Messemodelle für Hannover Messe, LIGNA & EMO. Industrie 4.0 Modelle ✓ Express über A7 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/hannover',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
