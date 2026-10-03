# KLIPPERZ — Demo comercial

Concepto web no oficial creado por KALILOGIC TECH. Next.js App Router, React, TypeScript, Tailwind CSS, Lucide, `next/image` y `next/font`. Sin base de datos, autenticación ni sistema de reservas propio.

## Ejecutar

Requiere Node.js 22.13+ (o Node 24) y npm.

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para validar y compilar:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Las versiones se fijan en `package.json` y `package-lock.json`. En CI usar `npm ci`.

## Arquitectura y archivos

`src/app` compone una landing prerenderizada. Las secciones son Server Components excepto los filtros y la galería. Los otros componentes cliente son menú, reveal, banda y comparador. Las reservas son enlaces externos; no hay API, backend ni formularios que capturen datos.

```text
src/
  app/
    globals.css          Sistema visual, responsive y reduced-motion
    layout.tsx           Metadata noindex/nofollow, fuentes Archivo e Inter
    page.tsx             Composición de secciones
    robots.ts            Disallow: /
    icon.svg             Monograma provisional original
  components/
    layout/
      Navbar.tsx         Menú responsive, cierre con Escape y enlaces internos
      MobileCTA.tsx      Reserva persistente y soporte safe-area
      Footer.tsx         Avisos de demostración
    ui/
      BookingLink.tsx    Destino único Fresha y soporte de URL individual
      BeforeAfter.tsx    Comparador accesible con teclado/touch
      Rating.tsx         Valoración condicionada a verificación
      Reveal.tsx         IntersectionObserver y reduced-motion
      SectionHeading.tsx Encabezados editoriales
  sections/
    Hero.tsx
    TrustBar.tsx
    Services.tsx
    Transformations.tsx
    Experience.tsx
    Gallery.tsx
    Team.tsx
    Reviews.tsx
    SocialSection.tsx
    Location.tsx
    FinalCTA.tsx
  data/
    business.ts          Datos empresariales, contactos, fuentes y enlaces
    services.ts          Categorías, servicios y flags de precio/duración
    gallery.ts           Editorial y pares de transformación
    team.ts              Cuatro perfiles ficticios reemplazables
    content.ts           Textos de la propuesta y navegación
  lib/format.ts          Formato de precios PEN
  types/index.ts         Contratos TypeScript de los datos
public/images/           Ocho fotografías conceptuales WebP
scripts/qa.mjs           Pruebas de navegador y accesibilidad
netlify.toml             Build, directorio y cabecera noindex
next.config.ts           Cabecera X-Robots-Tag
eslint.config.mjs        ESLint, TypeScript y React Hooks
postcss.config.mjs       Tailwind CSS
tsconfig.json            TypeScript estricto y alias @/
.env.example             URL pública para Open Graph
package.json
package-lock.json
ASSETS.md                Inventario y procedencia de imágenes
```

`AGENTS.md`, `CLAUDE.md` y `next-env.d.ts` son archivos de soporte generados por Next.js. `.tools/` y `artifacts/` son utilidades locales y evidencias de QA ignoradas por Git; no se despliegan.

## Reservas y configuración

El enlace real ya está colocado en **`src/data/business.ts`, `bookingUrl`**:

https://www.fresha.com/es/a/klipperz-barbershop-lima-avenida-angamos-2268-gijej2dq

Todos los CTA de reserva usan ese valor, incluso los perfiles demo. Si se verifica una URL por profesional, colocar `bookingUrl` en el miembro correspondiente de `src/data/team.ts`. No enlazar un perfil ficticio a un empleado real sin sustituir antes nombre, fotografía y especialidad.

- `instagramUrl: ""` mantiene ocultos todos los enlaces y la sección social. Añadir la URL oficial HTTPS para activarlos.
- `whatsapp: ""` mantiene ocultos todos sus botones. Añadir una URL oficial `https://wa.me/...` verificada para activarlos.
- No se ha deducido WhatsApp a partir del teléfono fijo.
- `ratingVerified: false` o `rating: null` oculta las estrellas y la puntuación.
- `reviewCount` está en `null`: la fuente muestra conteos diferentes en cabecera y reseñas.
- Precios y duraciones están desactivados con `serviceSettings.showPrices` y `showDurations`. Solo se publican valores con `verified: true`.
- Las imágenes, perfiles y descripciones son propuestas de demostración. No hay testimonios ficticios.

## Datos y fuentes

