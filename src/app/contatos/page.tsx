
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

type Contact = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const CONTACTS: Contact[] = [
  {
    id: "email",
    label: "Email",
    value: "leonelcesar62@gmail.com",
    href: "mailto:leonelcesar62@gmail.com",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Telefone",
    value: "+351 936 071 778",
    href: "tel:+351936071778",
    icon: Phone,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Ver perfil profissional",
    href: "https://www.linkedin.com/in/leonel-c%C3%A9sar-12b456208/",
    icon: Linkedin,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "Explorar repositórios",
    href: "https://github.com/LeonelCesar",
    icon: Github,
    external: true,
  },
];

export default function ContatosPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header da página */}
        <header className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Vamos conversar
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Tens uma ideia?
            <span className="mt-2 block text-blue-600">
              Vamos construir algo.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Estou disponível para conversar sobre
            oportunidades profissionais, colaboração
            em projetos e desenvolvimento de
            aplicações web.
          </p>
        </header>

        {/* Contactos */}
        <section
          aria-labelledby="contact-methods-title"
          className="mt-14"
        >
          <h2
            id="contact-methods-title"
            className="mb-6 text-xl font-semibold text-slate-900"
          >
            Encontra-me aqui
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {CONTACTS.map((contact) => {
              const Icon = contact.icon;

              return (
                <li key={contact.id}>
                  <a
                    href={contact.href}
                    target={
                      contact.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 motion-reduce:transform-none"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon
                        size={24}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-500">
                        {contact.label}
                      </p>

                      <p className="mt-1 break-words font-semibold text-slate-900">
                        {contact.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      aria-hidden="true"
                      className="shrink-0 text-slate-400 transition-colors group-hover:text-blue-600"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA final */}
        <aside className="mt-16 rounded-2xl bg-slate-950 px-8 py-10 text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Vamos trabalhar juntos?
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            Procuro oportunidades onde possa contribuir
            com as minhas competências em React,
            TypeScript e desenvolvimento Front-End,
            enquanto continuo a evoluir como engenheiro.
          </p>

          <a
            href="mailto:leonelcesar62@gmail.com?subject=Oportunidade%20Front-End"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Enviar mensagem
            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </a>
        </aside>
      </div>
    </main>
  );
}

