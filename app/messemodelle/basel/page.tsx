import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  robots: { index: false, follow: true }, // DACH-Noindex (Thin/Doorway, AT-Fokus)
  title: 'Messemodelle Basel: Swissbau, PRODEX, ILMAC · Zoll inklusive',
  description: 'Basler Aussteller: Swissbau, PRODEX (Werkzeugmaschinen), ILMAC (Pharma), MUBA. Schweizer Zollabwicklung im Preis enthalten.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/basel' },
  openGraph: {
    title: 'Messemodelle Basel: Swissbau, PRODEX, ILMAC · Zoll inklusive',
    description: 'Basler Aussteller: Swissbau, PRODEX (Werkzeugmaschinen), ILMAC (Pharma), MUBA. Schweizer Zollabwicklung im Preis enthalten.',
    url: 'https://www.ek-druck.at/messemodelle/basel',
    siteName: 'ekdruck · 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
