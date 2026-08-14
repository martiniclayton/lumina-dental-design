import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import heroImg from "@/assets/ortodontia-hero.jpg";
import proImg from "@/assets/pro-1.jpg";
import detailImg from "@/assets/detail.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Footer } from "@/components/site/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/ortodontia")({
  head: () => ({
    meta: [
      { title: "Ortodontia em São Paulo | Aparelhos e Alinhadores — NC Odontologia" },
      {
        name: "description",
        content:
          "Ortodontia com planejamento personalizado na NC Odontologia, Cidade Dutra — SP. Aparelho fixo metálico, estético, removível e alinhadores transparentes.",
      },
      {
        property: "og:title",
        content: "Ortodontia | Muito além de dentes alinhados — NC Odontologia",
      },
      {
        property: "og:description",
        content:
          "Mordida equilibrada, mastigação eficiente e higiene facilitada: tratamento ortodôntico planejado e acompanhado de perto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ortodontia,
});

const nav = [
  { label: "A clínica", href: "/#clinica" },
  { label: "Serviços", href: "/#tratamentos" },
  { label: "Pacientes", href: "/#depoimentos" },
  { label: "Localização", href: "/#contato" },
];

const problems = [
  {
    n: "01",
    name: "Mastigação prejudicada",
    text: "Dentes desalinhados dificultam triturar bem os alimentos, sobrecarregando toda a digestão.",
  },
  {
    n: "02",
    name: "Acúmulo de placa",
    text: "Áreas de difícil acesso favorecem placa bacteriana, cáries e inflamação gengival.",
  },
  {
    n: "03",
    name: "Desgaste dos dentes",
    text: "Contatos irregulares provocam desgaste precoce do esmalte e fraturas ao longo do tempo.",
  },
  {
    n: "04",
    name: "Dores na mordida",
    text: "Mordida desequilibrada gera tensão muscular, dores de cabeça e desconforto na articulação.",
  },
  {
    n: "05",
    name: "Higiene mais difícil",
    text: "Escovação e fio dental deixam de ser eficazes quando os dentes estão apinhados.",
  },
  {
    n: "06",
    name: "Autoestima abalada",
    text: "Muitos pacientes evitam sorrir — e isso pesa na confiança do dia a dia.",
  },
];

const planning = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Avaliação clínica completa, exames e análise da mordida antes de qualquer indicação.",
  },
  {
    n: "02",
    title: "Planejamento",
    text: "Definição do aparelho ideal, das etapas e do tempo estimado para o seu caso.",
  },
  {
    n: "03",
    title: "Acompanhamento",
    text: "Consultas periódicas de ajuste, com evolução monitorada de perto a cada retorno.",
  },
  {
    n: "04",
    title: "Colaboração",
    text: "Orientações claras de higiene e uso — o resultado é construído em conjunto.",
  },
];

const appliances = [
  {
    n: "01",
    tag: "Mais popular",
    name: "Aparelho Fixo Metálico",
    text: "Eficiente e versátil, resolve desde casos simples até correções complexas com excelente custo-benefício.",
  },
  {
    n: "02",
    tag: "Mais discreto",
    name: "Aparelho Fixo Estético",
    text: "Braquetes translúcidos que se aproximam da cor do dente, mantendo a eficiência do fixo com discrição.",
  },
  {
    n: "03",
    tag: "Uso pontual",
    name: "Aparelho Removível",
    text: "Indicado para correções específicas, fases de crescimento e manutenção de resultados já conquistados.",
  },
  {
    n: "04",
    tag: "Máximo conforto",
    name: "Alinhadores Transparentes",
    text: "Placas removíveis e praticamente invisíveis, planejadas digitalmente para conforto e liberdade no dia a dia.",
  },
];

const journey = [
  "Avaliação e diagnóstico do seu caso",
  "Planejamento do tratamento e escolha do aparelho",
  "Instalação com orientações completas",
  "Acompanhamento e ajustes periódicos",
  "Contenção para manter o resultado",
];

const faq = [
  {
    q: "O aparelho dói?",
    a: "Nos primeiros dias após a instalação e depois de alguns ajustes é normal sentir sensibilidade leve. É passageiro, e orientamos exatamente como tornar esse período mais confortável.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "Depende da complexidade do caso, normalmente entre 12 e 30 meses. O tempo estimado é apresentado já no planejamento, com clareza.",
  },
  {
    q: "Adulto pode usar aparelho?",
    a: "Sim. Não existe idade limite para ortodontia — o que importa é a saúde dos dentes e da gengiva. Atendemos muitos pacientes adultos, inclusive com alinhadores transparentes.",
  },
  {
    q: "Vou precisar extrair dentes?",
    a: "Somente quando é realmente necessário para criar espaço e equilibrar a mordida. A decisão nasce do diagnóstico, nunca de um protocolo padrão.",
  },
  {
    q: "O tratamento pode ser parcelado?",
    a: "Sim. Apresentamos as condições de pagamento e o valor das manutenções de forma transparente na avaliação, sem surpresas.",
  },
  {
    q: "Preciso usar contenção depois?",
    a: "Sim. A contenção é a etapa que garante a estabilidade do resultado conquistado e evita que os dentes voltem à posição anterior.",
  },
];

