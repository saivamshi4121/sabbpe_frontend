import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Metrics } from "@/components/Metrics/Metrics";
import { ValueProposition } from "@/components/ValueProposition/ValueProposition";
import { NetworkLogos } from "@/components/NetworkLogos/NetworkLogos";
import { OEMPartners } from "@/components/OEMPartners/OEMPartners";
import { Mission } from "@/components/Mission/Mission";
import { FinalCTA } from "@/components/FinalCTA/FinalCTA";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <Metrics />
        <ValueProposition />
        <NetworkLogos />
        <OEMPartners />
        <Mission />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
