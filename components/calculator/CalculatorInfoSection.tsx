import { Palette, Eye, Trophy, UserCheck, Sparkles, Boxes } from "lucide-react";

const items = [
  { icon: Eye, title: "Präsentationsmodelle", desc: "Dreidimensionale Modelle für Kundenpräsentationen, Besprechungen und Entscheidungsprozesse – greifbar statt digital." },
  { icon: Palette, title: "Designstudien & Entwürfe", desc: "Haptische Formentwürfe, um Proportionen, Oberflächen und Materialwirkung erlebbar zu machen." },
  { icon: Trophy, title: "Messe- & Ausstellungsmodelle", desc: "Hochwertige Showmodelle, die am Messestand überzeugen – vom Architekturmodell bis zum Produktentwurf." },
  { icon: Boxes, title: "Kleinauflagen & Projektmengen", desc: "Auch größere Stückzahlen sind möglich – ob 10, 50 oder 200+ Modelle. Mengenrabatte ab 10 Stück." },
  { icon: UserCheck, title: "Persönliche Prüfung", desc: "Kein automatisierter Prozess. Jedes Projekt wird individuell von unseren Fachleuten begutachtet und beraten." },
  { icon: Sparkles, title: "Individuelle Beratung", desc: "Material, Oberflächenfinish, Maßstab – wir besprechen jedes Detail persönlich, bevor wir starten." },
];

const CalculatorInfoSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Wofür eignet sich unser 3D-Druck Service?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Wir fertigen <strong className="text-foreground">nicht-technische Modelle</strong> für
          Präsentation, Gestaltung und Ausstellung – von der ersten Idee bis zum fertigen Objekt.
          Keine mechanischen Bauteile, keine industrielle Massenfertigung –
          dafür handwerkliche Qualität und persönliche Betreuung.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="relative p-6 rounded-xl border border-border/60 bg-card hover:shadow-lg hover:border-primary/25 transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CalculatorInfoSection;
