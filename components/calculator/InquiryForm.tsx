'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { PricingInput, PricingResult } from "@/lib/pricingEngine";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send, X } from "lucide-react";

interface Props {
  calculatorInput: PricingInput;
  priceBreakdown: PricingResult;
  onClose: () => void;
  stlFile?: File | null;
}

const InquiryForm = ({ calculatorInput, priceBreakdown, onClose, stlFile }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const configSummary = `Verfahren: FDM, Material: ${calculatorInput.materialKey}, Schichtdicke: ${calculatorInput.layerHeight} mm, Wandstärke: ${calculatorInput.wallThickness} mm, Stückzahl: ${calculatorInput.quantity}, Richtpreis netto: ${priceBreakdown.finalNet.toFixed(2)} €, Richtpreis brutto: ${priceBreakdown.finalGross.toFixed(2)} €`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
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

      const fullMessage = [
        `--- Konfiguration ---`,
        configSummary,
        `--- Geometrie ---`,
        `Volumen: ${priceBreakdown.volumeCm3.toFixed(2)} cm³`,
        `Oberfläche: ${priceBreakdown.surfaceCm2.toFixed(2)} cm²`,
        `Maße: ${priceBreakdown.boundingBoxMm.x.toFixed(1)} × ${priceBreakdown.boundingBoxMm.y.toFixed(1)} × ${priceBreakdown.boundingBoxMm.z.toFixed(1)} mm`,
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

      // Try to send notification
      try {
        await supabase.functions.invoke('send-contact-notification', {
          body: { name, email, message: fullMessage, projectType: 'kostenrechner' },
        });
      } catch {
        // Notification failed silently
      }

      toast.success("Anfrage gesendet! Wir melden uns innerhalb von 6 Stunden.");
      onClose();
    } catch {
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-primary/30 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Unverbindliche Anfrage</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Richtpreis: <strong>{priceBreakdown.finalNet.toFixed(2)} € netto</strong> · {calculatorInput.quantity} Stk.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="inq-name" className="text-sm">Name *</Label>
              <Input id="inq-name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="inq-email" className="text-sm">E-Mail *</Label>
              <Input id="inq-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="inq-company" className="text-sm">Firma (optional)</Label>
              <Input id="inq-company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="inq-phone" className="text-sm">Telefon (optional)</Label>
              <Input id="inq-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="inq-message" className="text-sm">Nachricht (optional)</Label>
            <Textarea id="inq-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Besondere Anforderungen, Termine, Dateien..." />
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground">
            <strong className="text-foreground">Konfiguration:</strong> {configSummary}
          </div>
          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InquiryForm;
