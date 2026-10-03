import { ArrowUpRight } from "lucide-react";
import { content } from "@/data/content";
import { business } from "@/data/business";
import { Rating } from "@/components/ui/Rating";
export function Reviews() { return <section className="section container reveal reviews-section"><div className="reviews-heading"><p className="eyebrow">LA EXPERIENCIA, EN SUS PALABRAS</p><h2>{content.reviews.title}</h2><p>{content.reviews.description}</p></div><div className="reviews-proof"><Rating large/><a className="text-link" href={business.reviewsUrl} target="_blank" rel="noopener noreferrer">Ver reseñas en Fresha <ArrowUpRight size={18}/></a><span className="tiny-note">FUENTE: FRESHA · CONSULTADO EL 03.10.2026</span></div></section>; }
