import type { Metadata } from 'next'
import FlatrateGuide from '@/src-pages/ratgeber/FlatrateGuide'

export const metadata: Metadata = {
  title: 'Architekturmodell Flatrate vs. Einzelauftrag [2026]',
  description: 'Ehrlicher Kostenvergleich: Ab wann rechnet sich die Architekturmodell-Flatrate für Architekturbüros?',
  alternates: {
    canonical: 'https://ek-druck.at/ratgeber/architekturmodell-flatrate',
  },
  openGraph: {
    title: 'Architekturmodell Flatrate vs. Einzelauftrag [2026]',
    description: 'Ehrlicher Kostenvergleich: Ab wann rechnet sich die Architekturmodell-Flatrate für Architekturbüros?',
    url: 'https://ek-druck.at/ratgeber/architekturmodell-flatrate',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell Flatrate vs. Einzelauftrag [2026]',
    description: 'Ehrlicher Kostenvergleich: Ab wann rechnet sich die Architekturmodell-Flatrate für Architekturbüros?',
  },
}

export default function Page() {
  return <FlatrateGuide />
}
