import type { Metadata } from 'next'
import ArchitekturmodellRegion from '@/src-pages/ArchitekturmodellRegion'
import { regionalArchitekturData } from '@/data/regionalArchitekturData'
import { germanArchitekturData } from '@/data/germanArchitekturData'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

// 2026-06-04: Welle 9 · generateMetadata Server-Component für unique titles pro Region.
// Vorher: 'use client' page ohne metadata-Export → alle Sub-Regions erbten Default-Title
// (Semrush: 4 duplicate titles auf /kaernten, /steiermark, /vorarlberg, /wien).
// Jetzt: Server-Component generiert Region-Title aus regionalArchitekturData,
// ArchitekturmodellRegion (Client) wird als Child eingebunden.

type Params = { params: Promise<{ region: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { region } = await params
  const data =
    (regionalArchitekturData as Record<string, any>)[region] ||
    (germanArchitekturData as Record<string, any>)[region]
  // DACH-Noindex: nur AT-Regionen indexieren; deutsche Standortseiten auf noindex,follow
  const isAT = !!(regionalArchitekturData as Record<string, any>)[region]

  if (!data) {
    return {
      title: 'Architekturmodelle · Region nicht gefunden | ekdruck',
      robots: { index: false, follow: false },
    }
  }

  const title = data.metaTitle as string
  const description = data.metaDescription as string
  const url = `https://www.ek-druck.at/architekturmodelle/${region}`

  return {
    title,
    description,
    alternates: buildDachAlternates(`/architekturmodelle/${region}`),
    openGraph: {
      title,
      description,
      url,
      siteName: 'ekdruck · 3D-Druck Österreich',
      locale: 'de_AT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    // 2026-07-04 SEO Task 4b: nur die 6 behaltenen Standortseiten werden indexiert.
    // Alle anderen Regionen sind per 301 (next.config) auf /architekturmodelle weitergeleitet.
    robots: ['wien', 'linz', 'graz', 'salzburg', 'muenchen', 'stuttgart'].includes(region)
      ? STANDARD_ROBOTS
      : { index: false, follow: true },
  }
}

export default function Page() {
  return <ArchitekturmodellRegion />
}
