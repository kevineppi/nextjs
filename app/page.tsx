import type { Metadata } from 'next'
import Index from '@/src-pages/Index'

export const metadata: Metadata = {
  title: '3D-Druck Österreich ★5,0 – Architektur- & Messemodelle | ekdruck',
  description: 'Architektur- & Messemodelle aus dem 3D-Druck ★5,0 (31 Bewertungen). Angebot in 6h · Express 24h · ab €20 · Made in Austria.',
  alternates: {
    canonical: 'https://www.ek-druck.at',
  },
  openGraph: {
    title: '3D-Druck Österreich ★5,0 – Architektur- & Messemodelle | ekdruck',
    description: 'Architektur- & Messemodelle aus dem 3D-Druck ★5,0 (31 Bewertungen). Angebot in 6h · Express 24h · ab €20 · Made in Austria.',
    url: 'https://www.ek-druck.at',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Österreich ★5,0 – Architektur- & Messemodelle | ekdruck',
    description: 'Architektur- & Messemodelle aus dem 3D-Druck ★5,0 (31 Bewertungen). Angebot in 6h · Express 24h · ab €20 · Made in Austria.',
  },
}

export default function Page() {
  return <Index />
}
