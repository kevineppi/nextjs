import type { Metadata } from 'next'
import Kostenrechner from '@/src-pages/Kostenrechner'

export const metadata: Metadata = {
  title: '3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0',
  description: 'STL hochladen → Richtpreis sofort. Kein Account, kein Anruf nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen)',
  alternates: {
    canonical: 'https://ek-druck.at/kostenrechner',
  },
  openGraph: {
    title: '3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0',
    description: 'STL hochladen → Richtpreis sofort. Kein Account, kein Anruf nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen)',
    url: 'https://ek-druck.at/kostenrechner',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0',
    description: 'STL hochladen → Richtpreis sofort. Kein Account, kein Anruf nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen)',
  },
}

export default function Page() {
  return <Kostenrechner />
}
