import type { Metadata } from 'next'
import ArchitekturmodelleAbo from '@/src-pages/ArchitekturmodelleAbo'

export const metadata: Metadata = {
  title: 'Architekturmodell-Flatrate für Büros – ab €199/Monat',
  description: 'Für Architekturbüros mit regelmäßigem Modellbedarf: Festpreis-Flatrate ab €199/Monat. Erstes Modell gratis, kein Lock-In, monatlich kündbar.',
  alternates: {
    canonical: 'https://www.ek-druck.at/architekturmodelle-abo',
  },
  openGraph: {
    title: 'Architekturmodell-Flatrate für Büros – ab €199/Monat',
    description: 'Für Architekturbüros mit regelmäßigem Modellbedarf: Festpreis-Flatrate ab €199/Monat. Erstes Modell gratis, kein Lock-In, monatlich kündbar.',
    url: 'https://www.ek-druck.at/architekturmodelle-abo',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell-Flatrate für Büros – ab €199/Monat',
    description: 'Für Architekturbüros mit regelmäßigem Modellbedarf: Festpreis-Flatrate ab €199/Monat. Erstes Modell gratis, kein Lock-In, monatlich kündbar.',
  },
}

export default function Page() {
  return <ArchitekturmodelleAbo />
}
