import type { Metadata } from 'next'
import Kontakt from '@/src-pages/Kontakt'
import { breadcrumbSchema, ORG_ID } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck-Anfrage · verbindliches Angebot in 6h | ekdruck',
  description: 'Direkter Kontakt zum Inhaber: office@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. Auch WhatsApp.',
  alternates: {
    canonical: 'https://www.ek-druck.at/kontakt',
  },
  openGraph: {
    title: '3D-Druck-Anfrage · verbindliches Angebot in 6h | ekdruck',
    description: 'Direkter Kontakt zum Inhaber: office@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. Auch WhatsApp.',
    url: 'https://www.ek-druck.at/kontakt',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck-Anfrage · verbindliches Angebot in 6h | ekdruck',
    description: 'Direkter Kontakt zum Inhaber: office@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. Auch WhatsApp.',
  },
}

const CONTACT_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: '3D-Druck Anfrage stellen · ekdruck',
  description:
    'Direkter Kontakt zu Kevin Eppensteiner: office@ek-druck.at oder +43 676 5517197. Verbindliches Festpreisangebot in 6 Stunden. WhatsApp verfügbar.',
  url: 'https://www.ek-druck.at/kontakt',
  about: { '@id': ORG_ID },
}

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kontakt', url: '/kontakt' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Kontakt />
    </>
  )
}
