/**
 * LocalBusinessSchema — Server-side inline JSON-LD
 * 2026-05-26: K1-Refactor — von 'use client' + useEffect zu Server Component
 */

interface LocalBusinessSchemaProps {
  city: string
  region: string
  latitude: string
  longitude: string
  deliveryTime?: string
}

const LocalBusinessSchema = ({
  city,
  region,
  latitude,
  longitude,
  deliveryTime = '24-48h',
}: LocalBusinessSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `ekdruck e.U. - 3D-Druck Service ${city}`,
    description: `Professioneller 3D-Druck Service für ${city} und ${region}. Schnelle Lieferung in ${deliveryTime}, nachhaltige österreichische Materialien und faire Preise.`,
    url: `https://www.ek-druck.at/3d-druck-${city.toLowerCase()}`,
    telephone: '+43 676 5517197',
    email: 'office@ek-druck.at',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Negrellistraße 15',
      addressLocality: 'Gunskirchen',
      addressRegion: 'Oberösterreich',
      postalCode: '4623',
      addressCountry: 'AT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '€€',
    image: 'https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png',
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: region,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `3D-Druck Dienstleistungen ${city}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `FDM 3D-Druck ${city}`,
            description: `Professioneller FDM 3D-Druck für ${city} mit schneller Lieferung in ${deliveryTime}`,
          },
          price: '5.00',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          areaServed: { '@type': 'City', name: city },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Express 3D-Druck ${city}`,
            description: `Express 3D-Druck Service für ${city} - Lieferung innerhalb von 24h`,
          },
          price: '10.00',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          areaServed: { '@type': 'City', name: city },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Einzelanfertigungen 3D-Druck ${city}`,
            description: `Individuelle 3D-Druck Einzelstücke für ${city}`,
          },
          price: '15.00',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          areaServed: { '@type': 'City', name: city },
        },
      ],
    },
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'EUR',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '31',
    },
  }

  const scriptId = `local-business-schema-${city.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default LocalBusinessSchema
