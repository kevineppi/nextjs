import type { Metadata } from 'next'
import Index from '@/src-pages/Index'

export const metadata: Metadata = {
  title: '3D-Druck Österreich ★5,0 – Architekturmodelle & Messemodelle | ekdruck',
  description: 'Österreichs Spezialist für Architekturmodelle & Messemodelle. ★ 5,0 Google (31 Bewertungen) · Angebot in 6 h · Express 24 h · ab €20 · Flatrate für Architekturbüros ab €199/Mon.',
  alternates: {
    canonical: 'https://ek-druck.at',
  },
  openGraph: {
    title: '3D-Druck Österreich ★5,0 – Architekturmodelle & Messemodelle | ekdruck',
    description: 'Österreichs Spezialist für Architekturmodelle & Messemodelle. ★ 5,0 Google (31 Bewertungen) · Angebot in 6 h · Express 24 h · ab €20 · Flatrate für Architekturbüros ab €199/Mon.',
    url: 'https://ek-druck.at',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Österreich ★5,0 – Architekturmodelle & Messemodelle | ekdruck',
    description: 'Österreichs Spezialist für Architekturmodelle & Messemodelle. ★ 5,0 Google (31 Bewertungen) · Angebot in 6 h · Express 24 h · ab €20 · Flatrate für Architekturbüros ab €199/Mon.',
  },
}

export default function Page() {
  return <Index />
}
