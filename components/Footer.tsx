import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Instagram, Linkedin, Star, Calculator, ArrowRight } from "lucide-react";
import { BRAND } from "@/data/brandVoice";

/**
 * Footer · nach Nutzer-Absicht gruppiert
 * ─────────────────────────────────────────────────────────────────
 * Aufbau:
 *  1. Hauptbereich: 5 Spalten fuer Menschen (Marke, Leistungen,
 *     Angebot & Vertrauen, Wissen, Kontakt)
 *  2. Sekundaerbereich: die SEO-Longtail-Links (Branchen, Guides,
 *     Bundeslaender) kompakt als Inline-Zeilen statt als Link-Tuerme
 *  3. Rechtliches
 *
 * Wichtig: es geht KEIN interner Link verloren, sie sind nur nach
 * Absicht sortiert. Interne Verlinkung ist SEO-relevant.
 */

const LEISTUNGEN = [
  { href: "/architekturmodelle", label: "Architekturmodelle" },
  { href: "/messemodelle", label: "Messemodelle & Exponate" },
  { href: "/architekturmodelle-abo", label: "Flatrate für Architekturbüros" },
  { href: "/prototyping", label: "Prototyping" },
  { href: "/einzelanfertigungen", label: "Einzelanfertigungen" },
  { href: "/firmenkunden", label: "Firmenkunden & B2B" },
  { href: "/3d-druck-materialien", label: "Materialien" },
];

const ANGEBOT = [
  { href: "/preise", label: "Preise & Beispiele" },
  { href: "/cases", label: "Cases & Projekt-Stories" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/qualitaet", label: "Qualitäts-Versprechen" },
  { href: "/checkliste", label: "Gratis-PDF Checkliste" },
];

const WISSEN = [
  { href: "/ratgeber", label: "Alle Ratgeber" },
  { href: "/ratgeber/architekturmodell-guide", label: "Architekturmodell-Guide" },
  { href: "/ratgeber/massenmodell-lod-gebaeudedaten", label: "Massenmodell & LoD-Daten" },
  { href: "/ratgeber/datenaufbereitung-architekturmodell", label: "Datenaufbereitung" },
  { href: "/ratgeber/messemodell-guide", label: "Messemodell-Guide" },
  { href: "/ratgeber/kosten-guide", label: "Kosten-Guide" },
  { href: "/ratgeber/material-guide", label: "Material-Guide" },
];

const BRANCHEN = [
  { href: "/branchen/maschinenbau", label: "Maschinenbau" },
  { href: "/branchen/anlagenbau", label: "Anlagenbau" },
  { href: "/branchen/schiffbau", label: "Schiffbau & Marine" },
  { href: "/branchen/energietechnik", label: "Energietechnik" },
  { href: "/branchen/automotive", label: "Automotive & Mobility" },
  { href: "/branchen/elektrotechnik", label: "Elektrotechnik" },
  { href: "/branchen", label: "Alle Branchen" },
];

const BRANCHEN_GUIDES = [
  { href: "/ratgeber/messemodell-maschinenbau", label: "Maschinenbau" },
  { href: "/ratgeber/messemodell-anlagenbau", label: "Anlagenbau" },
  { href: "/ratgeber/messemodell-schiffbau", label: "Schiffbau" },
  { href: "/ratgeber/messemodell-energietechnik", label: "Energietechnik" },
  { href: "/ratgeber/messemodell-automotive", label: "Automotive" },
  { href: "/ratgeber/messemodell-elektrotechnik", label: "Elektrotechnik" },
];

const WEITERE_GUIDES = [
  { href: "/ratgeber/verfahrens-vergleich", label: "FDM vs SLA vs SLS" },
  { href: "/ratgeber/fdm-material-vergleich", label: "FDM-Material-Vergleich" },
  { href: "/ratgeber/architekturmodell-flatrate", label: "Flatrate-Guide für Büros" },
];

const REGIONEN = [
  { href: "/3d-druck-wien", label: "Wien" },
  { href: "/3d-druck-oberoesterreich", label: "Oberösterreich" },
  { href: "/3d-druck-niederoesterreich", label: "Niederösterreich" },
  { href: "/3d-druck-steiermark", label: "Steiermark" },
  { href: "/3d-druck-salzburg", label: "Salzburg" },
  { href: "/3d-druck-kaernten", label: "Kärnten" },
  { href: "/3d-druck-vorarlberg", label: "Vorarlberg" },
  { href: "/3d-druck-burgenland", label: "Burgenland" },
];

/** Kompakte Inline-Linkzeile fuer den Sekundaerbereich */
const LinkRow = ({ label, links }: { label: string; links: { href: string; label: string }[] }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4">
    <span className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 sm:w-52 shrink-0">
      {label}
    </span>
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {links.map((l, i) => (
        <span key={l.href} className="flex items-center gap-3">
          <Link href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {l.label}
          </Link>
          {i < links.length - 1 && <span className="text-muted-foreground/25 text-xs">·</span>}
        </span>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* ══ HAUPTBEREICH ══ */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Marke */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">ekdruck e.U.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Spezialist für Architektur- und Messemodelle aus dem 3D-Druck. B2B-Service für
              Architekturbüros und Aussteller in ganz Österreich.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background mb-5">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" />
              <span className="text-xs font-bold">
                {BRAND.reviews.rating.toString().replace(".", ",")} · {BRAND.reviews.count} Google-Bewertungen
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.instagram.com/ekdruck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ekdruck auf Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/3d-druck/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ekdruck auf LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Leistungen</h4>
            <ul className="space-y-2.5">
              {LEISTUNGEN.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Angebot & Vertrauen */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Angebot & Vertrauen</h4>
            <Link
              href="/kostenrechner"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/25 px-3 py-2 mb-3 hover:bg-primary/15 transition-colors"
            >
              <Calculator className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-bold text-foreground">Kostenrechner</span>
              <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
            <ul className="space-y-2.5">
              {ANGEBOT.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wissen */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Wissen</h4>
            <ul className="space-y-2.5">
              {WISSEN.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Kontakt</h4>
            <div className="space-y-3 mb-5">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                {BRAND.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {BRAND.street}
                  <br />
                  {BRAND.zip} Gunskirchen
                </span>
              </div>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-border">
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt & Termin
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Über uns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        {/* ══ SEKUNDAERBEREICH: Branchen, Guides, Regionen ══ */}
        <div className="space-y-4">
          <LinkRow label="Branchen-Lösungen" links={BRANCHEN} />
          <LinkRow label="Messemodell-Guides" links={BRANCHEN_GUIDES} />
          <LinkRow label="Weitere Guides" links={WEITERE_GUIDES} />
          <LinkRow label="3D-Druck nach Bundesland" links={REGIONEN} />
        </div>

        <Separator className="my-10" />

        {/* ══ RECHTLICHES ══ */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} ekdruck e.U. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/impressum"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/kontakt"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
