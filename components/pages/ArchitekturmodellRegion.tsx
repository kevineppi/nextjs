'use client'

import SEOHead from "@/components/SEOHead";
import InlineSchema from "@/components/InlineSchema";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import ArchitekturChecklist from "@/components/landing/ArchitekturChecklist";
import MesseCaseStudy from "@/components/landing/MesseCaseStudy";
import MesseMaterialTips from "@/components/landing/MesseMaterialTips";
import ArchitekturValueProposition from "@/components/landing/ArchitekturValueProposition";
import StickyCTA from "@/components/landing/StickyCTA";
import SectionDivider from "@/components/landing/SectionDivider";
import PersonalDeliveryInfo from "@/components/landing/PersonalDeliveryInfo";
import LocalMessenSection from "@/components/landing/LocalMessenSection";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import RegionalUniqueContent from "@/components/landing/RegionalUniqueContent";
import CTASection from "@/components/landing/CTASection";
import PriceComparisonSection from "@/components/landing/sections/PriceComparisonSection";
import ExpressTimelineSection from "@/components/landing/sections/ExpressTimelineSection";
import TechSpecsSection from "@/components/landing/sections/TechSpecsSection";
import ProblemSolutionSection from "@/components/landing/sections/ProblemSolutionSection";
import TrustSignalsSection from "@/components/landing/sections/TrustSignalsSection";
import IndustryShowcaseSection from "@/components/landing/sections/IndustryShowcaseSection";
import TypicalProjectsSection from "@/components/landing/sections/TypicalProjectsSection";
import ProjectWorkflowSection from "@/components/landing/sections/ProjectWorkflowSection";
import CustomerPrioritiesSection from "@/components/landing/sections/CustomerPrioritiesSection";
import CommonMistakesSection from "@/components/landing/sections/CommonMistakesSection";
import { getArchitekturRegionBySlug, regionalArchitekturData } from "@/data/regionalArchitekturData";
import { getArchitekturExtendedDataBySlug } from "@/data/regionalArchitekturExtendedData";
import { getGermanArchitekturBySlug, germanArchitekturData } from "@/data/germanArchitekturData";
import { getGermanArchitekturExtendedBySlug } from "@/data/germanArchitekturExtendedData";
import { getExtendedArchitekturSections } from "@/data/architekturExtendedSections";
import {
  architekturRegionLayouts,
  architekturSectionOrder,
  architekturCTAByType,
  type ArchitekturLayoutType,
  type SectionId,
} from "@/data/layoutTypes";
import { 
  Building2, Clock, Layers, CheckCircle, ArrowRight, MapPin, Truck, Star
} from "lucide-react";

