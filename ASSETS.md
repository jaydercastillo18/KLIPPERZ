# Assets de demostración

Creación: 03/10/2026, herramienta Imagegen de OpenAI. Fotografía editorial en blanco y negro generada para este proyecto, sin extraer fotografías ni logos del negocio. Los modelos y el estudio son ficticios. Ninguna imagen representa trabajos realizados por KLIPPERZ.

Los originales PNG permanecen en el directorio de imágenes generadas de Codex. El proyecto usa copias WebP optimizadas, con un ancho máximo de 1536 px para el hero y 1000 px para las demás. No hay dependencias de URLs remotas para estas imágenes.

| Archivo | Uso | Sustitución recomendada |
|---|---|---|
| `public/images/hero.webp` | Hero y detalle en galería | Corte real autorizado, paisaje 3:2 |
| `public/images/cut-01.webp` | Editorial, después y Barber 01 demo | Retrato vertical autorizado |
| `public/images/cut-02.webp` | Editorial, después y Barber 02 demo | Retrato vertical autorizado |
| `public/images/cut-03.webp` | Editorial, detalle y Barber 03 demo | Retrato vertical autorizado |
| `public/images/crew-04.webp` | Barber 04 demo | Fotografía del profesional autorizado |
| `public/images/before-01.webp` | Antes, par de cut-01 | Mismo cliente, misma posición y encuadre |
| `public/images/before-02.webp` | Antes, par de cut-02 | Mismo cliente, misma posición y encuadre |
| `public/images/studio.webp` | Experiencia, interior ficticio | Fotografía autorizada del local |

No reutilizar los modelos de inspiración como fotografías de empleados reales. Separar fotografías del equipo y del portafolio al incorporar material definitivo. El comparador utiliza dos archivos independientes, reemplazables en `src/data/gallery.ts`.

`src/app/icon.svg` es un monograma provisional construido para la demo, no el logo oficial. Archivo e Inter se sirven mediante `next/font` y sus licencias de Google Fonts; los iconos proceden de Lucide. El mapa embebido usa Google Maps y su atribución nativa.
