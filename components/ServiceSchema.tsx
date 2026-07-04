/**
 * ServiceSchema, Server-side inline JSON-LD
 * 2026-05-26: K1-Refactor, von 'use client' + useEffect zu Server Component
 */

interface ServiceSchemaProps {
  serviceName: string
  description: string
  serviceType?: string
  offers?: {
    price?: string
    priceCurrency?: string
    description?: string
  }
  areaServed?: string[]
  provider?: {
    name: string
    url: string
  }
}

const ServiceSchema = ({
  serviceName,
  description,
  serviceType = 'Service',
  offers,
  areaServed = [
    'Wien',
    'Graz',
    'Linz',
    'Salzburg',
    'Innsbruck',
    'Klagenfurt',
    'Villach',
    'Wels',
    'St. Pölten',
    'Dornbirn',
  ],
  provider = {
    name: 'ekdruck e.U.',
    url: 'https://www.ek-druck.at',
  },
}: ServiceSchemaProps) => {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': serviceType,
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
      addressCountry: 'AT',
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: provider.url,
      serviceType: 'Online',
    },
  }

  if (offers) {
    schema.offers = {
      '@type': 'Offer',
      description: offers.description || description,
      ...(offers.price && {
        price: offers.price,
        priceCurrency: offers.priceCurrency || 'EUR',
      }),
    }
  }

  const scriptId = `service-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default ServiceSchema
