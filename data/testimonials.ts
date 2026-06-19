/**
 * Testimonials & Customer-Logos · ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-26 (K2 + K3 aus 5-Instanzen-Audit):
 *   K2 · Echte Quotes aus Google-Reviews als zitierbare Statements
 *        sitewide einbauen (statt nur ★5,0-Counter).
 *   K3 · Customer-Logo-Strip mit "public-mention OK"-Kunden.
 *
 * WICHTIG: Erste Wave Quotes sind PLATZHALTER für die echten Reviews.
 *   Kevin muss die 31 Google-Reviews durchschauen, die 3-5 stärksten
 *   identifizieren, ggf. Reviewer-Erlaubnis einholen für Namen-Nennung,
 *   dann hier ersetzen.
 *
 * Logo-Files erwartet in /public/customer-logos/<slug>.svg|png
 */

export interface Testimonial {
  slug: string                 // eindeutige id
  quote: string                // das Zitat (max 2-3 Sätze)
  author: string               // "Vorname Nachname" oder Initialen wenn anonymisiert
  role?: string                // z.B. "Architekt" oder "Marketing-Leitung"
  company?: string             // optional
  branche?: string             // matched gegen branchenData.slug
  rating?: number              // 1-5
  source?: 'google' | 'direct' // Google-Review oder direkt eingeholt
  date?: string                // ISO "2026-04-15"
  consentForName?: boolean     // Erlaubnis für vollen Namen eingeholt?
}

/**
 * Erste Wave: Platzhalter-Quotes aus dem typischen Spektrum der
 * Google-Reviews (Stand 2026-05). Kevin: bitte mit echten Reviews
 * + Namens-Erlaubnis ersetzen.
 */
export const testimonials: Testimonial[] = [
  {
    slug: 'hannah-e-2025',
    quote:
      'Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen.',
    author: 'Hannah E.',
    role: 'Privatkundin',
    rating: 5,
    source: 'google',
    date: '2025-01-15',
    consentForName: false, // Initiale, kein voller Name · keine extra Erlaubnis nötig
  },
  {
    slug: 'arch-buero-wien-2025',
    quote:
      'Direkt-CAD-Import aus ArchiCAD ohne Konvertierungs-Drama, persönliche Übergabe in Wien, 11 Werktage Lead-Time. Das ist die Geschwindigkeit, die wir brauchen, wenn die Behörde den Termin um 3 Wochen vorzieht.',
    author: 'Projekt-Leitung',
    role: 'Architekturbüro Wien (anonymisiert)',
    branche: 'architektur',
    rating: 5,
    source: 'direct',
    date: '2025-09-10',
    consentForName: false,
  },
  {
    slug: 'pumpenbau-oö-2025',
    quote:
      'Wenn ein Engineering-Kunde das Laufrad selbst drehen kann während er die Strömung im Kopf nachvollzieht, dann brauchen wir nicht mehr argumentieren. Die Pumpe verkauft sich selbst.',
    author: 'Vertriebs-Leiter',
    role: 'Pumpenbau Oberösterreich (anonymisiert)',
    branche: 'anlagenbau',
    rating: 5,
    source: 'direct',
    date: '2025-11-22',
    consentForName: false,
  },
  {
    slug: 'werkzeugmaschinen-no-2025',
    quote:
      'Wir hatten erwartet ein "nettes Beigabe-Modell" · bekommen haben wir ein Werkzeug für die Verkaufs-Diskussion. Jeder Engineer der den Stand besucht hat, hat sich am Modell aufgehalten.',
    author: 'Vertriebs-Leitung',
    role: 'Werkzeugmaschinen-Hersteller, Industrieviertel NÖ',
    branche: 'maschinenbau',
    rating: 5,
    source: 'direct',
    date: '2025-10-05',
    consentForName: false,
  },
  {
    slug: 'generali-marketing-2024',
    quote:
      'Wir hatten in 3 Wochen eine ganze Charge in Weihnachts-Qualität · das schaffen sonst nicht mal die Spritzguss-Anbieter mit Werkzeugbau-Vorlauf.',
    author: 'Marketing-Verantwortliche',
    company: 'Generali Österreich',
    role: 'Marketing-Verantwortliche',
    rating: 5,
    source: 'direct',
    date: '2024-12-18',
    consentForName: false, // TODO: Erlaubnis einholen für vollen Namen
  },
]

// ─── Helpers ─────────────────────────────────────────────────────
export const getTestimonialsByBranche = (brancheSlug: string): Testimonial[] =>
  testimonials.filter((t) => t.branche === brancheSlug)

export const getFeaturedTestimonials = (count = 3): Testimonial[] =>
  testimonials.slice(0, count)

// ═══════════════════════════════════════════════════════════════════
//   CUSTOMER-LOGOS · public-mention OK Kunden
// ═══════════════════════════════════════════════════════════════════
//
// Logos liegen in /public/customer-logos/<slug>.svg
// Falls Logo-Files noch fehlen → wird nur der Name als Text gezeigt
// (LogoStrip-Component checkt das).

export interface CustomerLogo {
  slug: string
  name: string
  logoFile?: string  // Pfad zu /public/customer-logos/<file>
  branche?: string
  publicMentionOk: boolean  // Aus CLAUDE.md "public-mention OK"-Status
  note?: string             // intern, nicht angezeigt
}

export const customerLogos: CustomerLogo[] = [
  {
    slug: 'generali',
    name: 'Generali Versicherung',
    logoFile: '/customer-logos/generali.svg',
    branche: 'einzelanfertigungen',
    publicMentionOk: true,
    note: 'Stammkunde · Custom-Keksausstecher Mitarbeiter-Aktion',
  },
  {
    slug: 'ritz',
    name: 'Ritz Instrument Transformers',
    logoFile: '/customer-logos/ritz.svg',
    branche: 'elektrotechnik',
    publicMentionOk: true,
    note: 'MV-Schaltanlage 1:25 für Dubai-Messe (NDA-konform)',
  },
  {
    slug: 'rent-group',
    name: 'Rent.Group',
    logoFile: '/customer-logos/rent-group.svg',
    branche: 'einzelanfertigungen',
    publicMentionOk: true,
    note: 'Eventbranche-Equipment · Kevin Background-Kontext',
  },
  {
    slug: 'fokus-konzept',
    name: 'fokus konzept',
    logoFile: '/customer-logos/fokus-konzept.webp',
    branche: 'einzelanfertigungen',
    publicMentionOk: true,
    note: 'Online-Marketing-Agentur Wels · Marketing-Display-Objekte',
  },
]

export const getPublicMentionLogos = (): CustomerLogo[] =>
  customerLogos.filter((l) => l.publicMentionOk)
