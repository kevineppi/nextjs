import type { Metadata } from 'next'
import Salzburg3DDruck from '@/src-pages/Salzburg3DDruck'
import { regionalLocalBusinessSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Salzburg: A1-Versand morgen vor 10 Uhr | ekdruck',
  description: 'Drucker in OÖ mit A1-Direktversand nach Salzburg. Druck heute, Lieferung morgen vor 10 Uhr. Für Pharma, Tourismus, Festspiel-Modelle. Ab €20.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-salzburg',
  },
  openGraph: {
    title: '3D-Druck Salzburg: A1-Versand morgen vor 10 Uhr | ekdruck',
    description: 'Drucker in OÖ mit A1-Direktversand nach Salzburg. Druck heute, Lieferung morgen vor 10 Uhr. Für Pharma, Tourismus, Festspiel-Modelle. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-salzburg',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Salzburg: A1-Versand morgen vor 10 Uhr | ekdruck',
    description: 'Drucker in OÖ mit A1-Direktversand nach Salzburg. Druck heute, Lieferung morgen vor 10 Uhr. Für Pharma, Tourismus, Festspiel-Modelle. Ab €20.',
  },
}


const REGION_LD = regionalLocalBusinessSchema({
  region: 'Salzburg',
  url: 'https://www.ek-druck.at/3d-druck-salzburg',
  description: '3D-Druck-Service für Kunden in Salzburg. Express-Versand 24h aus Gunskirchen, OÖ. Architekturmodelle, Messemodelle, Prototypen, Kleinserien. Persönliche Antwort in 6h. Ab €20.',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: '3D-Druck Salzburg', url: '/3d-druck-salzburg' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Salzburg3DDruck />
    </>
  )
}
