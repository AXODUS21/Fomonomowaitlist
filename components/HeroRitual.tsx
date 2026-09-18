"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Lock,
  Compass,
} from "lucide-react";

export default function HeroRitual() {
  const [activeTab, setActiveTab] = useState<"digest" | "done">("done");
  const [mascotMood, setMascotMood] = useState<"chill" | "excited" | "sleep">(
    "chill"
  );

  const moodData = {
    chill: {
      image: "/mascot.png",
      title: "Peaceful & Informed",
      quote: "5 minutes and I know everything that actually matters.",
    },
    excited: {
      image: "/mascot-excited.png",
      title: "Digest Ready!",
      quote: "Your personalized news briefing just dropped. Zero filler inside.",
    },
    sleep: {
      image: "/mascot-sleep.png",
      title: "Done For Today",
      quote: "You missed nothing. Put your phone down and go enjoy life.",
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
      {/* The Core Ritual Card */}
      <div className="glass-card rounded-[36px] pt-12 sm:pt-16 pb-10 sm:pb-12 px-8 sm:px-12 border border-white/90 shadow-xl relative overflow-hidden bg-gradient-to-br from-white/90 via-white/80 to-[#AECFD0]/20">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#A3D6BC]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header & Toggle */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-[#AECFD0]/40 flex items-center justify-center">
              <Image
                src="/logo-sm.png"
                alt="FOMO NOMO logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-display font-black text-sm text-[#2D3748] tracking-tight">
                The FOMO NOMO Experience
              </h4>
              <p className="text-[11px] text-[#718096]">Open → Read → Done</p>
            </div>
          </div>

          <div className="flex items-center p-1 rounded-xl bg-[#2D3748]/5 border border-[#2D3748]/10 text-xs font-bold">
            <button
              onClick={() => {
                setActiveTab("digest");
                setMascotMood("excited");
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "digest"
                  ? "bg-white text-[#2D3748] shadow-xs"
                  : "text-[#718096] hover:text-[#2D3748]"
              }`}
            >
              Daily Digest
            </button>
            <button
              onClick={() => {
                setActiveTab("done");
                setMascotMood("chill");
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "done"
                  ? "bg-white text-[#2D3748] shadow-xs"
                  : "text-[#718096] hover:text-[#2D3748]"
              }`}
            >
              Done Screen
            </button>
          </div>
        </div>

        {/* Tab 1: The Curated Digest Preview */}
        {activeTab === "digest" ? (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between text-xs text-[#718096] pb-1">
              <span className="font-bold text-[#2D3748] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                Today&apos;s 5-Minute Briefing
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#A3D6BC]/30 text-[#2D3748] font-bold text-[10px]">
                3 Key Stories
              </span>
            </div>

            {/* Digest Item 1 */}
            <div className="bg-white rounded-2xl p-4 border border-[#2D3748]/8 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-[#3B82F6] uppercase tracking-wider">
                  Technology & AI
                </span>
                <span className="text-[#718096]">2 min read</span>
              </div>
              <h5 className="font-display font-bold text-sm text-[#2D3748]">
                Frontier AI Reasoning Models Solve Complex Formal Mathematics
              </h5>
              <p className="text-xs text-[#718096] leading-relaxed">
                Autonomous system proves Olympiad-level geometric theorems without human guidance, cutting training compute requirements by 40%.
              </p>
            </div>

            {/* Digest Item 2 */}
            <div className="bg-white rounded-2xl p-4 border border-[#2D3748]/8 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-[#10B981] uppercase tracking-wider">
                  Clean Energy & Industry
                </span>
                <span className="text-[#718096]">1 min read</span>
              </div>
              <h5 className="font-display font-bold text-sm text-[#2D3748]">
                Global Battery Storage Additions Set Unprecedented Record
              </h5>
              <p className="text-xs text-[#718096] leading-relaxed">
                Grid-scale battery deployments surge across Europe and the Americas, accelerating fossil-free peaking plants.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab("done");
                setMascotMood("sleep");
              }}
              className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs text-white bg-[#2D3748] hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs mt-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#A3D6BC]" />
              <span>Tap to complete digest</span>
            </button>
          </div>
        ) : (
          /* Tab 2: The Actual App's Core "Done For Today" View */
          <div className="flex flex-col items-center text-center py-4 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 transition-all duration-300">
              <Image
                src={moodData[mascotMood].image}
                alt="FomoNomo Mascot"
                fill
                className="object-contain drop-shadow-sm"
              />
            </div>

            <div className="space-y-1.5 max-w-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#A3D6BC]/30 text-[#2D3748] border border-[#A3D6BC]/50">
                <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                Zero Doomscrolling
              </div>
              <h4 className="font-display font-black text-2xl text-[#2D3748]">
                You&apos;re done for today.
              </h4>
              <p className="text-sm text-[#718096] font-medium">
                You missed nothing. Go touch grass, read a book, or relax! 🌱
              </p>
            </div>

            {/* Mascot Mood Switcher */}
            <div className="w-full pt-4 border-t border-[#2D3748]/8 flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#718096] hidden sm:inline">
                Companion Mood:
              </span>
              <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center">
                {(
                  [
                    { key: "chill", label: "🧘 Chill" },
                    { key: "excited", label: "🥳 Digest" },
                    { key: "sleep", label: "😴 Done" },
                  ] as const
                ).map((mood) => (
                  <button
                    key={mood.key}
                    onClick={() => setMascotMood(mood.key)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                      mascotMood === mood.key
                        ? "bg-[#2D3748] text-white shadow-xs"
                        : "bg-white/80 text-[#718096] hover:bg-white hover:text-[#2D3748]"
                    }`}
                  >
                    {mood.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3 Core Value Props below */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass-card rounded-2xl p-4 text-center border border-white/80 space-y-1">
          <span className="text-lg">⏱️</span>
          <h5 className="font-display font-bold text-xs text-[#2D3748]">5 Minutes</h5>
          <p className="text-[10px] text-[#718096]">Informed in one sitting</p>
        </div>

        <div className="glass-card rounded-2xl p-4 text-center border border-white/80 space-y-1">
          <span className="text-lg">🔒</span>
          <h5 className="font-display font-bold text-xs text-[#2D3748]">Feed Locks</h5>
          <p className="text-[10px] text-[#718096]">No infinite scrolling</p>
        </div>

        <div className="glass-card rounded-2xl p-4 text-center border border-white/80 space-y-1">
          <span className="text-lg">💎</span>
          <h5 className="font-display font-bold text-xs text-[#2D3748]">Pay Once</h5>
          <p className="text-[10px] text-[#718096]">No subscriptions ever</p>
        </div>
      </div>
    </div>
  );
}
