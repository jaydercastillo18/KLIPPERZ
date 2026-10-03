"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { gallery } from "@/data/gallery";
import type { GalleryImage } from "@/types";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Gallery() {
  const [selected, setSelected] = useState<GalleryImage>(gallery[0]);
  const dialog = useRef<HTMLDialogElement>(null);
  return <section id="trabajos" className="section gallery-section container reveal"><SectionHeading number="04" label="THE LOOKBOOK" title={content.gallery.title}><p>{content.gallery.intro}</p><span className="tiny-note">CUTS WITH CHARACTER.</span></SectionHeading><div className="gallery-grid">{gallery.map((item,i) => <button key={item.id} className={`gallery-item gallery-item-${i}`} onClick={() => { setSelected(item); dialog.current?.showModal(); }} aria-label={`Ampliar ${item.title}, imagen de demostración`}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 600px) 50vw, 30vw" style={{ objectPosition: item.position }}/><div className="gallery-overlay"><span>{item.category}<strong>{item.title}</strong></span><span className="gallery-arrow"><ArrowUpRight size={22}/></span></div></button>)}</div><p className="section-footnote">{content.gallery.note}</p><dialog ref={dialog} className="lightbox" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} aria-label={selected.title}><button className="lightbox-close" autoFocus onClick={() => dialog.current?.close()} aria-label="Cerrar imagen"><X/></button><div className="lightbox-image"><Image src={selected.src} alt={selected.alt} fill sizes="90vw"/></div><p>{selected.title} <span>· Imagen conceptual IA</span></p></dialog></section>;
}
