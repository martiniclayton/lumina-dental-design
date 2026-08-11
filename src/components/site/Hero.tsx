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
      <div className="absolute inset-0 bg-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/20" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-background/75">Odontologia • Estética • Cuidado</p>
            <h1 className="mt-6 max-w-[16ch] text-[3rem] leading-[1.02] text-background sm:text-[4.2rem] md:text-[5.4rem]">
              Seu sorriso, elevado a outro nível.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-3">
            <div className="mb-8 h-px w-16 bg-lilac-soft/70" />
            <p className="max-w-sm text-sm leading-relaxed text-background/80">
              Odontologia contemporânea, tecnologia e cuidado em uma experiência pensada para você.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <a
                href="#contato"
                className="arrow-move glass-panel inline-flex items-center gap-3 px-7 py-4 text-[0.75rem] tracking-[0.14em] uppercase text-ink transition-colors duration-400 hover:bg-background"
              >
                Agendar consulta
                <ArrowRight className="arrow size-4" strokeWidth={1.2} />
              </a>
              <a
                href="#clinica"
                className="border-b border-background/40 pb-1 text-[0.78rem] tracking-wide text-background/85 transition-colors duration-300 hover:border-background"
              >
                Conheça a clínica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
