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

// ═══════════════════════════════════════════════════════════════════
// Schema.org JSON-LD Builders — Single Source of Truth
// ═══════════════════════════════════════════════════════════════════
//
// Diese Funktionen erzeugen produktionsreife JSON-LD Objekte mit korrekt
// gesetzten @id-Referenzen. Verwendung:
//   <script type="application/ld+json" dangerouslySetInnerHTML={{
//     __html: JSON.stringify(orgSchema())
//   }} />

export const ORG_ID = `${SITE_BASE}/#org` as const

/**
 * LocalBusiness + Organization — site-weit im Root-Layout einbinden.
 * Setzt @id auf ORG_ID — andere Schemas können darauf referenzieren.
 */
export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': ORG_ID,
  name: 'ekdruck e.U.',
  alternateName: 'ek-druck',
  legalName: 'ekdruck e.U.',
  url: SITE_BASE,
  logo: `${SITE_BASE}/logo.png`,
  image: `${SITE_BASE}/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png`,
  description:
    'FDM, SLA und SLS 3D-Druck-Service aus Gunskirchen, Oberösterreich. Architekturmodelle, Messemodelle, Prototypen und Kleinserien mit Express 24h Lieferung in ganz Österreich.',
  telephone: '+436765517197',
  email: 'office@ek-druck.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Negrellistraße 15',
    addressLocality: 'Gunskirchen',
    postalCode: '4623',
    addressRegion: 'Oberösterreich',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.111,
    longitude: 13.9,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: ['Bank Transfer', 'PayPal', 'Credit Card'],
  areaServed: [
    { '@type': 'Country', name: 'Austria' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Switzerland' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Kevin Eppensteiner',
    url: `${SITE_BASE}/ueber-uns`,
    jobTitle: 'Gründer & Geschäftsführer',
  },
  sameAs: [
    'https://firmen.wko.at/ekdruck-eu-3d--druck-dienstleistung/oberösterreich/',
    'https://at.trustpilot.com/review/www.ek-druck.at',
    'https://www.firmenabc.at/ekdruck-e-u_BBVcp',
    'https://www.herold.at/gelbe-seiten/gunskirchen/nck9b/ek-druck/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '31',
    bestRating: '5',
    worstRating: '1',
  },
})

/**
 * WebSite + SearchAction — für SiteLinks-Searchbox in SERPs.
 */
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_BASE}/#website`,
  name: 'ekdruck — 3D-Druck Österreich',
  url: SITE_BASE,
  publisher: { '@id': ORG_ID },
  inLanguage: 'de-AT',
})

/**
 * Service-Schema für die Hauptservice-Seiten
 * (architekturmodelle, messemodelle, prototyping, einzelanfertigungen)
 */
export const serviceSchema = (params: {
  serviceType: string
  description: string
  url: string
  lowPrice?: string
  highPrice?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: params.serviceType,
  description: params.description,
  url: params.url,
  provider: { '@id': ORG_ID },
  areaServed: [
    { '@type': 'Country', name: 'Austria' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Switzerland' },
  ],
  ...(params.lowPrice && params.highPrice
    ? {
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: params.lowPrice,
          highPrice: params.highPrice,
          offerCount: '1',
        },
      }
    : {}),
})

/**
 * LocalBusiness mit Region-Fokus für Bundesländer-Seiten
 * (3d-druck-wien, 3d-druck-oberoesterreich, etc.)
 */
export const regionalLocalBusinessSchema = (params: {
  region: string
  url: string
  description: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${params.url}#localbusiness`,
  name: `ekdruck e.U. — 3D-Druck für ${params.region}`,
  parentOrganization: { '@id': ORG_ID },
  url: params.url,
  description: params.description,
  telephone: '+436765517197',
  email: 'office@ek-druck.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Negrellistraße 15',
    addressLocality: 'Gunskirchen',
    postalCode: '4623',
    addressRegion: 'Oberösterreich',
    addressCountry: 'AT',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: params.region,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '31',
  },
})

/**
 * FAQ-Schema — verwendet für Service-Seiten mit FAQ-Block
 */
export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
})

/**
 * Breadcrumb-Schema — pro Unterseite
 */
export const breadcrumbSchema = (
  trail: Array<{ name: string; url: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url.startsWith('http') ? b.url : `${SITE_BASE}${b.url}`,
  })),
})
