import type { Metadata } from 'next'
import Kontakt from '@/src-pages/Kontakt'

export const metadata: Metadata = {
  title: '3D-Druck-Anfrage stellen – verbindliches Angebot in 6h',
  description: 'Direkter Kontakt zum Inhaber: kevin@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. Auch WhatsApp.',
  alternates: {
    canonical: 'https://www.ek-druck.at/kontakt',
  },
  openGraph: {
    title: '3D-Druck-Anfrage stellen – verbindliches Angebot in 6h',
    description: 'Direkter Kontakt zum Inhaber: kevin@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. Auch WhatsApp.',
    url: 'https://www.ek-druck.at/kontakt',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck-Anfrage stellen – verbindliches Angebot in 6h',
    description: 'Direkter Kontakt zum Inhaber: kevin@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. Auch WhatsApp.',
  },
}

export default function Page() {
  return <Kontakt />
}
