import { content } from "@/data/content";
import { BookingLink } from "@/components/ui/BookingLink";
export function FinalCTA() { return <section className="final-cta"><div className="container reveal"><p className="eyebrow">GOOD HAIR. BETTER ATTITUDE.</p><h2>{content.final.title}</h2><div className="final-cta-bottom"><p>{content.final.description}</p><BookingLink>Reservar ahora</BookingLink></div><span className="final-asterisk" aria-hidden="true">✳</span></div></section>; }
