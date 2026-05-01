import type { Metadata } from 'next'
import ArchitekturmodelleAbo from '@/src-pages/ArchitekturmodelleAbo'

export const metadata: Metadata = {
  title: 'Architekturmodell-Flatrate ★5,0 – ab €199/Mon. · 1. Modell gratis',
  description: 'Architekturmodell-Flatrate für Architekturbüros ✓ Fixpreis ab €199/Mon. ✓ 48h-Lieferung ✓ keine Mindestlaufzeit ✓ erstes Modell kostenlos.',
  alternates: {
    canonical: 'https://ek-druck.at/architekturmodelle-abo',
  },
  openGraph: {
    title: 'Architekturmodell-Flatrate ★5,0 – ab €199/Mon. · 1. Modell gratis',
    description: 'Architekturmodell-Flatrate für Architekturbüros ✓ Fixpreis ab €199/Mon. ✓ 48h-Lieferung ✓ keine Mindestlaufzeit ✓ erstes Modell kostenlos.',
    url: 'https://ek-druck.at/architekturmodelle-abo',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell-Flatrate ★5,0 – ab €199/Mon. · 1. Modell gratis',
    description: 'Architekturmodell-Flatrate für Architekturbüros ✓ Fixpreis ab €199/Mon. ✓ 48h-Lieferung ✓ keine Mindestlaufzeit ✓ erstes Modell kostenlos.',
  },
}

export default function Page() {
  return <ArchitekturmodelleAbo />
}
