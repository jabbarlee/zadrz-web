"use client";

import { PlaceholdersAndVanishInput } from "@/src/components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export function FooterCTA() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle waitlist submission
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 overflow-hidden bg-background border-t border-border">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating subtle dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/10 blur-sm" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-primary/8 blur-sm" />
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/12 blur-sm" />
      <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-primary/6 blur-sm" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Content */}
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground px-2">
              Ready to automate?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Join the waitlist for early access. No credit card required. No
              setup time.
            </p>
          </div>

          {/* Waitlist Input */}
          <div className="max-w-xl mx-auto px-2">
            <PlaceholdersAndVanishInput
              placeholder="Enter your email for early access"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500 sm:w-4 sm:h-4 flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500 sm:w-4 sm:h-4 flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Setup in under 2 minutes</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500 sm:w-4 sm:h-4 flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="pt-8 sm:pt-10 md:pt-12 border-t border-border/50 mt-8 sm:mt-10 md:mt-12">
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
              {/* Logo */}
              <div className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                Zadrz
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <a
                  href="#use-cases"
                  className="hover:text-foreground transition-colors"
                >
                  Use Cases
                </a>
                <a
                  href="#pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Copyright */}
              <div className="text-xs sm:text-sm text-muted-foreground">
                © 2026 Zadrz. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
