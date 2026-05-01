import type { Metadata } from 'next'
import Materialien from '@/src-pages/Materialien'

export const metadata: Metadata = {
  title: '3D-Druck Materialien: PLA vs PETG vs ABS [2026 Vergleich]',
  description: 'Welches 3D-Druck Material passt? PLA (ab €15), PETG (outdoor-fest), ABS (hitzebeständig). Vergleich mit Kosten & Empfehlung.',
  alternates: {
    canonical: 'https://ek-druck.at/3d-druck-materialien',
  },
  openGraph: {
    title: '3D-Druck Materialien: PLA vs PETG vs ABS [2026 Vergleich]',
    description: 'Welches 3D-Druck Material passt? PLA (ab €15), PETG (outdoor-fest), ABS (hitzebeständig). Vergleich mit Kosten & Empfehlung.',
    url: 'https://ek-druck.at/3d-druck-materialien',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Materialien: PLA vs PETG vs ABS [2026 Vergleich]',
    description: 'Welches 3D-Druck Material passt? PLA (ab €15), PETG (outdoor-fest), ABS (hitzebeständig). Vergleich mit Kosten & Empfehlung.',
  },
}

export default function Page() {
  return <Materialien />
}
