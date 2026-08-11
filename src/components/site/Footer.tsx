const nav = [
  { label: "A clínica", href: "#clinica" },
  { label: "Serviços", href: "#tratamentos" },
  { label: "Pacientes", href: "#depoimentos" },
  { label: "Localização", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-offwhite pt-24 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-[1.5rem] font-medium tracking-tight text-ink">
              NC Odontologia
            </span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Naturalidade e confiança na odontologia. CRO-SP 10155.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-lilac">Navegação</p>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-lilac"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-lilac">Contato</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>(11) 9 1747-0620</li>
              <li>ncodontologia99@gmail.com</li>
              <li>Rua Rubem Souto de Araújo, 40 — Cidade Dutra, São Paulo - SP</li>
              <li>CEP 04835-080 · Próximo ao Terminal Grajaú</li>
            </ul>
            <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
              <li>Segunda a sexta: 09:00 às 18:00</li>
              <li>Sábado: 09:00 às 13:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="eyebrow text-muted-foreground">
            © 2008–2026 NC Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
