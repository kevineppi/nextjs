import type { Metadata } from 'next'
import ArchitekturmodellGuide from '@/src-pages/ratgeber/ArchitekturmodellGuide'

export const metadata: Metadata = {
  title: 'Architekturmodell-Ratgeber: Maßstab, CAD-Export, 5 Fehler',
  description: 'Für Architekturbüros: welcher Maßstab für welches Projekt, CAD-Export aus ArchiCAD/Revit/Rhino, 5 typische Fehler die viel Geld kosten.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/architekturmodell-guide',
  },
  openGraph: {
    title: 'Architekturmodell-Ratgeber: Maßstab, CAD-Export, 5 Fehler',
    description: 'Für Architekturbüros: welcher Maßstab für welches Projekt, CAD-Export aus ArchiCAD/Revit/Rhino, 5 typische Fehler die viel Geld kosten.',
    url: 'https://www.ek-druck.at/ratgeber/architekturmodell-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell-Ratgeber: Maßstab, CAD-Export, 5 Fehler',
    description: 'Für Architekturbüros: welcher Maßstab für welches Projekt, CAD-Export aus ArchiCAD/Revit/Rhino, 5 typische Fehler die viel Geld kosten.',
  },
}

export default function Page() {
  return <ArchitekturmodellGuide />
}
