import type { Metadata } from 'next'
import MaterialGuide from '@/src-pages/ratgeber/MaterialGuide'

export const metadata: Metadata = {
  title: 'PLA vs PETG vs ASA: das richtige Filament wählen [2026]',
  description: 'Falsches Material = doppelte Kosten. Direkter Vergleich PLA, PETG, ASA mit Temperatur, Festigkeit, Outdoor-Tauglichkeit und Anwendung.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/material-guide',
  },
  openGraph: {
    title: 'PLA vs PETG vs ASA: das richtige Filament wählen [2026]',
    description: 'Falsches Material = doppelte Kosten. Direkter Vergleich PLA, PETG, ASA mit Temperatur, Festigkeit, Outdoor-Tauglichkeit und Anwendung.',
    url: 'https://www.ek-druck.at/ratgeber/material-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLA vs PETG vs ASA: das richtige Filament wählen [2026]',
    description: 'Falsches Material = doppelte Kosten. Direkter Vergleich PLA, PETG, ASA mit Temperatur, Festigkeit, Outdoor-Tauglichkeit und Anwendung.',
  },
}

export default function Page() {
  return <MaterialGuide />
}
