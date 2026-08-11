import { ArrowUpRight } from "lucide-react";
import detailImg from "@/assets/detail.jpg";
import { Reveal } from "./Reveal";

const treatments = [
  { n: "01", name: "Estética Dental", text: "Harmonia entre forma, cor e proporção do sorriso." },
  { n: "02", name: "Clareamento", text: "Protocolos seguros para um tom natural e uniforme." },
  { n: "03", name: "Facetas", text: "Laminados ultrafinos com planejamento digital prévio." },
  { n: "04", name: "Implantes", text: "Cirurgia guiada, reabilitação precisa e previsível." },
  { n: "05", name: "Ortodontia", text: "Alinhadores transparentes e aparelhos discretos." },
  { n: "06", name: "Reabilitação Oral", text: "Devolvendo função, estética e equilíbrio." },
  { n: "07", name: "Periodontia", text: "Saúde gengival como base de todo tratamento." },
  { n: "08", name: "Odontologia Preventiva", text: "Acompanhamento contínuo e diagnóstico precoce." },
];

export function Treatments() {
  return (
    <section id="tratamentos" className="bg-offwhite py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-lilac">Tratamentos</p>
            <h2 className="mt-6 text-[2.2rem] leading-[1.1] md:text-[3.2rem]">
              Tratamentos pensados para você.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={80}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Do cuidado preventivo à reabilitação completa, cada protocolo é definido a partir de um
              diagnóstico individual.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {treatments.slice(0, 3).map((t, i) => (
            <TreatmentCard key={t.n} {...t} delay={i * 80} />
          ))}

          <Reveal delay={240} className="relative overflow-hidden bg-background">
            <img
              src={detailImg}
              alt="Detalhe arquitetônico claro com linha em lilás"
              width={1200}
              height={900}
              loading="lazy"
              className="size-full min-h-56 object-cover"
            />
            <div className="absolute inset-0 bg-lilac/8" />
            <p className="absolute bottom-6 left-6 max-w-[14ch] font-display text-xl text-ink">
              Diagnóstico digital em cada etapa
            </p>
          </Reveal>

          {treatments.slice(3, 7).map((t, i) => (
            <TreatmentCard key={t.n} {...t} delay={i * 80} />
          ))}

          <TreatmentCard {...treatments[7]!} delay={80} wide />
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
  wide,
}: {
  n: string;
  name: string;
  text: string;
  delay: number;
  wide?: boolean;
}) {
  return (
    <Reveal
      delay={delay}
      className={`group relative bg-background p-8 transition-colors duration-500 hover:bg-lilac-wash md:p-10 ${
        wide ? "sm:col-span-2 lg:col-span-4" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow text-muted-foreground">{n}</span>
        <ArrowUpRight
          className="size-4 text-lilac opacity-0 transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          strokeWidth={1.2}
        />
      </div>
      <h3 className="mt-16 text-[1.55rem] leading-snug">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </Reveal>
  );
}
