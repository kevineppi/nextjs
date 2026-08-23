'use client'

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  SPEISEKARTEN_LEADS,
  LEAD_STATUS,
  type SpeisekartenLead,
  type LeadStatusValue,
} from "@/data/speisekartenLeads"
import { Search, Mail, Phone, ExternalLink, Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

const STORAGE_KEY = "ekdruck_speisekarten_crm_v1"

interface LeadState {
  status: LeadStatusValue
  notiz: string
  kontaktiertAm: string
}

type StateMap = Record<string, LeadState>

const DEFAULT_STATE: LeadState = { status: "offen", notiz: "", kontaktiertAm: "" }

const STATUS_STYLE: Record<LeadStatusValue, string> = {
  offen: "bg-muted text-muted-foreground",
  kontaktiert: "bg-blue-500/15 text-blue-600",
  antwort: "bg-amber-500/15 text-amber-600",
  termin: "bg-violet-500/15 text-violet-600",
  kunde: "bg-emerald-500/15 text-emerald-600",
  abgesagt: "bg-red-500/10 text-red-500",
}

const PRIO_STYLE: Record<string, string> = {
  A: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  B: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  C: "bg-muted text-muted-foreground border-border",
}

function mailEntwurf(lead: SpeisekartenLead) {
  const anrede = lead.ansprechpartner && !lead.ansprechpartner.startsWith("kein")
    ? `Guten Tag ${lead.ansprechpartner.split(",")[0]},`
    : "Guten Tag,"

  const betreff = `Speisekartenabdeckungen aus dem 3D-Druck, Ergänzung für Ihr Sortiment`

  const body = `${anrede}

ich bin Kevin Eppensteiner von ek-druck in Oberösterreich. Wir fertigen Speisekartenabdeckungen aus dem 3D-Druck, individuell auf den Betrieb abgestimmt, mit Logo, Namenszug oder eigener Form, ab einem Stück.

Für Sie könnte das eine Ergänzung im Premium-Segment sein: Ihre Kunden bekommen eine Abdeckung, die es so kein zweites Mal gibt, und Sie brauchen dafür kein Werkzeug und keine Mindestmenge.

Ich schicke Ihnen gerne ein Muster mit Ihrem Logo, kostenlos und unverbindlich. Sagen Sie mir einfach, wohin.

Beste Grüße
Kevin Eppensteiner
ek-druck
+43 676 5517197
office@ek-druck.at
www.ek-druck.at`

  return { betreff, body }
}

const SpeisekartenCRM = () => {
  const [state, setState] = useState<StateMap>({})
  const [loaded, setLoaded] = useState(false)
  const [search, setSearch] = useState("")
  const [prioFilter, setPrioFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [openId, setOpenId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setState(JSON.parse(raw))
    } catch {
      // ignorieren, dann startet das CRM leer
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Speicher voll oder blockiert, Anzeige funktioniert trotzdem
    }
  }, [state, loaded])

  const get = (id: string): LeadState => state[id] ?? DEFAULT_STATE

  const update = (id: string, patch: Partial<LeadState>) => {
    setState((prev) => {
      const current = prev[id] ?? DEFAULT_STATE
      const next = { ...current, ...patch }
      if (patch.status && patch.status !== "offen" && !current.kontaktiertAm) {
        next.kontaktiertAm = new Date().toISOString().slice(0, 10)
      }
      return { ...prev, [id]: next }
    })
  }

  const gefiltert = useMemo(() => {
    const q = search.trim().toLowerCase()
    return SPEISEKARTEN_LEADS.filter((l) => {
      const s = get(l.id).status
      if (prioFilter !== "all" && l.prioritaet !== prioFilter) return false
      if (statusFilter !== "all" && s !== statusFilter) return false
      if (!q) return true
      return (
        l.firma.toLowerCase().includes(q) ||
        l.ort.toLowerCase().includes(q) ||
        l.ansprechpartner.toLowerCase().includes(q) ||
        l.kategorie.toLowerCase().includes(q)
      )
    })
  }, [search, prioFilter, statusFilter, state])

  const stats = useMemo(() => {
    const total = SPEISEKARTEN_LEADS.length
    let kontaktiert = 0
    let offen = 0
    let partner = 0
    SPEISEKARTEN_LEADS.forEach((l) => {
      const s = get(l.id).status
      if (s === "offen") offen++
      else kontaktiert++
      if (s === "kunde") partner++
    })
    return { total, kontaktiert, offen, partner }
  }, [state])

  const copyMail = async (lead: SpeisekartenLead) => {
    const { betreff, body } = mailEntwurf(lead)
    try {
      await navigator.clipboard.writeText(`Betreff: ${betreff}\n\n${body}`)
      setCopiedId(lead.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // Clipboard nicht verfügbar
    }
  }

  return (
    <div className="space-y-6">
      {/* Kennzahlen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Leads gesamt", value: stats.total },
          { label: "Kontaktiert", value: stats.kontaktiert },
          { label: "Noch offen", value: stats.offen },
          { label: "Partner gewonnen", value: stats.partner },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6">
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Speisekarten-Hersteller als Vertriebspartner</CardTitle>
          <p className="text-sm text-muted-foreground">
            Kontaktdaten aus öffentlichen Impressen verifiziert. Status wird lokal in diesem Browser gespeichert.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Firma, Ort oder Ansprechpartner suchen"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={prioFilter} onValueChange={setPrioFilter}>
              <SelectTrigger className="md:w-44"><SelectValue placeholder="Priorität" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Prioritäten</SelectItem>
                <SelectItem value="A">Priorität A</SelectItem>
                <SelectItem value="B">Priorität B</SelectItem>
                <SelectItem value="C">Priorität C</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="md:w-52"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Status</SelectItem>
                {LEAD_STATUS.map((s) => (
                  <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Liste */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[70px]">Prio</TableHead>
                <TableHead>Firma</TableHead>
                <TableHead className="hidden lg:table-cell">Ansprechpartner</TableHead>
                <TableHead className="hidden md:table-cell">Ort</TableHead>
                <TableHead className="w-[180px]">Status</TableHead>
                <TableHead className="w-[130px] text-right">Aktion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gefiltert.map((lead) => {
                const st = get(lead.id)
                const offen = openId === lead.id
                return (
                  <>
                    <TableRow key={lead.id} className="cursor-pointer" onClick={() => setOpenId(offen ? null : lead.id)}>
                      <TableCell>
                        <Badge variant="outline" className={PRIO_STYLE[lead.prioritaet]}>{lead.prioritaet}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold">{lead.firma}</div>
                        <div className="text-xs text-muted-foreground">{lead.kategorie}</div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-sm">
                        {lead.ansprechpartner.startsWith("kein") ? (
                          <span className="text-muted-foreground">nicht gelistet</span>
                        ) : (
                          lead.ansprechpartner
                        )}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                        {lead.ort ? `${lead.ort} (${lead.land})` : lead.land}
                      </TableCell>
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Select value={st.status} onValueChange={(v) => update(lead.id, { status: v as LeadStatusValue })}>
                          <SelectTrigger className={`h-8 text-xs ${STATUS_STYLE[st.status]}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {LEAD_STATUS.map((s) => (
                              <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          {offen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </TableCell>
                    </TableRow>

                    {offen && (
                      <TableRow key={`${lead.id}-detail`}>
                        <TableCell colSpan={6} className="bg-muted/30">
                          <div className="p-4 space-y-4">
                            <p className="text-sm leading-relaxed">{lead.notiz}</p>

                            <div className="flex flex-wrap gap-2">
                              {lead.email && (
                                <Button size="sm" asChild>
                                  <a
                                    href={`mailto:${lead.email}?subject=${encodeURIComponent(mailEntwurf(lead).betreff)}&body=${encodeURIComponent(mailEntwurf(lead).body)}`}
                                  >
                                    <Mail className="w-4 h-4 mr-2" /> Mail mit Entwurf öffnen
                                  </a>
                                </Button>
                              )}
                              <Button size="sm" variant="outline" onClick={() => copyMail(lead)}>
                                {copiedId === lead.id ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                                {copiedId === lead.id ? "Kopiert" : "Entwurf kopieren"}
                              </Button>
                              {lead.website && (
                                <Button size="sm" variant="outline" asChild>
                                  <a href={lead.website} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" /> Website
                                  </a>
                                </Button>
                              )}
                              {lead.telefon && (
                                <Button size="sm" variant="outline" asChild>
                                  <a href={`tel:${lead.telefon.replace(/\s/g, "")}`}>
                                    <Phone className="w-4 h-4 mr-2" /> {lead.telefon}
                                  </a>
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-1">
                                {lead.email ? (
                                  <p><span className="text-muted-foreground">Mail:</span> {lead.email}</p>
                                ) : (
                                  <p className="text-muted-foreground">Keine Mail öffentlich, nur Kontaktformular</p>
                                )}
                                {lead.funktion && <p><span className="text-muted-foreground">Funktion:</span> {lead.funktion}</p>}
                                {st.kontaktiertAm && (
                                  <p><span className="text-muted-foreground">Erster Kontakt:</span> {st.kontaktiertAm}</p>
                                )}
                              </div>
                              <div>
                                <Textarea
                                  placeholder="Eigene Notiz, Gesprächsergebnis, nächster Schritt"
                                  value={st.notiz}
                                  onChange={(e) => update(lead.id, { notiz: e.target.value })}
                                  rows={3}
                                />
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                )
              })}
            </TableBody>
          </Table>

          {gefiltert.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Keine Leads für diesen Filter.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default SpeisekartenCRM
