import type { Metadata } from 'next'
import Messemodelle from '@/src-pages/Messemodelle'

export const metadata: Metadata = {
  title: 'Messemodelle, Exponate & Präsentationsmodelle | 3D-Druck Express 24h | ekdruck',
  description: 'Messemodelle drucken lassen: Ausstellungsmodelle, Schaumodelle & Exponate für DACH-Messen. Ab €30 · Express 24h · bis 2m+ · bruchsicher · ★5,0 (31 Bewertungen). Industriemodelle, Schnittmodelle, Standmodelle.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle',
  },
  openGraph: {
    title: 'Messemodelle, Exponate & Präsentationsmodelle | 3D-Druck Express 24h | ekdruck',
    description: 'Messemodelle drucken lassen: Ausstellungsmodelle, Schaumodelle & Exponate für DACH-Messen. Ab €30 · Express 24h · bis 2m+ · bruchsicher · ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/messemodelle',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Messemodelle, Exponate & Präsentationsmodelle | 3D-Druck Express 24h | ekdruck',
    description: 'Messemodelle drucken lassen: Ausstellungsmodelle, Schaumodelle & Exponate für DACH-Messen. Ab €30 · Express 24h · bis 2m+ · bruchsicher · ★5,0 (31 Bewertungen).',
  },
}

export default function Page() {
  return <Messemodelle />
}
