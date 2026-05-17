import type { Metadata } from 'next'
import Kaernten3DDruck from '@/src-pages/Kaernten3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Kärnten: A10-Versand nach Klagenfurt & Villach',
  description: 'Drucken lassen aus OÖ, Lieferung über A10 nach Klagenfurt/Villach in 24-48h. Für Holzindustrie, Tourismus, Maschinenbau. Ab €20.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-kaernten',
  },
  openGraph: {
    title: '3D-Druck Kärnten: A10-Versand nach Klagenfurt & Villach',
    description: 'Drucken lassen aus OÖ, Lieferung über A10 nach Klagenfurt/Villach in 24-48h. Für Holzindustrie, Tourismus, Maschinenbau. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-kaernten',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Kärnten: A10-Versand nach Klagenfurt & Villach',
    description: 'Drucken lassen aus OÖ, Lieferung über A10 nach Klagenfurt/Villach in 24-48h. Für Holzindustrie, Tourismus, Maschinenbau. Ab €20.',
  },
}

export default function Page() {
  return <Kaernten3DDruck />
}
