'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Download, Mail, Building2, User, CheckCircle2 } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client'

interface LeadMagnetFormProps {
  magnetSlug: string
  magnetTitle: string
  pdfDownloadPath: string // z.B. /lead-magnets/messemodell-checkliste.pdf
}

/**
 * LeadMagnetForm, Email-Capture mit Supabase-Insert
 * ──────────────────────────────────────────────────────────────────
 *
 * Workflow:
 *  1. User füllt Form aus (Email + Name + optional Firma + Branche)
 *  2. Submit → Supabase "lead_magnets"-Tabelle Insert
 *  3. Bei Erfolg → Weiterleitung auf /checkliste/danke?file=<pdf>
 *  4. Auf danke-Page: PDF-Download-Button + Confirmation
 *
 * Supabase-Schema (muss Kevin einmalig in Supabase Dashboard anlegen):
 *
 *   CREATE TABLE lead_magnets (
 *     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     created_at TIMESTAMPTZ DEFAULT NOW(),
 *     magnet_slug TEXT NOT NULL,
 *     email TEXT NOT NULL,
 *     name TEXT,
 *     company TEXT,
 *     branche TEXT,
 *     source_url TEXT,
 *     gdpr_consent BOOLEAN DEFAULT FALSE,
 *     status TEXT DEFAULT 'new'
 *   );
 *
 *   CREATE INDEX idx_lead_magnets_email ON lead_magnets(email);
 *   CREATE INDEX idx_lead_magnets_magnet_slug ON lead_magnets(magnet_slug);
 *   ALTER TABLE lead_magnets ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "Anyone can insert" ON lead_magnets FOR INSERT WITH CHECK (true);
 *   CREATE POLICY "Only owner can read" ON lead_magnets FOR SELECT USING (auth.role() = 'authenticated');
 */
export default function LeadMagnetForm({
  magnetSlug,
  magnetTitle,
  pdfDownloadPath,
}: LeadMagnetFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [branche, setBranche] = useState('')
  const [gdpr, setGdpr] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!gdpr) {
      setError('Bitte stimmen Sie der Datenverarbeitung zu, damit ich Ihnen das PDF zuschicken darf.')
      return
    }

    setSubmitting(true)

    try {
      const { error: insertError } = await supabase
        .from('lead_magnets')
        .insert({
          magnet_slug: magnetSlug,
          email: email.trim().toLowerCase(),
          name: name.trim() || null,
          company: company.trim() || null,
          branche: branche || null,
          source_url: typeof window !== 'undefined' ? window.location.href : null,
          gdpr_consent: true,
          status: 'new',
        })

      if (insertError) {
        // Wenn Tabelle noch nicht existiert: silent fallthrough, User bekommt trotzdem PDF
        console.warn('Lead-Magnet-Insert-Fehler:', insertError.message)
      }

      // Auch bei DB-Fehler → User bekommt das PDF. Die Mail-Adresse ist dann nur nicht
      // im Funnel, aber der primäre Versprechen (PDF) wird eingehalten.
      router.push(`/checkliste/danke?file=${encodeURIComponent(pdfDownloadPath)}&magnet=${magnetSlug}`)
    } catch (err) {
      console.error(err)
      setError('Da ist etwas schiefgelaufen. Schreiben Sie mir kurz an office@ek-druck.at, ich schicke das PDF persönlich.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background border-2 border-border rounded-3xl p-6 md:p-8 space-y-5">
      <div>
        <label htmlFor="lm-email" className="block text-sm font-bold mb-2">
          Ihre E-Mail-Adresse <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            id="lm-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="kevin@firma.at"
            className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl bg-background text-base focus:outline-none focus:border-primary"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">
          An diese Adresse schicke ich Ihnen das PDF + die Mini-Sequenz mit Zusatz-Tipps.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lm-name" className="block text-sm font-bold mb-2">
            Ihr Name <span className="text-muted-foreground/60 font-normal text-xs">(optional)</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="lm-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Max Muster"
              className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl bg-background text-base focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lm-company" className="block text-sm font-bold mb-2">
            Firma <span className="text-muted-foreground/60 font-normal text-xs">(optional)</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              id="lm-company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Muster GmbH"
              className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl bg-background text-base focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="lm-branche" className="block text-sm font-bold mb-2">
          Branche <span className="text-muted-foreground/60 font-normal text-xs">(optional, hilft mir bei Zusatz-Tipps)</span>
        </label>
        <select
          id="lm-branche"
          value={branche}
          onChange={(e) => setBranche(e.target.value)}
          className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background text-base focus:outline-none focus:border-primary"
        >
          <option value="">bitte wählen</option>
          <option value="maschinenbau">Maschinenbau & Werkzeugbau</option>
          <option value="schiffbau">Schiffbau & Marine</option>
          <option value="energietechnik">Energietechnik & Erneuerbare</option>
          <option value="automotive">Automotive & Mobility</option>
          <option value="anlagenbau">Anlagenbau & Verfahrenstechnik</option>
          <option value="elektrotechnik">Elektrotechnik & Messwandler</option>
          <option value="architektur">Architektur & Stadtplanung</option>
          <option value="andere">andere</option>
        </select>
      </div>

      {/* GDPR-Consent */}
      <div className="flex items-start gap-3 pt-2 border-t border-border">
        <input
          type="checkbox"
          id="lm-gdpr"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          required
          className="mt-1 w-4 h-4 rounded border-2 border-border accent-primary"
        />
        <label htmlFor="lm-gdpr" className="text-xs text-muted-foreground leading-relaxed">
          Ich bin einverstanden, dass ekdruck e.U. mir das PDF zusendet und mich anschließend mit
          maximal 3 weiteren Mails (Tag 0, 3, 7) zusätzliche Tipps zu meinem Projekt schickt.
          Abbestellen jederzeit per Klick im Mail-Footer.{' '}
          <a href="/impressum" className="text-primary underline-offset-2 hover:underline">
            Datenschutz
          </a>
          .
        </label>
      </div>

      {error && (
        <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-4 font-bold text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Wird vorbereitet …
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            {magnetTitle} jetzt holen
          </>
        )}
      </button>

      <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
        <span>Kein Spam. Keine Weitergabe. Abbestellen mit 1 Klick.</span>
      </div>
    </form>
  )
}
