"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "philosophy", label: "Philosophy" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Elevation state
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Scroll progress calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (window.scrollY / totalHeight) * 100)
        );
        setScrollProgress(progress);
      }

      // Active section detection
      const sections = ["waitlist", "philosophy", "features", "faq"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 150) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToWaitlist = (e: React.MouseEvent) => {
    scrollToSection(e, "waitlist");
    const input = document.getElementById("waitlist-email-input");
    setTimeout(() => {
      if (input) input.focus();
    }, 500);
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-8 max-w-5xl mx-auto w-full transition-all duration-300">
      <div
        className={`glass-pill px-4 sm:px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300 border relative overflow-hidden ${
          scrolled
            ? "bg-white/95 shadow-lg border-white/95 backdrop-blur-xl scale-[0.99]"
            : "bg-white/80 shadow-xs border-white/80 backdrop-blur-md"
        }`}
      >
        {/* Animated Scroll Progress Line along bottom border */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#3B82F6] via-[#AECFD0] to-[#A3D6BC] transition-all duration-150 ease-out pointer-events-none rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-2xs border border-[#AECFD0]/40 bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
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
              iOS Beta
            </span>
          </div>
        </a>

        {/* Desktop Nav Links with Active Animated Highlight */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#2D3748]/5 border border-[#2D3748]/6 text-xs font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#2D3748] font-bold"
                    : "text-[#718096] hover:text-[#2D3748]"
                }`}
              >
                {/* Active sliding indicator background */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-white shadow-xs border border-[#2D3748]/10 animate-in fade-in zoom-in-95 duration-200" />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={scrollToWaitlist}
            id="nav-join-waitlist-btn"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/90 animate-spin-slow" />
            <span>Join Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#2D3748] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 glass-card rounded-3xl border border-white/90 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`block px-4 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                activeSection === item.id
                  ? "bg-[#2D3748] text-white shadow-xs"
                  : "text-[#718096] hover:bg-black/5 hover:text-[#2D3748]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={scrollToWaitlist}
            className="w-full mt-2 py-3 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Get Early Access</span>
          </button>
        </div>
      )}
    </header>
  );
}
