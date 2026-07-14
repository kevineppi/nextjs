import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Check, X, Clock, Mail, Phone, MessageCircle, ArrowRight, Shield,
  AlertTriangle, RotateCw, FileCheck, Eye, Camera, Star, Award,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { BRAND } from '@/data/brandVoice'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Qualitäts-Versprechen & Garantien ★5,0 | ekdruck'
const DESCRIPTION =
  '6h-Angebots-Garantie · QA-Foto vor Versand · 14-Tage-Reklamation · transparenter Reklamationsablauf. Ehrliche Versprechen statt Floskeln. ★5,0.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/qualitaet'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/qualitaet',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

// Inline JSON-LD: FAQPage + Service mit Garantie-Details
const promiseFaqs = [
  {
    question: 'Was passiert, wenn das Modell beschädigt ankommt?',
    answer: 'Foto-Beleg innerhalb 14 Tagen per Mail oder WhatsApp an mich. Bei Transportschaden: Nachdruck startet binnen 48h, kostenfrei. Bei Druck-/Material-Fehler unsererseits: 100% Kostenübernahme + Express-Nachfertigung. Sie tragen kein Risiko bei nachweislichen Mängeln aus meinem Verantwortungsbereich.',
  },
  {
    question: 'Wie schnell antworten Sie auf eine Anfrage?',
    answer: 'Werktags <2h auf Mail, WhatsApp und Telefon. Verbindliches Festpreisangebot in 6h nach CAD-Eingang. Bei komplexen Projekten (Segmentierung >5 Teile, Cutaway-Konstruktion) bis zu 24h · aber dann mit Zwischenmeldung wann das Angebot fertig ist.',
  },
  {
    question: 'Was kostet eine Modell-Revision nach Erst-Lieferung?',
    answer: 'Kleinere Anpassungen (z.B. Farbänderung an einer Sektion, kleines Logo-Update): kostenfrei wenn binnen 7 Tagen reklamiert. Größere Revisionen (Geometrie-Änderung): nach Aufwand, transparent kalkuliert vor der Arbeit. Bei NDA-Projekten wird die alte Modellfassung dabei automatisch entsorgt.',
  },
  {
    question: 'Was ist mit NDA / Geheimhaltung?',
    answer: 'Standard-NDA-Variante: Datentransfer über verschlüsselte Strecke, separater Werkstattbereich für sensible Projekte, automatische Löschung der CAD-Dateien nach Lieferung (vertraglich zugesichert). Bei besonders sensiblen Aufträgen Sonder-NDA mit branchen-spezifischen Klauseln möglich.',
  },
  {
    question: 'Wie zeigen Sie mir die Qualität vor Versand?',
    answer: 'Jedes Modell wird vor Verpackung von mir persönlich QA-geprüft (Maßhaltigkeit, Oberfläche, Lackierung, Logos). Sie bekommen Foto-Bestätigung per Mail oder WhatsApp, bevor verpackt wird. Bei Großprojekten >€2.000 zusätzlich Video-Walkaround.',
  },
  {
    question: 'Was passiert, wenn meine Anfrage nicht zu Ihnen passt?',
    answer: 'Dann sag ich es offen. Mechanische Funktionsbauteile (WKO-Berechtigung erst ab Studium), Spritzguss-Klein-Serien >5.000 Stück, sehr fein detaillierte Resin-Schmuck-Modelle · fallen alle nicht in meine Kernkompetenz. Statt ein schwaches Angebot abzugeben verweise ich auf passende Anbieter aus meinem Netzwerk.',
  },
  {
    question: 'Wie verbindlich ist Ihr Festpreis?',
    answer: 'Voll verbindlich nach CAD-Freigabe. Sie unterschreiben den Festpreis, der Preis steht. Kein "wir mussten leider 20% draufschlagen weil...". Aufpreise nur wenn Sie nachträglich Specs ändern (z.B. zusätzliche Lackierung) · und dann erst nach Ihrer Schriftlich-Freigabe.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: promiseFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const promiseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ekdruck Qualitäts-Versprechen',
  description: DESCRIPTION,
  provider: {
    '@type': 'LocalBusiness',
    name: 'ekdruck e.U.',
    url: 'https://www.ek-druck.at',
    telephone: '+436765517197',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Negrellistraße 15',
      addressLocality: 'Gunskirchen',
      postalCode: '4623',
      addressRegion: 'Oberösterreich',
      addressCountry: 'AT',
    },
  },
  areaServed: ['AT', 'DE', 'CH'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Qualitäts-Garantien',
    itemListElement: [
      { '@type': 'Offer', name: '6h-Angebots-Garantie', description: 'Verbindliches Festpreisangebot binnen 6 Stunden nach CAD-Eingang' },
      { '@type': 'Offer', name: '14-Tage-Reklamation', description: 'Foto-Beleg bei Mängeln innerhalb 14 Tagen · Nachdruck binnen 48h' },
      { '@type': 'Offer', name: 'QA-Foto vor Versand', description: 'Jedes Modell manuell geprüft und fotodokumentiert vor Verpackung' },
      { '@type': 'Offer', name: 'NDA-Konformität', description: 'Verschlüsselter Datentransfer + automatische CAD-Löschung nach Lieferung' },
    ],
  },
}

export default function QualityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(promiseSchema) }} />

      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={[{ name: 'Qualität & Garantien', url: '/qualitaet' }]} />

        {/* HERO */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                Qualitäts-Versprechen
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                So arbeite ich.<br />
                <span className="text-primary">Versprochen · und überprüfbar.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                Niemand schickt CAD an einen Fremden und erwartet wundervolle Modelle ohne Sicherheit. Daher: ehrliche Versprechen mit konkreten Zahlen, klare Reklamations-Ablauf, transparente Risiko-Verteilung. Das hier sind die Spielregeln, nach denen ek-druck arbeitet · keine Marketing-Floskeln, sondern operative Realität.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all">
                  Anfrage stellen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all">
                  <Phone className="w-4 h-4" />
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PROMISES */}
        <section className="py-20 md:py-28 bg-muted/30 border-y border-border" aria-label="Kern-Versprechen">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">5 Kern-Versprechen</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em]">
                  Was Sie verlässlich von mir bekommen.
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { icon: Clock, label: 'Angebot in 6h', detail: 'Verbindliches Festpreisangebot binnen 6 Werkstunden nach CAD-Eingang. Bei komplexen Konstruktionen Zwischenmeldung.' },
                  { icon: Camera, label: 'QA-Foto vor Versand', detail: 'Jedes Modell manuell QA-geprüft, fotodokumentiert. Sie sehen das Modell bevor es im Karton ist.' },
                  { icon: Mail, label: 'Antwort < 2h', detail: 'Werktags Mail/WhatsApp/Telefon · Antwortzeit unter 2 Stunden. Sonntags kein Service.' },
                  { icon: RotateCw, label: '14 Tage Reklamation', detail: 'Foto-Beleg bei Mängeln. Bei nachweislichem Druck-/Material-Fehler: Nachdruck startet binnen 48h, kostenlos.' },
                  { icon: Shield, label: 'NDA-konform', detail: 'Verschlüsselter Datentransfer, separater Werkstattbereich, CAD-Löschung nach Lieferung vertraglich zugesichert.' },
                ].map((p, i) => (
                  <article key={i} className="bg-background border-2 border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Versprechen {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-bold text-base mb-2 tracking-tight">{p.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS DETAIL */}
        <section className="py-20 md:py-32 bg-background" aria-label="Prozess-Detail">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">So läuft ein Auftrag</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Von der ersten Mail<br />bis zum Modell im Karton.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Acht überprüfbare Schritte. Keine Black-Box, keine "wir bauen das schon irgendwie".
                </p>
              </div>
              <div className="space-y-2">
                {[
                  { num: '01', title: 'CAD-Eingang', timing: 'Tag 0', detail: 'Sie senden STEP, STL, IGES, 3MF oder native Format (SolidWorks, Inventor, Fusion 360, ArchiCAD, Revit). Auch nur Skizze + Foto reicht · wir modellieren dann gegen Stundensatz.' },
                  { num: '02', title: 'Eingangs-Bestätigung', timing: 'innerhalb 2h werktags', detail: 'Ich bestätige Eingang, stelle ggf. Rückfragen zu Maßstab, Material, Lackierung, Lieferort.' },
                  { num: '03', title: 'Festpreisangebot', timing: 'innerhalb 6h werktags', detail: 'Verbindlich, transparent. Material-Spezifikation, Nachbearbeitung, Lieferzeit, Versandkosten · alles auf einem Blatt.' },
                  { num: '04', title: 'Sie bestätigen', timing: 'wann es Ihnen passt', detail: 'Auftragserteilung per Mail oder PDF-Unterschrift. Bei Erstaufträgen Vorkasse möglich (oder Anzahlung 30%), bei Folgeaufträgen Zahlungsziel.' },
                  { num: '05', title: 'Druck startet', timing: 'meist nächster Werktag', detail: 'CAD-Aufbereitung, Slicing, Druckbett-Vorbereitung. Bei Express noch am gleichen Tag starten.' },
                  { num: '06', title: 'Nachbearbeitung', timing: '0-3 Tage nach Druckende', detail: 'Schleifen, Grundieren, Lackieren wenn beauftragt. Logo-Anbringung, Sonder-Details. Manuelle QA jedes Bauteils.' },
                  { num: '07', title: 'QA-Foto + Versand-Freigabe', timing: 'vor Verpackung', detail: 'Foto-Bestätigung an Sie per Mail/WhatsApp. Bei Großprojekten Video-Walkaround. Erst nach Ihrer OK-Bestätigung wird verpackt.' },
                  { num: '08', title: 'Versand + Anlieferung', timing: 'AT 1-2 Tage, DACH 2-4 Tage', detail: 'ÖPOST / DPD / DHL. Bei Großmodellen ggf. Spedition oder persönliche Anlieferung. Tracking-Link automatisch.' },
                ].map((step, i) => (
                  <div key={i} className="grid md:grid-cols-12 gap-6 bg-background border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all">
                    <div className="md:col-span-2">
                      <p className="mono text-5xl md:text-6xl font-bold text-primary/20 leading-none">{step.num}</p>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-bold text-lg md:text-xl tracking-tight mb-1">{step.title}</h3>
                      <p className="mono text-xs font-bold uppercase tracking-wider text-primary">{step.timing}</p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-base text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECLAMATION FLOW */}
        <section className="py-20 md:py-28 bg-foreground text-background" aria-label="Reklamationsablauf">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wenn etwas schiefläuft</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Reklamations-Ablauf<br />- ohne Hürden.
                </h2>
                <p className="text-base md:text-lg text-background/70 leading-relaxed">
                  Ich gehe davon aus, dass Sie sich melden weil etwas wirklich nicht passt · nicht weil Sie das System ausnutzen. Daher: kurzer Ablauf, klare Verantwortlichkeit, schnelle Lösung.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    label: 'Schritt 1',
                    title: 'Sie melden sich',
                    detail: 'Foto vom Mangel an mich per Mail oder WhatsApp. Innerhalb 14 Tagen nach Anlieferung. Kurze Beschreibung: was passt nicht, was war erwartet.',
                    icon: AlertTriangle,
                  },
                  {
                    label: 'Schritt 2',
                    title: 'Ich melde mich zurück',
                    detail: 'Innerhalb 24h werktags. Klassifizierung: Transportschaden / mein Fehler / Spec-Missverständnis. Lösungs-Vorschlag konkret formuliert.',
                    icon: Eye,
                  },
                  {
                    label: 'Schritt 3',
                    title: 'Wir lösen es',
                    detail: 'Bei meinem Fehler: kostenfreier Nachdruck, Express, neue Lieferung. Bei Transport: ich kläre mit der Spedition + parallel Nachdruck. Bei Spec-Missverständnis: gemeinsam justieren, fairer Aufpreis nur bei mehr Material.',
                    icon: Check,
                  },
                ].map((s, i) => (
                  <div key={i} className="bg-background/5 border-2 border-background/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
                        <s.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">{s.label}</p>
                    </div>
                    <h3 className="font-bold text-lg mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-sm text-background/70 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-8 bg-primary/10 border-2 border-primary/20 rounded-2xl">
                <p className="font-bold text-lg mb-2">Was Sie KEINESFALLS bekommen werden:</p>
                <ul className="space-y-2 text-base text-background/80">
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-primary mt-0.5 shrink-0" /> "Das ist nicht mein Problem, kontaktieren Sie die Spedition selbst"</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-primary mt-0.5 shrink-0" /> "Die Reklamationsfrist war 7 Tage" (es sind 14)</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-primary mt-0.5 shrink-0" /> "Wir bearbeiten Ihre Reklamation in 14 Werktagen" (es sind &lt;24h)</li>
                  <li className="flex items-start gap-2"><X className="w-5 h-5 text-primary mt-0.5 shrink-0" /> "Bei B-Ware geben wir 80% Gutschrift" (nein · entweder es passt oder Sie bekommen ein neues Modell)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DON'T DO · Ehrliche Grenzen */}
        <section className="py-20 md:py-28 bg-background border-y border-border" aria-label="Was wir nicht machen">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ehrliche Grenzen</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Was wir <span className="text-destructive/70">nicht</span> machen.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Ein guter Anbieter sagt nicht zu allem ja. Hier ist explizit was nicht in mein Portfolio gehört · Sie sollten lieber wissen wo Sie besser anders suchen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: 'Mechanisch lasttragende Teile', detail: 'Dafür fehlt aktuell die Gewerbeberechtigung, solche Aufträge nehme ich nicht an. Anschauungsmodelle, Designstudien, Prototypen, Messemodelle, Architektur- und Städtebaumodelle · ja. Lasttragende Teile · nein.' },
                  { title: 'Spritzguss-Großserien >5.000 Stück', detail: 'Ab dieser Stückzahl ist Spritzguss billiger. Ich verweise auf passende Werkzeugbauer aus meinem Netzwerk. Bis 5.000 Stück bin ich konkurrenzfähig.' },
                  { title: 'Resin-Schmuck und Mikro-Detailmodelle', detail: 'SLA/DLP-Druck im Schmuck-Bereich ist eine eigene Disziplin. FDM-Druck (mein Stack) kommt bei Mikro-Details an Grenzen.' },
                  { title: 'Spielzeug für Kleinkinder', detail: 'Lebensmittel-/Kleinkind-Sicherheits-Zertifizierungen liegen jenseits meiner Kapazität. PETG ist FDA-konform · aber für Spielzeug-Zertifizierung brauchen Sie andere Anbieter.' },
                  { title: 'Schattenkunden / Bar-Aufträge ohne Rechnung', detail: 'ekdruck ist eine ehrlich angemeldete e.U. Alle Aufträge laufen ordentlich über Rechnung mit UID-Vermerk. Keine Ausnahmen.' },
                  { title: 'Kostenlose "Test-Modelle" für Privatkunden', detail: 'Für Schulen, Forschungs-Projekte und gemeinnützige Initiativen mache ich Sonderkonditionen. Private "Schau-mal-was-Du-kannst"-Aufträge nicht kostenfrei.' },
                ].map((g, i) => (
                  <div key={i} className="bg-background border-2 border-border rounded-2xl p-6 hover:border-destructive/20 transition-all">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-destructive/60 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold text-base leading-snug mb-2">{g.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{g.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-muted/30 border-y border-border" aria-label="FAQ">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Häufige Fragen</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em]">
                  Fragen die andere<br />vor Ihnen hatten.
                </h2>
              </div>
              <div className="space-y-3">
                {promiseFaqs.map((f, i) => (
                  <details key={i} className="group border-2 border-border bg-background rounded-2xl p-6 hover:border-primary/30 transition-all open:border-primary/30">
                    <summary className="font-bold text-base md:text-lg cursor-pointer flex items-start gap-3 list-none">
                      <span className="mono text-sm font-bold text-primary shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1 leading-snug">{f.question}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 ml-8 text-muted-foreground leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Jetzt testen statt diskutieren</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                CAD raufladen · bekommen Sie<br />
                <span className="text-primary">das Angebot in 6h.</span>
              </h2>
              <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Probieren Sie meine 6h-Garantie aus. Wenn das Angebot später kommt: nicht bezahlbar, ich übernehme den Express-Aufpreis bei der Produktion. So sicher bin ich.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/kontakt" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all">
                  CAD jetzt schicken <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all">
                  <Mail className="w-4 h-4" /> {BRAND.email}
                </a>
                <a href="https://wa.me/436765517197" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