const differentials = [
  "Planejamento personalizado para cada caso",
  "Diagnóstico criterioso antes de indicar",
  "Atendimento próximo e humanizado",
  "Acompanhamento contínuo da evolução",
  "18 anos de experiência clínica",
  "Mais de 20 mil pacientes atendidos",
  "Materiais e aparelhos de alta qualidade",
  "Transparência em prazos e valores",
];

function Ortodontia() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main>
        <HeroSection />
        <Problems />
        <Planning />
        <Appliances />
        <Journey />
        <Results />
        <Faq />
        <Professional />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-baseline gap-2 text-ink">
          <span className="font-display text-[1.35rem] font-medium leading-none tracking-[-0.01em]">
            NC
          </span>
          <span className="eyebrow hidden text-[0.55rem] text-lilac sm:block">Odontologia</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.82rem] tracking-[0.01em] text-muted-foreground transition-colors duration-300 hover:text-lilac"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#agendar"
          className="rounded-lg border border-lilac/40 bg-lilac-wash px-5 py-2.5 text-[0.8rem] tracking-[0.01em] text-accent-foreground transition-all duration-400 hover:bg-lilac hover:text-primary-foreground"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}

function SectionShell({
  children,
  className = "bg-background",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${className} py-24 md:py-32`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">{children}</div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="border-b border-border bg-offwhite">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 pt-20 pb-24 md:grid-cols-12 md:items-center md:px-10 md:pt-24 md:pb-28">
        <div className="md:col-span-6">
          <p className="eyebrow text-lilac">Ortodontia · NC Odontologia</p>
          <h1 className="mt-7 max-w-[22ch] text-[2rem] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.4rem] md:text-[2.9rem]">
            Muito além de dentes alinhados. Um sorriso saudável para toda a vida.
          </h1>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            A ortodontia cuida da saúde bucal como um todo: equilibra a mordida, melhora a
            mastigação, facilita a higiene e protege seus dentes do desgaste. Estética é a
            consequência natural de um tratamento bem planejado.
          </p>
          <div className="mt-10">
            <a
              href="#agendar"
              className="arrow-move inline-flex items-center gap-3 rounded-lg bg-ink px-7 py-3.5 text-[0.8rem] tracking-[0.02em] text-background transition-opacity duration-400 hover:opacity-90"
            >
              Agendar minha avaliação
              <ArrowRight className="arrow size-4" strokeWidth={1.4} />
            </a>
          </div>
          <div className="mt-14 grid max-w-md grid-cols-2 border-t border-border pt-8">
            <div>
              <p className="font-display text-[1.8rem] font-medium leading-none text-ink">18+</p>
              <p className="eyebrow mt-3 text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="border-l border-border pl-8">
              <p className="font-display text-[1.8rem] font-medium leading-none text-ink">20 mil+</p>
              <p className="eyebrow mt-3 text-muted-foreground">Pacientes atendidos</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative overflow-hidden">
            <img
              src={heroImg}
              alt="Paciente sorrindo com dentes alinhados em clínica odontológica clara"
              width={1536}
              height={1920}
              className="aspect-[4/5] w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-lilac/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <SectionShell>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-6">
          <p className="eyebrow text-lilac">Por que tratar</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Por que tratar o seu sorriso?
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Dentes desalinhados vão muito além da aparência — eles afetam função, saúde e conforto no
            dia a dia.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal
            key={p.n}
            delay={i * 70}
            className="group bg-background p-8 transition-colors duration-500 hover:bg-lilac-wash md:p-10"
          >
            <span className="eyebrow text-muted-foreground">{p.n}</span>
            <h3 className="mt-14 text-[1.15rem] font-medium leading-snug tracking-tight">
              {p.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Planning() {
  return (
    <SectionShell className="bg-offwhite">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-lilac">Como funciona o tratamento</p>
        <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
          Planejamento antes de qualquer aparelho
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Cada tratamento ortodôntico é conduzido em etapas bem definidas, com clareza sobre o que
          será feito e por quê.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {planning.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 80}
            className="group bg-background p-8 transition-colors duration-500 hover:bg-lilac-wash md:p-10"
          >
            <span className="eyebrow text-muted-foreground">{s.n}</span>
            <h3 className="mt-12 text-[1.15rem] font-medium tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12" delay={120}>
        <p className="max-w-3xl border-l border-lilac pl-6 text-sm leading-relaxed text-muted-foreground">
          Nenhum aparelho é indicado sem diagnóstico. O plano é sempre individual — e construído com
          a sua colaboração.
        </p>
      </Reveal>
    </SectionShell>
  );
}

function Appliances() {
  return (
    <SectionShell>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-6">
          <p className="eyebrow text-lilac">Tipos de aparelho</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Opções para cada rotina e cada caso
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conheça os aparelhos que oferecemos. Na avaliação, indicamos aquele que realmente faz
            sentido para o seu tratamento.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {appliances.map((a, i) => (
          <Reveal
            key={a.n}
            delay={i * 70}
            className="group bg-background p-8 transition-colors duration-500 hover:bg-lilac-wash md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="eyebrow text-muted-foreground">{a.n}</span>
              <span className="eyebrow rounded-lg border border-lilac/30 px-3 py-1 text-[0.55rem] text-accent-foreground">
                {a.tag}
              </span>
            </div>
            <h3 className="mt-14 text-[1.15rem] font-medium leading-snug tracking-tight">
              {a.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Journey() {
  return (
    <SectionShell className="bg-offwhite">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-lilac">Passo a passo</p>
        <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
          Do primeiro contato ao sorriso novo
        </h2>
      </Reveal>

      <ol className="mt-16 border-t border-border">
        {journey.map((j, i) => (
          <Reveal
            key={j}
            as="li"
            delay={i * 70}
            className="group grid items-baseline gap-4 border-b border-border py-8 md:grid-cols-12 md:py-10"
          >
            <span className="font-display text-[1.6rem] font-medium leading-none text-lilac-soft transition-colors duration-500 group-hover:text-lilac md:col-span-2">
              0{i + 1}
            </span>
            <p className="text-[1.05rem] font-medium tracking-tight text-ink md:col-span-10">{j}</p>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}

function Results() {
  return (
    <SectionShell>
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-lilac">Resultados reais</p>
          <h2 className="mt-6 max-w-[22ch] text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Transformações construídas etapa por etapa
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Cada paciente conta uma história diferente: mordida reequilibrada, mastigação mais
            eficiente, higiene facilitada e a confiança de sorrir sem pensar duas vezes.
          </p>
          <ul className="mt-8 grid gap-3">
            {[
              "Mordida funcional e equilibrada",
              "Dentes alinhados com aparência natural",
              "Resultado mantido com contenção",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-ink">
                <Check className="size-3.5 shrink-0 text-lilac" strokeWidth={1.6} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="md:col-span-7" delay={80}>
          <div className="relative overflow-hidden">
            <img
              src={detailImg}
              alt="Detalhe arquitetônico claro com linha em lilás na clínica NC Odontologia"
              width={1200}
              height={900}
              loading="lazy"
              className="h-72 w-full object-cover md:h-[26rem]"
            />
            <div aria-hidden className="absolute inset-0 bg-lilac/8" />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Faq() {
  return (
    <SectionShell className="bg-offwhite">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-lilac">Dúvidas frequentes</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Perguntas Frequentes
          </h2>
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6" delay={80}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left text-[0.95rem] font-medium tracking-tight text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Professional() {
  return (
    <SectionShell>
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <img
            src={proImg}
            alt="Retrato de profissional da equipe clínica da NC Odontologia"
            width={900}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="eyebrow text-lilac">Quem cuida de você</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Um acompanhamento próximo do início ao fim
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Nossa equipe conduz cada caso ortodôntico com diagnóstico criterioso e planejamento
            individual, explicando cada etapa em linguagem simples — para que você entenda
            exatamente o que está acontecendo com o seu sorriso.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            São 18 anos de experiência clínica e mais de 20 mil pacientes atendidos, sempre com um
            atendimento humanizado e retornos regulares para manter o tratamento no caminho certo.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function FinalCta() {
  return (
    <>
      <SectionShell className="bg-offwhite">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-lilac">Diferenciais</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Por que escolher a NC Odontologia?
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal
              key={d}
              delay={i * 60}
              className="bg-background px-8 py-10 transition-colors duration-500 hover:bg-lilac-wash"
            >
              <span className="eyebrow text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-8 text-[1rem] font-medium leading-snug tracking-tight">{d}</h3>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <section id="agendar" className="relative overflow-hidden bg-lilac-wash py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 size-72 border border-lilac-soft/60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-[-6rem] size-96 border border-lilac-soft/50"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-lilac">Agendamento</p>
            <h2 className="mx-auto mt-8 max-w-[22ch] text-[2rem] font-medium leading-[1.12] tracking-tight md:text-[2.8rem]">
              Vamos alinhar o seu sorriso?
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Agende uma avaliação. Vamos analisar a sua mordida, explicar as opções de aparelho e
              indicar apenas o que realmente faz sentido para você.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://wa.me/5511917470620"
                target="_blank"
                rel="noreferrer"
                className="arrow-move inline-flex items-center gap-3 rounded-lg bg-ink px-7 py-3.5 text-[0.8rem] tracking-[0.02em] text-background transition-opacity duration-400 hover:opacity-90"
              >
                Agendar minha avaliação
                <ArrowRight className="arrow size-4" strokeWidth={1.4} />
              </a>
              <Link
                to="/"
                className="border-b border-border pb-1 text-[0.82rem] tracking-wide text-muted-foreground transition-colors duration-300 hover:border-lilac hover:text-lilac"
              >
                Voltar ao início
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
