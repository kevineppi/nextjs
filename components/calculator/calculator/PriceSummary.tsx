'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PricingInput, PricingResult } from "@/lib/pricingEngine";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  TrendingDown, AlertTriangle, Send, Info, Clock, Maximize2,
  UserCheck, CheckCircle2, Mail, User, Building2, Phone
} from "lucide-react";

interface Props {
  result: PricingResult | null;
  input: PricingInput | null;
  stlFile?: File | null;
}

const fmt = (n: number) => n.toFixed(2).replace(".", ",") + " €";
const pct = (n: number) => (n * 100).toFixed(0) + " %";
const mins = (n: number) => {
  if (n < 60) return `${Math.round(n)} Min.`;
  const h = Math.floor(n / 60);
  const m = Math.round(n % 60);
  return m > 0 ? `${h} Std. ${m} Min.` : `${h} Std.`;
};

const PriceSummary = ({ result, input, stlFile }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !result || !input) {
      toast.error("Bitte Name und E-Mail angeben.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Upload STL file if available
      let fileUrls: string[] = [];
      if (stlFile) {
        const fileExt = stlFile.name.split('.').pop()?.toLowerCase() || 'stl';
        const sanitizedName = name.trim().split(' ').pop() || 'kunde';
        const filePath = `contact-files/${Date.now()}-${sanitizedName}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('contact-files')
          .upload(filePath, stlFile);
        if (!uploadError) {
          fileUrls.push(filePath);
        }
      }

      const configSummary = `Verfahren: FDM, Material: ${input.materialKey}, Schichtdicke: ${input.layerHeight} mm, Wandstärke: ${input.wallThickness} mm, Infill: ${input.infillPercent}%, Stückzahl: ${input.quantity}, Richtpreis netto: ${result.finalNet.toFixed(2)} €`;
      const fullMessage = [
        `--- Konfiguration ---`,
        configSummary,
        `--- Geometrie ---`,
        `Volumen: ${result.volumeCm3.toFixed(2)} cm³`,
        `Oberfläche: ${result.surfaceCm2.toFixed(2)} cm²`,
        `Maße: ${result.boundingBoxMm.x.toFixed(1)} × ${result.boundingBoxMm.y.toFixed(1)} × ${result.boundingBoxMm.z.toFixed(1)} mm`,
        stlFile ? `Datei: ${stlFile.name} (${(stlFile.size / 1024 / 1024).toFixed(2)} MB)` : null,
        company ? `Firma: ${company}` : null,
        phone ? `Telefon: ${phone}` : null,
        message ? `\n--- Nachricht ---\n${message}` : null,
      ].filter(Boolean).join('\n');

      const { error } = await supabase.from('contact_inquiries').insert({
        name: name.trim(),
        email: email.trim(),
        message: fullMessage,
        project_type: 'kostenrechner',
        file_urls: fileUrls.length > 0 ? fileUrls : null,
      });
      if (error) throw error;

      try {
        await supabase.functions.invoke('send-contact-notification', {
          body: { name, email, message: fullMessage, projectType: 'kostenrechner' },
        });
      } catch { /* silent */ }

      setSubmitted(true);
      toast.success("Anfrage gesendet! Wir melden uns innerhalb von 6 Stunden.");
    } catch {
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!result) {
    return (
      <Card className="border-border/60 shadow-lg bg-muted/30">
        <CardContent className="py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Info className="h-8 w-8 text-primary/60" />
          </div>
          <p className="text-muted-foreground font-medium">
            Konfigurieren Sie Ihr Modell –<br />der Richtpreis erscheint automatisch.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Laden Sie eine STL-Datei hoch oder nutzen Sie die Standardmaße.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/30 shadow-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Preisindikation</CardTitle>
          <Badge variant="outline" className="border-primary/40 text-primary text-xs">
            Unverbindlich
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <UserCheck className="h-3 w-3" />
          Endpreis wird nach persönlicher Prüfung festgelegt
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Detail-Positionen */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Materialkosten / Stück</span>
            <span>{fmt(result.materialCost)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Druckkosten / Stück</span>
            <span>{fmt(result.printCost)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Setup / Stück</span>
            <span>{fmt(result.setupCost)}</span>
          </div>

          {result.sizeFactor > 1.01 && (
            <div className="flex justify-between text-amber-700">
              <span className="flex items-center gap-1">
                <Maximize2 className="h-3.5 w-3.5" />
                Größenzuschlag (×{result.sizeFactor.toFixed(2)})
              </span>
              <span>+ {fmt(result.scaledUnitCost - (result.materialCost + result.printCost + result.setupCost))}</span>
            </div>
          )}

          <div className="flex justify-between font-medium border-t border-border/40 pt-2">
            <span>Stückpreis (netto)</span>
            <span>{fmt(result.scaledUnitCost)}</span>
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between font-medium">
            <span>Zwischensumme (netto)</span>
            <span>{fmt(result.subtotalNet)}</span>
          </div>

          {result.quantityDiscount > 0 && (
            <div className="flex justify-between text-primary">
              <span className="flex items-center gap-1">
                <TrendingDown className="h-3.5 w-3.5" />
                Mengenrabatt ({pct(result.discountRate)})
              </span>
              <span>− {fmt(result.quantityDiscount)}</span>
            </div>
          )}

          {result.surcharge > 0 && (
            <div className="flex justify-between text-destructive/80">
              <span className="flex items-center gap-1 text-destructive">
                <AlertTriangle className="h-3.5 w-3.5" />
                Mindermengenzuschlag
              </span>
              <span>+ {fmt(result.surcharge)}</span>
            </div>
          )}

          <Separator className="my-2" />

          <div className="flex justify-between font-semibold text-base">
            <span>Netto-Richtpreis</span>
            <span>{fmt(result.finalNet)}</span>
          </div>

          {result.vatAmount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">USt</span>
              <span>{fmt(result.vatAmount)}</span>
            </div>
          )}

          <div className="flex justify-between font-semibold text-base">
            <span>Brutto-Richtpreis</span>
            <span>{fmt(result.finalGross)}</span>
          </div>
        </div>

        {/* Highlight Price */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
          <p className="text-xs text-muted-foreground mb-1">Geschätzter Richtpreis (netto)</p>
          <p className="text-3xl font-bold text-foreground">{fmt(result.finalNet)}</p>
          {result.quantity > 1 && (
            <p className="text-xs text-muted-foreground mt-1">
              ca. {fmt(result.scaledUnitCost)} / Stück · {result.quantity} Stück
            </p>
          )}
        </div>

        {/* Print time */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/40 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>Geschätzte Druckzeit: <strong className="text-foreground">{mins(result.printTimeMin)}</strong></span>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          Unverbindliche Preisindikation – keine Garantie auf Preis oder Machbarkeit.
          Jede Anfrage wird persönlich geprüft.
        </p>

        {/* ── CTA / Inquiry Form ─────────────────────── */}
        {submitted ? (
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center space-y-2">
            <CheckCircle2 className="h-10 w-10 text-primary mx-auto" />
            <p className="font-semibold text-foreground">Anfrage erfolgreich gesendet!</p>
            <p className="text-sm text-muted-foreground">
              Wir prüfen Ihr Projekt persönlich und melden uns innerhalb von 6 Stunden mit einem individuellen Angebot.
            </p>
          </div>
        ) : !showForm ? (
          <div className="space-y-3 pt-2">
            <Button
              onClick={() => setShowForm(true)}
              variant="cta"
              size="lg"
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Jetzt unverbindlich Angebot anfordern
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Ihr Richtpreis + Konfiguration wird automatisch übermittelt.
              Wir prüfen alles persönlich und senden Ihnen ein individuelles Angebot.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-border/40">
            <p className="text-sm font-semibold text-foreground flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-primary" />
              Angebot anfordern
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-1">
                <Label htmlFor="ps-name" className="text-xs flex items-center gap-1">
                  <User className="h-3 w-3" /> Name *
                </Label>
                <Input id="ps-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Max Mustermann" className="h-9" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="ps-email" className="text-xs flex items-center gap-1">
                  <Mail className="h-3 w-3" /> E-Mail *
                </Label>
                <Input id="ps-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="max@firma.at" className="h-9" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="ps-company" className="text-xs flex items-center gap-1">
                    <Building2 className="h-3 w-3" /> Firma
                  </Label>
                  <Input id="ps-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Optional" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="ps-phone" className="text-xs flex items-center gap-1">
                    <Phone className="h-3 w-3" /> Telefon
                  </Label>
                  <Input id="ps-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" className="h-9" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="ps-msg" className="text-xs">Nachricht (optional)</Label>
                <Textarea id="ps-msg" value={message} onChange={(e) => setMessage(e.target.value)} rows={2} placeholder="Besondere Anforderungen, Termine..." className="text-sm" />
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-2.5 text-[11px] text-muted-foreground">
              <strong className="text-foreground">Wird übermittelt:</strong> Material: {input?.materialKey}, Infill: {input?.infillPercent}%, Stückzahl: {input?.quantity}, Richtpreis: {fmt(result.finalNet)}
            </div>
            <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Wird gesendet..." : "Unverbindliche Anfrage senden"}
            </Button>
            <p className="text-[10px] text-center text-muted-foreground">
              Keine Bestellung. Kein Vertragsabschluss. Wir prüfen alles persönlich.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceSummary;
