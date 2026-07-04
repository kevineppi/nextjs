import type { Metadata } from 'next'
import Index from '@/src-pages/Index'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'ekdruck · Architekturmodelle & Messemodelle aus dem 3D-Druck | Österreich'
const DESCRIPTION = 'Österreichs Spezialist für Architektur- und Messemodelle aus dem 3D-Druck. Von CAD/IFC bis zum fertigen Modell: Angebot in 6 h, Express-Fertigung.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck · 3D-Druck Österreich' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

export default function Page() {
  return <Index />
}
