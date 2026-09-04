/**
 * Herkunfts-Erfassung (Attribution) · ekdruck
 * ──────────────────────────────────────────────────────────────────
 *
 * Zweck: Bei jeder Anfrage soll nachvollziehbar sein, WOHER der
 * Besucher kam. Ohne das lässt sich nicht unterscheiden, ob eine
 * Anfrage aus einer Google-Anzeige, aus der organischen Suche, aus
 * Kaltakquise oder aus einer Empfehlung stammt.
 *
 * Funktionsweise:
 * 1. Beim ERSTEN Seitenaufruf einer Sitzung werden gclid, die utm_*
 *    Parameter, Landingpage und Referrer gelesen und gespeichert.
 * 2. Gespeichert wird zweifach:
 *    - sessionStorage: gilt für die laufende Sitzung
 *    - localStorage:   überdauert die Sitzung (Besucher klickt heute
 *      die Anzeige, schickt die Anfrage aber erst übermorgen)
 *    Beim Auslesen gewinnt die Sitzung, sonst der letzte bekannte
 *    Wert innerhalb des Gültigkeitsfensters.
 * 3. Beim Absenden eines Formulars wird das Ergebnis in die
 *    Supabase-Zeile geschrieben.
 *
 * Datenschutz: Es werden keine personenbezogenen Daten erfasst, nur
 * Kampagnenparameter aus der URL und die verweisende Seite. Die
 * gclid ist eine Klick-Kennung ohne Personenbezug. Die Speicherung
 * erfolgt technisch im Browser des Nutzers und wird erst mit dem
 * bewusst abgesendeten Formular übertragen.
 *
 * Erstellt 04.09.2026.
 */

const KEY = "ekdruck_attr_v1";
/** Wie lange eine Anzeigen-Herkunft nachwirkt. Google Ads rechnet
 *  standardmäßig mit 30 Tagen Klick-Attributionsfenster. */
const GUELTIG_TAGE = 30;

export type Attribution = {
  gclid: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  landing_page: string | null;
  referrer: string | null;
  erfasst_am: string | null;
};

const LEER: Attribution = {
  gclid: null,
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
  landing_page: null,
  referrer: null,
  erfasst_am: null,
};

function lesen(store: Storage): Attribution | null {
  try {
    const raw = store.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}

function abgelaufen(a: Attribution | null): boolean {
  if (!a?.erfasst_am) return true;
  const alter = Date.now() - new Date(a.erfasst_am).getTime();
  return alter > GUELTIG_TAGE * 24 * 60 * 60 * 1000;
}

/**
 * Beim ersten Seitenaufruf aufrufen (siehe components/TrackingLoader.tsx).
 * Idempotent: eine bereits erfasste Sitzung wird nicht überschrieben,
 * damit die ERSTE Quelle gewinnt und nicht die letzte Unterseite.
 * Eine neue gclid überschreibt allerdings immer, weil ein frischer
 * Anzeigenklick die jüngere und stärkere Information ist.
 */
export function erfasseHerkunft(): void {
  if (typeof window === "undefined") return;
  try {
    const p = new URLSearchParams(window.location.search);
    const gclid = p.get("gclid") || p.get("wbraid") || p.get("gbraid");
    const vorhanden = lesen(window.sessionStorage);

    if (vorhanden && !gclid) return; // Sitzung läuft, kein neuer Klick

    const neu: Attribution = {
      gclid: gclid,
      utm_source: p.get("utm_source"),
      utm_medium: p.get("utm_medium"),
      utm_campaign: p.get("utm_campaign"),
      utm_term: p.get("utm_term"),
      utm_content: p.get("utm_content"),
      landing_page: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      erfasst_am: new Date().toISOString(),
    };

    // Nichts Verwertbares und schon etwas gespeichert? Dann nichts tun.
    const hatInhalt = Boolean(
      neu.gclid || neu.utm_source || neu.utm_campaign || neu.referrer
    );
    if (!hatInhalt && vorhanden) return;

    const roh = JSON.stringify(neu);
    window.sessionStorage.setItem(KEY, roh);
    // Im localStorage nur überschreiben, wenn die neue Information
    // stärker ist (gclid schlägt alles) oder die alte abgelaufen ist.
    const alt = lesen(window.localStorage);
    if (neu.gclid || abgelaufen(alt) || !alt?.gclid) {
      window.localStorage.setItem(KEY, roh);
    }
  } catch {
    /* Storage gesperrt, z. B. strenger Privatmodus. Dann eben ohne. */
  }
}

/**
 * Beim Absenden eines Formulars aufrufen. Liefert immer ein
 * vollständiges Objekt, notfalls mit lauter null-Werten.
 */
export function holeHerkunft(): Attribution {
  if (typeof window === "undefined") return { ...LEER };
  const sitzung = lesen(window.sessionStorage);
  if (sitzung) return { ...LEER, ...sitzung };
  const dauerhaft = lesen(window.localStorage);
  if (dauerhaft && !abgelaufen(dauerhaft)) return { ...LEER, ...dauerhaft };
  return {
    ...LEER,
    landing_page: window.location.pathname,
    referrer: document.referrer || null,
    erfasst_am: new Date().toISOString(),
  };
}

/**
 * Kurzform für die Anzeige im Admin-Dashboard.
 * Beispiele: "Google Ads", "Google organisch", "LinkedIn", "Direkt".
 */
export function herkunftKurz(a: Attribution): string {
  if (a.gclid) return "Google Ads";
  if (a.utm_source) {
    const medium = a.utm_medium ? ` / ${a.utm_medium}` : "";
    return `${a.utm_source}${medium}`;
  }
  if (!a.referrer) return "Direkt";
  try {
    const host = new URL(a.referrer).hostname.replace(/^www\./, "");
    if (host.includes("google")) return "Google organisch";
    if (host.includes("bing")) return "Bing organisch";
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("ek-druck")) return "Direkt";
    return host;
  } catch {
    return "Direkt";
  }
}
