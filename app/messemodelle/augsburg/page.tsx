import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Augsburg – Express über A8 ✓ | ekdruck',
  description: 'Messemodelle Augsburg: Grindtec, Renexpo & Composites. Kurze Lieferwege über A8 ✓ Ab €20 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/augsburg',
  },
  openGraph: {
    title: 'Messemodelle Augsburg – Express über A8 ✓ | ekdruck',
    description: 'Messemodelle Augsburg: Grindtec, Renexpo & Composites. Kurze Lieferwege über A8 ✓ Ab €20 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/augsburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
