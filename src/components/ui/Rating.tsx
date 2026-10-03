import { Star } from "lucide-react";
import { business } from "@/data/business";
export function Rating({ large = false }: { large?: boolean }) {
  if (!business.ratingVerified || business.rating === null) return null;
  return <div className={`rating ${large ? "rating-large" : ""}`}><div className="stars" aria-label={`Valoración ${business.rating} de 5 en Fresha`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={large ? 22 : 13} fill="currentColor" aria-hidden="true" />)}</div><div><strong>{business.rating.toFixed(1)}</strong><span>{business.reviewCount ? `${business.reviewCount.toLocaleString("es-PE")} reseñas en Fresha` : "en Fresha"}</span></div></div>;
}
