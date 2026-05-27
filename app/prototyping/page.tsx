import type { Metadata } from 'next'
import Prototyping from '@/src-pages/Prototyping'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

/**
 * Title-Schärfung 2026-05-27: Position 1.2 in GSC, aber 0 Klicks für "3d druck prototypen".
 * Hypothese: alter Title zu generisch ("Rapid Prototyping Österreich") — kein konkreter Hook.
 * Neuer Title: Spezifisch (24h Express), Social Proof (★5,0), Pain-Mitigation (ab €20).
 * Description: Pain-Pull-Format (Spritzguss 6 Wochen → 24h Prototyp) statt Feature-Dump.
 */

const TITLE = '3D-Druck Prototypen in 24h — Funktionsmuster ab €20 ★5,0 | ekdruck'
const DESCRIPTION =
  'Spritzguss braucht 6 Wochen. Wir liefern Ihren Prototyp in 24-48h: PLA, PETG, ABS, Carbon-PA. Toleranz ±0,1mm. Festpreis in 6h. ★5,0 (31 Reviews) — direkt aus Gunskirchen.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'rapid prototyping, prototyp drucken lassen, 3d druck prototyp, funktionsprototyp, designprototyp, vorserie 3d druck, kleinserienfertigung, fdm prototyp, sla prototyp, sls prototyp, prototyping österreich, prototyp express, konstruktionsprototyp, carbon pa prototyp, pa12 sls, prototyp toleranz, reverse engineering, dfam beratung, 3d druck prototypen 24h, prototyp express österreich',
  alternates: buildDachAlternates('/prototyping'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/prototyping',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck – 3D-Druck Prototypen 24h Express' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

export default function Page() {
  return <Prototyping />
}
