import type { Metadata } from 'next'
import Auth from '@/src-pages/Auth'

export const metadata: Metadata = {
  title: 'Login | ekdruck',
  description: 'Login für den Admin-Bereich.',
  alternates: {
    canonical: 'https://ek-druck.at/auth',
  },
  openGraph: {
    title: 'Login | ekdruck',
    description: 'Login für den Admin-Bereich.',
    url: 'https://ek-druck.at/auth',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login | ekdruck',
    description: 'Login für den Admin-Bereich.',
  },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <Auth />
}
