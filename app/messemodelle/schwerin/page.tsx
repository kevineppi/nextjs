import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Schwerin – MV Landeshauptstadt | ekdruck',
  description: 'Messemodelle Schwerin: MeLa, Wirtschaftsforum MV. Robuste Lieferung ✓ Express möglich – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/schwerin',
  },
  openGraph: {
    title: 'Messemodelle Schwerin – MV Landeshauptstadt | ekdruck',
    description: 'Messemodelle Schwerin: MeLa, Wirtschaftsforum MV. Robuste Lieferung ✓ Express möglich – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/schwerin',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
