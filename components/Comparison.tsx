"use client";

import Image from "next/image";
import { XCircle, CheckCircle2, Clock, Zap, Heart, ShieldAlert, Sparkles } from "lucide-react";

export default function Comparison() {
  return (
    <section id="philosophy" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#AECFD0]/30 text-[#2D3748] border border-[#AECFD0]/50 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>The Anti-Doomscroll Philosophy</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2D3748] tracking-tight leading-tight">
          News engineered for your life, <br className="hidden sm:inline" />
          not your screen time.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#718096] leading-relaxed">
          Mainstream media apps are designed by attention economists whose sole goal is keeping you hooked. FomoNomo is designed to be closed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* The Bad Old Way Card */}
        <div className="rounded-3xl p-8 bg-white/60 border border-red-200/50 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/40 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-xl">
                  😵‍💫
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#2D3748]">
                    Infinite Doomscrolling
                  </h3>
                  <p className="text-xs text-[#718096]">Twitter, Apple News, Reddit, Feeds</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                Exhausting
              </span>
            </div>

            <ul className="space-y-4 text-sm text-[#718096] mb-8">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">Algorithms optimized for outrage:</strong> Rage-inducing headlines prioritized to spike ad impressions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">No natural end point:</strong> You scroll for 45 minutes, learn almost nothing useful, and finish feeling drained.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">Persistent anxiety:</strong> Constant fear of missing out on breaking drama leaves your mind in perpetual fight-or-flight.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">Tracking & surveillance:</strong> Every tap and pause is profiled to monetize your attention.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-center gap-3 text-xs text-red-900 font-medium">
            <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
            <span>Average user spends 94 minutes daily consuming repetitive breaking news anxiety.</span>
          </div>
        </div>

        {/* The FomoNomo Way Card */}
        <div className="glass-card rounded-3xl p-8 border border-white/90 shadow-xl relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-white/90 via-white/80 to-[#AECFD0]/20">
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#A3D6BC]/30 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#AECFD0]/40 to-[#A3D6BC]/40 border border-white flex items-center justify-center shadow-xs">
                  <Image
                    src="/mascot.png"
                    alt="FomoNomo Mascot"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#2D3748]">
                    The FOMO NOMO Antidote
                  </h3>
                  <p className="text-xs text-[#718096]">Open → Read → Done. That&apos;s it.</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#A3D6BC]/40 text-[#2D3748] border border-[#A3D6BC]/50">
                5 Mins / Day
              </span>
            </div>

            <ul className="space-y-4 text-sm text-[#718096] mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">High-signal executive synthesis:</strong> Only stories that genuinely shift industries, world events, or your interests.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">The &ldquo;Done For Today&rdquo; guarantee:</strong> Once your daily digest is finished, the app locks the feed and prompts you to live offline.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">Tailored without algorithms:</strong> You set your location, your profession, and keywords. No manipulative recommendations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#2D3748]">Mindful streak companion:</strong> Celebrate staying informed while keeping your screen time down.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-[#AECFD0]/20 border border-[#AECFD0]/40 flex items-center gap-3 text-xs text-[#2D3748] font-medium">
            <Heart className="w-5 h-5 text-[#3B82F6] shrink-0" />
            <span>FomoNomo readers save 80+ minutes daily while staying significantly better informed.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
