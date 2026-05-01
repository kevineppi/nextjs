import type { Metadata } from 'next'
import Vorarlberg3DDruck from '@/src-pages/Vorarlberg3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Vorarlberg ★5,0 – Express · Angebot in 6 h',
  description: '3D-Druck Anbieter für Vorarlberg ✓ Modelle & Prototypen ✓ Express-Lieferung ✓ ab €20. ★ 5,0 (31 Bewertungen)',
  alternates: {
    canonical: 'https://ek-druck.at/3d-druck-vorarlberg',
  },
  openGraph: {
    title: '3D-Druck Vorarlberg ★5,0 – Express · Angebot in 6 h',
    description: '3D-Druck Anbieter für Vorarlberg ✓ Modelle & Prototypen ✓ Express-Lieferung ✓ ab €20. ★ 5,0 (31 Bewertungen)',
    url: 'https://ek-druck.at/3d-druck-vorarlberg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Vorarlberg ★5,0 – Express · Angebot in 6 h',
    description: '3D-Druck Anbieter für Vorarlberg ✓ Modelle & Prototypen ✓ Express-Lieferung ✓ ab €20. ★ 5,0 (31 Bewertungen)',
  },
}

export default function Page() {
  return <Vorarlberg3DDruck />
}
