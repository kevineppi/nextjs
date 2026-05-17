import type { Metadata } from 'next'
import PrototypingGuide from '@/src-pages/ratgeber/PrototypingGuide'

export const metadata: Metadata = {
  title: 'Rapid Prototyping: vom CAD zum Funktionsprototyp [Guide]',
  description: 'Komplett-Guide für Konstrukteure: Verfahrenswahl, Toleranzen, Material, CAD-Export. Mit Iterations-Checkliste und typischen Fehlern.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/prototyping-guide',
  },
  openGraph: {
    title: 'Rapid Prototyping: vom CAD zum Funktionsprototyp [Guide]',
    description: 'Komplett-Guide für Konstrukteure: Verfahrenswahl, Toleranzen, Material, CAD-Export. Mit Iterations-Checkliste und typischen Fehlern.',
    url: 'https://www.ek-druck.at/ratgeber/prototyping-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Prototyping: vom CAD zum Funktionsprototyp [Guide]',
    description: 'Komplett-Guide für Konstrukteure: Verfahrenswahl, Toleranzen, Material, CAD-Export. Mit Iterations-Checkliste und typischen Fehlern.',
  },
}

export default function Page() {
  return <PrototypingGuide />
}
