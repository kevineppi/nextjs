/**
 * AuthorByline, Person-Schema + sichtbare Autor-Markierung
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-26 (K9 aus 5-Instanzen-Audit):
 *   E-E-A-T-Boost durch sichtbare Autor-Markierung + Person-Schema
 *   auf jeder Content-Page (Ratgeber, Cases, Branchen, Pricing-Guides).
 *
 * Server Component, inline Person-Schema rendert beim First-Render.
 *
 * Verwendung:
 *   <AuthorByline />                              // default Kevin
 *   <AuthorByline showDate publishedAt="2026-05-26" />
 *   <AuthorByline showDate updatedAt="2026-05-26" />
 */

import Link from 'next/link'
import { BRAND } from '@/data/brandVoice'

interface AuthorBylineProps {
  publishedAt?: string  // ISO-Date "2026-05-26"
  updatedAt?: string    // ISO-Date "2026-05-26"
  showDate?: boolean
  variant?: 'inline' | 'card'
}

const formatDate = (iso: string): string => {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('de-AT', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return iso
  }
}

const AuthorByline = ({
  publishedAt,
  updatedAt,
  showDate = false,
  variant = 'inline',
}: AuthorBylineProps) => {
  // ─── Person-Schema inline JSON-LD ───────────────────────────────
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: BRAND.founderName,
    jobTitle: 'Inhaber & Gründer ekdruck e.U.',
    worksFor: {
      '@type': 'Organization',
      name: BRAND.companyName,
      url: 'https://www.ek-druck.at',
    },
    url: 'https://www.ek-druck.at/ueber-uns',
    sameAs: ['https://www.linkedin.com/in/3d-druck/'],
    knowsAbout: [
      '3D-Druck',
      'FDM-Druck',
      'Architekturmodelle',
      'Messemodelle',
      'Industriemodelle',
      'CAD-Konstruktion',
    ],
  }

  if (variant === 'card') {
    // Card-Variant, sichtbarer Author-Block z.B. unter Article-H1
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="flex items-center gap-3 py-4 border-y border-border my-6">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <span className="font-bold text-sm">K</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold">
              <Link href="/ueber-uns" className="hover:text-primary transition-colors">
                {BRAND.founderName}
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">
              Inhaber {BRAND.companyName} · {BRAND.location.split(',')[0]}
            </p>
          </div>
          {showDate && (
            <div className="text-right text-xs text-muted-foreground shrink-0">
              {publishedAt && (
                <p>
                  Veröffentlicht: <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                </p>
              )}
              {updatedAt && (
                <p>
                  Aktualisiert: <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
                </p>
              )}
            </div>
          )}
        </div>
      </>
    )
  }

  // Inline-Variant, minimal, für oben/unten von Pages
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-3">
        <span>Von</span>
        <Link href="/ueber-uns" className="font-bold text-foreground hover:text-primary transition-colors">
          {BRAND.founderName}
        </Link>
        <span>· Inhaber {BRAND.companyName}</span>
        {showDate && publishedAt && (
          <>
            <span aria-hidden>·</span>
            <span>
              Veröffentlicht <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </span>
          </>
        )}
        {showDate && updatedAt && (
          <>
            <span aria-hidden>·</span>
            <span>
              Aktualisiert <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
            </span>
          </>
        )}
      </div>
    </>
  )
}

export default AuthorByline
