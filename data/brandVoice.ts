/**
 * Brand-Voice · ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * Single Source of Truth für die ek-druck-Erzählweise auf der Website.
 * Wenn dieser File geändert wird → alle Pages die ihn importieren
 * sprechen automatisch im neuen Ton.
 *
 * Warum eigenes File:
 * Damit nicht in 30 Pages "12+ Jahre Erfahrung" steht, wenn Kevin
 * tatsächlich seit 2 Jahren am Markt ist. Hier ist die Wahrheit.
 *
 * Diese Datei ist von Kevin redaktionell verantwortet · generative
 * Inhaltsänderungen nur mit Kevin's expliziter Freigabe.
 */

export const BRAND = {
  // ─── Hard Facts (Stand 2026-05-26) ──────────────────────────────
  founderName: 'Kevin Eppensteiner',
  founderAge: 21,
  companyName: 'ekdruck e.U.',
  companyDomain: 'ek-druck.at',
  yearFounded: 2024,
  yearsActive: 2, // bei Auto-Berechnung: new Date().getFullYear() - 2024
  location: 'Gunskirchen, Oberösterreich',
  zip: '4623',
  street: 'Negrellistraße 15',
  phone: '+436765517197',
  phoneDisplay: '+43 676 5517197',
  email: 'office@ek-druck.at',

  // ─── Equipment ──────────────────────────────────────────────────
  printers: {
    fdm: 3, // 2× Bambulab P1S + 1× Prusa XL 5T
    fdmModels: ['Bambulab P1S (2×)', 'Prusa XL 5-Toolhead'],
  },

  // ─── Produktions-Kapazität ──────────────────────────────────────
  monthlyCapacity: '~150 Bauteile Standard, ~25-40 Komplettmodelle',
  maxModelSize: '600 × 600 × 600 mm pro Druckbett, größere Modelle segmentiert',

  // ─── Hintergrund ──────────────────────────────────────────────
  // (verwendbar in About-Page und Branchen-Authority-Block)
  background: {
    studies: 'Maschinenbau-Studium (Start Oktober 2026)',
    previousCompany: 'rent.group GmbH (Eventbranche, jahrelang B2B-Operations)',
    skills: 'CAD-Konstruktion, kaufmännische Abwicklung, B2B-Vertrieb',
    notDoing: 'mechanische Bauteile (WKO-Gewerbeberechtigung erst ab Studium)',
  },

  // ─── Reviews (Stand 2026-05) ──────────────────────────────────
  reviews: {
    rating: 5.0,
    count: 31,
    platform: 'Google',
    star: '★',
  },

  // ─── Echte Bestandskunden (Public-OK-To-Mention) ────────────────
  // Diese können in Cases referenziert werden · sind explizit OK
  // Generali = passiv-Stammkunde, Gastrotopcard = aktiv-Stammkunde
  knownCustomers: {
    publicMentionOk: ['Generali Versicherung (passiv)', 'Gastrotopcard (aktiv)'],
    confidentialNDAOnly: ['Ritz Instrument Transformers (NDA, Dubai-Projekt)'],
  },

  // ─── Brand-Voice Phrasen (Building Blocks) ──────────────────────
  voice: {
    // Bei Erfahrung · KEIN "12+ Jahre" mehr. Stattdessen Wahrheit:
    experienceAccurate: 'Seit 2024 ekdruck e.U. · davor jahrelang B2B-Operations',
    experienceShort: 'Seit 2024',
    experiencePremium: 'Aus 2 Jahren intensiver Werkstatt-Praxis · bisher >300 abgeschlossene Aufträge',

    // Bei Authority · Persönlich, nicht corporate:
    authorityPersonal: 'Persönlich gedruckt von Kevin Eppensteiner, dem Inhaber. Kein Vertrieb, kein Callcenter, kein Outsourcing.',
    authorityShort: 'Made by Kevin in Gunskirchen, OÖ',

    // Bei Process · Konkret, ehrlich:
    processCAD: 'Sie schicken STEP oder STL · falls keine CAD-Datei: kurzer Skizze-Upload reicht, wir modellieren.',
    processQuote: 'Sie bekommen Festpreis binnen 6 Stunden · direkt von mir, keine Hierarchie dazwischen.',
    processProduction: 'Druck startet noch am gleichen Tag bei Express. Bei Standard binnen 48h.',
    processQA: 'Jedes Modell wird manuell QA-geprüft, fotografiert, dann verpackt. Sie bekommen Foto-Bestätigung vor Versand.',

    // Bei Pricing · Klar:
    pricingAnchor: 'Festpreis vor dem Druck · keine Überraschung am Ende.',

    // Bei Trust · Spezifisch:
    trustGeo: 'Werkstatt in Gunskirchen (OÖ, zwischen Wels und Linz)',
    trustReviews: '★5,0 von 31 Google-Bewertungen',
    trustOwnership: 'Eigentümergeführt · Sie sprechen mit dem, der druckt',
    trustReachable: 'Antwortzeit Werktags <2h auf Mail, WhatsApp & Telefon',
  },

  // ─── Tonfall-Regeln (für Content-Erstellung) ─────────────────────
  toneRules: {
    do: [
      'Konkrete Zahlen statt vager Adjektive ("24h" statt "schnell")',
      'Du-Anrede in Body, Sie-Anrede in Headlines (Mischung wie im DACH-B2B üblich)',
      'Pain zuerst benennen, dann Lösung',
      'Authentisch · was ek-druck NICHT macht, auch sagen (keine Schattenkunden, keine mechanischen Bauteile bis Studium)',
      'Lokale Referenzpunkte ("zwischen Wels und Linz", "20 Min von Linz")',
      'Kevin als Person sichtbar · "Ich druck das selbst"',
    ],
    dont: [
      'Falsche Erfahrungsangaben ("12+ Jahre", "Jahrzehnte")',
      'Buzzword-Phrasen ("ganzheitliche Lösung", "innovative Synergien")',
      'Inflationäre Ausrufezeichen',
      'Überversprochene Garantien ("100% perfekt")',
      'Anonyme Corporate-Stimme ("Unser Team aus Spezialisten")',
    ],
  },

  // ─── Häufige Anti-KI-Phrasen die wir gezielt vermeiden ───────────
  // (wenn diese im Content auftauchen → ausbügeln)
  antiPatterns: [
    'In der heutigen schnelllebigen Welt',
    'Es ist wichtig zu beachten',
    'Mit unserem ganzheitlichen Ansatz',
    'Synergien nutzen',
    'Wir freuen uns darauf',
    'Unser engagiertes Team',
    'Maßgeschneiderte Lösungen', // zu generisch
    'State-of-the-art', // außer bei tech specs
  ],
} as const

export type Brand = typeof BRAND
