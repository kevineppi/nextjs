/**
 * Studierenden-Seite v3 · /studenten (ersetzt /architekturmodelle/studenten, 301)
 * ──────────────────────────────────────────────────────────────────
 * Kevin, 13.09.2026: allgemeine Seite für ALLE Studiengänge (Architektur,
 * Maschinenbau, Automatisierungstechnik, Design, ...). Zweck: Reputation +
 * Backlinks (ÖH, Fachschaften, Uni-Portale), Überlauf-Kapazität in
 * Abgabewochen, große Modelle, faire Studierendenpreise.
 * Ton-Leitplanken (Kevin): nicht bei Werkstattleitern anecken, nicht
 * profitgetrieben wirken → eigene Sektion "Uni-Werkstatt zuerst".
 * WKO-Leitplanke: KEINE Funktionsteile-Begriffe als Leistungsversprechen.
 * Ehrliche Abgrenzung in den FAQ (Negativ-Kontext ist erlaubt und schützt).
 * Design: ekdruck-Bausteine (Grid, Sticker, text-gradient, Mono-Stats),
 * normale Site-Navigation + Footer. Konditionen: 10% / 15% (Kevin, 12.09.).
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, MapPin, ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StudentenDeadlineForm from '@/components/StudentenDeadlineForm'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = '3D-Druck für Studierende in Österreich · Abgabemodelle & große Modelle | ekdruck'
const DESCRIPTION =
  '3D-Druck-Service für Studienprojekte aller Studiengänge: Abgabemodelle, Anschauungsmodelle, große Modelle. Wenn die Uni-Drucker voll sind: Standard 3-5 Werktage, Express 24-48h. 10% Studierendenrabatt, 15% an österreichischen Unis und FHs.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/studenten', ...buildDachAlternates('/studenten') },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/studenten',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-uebersicht.jpg', width: 1200, height: 801 }],
  },
}

const faqs = [
  {
    q: 'Wo können Studierende in Österreich schnell und günstig 3D-drucken lassen?',
    a: 'Bei ekdruck in Gunskirchen bei Wels: Abgabe-, Anschauungs- und Präsentationsmodelle für alle Studiengänge, in 3 bis 5 Werktagen, Express in 24 bis 48 Stunden. Mit Studierendenausweis gibt es 10 % Rabatt, an österreichischen Unis und FHs 15 %. Versicherter Versand in ganz Österreich oder Abholung in der Werkstatt.',
  },
  {
    q: 'Was tun, wenn die 3D-Drucker an der Uni in der Abgabewoche ausgebucht sind?',
    a: 'Deadline und Daten an ekdruck schicken, auch am Wochenende. Innerhalb weniger Stunden kommt der Fixpreis und die ehrliche Ansage, ob sich der Termin ausgeht. Die Uni-Werkstatt bleibt die erste Adresse, ekdruck ist die Ausweichkapazität, wenn dort kein Slot mehr frei ist.',
  },
  {
    q: 'Was kostet ein 3D-gedrucktes Modell für Studierende?',
    a: 'Jedes Modell wird einzeln kalkuliert, damit du den günstigsten Preis für genau dein Projekt bekommst, Pauschalpreise gibt es bewusst nicht. Mit Studierendenausweis bekommst du 10 % Rabatt, an österreichischen Universitäten und Fachhochschulen 15 %. Einen Richtwert liefert der Kostenrechner auf ek-druck.at in 60 Sekunden.',
  },
  {
    q: 'Können auch große Modelle gedruckt werden, die auf Uni-Druckern nicht machbar sind?',
    a: 'Ja, große Anschauungs- und Präsentationsmodelle sind ein Schwerpunkt der Werkstatt, vom Ortsmodell im Maßstab 1:500 bis zum Anlagenmodell für die Projektpräsentation. Schick die Abmessungen mit deiner Anfrage, du bekommst gesagt, wie dein Modell umgesetzt wird und was es kostet.',
  },
  {
    q: 'Druckt ekdruck auch Funktionsteile oder mechanisch beanspruchte Teile?',
    a: 'Nein. Mechanisch beanspruchte Teile und Funktionsteile fertigt ekdruck nicht, dafür fehlt aktuell die Gewerbeberechtigung in Österreich. Gedruckt werden Anschauungs-, Präsentations-, Abgabe- und Designmodelle. Wenn dein Projekt in diese Kategorie fällt, bekommst du eine ehrliche Zusage, wenn nicht, eine ehrliche Absage.',
  },
  {
    q: 'Welche Studiengänge nutzen den Service?',
    a: 'Architektur und Raumplanung für Abgabe- und Städtebaumodelle, Maschinenbau und Automatisierungstechnik für Anschauungs- und Präsentationsmodelle ihrer Projekte, Design für Formstudien und Designprototypen. Auch Diplomarbeits- und Dissertationsmodelle sowie Modelle für Projektpräsentationen und Messeauftritte von Studierendenteams.',
  },
  {
    q: 'Wie schnell ist ein Modell fertig, wenn die Abgabe schon nächste Woche ist?',
    a: 'Standard sind 3 bis 5 Werktage ab Datenfreigabe, im Express 24 bis 48 Stunden. Ein komplettes Ortsmodell im Maßstab 1:500 wurde bereits von Sonntagabend bis Dienstagmittag gefertigt und versendet. Schick deine Deadline sofort, du bekommst eine ehrliche Ja/Nein-Antwort statt vager Vertröstungen.',
  },
  {
    q: 'Welche Dateien brauche ich für meine Anfrage?',
    a: 'Am einfachsten sind 3D-Daten als STL, STEP, OBJ oder aus Programmen wie Rhino, SketchUp, Fusion oder ArchiCAD. Es geht aber auch ohne: Pläne, Skizzen oder Screenshots reichen für eine Einschätzung, die Datenaufbereitung übernimmt ekdruck. Was sie kostet, erfährst du vor der Beauftragung.',
  },
  {
    q: 'Liefert ekdruck auch nach Wien, Graz, Linz und Innsbruck?',
    a: 'Ja, versicherter Versand geht in ganz Österreich, an die TU Wien und TU Graz genauso wie an die JKU Linz, die Kunstuni Linz, die Uni Innsbruck oder die FH-Standorte. Wer an der FH Oberösterreich in Wels studiert, hat es besonders nah: die Werkstatt in Gunskirchen ist zehn Minuten entfernt, Abholung spart den Versand.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '3D-Druck für das Studienprojekt beauftragen',
  totalTime: 'P5D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Deadline und Daten schicken', text: 'Abgabetermin plus 3D-Daten (STL, STEP, OBJ, Rhino, SketchUp, Fusion, ArchiCAD) oder nur Pläne über das Formular, per WhatsApp oder E-Mail schicken.' },
    { '@type': 'HowToStep', position: 2, name: 'Fixpreis und Ja/Nein-Antwort erhalten', text: 'Innerhalb weniger Stunden kommt der Fixpreis inklusive Studierendenrabatt und die ehrliche Ansage, ob sich die Deadline ausgeht.' },
    { '@type': 'HowToStep', position: 3, name: 'Druck und Lieferung', text: 'Standard in 3 bis 5 Werktagen, Express in 24 bis 48 Stunden. Versicherter Versand in ganz Österreich oder Abholung in Gunskirchen bei Wels.' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '3D-Druck Österreich', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Für Studierende', item: 'https://www.ek-druck.at/studenten' },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '3D-Druck für Studierende',
  serviceType: 'Abgabe-, Anschauungs- und Präsentationsmodelle aus dem 3D-Druck',
  provider: { '@type': 'LocalBusiness', name: 'ekdruck e.U.', address: { '@type': 'PostalAddress', streetAddress: 'Negrellistraße 15', postalCode: '4623', addressLocality: 'Gunskirchen', addressCountry: 'AT' }, telephone: '+43 676 5517197' },
  areaServed: 'AT',
  audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
  offers: [
    { '@type': 'Offer', name: '10% Studierendenrabatt', description: 'Für alle Studierenden mit gültigem Studierendenausweis, alle Studiengänge' },
    { '@type': 'Offer', name: '15% Rabatt für österreichische Universitäten und Fachhochschulen', description: 'Für Studierende an österreichischen Unis und FHs, mit Studierendenausweis' },
  ],
}

/** Grid-Hintergrund wie Hero.tsx (statisch, ohne Parallax) */
const gridBg = {
  backgroundImage: `
    linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)
  `,
  backgroundSize: '80px 80px',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* HERO + zitierfähiger Faktenblock — Designsprache wie Hero.tsx */}
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-10 md:pb-14 bg-background">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={gridBg} />
            <div className="absolute top-[15%] right-[8%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[80px]" />
          </div>

          <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10 hidden sm:block">
            <div className="mono text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase text-right leading-relaxed">
              Für Studierende<br />aller Studiengänge<br />Österreich
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="sticker border-primary text-primary w-fit mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Express 24&#8211;48h · Stand: September 2026
              </div>

              <h1 className="text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.05em] mb-6">
                <span className="block">Uni-Drucker voll?</span>
                <span className="block text-gradient mt-1 md:mt-3 text-[clamp(2rem,5.5vw,5rem)] pt-[0.1em] leading-[1.1]">
                  Dein Modell kommt trotzdem.
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
                ekdruck druckt Abgabe-, Anschauungs- und Präsentationsmodelle für Studierende aller
                Studiengänge, von Architektur über Maschinenbau bis Automatisierungstechnik und Design:
                Standard in <span className="text-foreground font-semibold">3 bis 5 Werktagen</span>, Express in{' '}
                <span className="text-foreground font-semibold">24 bis 48 Stunden</span>, mit Versand in ganz
                Österreich. Mit Studierendenausweis bekommst du{' '}
                <span className="text-primary font-semibold">10 % Rabatt</span>, an österreichischen Unis und FHs{' '}
                <span className="text-primary font-semibold">15 %</span>.
              </p>

              <div className="flex items-center gap-10 lg:gap-16 flex-wrap">
                {[
                  { val: '10%', label: 'Studierendenausweis' },
                  { val: '15%', label: 'Österr. Unis & FHs' },
                  { val: '24h', label: 'Express' },
                  { val: '5.0', label: 'Google Rating' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight mono">{val}</p>
                    <p className="mono text-[10px] text-foreground/30 mt-2 font-bold uppercase tracking-[0.2em]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAR + BEWEISFOTO */}
        <section className="py-10 md:py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <StudentenDeadlineForm />
              <figure className="md:sticky md:top-28">
                <img
                  src="/cases/ortsmodell-uebersicht.jpg"
                  alt="Weißes Ortsmodell im Maßstab 1:500 aus dem 3D-Druck, gefertigt als Abgabemodell"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full rounded-2xl border border-border object-cover aspect-[4/3]"
                />
                <figcaption className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-3">
                  Ortsmodell 1:500 · Auftrag Sonntagabend, Versand Dienstagmittag
                </figcaption>
              </figure>
            </div>
            <p className="text-sm text-muted-foreground max-w-7xl mx-auto mt-8">
              Kein Pauschalpreis-Schema: Jedes Modell wird einzeln kalkuliert, damit du den günstigsten Preis für
              genau dein Projekt bekommst. Richtwert vorab? Der{' '}
              <Link href="/kostenrechner" className="text-primary font-semibold hover:underline">Kostenrechner</Link>{' '}
              braucht 60 Sekunden.
            </p>
          </div>
        </section>

        {/* WANN ekdruck: 3 Einsatzfälle */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wofür Studierende ekdruck nutzen</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-10 md:mb-14">
                Drei Situationen, ein Ausweg.
              </h2>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div>
                  <h3 className="font-bold text-lg mb-2.5">Abgabewoche, kein Slot mehr frei</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Vor Abgaben sind die Drucker an vielen Unis und FHs auf Wochen ausgebucht. ekdruck fängt
                    das ab: Deadline schicken, Fixpreis bekommen, Modell kommt pünktlich. Auch wenn der
                    Auftrag am Sonntagabend eingeht.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2.5">Zu groß für den Uni-Drucker</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ortsmodelle, Geländemodelle, Anlagen- und Projektmodelle in Präsentationsgröße: große
                    Modelle sind ein Schwerpunkt der Werkstatt. Schick die Abmessungen, du bekommst gesagt,
                    wie dein Modell umgesetzt wird.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2.5">Knappes Budget</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Studieren ist teuer genug. Deshalb wird jedes Modell einzeln kalkuliert statt nach
                    Pauschalpreisen abgerechnet, dazu kommen 10 % Rabatt mit Studierendenausweis und 15 % an
                    österreichischen Unis und FHs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNI-WERKSTATT ZUERST — Ton-Leitplanke: nicht bei Werkstattleitern anecken */}
        <section className="py-12 md:py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-2xl border-2 border-border p-8 md:p-10 max-w-4xl">
                <h2 className="font-bold text-xl md:text-2xl mb-3">Deine Uni-Werkstatt bleibt die erste Adresse.</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Wenn deine Hochschule eine Modellbauwerkstatt oder ein Drucklabor hat, nutz sie: dort lernst
                  du am meisten und zahlst am wenigsten. ekdruck ist für die Fälle da, in denen das nicht
                  reicht, ausgebuchte Abgabewochen, Modelle über der Größe der Uni-Drucker oder Projekte,
                  die neben Job und Studium einfach fertig werden müssen. Werkstätten und FabLabs, die in
                  Stoßzeiten Anfragen weiterleiten möchten, können sich jederzeit direkt melden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABLAUF: 3 Schritte */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ablauf</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-10 md:mb-14">
                In drei Schritten zum Modell.
              </h2>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {[
                  { nr: '01', titel: 'Deadline und Daten schicken', text: 'Abgabetermin plus 3D-Daten (STL, STEP, OBJ, Rhino, SketchUp, Fusion, ArchiCAD) oder nur Pläne, über das Formular oder per WhatsApp. Auch sonntags um 23 Uhr.' },
                  { nr: '02', titel: 'Fixpreis und Ja/Nein-Antwort', text: 'Innerhalb weniger Stunden bekommst du den Fixpreis inklusive Studierendenrabatt und die ehrliche Ansage, ob sich deine Deadline ausgeht.' },
                  { nr: '03', titel: 'Druck und Lieferung', text: 'Standard in 3 bis 5 Werktagen, Express in 24 bis 48 Stunden. Versicherter Versand in ganz Österreich oder Abholung in Gunskirchen bei Wels.' },
                ].map(({ nr, titel, text }) => (
                  <div key={nr}>
                    <p className="mono text-5xl md:text-6xl font-bold text-primary/20 leading-none mb-4">{nr}</p>
                    <h3 className="font-bold text-lg mb-2.5">{titel}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE (Piding, freigegeben) */}
        <section className="py-16 md:py-24 border-t border-border relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Referenz · Ortsmodell 1:500</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
                So sieht Abgabequalität aus.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                Gedruckt, wie es bei Abgaben und Projektpräsentationen verlangt wird: weißes, mattes Material,
                klassische Präsentationsoptik, direkt aus den Planungsdaten.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <img src="/cases/ortsmodell-kirche.jpg" alt="Detail eines 3D-gedruckten Ortsmodells 1:500: Kirche und umliegende Gebäude" loading="lazy" decoding="async" className="w-full rounded-2xl border border-border object-cover aspect-square" />
                <img src="/cases/ortsmodell-hoehenlinien.jpg" alt="Geländemodell mit Höhenlinien und Straßenverlauf aus dem 3D-Druck" loading="lazy" decoding="async" className="w-full rounded-2xl border border-border object-cover aspect-square" />
                <img src="/cases/ortsmodell-tiefe.jpg" alt="Blick über ein weißes Modell im Maßstab 1:500 aus dem 3D-Druck" loading="lazy" decoding="async" className="w-full rounded-2xl border border-border object-cover aspect-square col-span-2 md:col-span-1" />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
                <span className="flex items-center gap-2 text-sm font-semibold"><Star className="w-4 h-4 text-primary fill-primary" /> 5,0 aus 31 Google-Bewertungen</span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> Gunskirchen bei Wels · Abholung möglich</span>
              </div>
            </div>
          </div>
        </section>

        {/* GEO-FAQ */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">FAQ · 3D-Druck im Studium</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-10 md:mb-14">
                Kurz beantwortet.
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-9">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-bold text-lg leading-snug mb-2.5">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCHLUSS-CTA → Formular-Anker */}
        <section className="relative overflow-hidden py-20 md:py-28 border-t border-border">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={gridBg} />
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
              Deine Deadline<br />
              <span className="text-gradient">entscheidet. Frag jetzt.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto">
              30 Sekunden ausfüllen, in wenigen Stunden weißt du Preis und Termin. Ehrlich, auch wenn es sich
              nicht mehr ausgeht.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" className="group text-base px-10 py-7 rounded-full" asChild>
                <a href="#deadline-check">
                  Zum Deadline-Check
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </Button>
              <Button size="lg" className="group text-base px-8 py-7 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold" asChild>
                <Link href="/kostenrechner">
                  <Calculator className="mr-2 w-4 h-4" />
                  Preis berechnen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
