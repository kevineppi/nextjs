'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, Send, Upload, CheckCircle, MapPin, Star, Zap, Shield, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import SocialShare from "./SocialShare";
import GoogleMaps from "./GoogleMaps";
import GoogleReviews from "./GoogleReviews";
import AnimatedSection from "./AnimatedSection";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  project: z.string().max(100).optional(),
  timeline: z.string().max(100).optional(),
  message: z.string().trim().max(2000, "Nachricht darf maximal 2000 Zeichen lang sein").optional()
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    message: ""
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type.includes('model') ||
        file.name.toLowerCase().endsWith('.stl') ||
        file.name.toLowerCase().endsWith('.obj') ||
        file.name.toLowerCase().endsWith('.3mf') ||
        file.name.toLowerCase().endsWith('.step') ||
        file.name.toLowerCase().endsWith('.stp') ||
        file.type.includes('pdf') ||
        file.type.includes('image');
      const isValidSize = file.size <= 50 * 1024 * 1024;
      if (!isValidType) { toast({ title: "Ungültiger Dateityp", description: `${file.name} ist kein unterstützter Dateityp.`, variant: "destructive" }); return false; }
      if (!isValidSize) { toast({ title: "Datei zu groß", description: `${file.name} ist größer als 50MB.`, variant: "destructive" }); return false; }
      return true;
    });
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => setUploadedFiles(prev => prev.filter((_, i) => i !== index));

  const uploadFiles = async (files: File[]): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    const lastName = formData.name.trim().split(' ').pop() || 'Unbekannt';
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileNumber = files.length > 1 ? `-${i + 1}` : '';
      const fileName = `${lastName}${fileNumber}.${fileExt}`;
      const filePath = `contact-files/${Date.now()}-${fileName}`;
      setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
      try {
        const { error } = await supabase.storage.from('contact-files').upload(filePath, file);
        if (error) throw error;
        uploadedUrls.push(filePath);
        setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
      } catch (error) {
        if (import.meta.env.DEV) console.error('Upload error:', error);
        throw new Error(`Fehler beim Hochladen von ${file.name}`);
      }
    }
    return uploadedUrls;
  };

  const handleNextStep = () => {
    const step1Schema = z.object({
      name: z.string().trim().min(1, "Name ist erforderlich").max(100),
      email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
    });
    const validationResult = step1Schema.safeParse(formData);
    if (!validationResult.success) {
      toast({ title: "Fehler", description: validationResult.error.errors[0].message, variant: "destructive" });
      return;
    }
    setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      toast({ title: "Fehler", description: validationResult.error.errors[0].message, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      let fileUrls: string[] = [];
      if (uploadedFiles.length > 0) fileUrls = await uploadFiles(uploadedFiles);
      const validatedData = validationResult.data;
      const { error } = await supabase.from('contact_inquiries').insert([{
        name: validatedData.name,
        email: validatedData.email,
        project_type: validatedData.project || null,
        timeline: validatedData.timeline || null,
        message: validatedData.message || null,
        file_urls: fileUrls.length > 0 ? fileUrls : null,
        status: 'new'
      }]);
      if (error) throw error;
      setIsSubmitted(true);
      setFormData({ name: "", email: "", project: "", timeline: "", message: "" });
      setUploadedFiles([]);
      setUploadProgress({});
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'form_submit_success', form_name: 'contact_inquiry', project_type: validatedData.project || 'nicht angegeben', timeline: validatedData.timeline || 'nicht angegeben' });
      // Einheitliches Conversion-Event für Channel-Vergleich
      (window as any).dataLayer.push({ event: 'contact_channel_click', contact_channel: 'form', contact_source: 'kontakt_form', contact_context: validatedData.project || null, conversion: true });
      toast({ title: "Anfrage gesendet!", description: "Wir melden uns innerhalb von 6 Stunden bei Ihnen." });
    } catch (error) {
      toast({ title: "Fehler", description: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-background">

      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="container mx-auto px-4 pt-12 pb-2">
        <AnimatedSection animation="slide-up">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Kostenloses Angebot · Keine Verpflichtung
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-4">
            Ihr Angebot <span className="text-primary">in 6 Stunden.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Projekt beschreiben, Datei hochladen – fertig. Wir melden uns noch heute persönlich
            aus Gunskirchen, Oberösterreich.
          </p>
        </AnimatedSection>
      </div>

      {/* ── TWO-COLUMN MAIN ──────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* LEFT – Trust & Info (2 of 5 cols) */}
          <AnimatedSection animation="slide-up" className="lg:col-span-2 flex flex-col gap-6">

            {/* 6h promise card */}
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Angebot in 6 Stunden</p>
                  <p className="text-xs text-muted-foreground">Mo–Fr 8:00–17:00 Uhr</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kein Warten, keine Warteschleife. Nach Eingang Ihrer Anfrage erhalten Sie ein
                individuell kalkuliertes Angebot direkt per E-Mail oder Telefon.
              </p>
            </div>

            {/* 5-star trust */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-semibold">5,0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                31 verifizierte Google-Bewertungen von Kunden aus ganz Österreich.
              </p>
              <blockquote className="text-sm italic text-foreground/80 border-l-2 border-primary pl-3">
                „Superschnelle Lieferung, top Qualität – absolut empfehlenswert!"
              </blockquote>
            </div>

            {/* Contact info */}
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-widest mb-4">Direktkontakt</h3>

              <a href="tel:+436765517197" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Anrufen</p>
                  <p className="font-semibold text-sm">+43 676 5517197</p>
                </div>
              </a>

              <a href="mailto:office@ek-druck.at" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">E-Mail</p>
                  <p className="font-semibold text-sm">office@ek-druck.at</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Adresse</p>
                  <p className="font-semibold text-sm">Negrellistraße 15, 4623 Gunskirchen</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Öffnungszeiten</p>
                  <p className="font-semibold text-sm">Mo–Fr 8:00–17:00 Uhr</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT – Form (3 of 5 cols) */}
          <AnimatedSection animation="slide-up" className="lg:col-span-3">
            {isSubmitted ? (
              <div className="rounded-2xl border border-border bg-card p-10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Vielen Dank!</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Ihre Anfrage ist eingegangen. Wir melden uns <strong>innerhalb von 6 Stunden</strong> mit
                  einem detaillierten Angebot bei Ihnen.
                </p>
                <Button variant="outline" onClick={() => { setIsSubmitted(false); setUploadedFiles([]); setCurrentStep(1); }}>
                  Neue Anfrage senden
                </Button>
                <div className="mt-8 pt-6 border-t border-border">
                  <SocialShare
                    title="3D-Druck Service aus Österreich | ekdruck e.U."
                    description="Professioneller 3D-Druck Dienstleister für ganz Österreich mit nachhaltigen Materialien"
                    className="justify-center"
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                {/* Form header */}
                <div className="px-8 pt-8 pb-6 border-b border-border">
                  <h2 className="text-2xl font-bold mb-1">Kostenloses Angebot anfragen</h2>
                  <p className="text-muted-foreground text-sm">Füllen Sie das Formular aus – wir antworten innerhalb von 6 Stunden.</p>

                  {/* Step indicator */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>1</div>
                        <span className={`text-xs font-medium ${currentStep === 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Kontaktdaten</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>2</div>
                        <span className={`text-xs font-medium ${currentStep === 2 ? 'text-foreground' : 'text-muted-foreground'}`}>Projekt-Details</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full transition-all duration-300" style={{ width: `${(currentStep / 2) * 100}%` }} />
                    </div>
                  </div>
                </div>

                {/* Form body */}
                <div className="px-8 py-7">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {currentStep === 1 && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Name *</label>
                            <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Ihr vollständiger Name" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">E-Mail *</label>
                            <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="ihre@email.at" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Projekt-Art</label>
                            <select name="project" value={formData.project} onChange={handleInputChange} className="w-full p-3 border border-input rounded-md bg-background text-sm">
                              <option value="">Projekt-Art wählen</option>
                              <option value="einzelanfertigung">Einzelanfertigung</option>
                              <option value="mehrfachanfertigung">Mehrfachanfertigung</option>
                              <option value="messemodell">Messemodell</option>
                              <option value="architekturmodell">Architekturmodell</option>
                              <option value="kunstobjekt">Kunstobjekt / Deko</option>
                              <option value="beratung">Beratung & Design</option>
                              <option value="sonstiges">Sonstiges</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Zeitrahmen</label>
                            <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full p-3 border border-input rounded-md bg-background text-sm">
                              <option value="">Zeitrahmen wählen</option>
                              <option value="express">Express (24–48 Stunden)</option>
                              <option value="standard">Standard (3–5 Tage)</option>
                              <option value="extended">Erweitert (1–2 Wochen)</option>
                              <option value="flexibel">Flexibel</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">100% kostenlos & unverbindlich – kein Spam, keine Weitergabe Ihrer Daten</p>
                        </div>

                        <Button type="button" onClick={handleNextStep} className="w-full h-12 text-base font-semibold">
                          Weiter zu Schritt 2
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </>
                    )}

                    {currentStep === 2 && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Projekt-Details</label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Beschreiben Sie Ihr Projekt: Maße, Material-Wunsch, besondere Anforderungen, Stückzahl..."
                            rows={5}
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="border-2 border-dashed border-border rounded-xl p-5">
                          <div className="text-center">
                            <Upload className="mx-auto h-7 w-7 text-muted-foreground mb-2" />
                            <p className="text-sm font-medium mb-1">3D-Dateien hochladen <span className="text-muted-foreground font-normal">(optional)</span></p>
                            <p className="text-xs text-muted-foreground mb-4">STL, OBJ, 3MF, STEP, PDF, Bilder – max. 50 MB</p>
                            <input type="file" multiple accept=".stl,.obj,.3mf,.step,.stp,.pdf,image/*" onChange={handleFileChange} className="hidden" id="file-upload" disabled={isSubmitting} />
                            <label htmlFor="file-upload">
                              <Button variant="outline" type="button" size="sm" disabled={isSubmitting} asChild>
                                <span className="cursor-pointer">Dateien wählen</span>
                              </Button>
                            </label>
                          </div>
                          {uploadedFiles.length > 0 && (
                            <div className="mt-4 space-y-2">
                              <p className="text-sm font-medium">Ausgewählte Dateien:</p>
                              {uploadedFiles.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded text-sm">
                                  <span className="truncate max-w-48">{file.name}</span>
                                  <Button variant="ghost" size="sm" onClick={() => removeFile(index)} disabled={isSubmitting} className="h-6 w-6 p-0 ml-2">✕</Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="flex-1 h-12" disabled={isSubmitting}>
                            Zurück
                          </Button>
                          <Button type="submit" disabled={isSubmitting} className="flex-2 h-12 text-base font-semibold px-8">
                            {isSubmitting ? (
                              <><Send className="mr-2 h-4 w-4 animate-spin" />Wird gesendet...</>
                            ) : (
                              <><Send className="mr-2 h-4 w-4" />Anfrage senden</>
                            )}
                          </Button>
                        </div>
                      </>
                    )}
                  </form>
                </div>
              </div>
            )}
          </AnimatedSection>

          {/* Made in Austria – ebenbündig unter dem Formular, rechte Spalte */}
          <div className="lg:col-span-3 lg:col-start-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Made in Austria</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-muted-foreground">
                {[
                  "Express 24h möglich",
                  "Österr. Filament",
                  "200+ Projekte",
                  "Kostenlos & unverbindlich"
                ].map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAPS & REVIEWS ───────────────────────────────────────── */}
      <div className="container mx-auto px-4 pb-20 space-y-16">
        <AnimatedSection animation="slide-up">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Unser <span className="text-gradient">Standort</span>
          </h3>
          <GoogleMaps />
        </AnimatedSection>
        <AnimatedSection animation="slide-up">
          <GoogleReviews />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
