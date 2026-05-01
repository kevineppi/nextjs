const items = [
  "5.0 ★ GOOGLE RATING",
  "EXPRESS 24H",
  "AB €20",
  "MADE IN AUSTRIA",
  "ANGEBOT IN 6H",
  "31 BEWERTUNGEN",
  "FDM PRÄZISION",
  "NACHHALTIG",
];

const MarqueeTicker = ({ reverse = false, className = "" }: { reverse?: boolean; className?: string }) => {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"} style={{ display: "inline-flex" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6">
            <span className="mono text-xs font-bold tracking-[0.2em] text-foreground/60">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
