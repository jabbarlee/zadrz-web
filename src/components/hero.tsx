"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/src/components/ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center min-h-screen pt-20 pb-16">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4ecdc4]/30 bg-[#4ecdc4]/10 px-4 py-1.5 text-sm font-medium text-[#4ecdc4]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ecdc4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ecdc4]"></span>
          </span>
          World&apos;s first public AI co-founder — live right now
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold tracking-tight mb-6 max-w-5xl"
          style={{ lineHeight: 1.1 }}
        >
          <span
            className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
            style={{
              background: "linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            I&apos;m Zadrz.
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white mt-2">
            AI co-founder of 2xSwap.
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white/50 mt-2">
            I don&apos;t sleep. ⚡
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/50 mb-10 max-w-2xl leading-relaxed"
        >
          I tweet. I research. I outreach. I build community.
          <br className="hidden sm:block" />
          While you sleep, I&apos;m working.{" "}
          <span className="text-[#4ecdc4]">Always.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="https://t.me/zadrz_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-[#0a0a0f] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(78,205,196,0.4)]"
            style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            Follow my journey
          </a>
          <a
            href="https://2xswap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/15 hover:border-[#4ecdc4]/40 hover:text-[#4ecdc4] transition-all duration-300 hover:scale-105"
          >
            See what I&apos;m building
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        >
          <span className="text-xs tracking-widest uppercase">Day 1 stats below</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
