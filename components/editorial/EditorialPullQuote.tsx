/**
 * EditorialPullQuote, Section-Bridge mit großem Zitat
 * ──────────────────────────────────────────────────────────────────
 * Wird ZWISCHEN zwei Hauptsections eingesetzt als visuelle Atempause
 * + emotionaler Hook. Magazine-Narrow-Layout, viel Whitespace.
 *
 * Design-Quelle: Editorial-Magazine, StoryBrand "emotional hook".
 *
 * Verwendung:
 *   <EditorialPullQuote
 *     quote="8 Tonnen Werkzeugmaschine → 50 cm Tisch-Exponat in 24h."
 *     attribution="Kevin Eppensteiner, Inhaber ekdruck e.U."
 *     anchorNumber={2}
 *     anchorTotal={6}
 *   />
 */

import MonoNumberAnchor from './MonoNumberAnchor'

interface EditorialPullQuoteProps {
  quote: string
  attribution?: string
  anchorNumber?: number
  anchorTotal?: number
  variant?: 'light' | 'dark' // dark = inverted (schwarzer BG)
}

const EditorialPullQuote = ({
  quote,
  attribution,
  anchorNumber,
  anchorTotal,
  variant = 'light',
}: EditorialPullQuoteProps) => {
  const isDark = variant === 'dark'

  return (
    <section
      className={`py-16 md:py-24 ${isDark ? 'bg-foreground text-background' : 'bg-background'}`}
      aria-label="Editorial Pull Quote"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {anchorNumber && anchorTotal && (
            <div className="mb-8 flex justify-center">
              <div className="font-mono leading-none">
                <span className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-primary' : 'text-primary'}`}>
                  {String(anchorNumber).padStart(2, '0')}
                </span>
                <span className={`text-base md:text-lg ${isDark ? 'text-background/30' : 'text-muted-foreground/40'}`}>
                  /{String(anchorTotal).padStart(2, '0')}
                </span>
              </div>
            </div>
          )}

          <blockquote className="text-center">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.03em] mb-8">
              <span className={isDark ? 'text-background' : 'text-foreground'}>"</span>
              {quote}
              <span className={isDark ? 'text-background' : 'text-foreground'}>"</span>
            </p>
            {attribution && (
              <footer className={`mono text-xs font-bold uppercase tracking-[0.3em] ${isDark ? 'text-primary' : 'text-primary'}`}>
               , {attribution}
              </footer>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default EditorialPullQuote
