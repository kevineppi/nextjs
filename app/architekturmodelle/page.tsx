import type { Metadata } from 'next'
import Architekturmodelle from '@/src-pages/Architekturmodelle'

export const metadata: Metadata = {
  title: 'Architekturmodell drucken lassen – 3D-Druck ab €20 ★5,0 | ekdruck',
  description: 'Architekturmodelle aus dem 3D-Druck: Wettbewerb · Bauherr · Stadtmodell. Maßstab 1:50–1:500 ✓ ArchiCAD, Revit, Rhino, SketchUp ✓ Express 24h ✓ ab €20 ✓ ★5,0 (31 Bewertungen).',
  keywords: 'architekturmodell, architekturmodell drucken, architekturmodell 3d druck, architekturmodellbau, wettbewerbsmodell, präsentationsmodell architektur, städtebauliches modell, bauherrenmodell, stadtmodell drucken, gebäudemodell, architekturmodell wien, architekturmodell österreich, modellbau architektur, archicad 3d druck, revit modell drucken, sketchup modell drucken, rhino modell, maßstab 1 100, maßstab 1 200, maßstab 1 500, weißes modell, präsentationsmodell',
  alternates: {
    canonical: 'https://www.ek-druck.at/architekturmodelle',
  },
  openGraph: {
    title: 'Architekturmodell drucken lassen – 3D-Druck ab €20 ★5,0 | ekdruck',
    description: 'Architekturmodelle aus dem 3D-Druck: Wettbewerb · Bauherr · Stadtmodell. Maßstab 1:50–1:500 ✓ ArchiCAD, Revit, Rhino, SketchUp ✓ Express 24h ✓ ab €20 ✓ ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/architekturmodelle',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck – Architekturmodelle aus dem 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell drucken lassen – 3D-Druck ab €20 ★5,0 | ekdruck',
    description: 'Architekturmodelle 3D-Druck: Wettbewerb · Bauherr · Stadtmodell. Maßstab 1:50–1:500 ✓ Express 24h ✓ ab €20 ✓ ★5,0 (31 Bewertungen).',
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
  return <Architekturmodelle />
}
