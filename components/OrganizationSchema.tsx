/**
 * OrganizationSchema, Server-side inline JSON-LD
 * 2026-05-26: K1-Refactor, von 'use client' + useEffect zu Server Component
 */

const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'ekdruck e.U.',
    alternateName: 'EK-Druck',
    url: 'https://www.ek-druck.at',
    logo: 'https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png',
    description:
      'Spezialist für Architektur- und Messemodelle aus dem 3D-Druck. B2B-Service für Industriegüter-Hersteller und Architekturbüros in ganz Österreich, Angebot in 6h, Express 24h.',
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
      latitude: 48.1295,
      longitude: 13.9372,
    },
    areaServed: [
      { '@type': 'Country', name: 'Österreich' },
      { '@type': 'Country', name: 'Deutschland' },
      { '@type': 'Country', name: 'Schweiz' },
      { '@type': 'State', name: 'Wien' },
      { '@type': 'State', name: 'Niederösterreich' },
      { '@type': 'State', name: 'Oberösterreich' },
      { '@type': 'State', name: 'Steiermark' },
      { '@type': 'State', name: 'Salzburg' },
      { '@type': 'State', name: 'Tirol' },
      { '@type': 'State', name: 'Kärnten' },
      { '@type': 'State', name: 'Vorarlberg' },
      { '@type': 'State', name: 'Burgenland' },
    ],
    telephone: '+43 676 5517197',
    email: 'office@ek-druck.at',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+43 676 5517197',
      email: 'office@ek-druck.at',
      availableLanguage: ['German', 'English'],
    },
    sameAs: [
      'https://www.ek-druck.at',
      'https://www.instagram.com/ekdruck/',
      'https://www.linkedin.com/in/3d-druck/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '31',
      ratingCount: '31',
    },
    foundingDate: '2024',
    knowsAbout: [
      '3D-Druck',
      'FDM-Druck',
      'Architekturmodelle',
      'Messemodelle',
      'Rapid Prototyping',
      'Industriemodelle',
      'Maschinenbau-Modelle',
      'Schiffbau-Modelle',
      'PLA',
      'PETG',
      'ABS',
      'TPU',
      'Carbon-PA',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '3D-Druck Dienstleistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architekturmodelle',
            description: 'Präzise 3D-gedruckte Architekturmodelle für Architekturbüros und Planer',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architekturmodell-Flatrate',
            description: 'Monatliche Flatrate für Architekturbüros ab €199/Monat, erstes Modell kostenlos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Messemodelle',
            description: 'Maßstabsgetreue Messemodelle und Industrie-Ausstellungsexponate aus dem 3D-Druck',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Einzelanfertigungen',
            description: 'Individuelle 3D-Druck Einzelteile nach Maß ohne Mindestmenge',
          },
        },
      ],
    },
  }

  return (
    <script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default OrganizationSchema
