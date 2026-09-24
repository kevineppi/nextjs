'use client'

/**
 * CostComparisonShowcase — die Beispielrechnung als Kernstück einer Case-Seite.
 *
 * Rendert Stat-Kacheln, einen animierten Budget-Balkenvergleich, eine
 * Amortisationskurve (SVG) und die Posten-Tabelle. Alle Zahlen kommen aus
 * data/realCases.ts (costComparison), nichts ist hier hartkodiert.
 */

import { useEffect, useRef, useState } from 'react'
import AnimatedCounter from '@/components/AnimatedCounter'
import type { RealCase } from '@/data/realCases'

type CostComparison = NonNullable<RealCase['costComparison']>

// Deterministisch statt toLocaleString: Node (SSG) und Browser-ICU formatieren
// de-AT unterschiedlich (Punkt vs. NBSP) → Hydration-Mismatch (React #425).
const fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ── Budget-Balkenvergleich ─────────────────────────────────────────── */

function BudgetBars({ bars }: { bars: NonNullable<CostComparison['budgetBars']> }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const scaleMax = Math.max(...bars.map((b) => b.max)) * 1.06

  return (
    <div ref={ref} className="space-y-6">
      {bars.map((bar, i) => {
        const minPct = (bar.min / scaleMax) * 100
        const maxPct = (bar.max / scaleMax) * 100
        return (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <p className={`text-sm font-bold ${bar.highlight ? 'text-primary' : 'text-background/70'}`}>
                {bar.label}
              </p>
              <p className={`mono text-sm md:text-base font-bold whitespace-nowrap ${bar.highlight ? 'text-primary' : 'text-background/60'}`}>
                €{fmt(bar.min)} – €{fmt(bar.max)}
              </p>
            </div>
            <div className="h-8 md:h-10 rounded-lg bg-background/10 overflow-hidden relative">
              {/* Spanne min–max, halbtransparent */}
              <div
                className={`absolute inset-y-0 left-0 rounded-lg transition-all duration-[1400ms] ease-out ${bar.highlight ? 'bg-primary/35' : 'bg-background/20'}`}
                style={{ width: inView ? `${maxPct}%` : '0%', transitionDelay: `${i * 180}ms` }}
              />
              {/* Sockel bis min, voll */}
              <div
                className={`absolute inset-y-0 left-0 rounded-lg transition-all duration-[1400ms] ease-out ${bar.highlight ? 'bg-primary' : 'bg-background/45'}`}
                style={{ width: inView ? `${minPct}%` : '0%', transitionDelay: `${i * 180}ms` }}
              />
            </div>
          </div>
        )
      })}
      <p className="mono text-[10px] uppercase tracking-[0.2em] text-background/40">
        Voller Balken = unterer Richtwert · heller Auslauf = oberer Richtwert
      </p>
    </div>
  )
}

/* ── Amortisationskurve ─────────────────────────────────────────────── */

