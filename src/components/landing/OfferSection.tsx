import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const included = [
  "Acesso completo ao produto digital",
  "Bônus exclusivo incluso",
  "Atualizações gratuitas",
  "Suporte por e-mail",
];

const OfferSection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-card rounded-2xl border-2 border-primary/30 p-8 md:p-10 text-center space-y-6 shadow-lg">
          <span className="inline-block bg-accent/30 text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
            🔥 Oferta Especial
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Garanta agora por apenas</h2>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground line-through">De R$ 97,00</p>
            <p className="text-5xl font-extrabold text-primary">R$ 27</p>
            <p className="text-sm text-muted-foreground">Pagamento único</p>
          </div>
          <div className="text-left space-y-2 max-w-xs mx-auto">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <Button variant="cta" size="lg" className="w-full py-6 text-lg">
            Comprar Agora
          </Button>
          <div className="bg-muted rounded-lg p-4 border border-border">
            <p className="text-xs text-muted-foreground font-semibold">🎁 Order Bump: Adicione o bônus extra por apenas +R$ 7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
