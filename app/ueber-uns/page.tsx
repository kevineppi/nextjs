import type { Metadata } from 'next'
import UeberUns from '@/src-pages/UeberUns'

export const metadata: Metadata = {
  title: 'Wer ist ekdruck? 10+ Drucker, ein Inhaber, kein Mittelsmann',
  description: 'Direkter Draht zum Inhaber Kevin Eppensteiner. Werkstatt in Gunskirchen/OÖ mit 10+ FDM-Druckern. WKO-Gewerbe, österreichisches Filament.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ueber-uns',
  },
  openGraph: {
    title: 'Wer ist ekdruck? 10+ Drucker, ein Inhaber, kein Mittelsmann',
    description: 'Direkter Draht zum Inhaber Kevin Eppensteiner. Werkstatt in Gunskirchen/OÖ mit 10+ FDM-Druckern. WKO-Gewerbe, österreichisches Filament.',
    url: 'https://www.ek-druck.at/ueber-uns',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wer ist ekdruck? 10+ Drucker, ein Inhaber, kein Mittelsmann',
    description: 'Direkter Draht zum Inhaber Kevin Eppensteiner. Werkstatt in Gunskirchen/OÖ mit 10+ FDM-Druckern. WKO-Gewerbe, österreichisches Filament.',
  },
}

export default function Page() {
  return <UeberUns />
}
