"use client";

import { motion } from "framer-motion";

export function VoiceWaveform() {
  // Create 10 bars with different animation delays for natural wave effect
  const bars = Array.from({ length: 10 });

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5 h-16 sm:h-20">
      {bars.map((_, index) => (
        <motion.div
          key={index}
          className="w-1 sm:w-1.5 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-full"
          animate={{
            scaleY: [
              0.3 + Math.random() * 0.2,
              0.8 + Math.random() * 0.4,
              0.4 + Math.random() * 0.3,
              0.9 + Math.random() * 0.3,
              0.3 + Math.random() * 0.2,
            ],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
          style={{
            height: "100%",
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}
