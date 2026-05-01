import type { Metadata } from 'next'
import KostenGuide from '@/src-pages/ratgeber/KostenGuide'

export const metadata: Metadata = {
  title: '3D-Druck Kosten 2026: Echte Preise + 6 Spartipps [Guide]',
  description: 'Was kostet 3D-Druck wirklich? Preisbeispiele und 6 Spartipps für bis zu 30% weniger.',
  alternates: {
    canonical: 'https://ek-druck.at/ratgeber/kosten-guide',
  },
  openGraph: {
    title: '3D-Druck Kosten 2026: Echte Preise + 6 Spartipps [Guide]',
    description: 'Was kostet 3D-Druck wirklich? Preisbeispiele und 6 Spartipps für bis zu 30% weniger.',
    url: 'https://ek-druck.at/ratgeber/kosten-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Kosten 2026: Echte Preise + 6 Spartipps [Guide]',
    description: 'Was kostet 3D-Druck wirklich? Preisbeispiele und 6 Spartipps für bis zu 30% weniger.',
  },
}

export default function Page() {
  return <KostenGuide />
}
