/**
 * BreadcrumbSchema — Server-side inline JSON-LD
 * 2026-05-26: K1-Refactor — von 'use client' + useEffect zu Server Component
 */

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://www.ek-druck.at${item.url}`,
    })),
  }

  return (
    <script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default BreadcrumbSchema
