import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle NÖ – Wieselburg & Regionalmessen | ekdruck',
  description: 'NÖ-Aussteller: Modelle für Wieselburger Messe, AB HOF & Bau+Energie. Schnelle A1-Lieferung ab Gunskirchen. Jetzt Modell anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/niederoesterreich',
  },
  openGraph: {
    title: 'Messemodelle NÖ – Wieselburg & Regionalmessen | ekdruck',
    description: 'NÖ-Aussteller: Modelle für Wieselburger Messe, AB HOF & Bau+Energie. Schnelle A1-Lieferung ab Gunskirchen. Jetzt Modell anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/niederoesterreich',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
