import type { Metadata } from 'next'
import Steiermark3DDruck from '@/src-pages/Steiermark3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Steiermark: Lieferung nach Graz in 24h | ekdruck',
  description: '3D-Druck-Anbieter mit A9-Direktlieferung nach Graz, Leoben, Bruck. Für Maschinenbau-Prototypen und Architekturmodelle. Ab €20.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-steiermark',
  },
  openGraph: {
    title: '3D-Druck Steiermark: Lieferung nach Graz in 24h | ekdruck',
    description: '3D-Druck-Anbieter mit A9-Direktlieferung nach Graz, Leoben, Bruck. Für Maschinenbau-Prototypen und Architekturmodelle. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-steiermark',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Steiermark: Lieferung nach Graz in 24h | ekdruck',
    description: '3D-Druck-Anbieter mit A9-Direktlieferung nach Graz, Leoben, Bruck. Für Maschinenbau-Prototypen und Architekturmodelle. Ab €20.',
  },
}

export default function Page() {
  return <Steiermark3DDruck />
}
