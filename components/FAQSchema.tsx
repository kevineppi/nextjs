/**
 * FAQSchema, Server-side inline JSON-LD
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-26 Refactor (K1 aus 5-Instanzen-Audit):
 *   Vorher: 'use client' + useEffect-Injection → Google sah beim
 *           First-Render keine FAQ-Daten (kostete Rich-Snippet-Eligibility)
 *   Jetzt:  Server Component mit inline <script type="application/ld+json">
 *           → Google-Bot bekommt FAQ-Schema sofort beim ersten HTML-Pull
 *
 * Verwendung bleibt identisch:
 *   <FAQSchema faqs={[{question, answer}, ...]} city="Wien" />
 *
 * Hinweis: Bei mehreren FAQSchema-Instanzen pro Page → Google bevorzugt
 * meist die erste FAQPage-JSON-LD. city-Prop differenziert Schema-IDs
 * im HTML (für Devs), Google ignoriert die ID aber.
 */

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  city?: string
}

const FAQSchema = ({ faqs, city }: FAQSchemaProps) => {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const scriptId = city
    ? `faq-schema-${city.toLowerCase().replace(/\s+/g, '-')}`
    : 'faq-schema-general'

  return (
    <script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default FAQSchema
