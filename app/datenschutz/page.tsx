import type { Metadata } from 'next'
import Datenschutz from '@/src-pages/Datenschutz'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | ekdruck e.U.',
  description:
    'Datenschutzerklärung von ekdruck e.U. Welche Daten wir verarbeiten, wozu, auf welcher Rechtsgrundlage und welche Rechte Sie haben.',
  alternates: { canonical: 'https://www.ek-druck.at/datenschutz' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <Datenschutz />
}
