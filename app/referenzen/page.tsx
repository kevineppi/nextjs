import type { Metadata } from 'next'
import Referenzen from '@/src-pages/Referenzen'

export const metadata: Metadata = {
  title: '3D-Druck Referenzen & Projekte | ★ 5.0 Google | ekdruck',
  description: 'Echte 3D-Druck Projekte mit Fotos, Maßen & Druckzeiten ✓ Architekturmodelle, Messeexponate & Einzelstücke',
  alternates: {
    canonical: 'https://www.ek-druck.at/referenzen',
  },
  openGraph: {
    title: '3D-Druck Referenzen & Projekte | ★ 5.0 Google | ekdruck',
    description: 'Echte 3D-Druck Projekte mit Fotos, Maßen & Druckzeiten ✓ Architekturmodelle, Messeexponate & Einzelstücke',
    url: 'https://www.ek-druck.at/referenzen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Referenzen & Projekte | ★ 5.0 Google | ekdruck',
    description: 'Echte 3D-Druck Projekte mit Fotos, Maßen & Druckzeiten ✓ Architekturmodelle, Messeexponate & Einzelstücke',
  },
}

export default function Page() {
  return <Referenzen />
}
