import type { Metadata } from 'next'
import UeberUns from '@/src-pages/UeberUns'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Über uns — ekdruck e.U., 3D-Druck-Manufaktur aus Gunskirchen | ekdruck',
  description: 'ekdruck e.U. ist eine 3D-Druck-Manufaktur in Gunskirchen, Oberösterreich. Industriemodelle, Architekturmodelle, Messeobjekte und Marketingobjekte für Premium-Brands im DACH-Raum. ★5,0 (31 Bewertungen).',
  alternates: buildDachAlternates('/ueber-uns'),
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Über uns — ekdruck e.U., 3D-Druck-Manufaktur aus Gunskirchen | ekdruck',
    description: 'ekdruck e.U. ist eine 3D-Druck-Manufaktur in Gunskirchen, Oberösterreich. Industriemodelle, Architekturmodelle, Messeobjekte und Marketingobjekte für Premium-Brands im DACH-Raum. ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/ueber-uns',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/about/werkstatt-overview.jpg', width: 1200, height: 630, alt: 'ekdruck e.U. — 3D-Druck-Manufaktur in Gunskirchen, Oberösterreich' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns — ekdruck e.U., 3D-Druck-Manufaktur aus Gunskirchen | ekdruck',
    description: 'ekdruck e.U. ist eine 3D-Druck-Manufaktur in Gunskirchen, Oberösterreich. Industriemodelle, Architekturmodelle, Messeobjekte und Marketingobjekte.',
  },
}

export default function Page() {
  return <UeberUns />
}
