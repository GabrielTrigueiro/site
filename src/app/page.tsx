export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_55%)]">
      <section className="relative min-h-screen bg-[url('/desk.gif')] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black" />
        <div className="relative">
          <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 pt-8">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[color:var(--accent)]" />
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Ayza
              </p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] sm:flex">
              <a className="transition hover:text-white" href="#sobre">
                Sobre
              </a>
              <a className="transition hover:text-white" href="#projetos">
                Projetos
              </a>
              <a className="transition hover:text-white" href="#contato">
                Contato
              </a>
            </nav>
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/40"
              href="#contato"
            >
              Vamos conversar
            </a>
          </header>

          <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent-2)]" />
                  Disponivel para novos projetos
                </div>
                <div className="space-y-5">
                  <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Design e codigo para uma identidade digital que faz sentido com
                    voce.
                  </h1>
                  <p className="text-lg leading-relaxed text-[color:var(--muted)]">
                    Eu sou Ayza, front-end developer. Crio experiencias web
                    modernas, com foco em performance, branding e uma interface que
                    transmite sua historia.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[#0b0d12] transition hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(139,92,246,0.35)]"
                    href="#projetos"
                  >
                    Ver projetos
                  </a>
                  <a
                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                    href="#contato"
                  >
                    Solicitar orcamento
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Especialidade", value: "UI de alto impacto" },
                    { label: "Base", value: "Sao Paulo, BR" },
                    { label: "Stack", value: "Next.js + Tailwind" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,_rgba(34,211,238,0.16),_rgba(139,92,246,0.12))] p-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                      Manifesto
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                      Sua marca nao precisa parecer com mais uma.
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    Eu trabalho com um processo enxuto: identidade visual,
                    prototipacao rapida e desenvolvimento. Cada projeto nasce com
                    uma narrativa unica.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Imersao na sua historia e objetivos",
                      "Layout responsivo e acessivel",
                      "Entrega rapida e com suporte",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-2)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-[url('/night.gif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75" />
        <main className="relative mx-auto w-full max-w-5xl px-6 pb-24">
          <section id="sobre" className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Sobre
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Uma experiencia digital com personalidade.
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Do design ao deploy, tudo e pensado para comunicar quem voce e,
                gerar confianca e converter. Essa pagina ja e um template pronto
                para personalizar seu dominio.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Identidade visual",
                  description:
                    "Paleta, tipografia e grid alinhados ao seu estilo.",
                },
                {
                  title: "Storytelling",
                  description: "Conteudo direto que destaca seu diferencial.",
                },
                {
                  title: "Performance",
                  description: "SEO e tempos de carregamento otimizados.",
                },
                {
                  title: "Manutencao",
                  description:
                    "Estrutura simples para voce atualizar quando quiser.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[color:var(--surface)] p-5"
                >
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="projetos" className="mt-20">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Projetos
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Selecionados recentes
                </h2>
              </div>
              <a
                className="text-sm font-semibold text-[color:var(--accent-2)]"
                href="#contato"
              >
                Quero o meu →
              </a>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Landing premium",
                  description:
                    "Pagina unica com foco em conversao e identidade marcante.",
                  tag: "Branding",
                },
                {
                  title: "Portfolio modular",
                  description:
                    "Estrutura leve para projetos, bio e formulario direto.",
                  tag: "Portfolio",
                },
                {
                  title: "Site boutique",
                  description:
                    "Experiencia refinada para negocios criativos e autorais.",
                  tag: "Negocios",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-6 transition hover:-translate-y-1 hover:border-white/25"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {item.tag}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contato"
            className="mt-20 rounded-3xl border border-white/10 bg-[linear-gradient(160deg,_rgba(139,92,246,0.18),_rgba(21,25,35,0.9))] p-10 text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              Vamos construir seu site?
            </h2>
            <p className="mt-4 text-base text-[color:var(--muted)]">
              Me conte sobre seu projeto e eu retorno com uma proposta em ate 48h.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0d12] transition hover:translate-y-[-2px]"
                href="mailto:hello@ayza.me"
              >
                hello@ayza.me
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
