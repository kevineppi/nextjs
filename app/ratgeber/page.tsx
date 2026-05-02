import type { Metadata } from 'next'
import Ratgeber from '@/src-pages/Ratgeber'

export const metadata: Metadata = {
  title: '3D-Druck Ratgeber: Kosten, Material & Verfahren [2026]',
  description: 'Erstes 3D-Druck Projekt? 6 Gratis-Guides zu Kosten, Materialwahl & Verfahren ✓ Spart Geld & Fehler',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber',
  },
  openGraph: {
    title: '3D-Druck Ratgeber: Kosten, Material & Verfahren [2026]',
    description: 'Erstes 3D-Druck Projekt? 6 Gratis-Guides zu Kosten, Materialwahl & Verfahren ✓ Spart Geld & Fehler',
    url: 'https://www.ek-druck.at/ratgeber',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Ratgeber: Kosten, Material & Verfahren [2026]',
    description: 'Erstes 3D-Druck Projekt? 6 Gratis-Guides zu Kosten, Materialwahl & Verfahren ✓ Spart Geld & Fehler',
  },
}

export default function Page() {
  return <Ratgeber />
}
