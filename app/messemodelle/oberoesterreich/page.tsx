import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle OÖ – Welser Messe & Abholung | ekdruck',
  description: 'OÖ-Aussteller: Messemodelle für AGRARIA, Power-Days & Welser Messe. Abholung in Gunskirchen, Same-Day möglich. Jetzt Modell anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/oberoesterreich',
  },
  openGraph: {
    title: 'Messemodelle OÖ – Welser Messe & Abholung | ekdruck',
    description: 'OÖ-Aussteller: Messemodelle für AGRARIA, Power-Days & Welser Messe. Abholung in Gunskirchen, Same-Day möglich. Jetzt Modell anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/oberoesterreich',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
