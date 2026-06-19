import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  robots: { index: false, follow: true }, // DACH-Noindex (Thin/Doorway, AT-Fokus)
  title: 'Messemodelle Frankfurt: Automechanika, Ambiente, Achema',
  description: 'Für Aussteller der Messe Frankfurt: Automechanika, Ambiente, Buchmesse, Achema, Light+Building. Versand 48h aus Österreich. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/frankfurt',
  },
  openGraph: {
    title: 'Messemodelle Frankfurt: Automechanika, Ambiente, Achema',
    description: 'Für Aussteller der Messe Frankfurt: Automechanika, Ambiente, Buchmesse, Achema, Light+Building. Versand 48h aus Österreich. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/frankfurt',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
