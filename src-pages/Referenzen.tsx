'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StickyCTA from "@/components/landing/StickyCTA";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { supabase } from "@/integrations/supabase/client";
import OptimizedImage from "@/components/OptimizedImage";
import ImageGallery from "@/components/ImageGallery";
import { 
  Clock, 
  Scale, 
  Layers, 
  Box, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  X,
  Zap,
  CheckCircle2,
  Filter,
  Loader2,
  ImageIcon,
  Images,
  Ruler,
  Palette,
  Truck,
  Quote
} from "lucide-react";

interface ReferenceImage {
  id: string;
  image_url: string;
  thumbnail_url: string | null;
  alt_text: string | null;
  is_primary: boolean;
  sort_order: number;
}

interface ProjectReference {
  id: string;
  title: string;
  description: string | null;
  industry: string;
  material: string;
  color: string | null;
  print_time_hours: number | null;
  weight_grams: number | null;
  dimensions: string | null;
  quantity: number | null;
  delivery_days: number | null;
  image_url: string | null;
  customer_quote: string | null;
  customer_name: string | null;
  highlights: string[] | null;
  is_featured: boolean | null;
  images?: ReferenceImage[];
}

interface Category {
  id: string;
  name: string;
  type: string;
}

const Referenzen = () => {
  const [projects, setProjects] = useState<ProjectReference[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectReference | null>(null);
  const [filterIndustry, setFilterIndustry] = useState("Alle");
  const [filterMaterial, setFilterMaterial] = useState("Alle");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch references
        const { data: refsData, error: refsError } = await supabase
          .from('references')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (refsError) throw refsError;

        // Fetch images
        const { data: imagesData, error: imagesError } = await supabase
          .from('reference_images')
          .select('*')
          .order('sort_order', { ascending: true });

        if (imagesError) throw imagesError;

        // Map images to references
        const refsWithImages = (refsData || []).map(ref => ({
          ...ref,
          images: (imagesData || []).filter(img => img.reference_id === ref.id)
        }));

        setProjects(refsWithImages);

        // Fetch categories
        const { data: catsData, error: catsError } = await supabase
          .from('reference_categories')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (catsError) throw catsError;
        setCategories(catsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const industryCategories = ["Alle", ...categories.filter(c => c.type === 'industry').map(c => c.name)];
  const materialCategories = ["Alle", ...categories.filter(c => c.type === 'material').map(c => c.name)];

  const filteredProjects = projects.filter(project => {
    const matchesIndustry = filterIndustry === "Alle" || project.industry === filterIndustry;
    const matchesMaterial = filterMaterial === "Alle" || project.material.includes(filterMaterial.replace(" Nylon", "").replace(" GF", ""));
    return matchesIndustry && matchesMaterial;
  });

  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : -1;

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      : (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[newIndex]);
  };

  // Get primary image or first image
  const getProjectImage = (project: ProjectReference) => {
    if (project.images && project.images.length > 0) {
      const primary = project.images.find(img => img.is_primary);
      return primary?.image_url || project.images[0].image_url;
    }
    return project.image_url;
  };

  return (
    <>
      <SEOHead 
        title="3D-Druck Referenzen & Projekte | ★ 5.0 Google | ekdruck"
        description="Echte 3D-Druck Projekte mit Fotos, Maßen & Druckzeiten ✓ Architekturmodelle, Messeexponate & Einzelstücke ✓ 31 Google-Bewertungen mit 5.0/5 → Projekte ansehen"
        keywords="3d-druck referenzen, 3d-druck portfolio, messemodell beispiele, architekturmodell projekte, 3d-druck ergebnisse"
        path="/referenzen"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Referenzen", url: "/referenzen" }
      ]} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
                Über 500+ erfolgreiche Projekte
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unsere <span className="text-gradient">Referenzen</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Von Architekturmodellen bis Deko-Objekten – entdecken Sie ausgewählte Projekte mit 
                technischen Details, Druckzeiten und Kundenfeedback.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  100% Made in Austria
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Express ab 24h
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ★ 5/5 Google
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section - Compact & Sticky */}
        <section className="py-2 md:py-3 border-b border-border/30 bg-background/95 sticky top-16 md:top-20 z-40 backdrop-blur-md">
          <div className="container mx-auto px-4">
            {/* Mobile: Collapsible Filter */}
            <div className="md:hidden">
              <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full justify-between text-xs h-8">
                    <div className="flex items-center gap-2">
                      <Filter className="w-3 h-3" />
                      <span>Filter</span>
                      {(filterIndustry !== "Alle" || filterMaterial !== "Alle") && (
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                          {[filterIndustry !== "Alle" && filterIndustry, filterMaterial !== "Alle" && filterMaterial].filter(Boolean).join(", ")}
                        </Badge>
                      )}
                    </div>
                    <ChevronDown className={`w-3 h-3 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 pb-1 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] text-muted-foreground w-full mb-1">Branche:</span>
                    {industryCategories.slice(0, 6).map(industry => (
                      <Button
                        key={industry}
                        variant={filterIndustry === industry ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilterIndustry(industry)}
                        className="text-[10px] h-6 px-2"
                      >
                        {industry}
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] text-muted-foreground w-full mb-1">Material:</span>
                    {materialCategories.slice(0, 5).map(material => (
                      <Button
                        key={material}
                        variant={filterMaterial === material ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilterMaterial(material)}
                        className="text-[10px] h-6 px-2"
                      >
                        {material}
                      </Button>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Desktop: Inline filters with collapsible */}
            <div className="hidden md:block">
              <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
                <div className="flex items-center justify-between">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 text-xs h-8">
                      <Filter className="w-3 h-3" />
                      <span>Filter</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
                    </Button>
                  </CollapsibleTrigger>
                  
                  {/* Quick filter pills when collapsed */}
                  {!filtersOpen && (filterIndustry !== "Alle" || filterMaterial !== "Alle") && (
                    <div className="flex items-center gap-2">
                      {filterIndustry !== "Alle" && (
                        <Badge variant="secondary" className="text-xs cursor-pointer" onClick={() => setFilterIndustry("Alle")}>
                          {filterIndustry} <X className="w-3 h-3 ml-1" />
                        </Badge>
                      )}
                      {filterMaterial !== "Alle" && (
                        <Badge variant="secondary" className="text-xs cursor-pointer" onClick={() => setFilterMaterial("Alle")}>
                          {filterMaterial} <X className="w-3 h-3 ml-1" />
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                
                <CollapsibleContent className="pt-3 pb-1">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-muted-foreground mr-1">Branche:</span>
                      {industryCategories.slice(0, 6).map(industry => (
                        <Button
                          key={industry}
                          variant={filterIndustry === industry ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setFilterIndustry(industry)}
                          className="text-xs h-7 px-2.5"
                        >
                          {industry}
                        </Button>
                      ))}
                    </div>

                    <div className="w-px h-5 bg-border" />

                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-muted-foreground mr-1">Material:</span>
                      {materialCategories.slice(0, 5).map(material => (
                        <Button
                          key={material}
                          variant={filterMaterial === material ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setFilterMaterial(material)}
                          className="text-xs h-7 px-2.5"
                        >
                          {material}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {projects.length === 0 ? "Noch keine Referenzen" : "Keine Treffer"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {projects.length === 0 
                    ? "Referenzen werden bald hinzugefügt." 
                    : "Keine Projekte mit diesen Filterkriterien gefunden."}
                </p>
                {projects.length > 0 && (
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setFilterIndustry("Alle");
                      setFilterMaterial("Alle");
                    }}
                  >
                    Filter zurücksetzen
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card 
                    key={project.id}
                    className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image - Square 1:1 format, high quality rendering */}
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <img
                        src={getProjectImage(project) || ''}
                        alt={project.title}
                        loading={index < 6 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ imageRendering: 'auto' }}
                      />
                      
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      {/* Quick Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center justify-between text-sm gap-2">
                          {project.print_time_hours && (
                            <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {project.print_time_hours}h
                            </Badge>
                          )}
                          {project.weight_grams && (
                            <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm">
                              <Scale className="w-3 h-3 mr-1" />
                              {project.weight_grams}g
                            </Badge>
                          )}
                          {project.delivery_days && (
                            <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm">
                              <Zap className="w-3 h-3 mr-1" />
                              {project.delivery_days}d
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Industry Badge */}
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {project.industry}
                      </Badge>

                      {/* Multi-Image Indicator */}
                      {project.images && project.images.length > 1 && (
                        <Badge className="absolute top-4 right-4 bg-background/80 text-foreground backdrop-blur-sm">
                          <Images className="w-3 h-3 mr-1" />
                          {project.images.length}
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-bold text-base group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      {/* Technical Data - Box Style like Modal */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border border-border rounded-md p-2">
                          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wide mb-0.5">
                            <Layers className="w-3 h-3" />
                            <span>Material</span>
                          </div>
                          <span className="text-sm font-medium">{project.material}</span>
                        </div>
                        <div className="border border-border rounded-md p-2">
                          <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wide mb-0.5">
                            <Box className="w-3 h-3" />
                            <span>Stückzahl</span>
                          </div>
                          <span className="text-sm font-medium">{project.quantity || 1} Stück</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {project.highlights.slice(0, 2).map((highlight, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ihr Projekt könnte das nächste sein
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Laden Sie Ihre STL-Datei hoch und erhalten Sie sofort einen Preis. 
                Von der Idee zum fertigen Teil in 24–48 Stunden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/kontakt">
                    Kostenloses Angebot in 6h
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/kontakt">
                    Beratung anfordern
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Internal linking section */}
        <section className="py-12 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Passende Leistungen entdecken</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { to: "/messemodelle", label: "Messemodelle", desc: "Express 24h · ab €30", icon: "🏛️" },
                { to: "/architekturmodelle", label: "Architekturmodelle", desc: "Maßstab 1:50–1:500 · ab €20", icon: "🏗️" },
                { to: "/einzelanfertigungen", label: "Einzelanfertigungen", desc: "Unikate nach Maß · ab 1 Stück", icon: "✏️" },
                { to: "/rapid-prototyping", label: "Rapid Prototyping", desc: "Prototypen in 24–48h", icon: "⚡" },
              ].map(({ to, label, desc, icon }) => (
                <Link key={to} href={to}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all group">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <StickyCTA context="Referenzprojekt anfragen" />

      {/* Lightbox Dialog with Image Gallery */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
          <VisuallyHidden.Root>
            <DialogTitle>{selectedProject?.title || "Projektdetails"}</DialogTitle>
          </VisuallyHidden.Root>
          {selectedProject && (
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Gallery Side */}
              <div className="relative bg-black min-h-[300px] lg:min-h-[500px]">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <ImageGallery
                    images={selectedProject.images}
                    alt={selectedProject.title}
                    aspectRatio="square"
                    showThumbnails={selectedProject.images.length > 1}
                    className="h-full"
                  />
                ) : selectedProject.image_url ? (
                  <div className="w-full h-full min-h-[300px] lg:min-h-[500px]">
                    <img
                      src={selectedProject.image_url}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center min-h-[300px]">
                    <ImageIcon className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
                
                {/* Navigation Arrows for multiple projects */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Project Counter */}
                {filteredProjects.length > 1 && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm z-20">
                    Projekt {currentIndex + 1} / {filteredProjects.length}
                  </div>
                )}
              </div>

              {/* Details Side */}
              <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh]">
                <div>
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {selectedProject.industry}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Layers className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wide">Material</span>
                    </div>
                    <p className="font-semibold">{selectedProject.material}</p>
                  </div>
                  
                  {selectedProject.color && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Palette className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Farbe</span>
                      </div>
                      <p className="font-semibold">{selectedProject.color}</p>
                    </div>
                  )}
                  
                  {selectedProject.dimensions && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Ruler className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Abmessungen</span>
                      </div>
                      <p className="font-semibold">{selectedProject.dimensions}</p>
                    </div>
                  )}
                  
                  {selectedProject.print_time_hours && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Druckzeit</span>
                      </div>
                      <p className="font-semibold">{selectedProject.print_time_hours} Stunden</p>
                    </div>
                  )}
                  
                  {selectedProject.weight_grams && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Scale className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Gewicht</span>
                      </div>
                      <p className="font-semibold">{selectedProject.weight_grams}g</p>
                    </div>
                  )}
                  
                  {selectedProject.quantity && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Box className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Stückzahl</span>
                      </div>
                      <p className="font-semibold">{selectedProject.quantity} Stück</p>
                    </div>
                  )}
                  
                  {selectedProject.delivery_days && (
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Truck className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Lieferzeit</span>
                      </div>
                      <p className="font-semibold">{selectedProject.delivery_days} Tage</p>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Projekt-Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="py-1.5 px-3">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customer Quote */}
                {selectedProject.customer_quote && (
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <Quote className="w-8 h-8 text-primary/50 mb-3" />
                    <blockquote className="text-lg italic mb-3">
                      "{selectedProject.customer_quote}"
                    </blockquote>
                    {selectedProject.customer_name && (
                      <p className="text-sm text-muted-foreground font-medium">
                        — {selectedProject.customer_name}
                      </p>
                    )}
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Haben Sie ein ähnliches Projekt? Wir helfen Ihnen gerne!
                  </p>
                  <div className="flex gap-3">
                    <Button variant="cta" asChild className="flex-1">
                      <Link href="/kontakt">Anfrage stellen</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/kontakt">Kontakt</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Referenzen;
