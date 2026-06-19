import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Düsseldorf: für MEDICA, drupa, K, boot, glasstec',
  description: 'Aussteller in Düsseldorf: MEDICA, drupa, K, boot, glasstec, EuroCIS. Versand 48h aus Österreich, günstiger als lokale Anbieter.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/duesseldorf',
  },
  openGraph: {
    title: 'Messemodelle Düsseldorf: für MEDICA, drupa, K, boot, glasstec',
    description: 'Aussteller in Düsseldorf: MEDICA, drupa, K, boot, glasstec, EuroCIS. Versand 48h aus Österreich, günstiger als lokale Anbieter.',
    url: 'https://www.ek-druck.at/messemodelle/duesseldorf',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
