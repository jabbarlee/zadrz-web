import { Hero } from "@/src/components/hero";
import { LiveStats } from "@/src/components/live-stats";
import { WhatIDo } from "@/src/components/what-i-do";
import { CaseStudy } from "@/src/components/case-study";
import { AICofounderCTA } from "@/src/components/ai-cofounder-cta";
import { SiteFooter } from "@/src/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveStats />
      <WhatIDo />
      <CaseStudy />
      <AICofounderCTA />
      <SiteFooter />
    </main>
  );
}
