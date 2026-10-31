
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Code2,
  Github,
  LayoutDashboard,
  PawPrint,
  type LucideIcon,
} from "lucide-react";

// ==========================================
// TYPES
// ==========================================

type ProjectTheme = "blue" | "violet" | "emerald";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  challenge: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl?: string;
  image?: string;
  theme: ProjectTheme;
  featured?: boolean;
};

// ==========================================
// DATA
// ==========================================

const PROJECTS = [
  {
    id: "freelaflow",
    name: "FreelaFlow",
    category: "Gestão e produtividade",
    description:
      "Dashboard para freelancers acompanharem projetos, finanças e produtividade numa interface centralizada.",
    challenge:
      "Organizar diferentes áreas da atividade profissional numa experiência de gestão clara e intuitiva.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
    ],
    liveUrl: "https://freela-flow-fupc.vercel.app/",
    theme: "blue",
    featured: true,
  },
  {
    id: "mente-viva",
    name: "Mente Viva",
    category: "Bem-estar e desenvolvimento pessoal",
    description:
      "Aplicação interativa inspirada em conceitos de gestão emocional e desenvolvimento pessoal.",
    challenge:
      "Apresentar conteúdos e interações de forma simples, acessível e organizada.",
    technologies: [
      "React",
      "Next.js",
      "React Hook Form",
      "Zod",
    ],
    liveUrl: "https://mente-viva-two.vercel.app/",
    theme: "violet",
  },
  {
    id: "petshop",
    name: "PetShop",
    category: "Gestão de serviços",
    description:
      "Aplicação para gestão de agendamentos e serviços de petshops, com painel administrativo.",
    challenge:
      "Facilitar a organização de serviços e agendamentos através de uma interface de gestão.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
    ],
    liveUrl: "https://pet-dog-two.vercel.app/",
    theme: "emerald",
  },
] satisfies readonly Project[];

// ==========================================
// THEME CONFIGURATION
// ==========================================

const PROJECT_THEMES: Record<
  ProjectTheme,
  {
    background: string;
    foreground: string;
    icon: LucideIcon;
  }
> = {
  blue: {
    background: "bg-blue-100",
    foreground: "text-blue-700",
    icon: LayoutDashboard,
  },
  violet: {
    background: "bg-violet-100",
    foreground: "text-violet-700",
    icon: Brain,
  },
  emerald: {
    background: "bg-emerald-100",
    foreground: "text-emerald-700",
    icon: PawPrint,
  },
};

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Projetos | Portfólio Front-End",
  description:
    "Conhece os meus projetos desenvolvidos com React, Next.js, TypeScript e tecnologias modernas de desenvolvimento Front-End.",
};

// ==========================================
// PROJECT CARD
// ==========================================

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const theme = PROJECT_THEMES[project.theme];
  const Icon = theme.icon;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 motion-reduce:transform-none ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Project Preview */}
      <div
        className={`relative flex min-h-56 items-center justify-center overflow-hidden ${theme.background} ${
          featured ? "lg:min-h-96" : ""
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Captura de ecrã do projeto ${project.name}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
          />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/70 shadow-sm">
              <Icon
                size={38}
                strokeWidth={1.5}
                aria-hidden="true"
                className={theme.foreground}
              />
            </div>

            <span
              className={`text-sm font-semibold ${theme.foreground}`}
            >
              {project.name}
            </span>
          </div>
        )}

        {featured && (
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm">
            Projeto em destaque
          </span>
        )}
      </div>

      {/* Project Information */}
      <div
        className={`flex flex-1 flex-col p-6 sm:p-8 ${
          featured ? "lg:justify-center lg:p-12" : ""
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {project.category}
        </p>

        <h3
          className={`mt-3 font-bold tracking-tight text-slate-950 ${
            featured
              ? "text-3xl sm:text-4xl"
              : "text-2xl"
          }`}
        >
          {project.name}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        {featured && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-900">
              Desafio do projeto
            </h4>

            <p className="mt-2 leading-7 text-slate-600">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Technologies */}
        <ul
          aria-label={`Tecnologias utilizadas em ${project.name}`}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* Project Links */}
        <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir demonstração de ${project.name} numa nova aba`}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-800 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Ver projeto
            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${project.name} no GitHub numa nova aba`}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              <Github size={18} aria-hidden="true" />
              Código-fonte
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ==========================================
// PROJECTS PAGE
// ==========================================

export default function ProjetosPage() {
  const featuredProject = PROJECTS.find(
    (project) => project.featured
  );

  const otherProjects = PROJECTS.filter(
    (project) => !project.featured
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Portfólio / Projetos
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projetos que transformam
              <span className="mt-2 block text-blue-600">
                ideias em soluções.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Uma seleção de aplicações onde exploro
              arquitetura Front-End, gestão de estado,
              interfaces responsivas e integração
              de diferentes tecnologias.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
              <Code2
                size={20}
                aria-hidden="true"
                className="text-blue-600"
              />

              <span>
                {PROJECTS.length} projetos apresentados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section
          aria-labelledby="featured-title"
          className="px-6 pb-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="featured-title"
              className="mb-7 text-xl font-bold tracking-tight sm:text-2xl"
            >
              Em destaque
            </h2>

            <ProjectCard
              project={featuredProject}
              featured
            />
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section
          aria-labelledby="other-projects-title"
          className="bg-slate-50 px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Mais projetos
              </p>

              <h2
                id="other-projects-title"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Outras experiências e soluções
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Aplicações desenvolvidas para explorar
                diferentes problemas, ferramentas
                e experiências de utilização.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl bg-slate-950 px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Tens um projeto em mente?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Estou disponível para conversar sobre
              oportunidades de desenvolvimento
              Front-End e colaboração em projetos.
            </p>
          </div>

          <Link
            href="/contatos"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Entrar em contacto
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
