'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, X, Calculator } from 'lucide-react'

/**
 * SmartStickyCTA — kontextuelle Bottom-Bar
 * ──────────────────────────────────────────────────────────────────
 * Slides up nach 600px Scroll. Dismissable per Session.
 * Aufgabe: User der durch die Page scrollt einen schwebenden, immer
 * sichtbaren primären Conversion-Pfad anbieten — ohne dass dauernd
 * eine CTA-Section wiederholt werden muss.
 *
 * Design-Quelle:
 *   - ConversionXL: persistente primäre CTA
 *   - Designing for Behavior Change: Friction-Reduktion
 *
 * Verwendung:
 *   <SmartStickyCTA
 *     primaryLabel="STL hochladen"
 *     primaryHref="/kostenrechner"
 *     context="Festpreis in 6h — direkt vom Inhaber"
 *   />
 */

interface SmartStickyCTAProps {
  primaryLabel: string
  primaryHref: string
  context?: string
  secondaryLabel?: string
  secondaryHref?: string
  dismissKey?: string // sessionStorage-key — anders pro Page
}

const SmartStickyCTA = ({
  primaryLabel,
  primaryHref,
  context = 'Festpreis in 6h — direkt vom Inhaber',
  secondaryLabel,
  secondaryHref,
  dismissKey = 'smart-cta-dismissed',
}: SmartStickyCTAProps) => {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Prüfe session-state
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem(dismissKey)) {
        setDismissed(true)
        return
      }
    }

    // Scroll-trigger
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissKey])

  const handleDismiss = () => {
    sessionStorage.setItem(dismissKey, '1')
    setDismissed(true)
  }

  if (dismissed || !visible) return null

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[calc(100%-2rem)] animate-in slide-in-from-bottom-4 duration-300"
      role="region"
      aria-label="Sticky Call-to-Action"
    >
      <div className="bg-foreground text-background rounded-2xl shadow-2xl border border-background/10 px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4">

        {/* Context-Text — hidden on small mobile */}
        <div className="hidden sm:flex flex-col flex-1 min-w-0">
          <p className="mono text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
            Bereit für Ihr Modell?
          </p>
          <p className="text-xs md:text-sm text-background/80 leading-snug truncate">
            {context}
          </p>
        </div>

        {/* Primary CTA */}
        <Link
          href={primaryHref}
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 md:px-5 py-2.5 md:py-3 font-bold text-xs md:text-sm hover:opacity-90 transition-all whitespace-nowrap"
        >
          <Calculator className="w-4 h-4" />
          {primaryLabel}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Secondary (optional) — text-only */}
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="hidden md:inline-flex items-center text-xs font-bold text-background/70 hover:text-background transition-colors whitespace-nowrap"
          >
            {secondaryLabel} →
          </Link>
        )}

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          aria-label="Schließen"
          className="w-7 h-7 rounded-full text-background/40 hover:text-background hover:bg-background/10 flex items-center justify-center transition-all shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default SmartStickyCTA
