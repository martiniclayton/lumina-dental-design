import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const tags = [
  "18+ anos de experiência",
  "20k+ pacientes atendidos",
  "Naturalidade & confiança na odontologia",
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Recepção de clínica odontológica premium com luz natural e detalhes em lilás"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/15" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="max-w-2xl">
          <div className="hidden flex-wrap items-center gap-x-4 gap-y-2 sm:flex">
            {tags.map((t, i) => (
              <span key={t} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden className="h-3 w-px bg-background/30" />}
                <span className="eyebrow text-background/70">{t}</span>
              </span>
            ))}
          </div>
          <h1 className="mt-7 max-w-[24ch] text-[2.1rem] font-medium leading-[1.15] tracking-[-0.03em] text-background sm:text-[2.6rem] md:text-[3.2rem]">
            Seu sorriso merece um cuidado que respeita quem você é.
          </h1>
          <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-background/75">
            <span className="sm:hidden">
              Atendimento humanizado, tecnologia de ponta e resultados naturais para o seu sorriso.
            </span>
            <span className="hidden sm:inline">
              Unimos experiência, tecnologia e um atendimento verdadeiramente humanizado para oferecer
              tratamentos personalizados com segurança, conforto e resultados naturais.
            </span>
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#contato"
              className="arrow-move glass-light inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-[0.8rem] tracking-[0.02em] text-background transition-colors duration-400"
            >
              Agendar avaliação
              <ArrowRight className="arrow size-4" strokeWidth={1.4} />
            </a>
            <a
              href="#tratamentos"
              className="border-b border-background/30 pb-1 text-[0.82rem] tracking-wide text-background/85 transition-colors duration-300 hover:border-background"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
