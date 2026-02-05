"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Paperclip,
  Send,
  Mic,
  CheckCheck,
  MoreVertical,
  Mail,
} from "lucide-react";
import { VoiceWaveform } from "./voice-waveform";
import { ContextMenuDock } from "./context-menu-dock";
import { Google, Reddit, Gmail } from "@/src/lib/integration-icons";

type State = "voice" | "context" | "execution" | "reddit" | "email";

export function ChatInterfaceMockup() {
  const [currentState, setCurrentState] = useState<State>("voice");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [typedText, setTypedText] = useState("");
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showAgentResponse, setShowAgentResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const fullText =
    "Check my Google Drive for the Q3 report and summarize the variance.";

  // State machine - cycle through states every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === "voice") return "context";
        if (prev === "context") return "execution";
        if (prev === "execution") return "reddit";
        if (prev === "reddit") return "email";
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
    setShowUserMessage(false);
    setShowAgentResponse(false);
    setIsTyping(false);

    if (currentState === "voice") {
      setTimeout(() => setShowUserMessage(true), 300);

      const timeout = setTimeout(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index <= fullText.length) {
            setTypedText(fullText.slice(0, index));
            index++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setIsTyping(true);
              setTimeout(() => {
                setIsTyping(false);
                setShowAgentResponse(true);
              }, 1500);
            }, 300);
          }
        }, 30);

        return () => clearInterval(typingInterval);
      }, 1500);

      return () => clearTimeout(timeout);
    } else if (currentState === "context") {
      setTimeout(() => setShowUserMessage(true), 300);

      const menuTimeout = setTimeout(() => setShowMenu(true), 800);
      const selectTimeout = setTimeout(() => {
        setShowMenu(false);
        setSelectedFile(true);
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setShowAgentResponse(true);
          }, 1200);
        }, 400);
      }, 3000);

      return () => {
        clearTimeout(menuTimeout);
        clearTimeout(selectTimeout);
      };
    } else if (currentState === "execution") {
      setTimeout(() => setShowUserMessage(true), 300);

      const statuses = [
        "Agent initializing...",
        "Browsing Drive...",
        "Extracting Data...",
      ];
      let index = 0;

      setStatusText(statuses[0]);
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setShowAgentResponse(true);
        }, 1000);
      }, 300);

      const statusInterval = setInterval(() => {
        index++;
        if (index < statuses.length) {
          setStatusText(statuses[index]);
        }
      }, 1500);

      return () => clearInterval(statusInterval);
    } else if (currentState === "reddit") {
      setTimeout(() => setShowUserMessage(true), 300);

      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setShowAgentResponse(true);
        }, 1500);
      }, 500);
    } else if (currentState === "email") {
      setTimeout(() => setShowUserMessage(true), 300);

      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setShowAgentResponse(true);
        }, 1500);
      }, 500);
    }
  }, [currentState, fullText.length]);

  const gradientClass = {
    voice: "from-teal-500/10 via-cyan-500/10 to-transparent",
    context: "from-blue-500/10 via-indigo-500/10 to-transparent",
    execution: "from-purple-500/10 via-violet-500/10 to-transparent",
    reddit: "from-orange-500/10 via-red-500/10 to-transparent",
    email: "from-rose-500/10 via-pink-500/10 to-transparent",
  }[currentState];

  return (
    <div className="relative w-full h-full will-change-transform">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} blur-3xl opacity-30 transition-all duration-1000 pointer-events-none`}
      />

      <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col will-change-contents">
        {/* Chat Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center p-1">
                  <img
                    src="/logo_zadrz.png"
                    alt="Zadrz Logo"
                    width={30}
                    height={30}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
              </div>
              <div>
                <h3 className="text-gray-900 text-sm sm:text-base font-semibold">
                  Zadrz
                </h3>
                <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 sm:p-6 space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white/50 will-change-scroll">
          <div className="flex justify-center">
            <span className="text-xs text-gray-600 px-3 py-1 bg-white/80 rounded-full shadow-sm border border-gray-200">
              Today, 2:34 PM
            </span>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {/* State A: Voice Command */}
            {currentState === "voice" && (
              <motion.div
                key="voice-messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
                {showUserMessage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end items-end gap-2"
                  >
                    <div className="max-w-[75%]">
                      <div className="bg-black rounded-2xl rounded-tr-md px-4 py-3 shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                          <Mic className="w-3.5 h-3.5 text-indigo-100" />
                          <span className="text-xs text-indigo-100 font-medium">
                            Voice Message
                          </span>
                        </div>
                        <div className="mb-2 scale-90 origin-left">
                          <VoiceWaveform />
                        </div>
                        {typedText && (
                          <p className="text-base sm:text-lg text-white leading-relaxed">
                            {typedText}
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="inline-block w-0.5 h-5 bg-white ml-1"
                            />
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:34 PM</span>
                        <CheckCheck className="w-3.5 h-3.5 text-indigo-500" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {showAgentResponse && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-md">
                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                          Got it! I'll check your Google Drive for the Q3 report
                          and analyze the variance for you. 📊
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:35 PM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* State B: Context Upload */}
            {currentState === "context" && (
              <motion.div
                key="context-messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {showUserMessage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end items-end gap-2"
                  >
                    <div className="max-w-[75%]">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl rounded-tr-md px-4 py-3 shadow-md">
                        <p className="text-base sm:text-lg text-white mb-2 leading-relaxed">
                          Analyze this financial report
                        </p>
                        {selectedFile && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2 px-3 py-2.5 bg-white/15 rounded-lg mt-2 border border-white/10"
                          >
                            <div className="p-1.5 bg-white/20 rounded">
                              <Google className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-white font-medium truncate">
                                Q3_Financials.pdf
                              </p>
                              <p className="text-xs text-blue-100">2.4 MB</p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:36 PM</span>
                        <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {showAgentResponse && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-md">
                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                          Perfect! I've received the Q3 Financials PDF. Let me
                          analyze it for you. 📄
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:36 PM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* State C: Agent Execution */}
            {currentState === "execution" && (
              <motion.div
                key="execution-messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {showUserMessage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end items-end gap-2"
                  >
                    <div className="max-w-[75%]">
                      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl rounded-tr-md px-4 py-3 shadow-md">
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Analyze Q3 financial report
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:37 PM</span>
                        <CheckCheck className="w-3.5 h-3.5 text-purple-500" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {showAgentResponse && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-md space-y-3">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full flex-shrink-0"
                          />
                          <span className="text-base sm:text-lg text-purple-600 font-medium">
                            {statusText}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Running Clawbot agent in the cloud...
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:37 PM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* State D: Reddit News */}
            {currentState === "reddit" && (
              <motion.div
                key="reddit-messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {showUserMessage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end items-end gap-2"
                  >
                    <div className="max-w-[75%]">
                      <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl rounded-tr-md px-4 py-3 shadow-md">
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Analyze the top trending news from Reddit
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:38 PM</span>
                        <CheckCheck className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {showAgentResponse && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-md space-y-3">
                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                          I've analyzed the top trending news from Reddit.
                          Here's what's hot right now! 🔥
                        </p>
                        <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                          <div className="p-1.5 bg-orange-50 rounded-lg border border-orange-200">
                            <Reddit className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-gray-600 font-medium">
                            Resource used: Reddit
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:38 PM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* State E: Email Cleanup */}
            {currentState === "email" && (
              <motion.div
                key="email-messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {showUserMessage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end items-end gap-2"
                  >
                    <div className="max-w-[75%]">
                      <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl rounded-tr-md px-4 py-3 shadow-md">
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Sort my last 100 emails for spam and summarize the
                          important ones
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:39 PM</span>
                        <CheckCheck className="w-3.5 h-3.5 text-rose-500" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {showAgentResponse && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start items-end gap-2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center p-1">
                      <img
                        src="/logo_zadrz.png"
                        alt="Zadrz Logo"
                        width={30}
                        height={30}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-md space-y-3">
                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                          Done! I've sorted through 100 emails, found 23 spam
                          messages, and summarized 8 important ones. 📧
                        </p>
                        <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                          <div className="p-1.5 bg-red-50 rounded-lg border border-red-200">
                            <Gmail className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-gray-600 font-medium">
                            Resource used: Gmail
                          </span>
                        </div>
                        <button className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                          Open Summary
                        </button>
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-2">
                        <span className="text-xs text-gray-600">2:39 PM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat Input Area */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-gradient-to-r from-indigo-50/30 to-purple-50/30">
          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </motion.button>
            <input
              type="text"
              placeholder="Message Zadrz..."
              className="flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none py-1"
              disabled
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Floating Context Menu */}
        {showMenu && (
          <div className="absolute bottom-20 left-4 sm:left-6 z-20">
            <ContextMenuDock />
          </div>
        )}
      </div>
    </div>
  );
}
