/**
 * FotoMarquee · laufendes Band echter Projektfotos
 * ──────────────────────────────────────────────────────────────
 * Reines CSS (animate-marquee aus globals.css), kein JS, SSR-fähig.
 * Pausiert bei Hover, respektiert prefers-reduced-motion.
 * Standardfotos: ausnahmslos bereits freigegebene, auf /referenzen
 * aktive Bilder (Stand 16.09.2026 — Massenmodell-DSC-Fotos bleiben
 * bis zur Freigabe im Dezember draußen).
 */

const REF = 'https://jkzrpjlfdsxvcfwhuoey.supabase.co/storage/v1/object/public/reference-images'

export const FREIGEGEBENE_FOTOS = [
  { src: '/cases/ortsmodell-uebersicht.jpg', alt: 'Ortsmodell 1:500 aus dem 3D-Druck' },
  { src: `${REF}/1768683429276-2cd9b1bc-c2cb-4a04-9669-bd7ab47e77e7.jpg`, alt: 'Designprototyp für Kabelführung, PA12 Nylon' },
  { src: `${REF}/justitia-front.jpg`, alt: 'Justitia-Statue für eine Museums-Ausstellung' },
  { src: `${REF}/1778767680367-47c5a49c-a230-4042-9b0d-b26065b4d8ea.png`, alt: 'Messemodell Sonderanlagenbau' },
  { src: '/cases/ortsmodell-kirche.jpg', alt: 'Detail eines Ortsmodells: Kirche' },
  { src: `${REF}/1779047997817-b860cd9c-c47f-4da7-bc21-8f11c66e4a99.jpg`, alt: 'Formprototyp einer Regenabdeckung' },
  { src: `${REF}/1775222702205-f733824d-427f-4f29-9521-f0a99bc95969.png`, alt: 'Architekturmodell Vereinsheim Ried' },
  { src: `${REF}/1768329444966-nvbidd.jpg`, alt: 'Individuelle Giveaways aus dem 3D-Druck' },
]

type Foto = { src: string; alt: string }

const FotoMarquee = ({
  fotos = FREIGEGEBENE_FOTOS,
  className = '',
}: {
  fotos?: Foto[]
  className?: string
}) => {
  const doppelt = [...fotos, ...fotos]
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      {/* Einheitliches Format (fixe Breite × Höhe, object-cover) statt springender
          Naturformate — Kevin, 16.09.: "stabilere Fotos". Tempo bewusst ruhig. */}
      <div
        className="animate-marquee inline-flex gap-3 md:gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: '45s' }}
      >
        {doppelt.map((f, i) => (
          <div key={i} className="w-48 h-36 md:w-60 md:h-44 shrink-0 overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm">
            <img
              src={f.src}
              alt=""
              loading={i < 5 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FotoMarquee
