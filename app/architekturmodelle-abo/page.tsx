import type { Metadata } from 'next'
import ArchitekturmodelleAbo from '@/src-pages/ArchitekturmodelleAbo'
import { ABO_FAQS } from '@/data/aboFaqs'
import { serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Architekturmodell-Flatrate · ab €490/Mon. · erstes Modell gratis',
  description:
    'Festpreis-Flatrate für Architekturbüros: 2 bis 8 Modelle pro Monat ab €490, Lieferung in 48h österreichweit, monatlich kündbar, erstes Modell gratis. Modelle bis 35×35×35 cm, alle CAD-Formate.',
  alternates: {
    canonical: 'https://www.ek-druck.at/architekturmodelle-abo',
  },
  openGraph: {
    title: 'Architekturmodell-Flatrate · ab €490/Mon. · erstes Modell gratis',
    description:
      'Festpreis-Flatrate für Architekturbüros: 2 bis 8 Modelle pro Monat ab €490, Lieferung in 48h österreichweit, monatlich kündbar, erstes Modell gratis.',
    url: 'https://www.ek-druck.at/architekturmodelle-abo',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell-Flatrate · ab €490/Mon. · erstes Modell gratis',
    description:
      'Festpreis-Flatrate für Architekturbüros: 2 bis 8 Modelle pro Monat ab €490, Lieferung in 48h österreichweit, monatlich kündbar, erstes Modell gratis.',
  },
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Architekturmodell-Flatrate für Büros',
  description:
    'Festpreis-Flatrate für Architekturbüros mit regelmäßigem Modellbedarf. Ab €490/Monat, erstes Modell gratis, kein Lock-In, monatlich kündbar.',
  url: 'https://www.ek-druck.at/architekturmodelle-abo',
  lowPrice: '490',
  highPrice: '2500',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Architekturmodell-Flatrate', url: '/architekturmodelle-abo' },
])

// FAQPage-Schema aus den sichtbaren FAQs (einzige Quelle: ABO_FAQS in der Seitenkomponente)
const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ABO_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <ArchitekturmodelleAbo />
    </>
  )
}
