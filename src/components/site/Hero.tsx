import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

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
      <div className="absolute inset-0 bg-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-background/70">Odontologia premium</p>
          <h1 className="mt-7 max-w-[22ch] text-[2.1rem] font-medium leading-[1.15] tracking-[-0.03em] text-background sm:text-[2.6rem] md:text-[3.2rem]">
            Seu sorriso, elevado a outro nível.
          </h1>
          <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-background/75">
            Tecnologia, precisão e cuidado em uma experiência pensada para você.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#contato"
              className="arrow-move glass-light inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-[0.8rem] tracking-[0.02em] text-background transition-colors duration-400"
            >
              Agendar consulta
              <ArrowRight className="arrow size-4" strokeWidth={1.4} />
            </a>
            <a
              href="#clinica"
              className="border-b border-background/30 pb-1 text-[0.82rem] tracking-wide text-background/85 transition-colors duration-300 hover:border-background"
            >
              Conheça a clínica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
