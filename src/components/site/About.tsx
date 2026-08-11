import { ArrowRight } from "lucide-react";
import clinicImg from "@/assets/clinic.jpg";
import { Reveal } from "./Reveal";

const facts = [
  { title: "Tecnologia", text: "Equipamentos modernos." },
  { title: "Conforto", text: "Ambiente pensado para você." },
  { title: "Precisão", text: "Planejamento individualizado." },
];

export function About() {
  return (
    <section id="clinica" className="bg-offwhite py-28 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <Reveal className="md:col-span-6">
          <div className="relative overflow-hidden">
            <img
              src={clinicImg}
              alt="Dentista conversando com paciente em consultório claro e minimalista"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 border border-background/40" />
          </div>
        </Reveal>

        <div className="md:col-span-5 md:col-start-8 md:pt-10">
          <Reveal>
            <p className="eyebrow text-lilac">A clínica</p>
            <h2 className="mt-6 text-[1.8rem] font-medium leading-[1.18] tracking-tight md:text-[2.4rem]">
              Conheça uma nova forma de cuidar do seu sorriso.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                A Lumière nasceu do encontro entre odontologia de precisão e uma experiência de
                acolhimento. Cada ambiente foi projetado com materiais claros, luz natural e silêncio
                — para que a consulta seja um momento de calma.
              </p>
              <p>
                Trabalhamos com diagnóstico digital, planejamento estético individualizado e um
                acompanhamento próximo em todas as etapas do tratamento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.title} className="border-b border-border py-6 sm:border-b-0 sm:pr-6">
                  <dt className="eyebrow text-ink">{f.title}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{f.text}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#tratamentos"
              className="arrow-move mt-12 inline-flex items-center gap-3 border-b border-lilac/60 pb-2 text-[0.78rem] tracking-wide text-ink"
            >
              Conheça nossa clínica
              <ArrowRight className="arrow size-4 text-lilac" strokeWidth={1.2} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
