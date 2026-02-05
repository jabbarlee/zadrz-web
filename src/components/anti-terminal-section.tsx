"use client";

import { TerminalError } from "@/src/components/terminal-error";
import { TaskComplete } from "@/src/components/task-complete";

export function AntiTerminalSection() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Boxed Squares Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0",
        }}
      />
      {/* Overlay pattern for square boxes effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(0, 0, 0, 0.15) 59px, rgba(0, 0, 0, 0.15) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(0, 0, 0, 0.15) 59px, rgba(0, 0, 0, 0.15) 60px)
          `,
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Stop fighting dependencies.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              See the difference between the old way and the Zadrz way.
            </p>
          </div>

          {/* Labels Above Component */}
          <div className="flex mb-6">
            {/* Left Label - The Old Way */}
            <div className="w-1/2 flex items-center justify-center">
              <div className="text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#a4161a" }}
                >
                  The Old Way
                </p>
                <p className="text-lg text-muted-foreground">
                  Hours of setup, countless errors
                </p>
              </div>
            </div>
            {/* Right Label - The Zadrz Way */}
            <div className="w-1/2 flex items-center justify-center">
              <div className="text-center">
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#25a244" }}
                >
                  The Zadrz Way
                </p>
                <p className="text-lg text-muted-foreground">
                  Zero setup, instant results
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="flex h-[600px]">
              {/* Left Side - Terminal Error */}
              <div className="w-1/2 border-r border-border">
                <TerminalError />
              </div>
              {/* Right Side - Chat Interface */}
              <div className="w-1/2">
                <TaskComplete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
