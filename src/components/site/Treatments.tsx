import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import detailImg from "@/assets/detail.jpg";
import { Reveal } from "./Reveal";

const treatments = [
  {
    n: "01",
    name: "Harmonização Facial",
    href: "/harmonizacao-facial",
    text: "Procedimentos cuidadosamente planejados para realçar sua beleza natural, preservando suas características com segurança e resultados harmônicos.",
  },
  {
    n: "02",
    name: "Ortodontia",
    href: "/ortodontia",
    text: "Conquiste o alinhamento ideal com tratamentos ortodônticos personalizados, discretos e eficazes para o seu perfil.",
  },

  {
    n: "03",
    name: "Dentística",
    text: "Transforme seu sorriso com tratamentos estéticos minimamente invasivos, planejados para resultados naturais e harmoniosos que valorizam quem você é.",
  },
  {
    n: "04",
    name: "Periodontia",
    text: "A saúde do seu sorriso começa nas gengivas. Cuidamos das estruturas de suporte dos seus dentes para mantê-los saudáveis e estáveis.",
  },
  {
    n: "05",
    name: "Implante Dental",
    text: "Recupere a segurança de morder, falar e sorrir com implantes de alta precisão — função e estética como as de um dente natural.",
  },
  {
    n: "06",
    name: "Prótese Dental",
    text: "Devolver a função e a beleza do seu sorriso é possível com soluções protéticas planejadas para as suas necessidades.",
  },
];

export function Treatments() {
  return (
    <section id="tratamentos" className="bg-offwhite py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-lilac">Especialidades</p>
            <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
              Nossos Tratamentos
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={80}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Do preventivo ao estético — cuidado completo para o seu sorriso.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {treatments.slice(0, 3).map((t, i) => (
            <TreatmentCard key={t.n} {...t} delay={i * 80} />
          ))}

          <Reveal
            delay={240}
            className="relative overflow-hidden bg-background sm:col-span-2 lg:col-span-3"
          >
            <img
              src={detailImg}
              alt="Detalhe arquitetônico claro com linha em lilás"
              width={1200}
              height={900}
              loading="lazy"
              className="h-56 w-full object-cover md:h-64"
            />
            <div className="absolute inset-0 bg-lilac/8" />
            <p className="absolute bottom-6 left-6 max-w-[22ch] font-display text-lg font-medium tracking-tight text-ink md:left-10">
              Tecnologia e precisão em cada etapa do seu tratamento
            </p>
          </Reveal>

          {treatments.slice(3).map((t, i) => (
            <TreatmentCard key={t.n} {...t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({
  n,
  name,
  text,
  delay,
  href,
}: {
  n: string;
  name: string;
  text: string;
  delay: number;
  href?: string;
}) {
  return (
    <Reveal
      delay={delay}
      className="group relative bg-background p-8 transition-colors duration-500 hover:bg-lilac-wash md:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow text-muted-foreground">{n}</span>
        <ArrowUpRight
          className="size-4 text-lilac opacity-0 transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          strokeWidth={1.2}
        />
      </div>
      <h3 className="mt-16 text-[1.2rem] font-medium leading-snug tracking-tight">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      {href ? (
        <Link
          to={href}
          className="eyebrow mt-8 inline-block border-b border-lilac/50 pb-1 text-ink transition-colors duration-300 hover:text-lilac"
        >
          Saiba mais
        </Link>
      ) : (
        <a
          href="#contato"
          className="eyebrow mt-8 inline-block border-b border-lilac/50 pb-1 text-ink transition-colors duration-300 hover:text-lilac"
        >
          Saiba mais
        </a>
      )}
    </Reveal>
  );
}
