"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Navbar() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-8 max-w-6xl mx-auto w-full">
      <div className="glass-pill px-4 sm:px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md border border-white/70">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-xs border border-[#AECFD0]/30 bg-white flex items-center justify-center">
            <Image
              src="/logo-sm.png"
              alt="FOMO NOMO Logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-xl tracking-tight text-[#2D3748]">
              FOMO<span className="text-[#3B82F6]">NOMO</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#A3D6BC]/25 text-[#2D3748] border border-[#A3D6BC]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              iOS Beta Soon
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#718096]">
          <a
            href="#philosophy"
            className="hover:text-[#2D3748] transition-colors duration-200"
          >
            Philosophy
          </a>
          <a
            href="#preview"
            className="hover:text-[#2D3748] transition-colors duration-200"
          >
            App Preview
          </a>
          <a
            href="#features"
            className="hover:text-[#2D3748] transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#faq"
            className="hover:text-[#2D3748] transition-colors duration-200"
          >
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToWaitlist}
            id="nav-join-waitlist-btn"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span>Join Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
}
