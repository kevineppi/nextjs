import type { Metadata } from 'next'
import PrototypingGuide from '@/src-pages/ratgeber/PrototypingGuide'

export const metadata: Metadata = {
  title: 'Rapid Prototyping Guide: Verfahren, Kosten & Tipps [2026]',
  description: 'Prototyp drucken lassen: FDM, SLA oder SLS? Kosten und Materialwahl – der komplette Guide.',
  alternates: {
    canonical: 'https://ek-druck.at/ratgeber/prototyping-guide',
  },
  openGraph: {
    title: 'Rapid Prototyping Guide: Verfahren, Kosten & Tipps [2026]',
    description: 'Prototyp drucken lassen: FDM, SLA oder SLS? Kosten und Materialwahl – der komplette Guide.',
    url: 'https://ek-druck.at/ratgeber/prototyping-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Prototyping Guide: Verfahren, Kosten & Tipps [2026]',
    description: 'Prototyp drucken lassen: FDM, SLA oder SLS? Kosten und Materialwahl – der komplette Guide.',
  },
}

export default function Page() {
  return <PrototypingGuide />
}
