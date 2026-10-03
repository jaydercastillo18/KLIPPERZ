import type { Service } from "@/types";
export const serviceSettings = { showPrices: false, showDurations: false };
export const categories = ["Todos", "Cabello", "Barba", "Skin care", "Klipperz premium", "Asesoramiento"] as const;
// Descriptive copy is proposed for the demo. Only verified values may be displayed.
export const services: Service[] = [
  { id: "corte", category: "Cabello", name: "Corte de cabello", description: "Forma, textura y un acabado que va contigo.", icon: "cut", price: 45, priceFrom: true, duration: "45 min", verified: true },
  { id: "corte-barba", category: "Klipperz premium", name: "Corte + barba", description: "Un look completo. Cada línea en su lugar.", icon: "beard", price: 70, priceFrom: true, duration: "75 min", verified: true },
  { id: "shave", category: "Barba", name: "Premium shave", description: "Definición y detalle para una barba con carácter.", icon: "beard" },
  { id: "skin", category: "Skin care", name: "Skin care", description: "Dale a tu piel su propio momento de cuidado.", icon: "sparkles" },
  { id: "premium", category: "Klipperz premium", name: "Experiencia premium", description: "Haz de tu próxima visita un ritual de estilo.", icon: "crown" },
  { id: "asesoria", category: "Asesoramiento", name: "Asesoramiento", description: "Encuentra el corte que acompaña tu identidad.", icon: "consult" },
];
