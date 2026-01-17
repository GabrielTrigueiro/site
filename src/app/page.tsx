"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId = 0;

    const update = () => {
      // Smooth camera drift based on pointer position.
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      hero.style.setProperty("--bg-x", `${currentX * 16}px`);
      hero.style.setProperty("--bg-y", `${currentY * 16}px`);
      hero.style.setProperty("--content-x", `${currentX * 8}px`);
      hero.style.setProperty("--content-y", `${currentY * 8}px`);
      frameId = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x;
      targetY = y;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    frameId = window.requestAnimationFrame(update);
    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_55%)]">
      <section
        ref={heroRef}
        className="hero-camera relative min-h-screen bg-[url('/desk.gif')] bg-cover"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        <div className="hero-camera-content relative">
          <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 pt-8">
            <div className="reveal flex items-center gap-3" data-reveal>
              <span className="h-3 w-3 rounded-full bg-[color:var(--accent)]" />
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Gabriel Trigueiro
              </p>
            </div>
            <nav
              className="reveal hidden items-center gap-6 text-sm text-[color:var(--muted)] sm:flex"
              data-reveal
            >
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
              className="reveal rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/40"
              href="#contato"
              data-reveal
            >
              Vamos conversar
            </a>
          </header>

          <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-8">
                <div
                  className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]"
                  data-reveal
                >
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent-2)]" />
                  Disponivel para novos projetos
                </div>
                <div className="space-y-5">
                  <h1
                    className="reveal text-4xl font-semibold leading-tight text-white sm:text-5xl"
                    data-reveal
                  >
                    Front-end com foco em multiplataforma e experiencias
                    consistentes.
                  </h1>
                  <p
                    className="reveal text-lg leading-relaxed text-[color:var(--muted)]"
                    data-reveal
                  >
                    Sou desenvolvedor front-end com experiencia em Kotlin Jetpack
                    Compose, Flutter, TypeScript, React, Node, Next e Java. Atuo
                    desde 2020 e entrego interfaces claras, performaticas e
                    alinhadas ao negocio.
                  </p>
                </div>
                <div className="reveal flex flex-wrap gap-4" data-reveal>
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
                    Falar comigo
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Especialidade", value: "Front-end multiplataforma" },
                    { label: "Base", value: "Remoto, BR" },
                    { label: "Stack", value: "Kotlin, Flutter, React, Next" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="reveal rounded-2xl border border-white/10 bg-white/5 p-4"
                      data-reveal
                      style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
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

              <div
                className="reveal rounded-3xl border border-white/10 bg-[linear-gradient(135deg,_rgba(34,211,238,0.16),_rgba(139,92,246,0.12))] p-8"
                data-reveal
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                      Perfil
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                      Experiencia em produtos digitais ponta a ponta.
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    Atuei em projetos remotos e tenho experiencia com
                    desenvolvimento Android, iOS e integracoes com Firebase.
                    Busco soluções diretas, com qualidade e consistencia visual.
                  </p>
                  <div className="space-y-3">
                  {[
                      "Projetos remotos desde 2020",
                      "Android e iOS com foco em UX",
                      "Integrações com Firebase",
                  ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white"
                      style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
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
              <p
                className="reveal text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]"
                data-reveal
              >
                Sobre
              </p>
              <h2 className="reveal text-3xl font-semibold text-white" data-reveal>
                Sobre mim
              </h2>
              <p
                className="reveal text-base leading-relaxed text-[color:var(--muted)]"
                data-reveal
              >
                Desenvolvedor front-end com experiencia em Kotlin Jetpack Compose,
                Flutter, TypeScript, React, Node, Next e Java. Programo desde
                2020, atuei em diversos projetos remotos e tenho experiencia com
                desenvolvimento Android e iOS. Veja os projetos em
                <a className="text-white underline decoration-white/40" href="#projetos">
                  {" "}
                  trabalhos selecionados
                </a>
                .
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Experiencia",
                    description: "Front-end multiplataforma com foco em produto.",
                  },
                  {
                    title: "Plataformas",
                    description: "Web, Android e iOS com interfaces consistentes.",
                  },
                  {
                    title: "Stack",
                    description: "Kotlin, Flutter, React, Next, Node e Java.",
                  },
                  {
                    title: "Interesses",
                    description:
                      "Visual novels, JRPGs, animes, bike e paisagens.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="reveal rounded-2xl border border-white/10 bg-[color:var(--surface)] p-5"
                    data-reveal
                    style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
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
              <div
                className="reveal rounded-2xl border border-white/10 bg-[color:var(--surface)] p-5"
                data-reveal
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Tecnologias
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Kotlin", src: "/tech/kotlin.svg" },
                    { label: "Jetpack Compose", src: "/tech/compose.svg" },
                    { label: "Flutter", src: "/tech/flutter.svg" },
                    { label: "TypeScript", src: "/tech/typescript.svg" },
                    { label: "React", src: "/tech/react.svg" },
                    { label: "Next.js", src: "/tech/nextjs.svg" },
                    { label: "Node.js", src: "/tech/nodejs.svg" },
                    { label: "Java", src: "/tech/java.svg" },
                    { label: "Firebase", src: "/tech/firebase.svg" },
                  ].map((tech, index) => (
                    <div
                      key={tech.label}
                      className="reveal flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                      data-reveal
                      style={{ "--reveal-delay": `${index * 40}ms` } as React.CSSProperties}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                        <img
                          alt={tech.label}
                          className="h-4 w-4"
                          src={tech.src}
                        />
                      </div>
                      {tech.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projetos" className="mt-20">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-3">
                <p
                  className="reveal text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]"
                  data-reveal
                >
                  Projetos
                </p>
                <h2 className="reveal text-3xl font-semibold text-white" data-reveal>
                  Trabalhos selecionados
                </h2>
              </div>
              <a
                className="reveal text-sm font-semibold text-[color:var(--accent-2)]"
                href="#contato"
                data-reveal
              >
                Quero o meu →
              </a>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Juntoo",
                  description:
                    "App de linha de credito com experiencia clara e orientada a resultados.",
                  tag: "Fintech",
                  link: "https://apps.apple.com/br/app/junto%24/id1563846408",
                },
                {
                  title: "Guardiao do Consumidor",
                  description:
                    "App para consultar estado de credito com foco em clareza e confianca.",
                  tag: "Creditos",
                  link: "https://apps.apple.com/br/app/guardi%C3%A3o-do-consumidor/id6753079908",
                },
                {
                  title: "LBS",
                  description:
                    "Sistema de compras e estoque online para rede de joalherias.",
                  tag: "E-commerce",
                  link: "#contato",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="reveal rounded-3xl border border-white/10 bg-[color:var(--surface)] p-6 transition hover:-translate-y-1 hover:border-white/25"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                >
                  <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="flex aspect-[4/3] items-center justify-center text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                      Imagem do projeto
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {item.tag}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {item.description}
                  </p>
                  <a
                    className="mt-4 inline-flex text-sm font-semibold text-[color:var(--accent-2)]"
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                  >
                    Ver detalhes →
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contato"
            className="mt-20 rounded-3xl border border-white/10 bg-[linear-gradient(160deg,_rgba(139,92,246,0.18),_rgba(21,25,35,0.9))] p-10 text-center"
          >
            <h2 className="reveal text-3xl font-semibold text-white" data-reveal>
              Vamos conversar?
            </h2>
            <p
              className="reveal mt-4 text-base text-[color:var(--muted)]"
              data-reveal
            >
              Me chame para falar de projetos, parcerias ou novas oportunidades.
            </p>
            <div className="reveal mt-8 flex flex-wrap justify-center gap-4" data-reveal>
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0d12] transition hover:translate-y-[-2px]"
                href="mailto:devgabrieltrigueiro@gmail.com"
              >
                devgabrieltrigueiro@gmail.com
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                href="https://wa.me/5583998778083"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                href="https://www.linkedin.com/in/devgabrieltrigueiro/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                href="https://github.com/GabrielTrigueiro"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
