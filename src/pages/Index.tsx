import { Smartphone, Printer, Brain, Home } from "lucide-react";

// ===== IMAGENS SELECIONADAS =====
import seteErros1 from "@/assets/atividades/7 erros -1.jpg";
import seteErros3 from "@/assets/atividades/7 erros-3.jpg";

import desenhoColorir1 from "@/assets/atividades/desenho-colorir-1.jpg";
import desenhoColorir3 from "@/assets/atividades/desenho-colorir-3.jpg";

import encontreObjeto3 from "@/assets/atividades/encontre o objeto-3.jpg";
import encontreObjeto4 from "@/assets/atividades/encontre o objeto-4.jpg";
import encontreObjeto8 from "@/assets/atividades/encontre o objeto-8.jpg";

import jogoDomino1 from "@/assets/atividades/jogo-dominó-1.jpg";
import jogoDomino2 from "@/assets/atividades/jogo-dominó-2.jpg";

import labirinto7 from "@/assets/atividades/labirinto-7.jpg";

import liguePontos1 from "@/assets/atividades/Ligue os pontos-1.jpg";
import liguePontos2 from "@/assets/atividades/Ligue os pontos-2.jpg";

import memoria1 from "@/assets/atividades/memória-1.jpg";
import memoria2 from "@/assets/atividades/memória-2.jpg";
import memoria4 from "@/assets/atividades/memória-4.jpg";

import quebraCabeca0 from "@/assets/atividades/quebra cabeça-0.jpg";
import quebraCabeca9 from "@/assets/atividades/quebra cabeça-9.jpg";
import quebraCabeca11 from "@/assets/atividades/quebra cabeça-11.jpg";

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

const activityPreview = [
  { src: memoria1, title: "Jogo da memória" },
  { src: seteErros1, title: "Jogo dos 7 erros" },
  { src: encontreObjeto4, title: "Encontre o objeto" },
  { src: jogoDomino2, title: "Jogo de dominó" },
  { src: labirinto7, title: "Labirinto" },
  { src: desenhoColorir1, title: "Desenho para colorir" },
  { src: memoria2, title: "Jogo da memória" },
  { src: encontreObjeto3, title: "Encontre o objeto" },
  { src: liguePontos1, title: "Ligue os pontos" },
  { src: quebraCabeca9, title: "Quebra-cabeça" },
  { src: desenhoColorir3, title: "Desenho para colorir" },
  { src: seteErros3, title: "Jogo dos 7 erros" },
  { src: memoria4, title: "Jogo da memória" },
  { src: encontreObjeto8, title: "Encontre o objeto" },
  { src: jogoDomino1, title: "Jogo de dominó" },
  { src: liguePontos2, title: "Ligue os pontos" },
  { src: quebraCabeca0, title: "Quebra-cabeça" },
  { src: quebraCabeca11, title: "Quebra-cabeça" },
];

const loopedPreview = [...activityPreview, ...activityPreview];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-16 md:py-20 overflow-hidden">
      <style>{`
        @keyframes activities-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* TOPO DA SEÇÃO */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
            Menos celular, mais tranquilidade no seu dia a dia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Atividades prontas para entreter, acalmar e ocupar seu filho sem depender de telas.
          </p>
        </div>

        {/* BENEFÍCIOS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 text-center space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>

        {/* PRÉVIA DO PRODUTO */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Veja algumas atividades que você recebe
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Uma prévia do material para você entender a variedade e a qualidade do que vai receber.
            </p>
          </div>

          <div className="relative">
            {/* fade esquerda */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-background to-transparent md:w-20" />
            {/* fade direita */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-background to-transparent md:w-20" />

            <div className="overflow-hidden">
              <div
                className="flex w-max gap-4 py-2"
                style={{
                  animation: "activities-marquee 50s linear infinite",
                }}
              >
                {loopedPreview.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="w-[150px] shrink-0 rounded-2xl border border-border bg-card p-3 shadow-sm"
                  >
                    <div className="overflow-hidden rounded-xl bg-white">
                      <img src={item.src} alt={item.title} className="h-[190px] w-full object-cover" loading="lazy" />
                    </div>
                    <p className="mt-3 text-center text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            E isso é só uma parte do que está incluído no material.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
