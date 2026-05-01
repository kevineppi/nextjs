import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InternalLink {
  to: string;
  label: string;
  description: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  className?: string;
}

const InternalLinks = ({ title = "Das könnte Sie auch interessieren", links, className = "" }: InternalLinksProps) => {
  return (
    <section className={`py-12 bg-muted/30 ${className}`} aria-label={title}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="group flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all"
            >
              <ArrowRight className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
              <div>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">{link.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
