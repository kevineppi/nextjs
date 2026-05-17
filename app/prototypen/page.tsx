import type { Metadata } from 'next'
import Prototypen from '@/src-pages/Prototypen'

export const metadata: Metadata = {
  title: 'Rapid Prototyping Österreich: Bauteil in 24h, Toleranz ±0,1mm',
  description: 'Funktionsprototyp drucken: FDM, SLA, SLS. Carbon-PA, ASA, PA12. Vom CAD zum Bauteil über Nacht. NDA möglich. Ab €20 Festpreis.',
  alternates: {
    canonical: 'https://www.ek-druck.at/prototypen',
  },
  openGraph: {
    title: 'Rapid Prototyping Österreich: Bauteil in 24h, Toleranz ±0,1mm',
    description: 'Funktionsprototyp drucken: FDM, SLA, SLS. Carbon-PA, ASA, PA12. Vom CAD zum Bauteil über Nacht. NDA möglich. Ab €20 Festpreis.',
    url: 'https://www.ek-druck.at/prototypen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Prototyping Österreich: Bauteil in 24h, Toleranz ±0,1mm',
    description: 'Funktionsprototyp drucken: FDM, SLA, SLS. Carbon-PA, ASA, PA12. Vom CAD zum Bauteil über Nacht. NDA möglich. Ab €20 Festpreis.',
  },
}

export default function Page() {
  return <Prototypen />
}
