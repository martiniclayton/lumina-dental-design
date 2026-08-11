import { ArrowRight } from "lucide-react";
import p1 from "@/assets/pro-1.jpg";
import p2 from "@/assets/pro-2.jpg";
import p3 from "@/assets/pro-3.jpg";
import { Reveal } from "./Reveal";

const team = [
  {
    img: p1,
    name: "Dra. Helena Vasconcelos",
    role: "Estética e Reabilitação Oral",
    text: "Planejamento estético digital com foco em resultados naturais e duradouros.",
  },
  {
    img: p2,
    name: "Dr. Rafael Monteiro",
    role: "Implantodontia",
    text: "Cirurgias guiadas por tecnologia 3D, com previsibilidade e conforto no pós-operatório.",
  },
  {
    img: p3,
    name: "Dra. Camila Duarte",
    role: "Ortodontia",
    text: "Alinhadores invisíveis e ortodontia contemporânea para cada fase da vida.",
  },
];

export function Team() {
  return (
    <section id="profissionais" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-lilac">Equipe</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
            Especialistas que cuidam de cada detalhe.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 110}
              className="group bg-background p-6 transition-colors duration-500 hover:bg-offwhite md:p-8"
            >
              <div className="overflow-hidden">
                <img
                  src={m.img}
                  alt={`Retrato de ${m.name}`}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-8 eyebrow text-lilac">{m.role}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              <a
                href="#contato"
                className="arrow-move mt-8 inline-flex items-center gap-2 text-[0.78rem] tracking-wide text-ink"
              >
                Ver perfil
                <ArrowRight className="arrow size-3.5 text-lilac" strokeWidth={1.2} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
