import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/sections/Hero";
import { TrustBar } from "@/sections/TrustBar";
import { Services } from "@/sections/Services";
import { Transformations } from "@/sections/Transformations";
import { Experience } from "@/sections/Experience";
import { Gallery } from "@/sections/Gallery";
import { Team } from "@/sections/Team";
import { Reviews } from "@/sections/Reviews";
import { SocialSection } from "@/sections/SocialSection";
import { Location } from "@/sections/Location";
import { FinalCTA } from "@/sections/FinalCTA";
import { business } from "@/data/business";
export default function Home() { return <><Navbar/><main id="contenido"><Hero/><TrustBar/><Services/><Transformations/><Experience/><Gallery/><Team/><Reviews/><SocialSection/><Location/><FinalCTA/><div className="asset-disclosure container">{business.demo.imageDisclosure}</div></main><Footer/><MobileCTA/><Reveal/></>; }
