import type { Metadata } from 'next'
import BranchenLanding from '@/components/landing/BranchenLanding'
import { getBranche } from '@/data/branchenData'
import { buildDachAlternates, STANDARD_ROBOTS, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

const branche = getBranche('energietechnik')!

export const metadata: Metadata = {
  title: branche.metaTitle,
  description: branche.metaDescription,
  keywords: [branche.primaryKeyword, ...branche.secondaryKeywords].join(', '),
  alternates: buildDachAlternates('/branchen/energietechnik'),
  openGraph: {
    title: branche.metaTitle,
    description: branche.metaDescription,
    url: 'https://www.ek-druck.at/branchen/energietechnik',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
        width: 1200,
        height: 630,
        alt: 'ekdruck – Energietechnik-Messemodelle aus dem 3D-Druck',
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


const SERVICE_LD = serviceSchema({
  serviceType: `3D-Druck für Energietechnik`,
  description: branche.metaDescription,
  url: 'https://www.ek-druck.at/branchen/energietechnik',
  lowPrice: '20',
  highPrice: '8000',
})

const FAQ_LD = faqSchema(
  branche.faqs.map((f) => ({ q: f.question, a: f.answer })),
)

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Branchen', url: '/branchen' },
  { name: branche.h1, url: '/branchen/energietechnik' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <BranchenLanding branche={branche} />
    </>
  )
}
