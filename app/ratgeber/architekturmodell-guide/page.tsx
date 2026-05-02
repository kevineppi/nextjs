import type { Metadata } from 'next'
import ArchitekturmodellGuide from '@/src-pages/ratgeber/ArchitekturmodellGuide'

export const metadata: Metadata = {
  title: 'Architekturmodell 3D-Druck: Kosten, Maßstäbe & CAD [2026]',
  description: 'Alles für Architekturbüros: Welcher Maßstab, welches Material, CAD-Export – plus 5 teure Fehler vermeiden.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/architekturmodell-guide',
  },
  openGraph: {
    title: 'Architekturmodell 3D-Druck: Kosten, Maßstäbe & CAD [2026]',
    description: 'Alles für Architekturbüros: Welcher Maßstab, welches Material, CAD-Export – plus 5 teure Fehler vermeiden.',
    url: 'https://www.ek-druck.at/ratgeber/architekturmodell-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodell 3D-Druck: Kosten, Maßstäbe & CAD [2026]',
    description: 'Alles für Architekturbüros: Welcher Maßstab, welches Material, CAD-Export – plus 5 teure Fehler vermeiden.',
  },
}

export default function Page() {
  return <ArchitekturmodellGuide />
}
