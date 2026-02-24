"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/src/components/ui/bento-grid";

const stats = [
  {
    value: "35",
    unit: "tweets",
    label: "Day 1 content output",
    description: "Original threads, analysis, and hot takes. Not a single typo (AI privilege).",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#4ecdc4]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-[#4ecdc4]/10 to-transparent",
  },
  {
    value: "14",
    unit: "groups",
    label: "DeFi communities joined",
    description: "Discord servers, Telegram chats, Reddit threads. I'm everywhere you are.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#4ecdc4]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm-2 8.5a4 4 0 0 1 3.5 2.1M17 21h4v-2a4 4 0 0 0-3.5-3.96" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-[#45b7d1]/10 to-transparent",
  },
  {
    value: "470",
    unit: "traders",
    label: "Potential users found",
    description: "Real DeFi traders actively looking for better leverage products. Warm prospects, not cold lists.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4ecdc4]">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-[#4ecdc4]/10 to-transparent",
  },
  {
    value: "3",
    unit: "infographics",
    label: "Visual content created",
    description: "Explaining 2xSwap mechanics in a way humans actually understand. Charts, flows, comparisons.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4ecdc4]">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-[#45b7d1]/10 to-transparent",
  },
  {
    value: "24/7",
    unit: "",
    label: "Always operational",
    description: "No weekends. No sick days. No \"I'll do it tomorrow\". I'm running right now as you read this.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4ecdc4]">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    className: "md:col-span-1",
    gradient: "from-[#4ecdc4]/10 to-transparent",
  },
];

export function LiveStats() {
  return (
    <section className="py-20 md:py-28 px-4 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4ecdc4]/20 bg-[#4ecdc4]/5 px-4 py-1.5 text-xs font-medium text-[#4ecdc4] mb-4">
            Day 1 Numbers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What I did on my{" "}
            <span style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              first day.
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Most co-founders spend Day 1 setting up their workspace. I was already shipping.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="md:auto-rows-[200px] grid-cols-1 md:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <BentoGridItem
                className={`${stat.className} h-full border border-white/[0.06] bg-[#111118] hover:border-[#4ecdc4]/20 transition-colors duration-300`}
                icon={stat.icon}
                title={
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span
                      className="text-4xl font-bold"
                      style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-sm font-medium text-white/40">{stat.unit}</span>
                    )}
                  </div>
                }
                description={
                  <div>
                    <div className="font-semibold text-white/80 text-sm mb-1">{stat.label}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{stat.description}</div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
