import { Star, Heart, Sparkles, BookOpen } from "lucide-react";

const benefits = [
  { icon: Star, title: "Benefício 1", description: "Descrição curta do benefício principal para a criança." },
  { icon: Heart, title: "Benefício 2", description: "Descrição curta do segundo benefício importante." },
  { icon: Sparkles, title: "Benefício 3", description: "Descrição curta do terceiro benefício relevante." },
  { icon: BookOpen, title: "Benefício 4", description: "Descrição curta do quarto benefício do produto." },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Por que escolher este produto?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Subtítulo da seção de benefícios</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6 text-center space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <b.icon className="w-6 h-6 text-primary" />
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
