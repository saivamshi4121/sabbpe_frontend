"use client";

import dynamic from "next/dynamic";
import { IntroVideo } from "@/components/intro/IntroVideo";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Metrics } from "@/components/Metrics/Metrics";
import { ValueProposition } from "@/components/ValueProposition/ValueProposition";
import { NetworkLogos } from "@/components/NetworkLogos/NetworkLogos";
import { Mission } from "@/components/Mission/Mission";
import { WhySabbpeSection } from "@/components/home/WhySabbpeSection";
import { FinalCTA } from "@/components/FinalCTA/FinalCTA";
import { Footer } from "@/components/Footer/Footer";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar").then(mod => ({ default: mod.Navbar })), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary relative overflow-x-hidden">
      <IntroVideo />
      <Navbar />
      <main className="relative z-1 flex-1">
        <HeroSection />
        <Metrics />
        <ValueProposition />
        <NetworkLogos />
        <WhySabbpeSection />
        <Mission />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
