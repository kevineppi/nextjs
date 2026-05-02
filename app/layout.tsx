import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ek-druck.at'),
  title: {
    default: '3D-Druck Österreich | ekdruck',
    template: '%s',
  },
  description: '3D-Druck Service Österreich ★ 5.0/5 Google. Messemodelle, Architekturmodelle & Prototypen ab €20. Express 24h.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}