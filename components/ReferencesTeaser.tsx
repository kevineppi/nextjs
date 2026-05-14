'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Layers, Clock, Ruler, Star, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

interface Reference {
  id: string;
  title: string;
  description: string | null;
  material: string;
  quantity: number | null;
  industry: string;
  image_url: string | null;
  is_featured: boolean | null;
  dimensions: string | null;
  delivery_days: number | null;
  customer_quote: string | null;
  customer_name: string | null;
  weight_grams: number | null;
  print_time_hours: number | null;
}

const categoryMap: Record<string, { label: string; color: string }> = {
  "Ausstellungsmodelle": { label: "Messemodell", color: "bg-primary text-primary-foreground" },
  "Architektur": { label: "Architektur", color: "bg-blue-500 text-white" },
  "Prototypen": { label: "Prototyp", color: "bg-purple-500 text-white" },
  "Einzelanfertigung": { label: "Einzelstück", color: "bg-gray-500 text-white" },
  "Privatperson": { label: "Privat", color: "bg-gray-500 text-white" },
};

const getCategoryStyle = (industry: string) => {
  return categoryMap[industry] || { label: industry, color: "bg-muted text-muted-foreground" };
};

const ReferencesTeaser = () => {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const { data: references, isLoading } = useQuery({
    queryKey: ['references-teaser-premium'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('references')
        .select('id, title, description, material, quantity, industry, image_url, is_featured, dimensions, delivery_days, customer_quote, customer_name, weight_grams, print_time_hours')
        .eq('is_active', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(7);

      if (error) throw error;
      return data as Reference[];
    }
  });

  const filters = ["Alle", "Messemodelle", "Architektur", "Prototypen", "Privat"];

  const filteredRefs = references?.filter(r => {
    if (activeFilter === "Alle") return true;
    if (activeFilter === "Messemodelle") return r.industry === "Ausstellungsmodelle";
    if (activeFilter === "Architektur") return r.industry === "Architektur";
    if (activeFilter === "Prototypen") return r.industry === "Prototypen";
    if (activeFilter === "Privat") return r.industry === "Privatperson" || r.industry === "Einzelanfertigung";
    return true;
  });

  const featured = filteredRefs?.find(r => r.is_featured);
  const others = filteredRefs?.filter(r => r.id !== featured?.id).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <AnimatedSection animation="fade-in">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Referenzen</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Projekte, die überzeugen.</h2>
              </div>
              <Link href="/referenzen" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:flex items-center gap-1 group">
                Alle Projekte ansehen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Filter Pills */}
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="flex gap-2 mb-8 flex-wrap">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`mono text-[11px] font-bold px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                    activeFilter === f
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`rounded-2xl border border-border overflow-hidden ${i === 0 ? 'md:col-span-3' : ''}`}>
                  <Skeleton className={`w-full ${i === 0 ? 'h-64' : 'h-48'}`} />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRefs && filteredRefs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Featured Project - Full Width */}
              {featured && (
                <AnimatedSection animation="slide-up" className="md:col-span-3">
                  <Link href="/referenzen" className="group block">
                    <div className="grid md:grid-cols-2 border-2 border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                      <div className="aspect-[4/3] md:aspect-auto bg-muted relative overflow-hidden">
                        {featured.image_url ? (
                          <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                            <Box className="w-16 h-16 text-primary/20" />
                          </div>
                        )}
                        <span className={`absolute top-3 left-3 text-[9px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider ${getCategoryStyle(featured.industry).color}`}>
                          {getCategoryStyle(featured.industry).label}
                        </span>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <p className="text-xs text-muted-foreground mb-1">{featured.industry}</p>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{featured.title}</h3>
                        {featured.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{featured.description}</p>
                        )}
                        {featured.customer_quote && (
                          <div className="border-l-2 border-primary pl-3 mb-4">
                            <p className="text-xs text-foreground/70 italic leading-relaxed">"{featured.customer_quote}"</p>
                            {featured.customer_name && <p className="text-[10px] text-muted-foreground mt-1">— {featured.customer_name}</p>}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-muted px-2.5 py-1 rounded-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {featured.material}
                          </span>
                          {featured.dimensions && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-muted px-2.5 py-1 rounded-lg">{featured.dimensions}</span>
                          )}
                          {featured.delivery_days && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-muted px-2.5 py-1 rounded-lg">{featured.delivery_days} Tage</span>
                          )}
                          {featured.quantity && featured.quantity > 1 && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-muted px-2.5 py-1 rounded-lg">{featured.quantity} Stk.</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )}

              {/* Regular Cards */}
              {others?.map((ref, i) => {
                const cat = getCategoryStyle(ref.industry);
                return (
                  <AnimatedSection key={ref.id} animation="slide-up" delay={(i + 1) * 80}>
                    <Link href="/referenzen" className="group block h-full">
                      <div className="border-2 border-border rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        {/* Image */}
                        <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                          {ref.image_url ? (
                            <img src={ref.image_url} alt={ref.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                              <Box className="w-10 h-10 text-primary/20" />
                            </div>
                          )}
                          <span className={`absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider ${cat.color}`}>
                            {cat.label}
                          </span>
                        </div>
                        {/* Body */}
                        <div className="p-4 md:p-5">
                          <h3 className="font-bold text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">{ref.title}</h3>
                          <p className="text-xs text-muted-foreground mb-3">{ref.industry}</p>
                          {/* Specs */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-muted px-2 py-0.5 rounded">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {ref.material}
                            </span>
                            {ref.dimensions && (
                              <span className="text-[10px] font-bold bg-muted px-2 py-0.5 rounded">{ref.dimensions}</span>
                            )}
                            {ref.delivery_days && (
                              <span className="text-[10px] font-bold bg-muted px-2 py-0.5 rounded">{ref.delivery_days}d</span>
                            )}
                          </div>
                          {/* Metrics row */}
                          <div className="flex border-t border-border/50 -mx-5 px-5 pt-3 mt-auto">
                            {ref.quantity && (
                              <div className="flex-1 text-center">
                                <p className="text-sm font-bold">{ref.quantity}×</p>
                                <p className="mono text-[8px] text-muted-foreground">Stück</p>
                              </div>
                            )}
                            {ref.weight_grams && (
                              <div className="flex-1 text-center border-l border-border/50">
                                <p className="text-sm font-bold">{ref.weight_grams}g</p>
                                <p className="mono text-[8px] text-muted-foreground">Gewicht</p>
                              </div>
                            )}
                            {ref.delivery_days && (
                              <div className="flex-1 text-center border-l border-border/50">
                                <p className="text-sm font-bold">{ref.delivery_days}d</p>
                                <p className="mono text-[8px] text-muted-foreground">Lieferung</p>
                              </div>
                            )}
                            {ref.print_time_hours && (
                              <div className="flex-1 text-center border-l border-border/50">
                                <p className="text-sm font-bold">{ref.print_time_hours}h</p>
                                <p className="mono text-[8px] text-muted-foreground">Druckzeit</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">Noch keine Referenzen vorhanden</div>
          )}

          {/* Stats Bar */}
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="grid grid-cols-4 border-2 border-border rounded-2xl overflow-hidden mt-8">
              {[
                { val: "120+", lbl: "Projekte gesamt" },
                { val: "50+", lbl: "Messen beliefert" },
                { val: "5.0 ★", lbl: "Google (31 Bew.)" },
                { val: "98%", lbl: "Wiederkehrend" },
              ].map((s, i) => (
                <div key={s.lbl} className={`py-5 text-center ${i > 0 ? 'border-l border-border' : ''}`}>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{s.val}</p>
                  <p className="mono text-[9px] text-muted-foreground uppercase tracking-wider mt-1">{s.lbl}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="fade-in" delay={500}>
            <div className="text-center mt-8">
              <Button size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-lg" asChild>
                <Link href="/kontakt">Ihr Projekt besprechen <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>

            {/* Mobile link */}
            <div className="text-center mt-4 md:hidden">
              <Link href="/referenzen" className="text-sm text-primary font-semibold hover:underline">
                Alle Projekte ansehen →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ReferencesTeaser;
