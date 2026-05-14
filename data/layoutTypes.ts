// Layout Type System for SEO-differentiated regional pages
// Each layout type defines a unique section order and content focus
// No two neighboring regions may share the same layout type

export type ArchitekturLayoutType = 
  | 'wettbewerb'    // TYPE A: Competition focus - Hero → Problem → CaseStudy → Solution → FAQ → CTA
  | 'kosten'        // TYPE B: Cost focus - Hero → PriceComparison → Advantages → Process → CTA → FAQ
  | 'express'       // TYPE C: Speed focus - Hero → ExpressTimeline → CTA → SocialProof → FAQ
  | 'casestudy'     // TYPE D: Case Study heavy - Hero → CaseStudy → Details → Benefits → CTA → FAQ
  | 'material'      // TYPE E: Material/Tech - Hero → TechSpecs → Material → Process → FAQ → CTA
  | 'behoerden'     // TYPE F: Authority/Developer - Hero → Regulations → Trust → CaseStudy → CTA
  | 'universitaet'; // TYPE G: Academic/Education - Hero → StudentProjects → Materials → FAQ → CTA

export type MesseLayoutType =
  | 'eyecatcher'    // TYPE A: Visual impact - Hero → Showcase → CaseStudy → Materials → CTA → FAQ
  | 'express'       // TYPE B: Speed/Deadline - Hero → Timeline → Express → CTA → Reviews → FAQ
  | 'branche'       // TYPE C: Industry-specific - Hero → IndustryFocus → CaseStudy → Checklist → FAQ → CTA
  | 'grossmodell'   // TYPE D: Large format - Hero → Dimensions → Transport → CaseStudy → CTA → FAQ
  | 'interaktiv'    // TYPE E: Interactive exhibits - Hero → TechSpecs → CaseStudy → Process → FAQ → CTA
  | 'budget'        // TYPE F: Budget/Value - Hero → PriceGuide → Comparison → Process → CTA → FAQ
  | 'event';        // TYPE G: Event beyond fairs - Hero → EventTypes → CaseStudy → Materials → CTA → FAQ

export type DruckLayoutType =
  | 'startup'       // TYPE A: Startup/Innovation - Hero → PitchModels → CaseStudy → Speed → CTA → FAQ
  | 'industrie'     // TYPE B: Industrial/B2B - Hero → Applications → Materials → CaseStudy → FAQ → CTA
  | 'kreativ'       // TYPE C: Creative/Design - Hero → DesignShowcase → Process → CaseStudy → CTA → FAQ
  | 'bildung'       // TYPE D: Education/Research - Hero → AcademicUse → Materials → FAQ → CTA
  | 'express'       // TYPE E: Express/Speed - Hero → Timeline → Express → CTA → CaseStudy → FAQ
  | 'outdoor'       // TYPE F: Outdoor/Durable - Hero → WeatherProof → Materials → CaseStudy → FAQ → CTA
  | 'serie';        // TYPE G: Small batch - Hero → BatchBenefits → PriceScale → Process → CTA → FAQ

// ═══════════════════════════════════════════
// SECTION DEFINITIONS PER LAYOUT TYPE
// ═══════════════════════════════════════════

export type SectionId = 
  | 'hero'
  | 'valueProposition'
  | 'caseStudy'
  | 'checklist'
  | 'materials'
  | 'localContext'
  | 'uniqueContent'
  | 'personalDelivery'
  | 'localAdvantages'
  | 'deliveryInfo'
  | 'crossLinks'
  | 'ctaPrimary'
  | 'ctaSecondary'
  | 'faq'
  | 'nearbyRegions'
  | 'allRegionsLinks'
  | 'relatedPages'
  | 'priceComparison'
  | 'expressTimeline'
  | 'techSpecs'
  | 'problemSolution'
  | 'trustSignals'
  | 'industryShowcase'
  | 'inTextLinks'
  | 'moneyPageLinks'
  | 'typicalProjects'
  | 'projectWorkflow'
  | 'customerPriorities'
  | 'commonMistakes'
  | 'comparison'
  | 'roi'
  | 'effects'
  | 'timeline';

