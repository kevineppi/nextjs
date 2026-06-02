import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import { orgSchema, websiteSchema } from '@/lib/seo'

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
      <head>
        {/* Site-wide LocalBusiness + Organization (ratings, hours, address, areaServed) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema()) }}
        />
        {/* WebSite — für SiteLinks-Searchbox-Eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}