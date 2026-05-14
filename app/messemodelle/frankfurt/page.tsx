import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Frankfurt – Weltmessestadt Nr. 1 | ekdruck',
  description: 'Messemodelle Messe Frankfurt: Automechanika, Ambiente, Buchmesse, Achema. Günstiger als lokal ✓ Jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/frankfurt',
  },
  openGraph: {
    title: 'Messemodelle Frankfurt – Weltmessestadt Nr. 1 | ekdruck',
    description: 'Messemodelle Messe Frankfurt: Automechanika, Ambiente, Buchmesse, Achema. Günstiger als lokal ✓ Jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/frankfurt',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