// Section order per Architektur layout type
export const architekturSectionOrder: Record<ArchitekturLayoutType, SectionId[]> = {
  wettbewerb: [
    'hero', 'typicalProjects', 'problemSolution', 'caseStudy', 'projectWorkflow', 'materials', 'checklist',
    'customerPriorities', 'localContext', 'ctaPrimary', 'commonMistakes', 'faq', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  kosten: [
    'hero', 'priceComparison', 'typicalProjects', 'valueProposition', 'checklist', 'projectWorkflow',
    'caseStudy', 'customerPriorities', 'commonMistakes', 'ctaPrimary', 'faq', 'localAdvantages', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  express: [
    'hero', 'expressTimeline', 'typicalProjects', 'ctaSecondary', 'caseStudy', 'projectWorkflow',
    'trustSignals', 'customerPriorities', 'materials', 'commonMistakes', 'faq', 'ctaPrimary', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  casestudy: [
    'hero', 'caseStudy', 'typicalProjects', 'uniqueContent', 'projectWorkflow', 'localAdvantages',
    'customerPriorities', 'materials', 'commonMistakes', 'ctaPrimary', 'faq', 'deliveryInfo', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  material: [
    'hero', 'techSpecs', 'typicalProjects', 'materials', 'projectWorkflow', 'checklist',
    'customerPriorities', 'caseStudy', 'commonMistakes', 'faq', 'ctaPrimary', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  behoerden: [
    'hero', 'trustSignals', 'typicalProjects', 'valueProposition', 'projectWorkflow', 'caseStudy',
    'customerPriorities', 'localContext', 'commonMistakes', 'deliveryInfo', 'ctaPrimary', 'faq', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  universitaet: [
    'hero', 'typicalProjects', 'industryShowcase', 'priceComparison', 'projectWorkflow', 'materials',
    'customerPriorities', 'caseStudy', 'commonMistakes', 'faq', 'ctaPrimary', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ]
};

export const messeSectionOrder: Record<MesseLayoutType, SectionId[]> = {
  eyecatcher: [
    'hero', 'comparison', 'roi', 'typicalProjects', 'industryShowcase', 'effects', 'caseStudy', 'projectWorkflow', 'materials',
    'customerPriorities', 'localContext', 'timeline', 'commonMistakes', 'ctaPrimary', 'faq', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  express: [
    'hero', 'comparison', 'expressTimeline', 'roi', 'typicalProjects', 'ctaSecondary', 'effects', 'projectWorkflow', 'caseStudy',
    'trustSignals', 'customerPriorities', 'timeline', 'commonMistakes', 'faq', 'ctaPrimary', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  branche: [
    'hero', 'comparison', 'roi', 'typicalProjects', 'localContext', 'effects', 'caseStudy', 'projectWorkflow', 'checklist',
    'customerPriorities', 'materials', 'timeline', 'commonMistakes', 'faq', 'ctaPrimary', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  grossmodell: [
    'hero', 'comparison', 'techSpecs', 'roi', 'typicalProjects', 'effects', 'deliveryInfo', 'projectWorkflow', 'caseStudy',
    'customerPriorities', 'materials', 'timeline', 'commonMistakes', 'ctaPrimary', 'faq', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  interaktiv: [
    'hero', 'comparison', 'roi', 'techSpecs', 'typicalProjects', 'effects', 'caseStudy', 'projectWorkflow', 'checklist',
    'customerPriorities', 'uniqueContent', 'timeline', 'commonMistakes', 'faq', 'ctaPrimary', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  budget: [
    'hero', 'priceComparison', 'typicalProjects', 'valueProposition', 'projectWorkflow', 'checklist',
    'customerPriorities', 'caseStudy', 'commonMistakes', 'ctaPrimary', 'faq', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ],
  event: [
    'hero', 'typicalProjects', 'industryShowcase', 'caseStudy', 'projectWorkflow', 'materials',
    'customerPriorities', 'localContext', 'commonMistakes', 'ctaPrimary', 'faq', 'deliveryInfo', 'nearbyRegions', 'allRegionsLinks', 'relatedPages'
  ]
};

export const druckSectionOrder: Record<DruckLayoutType, SectionId[]> = {
  startup: [
    'hero', 'typicalProjects', 'industryShowcase', 'projectWorkflow', 'inTextLinks',
    'caseStudy', 'customerPriorities', 'expressTimeline', 'commonMistakes', 'materials',
    'moneyPageLinks', 'ctaPrimary', 'faq', 'allRegionsLinks', 'crossLinks', 'nearbyRegions'
  ],
  industrie: [
    'hero', 'valueProposition', 'typicalProjects', 'materials', 'projectWorkflow',
    'caseStudy', 'commonMistakes', 'inTextLinks', 'customerPriorities', 'localContext',
    'moneyPageLinks', 'faq', 'ctaPrimary', 'crossLinks', 'allRegionsLinks', 'nearbyRegions'
  ],
  kreativ: [
    'hero', 'industryShowcase', 'customerPriorities', 'checklist', 'typicalProjects',
    'caseStudy', 'projectWorkflow', 'commonMistakes', 'allRegionsLinks',
    'materials', 'inTextLinks', 'moneyPageLinks', 'ctaPrimary', 'faq', 'crossLinks', 'nearbyRegions'
  ],
  bildung: [
    'hero', 'typicalProjects', 'industryShowcase', 'priceComparison', 'projectWorkflow',
    'inTextLinks', 'commonMistakes', 'materials', 'customerPriorities', 'caseStudy',
    'moneyPageLinks', 'faq', 'ctaPrimary', 'crossLinks', 'nearbyRegions', 'allRegionsLinks'
  ],
  express: [
    'hero', 'expressTimeline', 'typicalProjects', 'ctaSecondary', 'projectWorkflow',
    'caseStudy', 'customerPriorities', 'trustSignals', 'commonMistakes',
    'inTextLinks', 'materials', 'allRegionsLinks', 'moneyPageLinks', 'faq', 'ctaPrimary', 'crossLinks', 'nearbyRegions'
  ],
  outdoor: [
    'hero', 'techSpecs', 'typicalProjects', 'materials', 'projectWorkflow',
    'commonMistakes', 'inTextLinks', 'caseStudy', 'customerPriorities', 'localAdvantages',
    'moneyPageLinks', 'faq', 'allRegionsLinks', 'ctaPrimary', 'crossLinks', 'nearbyRegions'
  ],
  serie: [
    'hero', 'priceComparison', 'typicalProjects', 'valueProposition', 'projectWorkflow',
    'checklist', 'customerPriorities', 'commonMistakes', 'inTextLinks', 'caseStudy',
    'moneyPageLinks', 'ctaPrimary', 'allRegionsLinks', 'faq', 'crossLinks', 'nearbyRegions'
  ]
};

// ═══════════════════════════════════════════
// REGION → LAYOUT TYPE ASSIGNMENTS
// Rule: No two neighboring regions share the same type
// ═══════════════════════════════════════════

export const architekturRegionLayouts: Record<string, ArchitekturLayoutType> = {
  // Austrian regions
  'wien': 'wettbewerb',
  'niederoesterreich': 'behoerden',
  'oberoesterreich': 'express',
  'salzburg': 'material',
  'steiermark': 'casestudy',
  'kaernten': 'kosten',
  'tirol': 'universitaet',
  'vorarlberg': 'material',
  'burgenland': 'kosten',
  // Austrian cities
  'graz': 'casestudy',
  'linz': 'express',
  'innsbruck': 'universitaet',
  'salzburg-stadt': 'wettbewerb',
  'klagenfurt': 'behoerden',
  'villach': 'kosten',
  'wels': 'express',
  'st-poelten': 'behoerden',
  'dornbirn': 'material',
  'gunskirchen': 'express',
  // German states
  'bayern': 'wettbewerb',
  'baden-wuerttemberg': 'material',
  'hessen': 'casestudy',
  'nordrhein-westfalen': 'behoerden',
  'berlin': 'wettbewerb',
  'hamburg': 'express',
  'sachsen': 'kosten',
  'niedersachsen': 'casestudy',
  'rheinland-pfalz': 'kosten',
  'schleswig-holstein': 'material',
  'brandenburg': 'behoerden',
  'thueringen': 'kosten',
  'sachsen-anhalt': 'universitaet',
  'mecklenburg-vorpommern': 'casestudy',
  'saarland': 'kosten',
  'bremen': 'express',
  // German cities
  'muenchen': 'wettbewerb',
  'frankfurt': 'casestudy',
  'stuttgart': 'material',
  'koeln': 'express',
  'duesseldorf': 'behoerden',
  'dortmund': 'kosten',
  'essen': 'casestudy',
  'leipzig': 'universitaet',
  'dresden': 'wettbewerb',
  'hannover': 'express',
  'nuernberg': 'material',
  'duisburg': 'kosten',
  'bochum': 'casestudy',
  'wuppertal': 'behoerden',
  'bielefeld': 'kosten',
  'bonn': 'universitaet',
  'muenster': 'wettbewerb',
  'karlsruhe': 'material',
  'mannheim': 'express',
  'augsburg': 'casestudy',
  'wiesbaden': 'behoerden',
  'aachen': 'universitaet',
  'braunschweig': 'express',
  'kiel': 'material',
  'magdeburg': 'kosten',
  'freiburg': 'wettbewerb',
  'luebeck': 'casestudy',
  'erfurt': 'behoerden',
  'rostock': 'express',
  'mainz': 'kosten',
  'kassel': 'casestudy',
  'halle': 'universitaet',
  'saarbruecken': 'kosten',
  'potsdam': 'wettbewerb',
  'oldenburg': 'material',
  'regensburg': 'express',
  'heidelberg': 'universitaet',
  'darmstadt': 'material',
  'wuerzburg': 'casestudy',
};

export const messeRegionLayouts: Record<string, MesseLayoutType> = {
  // Austrian regions
  'wien': 'eyecatcher',
  'niederoesterreich': 'event',
  'oberoesterreich': 'express',
  'salzburg': 'branche',
  'steiermark': 'grossmodell',
  'kaernten': 'budget',
  'tirol': 'interaktiv',
  'vorarlberg': 'branche',
  'burgenland': 'budget',
  // Austrian cities
  'graz': 'grossmodell',
  'linz': 'express',
  'innsbruck': 'interaktiv',
  'salzburg-stadt': 'eyecatcher',
  'klagenfurt': 'event',
  'villach': 'budget',
  'wels': 'express',
  'st-poelten': 'event',
  'dornbirn': 'branche',
  'gunskirchen': 'express',
  // German states + cities
  'bayern': 'eyecatcher',
  'baden-wuerttemberg': 'branche',
  'hessen': 'grossmodell',
  'nordrhein-westfalen': 'event',
  'berlin': 'eyecatcher',
  'hamburg': 'express',
  'sachsen': 'budget',
  'niedersachsen': 'grossmodell',
  'rheinland-pfalz': 'budget',
  'schleswig-holstein': 'branche',
  'brandenburg': 'event',
  'thueringen': 'budget',
  'sachsen-anhalt': 'interaktiv',
  'mecklenburg-vorpommern': 'grossmodell',
  'saarland': 'budget',
  'bremen': 'express',
  'muenchen': 'eyecatcher',
  'frankfurt': 'grossmodell',
  'stuttgart': 'branche',
  'koeln': 'express',
  'duesseldorf': 'event',
  'dortmund': 'budget',
  'essen': 'grossmodell',
  'leipzig': 'interaktiv',
  'dresden': 'eyecatcher',
  'hannover': 'express',
  'nuernberg': 'branche',
  'duisburg': 'budget',
  'bochum': 'grossmodell',
  'wuppertal': 'event',
  'bielefeld': 'budget',
  'bonn': 'interaktiv',
  'muenster': 'eyecatcher',
  'karlsruhe': 'branche',
  'mannheim': 'express',
  'augsburg': 'grossmodell',
  'wiesbaden': 'event',
  'aachen': 'interaktiv',
  'braunschweig': 'express',
  'kiel': 'branche',
  'magdeburg': 'budget',
  'freiburg': 'eyecatcher',
  'luebeck': 'grossmodell',
  'erfurt': 'event',
  'rostock': 'express',
  'mainz': 'budget',
  'kassel': 'grossmodell',
  'halle': 'interaktiv',
  'saarbruecken': 'budget',
  'potsdam': 'eyecatcher',
  'oldenburg': 'branche',
  'regensburg': 'express',
  'heidelberg': 'interaktiv',
  'darmstadt': 'branche',
  'wuerzburg': 'grossmodell',
};

// NEIGHBOR RULE ENFORCED: No adjacent regions share the same layout type
// Wien↔NÖ, OÖ↔Salzburg↔Tirol↔Vorarlberg, Steiermark↔Kärnten, cities≠parent Bundesland
export const druckRegionLayouts: Record<string, DruckLayoutType> = {
  'wien': 'startup',           // NÖ=serie ✓, Bgld=kreativ ✓
  'niederoesterreich': 'serie',// Wien=startup ✓, Bgld=kreativ ✓, OÖ=industrie ✓
  'oberoesterreich': 'industrie', // NÖ=serie ✓, Salzburg=kreativ ✓, Stmk=outdoor ✓
  'salzburg': 'kreativ',       // OÖ=industrie ✓, Tirol=express ✓
  'steiermark': 'outdoor',     // OÖ=industrie ✓, Kärnten=bildung ✓, Bgld=kreativ ✓
  'kaernten': 'bildung',       // Stmk=outdoor ✓
  'tirol': 'express',          // Salzburg=kreativ ✓, Vorarlberg=serie ✓
  'vorarlberg': 'serie',       // Tirol=express ✓
  'burgenland': 'kreativ',     // Wien=startup ✓, NÖ=serie ✓, Stmk=outdoor ✓
  // Cities: must differ from parent Bundesland and neighboring cities
  'graz': 'serie',             // Stmk=outdoor ✓
  'linz': 'express',           // OÖ=industrie ✓, Wels=kreativ ✓
  'innsbruck': 'bildung',      // Tirol=express ✓
  'salzburg-stadt': 'startup', // Salzburg=kreativ ✓
  'klagenfurt': 'startup',     // Kärnten=bildung ✓, Villach=industrie ✓
  'villach': 'industrie',      // Kärnten=bildung ✓, Klagenfurt=startup ✓
  'wels': 'kreativ',           // OÖ=industrie ✓, Linz=express ✓, Gunskirchen=startup ✓
  'st-poelten': 'bildung',     // NÖ=serie ✓
  'dornbirn': 'outdoor',       // Vorarlberg=serie ✓
  'gunskirchen': 'startup',    // OÖ=industrie ✓, Wels=kreativ ✓, Linz=express ✓
};

// ═══════════════════════════════════════════
// CTA VARIATIONS PER LAYOUT TYPE
// ═══════════════════════════════════════════

export interface CTAConfig {
  headline: string;
  subline: string;
  ctaLabel: string;
  secondaryLabel: string;
  badge: string;
  urgencyText: string;
  variant: 'card' | 'filled';
}

export const architekturCTAByType: Record<ArchitekturLayoutType, (regionName: string, deliveryTime: string) => CTAConfig> = {
  wettbewerb: (r, d) => ({
    headline: `Wettbewerbsmodell für ${r} – Angebot in 6h`,
    subline: `Deadline in Sicht? Wir fertigen Ihr Wettbewerbsmodell mit Express-Lieferung nach ${r}. CAD-Datei senden, Angebot erhalten, Modell gewinnen.`,
    ctaLabel: 'Wettbewerbsmodell anfragen',
    secondaryLabel: 'Express-Optionen ansehen',
    badge: `Express für ${r}`,
    urgencyText: `⚡ 24h Express für Wettbewerbstermine · ${d} Standard`,
    variant: 'filled'
  }),
  kosten: (r, d) => ({
    headline: `Architekturmodell ${r} – transparent kalkuliert`,
    subline: `Klare Preise ohne versteckte Kosten. Ab €20 für Studienmodelle, Mengenrabatt ab 3 Stück. Lieferung nach ${r}: ${d}.`,
    ctaLabel: 'Kostenloses Angebot anfordern',
    secondaryLabel: 'Preisbeispiele ansehen',
    badge: 'Faire Preise',
    urgencyText: `💰 Ab €20 · Mengenrabatt verfügbar · Angebot in 6h`,
    variant: 'card'
  }),
  express: (r, d) => ({
    headline: `Express-Modell für ${r} – morgen bei Ihnen`,
    subline: `Dringendes Projekt? Bestellung bis 10 Uhr = Versand am selben Tag. In 24h in ${r}.`,
    ctaLabel: 'Express jetzt beauftragen',
    secondaryLabel: 'Standard-Lieferung wählen',
    badge: '24h Express',
    urgencyText: `🚀 Bestellung bis 10 Uhr = Versand heute · Lieferung morgen in ${r}`,
    variant: 'filled'
  }),
  casestudy: (r, d) => ({
    headline: `Ihr Architekturprojekt in ${r} verdient das beste Modell`,
    subline: `Wie unsere Kunden in ${r}: Projekt senden, Angebot in 6h erhalten, Modell in ${d} geliefert bekommen.`,
    ctaLabel: 'Projekt besprechen',
    secondaryLabel: 'Weitere Projekte ansehen',
    badge: `Projekte in ${r}`,
    urgencyText: `✅ Über 200 realisierte Projekte · Persönliche Beratung`,
    variant: 'card'
  }),
  material: (r, d) => ({
    headline: `Das richtige Material für Ihr Modell in ${r}`,
    subline: `PLA, PETG oder ASA? Wir beraten Sie kostenlos zum optimalen Material für Ihr Projekt. Materialprobe auf Anfrage.`,
    ctaLabel: 'Materialberatung anfordern',
    secondaryLabel: 'Alle Materialien vergleichen',
    badge: 'Materialexperten',
    urgencyText: `🔬 Kostenlose Materialberatung · Musterversand möglich`,
    variant: 'card'
  }),
  behoerden: (r, d) => ({
    headline: `Architekturmodelle für Behörden & Bauträger in ${r}`,
    subline: `Professionelle Modelle für Baugenehmigungen, Bürgerbeteiligungen und Investorenpräsentationen. Zuverlässig und termingerecht.`,
    ctaLabel: 'Anfrage für Behördenprojekt',
    secondaryLabel: 'Referenzen für Behörden',
    badge: 'Behörden-erprobt',
    urgencyText: `🏛️ Erfahrung mit öffentlichen Projekten · Rechnung auf Firma`,
    variant: 'card'
  }),
  universitaet: (r, d) => ({
    headline: `Architekturmodelle für Studium & Lehre in ${r}`,
    subline: `Studienmodelle ab €20. Perfekt für Semesterentwürfe, Abschlussprojekte und Lehrmittel. Schnell und günstig.`,
    ctaLabel: 'Studienmodell anfragen',
    secondaryLabel: 'Preise für Studierende',
    badge: `Uni-Projekte ${r}`,
    urgencyText: `🎓 Ab €20 · Ideal für Semesterentwürfe · ${d} Lieferzeit`,
    variant: 'card'
  }),
};

export const messeCTAByType: Record<MesseLayoutType, (regionName: string, deliveryTime: string) => CTAConfig> = {
  eyecatcher: (r, d) => ({
    headline: `Eyecatcher für Ihren Messestand in ${r}`,
    subline: `Ein Modell, das Besucher anzieht. Maßgefertigt für Ihre Messe in ${r}. Von der Idee zum Blickfang in ${d}.`,
    ctaLabel: 'Eyecatcher anfragen',
    secondaryLabel: 'Referenzen ansehen',
    badge: `Messemodelle ${r}`,
    urgencyText: `✨ Ihr Blickfang am Stand · Maßgefertigt · Bruchsicher verpackt`,
    variant: 'filled'
  }),
  express: (r, d) => ({
    headline: `Messe morgen? Modell heute bestellen!`,
    subline: `Express-Fertigung in 24h. Direkte Lieferung zum Messegelände in ${r}. Jetzt bestellen, morgen am Stand.`,
    ctaLabel: 'Express-Fertigung starten',
    secondaryLabel: 'Standard-Lieferung wählen',
    badge: '24h Express-Messe',
    urgencyText: `🚀 Bestellung bis 10 Uhr = morgen am Stand in ${r}`,
    variant: 'filled'
  }),
  branche: (r, d) => ({
    headline: `Branchenspezifische Messemodelle für ${r}`,
    subline: `Wir kennen die Messen in ${r}. Ob Industriemesse oder Fachmesse – Ihr Modell passt perfekt zum Branchenumfeld.`,
    ctaLabel: 'Branchenmodell anfragen',
    secondaryLabel: 'Messen in der Region',
    badge: `Branchen-Expertise`,
    urgencyText: `🎯 Branchenkenntnis · Maßgefertigt · Lieferung in ${d}`,
    variant: 'card'
  }),
  grossmodell: (r, d) => ({
    headline: `XXL-Messemodelle für ${r} – bis 2 Meter`,
    subline: `Großformatige Modelle, die beeindrucken. Modulare Konstruktion für einfachen Transport. Lieferung nach ${r}: ${d}.`,
    ctaLabel: 'Großmodell anfragen',
    secondaryLabel: 'Größen & Preise',
    badge: 'Großformat-Spezialist',
    urgencyText: `📐 Bis 2m Größe · Modularer Transport · Auf Ihre Messe in ${r}`,
    variant: 'card'
  }),
  interaktiv: (r, d) => ({
    headline: `Interaktive Messeexponate für ${r}`,
    subline: `Modelle zum Anfassen, Auseinandernehmen und Begreifen. Machen Sie Ihr Produkt auf der Messe erlebbar.`,
    ctaLabel: 'Interaktives Modell anfragen',
    secondaryLabel: 'Technische Details',
    badge: 'Interaktiv & Erlebbar',
    urgencyText: `🖐️ Zum Anfassen · Modulare Konstruktion · Für Messen in ${r}`,
    variant: 'card'
  }),
  budget: (r, d) => ({
    headline: `Messemodelle ${r} – professionell ab €30`,
    subline: `Messebudget schonen ohne Qualitätsverlust. Professionelle Modelle ab €30. Transparent kalkuliert, pünktlich geliefert.`,
    ctaLabel: 'Budget-Angebot anfordern',
    secondaryLabel: 'Preisbeispiele',
    badge: 'Budget-freundlich',
    urgencyText: `💰 Ab €30 · Keine versteckten Kosten · ${d} nach ${r}`,
    variant: 'card'
  }),
  event: (r, d) => ({
    headline: `3D-Modelle für Events & Ausstellungen in ${r}`,
    subline: `Nicht nur für Messen: Gala-Events, Ausstellungen, Firmenpräsentationen. Wir liefern den Wow-Effekt nach ${r}.`,
    ctaLabel: 'Event-Modell anfragen',
    secondaryLabel: 'Event-Referenzen',
    badge: `Events ${r}`,
    urgencyText: `🎪 Messen · Galas · Ausstellungen · Express nach ${r}`,
    variant: 'filled'
  }),
};

export const druckCTAByType: Record<DruckLayoutType, (regionName: string, deliveryTime: string) => CTAConfig> = {
  startup: (r, d) => ({
    headline: `3D-Druck für Startups in ${r}`,
    subline: `Pitch-Modelle, Designstudien, Prototypen-Visualisierung. Von der Idee zum greifbaren Modell – schnell und professionell.`,
    ctaLabel: 'Pitch-Modell anfragen',
    secondaryLabel: 'Startup-Referenzen',
    badge: `Startups ${r}`,
    urgencyText: `🚀 Pitch-Modelle in 48h · Ab €20 · Express nach ${r}`,
    variant: 'filled'
  }),
  industrie: (r, d) => ({
    headline: `3D-Druck Service für Unternehmen in ${r}`,
    subline: `Designstudien, Präsentationsmodelle und Anschauungsobjekte für Industrie und Gewerbe. Rechnung auf Firma, NDA möglich.`,
    ctaLabel: 'Firmenprojekt anfragen',
    secondaryLabel: 'B2B-Konditionen',
    badge: 'B2B-Service',
    urgencyText: `🏭 Firmenrechnung · NDA · Mengenrabatt ab 10 Stück`,
    variant: 'card'
  }),
  kreativ: (r, d) => ({
    headline: `3D-Druck für Kreative in ${r}`,
    subline: `Designobjekte, Kunstinstallationen, Produktmockups. Ihre kreative Vision, professionell gedruckt.`,
    ctaLabel: 'Kreativprojekt starten',
    secondaryLabel: 'Design-Galerie',
    badge: `Kreativszene ${r}`,
    urgencyText: `🎨 Designstudien · Kunstobjekte · Produktvisualisierungen`,
    variant: 'filled'
  }),
  bildung: (r, d) => ({
    headline: `3D-Druck für Bildung & Forschung in ${r}`,
    subline: `Lehrmittel, Anschauungsobjekte, Studienmodelle. Ab €20 – perfekt für Universitäten, Schulen und Forschungsinstitute.`,
    ctaLabel: 'Lehrmittel anfragen',
    secondaryLabel: 'Bildungs-Referenzen',
    badge: `Bildung ${r}`,
    urgencyText: `🎓 Ab €20 · Lehrmittel · Studienmodelle · ${d} Lieferung`,
    variant: 'card'
  }),
  express: (r, d) => ({
    headline: `Express 3D-Druck für ${r} – in 24h`,
    subline: `Dringendes Projekt? Bestellung bis 10 Uhr = Versand am selben Tag. Morgen bei Ihnen in ${r}.`,
    ctaLabel: 'Express beauftragen',
    secondaryLabel: 'Standard wählen',
    badge: '24h Express',
    urgencyText: `🚀 24h Fertigung · Same-Day Versand · Express nach ${r}`,
    variant: 'filled'
  }),
  outdoor: (r, d) => ({
    headline: `Wetterfeste 3D-Modelle für ${r}`,
    subline: `ASA und PETG: UV-beständig, wetterfest, langlebig. Für Outdoor-Ausstellungen, Gartenprojekte und dauerhafte Installationen.`,
    ctaLabel: 'Outdoor-Modell anfragen',
    secondaryLabel: 'Materialvergleich',
    badge: 'Outdoor-Spezialist',
    urgencyText: `☀️ UV-beständig · Wetterfest · Für Außenanwendungen in ${r}`,
    variant: 'card'
  }),
  serie: (r, d) => ({
    headline: `Kleinserien 3D-Druck für ${r}`,
    subline: `Ab 10 Stück mit Mengenrabatt. Gleichbleibende Qualität bei jeder Stückzahl. Ideal für Präsentations- und Vertriebsmodelle.`,
    ctaLabel: 'Kleinserie anfragen',
    secondaryLabel: 'Staffelpreise ansehen',
    badge: 'Kleinserien-Profi',
    urgencyText: `📦 10% ab 10 Stück · 15% ab 50 Stück · Lieferung nach ${r}`,
    variant: 'card'
  }),
};
