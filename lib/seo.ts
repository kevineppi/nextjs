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
 *
 * 2026-06-02: Konsolidiert die früher in OrganizationSchema.tsx, StructuredData.tsx und
 * AggregateRatingSchema.tsx verstreuten Schemas in EIN Master-Schema mit @id-Anker.
 * Inkludiert die 9 öffentlich verfügbaren Google-Reviews für Review-Snippets in SERPs.
 */
const REAL_GOOGLE_REVIEWS = [
  { author: 'Hannah E.', date: '2025-01-15', body: 'Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..' },
  { author: 'Simone G.', date: '2025-01-10', body: 'Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!' },
  { author: 'Klaus F.', date: '2025-01-12', body: 'Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.' },
  { author: 'Silvio T.', date: '2025-01-18', body: 'Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Preis Leistung ist einfach Super.' },
  { author: 'Ing. Rocco Skombor BSc', date: '2024-12-20', body: 'Alles hat wunderbar geklappt. Kundenservice sehr professionell. Kann ich weiter empfehlen!' },
  { author: 'Christian Steller', date: '2024-12-15', body: 'Ich bin absolut begeistert von ekDruck! Die Qualität ist erstklassig, jedes Detail wird sehr präzise und sauber umgesetzt. Die Kommunikation war von Anfang an ausgesprochen freundlich und professionell.' },
  { author: 'Sadin Ramic', date: '2024-12-10', body: 'Kompetent und motiviert! Falls man in Richtung 3D Druck etwas braucht, ist man bei Kevin gut aufgehoben!' },
  { author: 'Gertude Emirich', date: '2024-12-05', body: 'Persönlich, sehr kompetente Beratung. Individuelle Dekoantikel in verschiedenen Ausführungen und nach Wunsch - sehr empfehlenswert!' },
  { author: 'Georg Obereder', date: '2024-11-28', body: 'Tolle Produkte Made in Austria, wo nix unmöglich ist!' },
] as const

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: 'ekdruck e.U.',
  alternateName: 'ek-druck',
  legalName: 'ekdruck e.U.',
  url: SITE_BASE,
  logo: `${SITE_BASE}/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png`,
  image: `${SITE_BASE}/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png`,
  description:
    'FDM, SLA und SLS 3D-Druck-Service aus Gunskirchen, Oberösterreich. Architekturmodelle, Messemodelle, Prototypen und Kleinserien mit Express 24h Lieferung in ganz Österreich.',
  foundingDate: '2024',
  telephone: '+43 676 5517197',
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
    latitude: 48.1295,
    longitude: 13.9372,
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
    { '@type': 'Country', name: 'Österreich' },
    { '@type': 'Country', name: 'Deutschland' },
    { '@type': 'Country', name: 'Schweiz' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+43 676 5517197',
    email: 'office@ek-druck.at',
    availableLanguage: ['German', 'English'],
  },
  founder: {
    '@type': 'Person',
    name: 'Kevin Eppensteiner',
    url: `${SITE_BASE}/ueber-uns`,
    jobTitle: 'Gründer & Geschäftsführer',
  },
  knowsAbout: [
    '3D-Druck',
    'FDM-Druck',
    'Architekturmodelle',
    'Messemodelle',
    'Rapid Prototyping',
    'Industriemodelle',
    'Maschinenbau-Modelle',
    'PLA',
    'PETG',
    'ABS',
    'TPU',
    'Carbon-PA',
  ],
  sameAs: [
    'https://firmen.wko.at/ekdruck-eu-3d--druck-dienstleistung/oberösterreich/',
    'https://at.trustpilot.com/review/www.ek-druck.at',
    'https://www.firmenabc.at/ekdruck-e-u_BBVcp',
    'https://www.herold.at/gelbe-seiten/gunskirchen/nck9b/ek-druck/',
    'https://www.instagram.com/ekdruck/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '31',
    bestRating: '5',
    worstRating: '1',
  },
  review: REAL_GOOGLE_REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.body,
    datePublished: r.date,
  })),
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
