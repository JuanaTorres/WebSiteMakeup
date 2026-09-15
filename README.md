# Ana María Taborda — Maquilladora Profesional

Sitio web en React + Vite para Ana María Taborda, maquilladora profesional
certificada en maquillaje de novias por **Caretas**. Diseño inspirado en el
mockup proporcionado, con la paleta de marca (marfil, beige cálido, nude
rosado, taupe, café chocolate y dorado suave).

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y uso

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/       → Cada sección del sitio (Navbar, Hero, About, Services,
│                        Portfolio, Testimonials, Contact, Footer) con su CSS
├── App.jsx            → Ensambla todas las secciones
├── main.jsx           → Punto de entrada de React
└── index.css           → Variables de color, tipografías y estilos base

public/
└── images/            → Carpeta para tus fotos personales (ver
                          public/images/README.md con las instrucciones
                          de nombres de archivo)
```

## Tipografías

- Encabezados: `Cormorant Garamond` (serif elegante)
- Texto general: `Montserrat`

Ambas se cargan desde Google Fonts en `index.html`.
