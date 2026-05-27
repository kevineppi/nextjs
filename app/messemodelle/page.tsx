import type { Metadata } from 'next'
import Messemodelle from '@/src-pages/Messemodelle'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Messemodelle 3D-Druck ★5,0 — 8-Tonnen-Maschine als Tisch-Exponat in 24h'
const DESCRIPTION = 'Ihr Produkt zu groß für den Messestand? 3D-gedrucktes Messemodell maßstabsgetreu in 24-48h. Bruchsicher, segmentiert, DACH-Express. ab €30 ★5,0 (31 Reviews) →'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/messemodelle'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/messemodelle',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck – Messemodelle 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

export default function Page() {
  return <Messemodelle />
}
