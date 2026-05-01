'use client'

import SEOHead from "@/components/SEOHead";
import InlineSchema from "@/components/InlineSchema";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import DruckChecklist from "@/components/landing/DruckChecklist";
import DruckValueProposition from "@/components/landing/DruckValueProposition";
import MesseCaseStudy from "@/components/landing/MesseCaseStudy";
import MesseMaterialTips from "@/components/landing/MesseMaterialTips";
import StickyCTA from "@/components/landing/StickyCTA";
import SectionDivider from "@/components/landing/SectionDivider";
import CrossLinkSection from "@/components/landing/CrossLinkSection";
import CTASection from "@/components/landing/CTASection";
import RegionalUniqueContent from "@/components/landing/RegionalUniqueContent";
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
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import InTextLinksSection from "@/components/landing/InTextLinksSection";
import ContextualLinks from "@/components/ContextualLinks";
import { getDruckRegionBySlug, regionalDruckData } from "@/data/regionalDruckData";
import { getDruckExtendedDataBySlug } from "@/data/regionalDruckExtendedData";
import { getDruckSectionData } from "@/data/druckSectionData";
import { getExtendedDruckSections } from "@/data/druckExtendedSections";
import {
  druckRegionLayouts,
  druckSectionOrder,
  druckCTAByType,
  type DruckLayoutType,
  type SectionId,
} from "@/data/layoutTypes";
import {
  Printer, Clock, Package, CheckCircle, ArrowRight, MapPin, Truck, Star, Cpu
} from "lucide-react";

interface DruckRegionProps {
  region: string;
}

