"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import PhoneMockup from "@/components/PhoneMockup";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import MascotShowcase from "@/components/MascotShowcase";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { Sparkles, Shield, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    const input = document.getElementById("waitlist-email-input");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (input) input.focus();
      }, 400);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F4F7F6] text-[#2D3748] selection:bg-[#AECFD0]/40">
      {/* Background Decorative Mesh Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#AECFD0]/25 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#A3D6BC]/25 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#A78BFA]/15 blur-[130px]" />
      </div>

      {/* Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        {/* HERO SECTION */}
        <section className="pt-12 sm:pt-20 pb-16 px-4 sm:px-8 max-w-6xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/80 border border-[#2D3748]/10 shadow-xs mb-6 text-[#2D3748]">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
              <span>✦ The Anti-Doomscroll Digest</span>
              <span className="text-[#718096]">•</span>
              <span className="text-[#10B981]">Open → Read → Done</span>
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

          {/* Hero Grid: Form on Left, Interactive Phone on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Col: Waitlist Form */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <WaitlistForm />
            </div>

            {/* Right Col: Interactive Phone Simulator */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* VIP BANNER */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 my-4">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/90 shadow-md bg-gradient-to-r from-white/90 via-white/80 to-[#AECFD0]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#AECFD0]/30 border border-[#AECFD0]/50 flex items-center justify-center shrink-0">
                <Sparkles className="w-7 h-7 text-[#3B82F6]" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg sm:text-xl text-[#2D3748]">
                  Early Adopter Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-[#718096] mt-0.5">
                  First 500 waitlist signups get <strong>6 months of FOMO NOMO Pro free</strong> + priority iOS TestFlight build invites.
                </p>
              </div>
            </div>

            <button
              onClick={scrollToWaitlist}
              className="px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm bg-[#2D3748] text-white hover:bg-black transition-all cursor-pointer whitespace-nowrap shadow-xs"
            >
              Claim VIP Spot
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
        <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto w-full text-center">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/90 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/95 to-[#AECFD0]/20">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="/mascot-excited.png"
                alt="Excited mascot"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D3748] tracking-tight mb-3">
              Ready to quit doomscrolling for good?
            </h2>
            <p className="text-sm sm:text-base text-[#718096] max-w-lg mx-auto mb-8 leading-relaxed">
              Join hundreds of mindful professionals reclaiming an hour of their day while staying smarter than ever.
            </p>

            <button
              onClick={scrollToWaitlist}
              className="px-8 py-4 rounded-2xl font-display font-bold text-base text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Join the Waitlist Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-[#718096] mt-4">
              Free during beta • No credit card needed • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
