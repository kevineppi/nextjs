import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Tirol – Interalpin & FAFGA | ekdruck',
  description: 'Tiroler Aussteller: Standmodelle für Interalpin, FAFGA & Baumesse Innsbruck. Bruchsichere Alpenverpackung inklusive. Jetzt anfragen.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/tirol',
  },
  openGraph: {
    title: 'Messemodelle Tirol – Interalpin & FAFGA | ekdruck',
    description: 'Tiroler Aussteller: Standmodelle für Interalpin, FAFGA & Baumesse Innsbruck. Bruchsichere Alpenverpackung inklusive. Jetzt anfragen.',
    url: 'https://www.ek-druck.at/messemodelle/tirol',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
