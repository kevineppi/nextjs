import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Potsdam – Berlin-Brandenburg ✓ | ekdruck',
  description: 'Messemodelle Potsdam: ILA Berlin, Wirtschaftsforen. Berlin-Anbindung ✓ Express über A10 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/potsdam',
  },
  openGraph: {
    title: 'Messemodelle Potsdam – Berlin-Brandenburg ✓ | ekdruck',
    description: 'Messemodelle Potsdam: ILA Berlin, Wirtschaftsforen. Berlin-Anbindung ✓ Express über A10 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/potsdam',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
