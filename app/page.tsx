"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import HeroRitual from "@/components/HeroRitual";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import MascotShowcase from "@/components/MascotShowcase";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, ShieldCheck, Coins } from "lucide-react";

export default function Home() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    const input = document.getElementById("waitlist-email-input");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (input) input.focus();
      }, 450);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F4F7F6] text-[#2D3748] selection:bg-[#AECFD0]/40">
      {/* Background Decorative Mesh Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[550px] h-[550px] rounded-full bg-[#AECFD0]/25 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-[25%] right-[-5%] w-[650px] h-[650px] rounded-full bg-[#A3D6BC]/25 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#A78BFA]/15 blur-[140px]" />
      </div>

      {/* Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        {/* HERO SECTION with generous top padding so navbar never overlaps */}
        <section className="pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 px-4 sm:px-8 max-w-6xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/85 border border-[#2D3748]/10 shadow-xs mb-8 text-[#2D3748]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
              <span>✦ The Anti-Doomscroll Digest</span>
              <span className="text-[#718096]">•</span>
              <span className="text-[#10B981]">Pay Once, Own Forever</span>
            </div>

            {/* Headline requested by user */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#2D3748] tracking-tight leading-[1.08] mb-6">
              Never miss out again.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-[#718096] leading-relaxed max-w-2xl mx-auto font-medium">
              No endless feeds. No rage-inducing algorithms. Just one calm,
              personalized daily news briefing designed to be finished in 5
              minutes.
            </p>
          </div>

          {/* Hero Grid: Waitlist Form on Left, Authentic App Ritual on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Col: Waitlist Form */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <WaitlistForm />
            </div>

            {/* Right Col: Authentic App Ritual (replaces clunky phone mockup) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <HeroRitual />
            </div>
          </div>
        </section>

        {/* ONE-TIME PURCHASE & VIP BANNER */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 my-8 sm:my-12">
          <div className="glass-card rounded-[32px] p-8 sm:p-10 border border-white/90 shadow-md bg-gradient-to-r from-white/95 via-white/85 to-[#AECFD0]/30 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#AECFD0]/35 border border-[#AECFD0]/60 flex items-center justify-center shrink-0 shadow-2xs">
                <Coins className="w-8 h-8 text-[#2D3748]" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>No Subscription Fatigue</span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#2D3748]">
                  Pay once on the App Store. Own it forever.
                </h3>
                <p className="text-xs sm:text-sm text-[#718096] max-w-xl leading-relaxed">
                  We believe mindful media shouldn&apos;t charge you every single month. Waitlist members get early TestFlight builds and locked-in early-bird pricing.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToWaitlist}
              className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-[#2D3748] text-white hover:bg-black transition-all cursor-pointer whitespace-nowrap shadow-sm hover:scale-105"
            >
              Claim Early Spot
            </button>
          </div>
        </section>

        {/* PHILOSOPHY & COMPARISON */}
        <Comparison />

        {/* FEATURES GRID */}
        <Features />

        {/* INTERACTIVE MASCOT COMPANION SHOWCASE */}
        <MascotShowcase />

        {/* FAQ ACCORDION */}
        <Faq />

        {/* SECONDARY BOTTOM CALL TO ACTION */}
        <section className="py-24 sm:py-32 px-4 sm:px-8 max-w-4xl mx-auto w-full text-center">
          <div className="glass-card rounded-[36px] p-10 sm:p-16 border border-white/90 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/95 to-[#AECFD0]/20 space-y-6">
            <div className="w-24 h-24 mx-auto relative">
              <Image
                src="/mascot-excited.png"
                alt="Excited mascot"
                width={96}
                height={96}
                className="object-contain animate-bounce"
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2D3748] tracking-tight">
                Ready to quit doomscrolling for good?
              </h2>
              <p className="text-base sm:text-lg text-[#718096] max-w-lg mx-auto leading-relaxed">
                Join hundreds of mindful professionals reclaiming an hour of their day while staying sharper than ever.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToWaitlist}
                className="px-8 py-4.5 rounded-2xl font-display font-bold text-base text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2.5"
              >
                <span>Join the Early Access List</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#718096] pt-2">
              Pay once • No monthly subscriptions • Lifetime access
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
