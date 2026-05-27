/**
 * AggregateRatingSchema — Server-side inline JSON-LD
 * 2026-05-26: K1-Refactor — von 'use client' + useEffect zu Server Component
 */

interface AggregateRatingSchemaProps {
  ratingValue: number
  ratingCount: number
  bestRating?: number
  worstRating?: number
}

const AggregateRatingSchema = ({
  ratingValue,
  ratingCount,
  bestRating = 5,
  worstRating = 1,
}: AggregateRatingSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ekdruck e.U.',
    image: 'https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png',
    url: 'https://www.ek-druck.at',
    telephone: '+43 676 5517197',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Negrellistraße 15',
      addressLocality: 'Gunskirchen',
      postalCode: '4623',
      addressRegion: 'Oberösterreich',
      addressCountry: 'AT',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount: ratingCount,
      bestRating,
      worstRating,
    },
    priceRange: '€€',
    openingHours: 'Mo-Fr 08:00-18:00',
  }

  return (
    <script
      id="aggregate-rating-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default AggregateRatingSchema
