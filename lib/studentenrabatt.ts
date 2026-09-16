/**
 * Studentenrabatt · ekdruck
 * ──────────────────────────────────────────────────────────────
 * Zwei Stufen, die Staffelung ist GEOGRAFISCH (Kevin, 16.09.2026):
 *
 *   15 %  Studierende in Österreich
 *   10 %  Studierende in Deutschland und der Schweiz
 *
 * Das ist bewusst NICHT "Ausweis gegen Hochschule". Eine frühere Fassung
 * hatte es so formuliert, das war falsch und widersprach den Mails an die
 * ÖH-Vertretungen, in denen nur die 15 % vorkommen.
 *
 * Drei Wege zum Nachweis:
 *   1. Anfrage von einer Hochschul-Mailadresse, dann ist kein Code nötig
 *      (Kevin: "Wenn die Anfrage mit der Uni-Mailadresse kommt, brauch ich
 *       den Code nicht, das ist Bestätigung genug.")
 *   2. Rabattcode der jeweiligen Hochschulvertretung, z. B. HTU-TUWIEN.
 *      Alle Codes gehören zu österreichischen Hochschulen, also 15 %.
 *   3. Studierendenausweis, den prüft Kevin von Hand. Diese Datei kann das
 *      nicht erkennen, deshalb liefert sie dann "nicht berechtigt" und die
 *      Entscheidung fällt im Gespräch.
 *
 * Der Code dient zusätzlich der Messung: daran ist später erkennbar,
 * welche Hochschulkooperation tatsächlich Aufträge bringt.
 *
 * Erstellt 14.09.2026, Staffelung korrigiert 16.09.2026.
 */

/** Regelsatz Österreich. Wird auch als Schlagzahl in der UI angezeigt. */
export const RABATT_PROZENT = 15;
/** Regelsatz Deutschland und Schweiz. */
export const RABATT_PROZENT_DECH = 10;

export type RabattLand = "AT" | "DECH";

/** Code -> Hochschule. Gross-/Kleinschreibung egal, Leerzeichen werden getrimmt.
 *  Alle Codes sind österreichisch und führen damit zu 15 %. */
export const CODES: Record<string, string> = {
  "OEH-FHOOE": "FH Oberösterreich",
  "HTU-TUWIEN": "TU Wien",
  "HTU-TUGRAZ": "TU Graz",
  "OEH-UIBK": "Universität Innsbruck",
  "OEH-KUNSTUNI": "Kunstuniversität Linz",
  "HTW-TECHNIKUM": "FH Technikum Wien",
  "OEH-CAMPUSWIEN": "FH Campus Wien",
  "OEH-JOANNEUM": "FH JOANNEUM",
  "OEH-FHSBG": "FH Salzburg",
  "OEH-FHKAERNTEN": "FH Kärnten",
  "OEH-MCI": "MCI Innsbruck",
  "OEH-FHSTP": "FH St. Pölten",
  "OEH-FHV": "FH Vorarlberg",
  "OEH-AKBILD": "Akademie der bildenden Künste Wien",
  "OEH-ANGEWANDTE": "Universität für angewandte Kunst Wien",
  "OEH-FHWN": "FH Wiener Neustadt",
  // zweite Welle, 16.09.2026
  "OEH-JKU": "Johannes Kepler Universität Linz",
  "OEH-LEOBEN": "Montanuniversität Leoben",
  "OEH-BOKU": "Universität für Bodenkultur Wien",
  "OEH-NDU": "New Design University St. Pölten",
  "OEH-FHBGLD": "FH Burgenland",
  "OEH-KUFSTEIN": "FH Kufstein Tirol",
};

/**
 * Österreichische Hochschul-Mailadressen. Geprüft wird auf Endung, damit auch
 * Unterdomänen wie students.fh-ooe.at oder edu.fh-joanneum.at greifen.
 */
const AT_DOMAINS = [
  ".ac.at",        // deckt tuwien, uibk, boku, akbild, fhstp, fh-salzburg, fhwn, uni-ak,
                   // unileoben, ndu und fh-kufstein
  "jku.at",        // JKU Linz laeuft NICHT auf .ac.at, deckt auch oeh.jku.at
  "fh-burgenland.at",
  "oehboku.at",
  "tugraz.at",
  "htugraz.at",
  "htu.at",
  "hufak.net",     // Fachschaften TU Wien
  "fsmb.at",
  "fh-ooe.at",
  "fh-joanneum.at",
  "fh-kaernten.at",
  "fhv.at",
  "kunstuni-linz.at",
  "technikum-wien.at",
  "mci.edu",
  "mci4me.at",
  "ustp.at",
  "ustp-students.at",
];

/**
 * Deutschland und Schweiz. Eine vollständige Liste gibt es nicht, deshalb
 * zusätzlich ein Muster: Hochschulen heissen dort fast immer uni-, tu-, th-,
 * hs-, fh- oder tragen "hochschule" im Namen. Die grossen Ausnahmen stehen
 * explizit drin. Greift das Muster nicht, entscheidet Kevin von Hand.
 */
