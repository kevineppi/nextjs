import type { Metadata } from 'next'
import Index from '@/src-pages/Index'

export const metadata: Metadata = {
  title: '3D-Druck Österreich – Express 24h, Versand morgen | ekdruck',
  description: 'STL-Datei hochladen → Druck startet heute, Versand morgen. FDM, SLA, SLS aus Gunskirchen/OÖ. Preis online ab €20. ★5,0 (31 Bewertungen).',
  alternates: {
    canonical: 'https://www.ek-druck.at',
  },
  openGraph: {
    title: '3D-Druck Österreich – Express 24h, Versand morgen | ekdruck',
    description: 'STL-Datei hochladen → Druck startet heute, Versand morgen. FDM, SLA, SLS aus Gunskirchen/OÖ. Preis online ab €20. ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Österreich – Express 24h, Versand morgen | ekdruck',
    description: 'STL-Datei hochladen → Druck startet heute, Versand morgen. FDM, SLA, SLS aus Gunskirchen/OÖ. Preis online ab €20. ★5,0 (31 Bewertungen).',
  },
}

export default function Page() {
  return <Index />
}
