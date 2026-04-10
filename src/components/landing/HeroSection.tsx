import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-block bg-accent/30 text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
              🎨 Produto Digital Infantil
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
              Título principal do seu produto vai aqui
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Subtítulo explicando brevemente o benefício principal do produto para o seu filho.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button variant="cta" size="lg" className="px-10 py-6 text-lg">
                Quero Garantir o Meu!
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">✅ Acesso imediato após a compra</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-secondary flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm">Imagem / Mockup do Produto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
