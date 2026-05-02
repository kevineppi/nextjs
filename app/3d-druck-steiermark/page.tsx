import type { Metadata } from 'next'
import Steiermark3DDruck from '@/src-pages/Steiermark3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Steiermark ★5,0 – Express via A9 · Angebot in 6 h',
  description: '3D-Druck Anbieter für die Steiermark ✓ Designstudien & Prototypen ✓ Express via A9. ★ 5,0 (31 Bewertungen)',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-steiermark',
  },
  openGraph: {
    title: '3D-Druck Steiermark ★5,0 – Express via A9 · Angebot in 6 h',
    description: '3D-Druck Anbieter für die Steiermark ✓ Designstudien & Prototypen ✓ Express via A9. ★ 5,0 (31 Bewertungen)',
    url: 'https://www.ek-druck.at/3d-druck-steiermark',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Steiermark ★5,0 – Express via A9 · Angebot in 6 h',
    description: '3D-Druck Anbieter für die Steiermark ✓ Designstudien & Prototypen ✓ Express via A9. ★ 5,0 (31 Bewertungen)',
  },
}

export default function Page() {
  return <Steiermark3DDruck />
}
