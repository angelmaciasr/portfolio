import { useState } from 'react'
import '../App.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Lang = 'en' | 'es'

type Project = {
  name: string
  description: string
  links: { label: string; url: string }[]
  tags: string[]
  note?: string
}

type TimelineItem = {
  period: string
  title: string
  text: string
}

const content: Record<
  Lang,
  {
    name: string
    role: string
    hero: string
    myGithub: string
    viewProjects: string
    trayectoriaTitle: string
    formacionTitle: string
    proyectosTitle: string
    contact: string
    trayectoria: TimelineItem[]
    formacion: TimelineItem[]
    projects: Project[]
  }
> = {
  en: {
    name: 'Ángel Macías Rodríguez',
    role: 'Software Engineer',
    hero: "Software Engineering graduate from the University of Oviedo, full of energy and eager to learn. I love taking on new challenges and pushing myself to achieve the best results together with my teammates, working as part of a team in a great atmosphere to reach goals with higher quality.",
    myGithub: 'My GitHub',
    viewProjects: 'View projects',
    trayectoriaTitle: 'Career path',
    formacionTitle: 'Education',
    proyectosTitle: 'Projects',
    contact: 'Contact',
    trayectoria: [
      {
        period: 'Feb 2026 — Present',
        title: 'Software Engineer · Twave',
        text: 'Software development (backend and frontend) related to industrial machine monitoring and vibration analysis.',
      },
      {
        period: 'Sep 2025 — Jan 2026',
        title: 'Internship — Artificial Intelligence · Twave',
        text: 'Implementation and improvement of AI-powered tasks within an application for industrial machine monitoring and vibration analysis.',
      },
      {
        period: 'Nov 2024 — Jan 2025',
        title: 'Internship — Internal Tools Department · Alysis Digital',
        text: 'Design and development of workflows, profile administration, data transfer between technologies and QA development.',
      },
    ],
    formacion: [
      {
        period: '2021 — 2026',
        title: 'BSc in Software Engineering · University of Oviedo',
        text: 'Bilingual programme (advanced English). Final degree project on the automation of periodic tasks using artificial intelligence. Fifth place in the 2025 AI Hackathon on building and training LLMs.',
      },
    ],
    projects: [
      {
        name: 'UNO Game',
        description:
          'The classic UNO card game as an online multiplayer experience. Frontend built with Elm and backend in Go, with real-time communication through NATS and containerized deployment with Docker.',
        links: [
          { label: 'Backend (Go)', url: 'https://github.com/angelmaciasr/Uno_game.git' },
          { label: 'Frontend (Elm)', url: 'https://github.com/angelmaciasr/Uno_game_front.git' },
        ],
        tags: ['Elm', 'Go', 'NATS', 'Docker'],
      },
      {
        name: 'My Clipboard',
        description:
          'An infinite clipboard for Linux: it keeps the full history of everything you copy so you can recover it at any time.',
        links: [{ label: 'GitHub', url: 'https://github.com/angelmaciasr/my-clipboard.git' }],
        tags: ['Linux', 'Tool'],
      },
      {
        name: 'TFG Project',
        description:
          'My final degree project: building an intelligent chatbot for querying web and document information using LLMs and web technologies, with automation of periodic tasks and results visualization.',
        links: [
          { label: 'GitHub', url: 'https://github.com/angelmaciasr/TFG-project.git' },
          { label: 'Slides (PDF)', url: '/presentacion-tfg.pdf' },
          { label: 'Thesis (PDF)', url: '/memoria-tfg.pdf' },
        ],
        tags: ['AI', 'Automation', 'University'],
      },
      {
        name: 'STAP (wiq_en3a)',
        description:
          'A game developed as a team together with several classmates within the Arquisoft project. I contributed as a member of the development team.',
        links: [{ label: 'GitHub', url: 'https://github.com/Arquisoft/wiq_en3a.git' }],
        tags: ['Teamwork', 'Web game'],
        note: 'Collaborative project — contributed as a team member',
      },
    ],
  },
  es: {
    name: 'Ángel Macías Rodríguez',
    role: 'Ingeniero Informático del Software',
    hero: 'Graduado en Ingeniería Informática del Software por la Universidad de Oviedo, con energía y ganas de aprender. Me gusta buscar nuevos retos y esforzarme al máximo para conseguir el mejor resultado junto a mis compañeros, trabajando en equipo y con un buen ambiente para cumplir metas con mayor calidad.',
    myGithub: 'Mi GitHub',
    viewProjects: 'Ver proyectos',
    trayectoriaTitle: 'Trayectoria',
    formacionTitle: 'Formación',
    proyectosTitle: 'Proyectos',
    contact: 'Contacto',
    trayectoria: [
      {
        period: 'Feb 2026 — Actualidad',
        title: 'Ingeniero informático · Twave',
        text: 'Desarrollo de software (backend y frontend) relacionado con el monitoreo de máquinas industriales y el análisis de vibraciones.',
      },
      {
        period: 'Sep 2025 — Ene 2026',
        title: 'Prácticas de empresa — Inteligencia artificial · Twave',
        text: 'Implementación y mejora de tareas mediante IA en el contexto de una aplicación para el monitoreo de máquinas industriales y análisis de vibraciones.',
      },
      {
        period: 'Nov 2024 — Ene 2025',
        title: 'Prácticas de empresa — Departamento de Herramientas Internas · Alysis Digital',
        text: 'Diseño y desarrollo de workflows, administración de perfiles, traspaso de información entre tecnologías y desarrollo QA.',
      },
    ],
    formacion: [
      {
        period: '2021 — 2026',
        title: 'Grado en Ingeniería Informática del Software · Universidad de Oviedo',
        text: 'Itinerario bilingüe (inglés avanzado). TFG dedicado a la automatización de tareas periódicas mediante inteligencia artificial. Quinto puesto en el Hackathon de IA 2025 de construcción y entrenamiento de LLMs.',
      },
    ],
    projects: [
      {
        name: 'UNO Game',
        description:
          'El clásico juego de cartas UNO en versión multijugador online. Frontend desarrollado en Elm y backend en Go, con comunicación en tiempo real a través de NATS y despliegue contenerizado con Docker.',
        links: [
          { label: 'Backend (Go)', url: 'https://github.com/angelmaciasr/Uno_game.git' },
          { label: 'Frontend (Elm)', url: 'https://github.com/angelmaciasr/Uno_game_front.git' },
        ],
        tags: ['Elm', 'Go', 'NATS', 'Docker'],
      },
      {
        name: 'My Clipboard',
        description:
          'Un portapapeles infinito para Linux: guarda el historial completo de todo lo que copias para recuperarlo en cualquier momento.',
        links: [{ label: 'GitHub', url: 'https://github.com/angelmaciasr/my-clipboard.git' }],
        tags: ['Linux', 'Herramienta'],
      },
      {
        name: 'TFG Project',
        description:
          'Mi Trabajo de Fin de Grado: construcción de un chatbot inteligente para consulta de información web y documental mediante LLMs y tecnologías web, con automatización de tareas periódicas y visualización de resultados.',
        links: [
          { label: 'GitHub', url: 'https://github.com/angelmaciasr/TFG-project.git' },
          { label: 'Presentación (PDF)', url: '/presentacion-tfg.pdf' },
          { label: 'Memoria (PDF)', url: '/memoria-tfg.pdf' },
        ],
        tags: ['IA', 'Automatización', 'Universidad'],
      },
      {
        name: 'STAP (wiq_en3a)',
        description:
          'Juego desarrollado en equipo junto a varios compañeros dentro del proyecto Arquisoft. Participé como parte del equipo de desarrollo.',
        links: [{ label: 'GitHub', url: 'https://github.com/Arquisoft/wiq_en3a.git' }],
        tags: ['Trabajo en equipo', 'Juego web'],
        note: 'Proyecto colaborativo — participación como miembro del equipo',
      },
    ],
  },
}

