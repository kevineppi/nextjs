import type { Metadata } from 'next'
import VerfahrensVergleich from '@/src-pages/ratgeber/VerfahrensVergleich'

export const metadata: Metadata = {
  title: 'FDM, SLA oder SLS? Verfahren wählen ohne doppelt zu zahlen',
  description: 'Welches 3D-Druck-Verfahren passt zu Ihrem Projekt? Vergleichstabelle FDM/SLA/SLS mit Detailgröße, Festigkeit, Kosten und Materialspektrum.',
  alternates: {
    canonical: 'https://www.ek-druck.at/ratgeber/verfahrens-vergleich',
  },
  openGraph: {
    title: 'FDM, SLA oder SLS? Verfahren wählen ohne doppelt zu zahlen',
    description: 'Welches 3D-Druck-Verfahren passt zu Ihrem Projekt? Vergleichstabelle FDM/SLA/SLS mit Detailgröße, Festigkeit, Kosten und Materialspektrum.',
    url: 'https://www.ek-druck.at/ratgeber/verfahrens-vergleich',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDM, SLA oder SLS? Verfahren wählen ohne doppelt zu zahlen',
    description: 'Welches 3D-Druck-Verfahren passt zu Ihrem Projekt? Vergleichstabelle FDM/SLA/SLS mit Detailgröße, Festigkeit, Kosten und Materialspektrum.',
  },
}

export default function Page() {
  return <VerfahrensVergleich />
}
