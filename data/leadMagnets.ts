/**
 * Lead-Magnet-Daten — ek-druck
 * ──────────────────────────────────────────────────────────────────
 *
 * Single Source of Truth für Lead-Magnet-Inhalte. Aktuell 1 Magnet,
 * skalierbar auf mehrere (Branchen-spezifische Checklisten, Material-
 * Guide, etc.).
 *
 * Workflow:
 *   1. User landet auf /checkliste
 *   2. Trägt Email + Branche + (optional) Firma ein
 *   3. Submit → Supabase-Insert in lead_magnets-Tabelle
 *   4. Confirmation-Mail mit PDF-Download-Link
 *   5. Drip-Sequence Tag 0/3/7 mit relevanten Content-Stücken
 *
 * PDF-Datei: muss von Kevin in /public/lead-magnets/<slug>.pdf abgelegt werden.
 */

export interface LeadMagnet {
  slug: string
  title: string
  subtitle: string
  pdfFile: string // Pfad relativ zu /public/
  pdfSize: string // z.B. "2.4 MB"
  pdfPages: number
  // Was im PDF drinsteht — als Bullet-List
  contents: string[]
  // Für wen ist das Magnet?
  targetAudience: string
  // Vorschau-Inhalt für Landing-Page (3-5 Punkte mit Erklärung)
  preview: {
    point: string
    detail: string
  }[]
}

export const checklisteMessemodell: LeadMagnet = {
  slug: 'messemodell-checkliste',
  title: 'Die Messemodell-Vorbereitungs-Checkliste',
  subtitle: '10 Punkte die vor jedem Messemodell-Auftrag geklärt sein müssen — sonst kostet die Iteration mehr als der Druck.',
  pdfFile: '/lead-magnets/messemodell-checkliste.pdf',
  pdfSize: '2,4 MB',
  pdfPages: 12,
  targetAudience: 'Marketing- und Vertriebsverantwortliche bei Industriegüter-Herstellern, die zum ersten oder zweiten Mal ein 3D-gedrucktes Messemodell planen.',
  contents: [
    'Maßstabs-Entscheidungsmatrix (1:5 vs 1:10 vs 1:25 — wann was passt)',
    'Material-Wahl je nach Messe-Häufigkeit und Anfass-Belastung',
    'Segmentierungs-Planung für Transport-tauglichkeit',
    'Lackierungs-Spezifikation (RAL-Codes, 2K vs Standard)',
    'CAD-Übergabe-Checkliste (welche Formate, welche Reduktionsstufe)',
    'Lead-Time-Realismus: warum 6 Wochen oft besser ist als 2',
    'Logo-Integration: Lasergravur vs UV-Druck vs erhabenes 3D',
    'Mechanische Funktions-Features (drehbare Teile, Klappen, Servo)',
    'Verpackungs- und Versand-Vorbereitung für Messe-Anlieferung',
    'Vor-Ort-Reparatur-Kit-Empfehlung (was Sie auf der Messe brauchen sollten)',
  ],
  preview: [
    {
      point: 'Maßstabs-Entscheidungsmatrix',
      detail: 'Ab welcher Original-Größe lohnt sich welcher Maßstab? Konkrete Faustregeln: Bei einer 8-Tonnen-Maschine ist 1:7 oft besser als 1:10, obwohl es teurer ist — weil das Modell groß genug bleibt, um Details zu erkennen, aber klein genug, um auf den Standard-Messetisch zu passen.',
    },
    {
      point: 'Material × Messe-Häufigkeit',
      detail: 'PLA für 1-2 Messen. PETG für 5+ Messen. ABS-aceton-geglättet für Premium-Daueranfass. Carbon-PA für funktionale Demonstratoren mit beweglichen Teilen. Welche Wahl wann — mit Kostenfaktor pro Option.',
    },
    {
      point: 'Segmentierungs-Planung',
      detail: 'Eine 1,2m-Komplettanlage gehört NICHT als ein Stück gedruckt. Wo die unsichtbaren Trennlinien laufen, welche Verbindungstechnik (Magnet vs. Konus vs. Steck) wann passt, und wie der Aufbau auf der Messe in unter 10 Minuten gelingt.',
    },
    {
      point: 'CAD-Übergabe-Realität',
      detail: 'STEP, IGES, STL, native SolidWorks/Inventor — was schadet, was hilft? Welche Geometrie-Details muss man rausnehmen für 3D-Druck-Tauglichkeit? Mit Pre-Flight-Liste die Sie vor dem Upload abhaken können.',
    },
    {
      point: 'Lead-Time-Mathematik',
      detail: 'Warum 6 Wochen Vorlauf für €5.000-Messemodell oft besser sind als 2 Wochen Express. Was 2-Wochen-Express tatsächlich kostet (mit echten Aufpreis-Zahlen aus der ek-druck-Werkstatt).',
    },
  ],
}

export const leadMagnets: LeadMagnet[] = [checklisteMessemodell]

export const getLeadMagnet = (slug: string): LeadMagnet | undefined =>
  leadMagnets.find((m) => m.slug === slug)
