"use client";

import { motion } from "framer-motion";
import { SiteFooter } from "@/src/components/site-footer";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function BotPlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4ecdc4]/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4ecdc4]/30 bg-[#4ecdc4]/10 px-4 py-1.5 text-sm font-medium text-[#4ecdc4]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ecdc4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ecdc4]" />
            </span>
            Investor One-Pager
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            2xSwap Bot Platform
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Leverage infrastructure for algorithmic traders.
            <br />
            <span className="text-[#4ecdc4]">No liquidation. No interest. No funding rate.</span>
          </motion.p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-red-400">The Problem</h2>
            <p className="text-xl text-zinc-300 mb-6 font-medium">Liquidations are the #1 killer of trading bots.</p>
            <div className="grid gap-4">
              {[
                { stat: "$150B+", desc: "liquidated in 2025 — roughly $400–500M every single day" },
                { stat: "Wrong?", desc: "Most liquidated positions were directionally correct — they couldn't survive the wick" },
                { stat: "Bots fail", desc: "Not because the signal was wrong, but because the position got killed before the thesis played out" },
                { stat: "Cascading", desc: "Bots on CEXs face cascading liquidations during volatility — the exact moments they're designed to capitalize on" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <span className="text-red-400 font-bold text-sm uppercase whitespace-nowrap min-w-[80px]">{item.stat}</span>
                  <span className="text-zinc-300">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-zinc-400 italic">
              The result: quant funds and bot operators avoid on-chain leverage entirely, or accept constant capital loss from forced liquidations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#4ecdc4]">The Solution</h2>
            <p className="text-xl text-zinc-300 mb-8 font-medium">2xSwap SDK — leverage without liquidation, built for bots.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🛡️", title: "No liquidation", desc: "Positions survive any drawdown" },
                { icon: "💰", title: "No interest or funding rate", desc: "Zero cost to hold" },
                { icon: "📅", title: "Up to 1-year duration", desc: "Designed for medium-term strategies" },
                { icon: "🤝", title: "Profit-sharing model", desc: "LP co-invests with the trader" },
                { icon: "⬇️", title: "Trader absorbs losses first", desc: "LP capital is protected" },
                { icon: "⚡", title: "Live on Ethereum", desc: "Not a whitepaper — real protocol" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50 hover:border-[#4ecdc4]/30 transition-colors">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 border-t border-zinc-800/50 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">How It Works</h2>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { step: "1", title: "Deposit", desc: "Bot deposits capital → opens leveraged position via SDK" },
                { step: "2", title: "Execute", desc: "Bot executes strategy → holds position without liquidation risk" },
                { step: "3", title: "Settle", desc: "On exit → profits split with LP; losses absorbed by trader first" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4ecdc4]/20 text-[#4ecdc4] font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-sm">
              <p className="text-zinc-500 mb-2">// For bot developers, the integration is three calls:</p>
              <p className="text-[#4ecdc4]">openPosition()<span className="text-zinc-500"> — deposit + leverage</span></p>
              <p className="text-[#4ecdc4]">checkPosition()<span className="text-zinc-500"> — monitor P&L</span></p>
              <p className="text-[#4ecdc4]">closePosition()<span className="text-zinc-500"> — exit + settle</span></p>
              <p className="text-zinc-600 mt-3">No margin calls. No keeper bots. No liquidation engine to race against.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Market Opportunity</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { metric: "Daily automated DeFi volume", value: "$500M+" },
                { metric: "Bot-driven CEX volume", value: "$2B+/day" },
                { metric: "DeFi leverage market (2025)", value: "$15B+ TVL" },
                { metric: "Liquidations in 2025", value: "$150B+" },
                { metric: "Addressable bot operators", value: "10,000+" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
                  <p className="text-sm text-zinc-400 mb-1">{item.metric}</p>
                  <p className="text-2xl font-bold text-[#4ecdc4]">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-zinc-400">
              The intersection of &ldquo;wants leverage&rdquo; and &ldquo;can&apos;t afford liquidation&rdquo; is massive — and currently unserved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-6 border-t border-zinc-800/50 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Revenue Model</h2>
            <div className="grid gap-4 mb-8">
              {[
                { stream: "Protocol fee", desc: "% of each position opened via SDK" },
                { stream: "Volume-based fee share", desc: "Bot operators pay per-trade fee, split with LPs" },
                { stream: "Premium SDK tiers", desc: "Advanced features — priority execution, analytics" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
                  <h3 className="font-semibold text-white mb-1">{item.stream}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl border border-[#4ecdc4]/20 bg-[#4ecdc4]/5">
              <p className="text-[#4ecdc4] font-medium text-center">
                Flywheel: Bot volume → LP yield → LP deposits → deeper liquidity → more bot volume
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Roadmap</h2>
            <div className="flex flex-col gap-4">
              {[
                { phase: "Phase 1", status: "✅ Live", desc: "Ethereum mainnet — manual trading", active: false },
                { phase: "Phase 2", status: "🔜 Next", desc: "Arbitrum expansion — lower gas, broader access", active: false },
                { phase: "Phase 3", status: "📋 Planned", desc: "Bot Platform SDK — programmatic leverage", active: true },
                { phase: "Phase 4", status: "📋 Planned", desc: "Multi-chain + RWA integration", active: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${
                    item.active
                      ? "bg-[#4ecdc4]/10 border-[#4ecdc4]/30"
                      : "bg-zinc-900/70 border-zinc-800/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-zinc-500">{item.phase}</span>
                    <span className="text-sm">{item.status}</span>
                  </div>
                  <p className={`mt-1 font-medium ${item.active ? "text-[#4ecdc4]" : "text-zinc-300"}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 px-6 border-t border-zinc-800/50 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Why Now</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Protocol is live", desc: "Not a whitepaper. Ethereum mainnet, real positions, real settlements." },
                { num: "02", title: "Bot market is underserved", desc: "No on-chain leverage product is designed for programmatic access without liquidation." },
                { num: "03", title: "Losses are accelerating", desc: "$150B in 2025 and growing. The pain point is real and worsening." },
                { num: "04", title: "Infrastructure is maturing", desc: "L2s make bot-driven volume economically viable." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
                  <span className="text-[#4ecdc4] font-mono text-sm">{item.num}</span>
                  <h3 className="font-semibold text-white mt-2 mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Team</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Didar Bekbauov", role: "Founder & CEO", desc: "Strategy, BD, fundraising" },
                { name: "Timur", role: "Lead Developer", desc: "Built and shipped 2xSwap to Ethereum mainnet" },
                { name: "Aibar", role: "Growth Lead", desc: "Points system, ambassador program, go-to-market" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#4ecdc4]/20 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-[#4ecdc4]">
                    {item.name[0]}
                  </div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-[#4ecdc4] text-sm">{item.role}</p>
                  <p className="text-zinc-400 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-zinc-400 mb-8">2xSwap — leverage without liquidation. now for bots. ⚡</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:didar@2xswap.com"
                className="px-8 py-3 rounded-full bg-[#4ecdc4] text-black font-semibold hover:bg-[#45b8b0] transition-colors"
              >
                Contact for Investment
              </a>
              <a
                href="https://2xswap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-300 font-semibold hover:border-[#4ecdc4]/50 hover:text-[#4ecdc4] transition-colors"
              >
                Visit 2xSwap →
              </a>
            </div>
            <div className="mt-8 flex gap-6 justify-center text-sm text-zinc-500">
              <a href="https://x.com/2xswap" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ecdc4] transition-colors">@2xswap</a>
              <a href="https://x.com/zadrz_ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ecdc4] transition-colors">@zadrz_ai</a>
              <a href="https://app.2xswap.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ecdc4] transition-colors">app.2xswap.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
