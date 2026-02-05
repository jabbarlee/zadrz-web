"use client";

import { BentoGrid, BentoGridItem } from "@/src/components/ui/bento-grid";
import { MagicCard } from "@/src/components/ui/magic-card";
import { cn } from "@/src/lib/utils";
import {
  WhatsApp,
  Google,
  XformerlyTwitter,
  LinkedIn,
  Airbnb,
  Stripe,
  Shopify,
  Reddit,
  GitHub,
  Gmail,
} from "@/src/lib/integration-icons";

// Y Combinator logo - simple Y in orange
const YCombinator = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "w-9 h-9 rounded bg-[#FF6600] flex items-center justify-center",
      className
    )}
  >
    <span className="text-white font-bold text-2xl">Y</span>
  </div>
);

export function UseCaseGrid() {
  return (
    <section
      id="use-cases"
      className="relative py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 overflow-hidden bg-background"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground px-2">
            Automate the boring stuff.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            From scraping leads to booking flights. Zadrz navigates the web so
            you don't have to.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
          {/* Card 1: Lead Generation - Large Card (spans 2 columns) */}
          <MagicCard
            className="md:col-span-2 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#0A66C2"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Sales • Growth
              </div>
              <LinkedIn className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 flex-shrink-0" />
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                Lead Generation
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Find CTOs in San Francisco active in the last 24h."
              </p>
              <div className="space-y-2 pt-3 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium truncate">Sarah Chen</span>
                  <span className="text-xs opacity-60 hidden sm:inline">
                    CTO @ TechCorp
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium truncate">Michael Ross</span>
                  <span className="text-xs opacity-60 hidden sm:inline">
                    CTO @ DataFlow
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium truncate">Alex Kim</span>
                  <span className="text-xs opacity-60 hidden sm:inline">
                    CTO @ CloudScale
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-primary font-bold mt-2 flex items-center gap-2">
                  <span>+ 11 more profiles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </MagicCard>

          {/* Card 2: Market Watch - Square Card */}
          <MagicCard
            className="md:col-span-1 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#333333"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Research
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-black flex items-center justify-center">
                  <GitHub className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300" />
                </div>
                <Reddit className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300" />
                <div className="w-7 h-7 sm:w-8 sm:h-8">
                  <YCombinator className="transition-all duration-300" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                Market Watch
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Summarize top 3 trending AI repos."
              </p>
              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                      Report Ready
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      3 repos analyzed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MagicCard>

          {/* Card 3: Travel Scout - Square Card */}
          <MagicCard
            className="md:col-span-1 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between"
            gradientColor="#FF5A5F"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Travel • Personal
                </div>
              </div>
              <Airbnb className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 flex-shrink-0" />
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                Travel Scout
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                "Monitor villas in Bali under $150/night for August."
              </p>
              <div className="pt-3 sm:pt-4 border-t border-border/50">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-2 sm:py-2.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-primary">
                    3 Properties Found
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-2 sm:mt-3">
                  Monitoring active • Updates every 6h
                </div>
              </div>
            </div>
          </MagicCard>

          {/* Card 4: Invoice Extraction - Wide Card (spans 2 columns) */}
          <MagicCard
            className="md:col-span-2 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#EA4335"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Finance • Operations
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <Gmail className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300" />
                <Stripe className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                Invoice Extraction
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Download all PDF invoices from Gmail and add to Sheets."
              </p>
              <div className="space-y-2 pt-3 border-t border-border/50">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
                      Processing complete
                    </span>
                    <div className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 rounded-full px-1.5 sm:px-2 py-0.5">
                      <span className="text-xs font-bold text-green-500 whitespace-nowrap">
                        $12.4K
                      </span>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex-shrink-0">
                    100%
                  </span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 sm:h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary/80 h-full rounded-full w-full transition-all duration-1000 shadow-lg shadow-primary/20" />
                </div>
                <div className="flex items-center justify-between text-xs pt-1 gap-2">
                  <span className="text-primary font-bold truncate">
                    24 invoices • Feb 2026
                  </span>
                  <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-500 text-xs font-semibold rounded-lg transition-colors border border-green-500/20 flex-shrink-0 whitespace-nowrap">
                    Open Sheet
                  </button>
                </div>
              </div>
            </div>
          </MagicCard>

          {/* Card 5: Social Media Monitor - Square Card */}
          <MagicCard
            className="md:col-span-1 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#1DA1F2"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Social • Marketing
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-black flex items-center justify-center">
                  <XformerlyTwitter className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" />
                </div>
                <Reddit className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                Brand Monitor
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Track mentions of 'AI agents' on Twitter and Reddit."
              </p>
              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm sm:text-base font-bold text-blue-500">
                      47
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                      New Mentions
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Last 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MagicCard>

          {/* Card 6: E-commerce Tracker - Square Card */}
          <MagicCard
            className="md:col-span-1 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#96BF48"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                E-commerce
              </div>
              <Shopify className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 flex-shrink-0" />
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                Price Tracker
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Monitor competitor prices and alert on changes."
              </p>
              <div className="pt-3 border-t border-border/50 space-y-2">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-2 sm:px-3 py-1 sm:py-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
                    <span className="text-xs font-bold text-orange-500 whitespace-nowrap">
                      3 Price Drops
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-2 sm:px-3 py-1 sm:py-1.5">
                    <span className="text-xs font-bold text-blue-500 whitespace-nowrap">
                      127 Tracked
                    </span>
                  </div>
                </div>
                <button className="w-full px-3 py-1.5 sm:py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Set Alert Rules
                </button>
              </div>
            </div>
          </MagicCard>

          {/* Card 7: Content Aggregator - Square Card */}
          <MagicCard
            className="md:col-span-1 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#FF4500"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Content • Research
              </div>
              <Reddit className="w-9 h-9 sm:w-10 sm:h-10 transition-all duration-300 flex-shrink-0" />
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                News Digest
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Compile top AI news from Reddit and HackerNews daily."
              </p>
              <div className="pt-3 border-t border-border/50 space-y-2">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="truncate">15 articles collected</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="truncate">Summarized & sent</span>
                  </div>
                </div>
                <button className="w-full px-3 py-1.5 sm:py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-foreground text-xs font-semibold rounded-lg transition-colors border border-border">
                  Read Digest
                </button>
              </div>
            </div>
          </MagicCard>

          {/* Card 8: Meeting Scheduler - Wide Card (spans 2 columns) */}
          <MagicCard
            className="md:col-span-2 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#4285F4"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Productivity • Scheduling
              </div>
              <Google className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 flex-shrink-0" />
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                Smart Scheduler
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Find common availability and book meetings across teams."
              </p>
              <div className="space-y-2 pt-3 border-t border-border/50">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-1.5 sm:p-2">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                      12
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Meetings
                    </div>
                  </div>
                  <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-1.5 sm:p-2">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                      8h
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Saved
                    </div>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-1.5 sm:p-2">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                      100%
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Success
                    </div>
                  </div>
                </div>
                <button className="w-full px-3 py-1.5 sm:py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </MagicCard>

          {/* Card 9: WhatsApp Auto-Responder - Square Card */}
          <MagicCard
            className="md:col-span-1 md:row-span-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden"
            gradientColor="#25D366"
            gradientOpacity={0.15}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Communication • Support
              </div>
              <WhatsApp className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 flex-shrink-0" />
            </div>
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                Auto Responder
              </h3>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                "Answer common questions on WhatsApp Business automatically."
              </p>
              <div className="pt-3 border-t border-border/50 space-y-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Messages handled
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      156
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Avg response time
                    </span>
                    <span className="text-sm font-bold text-green-500">
                      &lt;2s
                    </span>
                  </div>
                </div>
                <button className="w-full px-3 py-1.5 sm:py-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 text-xs font-semibold rounded-lg transition-colors border border-green-500/20">
                  Configure Responses
                </button>
              </div>
            </div>
          </MagicCard>
        </BentoGrid>
      </div>
    </section>
  );
}
