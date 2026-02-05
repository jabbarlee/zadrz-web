"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Zap } from "@/src/lib/icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const handleUseCasesClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
              Zadrz
            </span>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button variant="ghost" asChild>
              <Link href="#use-cases">Use cases</Link>
            </Button>
            <Button
              variant="default"
              hoverFlip={true}
              hoverIcon={<Zap />}
              onClick={scrollToHero}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border/50 pt-4">
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link href="#use-cases" onClick={handleUseCasesClick}>
                Use cases
              </Link>
            </Button>
            <Button variant="default" className="w-full" onClick={scrollToHero}>
              <Zap className="mr-2" />
              Join Waitlist
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
