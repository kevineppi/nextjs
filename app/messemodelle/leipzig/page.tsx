import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Leipzig – Buchmesse & Intec | ekdruck',
  description: 'Messemodelle Leipziger Messe: Buchmesse, denkmal, Intec, Cadeaux. Traditions-Messestadt ✓ Ab €20 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/leipzig',
  },
  openGraph: {
    title: 'Messemodelle Leipzig – Buchmesse & Intec | ekdruck',
    description: 'Messemodelle Leipziger Messe: Buchmesse, denkmal, Intec, Cadeaux. Traditions-Messestadt ✓ Ab €20 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/leipzig',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
