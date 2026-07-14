import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Link from "next/link";

/**
 * Datenschutzerklärung · ekdruck e.U.
 * ─────────────────────────────────────────────────────────────────
 * Grundlage: DSGVO + WKO-Ratgeber (Rechtsgrundlage Art. 6 Abs. 1 lit. b,
 * Betroffenenrechte, Aufsichtsbehörde).
 *
 * WICHTIG: Der Inhalt beschreibt, was die Website TATSÄCHLICH verarbeitet
 * (Hosting Vercel, Datenbank + Chat-Backend Supabase, Terminbuchung Cal.com,
 * Karte Google Maps). Kein Analytics, kein Tracking, keine Werbe-Pixel.
 *
 * OFFEN (von Kevin zu ergänzen): Welches KI-Sprachmodell die Supabase-Function
 * 'rag-chat' aufruft. Solange das nicht feststeht, ist KI_UNTERAUFTRAGNEHMER
 * bewusst leer und der Absatz nennt nur, was verifiziert ist.
 */

// Sobald der Anbieter feststeht, hier eintragen (z.B. "OpenAI, Ireland/USA").
const KI_UNTERAUFTRAGNEHMER = "";

const STAND = "Juli 2026";

const Datenschutz = () => {
  return (
    <>
      <SEOHead
        title="Datenschutzerklärung | ekdruck e.U."
        description="Datenschutzerklärung von ekdruck e.U. Welche Daten wir verarbeiten, wozu, auf welcher Rechtsgrundlage und welche Rechte Sie haben."
        path="/datenschutz"
        noIndex={true}
      />
      <Navigation />

      <main className="min-h-screen bg-background text-foreground px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <header className="space-y-3 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>
            <p className="text-muted-foreground">
              Wir verarbeiten Ihre Daten nur, um Ihre Anfrage zu bearbeiten und die Website sicher zu
              betreiben. Nicht mehr. Diese Erklärung sagt Ihnen genau, was passiert.
            </p>
            <p className="text-sm text-muted-foreground">Stand: {STAND}</p>
          </header>

          {/* Kein Tracking */}
          <div className="rounded-2xl border-2 border-primary/25 bg-primary/5 p-6 mb-12">
            <h2 className="text-lg font-bold mb-2">Das Wichtigste zuerst</h2>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Wir setzen <strong className="text-foreground">kein Analyse-Tool</strong> ein (kein Google Analytics, kein Matomo).</li>
              <li>Wir setzen <strong className="text-foreground">keine Werbe-Pixel</strong> und kein Re-Targeting ein.</li>
              <li>Wir erstellen <strong className="text-foreground">keine Nutzerprofile</strong> und verkaufen keine Daten.</li>
              <li>
                Ihre <strong className="text-foreground">3D-Dateien bleiben im Browser.</strong> Der Kostenrechner
                berechnet lokal auf Ihrem Gerät. Die Datei selbst wird nicht an uns übertragen.
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            {/* 1 Verantwortlicher */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">1. Verantwortlicher</h2>
              <div className="text-muted-foreground space-y-1">
                <p className="text-foreground font-semibold">ekdruck e.U.</p>
                <p>Inhaber: Kevin Eppensteiner</p>
                <p>Negrellistraße 15, 4623 Gunskirchen, Österreich</p>
                <p>Firmenbuchnummer: FN639499s, Landesgericht Wels</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:office@ek-druck.at" className="text-primary underline underline-offset-4">
                    office@ek-druck.at
                  </a>
                  {" · "}
                  Telefon:{" "}
                  <a href="tel:+436765517197" className="text-primary underline underline-offset-4">
                    +43 676 5517197
                  </a>
                </p>
                <p className="pt-2">
                  Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich und wurde nicht bestellt. Für alle
                  Fragen zum Datenschutz erreichen Sie uns direkt unter der oben genannten Adresse.
                </p>
              </div>
            </section>

            {/* 2 Anfragen */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">2. Anfragen, Angebote und Kontakt</h2>
              <p className="text-muted-foreground">
                Wenn Sie uns über das Kontaktformular, den Kostenrechner, per E-Mail, Telefon oder WhatsApp
                kontaktieren, verarbeiten wir die Daten, die Sie uns dabei geben.
              </p>
              <dl className="text-sm text-muted-foreground space-y-2 border-l-2 border-border pl-5">
                <div>
                  <dt className="font-semibold text-foreground">Welche Daten</dt>
                  <dd>
                    Name, E-Mail-Adresse, Telefonnummer, Firma (optional) sowie die Angaben zu Ihrem Projekt
                    (etwa Material, Stückzahl, Maßstab, Richtpreis und Ihre Anmerkungen).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Wozu</dt>
                  <dd>Um Ihre Anfrage zu beantworten, ein Angebot zu legen und einen Auftrag abzuwickeln.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Rechtsgrundlage</dt>
                  <dd>
                    Art. 6 Abs. 1 lit. b DSGVO. Die Verarbeitung ist zur Erfüllung eines Vertrags mit Ihnen oder
                    zur Durchführung vorvertraglicher Maßnahmen erforderlich.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Wie lange</dt>
                  <dd>
                    Anfragen, aus denen kein Auftrag entsteht, löschen wir spätestens nach zwei Jahren. Kommt ein
                    Auftrag zustande, bewahren wir die zugehörigen Geschäftsunterlagen sieben Jahre auf
                    (§ 132 BAO).
                  </dd>
                </div>
              </dl>
              <p className="text-sm text-muted-foreground">
                Ohne diese Angaben können wir Ihre Anfrage nicht bearbeiten. Die Bereitstellung ist freiwillig,
                aber für ein Angebot notwendig.
              </p>
            </section>

            {/* 3 Kostenrechner */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">3. Kostenrechner und Ihre 3D-Dateien</h2>
              <p className="text-muted-foreground">
                Der Kostenrechner analysiert Ihre 3D-Datei <strong className="text-foreground">direkt in Ihrem
                Browser</strong>. Die Datei wird nicht auf unsere Server hochgeladen und verlässt Ihr Gerät nicht.
              </p>
              <p className="text-muted-foreground">
                Erst wenn Sie aktiv auf &bdquo;Unverbindliches Angebot anfordern&ldquo; klicken, werden Ihre
                Kontaktdaten und die berechnete Konfiguration (Dateiname, Material, Schichthöhe, Stückzahl,
                Richtpreis) an uns übermittelt. Die 3D-Geometrie selbst bleibt bei Ihnen, bis Sie sie uns
                ausdrücklich schicken.
              </p>
            </section>

            {/* 4 Terminbuchung */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">4. Terminbuchung</h2>
              <p className="text-muted-foreground">
                Für die Online-Terminvereinbarung nutzen wir ein eingebettetes Buchungs-Widget von{" "}
                <strong className="text-foreground">Cal.com</strong>. Wenn Sie einen Termin buchen, verarbeitet
                Cal.com Ihren Namen, Ihre E-Mail-Adresse und den gewählten Termin in unserem Auftrag. Beim Laden
                des Widgets wird Ihre IP-Adresse an Cal.com übertragen.
              </p>
              <p className="text-sm text-muted-foreground">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen).
              </p>
            </section>

            {/* 5 KI-Chat */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">5. KI-Chat-Assistent</h2>
              <p className="text-muted-foreground">
                Auf der Website steht ein Chat-Assistent zur Verfügung, der Fragen zu unseren Leistungen
                beantwortet. Wenn Sie ihn nutzen, werden Ihre Chat-Nachricht, der bisherige Gesprächsverlauf und
                eine zufällige Sitzungs-Kennung an unsere Backend-Funktion bei{" "}
                <strong className="text-foreground">Supabase</strong> übermittelt und dort mit Hilfe eines
                KI-Sprachmodells beantwortet.
                {KI_UNTERAUFTRAGNEHMER
                  ? ` Das Sprachmodell wird von ${KI_UNTERAUFTRAGNEHMER} bereitgestellt.`
                  : ""}
              </p>
              <p className="text-muted-foreground">
                Bitte geben Sie im Chat <strong className="text-foreground">keine sensiblen Daten</strong> ein. Für
                verbindliche Angebote und alles Vertrauliche nutzen Sie bitte das Kontaktformular oder schreiben
                Sie uns direkt.
              </p>
              <p className="text-sm text-muted-foreground">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt darin, Ihre Fragen
                schnell und rund um die Uhr zu beantworten. Die Nutzung des Chats ist freiwillig.
              </p>
            </section>

            {/* 6 Hosting und Server-Logs */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">6. Hosting und Server-Protokolle</h2>
              <p className="text-muted-foreground">
                Die Website wird bei <strong className="text-foreground">Vercel</strong> gehostet. Beim Aufruf
                einer Seite werden technisch notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit, die
                aufgerufene Seite, der übermittelte Browsertyp und das Betriebssystem.
              </p>
              <p className="text-sm text-muted-foreground">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im technisch
                fehlerfreien und sicheren Betrieb der Website. Diese Daten werden nicht mit anderen Daten
                zusammengeführt und nicht zur Erstellung von Nutzerprofilen verwendet.
              </p>
            </section>

            {/* 7 Google Maps */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">7. Google Maps</h2>
              <p className="text-muted-foreground">
                Auf der Kontaktseite binden wir eine Karte von{" "}
                <strong className="text-foreground">Google Maps</strong> ein, damit Sie unsere Werkstatt finden.
                Beim Laden der Karte wird Ihre IP-Adresse an Google übertragen. Google kann dabei Cookies setzen.
                Eine Übermittlung in die USA ist nicht ausgeschlossen.
              </p>
              <p className="text-sm text-muted-foreground">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer auffindbaren
                Adresse). Wenn Sie das nicht möchten, rufen Sie die Kontaktseite nicht auf oder blockieren Sie
                die Einbindung in Ihrem Browser. Unsere Adresse finden Sie auch als reinen Text im{" "}
                <Link href="/impressum" className="text-primary underline underline-offset-4">
                  Impressum
                </Link>
                .
              </p>
            </section>

            {/* 8 Empfänger */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">8. Empfänger und Auftragsverarbeiter</h2>
              <p className="text-muted-foreground">
                Wir geben Ihre Daten nicht zum Zweck der Werbung weiter und verkaufen sie nicht. Für den Betrieb
                der Website und die Bearbeitung Ihrer Anfrage setzen wir aber technische Dienstleister ein, die
                Daten in unserem Auftrag verarbeiten:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60">
                    <tr className="text-left">
                      <th className="p-3 font-bold">Dienstleister</th>
                      <th className="p-3 font-bold">Wofür</th>
                      <th className="p-3 font-bold">Welche Daten</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      {
                        n: "Vercel",
                        w: "Hosting der Website",
                        d: "IP-Adresse, Server-Protokolle",
                      },
                      {
                        n: "Supabase",
                        w: "Datenbank für Anfragen, Backend des Chat-Assistenten",
                        d: "Ihre Anfrage- und Kontaktdaten, Chat-Nachrichten",
                      },
                      {
                        n: "Cal.com",
                        w: "Online-Terminbuchung",
                        d: "Name, E-Mail-Adresse, Termin, IP-Adresse",
                      },
                      {
                        n: "Google (Maps)",
                        w: "Karte auf der Kontaktseite",
                        d: "IP-Adresse",
                      },
                    ].map((r) => (
                      <tr key={r.n} className="border-t border-border">
                        <td className="p-3 font-semibold text-foreground whitespace-nowrap">{r.n}</td>
                        <td className="p-3">{r.w}</td>
                        <td className="p-3">{r.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Wenn Sie uns über WhatsApp kontaktieren, gelten zusätzlich die Datenschutzbestimmungen des
                jeweiligen Anbieters. Der WhatsApp-Button auf unserer Website ist ein reiner Link. Es werden erst
                dann Daten übertragen, wenn Sie ihn anklicken.
              </p>
              <p className="text-sm text-muted-foreground">
                Bei einigen dieser Dienste kann eine Verarbeitung außerhalb der EU stattfinden. Soweit das der
                Fall ist, erfolgt die Übermittlung auf Grundlage der Standardvertragsklauseln der Europäischen
                Kommission.
              </p>
            </section>

            {/* 9 Rechte */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">9. Ihre Rechte</h2>
              <p className="text-muted-foreground">Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  ["Auskunft", "Sie können jederzeit erfahren, welche Daten wir zu Ihnen gespeichert haben."],
                  ["Berichtigung", "Falsche Daten müssen wir auf Ihren Wunsch korrigieren."],
                  ["Löschung", "Sie haben ein Recht auf Löschung, das sogenannte Recht auf Vergessenwerden."],
                  ["Einschränkung", "Sie können die Verarbeitung einschränken lassen."],
                  ["Datenübertragbarkeit", "Sie können Ihre Daten in einem gängigen Format erhalten."],
                  ["Widerspruch", "Sie können einer Verarbeitung widersprechen, die auf berechtigtem Interesse beruht."],
                  ["Benachrichtigung", "Bei einer Datenschutzverletzung informieren wir Sie, wenn dies vorgeschrieben ist."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">·</span>
                    <span>
                      <strong className="text-foreground">Recht auf {t}:</strong> {d}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Für alle diese Anliegen genügt eine formlose E-Mail an{" "}
                <a href="mailto:office@ek-druck.at" className="text-primary underline underline-offset-4">
                  office@ek-druck.at
                </a>
                . Wir antworten innerhalb eines Monats.
              </p>
            </section>

            {/* 10 Beschwerde */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">10. Beschwerderecht</h2>
              <p className="text-muted-foreground">
                Wenn Sie glauben, dass wir Ihre Daten nicht rechtmäßig verarbeiten, können Sie sich bei der
                Aufsichtsbehörde beschweren:
              </p>
              <div className="rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">Österreichische Datenschutzbehörde</p>
                <p>Barichgasse 40-42, 1030 Wien</p>
                <p>Telefon: +43 1 52 152-0</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:dsb@dsb.gv.at" className="text-primary underline underline-offset-4">
                    dsb@dsb.gv.at
                  </a>
                </p>
                <p>
                  Web:{" "}
                  <a
                    href="https://www.dsb.gv.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    dsb.gv.at
                  </a>
                </p>
              </div>
            </section>

            {/* 11 Änderungen */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold">11. Änderungen dieser Erklärung</h2>
              <p className="text-muted-foreground">
                Wenn sich die Website oder die eingesetzten Dienste ändern, passen wir diese Erklärung an. Es gilt
                jeweils die hier veröffentlichte Fassung. Stand: {STAND}.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Datenschutz;
