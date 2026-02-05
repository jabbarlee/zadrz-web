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
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
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
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating subtle dots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-indigo-300/20 blur-sm" />
      <div className="absolute top-3/4 right-1/4 w-4 h-4 rounded-full bg-purple-300/20 blur-sm" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-pink-300/20 blur-sm" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-indigo-300/20 blur-sm" />

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] sm:h-[600px] lg:h-[700px]"
          >
            <ChatInterfaceMockup />
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 lg:space-y-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative p-6 sm:p-8 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl hover:bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 group-hover:from-indigo-200 group-hover:to-purple-200 group-hover:border-indigo-300 transition-all shadow-sm">
                      {typeof Icon === "function" && Icon.name === "Zap" ? (
                        <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                          <Icon />
                        </div>
                      ) : (
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
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
