import type { Metadata } from 'next'
import MessemodellRegion from '@/src-pages/MessemodellRegion'

export const metadata: Metadata = {
  title: 'Messemodelle Brandenburg – ILA & Berlin-Nähe | ekdruck',
  description: 'Messemodelle Brandenburg: ILA Berlin, Wirtschaftsforen. Berlin-Nähe ✓ Express über A9 – jetzt anfragen!',
  alternates: {
    canonical: 'https://www.ek-druck.at/messemodelle/brandenburg',
  },
  openGraph: {
    title: 'Messemodelle Brandenburg – ILA & Berlin-Nähe | ekdruck',
    description: 'Messemodelle Brandenburg: ILA Berlin, Wirtschaftsforen. Berlin-Nähe ✓ Express über A9 – jetzt anfragen!',
    url: 'https://www.ek-druck.at/messemodelle/brandenburg',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function Page() {
  return <MessemodellRegion />
}