function AmortisationChart({ amort }: { amort: NonNullable<CostComparison['amortisation']> }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const { perMesse, einmalkosten, messen } = amort

  // Kumulierte Netto-Ersparnis je Messe (konservativ)
  const points = Array.from({ length: messen + 1 }, (_, n) => n * perMesse - (n > 0 ? einmalkosten : 0))
  const yMax = Math.max(...points) * 1.12

  // SVG-Geometrie
  const W = 640, H = 300, PAD_L = 56, PAD_R = 24, PAD_T = 26, PAD_B = 40
  const x = (n: number) => PAD_L + (n / messen) * (W - PAD_L - PAD_R)
  const y = (v: number) => H - PAD_B - (Math.max(v, 0) / yMax) * (H - PAD_T - PAD_B)

  const linePts = points.map((v, n) => `${x(n)},${y(v)}`).join(' ')
  const areaPts = `${x(0)},${y(0)} ${linePts} ${x(messen)},${H - PAD_B}`

  // Y-Gridlines: 4 Stufen
  const steps = 4
  const grid = Array.from({ length: steps }, (_, i) => Math.round(((i + 1) * yMax) / steps / 1000) * 1000)

  return (
    <div ref={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
        aria-label={`Kumulierte Ersparnis über ${messen} Messen: nach der ersten Messe rund €${fmt(points[1])}, nach ${messen} Messen rund €${fmt(points[messen])} · Modellkosten einmalig €${fmt(einmalkosten)}.`}>
        {/* Gridlines + Y-Labels */}
        {grid.map((v, i) => (
          <g key={i}>
            <line x1={PAD_L} y1={y(v)} x2={W - PAD_R} y2={y(v)} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="4 6" />
            <text x={PAD_L - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="currentColor" fillOpacity="0.45" className="mono">
              {Math.round(v / 1000)}k
            </text>
          </g>
        ))}
        {/* Nulllinie */}
        <line x1={PAD_L} y1={H - PAD_B} x2={W - PAD_R} y2={H - PAD_B} stroke="currentColor" strokeOpacity="0.3" />

        {/* Fläche + Linie, per CSS-Reveal animiert */}
        <g style={{ clipPath: inView ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)', transition: 'clip-path 1600ms cubic-bezier(0.16,1,0.3,1)' }}>
          <polygon points={areaPts} className="fill-primary/15" />
          <polyline points={linePts} fill="none" className="stroke-primary" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
          {points.map((v, n) => (
            <circle key={n} cx={x(n)} cy={y(v)} r={n === 0 ? 3 : 5} className={n === 0 ? 'fill-background/40' : 'fill-primary'} />
          ))}
        </g>

        {/* Punkt-Labels: erste + letzte Messe */}
        <text x={x(1)} y={y(points[1]) - 12} textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor" fillOpacity={inView ? 0.9 : 0} style={{ transition: 'fill-opacity 500ms 900ms' }} className="mono">
          +€{fmt(points[1])}
        </text>
        <text x={x(messen) - 4} y={y(points[messen]) - 12} textAnchor="end" fontSize="13" fontWeight="700" fillOpacity={inView ? 1 : 0} style={{ transition: 'fill-opacity 500ms 1500ms' }} className="mono fill-primary">
          +€{fmt(points[messen])}
        </text>

        {/* X-Labels */}
        {Array.from({ length: messen + 1 }, (_, n) => (
          <text key={n} x={x(n)} y={H - PAD_B + 20} textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.5" className="mono">
            {n === 0 ? 'Start' : `${n}. Messe`}
          </text>
        ))}
      </svg>
      <p className="text-xs text-background/50 leading-relaxed mt-3">{amort.note}</p>
    </div>
  )
}

/* ── Hauptkomponente ────────────────────────────────────────────────── */

export default function CostComparisonShowcase({ data }: { data: CostComparison }) {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background border-y border-border" aria-label="Kostenvergleich und Amortisation">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Kopf */}
          <div className="mb-12 max-w-3xl">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Die Rechnung · mit veröffentlichten Zahlen
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-background/70 leading-relaxed">{data.intro}</p>
          </div>

          {/* Stat-Kacheln */}
          {data.stats && data.stats.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {data.stats.map((s, i) => (
                <div key={i} className="bg-background/5 border-2 border-background/10 rounded-2xl p-6 text-center hover:border-primary/40 transition-colors">
                  <p className="mono text-3xl md:text-4xl font-bold text-primary mb-2 whitespace-nowrap">
                    <AnimatedCounter target={s.value} />
                  </p>
                  <p className="text-sm font-bold text-background/90 leading-snug">{s.label}</p>
                  {s.sub && <p className="text-xs text-background/50 mt-1 leading-snug">{s.sub}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Charts nebeneinander */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {data.budgetBars && (
              <div className="bg-background/5 border-2 border-background/10 rounded-2xl p-6 md:p-8">
                <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-6">
                  Messebudget im Vergleich · je Messe
                </p>
                <BudgetBars bars={data.budgetBars} />
              </div>
            )}
            {data.amortisation && (
              <div className="bg-background/5 border-2 border-background/10 rounded-2xl p-6 md:p-8">
                <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-6">
                  Kumulierte Ersparnis · Messe für Messe
                </p>
                <AmortisationChart amort={data.amortisation} />
              </div>
            )}
          </div>

          {/* Posten-Tabelle */}
          <div className="bg-background/5 border-2 border-background/10 rounded-2xl p-6 md:p-8 overflow-x-auto">
            <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-6">
              Posten für Posten
            </p>
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-background/25">
                  <th className="text-left py-3 pr-4 font-bold text-background/50"></th>
                  <th className="text-left py-3 pr-4 font-bold text-background/70">{data.colA}</th>
                  <th className="text-left py-3 px-3 font-bold text-primary bg-primary/10 rounded-t-lg">{data.colB}</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r, i) => (
                  <tr key={i} className="border-b border-background/10 last:border-0">
                    <td className="py-4 pr-4 font-semibold text-background/90 align-top">{r.posten}</td>
                    <td className="py-4 pr-4 text-background/60 align-top">{r.a}</td>
                    <td className={`py-4 px-3 text-background/95 font-medium align-top bg-primary/10 ${i === data.rows.length - 1 ? 'rounded-b-lg' : ''}`}>{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-background/50 leading-relaxed mt-6">{data.fazit}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
