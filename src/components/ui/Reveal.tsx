"use client";
import { useEffect } from "react";
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => { el.classList.add("reveal-ready"); observer.observe(el); });
    return () => { observer.disconnect(); document.querySelectorAll(".reveal-ready").forEach(el => el.classList.remove("reveal-ready")); };
  }, []);
  return null;
}
