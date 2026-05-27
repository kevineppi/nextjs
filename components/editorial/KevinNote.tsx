/**
 * KevinNote — Persönliche Inline-Side-Card
 * ──────────────────────────────────────────────────────────────────
 * Side-Card mit Avatar-Kreis + handschriftlich wirkender Caption
 * + Kevin-Signatur. Eingesetzt in Long-Body-Sections als Skim-Anker
 * + persönlicher Touch — bricht Block-an-Block-Monotonie auf.
 *
 * Design-Quelle: StoryBrand "Guide-Persona", Brand-Voice ek-druck.
 *
 * Verwendung:
 *   <KevinNote>
 *     Aus Erfahrung: Lieber 6 Wochen Vorlauf als 2 Wochen Express.
 *     Spart 30% Kosten und 90% Stress.
 *   </KevinNote>
 */

import { Pencil } from 'lucide-react'

interface KevinNoteProps {
  children: React.ReactNode
  variant?: 'inline' | 'aside'
}

const KevinNote = ({ children, variant = 'inline' }: KevinNoteProps) => {
  if (variant === 'aside') {
    // Vertical aside variant — sits in side-column
    return (
      <aside className="relative bg-primary/[0.04] border-l-4 border-primary p-5 my-6 rounded-r-xl">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-0.5">
            <span className="font-bold text-xs">K</span>
          </div>
          <div className="flex-1">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 flex items-center gap-1.5">
              <Pencil className="w-3 h-3" />
              Werkstatt-Note
            </p>
            <div className="text-sm leading-relaxed text-foreground/85">
              {children}
            </div>
            <p className="mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mt-3">
              — Kevin
            </p>
          </div>
        </div>
      </aside>
    )
  }

  // Inline variant — fits in body-flow
  return (
    <div className="relative my-8 bg-muted/30 border-2 border-primary/20 rounded-2xl p-5 md:p-6">
      <div className="absolute -top-3 left-5 bg-background px-2">
        <p className="mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary flex items-center gap-1.5">
          <Pencil className="w-3 h-3" />
          Werkstatt-Note
        </p>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-1">
          <span className="font-bold text-sm">K</span>
        </div>
        <div className="flex-1">
          <div className="text-base leading-relaxed text-foreground/85">
            {children}
          </div>
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3 font-bold">
            — Kevin Eppensteiner
          </p>
        </div>
      </div>
    </div>
  )
}

export default KevinNote
