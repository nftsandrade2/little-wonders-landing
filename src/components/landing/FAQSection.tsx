import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como recebo o produto?", a: "Você recebe acesso imediato por e-mail após a confirmação do pagamento." },
  { q: "Para qual faixa etária é indicado?", a: "O produto é indicado para crianças de X a Y anos." },
  { q: "Posso imprimir as atividades?", a: "Sim! Todos os materiais estão em formato PDF prontos para impressão." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar. Se não gostar, devolvemos 100% do valor." },
  { q: "Funciona no celular?", a: "Sim, você pode acessar e baixar os materiais pelo celular ou computador." },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
