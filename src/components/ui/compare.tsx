"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface CompareProps {
  firstImage?: React.ReactNode;
  secondImage?: React.ReactNode;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
}

export const Compare = ({
  firstImage,
  secondImage,
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    }
  };

  const handleMouseDown = () => {
    if (slideMode === "drag") {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  };

  React.useEffect(() => {
    if (slideMode === "drag") {
      const handleGlobalMouseUp = () => setIsDragging(false);
      window.addEventListener("mouseup", handleGlobalMouseUp);
      return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }
  }, [slideMode]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        cursor:
          slideMode === "drag"
            ? isDragging
              ? "grabbing"
              : "grab"
            : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Second Image (Background) */}
      <div className={cn("absolute inset-0", secondImageClassname)}>
        {secondImage}
      </div>

      {/* First Image (Foreground with clip) */}
      <div
        className={cn("absolute inset-0", firstImageClassName)}
        style={{
          clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
        }}
      >
        {firstImage}
      </div>

      {/* Slider Handle */}
      {showHandlebar && (
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent"
          style={{
            left: `${sliderXPercent}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
