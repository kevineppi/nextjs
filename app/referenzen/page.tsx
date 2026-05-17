import type { Metadata } from 'next'
import Referenzen from '@/src-pages/Referenzen'

export const metadata: Metadata = {
  title: '3D-Druck Referenzen mit Maßen, Druckzeiten und Materialien',
  description: 'Echte Kundenprojekte mit Fotos: Maschinenbau, Wettbewerbsabgaben, Messeexponate. Inklusive Material, Druckdauer und Toleranzen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/referenzen',
  },
  openGraph: {
    title: '3D-Druck Referenzen mit Maßen, Druckzeiten und Materialien',
    description: 'Echte Kundenprojekte mit Fotos: Maschinenbau, Wettbewerbsabgaben, Messeexponate. Inklusive Material, Druckdauer und Toleranzen.',
    url: 'https://www.ek-druck.at/referenzen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Referenzen mit Maßen, Druckzeiten und Materialien',
    description: 'Echte Kundenprojekte mit Fotos: Maschinenbau, Wettbewerbsabgaben, Messeexponate. Inklusive Material, Druckdauer und Toleranzen.',
  },
}

export default function Page() {
  return <Referenzen />
}
