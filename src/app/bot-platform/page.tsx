"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function BotPlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.4 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4ecdc4]/30 bg-[#4ecdc4]/10 px-3 py-1 text-xs font-medium text-[#4ecdc4]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ecdc4] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ecdc4]" />
              </span>
              Live on Ethereum
            </span>
            <span className="text-xs text-zinc-500">Investor One-Pager</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">2xSwap Bot Platform</h1>
          <p className="text-zinc-400">
            Leverage infrastructure for algorithmic traders. <span className="text-[#4ecdc4]">No liquidation. No interest. No funding rate.</span>
          </p>
        </motion.div>

        {/* Two-column grid */}
        <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.1 }} className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Problem */}
          <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
            <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Problem</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold">$150B+ liquidated in 2025.</span> Most positions were directionally correct — killed by wicks, not bad trades. Bots can&apos;t manage margin calls at 3am. No on-chain leverage is built for programmatic access.
            </p>
          </div>

          {/* Solution */}
          <div className="p-5 rounded-xl bg-zinc-900/70 border border-[#4ecdc4]/20">
            <h2 className="text-sm font-semibold text-[#4ecdc4] uppercase tracking-wider mb-3">Solution</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold">2x leverage, zero liquidation risk.</span> Profit-sharing model — LP co-invests with the trader instead of lending. Trader absorbs losses first, LP is protected. Hold up to 1 year at zero cost.
            </p>
          </div>

          {/* Market */}
          <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Market</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-[#4ecdc4] font-bold">$500M+</span><br /><span className="text-zinc-500">daily automated DeFi vol</span></div>
              <div><span className="text-[#4ecdc4] font-bold">$2B+</span><br /><span className="text-zinc-500">bot-driven CEX vol/day</span></div>
              <div><span className="text-[#4ecdc4] font-bold">$15B+</span><br /><span className="text-zinc-500">DeFi leverage TVL</span></div>
              <div><span className="text-[#4ecdc4] font-bold">10,000+</span><br /><span className="text-zinc-500">active bot strategies</span></div>
            </div>
          </div>

          {/* How It Works */}
          <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">SDK Integration</h2>
            <div className="font-mono text-xs space-y-1 text-zinc-400">
              <p><span className="text-[#4ecdc4]">openPosition()</span> — deposit + leverage</p>
              <p><span className="text-[#4ecdc4]">checkPosition()</span> — monitor P&L</p>
              <p><span className="text-[#4ecdc4]">closePosition()</span> — exit + settle</p>
            </div>
            <p className="text-xs text-zinc-500 mt-3">No margin calls. No keeper bots. No liquidation engine.</p>
          </div>
        </motion.div>

        {/* Roadmap — single row */}
        <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.15 }} className="mb-10">
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Phase 1", text: "Ethereum mainnet", done: true },
              { label: "Phase 2", text: "Arbitrum + lower gas", done: false },
              { label: "Phase 3", text: "Bot Platform SDK", highlight: true },
              { label: "Phase 4", text: "Multi-chain + RWAs", done: false },
            ].map((p, i) => (
              <div
                key={i}
                className={`px-4 py-2.5 rounded-lg text-xs border ${
                  p.highlight
                    ? "bg-[#4ecdc4]/10 border-[#4ecdc4]/30 text-[#4ecdc4]"
                    : p.done
                    ? "bg-zinc-900 border-zinc-700 text-zinc-300"
                    : "bg-zinc-900/50 border-zinc-800/50 text-zinc-500"
                }`}
              >
                <span className="font-semibold">{p.label}:</span> {p.text} {p.done && "✅"}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Revenue + Team — compact row */}
        <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.2 }} className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Revenue</h2>
            <ul className="text-sm text-zinc-300 space-y-1.5">
              <li>• Protocol fee on each position opened</li>
              <li>• Volume-based fee share with LPs</li>
              <li>• Premium SDK tiers</li>
            </ul>
            <p className="text-xs text-zinc-500 mt-3 italic">Bot volume → LP yield → deposits → liquidity → more volume</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/50">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Team</h2>
            <div className="space-y-2 text-sm">
              <div><span className="text-white font-medium">Didar Bekbauov</span> <span className="text-zinc-500">— Founder & CEO</span></div>
              <div><span className="text-white font-medium">Timur</span> <span className="text-zinc-500">— Lead Developer, built the protocol</span></div>
              <div><span className="text-white font-medium">Aibar</span> <span className="text-zinc-500">— Growth Lead, go-to-market</span></div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.25 }} className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-zinc-800/50">
          <a
            href="mailto:didar@2xswap.com"
            className="px-6 py-2.5 rounded-full bg-[#4ecdc4] text-black font-semibold text-sm hover:bg-[#45b8b0] transition-colors"
          >
            didar@2xswap.com
          </a>
          <a
            href="https://2xswap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm hover:border-[#4ecdc4]/50 hover:text-[#4ecdc4] transition-colors"
          >
            2xswap.com →
          </a>
          <div className="flex gap-4 text-xs text-zinc-500">
            <a href="https://x.com/2xswap" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ecdc4]">@2xswap</a>
            <a href="https://app.2xswap.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ecdc4]">app.2xswap.com</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
