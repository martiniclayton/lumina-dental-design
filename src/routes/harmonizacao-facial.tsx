import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import heroImg from "@/assets/harmonizacao-hero.jpg";
import proImg from "@/assets/pro-2.jpg";
import detailImg from "@/assets/detail.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Footer } from "@/components/site/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/harmonizacao-facial")({
  head: () => ({
    meta: [
      { title: "Harmonização Facial em São Paulo | NC Odontologia" },
      {
        name: "description",
        content:
          "Harmonização facial com planejamento individual e resultados naturais na NC Odontologia, Cidade Dutra — SP. Toxina botulínica, preenchimento, rinomodelação e mais.",
      },
      {
        property: "og:title",
        content: "Harmonização Facial | Naturalidade em primeiro lugar — NC Odontologia",
      },
      {
        property: "og:description",
        content:
          "Valorizamos seus traços e respeitamos sua identidade: avaliação individual e resultados naturais em harmonização facial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HarmonizacaoFacial,
});

const steps = [
  {
    n: "01",
    title: "Escuta",
    text: "Entender suas expectativas e o que te fez buscar a avaliação.",
  },
  {
    n: "02",
    title: "Avaliação",
    text: "Analisar sua anatomia facial com atenção técnica e olhar clínico.",
  },
  {
    n: "03",
    title: "Planejamento",
    text: "Definir exatamente o que faz sentido para o seu rosto, e o que não faz.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "Ajustar o cuidado ao longo do caminho, sempre que necessário.",
  },
];

const complaints = [
  "Rugas de expressão",
  "Assimetrias",
  "Perda de volume",
  "Lábios",
  "Contorno facial",
  "Flacidez",
  "Envelhecimento",
];

const solutions = [
  {
    n: "01",
    tag: "Mais popular",
    name: "Toxina Botulínica",
    text: "Suaviza linhas de expressão enquanto preserva a naturalidade do seu rosto.",
  },
  {
    n: "02",
    tag: "Volume e contorno",
    name: "Preenchimento com Ácido Hialurônico",
    text: "Recupera volume perdido e melhora a harmonia facial com equilíbrio.",
  },
  {
    n: "03",
    tag: "Sem cirurgia",
    name: "Rinomodelação",
    text: "Ajusta pequenos detalhes do nariz com sutileza, respeitando a harmonia natural do seu rosto.",
  },
  {
    n: "04",
    tag: "Lifting sem bisturi",
    name: "Fios de PDO",
    text: "Auxiliam na sustentação dos tecidos e estimulam colágeno de forma progressiva.",
  },
  {
    n: "05",
    tag: "Hidratação profunda",
    name: "Microagulhamento com Ativos",
    text: "Devolve viço e luminosidade à pele, com um cuidado leve e contínuo.",
  },
  {
    n: "06",
    tag: "Estimulação de colágeno",
    name: "Bioestimulador de Colágeno",
    text: "Estimula naturalmente a produção de colágeno para melhorar firmeza e qualidade da pele.",
  },
];

const journey = [
  "Conhecemos você",
  "Entendemos suas expectativas",
  "Realizamos uma avaliação completa",
  "Planejamos o tratamento",
  "Executamos apenas aquilo que realmente faz sentido para você",
];

const benefits = [
  "Aparência mais descansada",
  "Expressão mais leve",
  "Valorização da beleza natural",
  "Prevenção do envelhecimento",
  "Equilíbrio facial",
  "Mais autoestima",
  "Mais confiança",
  "Resultados discretos",
];

const faq = [
  {
    q: "Vou ficar com o rosto artificial?",
    a: "Não. Todo o planejamento é feito para preservar seus traços. O objetivo é realçar e equilibrar, nunca transformar — se um procedimento não respeitar a sua naturalidade, ele simplesmente não é indicado.",
  },
  {
    q: "A toxina botulínica deixa a expressão travada?",
    a: "Não, quando bem aplicada. Trabalhamos com doses individualizadas para suavizar as linhas de expressão mantendo os movimentos naturais do seu rosto.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "Depende do procedimento e do seu organismo. Em média, a toxina botulínica dura de 4 a 6 meses, preenchimentos de 9 a 18 meses e bioestimuladores podem ter efeito ainda mais prolongado.",
  },
  {
    q: "Dói?",
    a: "O desconforto é mínimo. Utilizamos anestésicos tópicos e técnicas cuidadosas para garantir conforto durante todo o atendimento.",
  },
  {
    q: "Existe uma idade ideal para começar?",
    a: "Não existe idade certa — existe indicação certa. Alguns pacientes buscam prevenção mais cedo, outros correção de sinais já presentes. A avaliação individual define o momento ideal.",
  },
  {
    q: "Posso fazer apenas a toxina botulínica?",
    a: "Sim. O plano é sempre individual: se apenas um procedimento atende à sua necessidade, é exatamente isso que será indicado.",
  },
  {
    q: "Como sei qual tratamento é o certo para mim?",
    a: "Na avaliação. Escutamos suas expectativas, analisamos sua anatomia facial e apresentamos apenas o que faz sentido para o seu rosto — com clareza sobre o que esperar.",
  },
  {
    q: "Em quanto tempo vejo o resultado?",
    a: "Preenchimentos e rinomodelação mostram resultado imediato; a toxina botulínica se revela entre 3 e 15 dias; bioestimuladores e fios evoluem de forma progressiva ao longo das semanas.",
  },
  {
    q: "Como é a recuperação?",
    a: "Na maioria dos casos você retoma a rotina no mesmo dia. Pequenos inchaços ou hematomas podem ocorrer e regridem rapidamente, seguindo as orientações pós-procedimento.",
  },
];

const testimonials = [
  {
    name: "Carla Coutinho",
    initials: "CC",
    text: "Resultado muito natural e um atendimento atencioso do começo ao fim. Me senti segura em cada etapa.",
  },
  {
    name: "Sara de Freitas Silva",
    initials: "SF",
    text: "Explicaram tudo com muita clareza e indicaram somente o que eu realmente precisava. Amei o resultado.",
  },
  {
    name: "Erika Fagundes",
    initials: "EF",
    text: "Profissionalismo e cuidado impecáveis. Minha expressão ficou mais leve, sem parecer artificial.",
  },
  {
    name: "Raquel De Freitas Silva",
    initials: "RF",
    text: "Ambiente acolhedor e um planejamento muito bem feito. Saí confiante e muito satisfeita.",
  },
];

const differentials = [
  "18 anos de experiência clínica",
  "Mais de 20 mil pacientes atendidos",
  "Avaliação individual obrigatória",
  "Planejamento personalizado para cada rosto",
  "Domínio da anatomia orofacial",
  "Produtos e materiais de alta qualidade",
  "Protocolos rigorosos de segurança",
  "Acompanhamento contínuo do resultado",
];

function HarmonizacaoFacial() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main>
        <HeroSection />
        <Philosophy />
        <Planning />
        <Complaints />
        <Solutions />
        <Journey />
        <Naturalness />
        <Results />
        <Faq />
        <Testimonials />
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
          <p className="eyebrow text-lilac">Harmonização Facial · NC Odontologia</p>
          <h1 className="mt-7 max-w-[22ch] text-[2rem] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[2.4rem] md:text-[2.9rem]">
            Sua beleza continua sendo sua. Apenas mais leve, equilibrada e natural.
          </h1>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Na NC Odontologia, acreditamos que harmonização facial não é mudar quem você é. É
            valorizar seus traços, respeitar sua identidade e proporcionar resultados naturais para
            que você se sinta ainda mais confiante.
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
              alt="Perfil sereno de paciente em luz natural, representando resultados naturais em harmonização facial"
              width={1920}
              height={1280}
              className="aspect-[4/5] w-full object-cover md:aspect-[4/5]"
            />
            <div aria-hidden className="absolute inset-0 bg-lilac/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <SectionShell>
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-lilac">Nossa filosofia</p>
          <h2 className="mt-6 max-w-[20ch] text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Naturalidade sempre será nossa prioridade.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A melhor harmonização é a que ninguém percebe. Cuidamos para preservar seus traços e a
            sua identidade, com resultados naturais e harmônicos.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Nosso objetivo nunca é transformar. É realçar. É suavizar. É devolver equilíbrio. É fazer
            com que você continue sendo você. Apenas na sua melhor versão.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Planning() {
  return (
    <SectionShell className="bg-offwhite">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-lilac">Planejamento individual</p>
        <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
          Nenhum procedimento sem avaliação individual
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Nenhuma indicação é feita por padrão. Cada decisão nasce de um processo bem conduzido, com
          atenção em cada etapa:
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
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
          Por isso, na NC Odontologia, cada plano de harmonização é individual — nunca dois rostos
          recebem o mesmo tratamento.
        </p>
      </Reveal>
    </SectionShell>
  );
}

function Complaints() {
  return (
    <SectionShell>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-6">
          <p className="eyebrow text-lilac">O que tratamos</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            O que podemos tratar?
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Cada rosto tem suas próprias necessidades. Conheça as principais queixas que a
            harmonização facial pode tratar, sempre com planejamento individual.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {complaints.map((c, i) => (
          <Reveal
            key={c}
            delay={i * 60}
            className="group flex items-center justify-between gap-4 bg-background px-8 py-10 transition-colors duration-500 hover:bg-lilac-wash"
          >
            <h3 className="text-[1.05rem] font-medium tracking-tight">{c}</h3>
            <span aria-hidden className="h-px w-6 bg-lilac-soft transition-all duration-500 group-hover:w-10" />
          </Reveal>
        ))}
        <div className="hidden bg-offwhite lg:block" />
      </div>
    </SectionShell>
  );
}

function Solutions() {
  return (
    <SectionShell className="bg-offwhite">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-6">
          <p className="eyebrow text-lilac">Nossas soluções</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Cada solução, pensada para o seu rosto
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conheça as principais soluções da harmonização facial e o que cada uma pode fazer pelo
            seu rosto.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 70}
            className="group bg-background p-8 transition-colors duration-500 hover:bg-lilac-wash md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="eyebrow text-muted-foreground">{s.n}</span>
              <span className="eyebrow rounded-lg border border-lilac/30 px-3 py-1 text-[0.55rem] text-accent-foreground">
                {s.tag}
              </span>
            </div>
            <h3 className="mt-14 text-[1.15rem] font-medium leading-snug tracking-tight">
              {s.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16" delay={120}>
        <a
          href="#agendar"
          className="arrow-move inline-flex items-center gap-3 rounded-lg bg-ink px-7 py-3.5 text-[0.8rem] tracking-[0.02em] text-background transition-opacity duration-400 hover:opacity-90"
        >
          Quero descobrir quais procedimentos são ideais para mim
          <ArrowRight className="arrow size-4" strokeWidth={1.4} />
        </a>
      </Reveal>
    </SectionShell>
  );
}

function Journey() {
  return (
    <SectionShell>
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-lilac">Como funciona</p>
        <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
          Uma jornada tranquila, do primeiro contato ao resultado
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

function Naturalness() {
  return (
    <SectionShell className="bg-offwhite">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="eyebrow text-lilac">Naturalidade em primeiro lugar</p>
          <h2 className="mt-6 max-w-[24ch] text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Mais do que um procedimento: uma nova forma de se sentir
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Dentistas especializados em harmonização facial têm formação profunda em anatomia
            orofacial — o que garante mais segurança, precisão e resultados que respeitam sua
            individualidade.
          </p>
        </Reveal>

        <Reveal className="md:col-span-6" delay={80}>
          <ul className="grid gap-px bg-border sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 bg-background px-6 py-5 text-sm text-ink"
              >
                <Check className="size-3.5 shrink-0 text-lilac" strokeWidth={1.6} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-12" delay={120}>
        <p className="max-w-3xl border-l border-lilac pl-6 text-sm leading-relaxed text-muted-foreground">
          O dentista é o profissional mais habilitado para realizar harmonização facial — com
          domínio total da anatomia da face e dos tecidos ao redor da boca.
        </p>
      </Reveal>
    </SectionShell>
  );
}

function Results() {
  return (
    <SectionShell>
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-lilac">Resultados</p>
          <h2 className="mt-6 max-w-[22ch] text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Resultados que respeitam a sua identidade.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Um bom tratamento não deve transformar o paciente em outra pessoa. Deve valorizar suas
            características, corrigir aquilo que incomoda e manter o sorriso com aparência natural.
          </p>
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

function Testimonials() {
  return (
    <SectionShell>
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-lilac">Depoimentos</p>
        <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
          Resultados reais, histórias reais
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="h-full bg-background p-8 transition-colors duration-500 hover:bg-offwhite md:p-10">
              <div className="flex gap-1" aria-label="5 de 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-3.5 fill-lilac text-lilac" strokeWidth={0} />
                ))}
              </div>
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
    </SectionShell>
  );
}

function Professional() {
  return (
    <SectionShell className="bg-offwhite">
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <img
            src={proImg}
            alt="Retrato do Dr. Ygor, cirurgião-dentista da NC Odontologia"
            width={900}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="eyebrow text-lilac">Quem cuida de você</p>
          <h2 className="mt-6 text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
            Conheça quem vai cuidar do seu tratamento
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            O Dr. Ygor conduz pessoalmente cada avaliação de harmonização facial, unindo domínio da
            anatomia orofacial a um planejamento minucioso. Cada indicação nasce da escuta atenta e
            da análise técnica do seu rosto — nunca de protocolos padronizados.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Seu compromisso é com a naturalidade: procedimentos discretos, doses individualizadas e
            resultados que preservam a sua expressão e a sua identidade.
          </p>
          <ul className="mt-8 grid gap-3">
            {[
              "Especialização em harmonização orofacial",
              "Planejamento individual para cada rosto",
              "Resultados naturais e discretos",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-ink">
                <Check className="size-3.5 shrink-0 text-lilac" strokeWidth={1.6} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function FinalCta() {
  return (
    <>
      <SectionShell>
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
              Vamos conversar sobre o seu rosto?
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Agende uma avaliação. Vamos entender suas expectativas e indicar somente aquilo que
              realmente faz sentido para você.
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
