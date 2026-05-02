import type { Metadata } from 'next'
import VerfahrensVergleich from '@/src-pages/ratgeber/VerfahrensVergleich'

export const metadata: Metadata = {
  title: 'FDM vs SLA vs SLS – Welches Verfahren passt? [2026]',
  description: 'Falsches Verfahren kostet doppelt. FDM, SLA, SLS – Vergleichstabelle und Empfehlung für Ihren Projekttyp.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/verfahrens-vergleich',
  },
  openGraph: {
    title: 'FDM vs SLA vs SLS – Welches Verfahren passt? [2026]',
    description: 'Falsches Verfahren kostet doppelt. FDM, SLA, SLS – Vergleichstabelle und Empfehlung für Ihren Projekttyp.',
    url: 'https://www.ek-druck.at/ratgeber/verfahrens-vergleich',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDM vs SLA vs SLS – Welches Verfahren passt? [2026]',
    description: 'Falsches Verfahren kostet doppelt. FDM, SLA, SLS – Vergleichstabelle und Empfehlung für Ihren Projekttyp.',
  },
}

export default function Page() {
  return <VerfahrensVergleich />
}
