/**
 * InlineSchema, Server-side inline JSON-LD helper
 * 2026-05-26: K1-Refactor, von 'use client' + useEffect zu Server Component
 *
 * Verwendung:
 *   <InlineSchema id="my-schema-id" schema={{ "@context": ..., "@type": ..., ... }} />
 */

interface InlineSchemaProps {
  id: string
  schema: Record<string, any>
}

const InlineSchema = ({ id, schema }: InlineSchemaProps) => {
  if (!schema) return null

  return (
    <script
      id={`schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default InlineSchema
