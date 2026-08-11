import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const small = [
  {
    name: "Mariana Alencar",
    initials: "MA",
    text: "Cada detalhe pensado: do agendamento ao acompanhamento pós-tratamento. Nunca me senti tão segura.",
  },
  {
    name: "Rodrigo Camargo",
    initials: "RC",
    text: "Ambiente impecável e uma equipe que explica cada etapa com muita clareza.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-lilac">Depoimentos</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
            Experiências que vão além do sorriso.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <figure className="glass-panel h-full border border-border p-10 shadow-soft md:p-14">
              <Rating count={5} />
              <blockquote className="mt-8 font-display text-[1.3rem] font-normal leading-[1.45] tracking-tight text-ink md:text-[1.6rem]">
                “Eu procurava um tratamento estético que não parecesse artificial. O planejamento foi
                minucioso e o resultado ficou exatamente como imaginei — natural, leve, meu.”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-lilac-wash text-[0.7rem] tracking-[0.12em] text-accent-foreground">
                  LB
                </span>
                <span>
                  <span className="block text-sm text-ink">Luiza Bernardes</span>
                  <span className="eyebrow text-muted-foreground">Facetas e clareamento</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-6 md:col-span-5">
            {small.map((t, i) => (
              <Reveal key={t.name} delay={100 + i * 100}>
                <figure className="h-full border border-border bg-offwhite p-8 transition-colors duration-500 hover:bg-background md:p-10">
                  <Rating count={5} />
                  <blockquote className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-lilac-wash text-[0.65rem] tracking-[0.1em] text-accent-foreground">
                      {t.initials}
                    </span>
                    <span className="text-sm text-ink">{t.name}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Rating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-lilac text-lilac" strokeWidth={0} />
      ))}
    </div>
  );
}
