import Image from "next/image";
import { Camera, ArrowUpRight } from "lucide-react";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { gallery } from "@/data/gallery";
export function SocialSection() {
  if (!business.instagramUrl) return null;
  return <section className="section container social-section"><div className="section-heading"><div><p className="eyebrow"><Camera size={16}/> FUERA DEL ESPEJO</p><h2>{content.social.title}</h2><p>{content.social.description}</p></div><a className="button button-outline" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Seguir en Instagram <ArrowUpRight size={18}/></a></div><div className="social-grid">{gallery.map(item => <div key={item.id}><Image src={item.src} alt={item.alt} fill sizes="25vw"/></div>)}</div></section>;
}
