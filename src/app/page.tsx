import { Hero } from "@/src/components/hero";
import { OmniInputSection } from "@/src/components/omni-input-section";
import { AntiTerminalSection } from "@/src/components/anti-terminal-section";
import { UseCaseGrid } from "@/src/components/use-case-grid";
import { TechValidationSection } from "@/src/components/tech-validation-section";
import { FooterCTA } from "@/src/components/footer-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <OmniInputSection />
      <AntiTerminalSection />
      <UseCaseGrid />
      <TechValidationSection />
      <FooterCTA />
    </main>
  );
}
