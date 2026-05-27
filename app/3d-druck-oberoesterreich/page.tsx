import type { Metadata } from 'next'
import Oberoesterreich3DDruck from '@/src-pages/Oberoesterreich3DDruck'
import { buildATOnlyAlternates, STANDARD_ROBOTS } from '@/lib/seo'

export const metadata: Metadata = {
  title: '3D-Druck Oberösterreich: Same-Day-Abholung in Gunskirchen',
  description: 'Lokaler 3D-Druck-Anbieter in OÖ. Abholung in Gunskirchen am selben Tag, Lieferung nach Linz/Wels/Steyr in 24h. Persönliche Beratung. Ab €20.',
  alternates: buildATOnlyAlternates('/3d-druck-oberoesterreich'),
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: '3D-Druck Oberösterreich: Same-Day-Abholung in Gunskirchen',
    description: 'Lokaler 3D-Druck-Anbieter in OÖ. Abholung in Gunskirchen am selben Tag, Lieferung nach Linz/Wels/Steyr in 24h. Persönliche Beratung. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-oberoesterreich',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Oberösterreich: Same-Day-Abholung in Gunskirchen',
    description: 'Lokaler 3D-Druck-Anbieter in OÖ. Abholung in Gunskirchen am selben Tag, Lieferung nach Linz/Wels/Steyr in 24h. Persönliche Beratung. Ab €20.',
  },
}

export default function Page() {
  return <Oberoesterreich3DDruck />
}
