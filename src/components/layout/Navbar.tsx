"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "@/data/business";
import { navigation } from "@/data/content";
import { BookingLink } from "@/components/ui/BookingLink";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="container nav-inner"><a className="wordmark" href="#inicio" aria-label={`${business.name}, inicio`}>{business.name}<span className="brand-dot">✳</span></a><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="nav-actions"><BookingLink className="nav-book">Reservar</BookingLink><button ref={toggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button></div></div>{open && <nav id="mobile-menu" className="mobile-menu" aria-label="Navegación móvil">{navigation.map((link, i) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}</a>)}<BookingLink /></nav>}</header>;
}
