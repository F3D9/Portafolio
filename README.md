# Portafolio — Federico Salgado

Portfolio personal desarrollado con React, TypeScript y Vite. Diseño dark con animaciones y formulario de contacto funcional.

## Live

[f3d9.github.io/Portafolio](https://f3d9.github.io/Portafolio)

## Stack

- **React + TypeScript** — frontend
- **Vite** — bundler
- **Tailwind CSS v4** — estilos base
- **Framer Motion** — animaciones
- **React Icons** — iconografía
- **EmailJS** — formulario de contacto sin backend

## Estructura

```
src/
├── assets/          # imágenes
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/
│   └── projects-data.ts   # datos de proyectos
├── App.tsx
└── index.css        # variables CSS globales
```

## Variables de entorno

Creá un archivo `.env` en la raíz con tus credenciales de EmailJS:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJ123456
```

## Correr localmente

```bash
npm install
npm run dev
```

## Deploy

El proyecto se deployea automáticamente a GitHub Pages con GitHub Actions en cada push a `main`.
