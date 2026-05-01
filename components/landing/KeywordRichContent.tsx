import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentBlock {
  title: string;
  content: string;
}

interface KeywordRichContentProps {
  title: string;
  intro: string;
  blocks: ContentBlock[];
  ctaText?: string;
  ctaLink?: string;
}

const KeywordRichContent = ({ 
  title, 
  intro, 
  blocks, 
  ctaText = "Anfrage stellen",
  ctaLink = "/kontakt"
}: KeywordRichContentProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{intro}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {blocks.map((block, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{block.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{block.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordRichContent;
