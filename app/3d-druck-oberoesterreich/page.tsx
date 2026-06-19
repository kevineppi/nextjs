import type { Metadata } from 'next'
import Oberoesterreich3DDruck from '@/src-pages/Oberoesterreich3DDruck'
import {buildATOnlyAlternates, STANDARD_ROBOTS, regionalLocalBusinessSchema, breadcrumbSchema} from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Oberösterreich: Same-Day-Abholung in Gunskirchen',
  description: 'Lokaler 3D-Druck-Anbieter in OÖ. Abholung in Gunskirchen am selben Tag, Lieferung nach Linz/Wels/Steyr in 24h. Persönliche Beratung. Ab €20.',
  alternates: buildATOnlyAlternates('/3d-druck-oberoesterreich'),
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: '3D-Druck Oberösterreich: Same-Day-Abholung in Gunskirchen',
    description: 'Lokaler 3D-Druck-Anbieter in OÖ. Abholung in Gunskirchen am selben Tag, Lieferung nach Linz/Wels/Steyr in 24h. Persönliche Beratung. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-oberoesterreich',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Oberösterreich: Same-Day-Abholung in Gunskirchen',
    description: 'Lokaler 3D-Druck-Anbieter in OÖ. Abholung in Gunskirchen am selben Tag, Lieferung nach Linz/Wels/Steyr in 24h. Persönliche Beratung. Ab €20.',
  },
}


const REGION_LD = regionalLocalBusinessSchema({
  region: 'Oberösterreich',
  url: 'https://www.ek-druck.at/3d-druck-oberoesterreich',
  description: '3D-Druck-Service für Kunden in Oberösterreich. Express-Versand 24h aus Gunskirchen, OÖ. Architekturmodelle, Messemodelle, Prototypen, Kleinserien. Persönliche Antwort in 6h. Ab €20.',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: '3D-Druck Oberösterreich', url: '/3d-druck-oberoesterreich' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Oberoesterreich3DDruck />
    </>
  )
}
