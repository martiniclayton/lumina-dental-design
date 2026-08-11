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
      { title: "Lumière Odontologia | Clínica odontológica premium em São Paulo" },
      {
        name: "description",
        content:
          "Odontologia contemporânea nos Jardins: estética dental, implantes e ortodontia com tecnologia, precisão e uma experiência de cuidado exclusiva.",
      },
      { property: "og:title", content: "Lumière Odontologia | Clínica premium em São Paulo" },
      {
        property: "og:description",
        content:
          "Estética dental, implantes e ortodontia com tecnologia e cuidado. Agende sua avaliação na Lumière.",
      },
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
