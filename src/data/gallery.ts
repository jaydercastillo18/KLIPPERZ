import type { GalleryImage } from "@/types";
export const gallery: GalleryImage[] = [
  { id: "texture", src: "/images/cut-01.webp", alt: "Retrato conceptual con crop texturizado y degradado bajo", title: "Textured crop", category: "TEXTURE / 01", position: "center 24%" },
  { id: "detail", src: "/images/hero.webp", alt: "Imagen conceptual del detalle de un corte con máquina", title: "El detalle importa", category: "PRECISION / 02", position: "60% center" },
  { id: "beard", src: "/images/cut-02.webp", alt: "Retrato conceptual con cabello peinado hacia atrás y barba definida", title: "Clean & classic", category: "GROOMING / 03", position: "center 22%" },
  { id: "buzz", src: "/images/cut-03.webp", alt: "Retrato conceptual de un buzz cut con degradado", title: "Sharp by design", category: "FADE / 04", position: "center 20%" },
];
export const transformations = [
  { id: "crop", title: "Textura. Forma. Actitud.", subtitle: "Textured crop / low fade", before: "/images/before-01.webp", after: "/images/cut-01.webp", alt: "Modelo ficticio de demostración antes y después de un corte texturizado" },
  { id: "grooming", title: "Un nuevo carácter.", subtitle: "Corte / beard shaping", before: "/images/before-02.webp", after: "/images/cut-02.webp", alt: "Modelo ficticio de demostración antes y después de corte y definición de barba" },
];
