import type { Metadata } from 'next'
import Firmenkunden from '@/src-pages/Firmenkunden'
import { serviceSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'B2B-3D-Druck Österreich: Rahmenvertrag, UID, NDA, 30 Tage Ziel',
  description: 'Für Industriekunden: Rahmenverträge, Mengenrabatt ab 5 Stück, NDA möglich, Zahlungsziel 30 Tage. Kleinunternehmer = keine USt für Sie.',
  alternates: {
    canonical: 'https://www.ek-druck.at/firmenkunden',
  },
  openGraph: {
    title: 'B2B-3D-Druck Österreich: Rahmenvertrag, UID, NDA, 30 Tage Ziel',
    description: 'Für Industriekunden: Rahmenverträge, Mengenrabatt ab 5 Stück, NDA möglich, Zahlungsziel 30 Tage. Kleinunternehmer = keine USt für Sie.',
    url: 'https://www.ek-druck.at/firmenkunden',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B-3D-Druck Österreich: Rahmenvertrag, UID, NDA, 30 Tage Ziel',
    description: 'Für Industriekunden: Rahmenverträge, Mengenrabatt ab 5 Stück, NDA möglich, Zahlungsziel 30 Tage. Kleinunternehmer = keine USt für Sie.',
  },
}

const SERVICE_LD = serviceSchema({
  serviceType: 'B2B 3D-Druck Industriekunden',
  description:
    'Rahmenverträge, Mengenrabatt ab 5 Stück, NDA-Verträge möglich, Zahlungsziel 30 Tage. Industriekunden-Service mit UID-Abwicklung, persönlicher Betreuung, Mengen-Skalierung.',
  url: 'https://www.ek-druck.at/firmenkunden',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Firmenkunden', url: '/firmenkunden' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Firmenkunden />
    </>
  )
}
