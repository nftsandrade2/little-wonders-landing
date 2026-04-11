import { Smartphone, Printer, Brain, Home } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Ocupa a criança sem celular",
    description: "Atividades que prendem a atenção e ajudam a tirar seu filho da tela com mais facilidade.",
  },
  {
    icon: Printer,
    title: "Pronto para imprimir e usar",
    description: "Você recebe o material na hora e já pode começar no mesmo dia, sem complicação.",
  },
  {
    icon: Brain,
    title: "Diversão com aprendizado",
    description: "Enquanto brinca, a criança exercita foco, atenção, coordenação e raciocínio.",
  },
  {
    icon: Home,
    title: "Mais leveza para a rotina",
    description: "Uma solução prática para os momentos em que você precisa entreter seu filho em casa.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
            Menos celular, mais tranquilidade no seu dia a dia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Atividades prontas para entreter, acalmar e ocupar seu filho sem depender de telas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 text-center space-y-3 transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
