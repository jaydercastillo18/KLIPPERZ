export type Service = {
  id: string;
  category: "Cabello" | "Barba" | "Skin care" | "Klipperz premium" | "Asesoramiento";
  name: string;
  description: string;
  duration?: string;
  price?: number;
  priceFrom?: boolean;
  verified?: boolean;
  icon: "cut" | "beard" | "sparkles" | "crown" | "consult";
};
export type GalleryImage = { id: string; src: string; alt: string; title: string; category: string; position?: string };
export type TeamMember = { id: string; name: string; specialty: string; image: string; bookingUrl?: string; demo: boolean };
