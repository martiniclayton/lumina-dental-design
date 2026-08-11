import { Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    title: "18 anos de excelência",
    text: "Uma trajetória construída com dedicação, confiança e milhares de sorrisos transformados.",
  },
  {
    n: "02",
    title: "Naturalidade em cada tratamento",
    text: "Cada tratamento é planejado para valorizar seu sorriso e respeitar suas características, com resultados naturais e duradouros.",
  },
  {
    n: "03",
    title: "Atendimento humanizado",
    text: "Você será acolhido com atenção, transparência e um plano de tratamento pensado para as suas necessidades.",
  },
];

export function Special() {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow text-lilac">Por que nos escolher</p>
            <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
              O que nos torna especiais
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:pt-16" delay={80}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mais do que tratar sorrisos, cuidamos de pessoas.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid border-t border-border md:mt-28 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal
              key={it.n}
              delay={i * 110}
              className="group relative border-b border-border px-0 py-12 transition-colors duration-500 md:border-b-0 md:border-r md:px-10 md:py-14 md:first:pl-0 md:last:border-r-0"
            >
              <div className="absolute top-12 right-0 h-px w-0 bg-lilac transition-all duration-700 group-hover:w-10 md:right-10" />
              <span className="font-display text-[1.7rem] font-medium leading-none text-lilac-soft transition-colors duration-500 group-hover:text-lilac">
                {it.n}
              </span>
              <h3 className="mt-10 text-xl font-medium tracking-tight">{it.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {it.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
