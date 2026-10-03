import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";
const archivo = Archivo({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#080808" };
export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: `${business.fullName} · Concepto web | ${business.address.city}`,
  description: "Concepto demostrativo no oficial para KLIPPERZ. Explora una propuesta de estilo, cortes y grooming con reservas en Fresha.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
  openGraph: { title: `${business.name} — ${business.tagline}`, description: "Concepto web demostrativo por KALILOGIC TECH. Sitio no oficial.", locale: "es_PE", type: "website", images: [{ url: "/images/hero.webp", width: 1536, height: 1024, alt: "Editorial conceptual de barbería" }] },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className={`${archivo.variable} ${inter.variable}`}><a href="#contenido" className="skip-link">Saltar al contenido</a>{children}</body></html>; }
