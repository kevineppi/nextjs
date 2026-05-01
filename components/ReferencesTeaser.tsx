'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Box, Sparkles, MessageCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Reference {
  id: string;
  title: string;
  material: string;
  quantity: number | null;
  industry: string;
  image_url: string | null;
  is_featured: boolean | null;
}

const ReferencesTeaser = () => {
  const { data: references, isLoading } = useQuery({
    queryKey: ['references-teaser'],
    queryFn: async () => {
      const { data, error } = await supabase.
      from('references').
      select('id, title, material, quantity, industry, image_url, is_featured').
      eq('is_active', true).
      order('is_featured', { ascending: false }).
      order('created_at', { ascending: false }).
      limit(3);

      if (error) throw error;
      return data as Reference[];
    }
  });

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA - Focus on ordering */}
        <div className="max-w-4xl mx-auto mb-16">
          
































          
        </div>

        {/* References section - smaller, as supporting content */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Aktuelle Referenzen</h3>
                <p className="text-sm text-muted-foreground">Erfolgreiche Kundenprojekte</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="group text-primary"
              asChild>
              <Link href="/referenzen">
              Alle ansehen
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoading ?
            Array.from({ length: 3 }).map((_, i) =>
            <Card key={i} className="overflow-hidden">
                  <div className="flex gap-4 p-4">
                    <Skeleton className="w-20 h-20 rounded-lg shrink-0" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                </Card>
            ) :
            references && references.length > 0 ?
            references.map((ref) =>
            <a
              key={ref.id}
              href="/referenzen"
              className="group">
              
                  <Card className="overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg h-full">
                    <div className="flex gap-4 p-4">
                      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden shrink-0">
                        {ref.image_url ?
                    <img
                      src={ref.image_url}
                      alt={ref.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> :


                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                            <Box className="w-8 h-8 text-primary/30" />
                          </div>
                    }
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                          {ref.title}
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">{ref.industry}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
                            <Layers className="w-3 h-3 text-primary" />
                            <span>{ref.material}</span>
                          </div>
                          {ref.quantity &&
                      <div className="flex items-center gap-1 text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
                              <Box className="w-3 h-3 text-primary" />
                              <span>{ref.quantity}x</span>
                            </div>
                      }
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
            ) :

            <div className="col-span-full text-center py-8 text-muted-foreground">
                Noch keine Referenzen vorhanden
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

};

export default ReferencesTeaser;