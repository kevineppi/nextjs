import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  robots: { index: false, follow: true }, // DACH-Noindex (Thin/Doorway, AT-Fokus)
  title: 'Messemodelle Zürich: 3D-Druck mit Schweizer Zollabwicklung',
  description: 'Aussteller in Zürich: Messemodelle aus Österreich inkl. Schweizer Zollabwicklung. FINISH, Z-2025, weitere. CHF-Verrechnung möglich.',
  alternates: { canonical: 'https://www.ek-druck.at/messemodelle/zuerich' },
  openGraph: {
    title: 'Messemodelle Zürich: 3D-Druck mit Schweizer Zollabwicklung',
    description: 'Aussteller in Zürich: Messemodelle aus Österreich inkl. Schweizer Zollabwicklung. FINISH, Z-2025, weitere. CHF-Verrechnung möglich.',
    url: 'https://www.ek-druck.at/messemodelle/zuerich',
    siteName: 'ekdruck · 3D-Druck Österreich', locale: 'de_AT', type: 'website',
  },
}

export default function Page() { return <MessemodellRegion /> }
