"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, ArrowUp, Bot } from "lucide-react";
import { VoiceWaveform } from "./voice-waveform";
import { ContextMenuDock } from "./context-menu-dock";
import { Google } from "@/src/lib/integration-icons";

type State = "voice" | "context" | "execution";

export function SuperInputBar() {
  const [currentState, setCurrentState] = useState<State>("voice");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Check my Google Drive for the Q3 report and summarize the variance.";

  // State machine - cycle through states every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === "voice") return "context";
        if (prev === "context") return "execution";
        return "voice";
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Reset state-specific variables when state changes
  useEffect(() => {
    setShowMenu(false);
    setSelectedFile(false);
    setStatusText("");
    setTypedText("");

    if (currentState === "voice") {
      // Typing animation for voice state
      const timeout = setTimeout(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index <= fullText.length) {
            setTypedText(fullText.slice(0, index));
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, 30);

        return () => clearInterval(typingInterval);
      }, 1500);

      return () => clearTimeout(timeout);
    } else if (currentState === "context") {
      // Show menu after delay
      const menuTimeout = setTimeout(() => setShowMenu(true), 500);
      const selectTimeout = setTimeout(() => {
        setShowMenu(false);
        setSelectedFile(true);
      }, 3000);

      return () => {
        clearTimeout(menuTimeout);
        clearTimeout(selectTimeout);
      };
    } else if (currentState === "execution") {
      // Sequential status updates
      const statuses = [
        "Agent initializing...",
        "Browsing Drive...",
        "Extracting Data...",
      ];
      let index = 0;

      setStatusText(statuses[0]);

      const statusInterval = setInterval(() => {
        index++;
        if (index < statuses.length) {
          setStatusText(statuses[index]);
        }
      }, 1500);

      return () => clearInterval(statusInterval);
    }
  }, [currentState]);

  // Dynamic gradient based on state
  const gradientClass = {
    voice: "from-teal-500/20 via-cyan-500/20 to-transparent",
    context: "from-blue-500/20 via-indigo-500/20 to-transparent",
    execution: "from-purple-500/20 via-violet-500/20 to-transparent",
  }[currentState];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Gradient Halo */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} blur-3xl opacity-50 transition-all duration-1000`}
      />

      {/* Main Container */}
      <motion.div
        key={currentState}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 min-h-[200px] sm:min-h-[240px] flex flex-col justify-center"
      >
        <AnimatePresence mode="wait">
          {/* State A: Voice Command */}
          {currentState === "voice" && (
            <motion.div
              key="voice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Label */}
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-sm text-teal-300 font-medium">
                  Processing Voice Note...
                </span>
              </div>

              {/* Waveform */}
              <VoiceWaveform />

              {/* Typed Text */}
              {typedText && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-base sm:text-lg text-white/90 font-mono">
                    "{typedText}"
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-0.5 h-5 bg-teal-400 ml-1"
                    />
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* State B: Context Upload */}
          {currentState === "context" && (
            <motion.div
              key="context"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Input Bar with Paperclip */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300"
                  >
                    <Paperclip className="w-5 h-5" />
                  </motion.button>

                  {selectedFile ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-lg"
                    >
                      <Google className="w-4 h-4" />
                      <span className="text-sm text-white/90">
                        Q3_Financials.pdf
                      </span>
                    </motion.div>
                  ) : (
                    <span className="text-sm text-white/50">
                      Add context from your files...
                    </span>
                  )}
                </div>

                {/* Floating Menu */}
                {showMenu && (
                  <div className="absolute top-full mt-3 left-0">
                    <ContextMenuDock />
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* State C: Agent Execution */}
          {currentState === "execution" && (
            <motion.div
              key="execution"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Input with Bot Icon */}
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-sm text-white/90 flex-1">
                  Analyze Q3 financial report...
                </span>
                <motion.button
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300"
                >
                  <Bot className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Status Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 px-4"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full"
                />
                <span className="text-sm text-purple-300 font-medium">
                  {statusText}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
