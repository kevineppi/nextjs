/**
 * SEO Helpers — Single Source of Truth für sitewide SEO-Patterns
 * ──────────────────────────────────────────────────────────────────
 *
 * Hauptzweck:
 *   1. buildAlternates() — kanonische Hreflang-Setzung für DACH
 *   2. SITE_BASE — eine Stelle für die Domain
 *   3. Canonical-Konsistenz: jede Page-Builder-Funktion nutzt dieses File
 *
 * Hreflang-Strategie für ek-druck (Stand 2026-05-26):
 *   - Content ist sprachlich identisch für alle DACH-Locales (Hochdeutsch)
 *   - Daher: Self-Referenced Hreflang. Eine URL für alle 3 Märkte.
 *   - Vorteile:
 *       * Google versteht "diese Seite ist für AT, DE und CH gleichermaßen"
 *       * Verhindert Duplicate-Content-Probleme zwischen Suchmärkten
 *       * Aktiviert Cross-Border-Sichtbarkeit ohne Duplikat-Pages
 *   - x-default → AT-Hauptzielmarkt
 *
 * Wann hreflang NICHT verwendet wird:
 *   - Stadt-Pages mit explizitem Geo-Bezug (z.B. /3d-druck-wien)
 *     diese sind exklusiv für AT-User → nur de-AT
 *   - Schweiz-Messe-Städte (z.B. /messemodelle/zuerich) → nur de-CH
 *   - Deutschland-Messe-Städte (z.B. /messemodelle/muenchen) → nur de-DE
 */

export const SITE_BASE = 'https://www.ek-druck.at' as const

export type Locale = 'de-AT' | 'de-DE' | 'de-CH' | 'x-default'

/**
 * Generic DACH-wide alternates — für Service-, Branchen-, Trust-Pages.
 * Selbe URL wird für alle 3 Locales gemeldet (Content sprach-identisch).
 *
 * @param path z.B. '/branchen/maschinenbau' (mit führendem Slash)
 */
export const buildDachAlternates = (path: string) => {
  const url = `${SITE_BASE}${path}`
  return {
    canonical: url,
    languages: {
      'de-AT': url,
      'de-DE': url,
      'de-CH': url,
      'x-default': url,
    },
  } as const
}

/**
 * AT-exklusive alternates — für Bundesland-Pages oder Stadt-Pages
 * mit explizitem AT-Geo-Bezug. Diese werden NICHT für DE/CH-User
 * ausgespielt — Google soll diese URLs nur für AT-Suchen ranken.
 */
export const buildATOnlyAlternates = (path: string) => {
  const url = `${SITE_BASE}${path}`
  return {
    canonical: url,
    languages: {
      'de-AT': url,
      'x-default': url,
    },
  } as const
}

/**
 * DE-exklusive alternates — für DE-Messe-Städte (München, Berlin, etc.)
 */
export const buildDEOnlyAlternates = (path: string) => {
  const url = `${SITE_BASE}${path}`
  return {
    canonical: url,
    languages: {
      'de-DE': url,
      'x-default': url,
    },
  } as const
}

/**
 * CH-exklusive alternates — für CH-Messe-Städte (Zürich, Basel, etc.)
 */
export const buildCHOnlyAlternates = (path: string) => {
  const url = `${SITE_BASE}${path}`
  return {
    canonical: url,
    languages: {
      'de-CH': url,
      'x-default': url,
    },
  } as const
}

/**
 * Robots-Defaults — überall gleich
 */
export const STANDARD_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
  },
} as const
