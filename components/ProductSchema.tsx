/**
 * ProductSchema, Server-side inline JSON-LD
 * 2026-05-26: K1-Refactor, von 'use client' + useEffect zu Server Component
 */

interface ProductSchemaProps {
  name: string
  description: string
  offers: {
    priceCurrency: string
    price?: string
    availability?: string
  }
  brand?: string
  category?: string
}

const ProductSchema = ({
  name,
  description,
  offers,
  brand = 'ekdruck e.U.',
  category = '3D-Druck Service',
}: ProductSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    category,
    offers: {
      '@type': 'Offer',
      priceCurrency: offers.priceCurrency,
      price: offers.price,
      availability: offers.availability || 'https://schema.org/InStock',
      url: 'https://www.ek-druck.at/kontakt',
      seller: {
        '@type': 'Organization',
        name: brand,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '31',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default ProductSchema
