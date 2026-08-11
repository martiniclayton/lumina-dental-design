import { ArrowRight, Check } from "lucide-react";
import clinicImg from "@/assets/clinic.jpg";
import { Reveal } from "./Reveal";

const benefits = [
  "Planejamento personalizado para cada paciente.",
  "Equipe especializada e em constante atualização.",
  "Tecnologia que proporciona mais conforto e precisão.",
  "Atendimento acolhedor, transparente e focado em você.",
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
            <p className="eyebrow text-lilac">Sobre a clínica</p>
            <h2 className="mt-6 text-[1.8rem] font-medium leading-[1.18] tracking-tight md:text-[2.4rem]">
              O cuidado começa muito antes do tratamento.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Na NC Odontologia, acreditamos que um bom tratamento começa ouvindo. Cada paciente
                chega até nós com uma história, expectativas e necessidades diferentes. Por isso,
                dedicamos tempo para entender você, esclarecer suas dúvidas e construir um plano de
                tratamento personalizado.
              </p>
              <p>
                Há mais de 18 anos, unimos experiência, tecnologia e um atendimento verdadeiramente
                humanizado para oferecer tratamentos seguros, naturais e realizados com excelência em
                cada detalhe.
              </p>
              <p>
                Nosso compromisso é que você se sinta acolhido, seguro e confiante desde a primeira
                consulta até a conclusão do seu tratamento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-12 grid gap-px border-t border-border">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 border-b border-border py-5">
                  <Check className="mt-0.5 size-4 shrink-0 text-lilac" strokeWidth={1.4} />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <span className="eyebrow rounded-lg bg-lilac-wash px-4 py-2.5 text-accent-foreground">
                18 anos de confiança
              </span>
              <a
                href="#contato"
                className="arrow-move inline-flex items-center gap-3 border-b border-lilac/60 pb-2 text-[0.78rem] tracking-wide text-ink"
              >
                Agendar minha avaliação
                <ArrowRight className="arrow size-4 text-lilac" strokeWidth={1.2} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
