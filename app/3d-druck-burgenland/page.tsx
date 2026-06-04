import type { Metadata } from 'next'
import Burgenland3DDruck from '@/src-pages/Burgenland3DDruck'
import { regionalLocalBusinessSchema, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Burgenland — Versand Eisenstadt 24h',
  description: '3D-Druck mit ÖPOST-Versand nach Eisenstadt, Neusiedl, Mattersburg. Für Weinbau-Modelle, Industriebauteile, Tourismus. Ab €20.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-burgenland',
  },
  openGraph: {
    title: '3D-Druck Burgenland — Versand Eisenstadt 24h',
    description: '3D-Druck mit ÖPOST-Versand nach Eisenstadt, Neusiedl, Mattersburg. Für Weinbau-Modelle, Industriebauteile, Tourismus. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-burgenland',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Burgenland — Versand Eisenstadt 24h',
    description: '3D-Druck mit ÖPOST-Versand nach Eisenstadt, Neusiedl, Mattersburg. Für Weinbau-Modelle, Industriebauteile, Tourismus. Ab €20.',
  },
}


const REGION_LD = regionalLocalBusinessSchema({
  region: 'Burgenland',
  url: 'https://www.ek-druck.at/3d-druck-burgenland',
  description: '3D-Druck-Service für Kunden in Burgenland. Express-Versand 24h aus Gunskirchen, OÖ. Architekturmodelle, Messemodelle, Prototypen, Kleinserien. Persönliche Antwort in 6h. Ab €20.',
})

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: '3D-Druck Burgenland', url: '/3d-druck-burgenland' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGION_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Burgenland3DDruck />
    </>
  )
}
