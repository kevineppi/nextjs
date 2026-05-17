import type { Metadata } from 'next'
import Messemodelle from '@/src-pages/Messemodelle'

export const metadata: Metadata = {
  title: 'Messemodelle drucken: 8-Tonnen-Maschine als Tisch-Exponat',
  description: 'Wenn Ihr Produkt zu groß für den Messestand ist: Wir drucken es maßstabsgetreu in 24h. Bruchsichere Materialien, Express DACH-weit. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle',
  },
  openGraph: {
    title: 'Messemodelle drucken: 8-Tonnen-Maschine als Tisch-Exponat',
    description: 'Wenn Ihr Produkt zu groß für den Messestand ist: Wir drucken es maßstabsgetreu in 24h. Bruchsichere Materialien, Express DACH-weit. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Messemodelle drucken: 8-Tonnen-Maschine als Tisch-Exponat',
    description: 'Wenn Ihr Produkt zu groß für den Messestand ist: Wir drucken es maßstabsgetreu in 24h. Bruchsichere Materialien, Express DACH-weit. Ab €30.',
  },
}

export default function Page() {
  return <Messemodelle />
}
