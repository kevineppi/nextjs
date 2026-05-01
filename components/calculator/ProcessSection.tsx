import { Upload, Search, FileCheck, Send } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "3D-Datei hochladen",
    desc: "Laden Sie Ihre STL-Datei hoch. Volumen, Oberfläche und Abmessungen werden sekundenschnell im Browser analysiert – Ihre Datei verlässt nie Ihren Rechner.",
  },
  {
    num: "02",
    icon: Search,
    title: "Material & Parameter wählen",
    desc: "Wählen Sie aus 8 FDM-Materialien und stellen Sie Schichtdicke, Infill und Wandstärke ein. Der Richtpreis aktualisiert sich bei jeder Änderung in Echtzeit.",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Richtpreis erhalten",
    desc: "Sie sehen sofort eine detaillierte Aufschlüsselung: Materialkosten, Druckkosten, Setup-Pauschale und eventuelle Mengenvorteile bei größeren Projektmengen.",
  },
  {
    num: "04",
    icon: Send,
    title: "Persönliches Angebot anfordern",
    desc: "Passt der Richtpreis? Dann senden Sie eine unverbindliche Anfrage. Wir prüfen Ihr Modell persönlich und melden uns innerhalb von 6 Stunden mit einem individuellen Angebot.",
  },
];

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-muted/15">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          In 4 Schritten zum individuellen Angebot
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Vom Upload bis zum persönlichen Angebot – transparent, schnell und ohne Verpflichtung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="relative bg-card border border-border/60 rounded-xl p-6 hover:border-primary/25 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Connector line on desktop */}
              {i < steps.length - 1 && i % 2 === 0 && (
                <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-3 w-6 h-px bg-border/60" />
              )}
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span className="text-[11px] font-bold text-primary/30 tracking-[0.2em] uppercase">Schritt</span>
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mt-1.5 group-hover:bg-primary/12 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-center text-muted-foreground mt-10 max-w-lg mx-auto">
        Kein Webshop. Kein automatisierter Checkout. Jede Anfrage wird persönlich von unserem Team geprüft –
        auch bei größeren Projektmengen und Kleinauflagen.
      </p>
    </div>
  </section>
);

export default ProcessSection;
