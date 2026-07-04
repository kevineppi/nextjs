import type { Metadata } from 'next'
import Einzelanfertigungen from '@/src-pages/Einzelanfertigungen'
import { serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Ein einzelnes Objekt drucken lassen · ab €20 in 24h',
  description: 'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder von der Skizze zum fertigen Unikat in 24h. Auch Sonderformen und Einzelstücke.',
  alternates: {
    canonical: 'https://www.ek-druck.at/einzelanfertigungen',
  },
  // TODO Kevin: bei endgültigem Ausstieg 301 → /firmenkunden
  // 2026-07-04 SEO Task 5: aus dem Index genommen (Fokus auf Architektur- + Messemodelle).
  // Seite bleibt direkt erreichbar für laufende Kunden; follow:true haelt interne Links lebendig.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Ein einzelnes Objekt drucken lassen · ab €20 in 24h',
    description: 'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder von der Skizze zum fertigen Unikat in 24h. Auch Sonderformen und Einzelstücke.',
    url: 'https://www.ek-druck.at/einzelanfertigungen',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ein einzelnes Objekt drucken lassen · ab €20 in 24h',
    description: 'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder von der Skizze zum fertigen Unikat in 24h. Auch Sonderformen und Einzelstücke.',
  },
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Einzelanfertigung 3D-Druck',
  description:
    'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder von der Skizze zum fertigen Unikat in 24h. Sonderformen und individuelle Objekte.',
  url: 'https://www.ek-druck.at/einzelanfertigungen',
  lowPrice: '20',
  highPrice: '500',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Einzelanfertigungen', url: '/einzelanfertigungen' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Einzelanfertigungen />
    </>
  )
}
