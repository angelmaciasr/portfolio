import { useState } from 'react'
import '../App.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import en from '@/i18n/en.json'
import es from '@/i18n/es.json'

type Lang = 'en' | 'es'
type Content = typeof en

const translations: Record<Lang, Content> = { en, es }

const linkButtonClass =
  'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-500 bg-neutral-800 px-4 h-9 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600 hover:text-white'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const t = translations[lang]

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
          alt={t.photoAlt}
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
