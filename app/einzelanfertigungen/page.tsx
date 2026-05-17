import type { Metadata } from 'next'
import Einzelanfertigungen from '@/src-pages/Einzelanfertigungen'

export const metadata: Metadata = {
  title: 'Ein einzelnes Bauteil drucken lassen – ab €20 in 24h',
  description: 'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder Skizze zum fertigen Unikat in 24h. Auch Ersatzteile, Sonderformen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/einzelanfertigungen',
  },
  openGraph: {
    title: 'Ein einzelnes Bauteil drucken lassen – ab €20 in 24h',
    description: 'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder Skizze zum fertigen Unikat in 24h. Auch Ersatzteile, Sonderformen.',
    url: 'https://www.ek-druck.at/einzelanfertigungen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ein einzelnes Bauteil drucken lassen – ab €20 in 24h',
    description: 'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder Skizze zum fertigen Unikat in 24h. Auch Ersatzteile, Sonderformen.',
  },
}

export default function Page() {
  return <Einzelanfertigungen />
}
