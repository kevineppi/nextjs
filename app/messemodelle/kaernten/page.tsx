import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Kärnten – Holzmesse Klagenfurt | ekdruck',
  description: 'Kärntner Aussteller: Modelle für Internationale Holzmesse, Baumesse & Herbstmesse Klagenfurt. Alpine Logistik über A10. Jetzt anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/kaernten',
  },
  openGraph: {
    title: 'Messemodelle Kärnten – Holzmesse Klagenfurt | ekdruck',
    description: 'Kärntner Aussteller: Modelle für Internationale Holzmesse, Baumesse & Herbstmesse Klagenfurt. Alpine Logistik über A10. Jetzt anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/kaernten',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
