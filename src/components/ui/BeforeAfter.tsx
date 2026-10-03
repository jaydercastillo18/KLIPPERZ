"use client";
import Image from "next/image";
import { useId, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
export function BeforeAfter({ before, after, alt, title }: { before: string; after: string; alt: string; title: string }) {
  const [position, setPosition] = useState(50);
  const id = useId();
  return <div className="comparison"><Image src={after} alt={`${alt}: después`} fill sizes="(max-width: 767px) 90vw, 50vw"/><div className="comparison-before" style={{ clipPath: `inset(0 ${100-position}% 0 0)` }}><Image src={before} alt={`${alt}: antes`} fill sizes="(max-width: 767px) 90vw, 50vw"/></div><span className="comparison-label label-before">Antes</span><span className="comparison-label label-after">Después</span><div className="comparison-handle" style={{ left: `${position}%` }} aria-hidden="true"><span><ChevronsLeftRight size={23}/></span></div><label className="sr-only" htmlFor={id}>Comparar antes y después: {title}. Usa las flechas para mover el divisor.</label><input id={id} className="comparison-input" type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-valuetext={`${position}% de la imagen anterior visible`}/><span className="comparison-instruction">DESLIZA PARA DESCUBRIR</span></div>;
}
