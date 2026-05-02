import type { Metadata } from 'next'
import Prototypen from '@/src-pages/Prototypen'

export const metadata: Metadata = {
  title: '3D-Druck Prototypen Österreich – Express 24h | ekdruck',
  description: 'Rapid Prototyping ab €20 ✓ FDM, SLA, SLS ✓ Express 24h ✓ Angebot in 6h ✓ ★5,0 (31 Bewertungen).',
  alternates: {
    canonical: 'https://www.ek-druck.at/prototypen',
  },
  openGraph: {
    title: '3D-Druck Prototypen Österreich – Express 24h | ekdruck',
    description: 'Rapid Prototyping ab €20 ✓ FDM, SLA, SLS ✓ Express 24h ✓ Angebot in 6h ✓ ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/prototypen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Prototypen Österreich – Express 24h | ekdruck',
    description: 'Rapid Prototyping ab €20 ✓ FDM, SLA, SLS ✓ Express 24h ✓ Angebot in 6h ✓ ★5,0 (31 Bewertungen).',
  },
}

export default function Page() {
  return <Prototypen />
}
