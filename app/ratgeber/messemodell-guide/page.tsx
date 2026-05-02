import type { Metadata } from 'next'
import MessemodellGuide from '@/src-pages/ratgeber/MessemodellGuide'

export const metadata: Metadata = {
  title: 'Messemodell planen: Kosten, Timeline & Material [2026]',
  description: 'Checkliste für die Messevorbereitung. Messemodell ab €30 – pünktlich zur Messe.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/messemodell-guide',
  },
  openGraph: {
    title: 'Messemodell planen: Kosten, Timeline & Material [2026]',
    description: 'Checkliste für die Messevorbereitung. Messemodell ab €30 – pünktlich zur Messe.',
    url: 'https://www.ek-druck.at/ratgeber/messemodell-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Messemodell planen: Kosten, Timeline & Material [2026]',
    description: 'Checkliste für die Messevorbereitung. Messemodell ab €30 – pünktlich zur Messe.',
  },
}

export default function Page() {
  return <MessemodellGuide />
}
