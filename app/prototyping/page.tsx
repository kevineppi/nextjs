import type { Metadata } from 'next'
import Prototyping from '@/src-pages/Prototyping'

export const metadata: Metadata = {
  title: 'Rapid Prototyping Österreich – 3D-Druck Prototypen ab €20 | ekdruck',
  description: 'Funktionsprototypen, Designmuster & Kleinserien aus dem 3D-Druck. FDM in-house, SLA/SLS über Partner. Express 24h ✓ Toleranz ±0,1mm ✓ Stammkunden-Rabatt bis 20% ✓ ★5,0 (31 Bewertungen).',
  keywords: 'rapid prototyping, prototyp drucken lassen, 3d druck prototyp, funktionsprototyp, designprototyp, vorserie 3d druck, kleinserienfertigung, fdm prototyp, sla prototyp, sls prototyp, prototyping österreich, prototyp express, konstruktionsprototyp, carbon pa prototyp, pa12 sls, prototyp toleranz, reverse engineering, dfam beratung',
  alternates: {
    canonical: 'https://www.ek-druck.at/prototyping',
  },
  openGraph: {
    title: 'Rapid Prototyping Österreich – 3D-Druck Prototypen ab €20 | ekdruck',
    description: 'Funktionsprototypen, Designmuster & Kleinserien aus dem 3D-Druck. FDM in-house, SLA/SLS über Partner. Express 24h ✓ Toleranz ±0,1mm ✓ Stammkunden-Rabatt bis 20% ✓ ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/prototyping',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck – Rapid Prototyping Österreich' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Prototyping Österreich – 3D-Druck Prototypen ab €20 | ekdruck',
    description: 'Funktionsprototypen, Designmuster & Kleinserien aus dem 3D-Druck. FDM in-house, SLA/SLS über Partner. Express 24h ✓ Toleranz ±0,1mm ✓ ★5,0 (31 Bewertungen).',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <Prototyping />
}