const DruckRegion = ({ region }: DruckRegionProps) => {
  const regionData = getDruckRegionBySlug(region);
  const extendedData = getDruckExtendedDataBySlug(region);
  const sectionData = getDruckSectionData(region);
  const extSections = getExtendedDruckSections(region);

  if (!regionData) return null;

  const layoutType: DruckLayoutType = druckRegionLayouts[region] || 'industrie';
  const sectionOrder = druckSectionOrder[layoutType];
  const ctaConfig = druckCTAByType[layoutType](regionData.name, regionData.deliveryTime);

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "name": `3D-Druck ${regionData.name}`, "description": regionData.metaDescription,
    "provider": { "@type": "LocalBusiness", "name": "ekdruck e.U.", "address": { "@type": "PostalAddress", "streetAddress": "Negrellistraße 15", "addressLocality": "Gunskirchen", "postalCode": "4623", "addressRegion": "Oberösterreich", "addressCountry": "AT" }, "telephone": "+43 676 5517197" },
    "areaServed": { "@type": regionData.type === 'bundesland' ? "State" : "City", "name": regionData.name },
    "serviceType": "FDM 3D-Druck Service"
  };

  const fallbackFaqs = [
    { question: `Was kostet 3D-Druck in ${regionData.name}?`, answer: `Ab €20 für kleine Modelle. Lieferung: ${regionData.deliveryTime}. Kostenloses Angebot in 6h.` },
    { question: `Welche Materialien sind verfügbar?`, answer: `PLA+ (Allrounder), PETG (robust), ASA (UV-beständig), TPU (flexibel). Alle in verschiedenen Farben.` },
    { question: `Wie schnell nach ${regionData.name}?`, answer: `Standard: ${regionData.deliveryTime}. Express 24h möglich (50% Aufpreis).` },
    { question: `Welche Dateiformate?`, answer: `STL, OBJ, 3MF und STEP. Auch Modellierung nach Skizze auf Anfrage.` },
    { question: `Gibt es Mengenrabatt?`, answer: `Ab 10 Stück: 10%. Ab 50 Stück: 15%. Ab 100 Stück: individueller Projektpreis.` },
  ];
  const faqs = extendedData.faqs || fallbackFaqs;

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ek-druck.at/" },
      { "@type": "ListItem", "position": 2, "name": "FDM 3D-Druck", "item": "https://www.ek-druck.at/fdm-3d-druck" },
      { "@type": "ListItem", "position": 3, "name": regionData.name, "item": `https://www.ek-druck.at/3d-druck-${regionData.slug}` }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const aggregateRatingSchema = {
    "@context": "https://schema.org", "@type": "LocalBusiness", "name": "ekdruck e.U.",
    "url": `https://www.ek-druck.at/3d-druck-${regionData.slug}`,
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "31", "bestRating": "5", "worstRating": "1" }
  };

  const breadcrumbs = [
    { name: "FDM 3D-Druck", url: "/fdm-3d-druck" },
    { name: regionData.name, url: `/3d-druck-${regionData.slug}` }
  ];

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
                    {regionData.type === 'standort' ? 'Unser Standort' : regionData.type === 'bundesland' ? 'Bundesland' : 'Stadt'} {regionData.name}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">{regionData.h1Title}</h1>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">{extendedData.introText || regionData.heroSubtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <Button asChild size="lg" variant="hero" className="text-base"><Link href="/kontakt">{ctaConfig.ctaLabel}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
                    <Button asChild size="lg" variant="outline" className="group"><Link href="/fdm-3d-druck">FDM-Verfahren im Detail<ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" /></Link></Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-border/50">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"><Truck className="w-4 h-4 text-primary" /><span className="text-sm font-medium">{regionData.deliveryTime}</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50"><Printer className="w-4 h-4 text-primary" /><span className="text-sm">Ab €20</span></div>
                    <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-primary text-primary" />))}<span className="text-sm font-medium ml-1">5.0</span></div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={200} className="grid grid-cols-2 gap-4">
                  <Card className="col-span-2 bg-primary text-primary-foreground border-0 shadow-lg overflow-hidden relative"><CardContent className="p-8 text-center relative"><Cpu className="w-8 h-8 mx-auto mb-3 opacity-80" /><div className="text-5xl font-bold mb-2">{regionData.stats.projekte}</div><div className="text-primary-foreground/80">Projekte realisiert</div></CardContent></Card>
                  <Card className="border border-border/50 shadow-md bg-card"><CardContent className="p-6 text-center"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"><Clock className="w-6 h-6 text-primary" /></div><div className="text-3xl font-bold text-primary mb-1">{regionData.stats.lieferzeit}</div><div className="text-sm text-muted-foreground">Lieferzeit</div></CardContent></Card>
                  <Card className="border border-border/50 shadow-md bg-card"><CardContent className="p-6 text-center"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3"><Package className="w-6 h-6 text-primary" /></div><div className="text-3xl font-bold text-primary mb-1">{regionData.stats.materialien}</div><div className="text-sm text-muted-foreground">Materialien</div></CardContent></Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );

      case 'valueProposition': return <DruckValueProposition key="vp" regionName={regionData.name} data={sectionData.valueProposition} />;
      case 'caseStudy': return <MesseCaseStudy key="cs" caseStudy={extendedData.caseStudy} regionName={regionData.name} />;
      case 'checklist': return <DruckChecklist key="cl" regionName={regionData.name} deliveryTime={regionData.deliveryTime} data={sectionData.checklist} />;
      case 'materials': return <MesseMaterialTips key="mat" materials={extendedData.materials} regionName={regionData.name} industryFocus={extendedData.industryFocus} />;

      case 'localContext':
        return (
          <section key="lc" className="py-20 md:py-28 bg-muted/20">
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-in" className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6"><Cpu className="w-4 h-4 text-primary" />Regionale Anwendungen</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">3D-Druck Anwendungen in {regionData.name}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">So nutzen Unternehmen in {regionData.name} unseren 3D-Druck Service</p>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {regionData.localIndustries.map((industry, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
                    <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Printer className="w-5 h-5 text-primary" /></div>
                          <div><h3 className="font-bold text-base">{industry.name}</h3><span className="text-xs text-primary font-medium">{industry.sector}</span></div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{industry.application}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        );

      case 'uniqueContent': return <RegionalUniqueContent key="uc" regionName={regionData.name} regionSlug={regionData.slug} deliveryTime={regionData.deliveryTime} type="druck" />;

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
                  {regionData.localAdvantages.map((adv, i) => (
                    <AnimatedSection key={i} animation="slide-up" delay={i * 75}>
                      <div className="group flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><CheckCircle className="w-6 h-6 text-primary" /></div>
                        <span className="text-lg font-medium pt-2">{adv}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );

      case 'crossLinks': return <CrossLinkSection key="xl" regionName={regionData.name} regionSlug={regionData.slug} currentType="druck" />;

      case 'ctaPrimary':
        return <CTASection key="cta" headline={ctaConfig.headline} subline={ctaConfig.subline} ctaLabel={ctaConfig.ctaLabel} ctaHref="/kontakt" secondaryLabel={ctaConfig.secondaryLabel} secondaryHref="/3d-druck-materialien" badge={ctaConfig.badge} urgencyText={ctaConfig.urgencyText} variant={ctaConfig.variant} />;

      case 'ctaSecondary':
        return <CTASection key="cta2" headline={`Express 3D-Druck nach ${regionData.name}`} subline="Bestellung bis 10 Uhr = Versand heute. Morgen in Ihren Händen." ctaLabel="Express jetzt starten" ctaHref="/kontakt" badge="24h Express" urgencyText={`🚀 Same-Day Versand nach ${regionData.name}`} variant="filled" />;

      case 'faq': return <FAQSection key="faq" faqs={faqs} schemaId={regionData.name} />;

      case 'nearbyRegions':
        return (
          <section key="nr" className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                <span className="text-sm text-muted-foreground mr-2 py-2">Weitere Regionen:</span>
                {Object.values(regionalDruckData).filter(r => r.slug !== regionData.slug).slice(0, 12).map(r => (
                  <Link key={r.slug} href={`/3d-druck-${r.slug}`} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary/40 hover:text-primary text-sm font-medium transition-all">
                    <MapPin className="w-3 h-3" />{r.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );

      case 'priceComparison': return <PriceComparisonSection key="pc" regionName={regionData.name} category="druck" data={sectionData.priceComparison} />;
      case 'expressTimeline': return <ExpressTimelineSection key="et" regionName={regionData.name} deliveryTime={regionData.deliveryTime} data={sectionData.expressTimeline} />;
      case 'techSpecs': return <TechSpecsSection key="ts" regionName={regionData.name} category="druck" data={sectionData.techSpecs} />;
      case 'problemSolution': return <ProblemSolutionSection key="ps" regionName={regionData.name} category="druck" data={sectionData.problemSolution} />;
      case 'trustSignals': return <TrustSignalsSection key="trust" regionName={regionData.name} data={sectionData.trustSignals} />;
      case 'industryShowcase': return <IndustryShowcaseSection key="is" regionName={regionData.name} industries={regionData.localIndustries} category="druck" />;
      case 'allRegionsLinks': return <AllRegionsLinks key="arl" currentSlug={regionData.slug} type="druck" />;
      case 'inTextLinks': return <InTextLinksSection key="itl" regionName={regionData.name} links={sectionData.inTextLinks} />;
      case 'moneyPageLinks': return (
        <ContextualLinks
          key="mpl"
          eyebrow={`3D-Druck Service ${regionData.name}`}
          heading={`Mehr 3D-Druck Lösungen für ${regionData.name}`}
          description={`Sie suchen für Ihr Projekt in ${regionData.name} mehr als nur den Standard-Druck? Hier finden Sie passende Spezialangebote.`}
          paragraphs={[
            {
              parts: [
                { before: `Für eine schnelle Preisindikation Ihres Projekts in ${regionData.name} nutzen Sie unseren `, anchor: "kostenlosen 3D-Druck Kostenrechner", href: "/kostenrechner", after: " – STL-Datei hochladen, Material wählen, Richtpreis in 60 Sekunden erhalten. Anschließend können Sie direkt eine " },
                { anchor: "verbindliche Anfrage stellen", href: "/kontakt", after: ` und erhalten Ihr Festpreisangebot innerhalb von 6 Stunden.` },
              ],
            },
            {
              parts: [
                { before: `Architekturbüros in ${regionData.name} setzen auf unsere `, anchor: "maßstabsgetreuen Architekturmodelle (1:50–1:500)", href: "/architekturmodelle", after: " für Wettbewerbe und Baueinreichungen. Messeaussteller nutzen unsere " },
                { anchor: `Express-Messemodelle mit 24h-Lieferung nach ${regionData.name}`, href: "/messemodelle", after: ". Für Produktentwickler bieten wir " },
                { anchor: "Rapid Prototyping ab €20", href: "/rapid-prototyping", after: " ohne Mindestmenge." },
              ],
            },
            {
              parts: [
                { before: `Unternehmen in ${regionData.name} profitieren von unseren `, anchor: "B2B-Konditionen für Firmenkunden", href: "/firmenkunden", after: ": UID-Rechnung, Mengenrabatt ab 5 Stück, NDA-fähige Projektabwicklung. Eine vollständige Übersicht aller verfügbaren " },
                { anchor: "3D-Druck Materialien (PLA, PETG, ASA, Carbon-PA)", href: "/3d-druck-materialien", after: " finden Sie auf unserer Material-Seite." },
              ],
            },
          ]}
          actions={[
            { label: "Preis online berechnen", href: "/kostenrechner", description: `Richtpreis für Ihr Projekt in ${regionData.name} in 60 Sekunden` },
            { label: "B2B-Anfrage stellen", href: "/firmenkunden", description: "Mengenrabatt, UID-Rechnung, fester Ansprechpartner" },
            { label: "Architekturmodelle", href: "/architekturmodelle", description: "Wettbewerbsmodelle 1:50–1:500 mit CAD-Import" },
            { label: "Messe-Express", href: "/messemodelle", description: `Modell in 24–48h nach ${regionData.name}` },
          ]}
          variant="muted"
        />
      );
      case 'typicalProjects': return <TypicalProjectsSection key="tp" regionName={regionData.name} data={extSections.typicalProjects} />;
      case 'projectWorkflow': return <ProjectWorkflowSection key="pw" regionName={regionData.name} data={extSections.projectWorkflow} />;
      case 'customerPriorities': return <CustomerPrioritiesSection key="cp" regionName={regionData.name} data={extSections.customerPriorities} />;
      case 'commonMistakes': return <CommonMistakesSection key="cm" regionName={regionData.name} data={extSections.commonMistakes} />;
      default: return null;
    }
  };

  return (
    <>
      <SEOHead title={regionData.metaTitle} description={regionData.metaDescription} keywords={`3d druck ${regionData.name.toLowerCase()}, 3d-druck service ${regionData.name.toLowerCase()}, fdm druck ${regionData.name.toLowerCase()}`} path={`/3d-druck-${regionData.slug}`} />
      <InlineSchema id={`druck-service-${regionData.slug}`} schema={serviceSchema} />
      <InlineSchema id={`druck-breadcrumb-${regionData.slug}`} schema={breadcrumbSchema} />
      <InlineSchema id={`druck-faq-${regionData.slug}`} schema={faqSchema} />
      <InlineSchema id={`druck-rating-${regionData.slug}`} schema={aggregateRatingSchema} />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {sectionOrder.map(sectionId => renderSection(sectionId))}
      </main>

      <Footer />
      <StickyCTA regionName={regionData.name} deliveryTime={regionData.deliveryTime} />
    </>
  );
};

export default DruckRegion;
