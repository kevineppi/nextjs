import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Düsseldorf – MEDICA & drupa ✓ | ekdruck',
  description: 'Messemodelle für Düsseldorfer Leitmessen: MEDICA, drupa, K, boot. Günstiger als lokal ✓ Jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/duesseldorf',
  },
  openGraph: {
    title: 'Messemodelle Düsseldorf – MEDICA & drupa ✓ | ekdruck',
    description: 'Messemodelle für Düsseldorfer Leitmessen: MEDICA, drupa, K, boot. Günstiger als lokal ✓ Jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/duesseldorf',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
