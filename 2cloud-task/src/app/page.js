import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LogoMarquee from "@/components/Marquee";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="pt-30">
    <Header/>
    <Hero/>
    <LogoMarquee/>
    <Brands/>
    </main>
  );
}
