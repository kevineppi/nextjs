import type { Metadata } from 'next'
import Index from '@/src-pages/Index'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = '3D-Druck Österreich ★5,0 — Express 24h ab €20 | ekdruck'
const DESCRIPTION = 'Architekturmodelle · Messemodelle · Prototypen aus dem 3D-Druck. STL → Festpreis in 6h, Lieferung morgen. ★5,0 · Made in Gunskirchen →'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck – 3D-Druck Österreich' }],
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
