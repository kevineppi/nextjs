import type { Metadata } from 'next'
import UeberUns from '@/src-pages/UeberUns'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Über uns — Kevin Eppensteiner, ekdruck e.U. aus Gunskirchen | ekdruck',
  description: 'Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ. 3 industrielle FDM-Drucker. ★5,0 (31 Bewertungen).',
  alternates: buildDachAlternates('/ueber-uns'),
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Über uns — Kevin Eppensteiner, ekdruck e.U. aus Gunskirchen | ekdruck',
    description: 'Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ. 3 industrielle FDM-Drucker. ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/ueber-uns',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Kevin Eppensteiner — Inhaber ekdruck e.U. aus Gunskirchen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns — Kevin Eppensteiner, ekdruck e.U. aus Gunskirchen | ekdruck',
    description: 'Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ.',
  },
}

export default function Page() {
  return <UeberUns />
}
