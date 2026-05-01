import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * Strategische, kontextuelle In-Text-Links für SEO Internal Linking.
 *
 * Verteilt Link-Juice von Traffic-starken Seiten (Homepage, Regional-Seiten)
 * gezielt auf Money-Pages (Kostenrechner, Firmenkunden, Top-Regional, Architektur, Messe).
 *
 * Verwendet keyword-optimierte Ankertexte statt generischer Phrasen wie "hier klicken".
 */

export interface ContextualLink {
  /** Vorlauf-Text (vor dem Link) */
  before?: string;
  /** Keyword-optimierter Ankertext */
  anchor: string;
  /** Ziel-URL (interne Route) */
  href: string;
  /** Nachlauf-Text (nach dem Link) */
  after?: string;
}

export interface ContextualLinksParagraph {
  /** Optionaler Absatz-Titel für visuelle Struktur */
  title?: string;
  /** Verkettung aus Text + Link + Text */
  parts: ContextualLink[];
}

interface ContextualLinksProps {
  /** Section-Headline */
  heading: string;
  /** Optionaler Eyebrow / Kicker */
  eyebrow?: string;
  /** Optionale Sub-Headline */
  description?: string;
  /** Inhalt-Absätze mit kontextuellen Links */
  paragraphs: ContextualLinksParagraph[];
  /** Optional: Aktions-Cards am Ende */
  actions?: { label: string; href: string; description: string }[];
  /** Background variant */
  variant?: "default" | "muted";
}

const ContextualLinks = ({
  heading,
  eyebrow,
  description,
  paragraphs,
  actions,
  variant = "default",
}: ContextualLinksProps) => {
  return (
    <section
      className={`py-20 md:py-28 ${variant === "muted" ? "bg-muted/30" : "bg-background"}`}
      aria-label={heading}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-10">
            {eyebrow && (
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
              {heading}
            </h2>
            {description && (
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={100} className="space-y-7 text-base md:text-lg leading-[1.7] text-foreground/85">
            {paragraphs.map((para, pi) => (
              <div key={pi}>
                {para.title && (
                  <h3 className="font-bold text-xl mb-3 tracking-tight text-foreground">
                    {para.title}
                  </h3>
                )}
                <p>
                  {para.parts.map((part, i) => (
                    <span key={i}>
                      {part.before}
                      <Link href={part.href}
                        className="text-primary font-semibold underline decoration-primary/30 underline-offset-4 hover:decoration-primary hover:bg-primary/5 transition-all duration-200 px-0.5"
                      >
                        {part.anchor}
                      </Link>
                      {part.after}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </AnimatedSection>

          {actions && actions.length > 0 && (
            <AnimatedSection animation="slide-up" delay={200} className="mt-12 grid sm:grid-cols-2 gap-3">
              {actions.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group block p-6 rounded-2xl border-2 border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 bg-background"
                >
                  <p className="font-bold text-base mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {a.label}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {a.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mono group-hover:gap-3 transition-all">
                    Öffnen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContextualLinks;
