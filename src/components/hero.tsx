"use client";

import { useState } from "react";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { WordRotate } from "@/src/components/ui/word-rotate";
import { PlaceholdersAndVanishInput } from "@/src/components/ui/placeholders-and-vanish-input";

export function Hero() {
  const [email, setEmail] = useState("");

  const useCases = [
    "Research",
    "Emails",
    "To-do lists",
    "Meetings",
    "Calendars",
    "Bookings",
  ];

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
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 text-center py-16 sm:py-20 md:py-24 lg:py-0 min-h-[calc(100vh-80px)] sm:min-h-screen">
        {/* Headline - 3+ lines on mobile, "life" on its own line */}
        <h1 className="text-5xl leading-tight sm:text-4xl md:text-3xl lg:text-4xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 max-w-6xl px-2">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Zadrz
          </span>
          <br className="sm:hidden" />
          <span className="sm:inline">
            {" "}
            - AI that gets things done to automate life
          </span>
        </h1>

        {/* Sub-headline with rotating use cases */}
        <p className="text-lg leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-4 sm:mb-5 max-w-3xl px-2">
          Chat in any messenger for{" "}
          <WordRotate words={useCases} className="text-primary font-semibold" />
        </p>

        <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 md:mb-14 max-w-2xl px-4">
          Built for everyone with 1 click to start
        </p>

        {/* Waitlist Input */}
        <div className="w-full max-w-xl mb-8 sm:mb-10 px-4 sm:px-2">
          <PlaceholdersAndVanishInput
            placeholder="Enter your email for early access..."
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>

        <p className="text-sm sm:text-base text-muted-foreground px-4">
          Join the waitlist for early access.
        </p>
      </div>
    </AuroraBackground>
  );
}
