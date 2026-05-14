import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Magdeburg – Elbestadt ✓ | ekdruck',
  description: 'Messemodelle Magdeburg: SacroExpo, Wirtschaftsmessen. Express über A2 ✓ Angebot in 6h – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/magdeburg',
  },
  openGraph: {
    title: 'Messemodelle Magdeburg – Elbestadt ✓ | ekdruck',
    description: 'Messemodelle Magdeburg: SacroExpo, Wirtschaftsmessen. Express über A2 ✓ Angebot in 6h – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/magdeburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
