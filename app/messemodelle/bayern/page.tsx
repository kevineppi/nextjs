import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Bayern ★5,0 – BAU & SPS · 3h Lieferung',
  description: 'Messemodelle für Bayern ✓ BAU München ✓ SPS Nürnberg ✓ IFAT ✓ Lieferung in 3h ✓ ab €20. ★ 5,0 (31 Bew.) – ekdruck',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/bayern',
  },
  openGraph: {
    title: 'Messemodelle Bayern ★5,0 – BAU & SPS · 3h Lieferung',
    description: 'Messemodelle für Bayern ✓ BAU München ✓ SPS Nürnberg ✓ IFAT ✓ Lieferung in 3h ✓ ab €20. ★ 5,0 (31 Bew.) – ekdruck',
    url: 'https://www.ek-druck.at/messemodelle/bayern',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
