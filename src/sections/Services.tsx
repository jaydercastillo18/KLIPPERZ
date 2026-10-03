"use client";
import { useState } from "react";
import { Scissors, Sparkles, Crown, MessageSquare, ScanFace, ArrowUpRight } from "lucide-react";
import { categories, services, serviceSettings } from "@/data/services";
import { content } from "@/data/content";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/format";
const icons = { cut: Scissors, beard: ScanFace, sparkles: Sparkles, crown: Crown, consult: MessageSquare };
export function Services() {
  const [category, setCategory] = useState<string>("Todos");
  const filtered = services.filter(s => category === "Todos" || s.category === category);
  return <section id="servicios" className="section container reveal"><SectionHeading number="01" label="A TU MANERA" title={content.services.title}><p>{content.services.intro}</p><span className="tiny-note">ELIGE. RESERVA. RENUEVA.</span></SectionHeading><div className="service-filters" aria-label="Filtrar servicios">{categories.map(c => <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={category === c ? "active" : ""}>{c}</button>)}</div><div className="service-grid" aria-live="polite">{filtered.map(service => { const Icon = icons[service.icon]; return <article className={`service-card ${service.id === "premium" ? "featured-service" : ""}`} key={service.id}><div className="service-top"><Icon size={25} strokeWidth={1.4}/><span>{service.category}</span></div><h3>{service.name}</h3><p>{service.description}</p><div className="service-bottom"><span>{serviceSettings.showPrices && service.verified && service.price !== undefined ? `${service.priceFrom ? "Desde " : ""}${formatPrice(service.price)}` : "TU ESTILO, TU ELECCIÓN"}{serviceSettings.showDurations && service.verified && service.duration && <small>{service.duration}</small>}</span><a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={`Reservar ${service.name} en Fresha (abre en otra pestaña)`}>Reservar <ArrowUpRight size={17}/></a></div></article>; })}</div><p className="section-footnote">{content.services.note}</p></section>;
}
