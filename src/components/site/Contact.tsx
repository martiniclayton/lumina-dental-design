import { ArrowRight, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const info = [
  { label: "Endereço", value: "Rua Haddock Lobo, 1420 — Jardins, São Paulo" },
  { label: "Telefone", value: "(11) 4002-8922" },
  { label: "WhatsApp", value: "Fale conosco" },
  { label: "Horário de atendimento", value: "Segunda a sexta, 09h — 19h" },
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
          <p className="eyebrow text-lilac">Contato</p>
          <h2 className="mt-6 text-[2.2rem] leading-[1.1] md:text-[3.2rem]">
            Estamos esperando por você.
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
                  <p className="mt-4 font-display text-xl text-ink">Jardins — São Paulo</p>
                  <p className="eyebrow mt-2 text-muted-foreground">Estacionamento com valet</p>
                </div>
              </div>
              <div aria-hidden className="pointer-events-none absolute inset-6 border border-lilac-soft/50" />
            </div>

            <a
              href="#contato"
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
                className="arrow-move inline-flex w-full items-center justify-center gap-3 border border-lilac/50 bg-lilac-wash px-9 py-4 text-[0.75rem] tracking-[0.14em] uppercase text-accent-foreground transition-colors duration-400 hover:bg-lilac hover:text-primary-foreground sm:w-auto"
              >
                Enviar mensagem
                <ArrowRight className="arrow size-4" strokeWidth={1.2} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
