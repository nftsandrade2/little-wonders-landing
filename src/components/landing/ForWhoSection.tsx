import { CheckCircle } from "lucide-react";

const items = [
  "Mães que buscam atividades educativas para os filhos",
  "Pais que querem estimular a criatividade das crianças",
  "Educadores que procuram material de apoio",
  "Famílias que valorizam aprendizado lúdico",
];

const ForWhoSection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Para quem é este produto?</h2>
            <p className="text-muted-foreground mt-3">Veja se você se identifica</p>
          </div>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-lg border border-border p-4">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
