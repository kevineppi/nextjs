import type { Metadata } from 'next'
import ArchitekturmodelleAbo from '@/src-pages/ArchitekturmodelleAbo'
import { serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Architekturmodell-Flatrate für Büros · ab €199/Monat',
  description: 'Für Architekturbüros mit regelmäßigem Modellbedarf: Festpreis-Flatrate ab €199/Monat. Erstes Modell gratis, kein Lock-In, monatlich kündbar.',
  alternates: {
    canonical: 'https://www.ek-druck.at/architekturmodelle-abo',
  },
  openGraph: {
    title: 'Architekturmodell-Flatrate für Büros · ab €199/Monat',
    description: 'Für Architekturbüros mit regelmäßigem Modellbedarf: Festpreis-Flatrate ab €199/Monat. Erstes Modell gratis, kein Lock-In, monatlich kündbar.',
    url: 'https://www.ek-druck.at/architekturmodelle-abo',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell-Flatrate für Büros · ab €199/Monat',
    description: 'Für Architekturbüros mit regelmäßigem Modellbedarf: Festpreis-Flatrate ab €199/Monat. Erstes Modell gratis, kein Lock-In, monatlich kündbar.',
  },
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Architekturmodell-Flatrate für Büros',
  description:
    'Festpreis-Flatrate für Architekturbüros mit regelmäßigem Modellbedarf. Ab €199/Monat, erstes Modell gratis, kein Lock-In, monatlich kündbar.',
  url: 'https://www.ek-druck.at/architekturmodelle-abo',
  lowPrice: '199',
  highPrice: '999',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Architekturmodell-Flatrate', url: '/architekturmodelle-abo' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <ArchitekturmodelleAbo />
    </>
  )
}
