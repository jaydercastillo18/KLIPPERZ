// Single source of truth. Empty social URLs intentionally hide their controls.
// Confirmed by the client on 2026-10-03. Rating/hours observed on linked Fresha page.
const bookingUrl = "https://www.fresha.com/es/a/klipperz-barbershop-lima-avenida-angamos-2268-gijej2dq";
const address = {
  street: "Av. Angamos Este 2268",
  district: "Surquillo 15036",
  city: "Lima",
  country: "Perú",
};
const mapQuery = encodeURIComponent(`${address.street}, ${address.district}, ${address.city}, ${address.country}`);
export const business = {
  name: "KLIPPERZ",
  fullName: "KLIPPERZ BARBERSHOP",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  tagline: "Tu estilo. Tu actitud.",
  phone: "+51 1 2730652",
  phoneHref: "tel:+5112730652",
  whatsapp: "",
  instagramUrl: "",
  bookingUrl,
  reviewsUrl: bookingUrl,
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${mapQuery}&output=embed`,
  rating: 4.9 as number | null,
  reviewCount: null as number | null,
  ratingVerified: true,
  openingHours: [
    { days: "Lunes — sábado", hours: "10:00 — 21:15" },
    { days: "Domingo", hours: "11:00 — 20:15" },
  ],
  source: { url: bookingUrl, checkedAt: "2026-10-03", note: "Volver a confirmar valoración y horarios antes de presentar. Fresha muestra conteos de reseñas inconsistentes; reviewCount permanece oculto." },
  demo: {
    creator: "KALILOGIC TECH",
    disclaimer: "Concepto demostrativo creado por KALILOGIC TECH.",
    unofficial: "Sitio no oficial.",
    imageDisclosure: "Imágenes conceptuales generadas con IA. No representan clientes, equipo ni instalaciones reales.",
  },
};
