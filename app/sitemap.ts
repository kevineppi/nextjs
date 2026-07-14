/**
 * Dynamische Sitemap · Next.js native Sitemap-Generator
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-26 (K5-Refactor aus 5-Instanzen-Audit):
 *   Statt statischer public/sitemap.xml liefert Next.js bei /sitemap.xml
 *   diese dynamisch generierte Sitemap aus · mit aktuellem lastmod-Datum
 *   pro URL. Verbessert Crawl-Effizienz (Google priorisiert frische URLs).
 *
 * Konvention:
 *   - lastModBuild = build-Zeitpunkt (für alle Pages die "leben")
 *   - lastModStatic = explizites Datum für selten geänderte Pages
 *
 * Bei jedem Vercel-Deploy wird lastModBuild automatisch aktualisiert.
 */

import type { MetadataRoute } from 'next'
import { branchen } from '@/data/branchenData'
import { cases } from '@/data/realCases'

const SITE = 'https://www.ek-druck.at'

export default function sitemap(): MetadataRoute.Sitemap {
  // Build-Zeitpunkt als lastMod für "lebende" Pages
  const buildDate = new Date()

  // ─── KERN-SEITEN ──────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: buildDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE}/messemodelle`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/architekturmodelle`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/architekturmodelle-abo`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/prototyping`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/firmenkunden`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/einzelanfertigungen`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE}/kostenrechner`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/kontakt`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/3d-druck-materialien`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/referenzen`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE}/ueber-uns`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // ─── TRUST-PAGES ──────────────────────────────────────────────
  const trustPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/qualitaet`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/preise`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/cases`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/checkliste`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.85 },
  ]

  // ─── CASE-DETAIL-PAGES · aus realCases.ts generiert ───────────
  const caseDetailPages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${SITE}/cases/${c.slug}`,
    lastModified: buildDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ─── BRANCHEN-CLUSTER · aus branchenData.ts generiert ─────────
  const branchenHub: MetadataRoute.Sitemap = [
    { url: `${SITE}/branchen`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
  ]
  const branchenPages: MetadataRoute.Sitemap = branchen.map((b) => ({
    url: `${SITE}/branchen/${b.slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // ─── RATGEBER ─────────────────────────────────────────────────
  const ratgeberPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/ratgeber`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/ratgeber/massenmodell-lod-gebaeudedaten`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/ratgeber/datenaufbereitung-architekturmodell`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/ratgeber/material-guide`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/ratgeber/kosten-guide`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/ratgeber/verfahrens-vergleich`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/ratgeber/architekturmodell-guide`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/ratgeber/messemodell-guide`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/ratgeber/architekturmodell-flatrate`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE}/ratgeber/prototyping-guide`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
    // Skyscraper-Guide 2026-05-27: high-priority Long-Tail-Anchor für Material-Vergleichs-Cluster
    { url: `${SITE}/ratgeber/fdm-material-vergleich`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.95 },
    // Messemodell-Branchen-Spokes 2026-05-31 · Hub-and-Spoke-Architektur
    { url: `${SITE}/ratgeber/messemodell-maschinenbau`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/ratgeber/messemodell-schiffbau`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/ratgeber/messemodell-energietechnik`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/ratgeber/messemodell-anlagenbau`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE}/ratgeber/messemodell-automotive`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/ratgeber/messemodell-elektrotechnik`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.85 },
  ]

  // ─── BUNDESLAND-PAGES (AT-only) ───────────────────────────────
  const bundeslandPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/3d-druck-wien`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/3d-druck-oberoesterreich`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/3d-druck-steiermark`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/3d-druck-salzburg`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/3d-druck-kaernten`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE}/3d-druck-niederoesterreich`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE}/3d-druck-vorarlberg`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE}/3d-druck-burgenland`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
  ]

  // ─── MESSE-STADT-PAGES ────────────────────────────────────────
  const messeRegions = [
    // AT
    { slug: 'wien', prio: 0.7 },
    { slug: 'oberoesterreich', prio: 0.65 },
    { slug: 'steiermark', prio: 0.6 },
    { slug: 'salzburg', prio: 0.6 },
    { slug: 'graz', prio: 0.6 },
    { slug: 'linz', prio: 0.6 },
    // DE
    { slug: 'bayern', prio: 0.6 },
    { slug: 'muenchen', prio: 0.7 },
    { slug: 'nuernberg', prio: 0.6 },
    { slug: 'baden-wuerttemberg', prio: 0.6 },
    { slug: 'stuttgart', prio: 0.65 },
    { slug: 'nordrhein-westfalen', prio: 0.6 },
    { slug: 'duesseldorf', prio: 0.7 },
    { slug: 'koeln', prio: 0.6 },
    { slug: 'essen', prio: 0.6 },
    { slug: 'hessen', prio: 0.6 },
    { slug: 'frankfurt', prio: 0.7 },
    { slug: 'niedersachsen', prio: 0.6 },
    { slug: 'hannover', prio: 0.7 },
    { slug: 'berlin', prio: 0.7 },
    { slug: 'hamburg', prio: 0.6 },
    // CH
    { slug: 'zuerich', prio: 0.7 },
    { slug: 'basel', prio: 0.65 },
    { slug: 'bern', prio: 0.6 },
    { slug: 'st-gallen', prio: 0.6 },
    { slug: 'luzern', prio: 0.6 },
  ]
  const messeStadtPages: MetadataRoute.Sitemap = messeRegions.map((m) => ({
    url: `${SITE}/messemodelle/${m.slug}`,
    lastModified: buildDate,
    changeFrequency: 'monthly' as const,
    priority: m.prio,
  }))

  return [
    ...corePages,
    ...trustPages,
    ...branchenHub,
    ...branchenPages,
    ...caseDetailPages,
    ...ratgeberPages,
    ...bundeslandPages,
    ...messeStadtPages,
  ]
}
