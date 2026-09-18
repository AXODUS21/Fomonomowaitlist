import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2D3748]/8 bg-white/40 backdrop-blur-md py-12 px-4 sm:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Lockup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl overflow-hidden bg-white shadow-2xs border border-[#AECFD0]/30 flex items-center justify-center">
              <Image
                src="/logo-sm.png"
                alt="FOMO NOMO Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="font-display font-black text-xl tracking-tight text-[#2D3748]">
              FOMO<span className="text-[#3B82F6]">NOMO</span>
            </span>
          </div>
          <p className="text-xs text-[#718096] max-w-sm">
            The anti-doomscroll news digest. Open → Read → Done. Built to keep you informed without stealing your focus.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#718096]">
          <a
            href="#philosophy"
            className="hover:text-[#2D3748] transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#preview"
            className="hover:text-[#2D3748] transition-colors"
          >
            Preview
          </a>
          <a
            href="#features"
            className="hover:text-[#2D3748] transition-colors"
          >
            Features
          </a>
          <a
            href="#waitlist"
            className="hover:text-[#2D3748] transition-colors"
          >
            Waitlist
          </a>
          <a
            href="#faq"
            className="hover:text-[#2D3748] transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* Lumivor Credit */}
        <div className="text-center md:text-right text-xs text-[#718096]">
          <p className="flex items-center justify-center md:justify-end gap-1 font-medium">
            A project by <span className="font-bold text-[#2D3748]">Lumivor</span>
          </p>
          <p className="text-[11px] text-[#718096]/70 mt-1">
            © {new Date().getFullYear()} FOMO NOMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
