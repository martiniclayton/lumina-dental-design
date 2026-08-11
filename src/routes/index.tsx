import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Special } from "@/components/site/Special";
import { About } from "@/components/site/About";
import { Team } from "@/components/site/Team";
import { Treatments } from "@/components/site/Treatments";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NC Odontologia | Clínica odontológica em Cidade Dutra, SP" },
      {
        name: "description",
        content:
          "Há 18 anos em São Paulo: harmonização facial, ortodontia, implantes e próteses com atendimento humanizado, tecnologia e resultados naturais.",
      },
      { property: "og:title", content: "NC Odontologia | Naturalidade e confiança na odontologia" },
      {
        property: "og:description",
        content:
          "Tratamentos personalizados com segurança, conforto e resultados naturais. Agende sua avaliação na NC Odontologia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Special />
        <About />
        <Team />
        <Treatments />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
