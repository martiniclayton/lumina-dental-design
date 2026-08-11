import { ArrowRight, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const info = [
  {
    label: "Endereço",
    value: "Rua Rubem Souto de Araújo, 40 — Cidade Dutra, São Paulo - SP · CEP 04835-080",
  },
  { label: "Referência", value: "Próximo ao Terminal Grajaú" },
  { label: "Telefone / WhatsApp", value: "(11) 9 1747-0620" },
  { label: "E-mail", value: "ncodontologia99@gmail.com" },
  { label: "Horários", value: "Segunda a sexta: 09:00 às 18:00 · Sábado: 09:00 às 13:00" },
];

const fields = [
  { id: "nome", label: "Nome", type: "text" },
  { id: "email", label: "E-mail", type: "email" },
  { id: "telefone", label: "Telefone", type: "tel" },
];

export function Contact() {
  return (
    <section id="contato" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-lilac">Localização</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
            Nossa Localização
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-5">
            <dl className="border-t border-border">
              {info.map((i) => (
                <div key={i.label} className="border-b border-border py-6">
                  <dt className="eyebrow text-muted-foreground">{i.label}</dt>
                  <dd className="mt-2 text-[0.95rem] text-ink">{i.value}</dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-10 border border-border bg-offwhite">
              <div className="flex aspect-[16/10] items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto size-5 text-lilac" strokeWidth={1.2} />
                  <p className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                    Cidade Dutra — São Paulo
                  </p>
                  <p className="eyebrow mt-2 text-muted-foreground">Próximo ao Terminal Grajaú</p>
                </div>
              </div>
              <div aria-hidden className="pointer-events-none absolute inset-6 border border-lilac-soft/50" />
            </div>

            <a
              href="https://maps.google.com/?q=Rua+Rubem+Souto+de+Araújo,+40+-+Cidade+Dutra,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-move mt-8 inline-flex items-center gap-3 border-b border-lilac/60 pb-2 text-[0.78rem] tracking-wide text-ink"
            >
              Como chegar
              <ArrowRight className="arrow size-4 text-lilac" strokeWidth={1.2} />
            </a>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Mensagem enviada. Entraremos em contato em breve.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="space-y-8"
            >
              {fields.map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="eyebrow text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    className="mt-3 w-full border-b border-input bg-transparent px-1 py-4 text-[0.95rem] text-ink outline-none transition-colors duration-300 focus:border-lilac"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="mensagem" className="eyebrow text-muted-foreground">
                  Como podemos ajudar?
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-input bg-transparent px-1 py-4 text-[0.95rem] text-ink outline-none transition-colors duration-300 focus:border-lilac"
                />
              </div>
              <button
                type="submit"
                className="arrow-move inline-flex w-full items-center justify-center gap-3 rounded-lg border border-lilac/40 bg-lilac-wash px-8 py-3.5 text-[0.85rem] tracking-[0.01em] text-accent-foreground transition-colors duration-400 hover:bg-lilac hover:text-primary-foreground sm:w-auto"
              >
                Agendar minha avaliação
                <ArrowRight className="arrow size-4" strokeWidth={1.2} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
