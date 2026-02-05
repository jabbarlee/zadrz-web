"use client";

import { useState } from "react";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { WordRotate } from "@/src/components/ui/word-rotate";
import { PlaceholdersAndVanishInput } from "@/src/components/ui/placeholders-and-vanish-input";

export function Hero() {
  const [email, setEmail] = useState("");

  const useCases = ["Research", "Booking", "Scraping", "Automation"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle waitlist submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center py-12 sm:py-16 md:py-0">
        {/* Headline */}
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 max-w-6xl leading-tight">
          The power of{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Clawbot
          </span>
          <br />
          Without the configuration.
        </p>

        {/* Sub-headline with rotating use cases */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl">
          Deploy autonomous AI agents for{" "}
          <WordRotate words={useCases} className="text-primary font-semibold" />
          .
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl px-2">
          No API keys, no terminal, no Python. Just chat.
        </p>

        {/* Waitlist Input */}
        <div className="w-full max-w-xl mb-6 sm:mb-8 px-2">
          <PlaceholdersAndVanishInput
            placeholder="Enter your email for early access..."
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground">
          Join the waitlist for early access.
        </p>
      </div>
    </AuroraBackground>
  );
}
