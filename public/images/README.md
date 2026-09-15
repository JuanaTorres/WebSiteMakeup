# Carpeta de imágenes personales

Aquí debes colocar las fotos reales de Ana María Taborda para que reemplacen
los espacios de imagen del sitio. Usa exactamente estos nombres de archivo
(formato .jpg o .png, ajusta la extensión en el componente si cambias el
formato):

```
public/images/
├── hero/
│   └── hero.jpg          → Foto principal de portada (retrato vertical u horizontal, buena luz)
├── about/
│   └── perfil.jpg        → Foto de perfil para la sección "Sobre mí"
├── portfolio/
│   ├── 1.jpg              → Trabajo: Novias
│   ├── 2.jpg              → Trabajo: Editorial
│   ├── 3.jpg              → Trabajo: Social
│   ├── 4.jpg              → Trabajo: Grados
│   ├── 5.jpg              → Trabajo: Pieles maduras
│   └── 6.jpg              → Trabajo: Registro en cámara
├── testimonials/          → (opcional) fotos de clientas si se desean agregar
└── logo/
    └── logo.png           → Logotipo o monograma, si se quiere reemplazar el texto "AM"
```

Mientras no agregues las imágenes, esos espacios se verán vacíos o con un
color de fondo neutro (no rompen la compilación del proyecto).

Recomendaciones:
- Usa imágenes horizontales para `hero.jpg` (mínimo 1600px de ancho).
- Usa imágenes verticales (relación 3:4) para `perfil.jpg` y las de `portfolio/`.
- Comprime las fotos antes de subirlas (por ejemplo con squoosh.app) para que
  el sitio cargue rápido.
