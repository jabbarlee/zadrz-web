"use client";

import { motion } from "framer-motion";
import { Google, Reddit, LinkedIn } from "@/src/lib/integration-icons";

export function TaskComplete() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <div className="w-full max-w-lg space-y-3 sm:space-y-4 md:space-y-5 relative z-10">
        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-end"
        >
          <div className="bg-primary text-white rounded-2xl rounded-tr-sm px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 max-w-[85%] sm:max-w-[80%] shadow-sm">
            <p className="text-sm sm:text-base">
              Research the top 5 AI coding tools and create a comparison table
            </p>
          </div>
        </motion.div>

        {/* Zadrz Response */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-start"
        >
          <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-3 py-3 sm:px-4 sm:py-3.5 md:px-5 md:py-4 max-w-[90%] sm:max-w-[85%] shadow-sm space-y-2 sm:space-y-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">
                Z
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">
                Zadrz
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              Done! I've researched and compiled the comparison table for you.
            </p>

            {/* Action Button */}
            <button className="w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-primary text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              View Table
            </button>

            {/* Resources Used */}
            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <span className="text-xs text-gray-500 font-medium">
                  Resources used:
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5">
                  <Reddit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs text-gray-600 font-medium">
                    Reddit
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5">
                  <Google className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs text-gray-600 font-medium">
                    Google
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5">
                  <LinkedIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs text-gray-600 font-medium">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Result Chip */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-start"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            {/* Checkmark */}
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-3 sm:h-3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            {/* Text */}
            <span className="text-xs sm:text-sm font-medium text-green-700">
              <span className="hidden sm:inline">
                Task Complete • 2.3s • 12 actions • 0s setup
              </span>
              <span className="sm:hidden">Complete • 2.3s • 0s setup</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
