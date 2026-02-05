"use client";

import { motion } from "framer-motion";
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

export function FeaturePills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
                {typeof Icon === "function" && Icon.name === "Zap" ? (
                  <div className="text-white/80 group-hover:text-white transition-colors">
                    <Icon />
                  </div>
                ) : (
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white/80 group-hover:text-white transition-colors" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
