import { MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { BookingLink } from "@/components/ui/BookingLink";
export function MobileCTA() { return <div className="mobile-cta"><BookingLink>Reservar cita</BookingLink>{business.whatsapp && <a className="button button-outline" href={business.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp</a>}<span>Tu próximo look está a un clic.</span></div>; }
