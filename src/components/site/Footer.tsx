const nav = [
  { label: "Clínica", href: "#clinica" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-offwhite pt-24 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-[1.5rem] font-medium tracking-tight text-ink">Lumière</span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Odontologia contemporânea em São Paulo. Precisão clínica, estética natural e uma
              experiência pensada em cada detalhe.
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
              <li>(11) 4002-8922</li>
              <li>WhatsApp (11) 99000-0000</li>
              <li>contato@lumiere.com.br</li>
              <li>Rua Haddock Lobo, 1420 — Jardins</li>
            </ul>
            <ul className="mt-6 flex gap-5 text-sm">
              <li>
                <a
                  href="#contato"
                  className="text-ink transition-colors duration-300 hover:text-lilac"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-ink transition-colors duration-300 hover:text-lilac"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="eyebrow text-muted-foreground">
            © 2026 Lumière Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
