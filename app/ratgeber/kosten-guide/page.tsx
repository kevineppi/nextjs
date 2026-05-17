import type { Metadata } from 'next'
import KostenGuide from '@/src-pages/ratgeber/KostenGuide'

export const metadata: Metadata = {
  title: 'Was kostet 3D-Druck 2026? Echte Preise + 6 Spartipps',
  description: 'Ehrlicher Preisrahmen: Wofür zahlt man wirklich? 6 Tricks für bis zu 30% Ersparnis. Mit Rechenbeispielen für Hobby- und Industrieprojekte.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/kosten-guide',
  },
  openGraph: {
    title: 'Was kostet 3D-Druck 2026? Echte Preise + 6 Spartipps',
    description: 'Ehrlicher Preisrahmen: Wofür zahlt man wirklich? 6 Tricks für bis zu 30% Ersparnis. Mit Rechenbeispielen für Hobby- und Industrieprojekte.',
    url: 'https://www.ek-druck.at/ratgeber/kosten-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Was kostet 3D-Druck 2026? Echte Preise + 6 Spartipps',
    description: 'Ehrlicher Preisrahmen: Wofür zahlt man wirklich? 6 Tricks für bis zu 30% Ersparnis. Mit Rechenbeispielen für Hobby- und Industrieprojekte.',
  },
}

export default function Page() {
  return <KostenGuide />
}
