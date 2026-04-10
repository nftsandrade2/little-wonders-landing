import { FileText, Palette, Puzzle, Gift } from "lucide-react";

const items = [
  { icon: FileText, title: "Categoria 1", description: "Descrição do conteúdo incluído nesta categoria." },
  { icon: Palette, title: "Categoria 2", description: "Descrição do conteúdo incluído nesta categoria." },
  { icon: Puzzle, title: "Categoria 3", description: "Descrição do conteúdo incluído nesta categoria." },
  { icon: Gift, title: "Bônus Especial", description: "Descrição do bônus extra que acompanha o produto." },
];

const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">O que você recebe</h2>
          <p className="text-muted-foreground mt-3">Tudo o que está incluso no produto</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 bg-card rounded-xl border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