const DECH_DOMAINS = [
  "tum.de", "lmu.de", "kit.edu", "rwth-aachen.de", "hhu.de", "fau.de",
  "charite.de", "hu-berlin.de", "fu-berlin.de", "uzh.ch", "ethz.ch",
  "epfl.ch", "unibas.ch", "unibe.ch", "zhaw.ch", "hslu.ch", "fhnw.ch",
  "unisg.ch", "usi.ch", "supsi.ch",
];
const DECH_PATTERN = /^(uni-|tu-|th-|hs-|fh-|uni\.|hochschule)|(\.uni-|\.hs-|\.fh-|hochschule)/i;

export type RabattStatus = {
  berechtigt: boolean;
  /** "code" | "mailadresse" | null */
  grund: "code" | "mailadresse" | null;
  /** Land der Stufe, bestimmt den Prozentsatz */
  land: RabattLand | null;
  /** Name der Hochschule, soweit bekannt */
  hochschule: string | null;
  /** normalisierter Code, falls einer verwendet wurde */
  code: string | null;
  prozent: number;
};

const LEER: RabattStatus = {
  berechtigt: false,
  grund: null,
  land: null,
  hochschule: null,
  code: null,
  prozent: 0,
};

function domainVon(email: string): string | null {
  const e = (email || "").trim().toLowerCase();
  const at = e.lastIndexOf("@");
  if (at < 0) return null;
  const d = e.slice(at + 1);
  return d.includes(".") ? d : null;
}

function endetAuf(domain: string, liste: string[]): boolean {
  return liste.some((d) =>
    d.startsWith(".") ? domain.endsWith(d) : domain === d || domain.endsWith("." + d)
  );
}

/** Liefert das Land der Hochschule oder null, wenn die Adresse nicht erkennbar ist. */
export function hochschulLand(email: string): RabattLand | null {
  const domain = domainVon(email);
  if (!domain) return null;
  if (endetAuf(domain, AT_DOMAINS)) return "AT";
  if (endetAuf(domain, DECH_DOMAINS)) return "DECH";
  if ((domain.endsWith(".de") || domain.endsWith(".ch")) && DECH_PATTERN.test(domain)) return "DECH";
  return null;
}

/** true, wenn die Adresse zu einer Hochschule gehört, egal in welchem Land. */
export function istHochschulMail(email: string): boolean {
  return hochschulLand(email) !== null;
}

/** Normalisiert eine Eingabe zu einem bekannten Code oder null. */
export function normalisiereCode(eingabe: string): string | null {
  const c = (eingabe || "").trim().toUpperCase().replace(/\s+/g, "");
  return c && CODES[c] ? c : null;
}

export function satzFuer(land: RabattLand): number {
  return land === "AT" ? RABATT_PROZENT : RABATT_PROZENT_DECH;
}

/**
 * Prüft Code und Mailadresse zusammen. Die Mailadresse gewinnt, weil sie die
 * stärkere Bestätigung ist. Ausnahme: ein gültiger ÖH-Code ist immer
 * österreichisch. Schreibt jemand mit deutscher Hochschuladresse und gibt
 * einen ÖH-Code an, zählt der Code, sonst müsste er sich schlechter stellen
 * als ohne Mailadresse.
 */
export function pruefeRabatt(email: string, codeEingabe: string): RabattStatus {
  const code = normalisiereCode(codeEingabe);
  const land = hochschulLand(email);

  if (code) {
    return {
      berechtigt: true,
      grund: land === "AT" ? "mailadresse" : "code",
      land: "AT",
      hochschule: CODES[code],
      code,
      prozent: RABATT_PROZENT,
    };
  }
  if (land) {
    return {
      berechtigt: true,
      grund: "mailadresse",
      land,
      hochschule: null,
      code: null,
      prozent: satzFuer(land),
    };
  }
  return { ...LEER };
}

/** Betrag nach Abzug. Rundet kaufmännisch auf zwei Nachkommastellen. */
export function mitRabatt(betrag: number, status: RabattStatus): number {
  if (!status.berechtigt) return betrag;
  return Math.round(betrag * (1 - status.prozent / 100) * 100) / 100;
}

/** Zeile für die interne Anfrage-Nachricht, damit Kevin es im Dashboard sieht. */
export function rabattZeile(status: RabattStatus): string | null {
  if (!status.berechtigt) return null;
  const stufe = status.land === "AT" ? "Österreich" : "Deutschland/Schweiz";
  if (status.code) {
    return `STUDENTENRABATT ${status.prozent} % (${stufe}) — Code ${status.code} (${status.hochschule})`;
  }
  return `STUDENTENRABATT ${status.prozent} % (${stufe}) — bestätigt über Hochschul-Mailadresse`;
}
