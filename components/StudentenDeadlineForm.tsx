'use client'

/**
 * Deadline-Formular · Studierenden-Seite (/studenten)
 * ──────────────────────────────────────────────────────────────────
 * Bewusst UNCONTROLLED (FormData statt React-State je Feld):
 * damit per Design immun gegen den Autofill-Bug (Befund B13, 09.09.).
 * Maximal 4 Felder (Panel-Entscheidung "Student"), kein Upload —
 * Dateien kommen im Antwort-Mail, das hält die Hürde minimal.
 */

import { useState } from "react";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackLeadConversion } from "@/lib/consent";
import { holeHerkunft } from "@/lib/attribution";

const StudentenDeadlineForm = () => {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [fehler, setFehler] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFehler(null);
    const fd = new FormData(e.currentTarget);
    const deadline = String(fd.get("deadline") || "").trim();
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const nachricht = String(fd.get("nachricht") || "").trim();

    if (!deadline || !name || !email) {
      setFehler("Deadline, Name und E-Mail brauchen wir, sonst können wir nicht antworten.");
      return;
    }
    setBusy(true);
    try {
      const message = [
        "STUDENTEN-ANFRAGE (Deadline-Check)",
        `Abgabe-Deadline: ${deadline}`,
        nachricht ? `\nWas gebraucht wird:\n${nachricht}` : null,
        "\nRabatt: 10% Studierende / 15% österreichische Unis & FHs (Ausweis folgt mit Antwort)",
      ].filter(Boolean).join("\n");

      const { error } = await supabase.from("contact_inquiries").insert({
        name,
        email,
        project_type: "studentenprojekt",
        timeline: "express",
        message,
        status: "new",
        ...holeHerkunft(),
      });
      if (error) throw error;

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "form_submit_success", form_name: "studenten_deadline", project_type: "architekturmodell" });
      trackLeadConversion("kontaktformular");
      setDone(true);
    } catch (err) {
      console.error("Studenten-Formular:", err);
      setFehler("Senden hat nicht geklappt. Schreib uns direkt per WhatsApp, das geht genauso schnell.");
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
        <p className="text-xl font-bold mb-2">Angekommen!</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Du bekommst innerhalb weniger Stunden den Fixpreis und die klare Ansage, ob sich deine
          Deadline ausgeht. Schau auch in den Spam-Ordner. Wenn es sehr eilig ist:{" "}
          <a href="https://wa.me/436765517197" className="text-primary font-semibold underline underline-offset-2">
            WhatsApp an Kevin
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border-2 border-border bg-background p-6 md:p-8 space-y-4" id="deadline-check">
      <p className="font-bold text-lg">Deadline-Check: Geht sich deine Abgabe aus?</p>
      <div>
        <label htmlFor="sf-deadline" className="block text-sm font-medium mb-1.5">Wann ist deine Abgabe? *</label>
        <input id="sf-deadline" name="deadline" type="date" required className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sf-name" className="block text-sm font-medium mb-1.5">Dein Name *</label>
          <input id="sf-name" name="name" type="text" autoComplete="name" required placeholder="Vor- und Nachname" className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm" />
        </div>
        <div>
          <label htmlFor="sf-email" className="block text-sm font-medium mb-1.5">Deine E-Mail *</label>
          <input id="sf-email" name="email" type="email" autoComplete="email" required placeholder="du@student.at" className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm" />
        </div>
      </div>
      <div>
        <label htmlFor="sf-nachricht" className="block text-sm font-medium mb-1.5">Was brauchst du? <span className="text-muted-foreground font-normal">(optional)</span></label>
        <textarea id="sf-nachricht" name="nachricht" rows={2} placeholder="z. B. Ortsmodell 1:500 für die Abgabe, Anschauungsmodell der Semesterarbeit, STL vorhanden" className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
      </div>
      {fehler && <p className="text-sm text-destructive">{fehler}</p>}
      <button
        type="submit"
        disabled={busy}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-12 rounded-full font-semibold hover:bg-primary/90 transition-all disabled:opacity-60"
      >
        {busy ? "Wird gesendet…" : <>Deadline checken lassen <ArrowRight className="w-4 h-4" /></>}
      </button>
      <a
        href="https://wa.me/436765517197?text=Hallo%20Kevin%2C%20meine%20Abgabe%20ist%20am%20"
        className="w-full inline-flex items-center justify-center gap-2 border-2 border-border h-12 rounded-full font-semibold hover:border-primary/40 transition-all text-sm"
      >
        <MessageCircle className="w-4 h-4" /> Lieber per WhatsApp
      </a>
      <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
        Antwort in wenigen Stunden, direkt von Kevin. Deine Daten gehen an niemanden sonst,{" "}
        <a href="/datenschutz" className="underline">Datenschutz</a>.
      </p>
    </form>
  );
};

export default StudentenDeadlineForm;
