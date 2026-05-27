import type { Metadata } from 'next'
import Wien3DDruck from '@/src-pages/Wien3DDruck'
import { buildATOnlyAlternates, STANDARD_ROBOTS } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Wien – Versand morgen früh per ÖPOST | ekdruck',
  description: '3D-Druck-Anbieter mit Lieferung nach Wien: Druck heute, Zustellung morgen früh per ÖPOST. Auch Express-Kurier in 6h möglich. Ab €20.',
  alternates: buildATOnlyAlternates('/3d-druck-wien'),
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: '3D-Druck Wien – Versand morgen früh per ÖPOST | ekdruck',
    description: '3D-Druck-Anbieter mit Lieferung nach Wien: Druck heute, Zustellung morgen früh per ÖPOST. Auch Express-Kurier in 6h möglich. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-wien',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Wien – Versand morgen früh per ÖPOST | ekdruck',
    description: '3D-Druck-Anbieter mit Lieferung nach Wien: Druck heute, Zustellung morgen früh per ÖPOST. Auch Express-Kurier in 6h möglich. Ab €20.',
  },
}

export default function Page() {
  return <Wien3DDruck />
}
