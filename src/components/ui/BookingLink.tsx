import { ArrowUpRight } from "lucide-react";
import { business } from "@/data/business";
export function BookingLink({ children = "Reservar cita", className = "", href, label }: { children?: React.ReactNode; className?: string; href?: string; label?: string }) {
  return <a href={href || business.bookingUrl} target="_blank" rel="noopener noreferrer" className={`button button-primary ${className}`} aria-label={label || `${typeof children === "string" ? children : "Reservar"} en Fresha (abre en otra pestaña)`}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
