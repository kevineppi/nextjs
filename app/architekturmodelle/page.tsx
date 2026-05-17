import type { Metadata } from 'next'
import Architekturmodelle from '@/src-pages/Architekturmodelle'

export const metadata: Metadata = {
  title: 'Architekturmodell drucken: vom CAD zum Modell in 3 Tagen',
  description: 'ArchiCAD, Revit, Rhino, SketchUp – wir machen daraus Ihr Modell. Maßstab 1:50 bis 1:1000. Wettbewerb / Bauherr / Stadtmodell. Ab €280.',
  alternates: {
    canonical: 'https://www.ek-druck.at/architekturmodelle',
  },
  openGraph: {
    title: 'Architekturmodell drucken: vom CAD zum Modell in 3 Tagen',
    description: 'ArchiCAD, Revit, Rhino, SketchUp – wir machen daraus Ihr Modell. Maßstab 1:50 bis 1:1000. Wettbewerb / Bauherr / Stadtmodell. Ab €280.',
    url: 'https://www.ek-druck.at/architekturmodelle',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell drucken: vom CAD zum Modell in 3 Tagen',
    description: 'ArchiCAD, Revit, Rhino, SketchUp – wir machen daraus Ihr Modell. Maßstab 1:50 bis 1:1000. Wettbewerb / Bauherr / Stadtmodell. Ab €280.',
  },
}

export default function Page() {
  return <Architekturmodelle />
}
