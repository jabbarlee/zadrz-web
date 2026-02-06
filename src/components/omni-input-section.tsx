"use client";

import { motion } from "framer-motion";
import { ChatInterfaceMockup } from "./ui/chat-interface-mockup";

export function OmniInputSection() {
  return (
    <section className="relative py-12 sm:py-24 md:py-28 lg:py-32 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden will-change-transform">
      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating subtle dots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-indigo-300/20 blur-sm pointer-events-none" />
      <div className="absolute top-3/4 right-1/4 w-4 h-4 rounded-full bg-purple-300/20 blur-sm pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-pink-300/20 blur-sm pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-indigo-300/20 blur-sm pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            If you can explain it - Zadrz will do it.
          </h2>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4">
            Whether it's a voice note on the go or a PDF from Drive, Zadrz
            understands your context and executes the browser tasks instantly.
          </p>
        </motion.div>

        {/* Centered Chat Interface Mockup - viewport height on mobile for full visibility */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-2xl h-[75dvh] min-h-[420px] sm:h-[600px] lg:h-[700px]"
          >
            <ChatInterfaceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
