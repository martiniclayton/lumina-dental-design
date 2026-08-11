import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-lilac-wash py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-16 size-72 border border-lilac-soft/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-[-6rem] size-96 border border-lilac-soft/50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-lilac-soft/60 md:block"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-lilac">Agendamento</p>
          <h2 className="mx-auto mt-8 max-w-[24ch] text-[2rem] font-medium leading-[1.12] tracking-tight md:text-[2.9rem]">
            Vamos conversar sobre o seu sorriso?
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Nossa equipe está pronta para entender sua necessidade e indicar o tratamento mais
            adequado para você.
          </p>
          <a
            href="#contato"
            className="arrow-move mt-12 inline-flex items-center gap-3 rounded-lg bg-ink px-8 py-3.5 text-[0.85rem] tracking-[0.01em] text-primary-foreground transition-colors duration-400 hover:bg-primary"
          >
            Agendar minha avaliação
            <ArrowRight className="arrow size-4" strokeWidth={1.2} />
          </a>
          <p className="eyebrow mt-8 text-muted-foreground">
            Ou ligue para (11) 9 1747-0620 — Seg–Sex: 09h–18h · Sáb: 09h–13h
          </p>
        </Reveal>
      </div>
    </section>
  );
}
