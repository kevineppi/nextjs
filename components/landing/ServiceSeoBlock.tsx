'use client'

import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { getServiceSeoContent } from '@/data/serviceSeoContent'

interface ServiceSeoBlockProps {
  serviceSlug: string
}

/**
 * ServiceSeoBlock, Long-Tail-Body + FAQ + FAQPage-Schema
 * ──────────────────────────────────────────────────────────────────
 *
 * Rendert pro Service-Slug:
 *  1. Long-Tail-Body (4-5 keyword-reiche Absätze)
 *  2. FAQ-Section (7-10 Fragen) mit FAQPage-Schema inline
 *
 * Wenn keine Daten für serviceSlug existieren → null (safe fallback).
 */
const ServiceSeoBlock = ({ serviceSlug }: ServiceSeoBlockProps) => {
  const content = getServiceSeoContent(serviceSlug)
  if (!content) return null

  // FAQPage-Schema für AI-Overview-Optimierung
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <>
      {/* Inline FAQPage Schema, Server-side render für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        id={`faqschema-${serviceSlug}`}
      />

      {/* ═══ LONG-TAIL-BODY ═══ */}
      <section className="py-16 md:py-24 bg-background border-t border-border" aria-label="Detail-Information">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                {content.longTailBody.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-8">
                {content.longTailBody.h2}
              </h2>
              <div className="prose prose-lg max-w-none space-y-5">
                {content.longTailBody.paragraphs.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80">
                    {p}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border" aria-label="Häufige Fragen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-10 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Häufige Fragen
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
                Was Kunden vor Ihnen oft wissen wollten.
              </h2>
            </AnimatedSection>
            <div className="space-y-3">
              {content.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group border-2 border-border bg-background rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-all open:border-primary/30"
                >
                  <summary className="font-bold text-base md:text-lg cursor-pointer flex items-start gap-3 list-none">
                    <span className="mono text-sm font-bold text-primary shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 leading-snug">{f.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 ml-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceSeoBlock
