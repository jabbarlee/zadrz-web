"use client";

import { motion } from "framer-motion";
import { Google, Reddit, LinkedIn } from '@/src/lib/integration-icons'

export function TaskComplete() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="w-full max-w-md space-y-4 relative z-10">
        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-end"
        >
          <div className="bg-primary text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
            <p className="text-lg">
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
          <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                Z
              </div>
              <span className="text-xs font-semibold text-gray-700">Zadrz</span>
            </div>
            <p className="text-sm text-gray-700">
              Done! I've researched and compiled the comparison table for you.
            </p>

            {/* Action Button */}
            <button className="w-full px-3 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              View Table
            </button>

            {/* Resources Used */}
            <div className="pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs text-gray-500 font-medium">
                  Resources used:
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-2 py-1">
                  <Reddit className="w-3.5 h-3.5" />
                  <span className="text-xs text-gray-600">Reddit</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-2 py-1">
                  <Google className="w-3.5 h-3.5" />
                  <span className="text-xs text-gray-600">Google</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-2 py-1">
                  <LinkedIn className="w-3.5 h-3.5" />
                  <span className="text-xs text-gray-600">LinkedIn</span>
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
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5">
            {/* Checkmark */}
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
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
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            {/* Text */}
            <span className="text-xs font-medium text-green-700">
              Task Complete • 2.3s • 12 actions
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
