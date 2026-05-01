'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const QuickInquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      const isValidType = selectedFile.name.toLowerCase().match(/\.(stl|obj|3mf|step|stp|iges|igs)$/);
      const isValidSize = selectedFile.size <= 50 * 1024 * 1024; // 50MB

      if (!isValidType || !isValidSize) {
        toast({
          title: "Ungültige Datei",
          description: "Nur STL, OBJ, 3MF, STEP und IGES Dateien bis 50MB.",
          variant: "destructive"
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Fehlende Angaben",
        description: "Bitte Name und E-Mail angeben.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let fileUrl = "";
      
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `quick-inquiries/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('contact-files')
          .upload(filePath, file);

        if (uploadError) throw uploadError;
        fileUrl = filePath;
      }

      const { error } = await supabase
        .from('contact_inquiries')
        .insert({
          name: name.trim(),
          email: email.trim(),
          message: "Schnellanfrage (Quick Inquiry Form)",
          file_urls: fileUrl ? [fileUrl] : null
        });

      if (error) throw error;

      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 2 Stunden bei Ihnen."
      });

      setName("");
      setEmail("");
      setFile(null);
    } catch (error) {
      console.error('Error submitting quick inquiry:', error);
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-8 border-primary/20">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Schnellanfrage in 30 Sek</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            placeholder="Ihr Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
          />
          <Input
            type="email"
            placeholder="Ihre E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={255}
          />
          <div>
            <label htmlFor="quick-file-upload" className="cursor-pointer">
              <div className="flex items-center justify-center gap-2 border-2 border-dashed border-primary/30 rounded-md p-3 hover:border-primary/60 transition-colors">
                <Upload className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {file ? file.name : "Datei hochladen (optional)"}
                </span>
              </div>
            </label>
            <input
              id="quick-file-upload"
              type="file"
              accept=".stl,.obj,.3mf,.step,.stp,.iges,.igs"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            variant="hero"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird gesendet..." : "Schnellanfrage senden"}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuickInquiryForm;
