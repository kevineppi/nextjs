import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Hamburg: für SMM, WindEnergy, Internorga',
  description: 'Aussteller in Hamburg: SMM (Maritime), WindEnergy, Internorga, hanseboot. Maritime-Spezialmodelle aus Carbon-PA möglich. Ab €30.',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/hamburg',
  },
  openGraph: {
    title: 'Messemodelle Hamburg: für SMM, WindEnergy, Internorga',
    description: 'Aussteller in Hamburg: SMM (Maritime), WindEnergy, Internorga, hanseboot. Maritime-Spezialmodelle aus Carbon-PA möglich. Ab €30.',
    url: 'https://www.ek-druck.at/messemodelle/hamburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
