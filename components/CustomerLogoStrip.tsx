/**
 * CustomerLogoStrip — Trust-Bar im dunklen Marquee-Style
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-27 v2: Schwarzer BG (wie der bestehende Achievement-Marquee),
 *   Logos einheitlich h-8, CSS `invert` + `brightness` macht alle Logos
 *   weiß auf schwarz (egal welche Original-Farbe).
 *
 * Server Component.
 *
 * Verwendung:
 *   <CustomerLogoStrip />                          // alle Public-Mention-OK
 *   <CustomerLogoStrip eyebrow="Sie vertrauen uns: " />
 */

import { getPublicMentionLogos } from '@/data/testimonials'

interface CustomerLogoStripProps {
  eyebrow?: string
  className?: string
}

const CustomerLogoStrip = ({
  eyebrow = 'Bisher unter anderem für:',
  className = '',
}: CustomerLogoStripProps) => {
  const logos = getPublicMentionLogos()
  if (logos.length === 0) return null

  return (
    <section
      className={`bg-foreground text-background py-8 md:py-10 overflow-hidden ${className}`}
      aria-label="Kundenreferenzen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Eyebrow */}
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-5 md:mb-6 text-center md:text-left">
            {eyebrow}
          </p>

          {/* Logo-Strip — flex-wrap, einheitliche Höhe, dezent grayscale + invert für Schwarz-BG */}
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 md:gap-x-10 gap-y-6">
            {logos.map((logo) => (
              <div
                key={logo.slug}
                className="flex items-center justify-center shrink-0"
                title={logo.name}
              >
                {logo.logoFile ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={logo.logoFile}
                    alt={`Logo ${logo.name}`}
                    className="h-8 md:h-9 w-auto max-w-[140px] md:max-w-[160px] object-contain
                               brightness-0 invert opacity-60 hover:opacity-100
                               transition-opacity duration-300"
                    loading="lazy"
                    width={160}
                    height={36}
                  />
                ) : (
                  /* Fallback Text-Label wenn Logo-File fehlt */
                  <span className="font-bold text-sm md:text-base tracking-tight opacity-70">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerLogoStrip
