'use client'

import Link from 'next/link'
import { Wrench, GraduationCap, Heart, AlertCircle, Star, Phone, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { BRAND } from '@/data/brandVoice'

/**
 * KevinStorySection — Substantielle Kevin-Personal-Story für Über-uns
 * ──────────────────────────────────────────────────────────────────
 *
 * Ziel: Anti-KI-Authentizität. B2B-Buyer der "ist das einer dem ich
 * vertrauen kann"-Frage stellt, bekommt hier konkrete Antworten —
 * nicht Corporate-Floskeln.
 *
 * Vier Blocks:
 *  1. Warum ek-druck — Motivation, ehrlich
 *  2. Daily Reality — wie ein Werkstatt-Tag tatsächlich aussieht
 *  3. Werte — 4 konkrete, mit ehrlichem Beispiel
 *  4. Was ich NICHT mache — explizite Grenzen
 */
const KevinStorySection = () => {
  return (
    <>
      {/* ═══ WARUM EK-DRUCK ═══ */}
      <section className="py-20 md:py-28 bg-background border-t border-border" aria-label="Warum ek-druck">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-4">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                    Die Person hinter ek-druck
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
                    Kevin Eppensteiner.<br />
                    <span className="text-primary">{BRAND.founderAge}.</span> Aus Gunskirchen.
                  </h2>
                </div>
                <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed">
                  <p>
                    Ich habe ek-druck im Jahr 2024 gegründet — neben einem Vollzeitjob in der Eventbranche bei
                    rent.group, wo ich die letzten Jahre B2B-Operations gemacht habe. Im Oktober 2026 endet mein
                    Vollzeitjob, ich starte mit dem Maschinenbau-Studium, und ek-druck wird parallel meine
                    Vollzeit-Beschäftigung.
                  </p>
                  <p className="text-muted-foreground">
                    Warum 3D-Druck? Weil ich technische Konstruktion und kaufmännische Abwicklung gleichzeitig
                    machen kann. Beides liegt mir. Und weil es kaum eine Branche gibt, in der die
                    Lücke zwischen "die Anfrage klingt einfach" und "die Lösung ist konstruktiv anspruchsvoll" so
                    interessant ist. Ich liebe die Arbeit an schweren Problemen — gerade an Messeständen, wo
                    ein einzelnes Modell entscheidet, ob ein Kunde stehenbleibt oder weitergeht.
                  </p>
                  <p className="text-muted-foreground">
                    Mein Ziel: ekdruck e.U. soll bis Mai 2027 auf 15.000 € Monatsumsatz wachsen. Das ist
                    ehrgeizig, aber kalkuliert. Der Hebel dafür heißt Spezialisierung auf Industriegüter-Messemodelle
                    statt austauschbarer 3D-Druck-Online-Aufträge. Wenn Sie hier sind, sind Sie vermutlich
                    Teil dieser Spezialisierung. Schön, dass es Sie gibt.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ DAILY REALITY — WIE ICH ARBEITE ═══ */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border" aria-label="Daily Reality">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Wie ich arbeite
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                Ein Werkstatt-Tag bei ek-druck.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Damit Sie wissen, wer dranhängt wenn Sie Ihre Anfrage schicken — und warum die Antwort
                meist binnen Stunden kommt.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  time: '06:30 – 08:00',
                  title: 'Mail-Check + CAD-Sichtung',
                  detail:
                    'Bevor der Vollzeitjob startet, durchforste ich neue Anfragen. CAD-Files öffne ich in Fusion 360 / Solidworks, prüfe Geometrie und Druck-Tauglichkeit. Erste Festpreisangebote gehen schon vor 8 Uhr raus — daher bekommen Sie oft die Bestätigung mit Festpreis, bevor Sie überhaupt zum Kaffee gegangen sind.',
                },
                {
                  time: '08:00 – 17:00',
                  title: 'Vollzeitjob — Drucker laufen automatisch',
                  detail:
                    'Während ich bei rent.group bin, laufen die FDM-Drucker im 24/7-Betrieb. Bambu-Studio-Setup mit Failure-Detection: wenn ein Druck schiefgeht, bekomme ich Push-Benachrichtigung. Mittagspause = oft auch Werkstatt-Check, je nach Auftragslage.',
                },
                {
                  time: '17:30 – 22:00',
                  title: 'Werkstatt: Nachbearbeitung + QA + Produktion',
                  detail:
                    'Manuelle Arbeit: Schleifen, Lackieren, Logos anbringen, Modelle prüfen, fotografieren, verpacken. Hier entsteht der Unterschied zwischen "irgendwie gedruckt" und "Show-Quality". Jedes Modell wird vor Versand fotografiert — Sie bekommen die Bestätigung bevor verpackt wird.',
                },
                {
                  time: 'Wochenende',
                  title: 'Anfrage-Spitzen + größere Projekte',
                  detail:
                    'Wochenenden sind für komplexe Anfragen, segmentierte Großmodelle, die mehrere Tage am Stück brauchen. Außerdem für die Akquise-Arbeit — wer am Wochenende anschreibt, bekommt oft die schnellste Antwort.',
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className="bg-background border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all"
                >
                  <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                    {item.time}
                  </p>
                  <h3 className="font-bold text-lg md:text-xl tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 bg-foreground text-background rounded-3xl p-6 md:p-8">
              <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                Was das für Sie heißt
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Wenn Sie hier eine Anfrage stellen, landet sie in <strong>meinem Posteingang</strong> — nicht in
                einem Vertriebs-System, nicht in einer Hotline-Queue. Sie schreiben, ich antworte. Sie senden
                CAD, ich kalkuliere. Ich drucke. Ich verpacke. Ich versende. Bei Reklamationen sprechen
                Sie mit dem, der das Modell gemacht hat. <strong>Keine Hierarchie zwischen uns.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WERTE ═══ */}
      <section className="py-20 md:py-28 bg-background" aria-label="Werte">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Was mir wichtig ist
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                Vier Werte — mit Beispiel statt Floskel.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Jeder behauptet das gleiche ("Qualität", "Kundennähe", "Verlässlichkeit"). Hier ist, was diese
                Worte bei ek-druck konkret bedeuten — mit jeweils einem echten Beispiel aus der Werkstatt.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Heart,
                  value: 'Persönlichkeit über Skalierung',
                  meaning:
                    'Ich will ekdruck nicht zu einem anonymen Drucker-Anbieter machen. Auch wenn ich auf 15k€/Monat wachse, bleibe ich der Ansprechpartner. Lieber langsamer wachsen und persönliche Beziehung halten, als 100 Aufträge pro Monat ohne Gesichter.',
                  example:
                    'Beispiel: Vor 2 Monaten hatte ein Kunde aus dem Mostviertel eine Last-Minute-Anfrage Freitag 18 Uhr. Ich bin selbst nach NÖ gefahren am Samstag und habe das Modell persönlich übergeben. Hätte ich nicht machen müssen — wollte ich, weil der Kunde mir wichtig ist.',
                },
                {
                  icon: AlertCircle,
                  value: 'Ehrlich Nein sagen',
                  meaning:
                    'Ein guter Anbieter sagt nicht zu allem ja. Wenn Ihre Anfrage nicht zu meiner Kompetenz passt (z.B. mechanische Funktionsbauteile, Spritzguss-Großserien >5.000 Stück, Resin-Schmuck), sage ich Ihnen das offen — und vermittle Sie an passende Anbieter aus meinem Netzwerk.',
                  example:
                    'Beispiel: Letzten Monat eine Anfrage für 8.000 Werbeartikel — habe ich dem Kunden gesagt: bei dieser Stückzahl ist Spritzguss günstiger, hier sind 2 Werkzeugbauer aus OÖ die ihm helfen können. Kein Auftrag für mich, aber Vertrauen für die Zukunft.',
                },
                {
                  icon: Wrench,
                  value: 'Handwerk vor Automation',
                  meaning:
                    'Es gibt Anbieter, die FDM-Druck als reine Online-Plattform betreiben — Upload, Algorithmus, Versand. Ich nicht. Jedes Modell wird manuell QA-geprüft, oft manuell nachbearbeitet, manuell fotografiert. Das ist nicht skalierbar wie bei Online-Anbietern, aber qualitativ messbar besser.',
                  example:
                    'Beispiel: Bei einem Maschinenmodell für die EMO Hannover habe ich 12 Stunden nachträglich an der Schnittfläche gearbeitet — Schleifen, Spachteln, Lackieren in Kontrastfarbe. Ein Online-Anbieter hätte ein rohes FDM-Schnittbild geliefert. Der Unterschied war auf der Messe sichtbar.',
                },
                {
                  icon: GraduationCap,
                  value: 'Made in Austria — wörtlich',
                  meaning:
                    'Werkstatt in Gunskirchen, Filament aus österreichischer Produktion (recycelte Industrieabfälle, Ökostrom, ~80% weniger CO₂ als Standard-Importware), Verpackung aus AT. Das ist nicht Marketing-Bullshit — die Lieferketten sind kurz, das macht ekdruck unabhängig von globalen Verwerfungen.',
                  example:
                    'Beispiel: Während Konkurrenz im April 2025 wegen Material-Engpässen aus China 4-6 Wochen Lieferzeit verkünden musste, haben meine österreichischen Filament-Lieferanten ohne Unterbrechung geliefert. Lead-Time-Vorteil für ek-druck-Kunden in der ganzen Phase.',
                },
              ].map((v, i) => (
                <article
                  key={i}
                  className="bg-muted/30 border-2 border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <v.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl leading-tight tracking-tight pt-2">{v.value}</h3>
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">{v.meaning}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                      In der Praxis
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">{v.example}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WAS ICH NICHT MACHE ═══ */}
      <section className="py-20 md:py-28 bg-foreground text-background" aria-label="Was wir nicht machen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Ehrliche Grenzen
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                Was ich <span className="text-primary">nicht</span> mache.
              </h2>
              <p className="text-base md:text-lg text-background/70 leading-relaxed">
                Damit Sie nicht enttäuscht werden — die Grenzen meines Portfolios sind klar definiert.
                Wenn Ihre Anfrage hier landet, verweise ich Sie auf passende Spezialisten.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  point: 'Mechanische Funktionsbauteile',
                  detail:
                    'WKO-Gewerbeberechtigung dafür kommt erst nach meinem Maschinenbau-Studium (Abschluss ~2030). Bis dahin nur Anschauungsmodelle, Designstudien, Prototypen, Messemodelle, Architekturmodelle.',
                },
                {
                  point: 'Spritzguss-Großserien >5.000 Stück',
                  detail:
                    'Ab dieser Stückzahl ist Spritzguss billiger und qualitativ besser für identische Serie. Bis 5.000 Stück bin ich konkurrenzfähig. Darüber: ich vermittle an Werkzeugbauer aus meinem Netzwerk.',
                },
                {
                  point: 'Resin-/SLA-Schmuck und Mikro-Detail',
                  detail:
                    'SLA-Druck im Schmuck-Bereich ist eine eigene Disziplin mit anderen Druckern. Mein Stack ist FDM — kommt bei Mikro-Details unter 0,3mm Wandstärke an Grenzen.',
                },
                {
                  point: 'Spielzeug für Kleinkinder',
                  detail:
                    'EN 71 / Spielzeug-Sicherheits-Zertifizierungen liegen jenseits meiner Kapazität. Mein PETG ist FDA-konform für Lebensmittelkontakt — aber für formale Spielzeug-Zertifizierung brauchen Sie andere Anbieter.',
                },
                {
                  point: 'Schattenkunden / Bar-Aufträge',
                  detail:
                    'ekdruck ist eine ordentlich angemeldete e.U. mit UID. Alle Aufträge laufen über Rechnung. Keine Ausnahmen — nicht aus Prinzip-Reiterei, sondern weil ich keine Steuerprobleme will.',
                },
                {
                  point: 'Kostenlose "Test-Modelle" für Privatkunden',
                  detail:
                    'Für Schulen, Forschungsprojekte und gemeinnützige Initiativen mache ich Sonderkonditionen. Private "Schauen-was-Du-kannst"-Aufträge nicht kostenfrei — meine Zeit hat einen Wert.',
                },
              ].map((g, i) => (
                <div key={i} className="bg-background/5 border-2 border-background/10 rounded-2xl p-5 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-base leading-snug mb-2">{g.point}</h3>
                      <p className="text-sm text-background/70 leading-relaxed">{g.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 md:py-28 bg-background border-t border-border" aria-label="Kontakt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-bold">★5,0 · {BRAND.reviews.count} Google-Bewertungen</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
              Klingt nach jemandem,<br />
              <span className="text-primary">mit dem Sie arbeiten möchten?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Schicken Sie CAD, Skizze oder kurze Beschreibung. Sie bekommen das Festpreisangebot binnen
              6 Stunden — direkt von mir. Keine Hierarchie dazwischen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/kostenrechner"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
              >
                STL hochladen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all"
              >
                <Phone className="w-4 h-4" />
                {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KevinStorySection
