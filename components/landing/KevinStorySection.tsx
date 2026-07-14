'use client'

import Link from 'next/link'
import { Wrench, Heart, AlertCircle, Star, Phone, ArrowRight, MapPin, FileCheck, Layers, Package } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { BRAND } from '@/data/brandVoice'

/**
 * KevinStorySection · Inhaber- und Haltungs-Sektion fuer Ueber-uns
 * ──────────────────────────────────────────────────────────────────
 *
 * Ziel: zeigen, dass hinter ek-druck eine greifbare Person steht, ohne
 * privat zu werden. BEWUSST NICHT auf dieser Seite:
 *  - Alter, Studium, Abschluss oder Ausbildungsstand
 *  - frueherer oder aktueller Arbeitgeber
 *  - Umsatz-, Wachstums- oder Skalierungsziele
 * Das sind interne Themen und gehoeren nicht in die Aussenkommunikation.
 *
 * Vier Blocks:
 *  1. Wer hinter ek-druck steht
 *  2. Wie ein Auftrag laeuft (Prozess, kein Tagesablauf)
 *  3. Werte, jeweils mit konkretem Beispiel
 *  4. Was ich NICHT mache, explizite Grenzen
 */
const KevinStorySection = () => {
  return (
    <>
      {/* ═══ WER HINTER EK-DRUCK STEHT ═══ */}
      <section className="py-20 md:py-28 bg-background border-t border-border" aria-label="Wer hinter ek-druck steht">
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
                    <span className="text-primary">Inhaber.</span>
                  </h2>
                  <p className="mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-4 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    Werkstatt in {BRAND.location}
                  </p>
                </div>
                <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed">
                  <p>
                    Ich habe ek-druck 2024 gegründet und führe die Werkstatt als Inhaber. Anfrage, Angebot,
                    Datenprüfung, Fertigung, Nachbearbeitung, Übergabe: das läuft alles über meinen Tisch. Wer
                    hier schreibt, schreibt mit dem, der das Modell am Ende auch baut.
                  </p>
                  <p className="text-muted-foreground">
                    Warum 3D-Druck? Weil hier technische Planung und kaufmännische Abwicklung zusammenlaufen,
                    und beides liegt mir. Und weil kaum eine Arbeit so direkt an der Frage hängt, ob ein Modell
                    Menschen stehenbleiben lässt oder nicht. Genau die schwierigen Aufgaben sind die
                    interessanten: ein Ort im Maßstab 1:500, ein Schnittmodell, das eine Maschine erklärt, ein
                    Eye-Catcher, der einen Messestand trägt.
                  </p>
                  <p className="text-muted-foreground">
                    ek-druck ist bewusst spezialisiert: Architektur- und Städtebaumodelle, Messemodelle und
                    Ausstellungsobjekte. Kein austauschbarer Online-Druckservice, bei dem eine Datei in einen
                    Automaten fällt. Sondern Modelle, bei denen es auf Wirkung ankommt und bei denen jemand
                    hinschaut, bevor sie rausgehen.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ WIE EIN AUFTRAG LAEUFT ═══ */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border" aria-label="Wie ein Auftrag laeuft">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Wie ich arbeite
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                Wie ein Auftrag bei ek-druck läuft.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Damit Sie wissen, was passiert, nachdem Sie auf Senden geklickt haben, und warum die Antwort
                meist noch am selben Tag kommt.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: FileCheck,
                  step: 'Schritt 01',
                  title: 'Anfrage und Festpreis',
                  detail:
                    'Ihre Anfrage landet direkt bei mir, nicht in einer Vertriebs-Queue. Ich sehe mir die Daten an, prüfe Maßstab und Umfang und schicke Ihnen ein verbindliches Festpreisangebot. In der Regel binnen 6 Stunden, kostenlos und ohne Kleingedrucktes.',
                },
                {
                  icon: Layers,
                  step: 'Schritt 02',
                  title: 'Datenprüfung vor der Fertigung',
                  detail:
                    'Offene Kanten, fehlende Grundflächen, Details, die im gewünschten Maßstab gar nicht darstellbar sind: das klären wir vorher, nicht hinterher. Wenn etwas nicht funktioniert, sage ich es Ihnen, bevor gedruckt wird, und schlage eine Alternative vor.',
                },
                {
                  icon: Wrench,
                  step: 'Schritt 03',
                  title: 'Fertigung und Handarbeit',
                  detail:
                    'Die Anlagen laufen im Parallelbetrieb, auch nachts, mit Failure-Detection. Große Modelle werden aufgeteilt, die Trennlinien lege ich dorthin, wo ohnehin eine Kante sitzt. Danach kommt der Teil, den keine Maschine übernimmt: schleifen, spachteln, lackieren, beschriften.',
                },
                {
                  icon: Package,
                  step: 'Schritt 04',
                  title: 'Kontrolle und Übergabe',
                  detail:
                    'Jedes Modell wird vor dem Verpacken geprüft und fotografiert. Sie sehen es also, bevor es das Haus verlässt. Versand sicher verpackt, persönliche Übergabe ist möglich. Bei Rückfragen sprechen Sie mit dem, der das Modell gebaut hat.',
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className="bg-background border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                      {item.step}
                    </p>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 bg-foreground text-background rounded-3xl p-6 md:p-8">
              <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                Was das für Sie heißt
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Wenn Sie hier eine Anfrage stellen, landet sie in <strong>meinem Posteingang</strong>. Nicht in
                einem Vertriebs-System, nicht in einer Hotline-Queue. Sie schreiben, ich antworte. Sie senden
                Daten, ich kalkuliere. Ich fertige, ich prüfe, ich versende. Bei Rückfragen sprechen Sie mit dem,
                der das Modell gemacht hat. <strong>Keine Hierarchie zwischen uns.</strong>
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
                Vier Werte, mit Beispiel statt Floskel.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Jeder behauptet das gleiche: Qualität, Kundennähe, Verlässlichkeit. Hier steht, was diese Worte
                bei ek-druck konkret bedeuten, mit jeweils einem echten Beispiel aus der Werkstatt.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Heart,
                  value: 'Persönlich statt anonym',
                  meaning:
                    'ek-druck soll kein anonymes Druck-Portal werden. Sie sprechen vom ersten Mail bis zur Übergabe mit derselben Person. Lieber weniger Aufträge mit echtem Kontakt als viele, bei denen niemand mehr weiß, wer das Modell gebaut hat.',
                  example:
                    'Beispiel: Ein Kunde aus dem Mostviertel hatte an einem Freitagabend eine Last-Minute-Anfrage. Ich bin am Samstag selbst nach Niederösterreich gefahren und habe das Modell persönlich übergeben. Hätte ich nicht machen müssen. Wollte ich, weil der Termin für den Kunden wichtig war.',
                },
                {
                  icon: AlertCircle,
                  value: 'Ehrlich Nein sagen',
                  meaning:
                    'Ein guter Anbieter sagt nicht zu allem ja. Wenn eine Anfrage nicht zu dem passt, was ich verantworten kann, sage ich das offen und vermittle weiter. Ein ehrliches Nein kostet mich einen Auftrag und bringt mir einen Kunden, der wiederkommt.',
                  example:
                    'Beispiel: Ein Architekturbüro wollte ein Wettbewerbsmodell inklusive Datenaufbereitung in 48 Stunden. Machbar wäre es gewesen, gut geworden wäre es nicht. Ich habe abgesagt und erklärt, woran es scheitert. Beim nächsten Wettbewerb kamen sie mit sechs Tagen Vorlauf wieder.',
                },
                {
                  icon: Wrench,
                  value: 'Handwerk vor Automation',
                  meaning:
                    'Es gibt Anbieter, die FDM-Druck als reine Online-Plattform betreiben: hochladen, Algorithmus, Versand. Ich nicht. Jedes Modell wird von Hand geprüft, oft von Hand nachgearbeitet und vor dem Versand fotografiert. Das ist weniger skalierbar und sichtbar besser.',
                  example:
                    'Beispiel: Bei einem Maschinenmodell für die EMO Hannover habe ich zwölf Stunden allein an der Schnittfläche gearbeitet: schleifen, spachteln, in Kontrastfarbe lackieren. Ein Online-Anbieter hätte eine rohe Druckfläche geliefert. Der Unterschied war auf der Messe sichtbar.',
                },
                {
                  icon: MapPin,
                  value: 'Made in Austria, wörtlich genommen',
                  meaning:
                    'Werkstatt in Gunskirchen, Filament aus österreichischer Produktion (recycelte Industrieabfälle, Ökostrom, rund 80 % weniger CO₂ als Standard-Importware), Verpackung aus Österreich. Das ist keine Marketing-Floskel, sondern eine kurze Lieferkette. Und kurze Lieferketten sind der Grund, warum Termine halten.',
                  example:
                    'Beispiel: Als im Frühjahr 2025 wegen Material-Engpässen aus Übersee vielerorts vier bis sechs Wochen Lieferzeit angekündigt wurden, haben meine österreichischen Filament-Lieferanten ohne Unterbrechung geliefert. Für ek-druck-Kunden hat sich in dieser Phase nichts verschoben.',
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
                Die Grenzen meines Portfolios sind klar definiert, damit niemand enttäuscht wird. Wenn Ihre
                Anfrage hier landet, verweise ich Sie auf passende Spezialisten.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  point: 'Mechanisch lasttragende Teile',
                  detail:
                    'Dafür fehlt aktuell die Gewerbeberechtigung, und darum nehme ich solche Aufträge nicht an. Was ich mache: Anschauungsmodelle, Designstudien, Prototypen, Messemodelle, Architektur- und Städtebaumodelle.',
                },
                {
                  point: 'Spritzguss-Großserien über 5.000 Stück',
                  detail:
                    'Ab dieser Stückzahl ist Spritzguss günstiger und für identische Stücke die bessere Wahl. Darunter bin ich konkurrenzfähig. Darüber vermittle ich an Werkzeugbauer aus meinem Netzwerk.',
                },
                {
                  point: 'Resin- und SLA-Schmuck, Mikro-Detail',
                  detail:
                    'SLA-Druck im Schmuck-Bereich ist eine eigene Disziplin mit eigenem Anlagenpark. Mein Verfahren ist FDM und kommt bei Details unter 0,3 mm Wandstärke an seine Grenzen.',
                },
                {
                  point: 'Spielzeug für Kleinkinder',
                  detail:
                    'Zertifizierungen nach EN 71 liegen außerhalb meiner Kapazität. Mein PETG ist zwar FDA-konform für Lebensmittelkontakt, für eine formale Spielzeug-Zertifizierung brauchen Sie aber einen anderen Anbieter.',
                },
                {
                  point: 'Aufträge ohne Rechnung',
                  detail:
                    'ek-druck ist eine angemeldete e.U. mit UID. Alle Aufträge laufen über Rechnung, ohne Ausnahme. Das ist keine Verhandlungssache.',
                },
                {
                  point: 'Kostenlose Probemodelle',
                  detail:
                    'Für Schulen, Forschungsprojekte und gemeinnützige Initiativen gibt es Sonderkonditionen, dafür bin ich gerne zu haben. Kostenlose Aufträge zum Ausprobieren nicht.',
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
              Schicken Sie Daten, Skizze oder eine kurze Beschreibung. Sie bekommen das Festpreisangebot binnen
              6 Stunden, direkt von mir. Keine Hierarchie dazwischen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/kostenrechner"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
              >
                Daten hochladen
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
