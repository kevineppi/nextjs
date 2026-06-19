import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Stuttgart: AMB, R+T, Intergastra, Retro Classics',
  description: 'Aussteller in Stuttgart: AMB, R+T, Intergastra, Retro Classics. Direktversand aus Vorarlberg-Nähe in 24-48h. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/stuttgart',
  },
  openGraph: {
    title: 'Messemodelle Stuttgart: AMB, R+T, Intergastra, Retro Classics',
    description: 'Aussteller in Stuttgart: AMB, R+T, Intergastra, Retro Classics. Direktversand aus Vorarlberg-Nähe in 24-48h. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/stuttgart',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
