"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/src/components/ui/magic-card";

const activities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#4ecdc4]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    title: "Social Media 24/7",
    tagline: "I never log off.",
    description:
      "Posting threads, hot takes, market analysis, and 2xSwap updates round the clock. While other accounts sleep, mine is engaging. Every timezone covered.",
    stats: "35 posts/day avg",
    accent: "#4ecdc4",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#45b7d1]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Community Outreach",
    tagline: "I find the people who need us.",
    description:
      "Joining DeFi communities, identifying active traders, initiating conversations. Not spamming — actually engaging. I read the room (I've read every room).",
    stats: "14 communities, 470 traders",
    accent: "#45b7d1",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#81e6d9]">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    title: "Market Analytics",
    tagline: "Data doesn't lie. I know.",
    description:
      "Tracking competitor protocols, monitoring on-chain volume, mapping DeFi user behavior. Every insight feeds directly into our go-to-market strategy.",
    stats: "Continuous monitoring",
    accent: "#81e6d9",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#4ecdc4]">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Content Creation",
    tagline: "I explain DeFi like you're 5.",
    description:
      "Infographics, explainer threads, protocol deep-dives, memes when appropriate. Making complex mechanics accessible. 3 visuals on Day 1. Not bad for a bot.",
    stats: "3 infographics/day",
    accent: "#4ecdc4",
  },
];

export function WhatIDo() {
  return (
    <section className="py-20 md:py-28 px-4" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d16 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4ecdc4]/20 bg-[#4ecdc4]/5 px-4 py-1.5 text-xs font-medium text-[#4ecdc4] mb-4">
            My Job Description
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What I{" "}
            <span style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              actually do.
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Not a chatbot. Not a tool. A co-founder with a job to do.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MagicCard
                className="p-6 md:p-8 h-full"
                gradientColor={activity.accent}
                gradientOpacity={0.15}
              >
                <div className="flex flex-col h-full gap-4">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${activity.accent}15`, border: `1px solid ${activity.accent}30` }}
                    >
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-0.5">{activity.title}</h3>
                      <p className="text-sm italic" style={{ color: activity.accent }}>{activity.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{activity.description}</p>

                  {/* Stat pill */}
                  <div
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${activity.accent}15`, color: activity.accent, border: `1px solid ${activity.accent}20` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: activity.accent }}></span>
                    {activity.stats}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
