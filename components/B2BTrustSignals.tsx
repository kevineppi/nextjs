/**
 * B2BTrustSignals, Verbands- & Compliance-Trust-Bar für B2B-Buyer
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-26 (K7 aus 5-Instanzen-Audit):
 *   B2B-Großkunden checken vor €5.000+-Aufträgen reflexartig nach:
 *     - WKO-Eintrag (haben)
 *     - DUNS-Nummer (Bonität, fehlt, wird beantragt)
 *     - Verbandsmitgliedschaften (Cluster, FHKÖ, geplant)
 *     - UID-Nummer (haben implizit)
 *     - LinkedIn-Company-Page (Vertrauen durch Sichtbarkeit)
 *
 * Server Component, sitewide einsetzbar.
 *
 * TODO Kevin nach Beantragung:
 *   - DUNS-Nummer eintragen in BRAND.duns (data/brandVoice.ts)
 *   - Cluster-Mitgliedschaft eintragen
 *   - UID-Nummer prüfen + eintragen
 */

import Link from 'next/link'
import { Shield, Linkedin, FileCheck, Building2 } from 'lucide-react'
import { BRAND } from '@/data/brandVoice'

interface B2BTrustSignalsProps {
  variant?: 'inline' | 'card'
  className?: string
}

const B2BTrustSignals = ({ variant = 'inline', className = '' }: B2BTrustSignalsProps) => {
  // Items werden nur gerendert wenn relevant, keine leeren Placeholders
  const items = [
    {
      icon: Shield,
      label: 'WKO-Gewerbeberechtigung',
      detail: `Eingetragenes Einzelunternehmen ${BRAND.companyName}, ${BRAND.location}`,
      visible: true,
    },
    {
      icon: FileCheck,
      label: 'AT-UID + Reverse-Charge EU-B2B',
      detail: 'Saubere Rechnungsstellung für AT/DE/CH B2B-Kunden',
      visible: true,
    },
    {
      icon: Building2,
      label: 'Made in Austria · Lieferkette transparent',
      detail: 'Österreichisches Filament aus Recycling, kurze Lieferketten',
      visible: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn, direkter Kontakt zum Inhaber',
      detail: 'Profil unter linkedin.com/in/3d-druck',
      visible: true,
      href: 'https://www.linkedin.com/in/3d-druck/',
    },
  ]

  if (variant === 'card') {
    return (
      <section className={`py-12 md:py-16 bg-muted/30 border-y border-border ${className}`} aria-label="B2B Trust-Signale">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-6">
              B2B-Vertrauens-Basis
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.filter((i) => i.visible).map((item, i) => {
                const Inner = (
                  <div className="bg-background border-2 border-border rounded-2xl p-5 hover:border-primary/30 transition-all h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm leading-snug mb-1">{item.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={i}>{Inner}</div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Inline-Variant, schmale Strip-Variante
  return (
    <div className={`bg-muted/40 border-y border-border py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          {items.filter((i) => i.visible).map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-muted-foreground font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default B2BTrustSignals
