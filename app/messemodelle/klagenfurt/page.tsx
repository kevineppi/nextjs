import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Klagenfurt ★5,0 – Holzmesse · 24h',
  description: 'Messemodelle für Klagenfurt ✓ Holzmesse ✓ Baumesse ✓ Alpine A10-Logistik ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/klagenfurt',
  },
  openGraph: {
    title: 'Messemodelle Klagenfurt ★5,0 – Holzmesse · 24h',
    description: 'Messemodelle für Klagenfurt ✓ Holzmesse ✓ Baumesse ✓ Alpine A10-Logistik ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/klagenfurt',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