const ArchitekturmodellRegion = () => {
  const pathname = usePathname();
  const region = pathname?.split("/").pop() || "";
  const atRegion = region ? getArchitekturRegionBySlug(region) : undefined;
  const deRegion = region ? getGermanArchitekturBySlug(region) : undefined;
  const regionData = atRegion || deRegion;
  const isGerman = !!deRegion && !atRegion;
  const extendedData = region ? (isGerman ? getGermanArchitekturExtendedBySlug(region) : getArchitekturExtendedDataBySlug(region)) : undefined;
  const extSections = region ? getExtendedArchitekturSections(region) : undefined;

  if (!regionData || !extendedData) {
    redirect("/architekturmodelle"); return null;
  }

  // Determine layout type for this region
  const layoutType: ArchitekturLayoutType = (region && architekturRegionLayouts[region]) || 'casestudy';
  const sectionOrder = architekturSectionOrder[layoutType];
  const ctaConfig = architekturCTAByType[layoutType](regionData.name, regionData.deliveryTime);

  // Schema data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Architekturmodelle ${regionData.name}`,
    "description": regionData.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ekdruck e.U.",
      "address": { "@type": "PostalAddress", "streetAddress": "Negrellistraße 15", "addressLocality": "Gunskirchen", "postalCode": "4623", "addressRegion": "Oberösterreich", "addressCountry": "AT" },
      "telephone": "+43 676 5517197",
      "email": "office@ek-druck.at"
    },
    "areaServed": { "@type": regionData.type === 'bundesland' ? "State" : "City", "name": regionData.name },
    "serviceType": "3D-Druck Architekturmodelle"
  };

  const fallbackFaqs = [
    { question: `Was kostet ein Architekturmodell in ${regionData.name}?`, answer: `Studienmodelle ab €20, Wettbewerbsmodelle ab €60. Lieferung nach ${regionData.name}: ${regionData.deliveryTime}. Kostenloses Angebot in 6h.` },
    { question: `Welche Maßstäbe sind möglich?`, answer: `Von 1:50 (Detailmodelle) bis 1:500 (Städtebau). Die gängigsten: 1:100 für Wettbewerbe, 1:200 für Stadtplanungsmodelle.` },
    { question: `Können CAD-Dateien direkt verarbeitet werden?`, answer: `Ja – STL, OBJ, 3MF und STEP. Auch Exporte aus ArchiCAD, Revit, Rhino und SketchUp.` },
    { question: `Wie schnell ist die Lieferung nach ${regionData.name}?`, answer: `Standard: ${regionData.deliveryTime}. Express: 24h (Aufpreis 50%). ${regionData.deliveryNote}.` },
    { question: `Kann Umgebungsbebauung dargestellt werden?`, answer: `Ja – modulare Stadtmodelle mit farblich differenzierter Bestandsbebauung. Ideal für Wettbewerbe und Bürgerbeteiligungen.` },
  ];
  const faqs = extendedData.faqs || fallbackFaqs;

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ek-druck.at/" },
      { "@type": "ListItem", "position": 2, "name": "Architekturmodelle", "item": "https://www.ek-druck.at/architekturmodelle" },
      { "@type": "ListItem", "position": 3, "name": regionData.name, "item": `https://www.ek-druck.at/architekturmodelle/${regionData.slug}` }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const aggregateRatingSchema = {
    "@context": "https://schema.org", "@type": "LocalBusiness", "name": "ekdruck e.U.",
    "url": `https://www.ek-druck.at/architekturmodelle/${regionData.slug}`,
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "31", "bestRating": "5", "worstRating": "1" }
  };

  const breadcrumbs = [
    { name: "Architekturmodelle", url: "/architekturmodelle" },
    { name: regionData.name, url: `/architekturmodelle/${regionData.slug}` }
  ];

  const nearbyRegions = regionData.nearbyRegions
    .map(slug => regionalArchitekturData[slug] || germanArchitekturData[slug])
    .filter(Boolean).slice(0, 4);

  // ═══════════════════════════════════════════
  // SECTION RENDERER – renders sections based on layoutType order
  // ═══════════════════════════════════════════
  const renderSection = (sectionId: SectionId) => {
    switch (sectionId) {
      case 'hero':
        return (
          <section key="hero" className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-muted/20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" />
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedSection animation="fade-in">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
                    <MapPin className="w-4 h-4" />
                    {regionData.type === 'bundesland' ? 'Bundesland' : 'Stadt'} {regionData.name}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">{regionData.h1Title}</h1>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">{extendedData.introText || regionData.heroSubtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <Button asChild size="lg" variant="hero" className="text-base">
                      <Link href="/kontakt">{ctaConfig.ctaLabel}<ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="group">
                      <Link href="/architekturmodelle">Alle Infos<ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" /></Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-border/50">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"><Truck className="w-4 h-4 text-primary" /><span className="text-sm font-medium">{regionData.deliveryTime}</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"><Building2 className="w-4 h-4 text-primary" /><span className="text-sm">Ab €20</span></div>
                    <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-primary text-primary" />))}<span className="text-sm font-medium ml-1">5.0</span></div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={200} className="grid grid-cols-2 gap-4">
                  <Card className="col-span-2 bg-primary text-primary-foreground border-0 shadow-lg overflow-hidden relative">
                    <CardContent className="p-8 text-center relative"><Building2 className="w-8 h-8 mx-auto mb-3 opacity-80" /><div className="text-5xl font-bold mb-2">{regionData.stats.projekte}</div><div className="text-primary-foreground/80">Architekturmodelle realisiert</div></CardContent>
                  </Card>
                  <Card className="border border-border/50 shadow-md bg-card"><CardContent className="p-6 text-center"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"><Clock className="w-6 h-6 text-primary" /></div><div className="text-3xl font-bold text-primary mb-1">{regionData.stats.lieferzeit}</div><div className="text-sm text-muted-foreground">Lieferzeit</div></CardContent></Card>
                  <Card className="border border-border/50 shadow-md bg-card"><CardContent className="p-6 text-center"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"><CheckCircle className="w-6 h-6 text-primary" /></div><div className="text-3xl font-bold text-primary mb-1">{regionData.stats.kunden}</div><div className="text-sm text-muted-foreground">Kunden in {regionData.name}</div></CardContent></Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );

      case 'valueProposition':
        return <ArchitekturValueProposition key="vp" regionName={regionData.name} />;

      case 'caseStudy':
        return <MesseCaseStudy key="cs" caseStudy={extendedData.caseStudy} regionName={regionData.name} />;

      case 'checklist':
        return <ArchitekturChecklist key="cl" regionName={regionData.name} deliveryTime={regionData.deliveryTime} />;

      case 'materials':
        return <MesseMaterialTips key="mat" materials={extendedData.materials} regionName={regionData.name} industryFocus={extendedData.industryFocus} />;

      case 'localContext':
        return <LocalMessenSection key="lc" messen={regionData.localArchitekturContext} regionName={regionData.name} type="architektur" />;

      case 'uniqueContent':
        return <RegionalUniqueContent key="uc" regionName={regionData.name} regionSlug={regionData.slug} deliveryTime={regionData.deliveryTime} type="architektur" isGerman={isGerman} />;

      case 'personalDelivery':
        return <PersonalDeliveryInfo key="pd" regionName={regionData.name} />;

      case 'localAdvantages':
        return (
          <section key="la" className="py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-5xl mx-auto">
                <AnimatedSection animation="fade-in" className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6"><CheckCircle className="w-4 h-4 text-primary" />Regionale Vorteile</div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Ihre Vorteile in {regionData.name}</h2>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 gap-5">
                  {regionData.localAdvantages.map((advantage, index) => (
                    <AnimatedSection key={index} animation="slide-up" delay={index * 75}>
                      <div className="group flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors"><CheckCircle className="w-6 h-6 text-primary" /></div>
                        <span className="text-lg font-medium pt-2">{advantage}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );

      case 'deliveryInfo':
        return (
          <section key="di" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
            <div className="container mx-auto px-4 relative">
              <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto text-center">
                <div className="w-18 h-18 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg p-4"><Truck className="w-8 h-8 text-primary-foreground" /></div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Lieferung nach {regionData.name}</h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">{regionData.deliveryNote}</p>
                <div className="grid sm:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: Clock, label: "Standard", value: regionData.deliveryTime, highlight: false },
                    { icon: Layers, label: "Express", value: "24h", highlight: true },
                    { icon: Truck, label: "Versandkostenfrei", value: "ab €100", highlight: false }
                  ].map((item, index) => (
                    <Card key={index} className={`border border-border/50 shadow-md overflow-hidden ${item.highlight ? 'ring-1 ring-primary' : ''}`}>
                      {item.highlight && <div className="bg-primary text-primary-foreground text-xs font-bold py-1 text-center">EMPFOHLEN</div>}
                      <CardContent className="p-8 text-center bg-card">
                        <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${item.highlight ? 'bg-primary/15' : 'bg-muted/50'}`}><item.icon className={`w-7 h-7 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} /></div>
                        <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                        <div className={`text-3xl font-bold ${item.highlight ? 'text-primary' : ''}`}>{item.value}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button asChild size="lg" className="shadow-lg"><Link href="/kontakt">Jetzt Anfrage stellen<ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
              </AnimatedSection>
            </div>
          </section>
        );

      case 'ctaPrimary':
        return (
          <CTASection
            key="cta"
            headline={ctaConfig.headline}
            subline={ctaConfig.subline}
            ctaLabel={ctaConfig.ctaLabel}
            ctaHref="/kontakt"
            secondaryLabel="Architektur-Flatrate ab €199/Mon."
            secondaryHref="/architekturmodelle-abo"
            badge={ctaConfig.badge}
            urgencyText={ctaConfig.urgencyText}
            variant={ctaConfig.variant}
          />
        );

      case 'ctaSecondary':
        return (
          <CTASection
            key="cta2"
            headline={`Express für ${regionData.name} – Angebot in 6h`}
            subline="CAD-Datei senden, Preis erhalten, Modell drucken. So einfach ist das."
            ctaLabel="Jetzt Express anfragen"
            ctaHref="/kontakt"
            secondaryLabel="Standard-Lieferung"
            secondaryHref="/architekturmodelle"
            badge="Schnell & unkompliziert"
            urgencyText={`⚡ Express 24h nach ${regionData.name}`}
            variant="filled"
          />
        );

      case 'faq':
        return <FAQSection key="faq" faqs={faqs} title={`Häufige Fragen zu Architekturmodellen in ${regionData.name}`} subtitle={`Antworten rund um Lieferung und Service für ${regionData.name}`} schemaId={`architekturmodelle-${regionData.slug}`} />;

      case 'nearbyRegions':
        return nearbyRegions.length > 0 ? (
          <section key="nr" className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in" className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Auch in der Nähe</h2><p className="text-muted-foreground">Architekturmodelle für weitere Regionen</p></AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {nearbyRegions.map((nearby, index) => (
                  <AnimatedSection key={nearby.slug} animation="slide-up" delay={index * 75}>
                    <Link href={`/architekturmodelle/${nearby.slug}`} className="group block" onClick={() => window.scrollTo(0, 0)}>
                      <Card className="border border-border/50 shadow-sm card-interactive overflow-hidden">
                        <div className="h-1 bg-primary/20 group-hover:bg-primary transition-all duration-300 group-hover:h-1.5" />
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"><MapPin className="w-6 h-6 text-primary" /></div>
                          <div className="font-bold text-lg group-hover:text-primary transition-colors mb-1">{nearby.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center justify-center gap-1"><Clock className="w-3 h-3" />{nearby.stats.lieferzeit}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        ) : null;

      case 'allRegionsLinks':
        return <AllRegionsLinks key="arl" currentSlug={regionData.slug} type="architektur" />;

      case 'relatedPages':
        return <RelatedPages key="rp" currentPage={`/architekturmodelle/${regionData.slug}`} />;

      case 'priceComparison':
        return <PriceComparisonSection key="pc" regionName={regionData.name} category="architektur" />;

      case 'expressTimeline':
        return <ExpressTimelineSection key="et" regionName={regionData.name} deliveryTime={regionData.deliveryTime} />;

      case 'techSpecs':
        return <TechSpecsSection key="ts" regionName={regionData.name} category="architektur" />;

      case 'problemSolution':
        return <ProblemSolutionSection key="ps" regionName={regionData.name} category="architektur" />;

      case 'trustSignals':
        return <TrustSignalsSection key="trust" regionName={regionData.name} />;

      case 'industryShowcase':
        return <IndustryShowcaseSection key="is" regionName={regionData.name} industries={regionData.localArchitekturContext} category="architektur" />;

      case 'typicalProjects':
        return extSections ? <TypicalProjectsSection key="tp" regionName={regionData.name} data={extSections.typicalProjects} /> : null;
      case 'projectWorkflow':
        return extSections ? <ProjectWorkflowSection key="pw" regionName={regionData.name} data={extSections.projectWorkflow} /> : null;
      case 'customerPriorities':
        return extSections ? <CustomerPrioritiesSection key="cp" regionName={regionData.name} data={extSections.customerPriorities} /> : null;
      case 'commonMistakes':
        return extSections ? <CommonMistakesSection key="cm" regionName={regionData.name} data={extSections.commonMistakes} /> : null;

      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead title={regionData.metaTitle} description={regionData.metaDescription} keywords={`architekturmodelle ${regionData.name.toLowerCase()}, 3d-druck architekturmodell ${regionData.name.toLowerCase()}, wettbewerbsmodell ${regionData.name.toLowerCase()}`} path={`/architekturmodelle/${regionData.slug}`} />
      <InlineSchema id={`architektur-service-${regionData.slug}`} schema={serviceSchema} />
      <InlineSchema id={`architektur-breadcrumb-${regionData.slug}`} schema={breadcrumbSchema} />
      <InlineSchema id={`architektur-faq-${regionData.slug}`} schema={faqSchema} />
      <InlineSchema id={`architektur-rating-${regionData.slug}`} schema={aggregateRatingSchema} />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {sectionOrder.map(sectionId => renderSection(sectionId))}
      </main>

      <StickyCTA regionName={regionData.name} deliveryTime={regionData.deliveryTime} />
      <Footer />
    </>
  );
};

export default ArchitekturmodellRegion;
