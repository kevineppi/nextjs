import type { Metadata } from 'next'
import Salzburg3DDruck from '@/src-pages/Salzburg3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Salzburg ★5,0 – A1-Express · Angebot in 6 h',
  description: '3D-Druck Anbieter für Salzburg ✓ Modelle & Prototypen ✓ Express via A1 ✓ ab €20. ★ 5,0 (31 Bewertungen)',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-salzburg',
  },
  openGraph: {
    title: '3D-Druck Salzburg ★5,0 – A1-Express · Angebot in 6 h',
    description: '3D-Druck Anbieter für Salzburg ✓ Modelle & Prototypen ✓ Express via A1 ✓ ab €20. ★ 5,0 (31 Bewertungen)',
    url: 'https://www.ek-druck.at/3d-druck-salzburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Salzburg ★5,0 – A1-Express · Angebot in 6 h',
    description: '3D-Druck Anbieter für Salzburg ✓ Modelle & Prototypen ✓ Express via A1 ✓ ab €20. ★ 5,0 (31 Bewertungen)',
  },
}

export default function Page() {
  return <Salzburg3DDruck />
}
