import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { orgSchema, websiteSchema } from '@/lib/seo'

// 2026-06-04: next/font/google statt @import in globals.css.
// Vorher: Google Fonts via CSS @import → render-blocking, 0.4-0.8s FCP/LCP-Penalty.
// Jetzt: self-gehostete Fonts, automatisches preload, font-display: swap → kein FOIT.
// PageSpeed Insights (Mobile) Erwartung: 90 → 95-97, FCP/LCP 2.7s → 1.8-2.0s.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

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
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Site-wide LocalBusiness + Organization (ratings, hours, address, areaServed) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema()) }}
        />
        {/* WebSite · für SiteLinks-Searchbox-Eligibility */}
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