import type { Metadata } from 'next'
import Firmenkunden from '@/src-pages/Firmenkunden'

export const metadata: Metadata = {
  title: 'B2B-3D-Druck Österreich: Rahmenvertrag, UID, NDA, 30 Tage Ziel',
  description: 'Für Industriekunden: Rahmenverträge, Mengenrabatte ab 5 Stück, NDA-Bereitschaft, UID-Rechnung, Zahlungsziel 30 Tage. Ansprechpartner direkt.',
  alternates: {
    canonical: 'https://www.ek-druck.at/firmenkunden',
  },
  openGraph: {
    title: 'B2B-3D-Druck Österreich: Rahmenvertrag, UID, NDA, 30 Tage Ziel',
    description: 'Für Industriekunden: Rahmenverträge, Mengenrabatte ab 5 Stück, NDA-Bereitschaft, UID-Rechnung, Zahlungsziel 30 Tage. Ansprechpartner direkt.',
    url: 'https://www.ek-druck.at/firmenkunden',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B-3D-Druck Österreich: Rahmenvertrag, UID, NDA, 30 Tage Ziel',
    description: 'Für Industriekunden: Rahmenverträge, Mengenrabatte ab 5 Stück, NDA-Bereitschaft, UID-Rechnung, Zahlungsziel 30 Tage. Ansprechpartner direkt.',
  },
}

export default function Page() {
  return <Firmenkunden />
}
