"use client";

import { motion } from "framer-motion";
import { FileText, Upload } from "lucide-react";
import { Google } from "@/src/lib/integration-icons";

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
      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
    >
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect?.(item.id as "drive" | "notion" | "upload")}
            className="flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
            aria-label={item.label}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white/80 group-hover:text-white transition-colors" />
            <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
