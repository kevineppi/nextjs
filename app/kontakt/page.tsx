import type { Metadata } from 'next'
import Kontakt from '@/src-pages/Kontakt'

export const metadata: Metadata = {
  title: 'Kontakt & Anfrage | 3D-Druck Angebot in 6h | ekdruck',
  description: '3D-Druck Anfrage stellen → Kostenloses Angebot in 6h ✓ Persönliche Beratung ✓ Tel: +43 676 5517197 ✓ Express 24h möglich',
  alternates: {
    canonical: 'https://ek-druck.at/kontakt',
  },
  openGraph: {
    title: 'Kontakt & Anfrage | 3D-Druck Angebot in 6h | ekdruck',
    description: '3D-Druck Anfrage stellen → Kostenloses Angebot in 6h ✓ Persönliche Beratung ✓ Tel: +43 676 5517197 ✓ Express 24h möglich',
    url: 'https://ek-druck.at/kontakt',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt & Anfrage | 3D-Druck Angebot in 6h | ekdruck',
    description: '3D-Druck Anfrage stellen → Kostenloses Angebot in 6h ✓ Persönliche Beratung ✓ Tel: +43 676 5517197 ✓ Express 24h möglich',
  },
}

export default function Page() {
  return <Kontakt />
}
