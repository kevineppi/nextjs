import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Graz: für Häuslbauer- & Herbstmesse Schwarzlsee',
  description: 'Aussteller in Graz: Modelle für Häuslbauermesse, Herbstmesse, BeSt³. A9-Direktversand binnen 24h. Bruchsicher für Standverkehr. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/graz',
  },
  openGraph: {
    title: 'Messemodelle Graz: für Häuslbauer- & Herbstmesse Schwarzlsee',
    description: 'Aussteller in Graz: Modelle für Häuslbauermesse, Herbstmesse, BeSt³. A9-Direktversand binnen 24h. Bruchsicher für Standverkehr. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/graz',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
