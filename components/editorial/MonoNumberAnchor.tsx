/**
 * MonoNumberAnchor, Magazin-Style Section-Marker
 * ──────────────────────────────────────────────────────────────────
 * Rendert große Mono-Number mit "/total"-Notation als visueller
 * Anker am Section-Start. Macht Page-Architektur visuell lesbar.
 *
 * Verwendung:
 *   <MonoNumberAnchor current={1} total={6} label="Was wir machen" />
 *
 * Design-Quelle: Refactoring UI + Editorial-Magazine-Design.
 */

interface MonoNumberAnchorProps {
  current: number
  total: number
  label?: string
  align?: 'left' | 'center' | 'right'
}

const MonoNumberAnchor = ({ current, total, label, align = 'left' }: MonoNumberAnchorProps) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'

  return (
    <div className={`flex items-baseline gap-4 ${alignClass}`}>
      <div className="font-mono leading-none">
        <span className="text-7xl md:text-8xl font-bold text-primary">
          {String(current).padStart(2, '0')}
        </span>
        <span className="text-xl md:text-2xl text-muted-foreground/40">
          /{String(total).padStart(2, '0')}
        </span>
      </div>
      {label && (
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-border pb-1 mb-2 hidden md:block">
          {label}
        </div>
      )}
    </div>
  )
}

export default MonoNumberAnchor
