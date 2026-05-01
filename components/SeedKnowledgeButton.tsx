'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Database, Loader2 } from 'lucide-react';

export const SeedKnowledgeButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSeed = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('seed-knowledge-base-bulk');

      if (error) throw error;

      toast({
        title: "Erfolg!",
        description: `${data.count} Einträge zur Knowledge Base hinzugefügt`,
        duration: 5000,
      });
    } catch (error) {
      console.error('Error seeding knowledge base:', error);
      toast({
        title: "Fehler",
        description: "Konnte Knowledge Base nicht befüllen",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSeed}
      disabled={isLoading}
      variant="outline"
      className="gap-2"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Database className="h-4 w-4" />
      )}
      Knowledge Base befüllen
    </Button>
  );
};
