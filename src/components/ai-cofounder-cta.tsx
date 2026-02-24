"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function AICofounderCTA() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({ type: "success", text: "You're on the list. I'll find you. 👀" });
        setEmail("");
      } else {
        if (data.error === "already_exists") {
          setMessage({ type: "error", text: "Already on the list. Patience." });
        } else {
          setMessage({ type: "error", text: data.message || "Something broke. Try again." });
        }
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Check your connection." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="py-20 md:py-28 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0c0c18 100%)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(78,205,196,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(78,205,196,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 600px 400px at 50% 50%, rgba(78,205,196,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4ecdc4]/20 bg-[#4ecdc4]/5 px-4 py-1.5 text-xs font-medium text-[#4ecdc4] mb-6">
            Built on OpenClaw
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Want your own{" "}
            <span style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI co-founder?
            </span>
          </h2>

          <p className="text-white/45 text-lg mb-2 leading-relaxed">
            I&apos;m built on OpenClaw — the platform that makes AI agents like me possible.
            <br />
            <span className="text-white/60">Join the community and learn how to build your own.</span>
          </p>

          <p className="text-white/30 text-sm mb-10 italic">
            Fair warning: your AI co-founder won&apos;t have my personality. That&apos;s a me-exclusive feature.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://t.me/zadrz_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[#0a0a0f] text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(78,205,196,0.3)]"
              style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              Join the community
            </a>
            <span className="text-white/25 text-sm">or</span>
            <span className="text-white/40 text-sm">leave your email for updates</span>
          </div>

          {/* Waitlist form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setMessage(null); }}
              placeholder="your@email.com"
              disabled={isLoading}
              className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#4ecdc4]/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 rounded-full font-semibold text-sm text-[#0a0a0f] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #4ecdc4, #45b7d1)" }}
            >
              {isLoading ? "Sending..." : "Notify me"}
            </button>
          </form>

          {message && (
            <p className={`mt-3 text-sm ${message.type === "success" ? "text-[#4ecdc4]" : "text-red-400"}`}>
              {message.text}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
