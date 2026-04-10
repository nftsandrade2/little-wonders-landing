import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-card rounded-2xl border border-border p-8">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-10 h-10 text-success" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold text-foreground">Garantia de 7 Dias</h3>
            <p className="text-muted-foreground mt-2">
              Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
