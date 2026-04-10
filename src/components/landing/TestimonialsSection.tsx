import { Star } from "lucide-react";

const testimonials = [
  { name: "Maria S.", text: "Minha filha adorou! As atividades são muito bem feitas e ela se diverte enquanto aprende.", rating: 5 },
  { name: "Ana P.", text: "Melhor investimento que fiz! O conteúdo é riquíssimo e muito fácil de usar.", rating: 5 },
  { name: "Juliana R.", text: "Super recomendo! As crianças ficam entretidas por horas com as atividades.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">O que dizem as mamães</h2>
          <p className="text-muted-foreground mt-3">Depoimentos de quem já comprou</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6 space-y-3">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
