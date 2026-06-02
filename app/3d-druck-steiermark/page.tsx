import type { Metadata } from 'next'
import Steiermark3DDruck from '@/src-pages/Steiermark3DDruck'
import { regionalLocalBusinessSchema, breadcrumbSchema } from '@/lib/seo'

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


const REGION_LD = regionalLocalBusinessSchema({
  region: 'Steiermark',
  url: 'https://www.ek-druck.at/3d-druck-steiermark',
  description: '3D-Druck-Service für Kunden in Steiermark. Express-Versand 24h aus Gunskirchen, OÖ. Architekturmodelle, Messemodelle, Prototypen, Kleinserien. Persönliche Antwort in 6h. Ab €20.',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: '3D-Druck Steiermark', url: '/3d-druck-steiermark' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Steiermark3DDruck />
    </>
  )
}
