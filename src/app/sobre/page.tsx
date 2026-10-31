
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers3,
  Workflow,
  Users,
  BookOpen,
  Globe2,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Front-End",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Estado e Dados",
    icon: Layers3,
    skills: [
      "Zustand",
      "TanStack Query",
      "REST APIs",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Engenharia e Ferramentas",
    icon: Workflow,
    skills: [
      "Git & GitHub",
      "Arquitetura Front-End",
      "Component Design",
      "Responsive Design",
      "Vercel",
    ],
  },
] as const;

const STRENGTHS = [
  {
    title: "Comunicação e colaboração",
    description:
      "Experiência profissional em ambientes internacionais, com responsabilidade, autonomia e comunicação entre equipas.",
    icon: Users,
  },
  {
    title: "Aprendizagem contínua",
    description:
      "Estudo constante de engenharia Front-End, arquitetura, performance e boas práticas de desenvolvimento.",
    icon: BookOpen,
  },
  {
    title: "Comunicação internacional",
    description:
      "Inglês de nível B2, utilizado no estudo de documentação técnica e na comunicação em contextos internacionais.",
    icon: Globe2,
  },
] as const;

export default function SobrePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Sobre mim
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mais do que escrever código.
              <span className="mt-2 block text-blue-600">
                Construir soluções.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Sou desenvolvedor Front-End com foco em
              React, TypeScript e Next.js. Gosto de
              transformar problemas em interfaces
              intuitivas, acessíveis e bem estruturadas.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              O meu objetivo é desenvolver aplicações
              que não sejam apenas visualmente
              agradáveis, mas também fáceis de manter,
              testar e evoluir.
            </p>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              A minha trajetória
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experiência, disciplina e uma nova direção.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Antes de iniciar a minha trajetória no
              desenvolvimento de software, construí
              experiência profissional no setor dos
              transportes internacionais, onde desenvolvi
              autonomia, organização, responsabilidade
              e capacidade de adaptação.
            </p>

            <p>
              A transição para a tecnologia surgiu do
              interesse em compreender como as aplicações
              funcionam e como podem resolver problemas
              reais.
            </p>

            <p>
              Hoje, aplico esse compromisso ao
              desenvolvimento Front-End, trabalhando em
              projetos próprios que envolvem gestão de
              dados, formulários, autenticação,
              navegação e interfaces responsivas.
            </p>
          </div>
        </div>
      </section>

      {/* Competências técnicas */}
      <section
        aria-labelledby="skills-title"
        className="px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Competências técnicas
            </p>

            <h2
              id="skills-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Tecnologias que utilizo
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Ferramentas e conceitos que aplico na
              construção de aplicações web modernas.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-colors hover:border-blue-200"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold">
                    {group.title}
                  </h3>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competências profissionais */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            O que trago para uma equipa
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STRENGTHS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm"
                >
                  <Icon
                    size={26}
                    aria-hidden="true"
                    className="mb-5 text-blue-600"
                  />

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl bg-slate-950 px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Queres conhecer o meu trabalho?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explora os projetos onde aplico estas
              tecnologias e decisões de engenharia
              para resolver problemas concretos.
            </p>
          </div>

          <Link
            href="/projetos"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Ver projetos
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
