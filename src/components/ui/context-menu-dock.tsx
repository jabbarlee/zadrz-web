"use client";

import { motion } from "framer-motion";
import { FileText, Upload } from "lucide-react";
import { Google } from "@/src/lib/icons/integration-icons";

interface ContextMenuDockProps {
  onSelect?: (type: "drive" | "notion" | "upload") => void;
}

export function ContextMenuDock({ onSelect }: ContextMenuDockProps) {
  const menuItems = [
    { id: "drive", icon: Google, label: "Google Drive" },
    { id: "notion", icon: FileText, label: "Notion" },
    { id: "upload", icon: Upload, label: "Upload PDF" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg"
    >
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect?.(item.id as "drive" | "notion" | "upload")}
            className="flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-indigo-300 transition-all group"
            aria-label={item.label}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" />
            <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors whitespace-nowrap font-medium">
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
