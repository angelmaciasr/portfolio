# Portfolio de Ángel Macías

Página web personal construida con **React + TypeScript + Vite + Tailwind CSS (shadcn/ui)**, lista para desplegar en Netlify.

## Contenido

- **Hero**: foto y breve descripción personal.
- **Trayectoria**: línea temporal con formación y experiencia.
- **Proyectos**: tarjetas con nombre, descripción, tecnologías y enlaces a GitHub.

## Personalizar

- Sustituye `public/foto.jpg` por tu foto real (mismo nombre de archivo).
- Edita los textos en `src/pages/Home.tsx` (arrays `trayectoria` y `projects`).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build y despliegue en Netlify

```bash
npm run build    # genera dist/
```

Opciones de despliegue:

1. **Desde GitHub**: sube este repo a GitHub y en Netlify elige *Add new site → Import an existing project*. Netlify detectará `netlify.toml` (build: `npm run build`, publish: `dist`).
2. **Manual**: `npx netlify deploy --prod --dir=dist`.
