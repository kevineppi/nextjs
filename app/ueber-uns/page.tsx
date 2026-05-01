import type { Metadata } from 'next'
import UeberUns from '@/src-pages/UeberUns'

export const metadata: Metadata = {
  title: 'Über uns – ekdruck | 3D-Druck aus Oberösterreich',
  description: 'Wer steckt hinter ekdruck? Echte Menschen aus Gunskirchen, OÖ ✓ WKO-gewerbeberechtigt ✓ 10+ FDM-Drucker ✓ Österreichisches Filament',
  alternates: {
    canonical: 'https://ek-druck.at/ueber-uns',
  },
  openGraph: {
    title: 'Über uns – ekdruck | 3D-Druck aus Oberösterreich',
    description: 'Wer steckt hinter ekdruck? Echte Menschen aus Gunskirchen, OÖ ✓ WKO-gewerbeberechtigt ✓ 10+ FDM-Drucker ✓ Österreichisches Filament',
    url: 'https://ek-druck.at/ueber-uns',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns – ekdruck | 3D-Druck aus Oberösterreich',
    description: 'Wer steckt hinter ekdruck? Echte Menschen aus Gunskirchen, OÖ ✓ WKO-gewerbeberechtigt ✓ 10+ FDM-Drucker ✓ Österreichisches Filament',
  },
}

export default function Page() {
  return <UeberUns />
}
