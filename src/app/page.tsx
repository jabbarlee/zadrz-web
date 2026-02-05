import { Hero } from "@/src/components/hero";
import { AntiTerminalSection } from "@/src/components/anti-terminal-section";
import { UseCaseGrid } from "@/src/components/use-case-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <AntiTerminalSection />
      <UseCaseGrid />
    </main>
  );
}
