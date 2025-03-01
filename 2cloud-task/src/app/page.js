import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LogoMarquee from "@/components/Marquee";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Goals from "@/components/Goals";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="pt-30">
    <Header/>
    <Hero/>
    <LogoMarquee/>
    <Brands/>
    <Categories/>
    <About/>
    <Goals/>
    <Experience/>
    </main>
  );
}