const linkButtonClass =
  'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-500 bg-neutral-800 px-4 h-9 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600 hover:text-white'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const t = content[lang]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Language switcher */}
      <div className="mx-auto flex max-w-4xl justify-end px-6 pt-6">
        <div className="flex overflow-hidden rounded-md border border-neutral-600 text-sm font-medium">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 transition-colors ${
              lang === 'en' ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('es')}
            className={`px-3 py-1.5 transition-colors ${
              lang === 'es' ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            ES
          </button>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-16 text-center sm:flex-row sm:text-left">
        <img
          src="/foto.jpg"
          alt={lang === 'en' ? 'Photo of Ángel Macías' : 'Foto de Ángel Macías'}
          className="h-44 w-44 shrink-0 rounded-full border-4 border-neutral-700 object-cover shadow-xl"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{t.name}</h1>
          <p className="mt-2 text-lg text-sky-400">{t.role}</p>
          <p className="mt-4 max-w-xl text-neutral-300">{t.hero}</p>
          <div className="mt-6 flex justify-center gap-3 sm:justify-start">
            <a
              href="https://github.com/angelmaciasr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-neutral-100 px-4 h-9 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-300"
            >
              {t.myGithub}
            </a>
            <a href="#proyectos" className={linkButtonClass}>
              {t.viewProjects}
            </a>
          </div>
        </div>
      </header>

      {/* Trayectoria */}
      <section id="trayectoria" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-semibold">{t.trayectoriaTitle}</h2>
        <ol className="relative border-l border-neutral-700 pl-8">
          {t.trayectoria.map((item) => (
            <li key={item.title} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-neutral-950 bg-sky-400" />
              <p className="text-sm font-medium uppercase tracking-wide text-sky-400">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-neutral-300">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Formación */}
      <section id="formacion" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-semibold">{t.formacionTitle}</h2>
        <ol className="relative border-l border-neutral-700 pl-8">
          {t.formacion.map((item) => (
            <li key={item.title} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-neutral-950 bg-emerald-400" />
              <p className="text-sm font-medium uppercase tracking-wide text-emerald-400">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-neutral-300">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-semibold">{t.proyectosTitle}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.projects.map((p) => (
            <Card key={p.name} className="flex flex-col border-neutral-800 bg-neutral-900 text-neutral-100">
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription className="text-neutral-400">{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-4">
                {p.note && <p className="text-xs italic text-neutral-500">{p.note}</p>}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-neutral-800 text-neutral-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.url + l.label} href={l.url} target="_blank" rel="noreferrer" className={linkButtonClass}>
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-lg font-semibold">{t.contact}</p>
          <div className="flex flex-col items-center gap-2 text-sm text-neutral-300 sm:flex-row sm:gap-6">
            <a href="mailto:maciasangel926@gmail.com" className="transition-colors hover:text-sky-400">
              maciasangel926@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ángel-macías-7362912b7"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/angelmaciasr"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-sky-400"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Ángel Macías Rodríguez</p>
        </div>
      </footer>
    </div>
  )
}
