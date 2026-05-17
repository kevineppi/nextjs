import type { Metadata } from 'next'
import Burgenland3DDruck from '@/src-pages/Burgenland3DDruck'

export const metadata: Metadata = {
  title: '3D-Druck Burgenland: Versand Eisenstadt & Neusiedl in 24h',
  description: '3D-Druck mit ÖPOST-Versand nach Eisenstadt, Neusiedl, Mattersburg. Für Weinbau-Modelle, Industriebauteile, Tourismus. Ab €20.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-burgenland',
  },
  openGraph: {
    title: '3D-Druck Burgenland: Versand Eisenstadt & Neusiedl in 24h',
    description: '3D-Druck mit ÖPOST-Versand nach Eisenstadt, Neusiedl, Mattersburg. Für Weinbau-Modelle, Industriebauteile, Tourismus. Ab €20.',
    url: 'https://www.ek-druck.at/3d-druck-burgenland',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Burgenland: Versand Eisenstadt & Neusiedl in 24h',
    description: '3D-Druck mit ÖPOST-Versand nach Eisenstadt, Neusiedl, Mattersburg. Für Weinbau-Modelle, Industriebauteile, Tourismus. Ab €20.',
  },
}

export default function Page() {
  return <Burgenland3DDruck />
}
