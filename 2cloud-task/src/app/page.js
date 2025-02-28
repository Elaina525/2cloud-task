import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LogoMarquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
    <Header/>
    <Hero/>
    <LogoMarquee/>
    </main>
   
  );
}
