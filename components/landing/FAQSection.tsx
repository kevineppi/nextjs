import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/FAQSchema";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  schemaId?: string;
}

const FAQSection = ({
  faqs,
  title = "Häufige Fragen",
  subtitle = "Antworten auf die wichtigsten Fragen",
  schemaId,
}: FAQSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <FAQSchema faqs={faqs} city={schemaId} />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">
            <MessageCircleQuestion className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">{subtitle}</p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/60 rounded-xl bg-card px-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200 data-[state=open]:border-primary/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-sm py-4 hover:no-underline gap-3">
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pl-10 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
