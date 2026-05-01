import type { Metadata } from 'next'
import Burgenland3DDruck from '@/src-pages/Burgenland3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Burgenland ★5,0 – Express · Angebot in 6 h',
  description: '3D-Druck Anbieter für Burgenland ✓ Modelle & Prototypen ✓ Express-Lieferung ✓ ab €20. ★ 5,0 (31 Bewertungen)',
  alternates: {
    canonical: 'https://ek-druck.at/3d-druck-burgenland',
  },
  openGraph: {
    title: '3D-Druck Burgenland ★5,0 – Express · Angebot in 6 h',
    description: '3D-Druck Anbieter für Burgenland ✓ Modelle & Prototypen ✓ Express-Lieferung ✓ ab €20. ★ 5,0 (31 Bewertungen)',
    url: 'https://ek-druck.at/3d-druck-burgenland',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Burgenland ★5,0 – Express · Angebot in 6 h',
    description: '3D-Druck Anbieter für Burgenland ✓ Modelle & Prototypen ✓ Express-Lieferung ✓ ab €20. ★ 5,0 (31 Bewertungen)',
  },
}

export default function Page() {
  return <Burgenland3DDruck />
}
