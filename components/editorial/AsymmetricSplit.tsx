/**
 * AsymmetricSplit, 60/40 oder 70/30 statt 50/50
 * ──────────────────────────────────────────────────────────────────
 * Bricht Standard-Grid-Layouts. Eine Seite dominant (Story), andere
 * sekundär (Stats/Avatar/Mini-Card). Optisch interessanter, Lese-
 * fluss klarer.
 *
 * Design-Quelle: Refactoring UI "Don't fight gravity, use it"
 *
 * Verwendung:
 *   <AsymmetricSplit ratio="60/40">
 *     <AsymmetricSplit.Main>...</AsymmetricSplit.Main>
 *     <AsymmetricSplit.Aside>...</AsymmetricSplit.Aside>
 *   </AsymmetricSplit>
 */

interface AsymmetricSplitProps {
  ratio?: '60/40' | '70/30' | '40/60' | '30/70'
  children: React.ReactNode
  className?: string
}

const ratioToCols: Record<string, string> = {
  '60/40': 'lg:grid-cols-[1.5fr_1fr]',
  '70/30': 'lg:grid-cols-[2.3fr_1fr]',
  '40/60': 'lg:grid-cols-[1fr_1.5fr]',
  '30/70': 'lg:grid-cols-[1fr_2.3fr]',
}

const AsymmetricSplit = ({
  ratio = '60/40',
  children,
  className = '',
}: AsymmetricSplitProps) => {
  return (
    <div className={`grid ${ratioToCols[ratio]} gap-10 lg:gap-16 items-start ${className}`}>
      {children}
    </div>
  )
}

const Main = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`min-w-0 ${className}`}>{children}</div>
)

const Aside = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <aside className={`min-w-0 lg:sticky lg:top-24 ${className}`}>{children}</aside>
)

AsymmetricSplit.Main = Main
AsymmetricSplit.Aside = Aside

export default AsymmetricSplit