El cliente confirmó el 03/10/2026: URL de Fresha, Av. Angamos Este 2268, Surquillo 15036, Lima, Perú; teléfono +51 1 2730652. Instagram y WhatsApp no están verificados.

El [perfil público de Fresha](https://www.fresha.com/es/a/klipperz-barbershop-lima-avenida-angamos-2268-gijej2dq), consultado el 03/10/2026, mostraba 4.9; lunes a sábado 10:00–21:15 y domingo 11:00–20:15. El contenido indexado puede estar desactualizado: volver a confirmar estos datos antes de presentar la demo. El conteo de reseñas se omite por inconsistencias en la fuente.

Se registraron como referencia interna, sin mostrarlos: corte desde S/45, 45 minutos; corte y Premium Shave desde S/70, 75 minutos. Confirmar los importes y el nombre comercial de cada servicio antes de habilitar precios. El resto de servicios solo tiene categorías compatibles con la oferta pública y texto propuesto. No se replicaron promociones, testimonios, fotografías ni empleados reales.

## Imágenes que deben sustituirse

Todas las de `public/images/` son originales generadas con IA para esta demo; véase `ASSETS.md`. Sustituirlas por fotografías autorizadas antes de presentar los resultados o el equipo como reales. Conservar proporciones similares y alt text descriptivo.

- `hero.webp`: fotografía principal de un corte.
- `cut-01.webp`, `cut-02.webp`, `cut-03.webp`: modelos de inspiración, galería y perfiles ficticios.
- `crew-04.webp`: cuarto perfil ficticio.
- `before-01.webp`, `before-02.webp`: versiones conceptuales previas a grooming; sus pares son `cut-01.webp` y `cut-02.webp`.
- `studio.webp`: interior imaginario, no fotografía del local.

## QA reproducible

Con un servidor ya abierto en otra terminal:

```bash
npx playwright install chromium
npm run test:ui
```

Para probar un servidor diferente, definir `QA_BASE_URL` antes de ejecutar el script. Se comprueban 375, 390, 430, 768, 1024 y 1440 px; desbordamiento horizontal; imágenes; destinos de Fresha; ausencia de redes no verificadas; anclas; filtros; rangos por teclado; modal/Escape/restauración de foco; menú móvil; robots y reglas WCAG A/AA de axe. Guarda JSON y capturas en `artifacts/`. El iframe de Google Maps se excluye del análisis axe, ya que es contenido externo. Las pruebas automáticas no sustituyen una revisión con lector de pantalla o un iPhone físico.

## Desplegar en Netlify

1. Subir este repositorio a GitHub/GitLab/Bitbucket y conectarlo desde **Add new project → Import an existing project** en Netlify.
2. Directorio base: raíz del repositorio. Build: `npm run build`. Publish: `.next`. Node: 22. `netlify.toml` ya contiene estos valores.
3. Netlify detecta Next.js y usa su adaptador OpenNext automáticamente. No añadir un plugin antiguo ni cambiar a `output: export`.
4. Elegir el nombre `klipperz-demo` si está disponible. Este repositorio no reserva el subdominio.
5. Configurar `NEXT_PUBLIC_SITE_URL` con la URL HTTPS real de Netlify y reconstruir para que Open Graph use el dominio correcto.
6. Abrir la URL publicada en móvil, comprobar imágenes, mapa, navegación y redirección a Fresha sin efectuar una reserva de prueba.

Referencia: [Next.js en Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).

No se ha desplegado ni reservado un dominio. No hacen falta secretos o variables de servidor. `next/font` descarga las fuentes durante el build; el entorno de construcción necesita acceso a Google Fonts. El mapa requiere acceso a Google Maps.

## Antes de enviar al cliente

- Mantener visibles “Concepto demostrativo creado por KALILOGIC TECH.” y “Sitio no oficial.”
- Presentarlo expresamente como concepto: las fotos, el local, las transformaciones y los perfiles no son evidencia del negocio real.
- Validar 4.9, horarios, categorías, descripciones y ubicación del pin. No publicar precios hasta reconfirmarlos.
- Confirmar que el texto provisional y el monograma original no se confundan con un logotipo oficial autorizado.
- Verificar la vista previa de WhatsApp después del despliegue. No anunciar `klipperz-demo.netlify.app` como disponible antes de crearlo.
- Mantener `noindex,nofollow`, `robots.txt` y `X-Robots-Tag`. Esto evita indexación, pero no es un control de acceso privado.
- El último paso de reservas, disponibilidad, profesionales y pagos pertenece a Fresha.
