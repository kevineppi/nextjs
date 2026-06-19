import type { Metadata } from 'next'
import Ratgeber from '@/src-pages/Ratgeber'
import { breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck-Ratgeber: 7 kostenlose Guides zu Material, Preis, CAD',
  description: 'Was kostet 3D-Druck? Welches Material? FDM oder SLA? 7 ehrliche Guides aus 8 Jahren Werkstatt-Praxis · ohne Verkaufsmasche.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber',
  },
  openGraph: {
    title: '3D-Druck-Ratgeber: 7 kostenlose Guides zu Material, Preis, CAD',
    description: 'Was kostet 3D-Druck? Welches Material? FDM oder SLA? 7 ehrliche Guides aus 8 Jahren Werkstatt-Praxis · ohne Verkaufsmasche.',
    url: 'https://www.ek-druck.at/ratgeber',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck-Ratgeber: 7 kostenlose Guides zu Material, Preis, CAD',
    description: 'Was kostet 3D-Druck? Welches Material? FDM oder SLA? 7 ehrliche Guides aus 8 Jahren Werkstatt-Praxis · ohne Verkaufsmasche.',
  },
}

const COLLECTION_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '3D-Druck Ratgeber & Guides',
  description:
    'Praxiserprobte Guides zu 3D-Druck-Material, Verfahren, Kostenkalkulation, Maschinenbau-Branchen-Anwendungen und Architekturmodellen. Aus 8 Jahren Werkstatt-Erfahrung.',
  url: 'https://www.ek-druck.at/ratgeber',
  inLanguage: 'de-AT',
}

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Ratgeber', url: '/ratgeber' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Ratgeber />
    </>
  )
}
