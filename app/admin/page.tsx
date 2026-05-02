import type { Metadata } from 'next'
import Admin from '@/src-pages/Admin'

export const metadata: Metadata = {
  title: 'Admin Dashboard | ekdruck',
  description: 'Interner Admin-Bereich.',
  alternates: {
    canonical: 'https://www.ek-druck.at/admin',
  },
  openGraph: {
    title: 'Admin Dashboard | ekdruck',
    description: 'Interner Admin-Bereich.',
    url: 'https://www.ek-druck.at/admin',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Dashboard | ekdruck',
    description: 'Interner Admin-Bereich.',
  },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <Admin />
}
