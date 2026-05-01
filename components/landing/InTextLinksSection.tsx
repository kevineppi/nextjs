import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { InTextLinkData } from "@/data/druckSectionData";

interface InTextLinksSectionProps {
  regionName: string;
  links: InTextLinkData[];
}

const InTextLinksSection = ({ regionName, links }: InTextLinksSectionProps) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
              Weitere 3D-Druck Services für {regionName}
            </h2>
            <div className="space-y-4">
              {links.map((link, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {link.context.split(link.anchor).length > 1 ? (
                    <>
                      {link.context.split(link.anchor)[0]}
                      <Link href={link.href}
                        className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors"
                      >
                        {link.anchor}
                      </Link>
                      {link.context.split(link.anchor)[1]}
                    </>
                  ) : (
                    <>
                      {link.context}{" "}
                      <Link href={link.href}
                        className="text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors"
                      >
                        {link.anchor}
                      </Link>
                      .
                    </>
                  )}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InTextLinksSection;
