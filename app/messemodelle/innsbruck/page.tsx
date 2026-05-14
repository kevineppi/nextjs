import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Innsbruck ★5,0 – Interalpin · 24h',
  description: 'Messemodelle für Innsbruck ✓ Interalpin ✓ FAFGA ✓ bruchsicher ✓ Angebot in 6h ✓ ab €20. ★ 5,0 (31 Bewertungen) | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/innsbruck',
  },
  openGraph: {
    title: 'Messemodelle Innsbruck ★5,0 – Interalpin · 24h',
    description: 'Messemodelle für Innsbruck ✓ Interalpin ✓ FAFGA ✓ bruchsicher ✓ Angebot in 6h ✓ ab €20. ★ 5,0 (31 Bewertungen) | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/innsbruck',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
