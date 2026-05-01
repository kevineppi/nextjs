import Link from "next/link";
import { ArrowRight, Calculator, Clock, ShieldCheck } from "lucide-react";

interface ConversionBannerProps {
  /** Headline mit Buying-Intent (z.B. "Sofort 3D drucken lassen") */
  headline: string;
  /** Subline – konkretisiert den Nutzen (1 Satz) */
  subline: string;
  /** Primärer CTA-Text */
  primaryLabel: string;
  /** Primäre Ziel-URL (Money-Page) */
  primaryHref: string;
  /** Optionaler sekundärer CTA */
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Conversion-Banner für Ratgeber/Guide-Seiten.
 *
 * Zweck: User mit Kaufintention, die auf einem Guide landen, sofort
 * zur passenden Money-Page weiterleiten – BEVOR sie den Artikel lesen.
 *
 * Platzierung: Direkt nach dem H1 des Guides.
 */
const ConversionBanner = ({
  headline,
  subline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ConversionBannerProps) => {
  return (
    <aside
      className="my-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 p-6 md:p-7 shadow-sm"
      aria-label="Direkt zum Angebot"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-1.5 leading-tight">
            {headline}
          </h2>
          <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-3">
            {subline}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Angebot in 6 h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Unverbindlich & kostenlos
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 w-full md:w-auto">
          <Link href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg whitespace-nowrap group"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-border hover:border-primary/40 text-foreground px-5 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ConversionBanner;
