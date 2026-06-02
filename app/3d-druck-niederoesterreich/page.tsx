import type { Metadata } from 'next'
import Niederoesterreich3DDruck from '@/src-pages/Niederoesterreich3DDruck'
import { regionalLocalBusinessSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Niederösterreich: Lieferung Wien-Umland in 24h',
  description: 'Drucken lassen aus OÖ mit Direktlieferung St. Pölten, Krems, Wiener Neustadt. Für Industriekunden im Wien-Umland. Ab €20 ★5,0.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-niederoesterreich',
  },
  openGraph: {
    title: '3D-Druck Niederösterreich: Lieferung Wien-Umland in 24h',
    description: 'Drucken lassen aus OÖ mit Direktlieferung St. Pölten, Krems, Wiener Neustadt. Für Industriekunden im Wien-Umland. Ab €20 ★5,0.',
    url: 'https://www.ek-druck.at/3d-druck-niederoesterreich',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Niederösterreich: Lieferung Wien-Umland in 24h',
    description: 'Drucken lassen aus OÖ mit Direktlieferung St. Pölten, Krems, Wiener Neustadt. Für Industriekunden im Wien-Umland. Ab €20 ★5,0.',
  },
}


const REGION_LD = regionalLocalBusinessSchema({
  region: 'Niederösterreich',
  url: 'https://www.ek-druck.at/3d-druck-niederoesterreich',
  description: '3D-Druck-Service für Kunden in Niederösterreich. Express-Versand 24h aus Gunskirchen, OÖ. Architekturmodelle, Messemodelle, Prototypen, Kleinserien. Persönliche Antwort in 6h. Ab €20.',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: '3D-Druck Niederösterreich', url: '/3d-druck-niederoesterreich' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Niederoesterreich3DDruck />
    </>
  )
}
