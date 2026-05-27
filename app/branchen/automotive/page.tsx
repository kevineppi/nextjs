import type { Metadata } from 'next'
import BranchenLanding from '@/components/landing/BranchenLanding'
import { getBranche } from '@/data/branchenData'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const branche = getBranche('automotive')!

export const metadata: Metadata = {
  title: branche.metaTitle,
  description: branche.metaDescription,
  keywords: [branche.primaryKeyword, ...branche.secondaryKeywords].join(', '),
  alternates: buildDachAlternates('/branchen/automotive'),
  openGraph: {
    title: branche.metaTitle,
    description: branche.metaDescription,
    url: 'https://www.ek-druck.at/branchen/automotive',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
        width: 1200,
        height: 630,
        alt: 'ekdruck – Automotive-Messemodelle aus dem 3D-Druck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: branche.metaTitle,
    description: branche.metaDescription,
  },
  robots: STANDARD_ROBOTS,
}

export default function Page() {
  return <BranchenLanding branche={branche} />
}
