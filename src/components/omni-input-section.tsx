"use client";

import { motion } from "framer-motion";
import { ChatInterfaceMockup } from "./ui/chat-interface-mockup";
import { Mic, Database } from "lucide-react";
import { Zap } from "@/src/lib/icons";

const features = [
  {
    icon: Mic,
    title: "Voice-to-Action",
    description:
      "Don't type. Just talk. Zadrz parses your intent and converts it into browser actions.",
  },
  {
    icon: Database,
    title: "Deep Context",
    description:
      "Connect Google Drive or upload PDFs. The agent reads the files before browsing.",
  },
  {
    icon: Zap,
    title: "Server-Side Browsing",
    description:
      "No local scripts. We spin up the Clawbot in the cloud to do the heavy lifting.",
  },
];

export function OmniInputSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden will-change-transform">
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
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            Speak it. Type it. Upload it.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4">
            Whether it's a voice note on the go or a PDF from Drive, Zadrz
            understands your context and executes the browser tasks instantly.
          </p>
        </motion.div>

        {/* Two Column Layout: Chat Mockup + Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-[500px] sm:h-[600px] lg:h-[700px]"
          >
            <ChatInterfaceMockup />
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={false}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group relative p-5 sm:p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-xl transition-all duration-300 will-change-transform"
                >
                  {/* Enhanced glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-100/60 via-purple-100/60 to-pink-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-200 group-hover:from-indigo-200 group-hover:to-purple-200 group-hover:border-indigo-400 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-lg will-change-transform">
                      {typeof Icon === "function" && Icon.name === "Zap" ? (
                        <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                          <Icon />
                        </div>
                      ) : (
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
                      )}
                    </div>

                    {/* Title with gradient on hover */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
