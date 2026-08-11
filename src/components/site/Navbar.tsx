import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "A clínica", href: "#clinica" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-border/50 bg-background/70 shadow-[0_1px_20px_rgb(0_0_0/0.04)] backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#inicio"
          className={cn(
            "flex items-baseline gap-2 transition-colors duration-500",
            scrolled ? "text-ink" : "text-background",
          )}
        >
          <span className="font-display text-[1.35rem] font-medium leading-none tracking-[-0.01em]">Lumière</span>
          <span
            className={cn(
              "eyebrow hidden text-[0.55rem] sm:block",
              scrolled ? "text-lilac" : "text-background/70",
            )}
          >
            Odontologia
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-[0.82rem] tracking-[0.01em] transition-colors duration-300",
                scrolled
                  ? "text-muted-foreground hover:text-lilac"
                  : "text-background/80 hover:text-background",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className={cn(
              "rounded-lg border px-5 py-2.5 text-[0.8rem] tracking-[0.01em] transition-all duration-400",
              scrolled
                ? "border-lilac/40 bg-lilac-wash text-accent-foreground hover:bg-lilac hover:text-primary-foreground"
                : "glass-light text-background",
            )}
          >
            Agendar consulta
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden transition-colors duration-500",
            scrolled ? "text-ink" : "text-background",
          )}
        >
          <Menu className="size-6" strokeWidth={1} />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-opacity duration-400 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <span className="font-display text-[1.35rem] font-medium tracking-tight text-ink">Lumière</span>
          <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="text-ink">
            <X className="size-6" strokeWidth={1} />
          </button>
        </div>
        <nav className="flex flex-col px-6 pt-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-5 font-display text-xl font-medium tracking-tight text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-8 rounded-lg border border-lilac/40 bg-lilac-wash px-6 py-4 text-center text-[0.85rem] text-accent-foreground"
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
