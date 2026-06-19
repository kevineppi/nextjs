import type { Metadata } from 'next'
import Impressum from '@/src-pages/Impressum'

export const metadata: Metadata = {
  title: 'Impressum · ekdruck e.U., Gunskirchen, Oberösterreich',
  description: 'Impressum und Anbieterkennzeichnung von ekdruck e.U., Negrellistraße 15, 4623 Gunskirchen, Österreich.',
  alternates: {
    canonical: 'https://www.ek-druck.at/impressum',
  },
  openGraph: {
    title: 'Impressum · ekdruck e.U., Gunskirchen, Oberösterreich',
    description: 'Impressum und Anbieterkennzeichnung von ekdruck e.U., Negrellistraße 15, 4623 Gunskirchen, Österreich.',
    url: 'https://www.ek-druck.at/impressum',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impressum · ekdruck e.U., Gunskirchen, Oberösterreich',
    description: 'Impressum und Anbieterkennzeichnung von ekdruck e.U., Negrellistraße 15, 4623 Gunskirchen, Österreich.',
  },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <Impressum />
}
