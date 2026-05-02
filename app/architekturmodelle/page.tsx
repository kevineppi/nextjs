import type { Metadata } from 'next'
import Architekturmodelle from '@/src-pages/Architekturmodelle'

export const metadata: Metadata = {
  title: 'Architekturmodelle 3D-Druck – ab €20, Angebot in 6h | ★5,0',
  description: 'Vom CAD-File zum fertigen Modell: Maßstab 1:50–1:500, alle Formate (ArchiCAD, Revit, SketchUp). Express 24h · ab €20 · Angebot in 6h · ★5,0 (31 Bewertungen).',
  alternates: {
    canonical: 'https://www.ek-druck.at/architekturmodelle',
  },
  openGraph: {
    title: 'Architekturmodelle 3D-Druck – ab €20, Angebot in 6h | ★5,0',
    description: 'Vom CAD-File zum fertigen Modell: Maßstab 1:50–1:500, alle Formate (ArchiCAD, Revit, SketchUp). Express 24h · ab €20 · Angebot in 6h · ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/architekturmodelle',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodelle 3D-Druck – ab €20, Angebot in 6h | ★5,0',
    description: 'Vom CAD-File zum fertigen Modell: Maßstab 1:50–1:500, alle Formate (ArchiCAD, Revit, SketchUp). Express 24h · ab €20 · Angebot in 6h · ★5,0 (31 Bewertungen).',
  },
}

export default function Page() {
  return <Architekturmodelle />
}
