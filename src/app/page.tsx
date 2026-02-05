import { Hero } from "@/src/components/hero";
import { AntiTerminalSection } from "@/src/components/anti-terminal-section";
import { UseCaseGrid } from "@/src/components/use-case-grid";
import { FooterCTA } from "@/src/components/footer-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <AntiTerminalSection />
      <UseCaseGrid />
      <FooterCTA />
    </main>
  );
}
