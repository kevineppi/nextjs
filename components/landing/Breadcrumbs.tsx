import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                )}
                {index === allItems.length - 1 ? (
                  <span className="text-foreground font-medium flex items-center gap-1">
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
