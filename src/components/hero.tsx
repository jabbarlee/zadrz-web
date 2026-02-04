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
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-6xl">
          The power of{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Clawbot
          </span>
          <br />
          Without the configuration.
        </h1>

        {/* Sub-headline with rotating use cases */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl">
          Deploy autonomous AI agents for{" "}
          <WordRotate words={useCases} className="text-primary font-semibold" />
          .
        </p>

        <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl">
          No API keys, no terminal, no Python. Just chat.
        </p>

        {/* Waitlist Input */}
        <div className="w-full max-w-xl mb-8">
          <PlaceholdersAndVanishInput
            placeholder="Enter your email for early access..."
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>

        <p className="text-sm text-muted-foreground">
          Join the waitlist for early access.
        </p>
      </div>
    </AuroraBackground>
  );
}
