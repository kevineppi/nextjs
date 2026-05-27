/**
 * (C) Dynamische Image-Sitemap — Supabase-gespeist
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-27: Replace der statischen public/sitemap-images.xml.
 * Vorher: 17 Einträge, 16× das gleiche Hero-Bild — Placebo, kein SEO-Wert.
 * Jetzt: pulled aus Supabase-Tabellen (references + reference_images),
 *        listet pro Referenz-Projekt alle echten Fotos mit Caption + Title.
 *
 * Caching:
 *   - revalidate = 3600 (1h ISR) — wenn neue Referenzen in DB landen,
 *     werden sie binnen 1h auch von Google's Image-Bot gesehen,
 *     OHNE neuen Deploy nötig.
 *
 * Hinweis: Die Page-URL (loc) ist /referenzen für alle Bilder, da die
 * Bilder dort im DOM eingebettet sind (Image-Sitemap-Konvention von Google).
 *
 * Falls in Zukunft Referenz-Detail-Pages /referenzen/[slug] kommen,
 * sollte loc auf die Detail-URL umgestellt werden — dann verteilt
 * Google die Image-Visibility pro Projekt.
 */

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const SITE = 'https://www.ek-druck.at'
const SUPABASE_URL = 'https://jkzrpjlfdsxvcfwhuoey.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprenJwamxmZHN4dmNmd2h1b2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NjMwNDcsImV4cCI6MjA3MzIzOTA0N30.A2LpuB8Wo7-I9YVIuESbfTsRUkAUGinrRPtHgg-f2rE'

// ISR: Re-fetch alle 60 Min — kompromiss zwischen Aktualität und Supabase-Last
export const revalidate = 3600

interface ReferenceRow {
  id: string
  title: string
  description: string | null
  industry: string
  material: string
  image_url: string | null
  is_active: boolean
}

interface ReferenceImageRow {
  id: string
  reference_id: string
  image_url: string
  alt_text: string | null
  is_primary: boolean
  sort_order: number
}

/**
 * XML-escape: Entity-Escape für 5 XML-Spezialzeichen.
 * Wichtig bei Caption-Text mit & oder " aus Supabase.
 */
function escapeXml(input: string | null | undefined): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Caption-Generator: kombiniert Material, Industry und Description
 * zu einer SEO-tauglichen Caption (Google empfiehlt 50-200 Zeichen).
 */
function buildCaption(ref: ReferenceRow, img: ReferenceImageRow): string {
  if (img.alt_text && img.alt_text.length > 10) return img.alt_text
  const desc = ref.description ? ref.description.slice(0, 120) : ''
  return `${ref.title} — ${ref.material}, ${ref.industry}${desc ? '. ' + desc : ''}`
}

function buildTitle(ref: ReferenceRow): string {
  return `${ref.title} — ekdruck 3D-Druck Referenz`
}

export async function GET() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

  // 1. Aktive Referenzen ziehen
  const { data: refs, error: refsErr } = await supabase
    .from('references')
    .select('id, title, description, industry, material, image_url, is_active')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })

  if (refsErr || !refs) {
    // Fallback: leere aber valide Sitemap statt 500-Error
    console.error('[sitemap-images] Supabase refs fetch failed:', refsErr)
    return new NextResponse(emptyXml(), {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    })
  }

  // 2. Zugehörige Bilder ziehen
  const refIds = refs.map((r) => r.id)
  const { data: images } = await supabase
    .from('reference_images')
    .select('id, reference_id, image_url, alt_text, is_primary, sort_order')
    .in('reference_id', refIds)
    .order('sort_order', { ascending: true })

  // 3. XML zusammenbauen
  // Konvention: alle Bilder unter /referenzen — bis Detail-Pages existieren
  const xmlParts: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    '',
    `  <!-- Image-Sitemap ek-druck.at — generiert ${new Date().toISOString()} -->`,
    `  <!-- ${refs.length} Referenzen mit insgesamt ${images?.length || 0} Bildern aus Supabase -->`,
    '',
    '  <url>',
    `    <loc>${SITE}/referenzen</loc>`,
  ]

  // Pro Referenz alle zugehörigen Bilder einfügen
  for (const ref of refs as ReferenceRow[]) {
    const refImages = (images as ReferenceImageRow[] | null)?.filter(
      (img) => img.reference_id === ref.id
    ) || []

    // Falls keine reference_images vorhanden: fallback auf ref.image_url
    if (refImages.length === 0 && ref.image_url) {
      xmlParts.push(
        '    <image:image>',
        `      <image:loc>${escapeXml(ref.image_url)}</image:loc>`,
        `      <image:caption>${escapeXml(buildCaption(ref, {} as ReferenceImageRow))}</image:caption>`,
        `      <image:title>${escapeXml(buildTitle(ref))}</image:title>`,
        '    </image:image>'
      )
      continue
    }

    for (const img of refImages) {
      xmlParts.push(
        '    <image:image>',
        `      <image:loc>${escapeXml(img.image_url)}</image:loc>`,
        `      <image:caption>${escapeXml(buildCaption(ref, img))}</image:caption>`,
        `      <image:title>${escapeXml(buildTitle(ref))}</image:title>`,
        '    </image:image>'
      )
    }
  }

  xmlParts.push('  </url>', '', '</urlset>')

  const xml = xmlParts.join('\n')

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Edge-Cache für 1h, CDN für 24h mit stale-while-revalidate
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}

function emptyXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- ekdruck Image-Sitemap — leer (Supabase fetch fehlgeschlagen oder noch keine aktiven Referenzen) -->
</urlset>`
}
