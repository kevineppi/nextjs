import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Wien ★5,0 – 24h Express · Angebot in 6h',
  description: 'Messemodelle für Wien ✓ Reed Messe ✓ Express 24h ✓ bruchsicher ✓ Angebot in 6h ✓ ab €20. ★ 5,0 (31 Bewertungen) – ekdruck Österreich',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/wien',
  },
  openGraph: {
    title: 'Messemodelle Wien ★5,0 – 24h Express · Angebot in 6h',
    description: 'Messemodelle für Wien ✓ Reed Messe ✓ Express 24h ✓ bruchsicher ✓ Angebot in 6h ✓ ab €20. ★ 5,0 (31 Bewertungen) – ekdruck Österreich',
    url: 'https://www.ek-druck.at/messemodelle/wien',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
