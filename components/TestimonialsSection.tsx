/**
 * TestimonialsSection — echte Quote-Cards sitewide
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-26 (K2 aus 5-Instanzen-Audit):
 *   Statt nur ★5,0-Counter → zitierbare Statements mit Avatar-Initial.
 *   Server Component, kein Hydration-Overhead.
 *
 * Verwendung:
 *   <TestimonialsSection />                    // alle Testimonials
 *   <TestimonialsSection brancheSlug="maschinenbau" />  // Branchen-Filter
 *   <TestimonialsSection limit={3} />          // begrenzte Anzahl
 */

import { Quote, Star } from 'lucide-react'
import { testimonials, getTestimonialsByBranche, type Testimonial } from '@/data/testimonials'
import { BRAND } from '@/data/brandVoice'

interface TestimonialsSectionProps {
  brancheSlug?: string
  limit?: number
  variant?: 'default' | 'compact'
  title?: string
  subtitle?: string
}

const initials = (name: string): string =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

const TestimonialCard = ({ t, compact = false }: { t: Testimonial; compact?: boolean }) => (
  <article
    className={`bg-background border-2 border-border rounded-3xl hover:border-primary/30 transition-all relative ${
      compact ? 'p-6' : 'p-8 md:p-10'
    }`}
  >
    <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

    {/* Stars */}
    {t.rating && (
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
    )}

    {/* Quote */}
    <blockquote
      className={`text-foreground/85 leading-relaxed italic mb-6 ${
        compact ? 'text-base' : 'text-lg md:text-xl'
      }`}
    >
      "{t.quote}"
    </blockquote>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-border">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <span className="font-bold text-xs">{initials(t.author)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm">{t.author}</p>
        <p className="text-xs text-muted-foreground">
          {t.role}
          {t.company && t.consentForName ? ` · ${t.company}` : ''}
        </p>
      </div>
      {t.source && (
        <span className="mono text-[9px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full shrink-0">
          {t.source === 'google' ? 'Google' : 'Direkt'}
        </span>
      )}
    </div>
  </article>
)

const TestimonialsSection = ({
  brancheSlug,
  limit = 3,
  variant = 'default',
  title = 'Was Kunden über ek-druck sagen',
  subtitle,
}: TestimonialsSectionProps) => {
  const allTestimonials = brancheSlug ? getTestimonialsByBranche(brancheSlug) : testimonials

  const list = allTestimonials.slice(0, limit)
  if (list.length === 0) return null

  // ─── Review-Schema inline JSON-LD ───────────────────────────────
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.companyName,
    // aggregateRating entfernt: einzige Bewertungsquelle ist global orgSchema() (Review-Snippet-Dedup)
    review: list.map((t) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating || 5,
        bestRating: 5,
      },
      author: {
        '@type': 'Person',
        name: t.author,
      },
      reviewBody: t.quote,
      ...(t.date && { datePublished: t.date }),
    })),
  }

  return (
    <section
      className="py-20 md:py-28 bg-muted/30 border-y border-border"
      aria-label="Kundenstimmen"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 max-w-3xl">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Kundenstimmen · ★{BRAND.reviews.rating} ({BRAND.reviews.count})
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Grid */}
          <div className={`grid gap-4 ${variant === 'compact' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {list.map((t) => (
              <TestimonialCard key={t.slug} t={t} compact={variant === 'compact'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
