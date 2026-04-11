import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* TEXTO */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-block bg-accent/30 text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
              📄 Atividades Infantis para Imprimir
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
              90 Atividades para Manter seu Filho Longe do Celular
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Atividades prontas para imprimir que ocupam, acalmam e divertem seu filho por horas — sem precisar de
              telas.
            </p>

            {/* PROVA RÁPIDA */}
            <div className="text-sm text-muted-foreground space-y-1">
              <p>✔ Acesso imediato após a compra</p>
              <p>✔ Imprima e use no mesmo dia</p>
              <p>✔ Ideal para crianças de 3 a 8 anos</p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Button
                variant="cta"
                size="lg"
                className="px-10 py-6 text-lg font-bold transition-all duration-200 hover:scale-[1.03]"
              >
                QUERO AS ATIVIDADES AGORA
              </Button>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroMockup}
              alt="90 Atividades Sem Tela - Mockup do produto"
              className="w-72 md:w-96 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
