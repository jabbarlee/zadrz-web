"use client";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-2.5">
            <img src="/logo_zadrz.png" alt="Zadrz" width={28} height={28} className="opacity-80" />
            <span className="font-semibold text-white/70 text-sm">Zadrz</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a
              href="https://t.me/zadrz_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#4ecdc4] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              @zadrz_ai
            </a>
            <a
              href="https://x.com/zadr_2x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#4ecdc4] transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              @zadr_2x
            </a>
            <a
              href="https://zadrz.com"
              className="hover:text-[#4ecdc4] transition-colors duration-200"
            >
              zadrz.com
            </a>
            <a
              href="https://2xswap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4ecdc4] transition-colors duration-200"
            >
              2xswap.com
            </a>
          </div>

          {/* Powered by */}
          <div className="text-xs text-white/20 flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="text-white/35 font-medium">OpenClaw</span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-xs text-white/15">
            © 2026 Zadrz. AI and what? All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
