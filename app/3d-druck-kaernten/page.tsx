import type { Metadata } from 'next'
import Kaernten3DDruck from '@/src-pages/Kaernten3DDruck'
import { regionalLocalBusinessSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Kärnten: A10-Versand nach Klagenfurt & Villach',
  description: 'Drucken lassen aus OÖ, Lieferung über A10 nach Klagenfurt/Villach in 24-48h. Für Holzindustrie, Tourismus, Maschinenbau.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-kaernten',
  },
  openGraph: {
    title: '3D-Druck Kärnten: A10-Versand nach Klagenfurt & Villach',
    description: 'Drucken lassen aus OÖ, Lieferung über A10 nach Klagenfurt/Villach in 24-48h. Für Holzindustrie, Tourismus, Maschinenbau.',
    url: 'https://www.ek-druck.at/3d-druck-kaernten',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Kärnten: A10-Versand nach Klagenfurt & Villach',
    description: 'Drucken lassen aus OÖ, Lieferung über A10 nach Klagenfurt/Villach in 24-48h. Für Holzindustrie, Tourismus, Maschinenbau.',
  },
}


const REGION_LD = regionalLocalBusinessSchema({
  region: 'Kärnten',
  url: 'https://www.ek-druck.at/3d-druck-kaernten',
  description: '3D-Druck-Service für Kunden in Kärnten. Express-Versand 24h aus Gunskirchen, OÖ. Architekturmodelle, Messemodelle, Prototypen, Kleinserien. Persönliche Antwort in 6h.',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: '3D-Druck Kärnten', url: '/3d-druck-kaernten' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Kaernten3DDruck />
    </>
  )
}
