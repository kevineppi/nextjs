import type { Metadata } from 'next'
import Wien3DDruck from '@/src-pages/Wien3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Wien ★5,0 – Express über Nacht · Angebot in 6 h',
  description: '3D-Druck Anbieter für Wien ✓ Architekturmodelle & Prototypen ✓ Express über Nacht ✓ Angebot in 6 h. ★ 5,0 (31 Bewertungen)',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-wien',
  },
  openGraph: {
    title: '3D-Druck Wien ★5,0 – Express über Nacht · Angebot in 6 h',
    description: '3D-Druck Anbieter für Wien ✓ Architekturmodelle & Prototypen ✓ Express über Nacht ✓ Angebot in 6 h. ★ 5,0 (31 Bewertungen)',
    url: 'https://www.ek-druck.at/3d-druck-wien',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Wien ★5,0 – Express über Nacht · Angebot in 6 h',
    description: '3D-Druck Anbieter für Wien ✓ Architekturmodelle & Prototypen ✓ Express über Nacht ✓ Angebot in 6 h. ★ 5,0 (31 Bewertungen)',
  },
}

export default function Page() {
  return <Wien3DDruck />
}
