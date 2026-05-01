import type { Metadata } from 'next'
import Firmenkunden from '@/src-pages/Firmenkunden'

export const metadata: Metadata = {
  title: '3D-Druck B2B Österreich ★5,0 – UID · NDA · Angebot in 6h',
  description: '3D-Druck für Unternehmen ✓ Mengenrabatt ab 5 Stück ✓ NDA möglich ✓ UID-Rechnung ✓ Express 24h ✓ Angebot in 6h.',
  alternates: {
    canonical: 'https://ek-druck.at/firmenkunden',
  },
  openGraph: {
    title: '3D-Druck B2B Österreich ★5,0 – UID · NDA · Angebot in 6h',
    description: '3D-Druck für Unternehmen ✓ Mengenrabatt ab 5 Stück ✓ NDA möglich ✓ UID-Rechnung ✓ Express 24h ✓ Angebot in 6h.',
    url: 'https://ek-druck.at/firmenkunden',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck B2B Österreich ★5,0 – UID · NDA · Angebot in 6h',
    description: '3D-Druck für Unternehmen ✓ Mengenrabatt ab 5 Stück ✓ NDA möglich ✓ UID-Rechnung ✓ Express 24h ✓ Angebot in 6h.',
  },
}

export default function Page() {
  return <Firmenkunden />
}
