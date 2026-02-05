"use client";

import { motion } from "framer-motion";
import { SuperInputBar } from "./ui/super-input-bar";
import { FeaturePills } from "./ui/feature-pills";

export function OmniInputSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-16 sm:py-20 md:py-24 lg:py-32 px-4 overflow-hidden flex items-center">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating subtle dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/5 blur-sm" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-white/5 blur-sm" />
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-white/5 blur-sm" />
      <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-white/5 blur-sm" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-white">
            Speak it. Type it. Upload it.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto px-4">
            Whether it's a voice note on the go or a PDF from Drive, Zadrz
            understands your context and executes the browser tasks instantly.
          </p>
        </motion.div>

        {/* Super Input Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <SuperInputBar />
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FeaturePills />
        </motion.div>
      </div>
    </section>
  );
}
