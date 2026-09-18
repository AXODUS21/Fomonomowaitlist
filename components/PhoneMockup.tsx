"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  RotateCcw,
  Flame,
  ArrowUpRight,
  Sun,
  Shield,
} from "lucide-react";

export default function PhoneMockup() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [mascotState, setMascotState] = useState<
    "chill" | "excited" | "sleep" | "sad"
  >("chill");

  const mascotMap = {
    chill: {
      src: "/mascot.png",
      label: "Mindful Reader",
      quote: "Ah, tranquility. 5 minutes and I know everything that actually matters.",
    },
    excited: {
      src: "/mascot-excited.png",
      label: "Digest Ready!",
      quote: "Your custom daily briefing just dropped! Zero clickbait inside.",
    },
    sleep: {
      src: "/mascot-sleep.png",
      label: "Done For Today",
      quote: "All caught up! Lock your phone and go enjoy the real world.",
    },
    sad: {
      src: "/mascot-sad.png",
      label: "Doomscrolling Trap",
      quote: "Ugh, trapped on endless feeds again... FomoNomo saves you from this.",
    },
  };

  const handleCompleteToggle = () => {
    if (!isCompleted) {
      setIsCompleted(true);
      setMascotState("sleep");
    } else {
      setIsCompleted(false);
      setMascotState("chill");
    }
  };

  return (
    <div
      id="preview"
      className="relative flex flex-col items-center justify-center py-6"
    >
      {/* Phone Frame */}
      <div className="relative w-[320px] sm:w-[350px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#2D3748] to-[#1A202C] shadow-2xl shadow-slate-900/25 border-4 border-[#2D3748]/60 transition-transform duration-500 hover:scale-[1.01]">
        {/* Hardware details: Notch / Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/50 mr-3" />
          <div className="w-2 h-2 rounded-full bg-blue-950/80" />
        </div>

        {/* Screen Bezel */}
        <div className="relative w-full h-[620px] bg-[#F4F7F6] rounded-[38px] overflow-hidden flex flex-col text-[#2D3748] select-none border border-slate-800/20">
          {/* Status Bar */}
          <div className="h-10 w-full flex items-end justify-between px-7 pb-1 text-[11px] font-bold text-[#2D3748]/80 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">5G</span>
              <div className="w-4 h-2 rounded-xs border border-[#2D3748]/70 p-0.5 flex items-center">
                <div className="w-2.5 h-full bg-[#2D3748]/90 rounded-xs" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-3 pb-3 border-b border-[#2D3748]/8 flex items-center justify-between bg-white/70 backdrop-blur-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-white shadow-2xs border border-[#AECFD0]/40 flex items-center justify-center">
                <Image
                  src="/logo-sm.png"
                  alt="FomoNomo icon"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-display font-black text-sm tracking-tight leading-none text-[#2D3748]">
                  FOMO NOMO
                </h4>
                <p className="text-[10px] font-medium text-[#718096] mt-0.5">
                  Daily Evening Digest
                </p>
              </div>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
              <Flame className="w-3 h-3 text-amber-500 fill-amber-500 animate-pulse" />
              <span>7 Day Streak</span>
            </div>
          </div>

          {/* Main App Canvas */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 relative scrollbar-none">
            {!isCompleted ? (
              <>
                {/* Greeting Banner */}
                <div className="bg-gradient-to-br from-[#AECFD0]/25 to-[#A3D6BC]/30 rounded-2xl p-3.5 border border-white/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D3748]/70 flex items-center gap-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      5 Mins Read • Curated for You
                    </span>
                    <span className="text-[10px] font-bold text-[#2D3748] bg-white/70 px-2 py-0.5 rounded-full">
                      3 Stories
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#2D3748]">
                    Here are the essential headlines you actually need to know before ending your day.
                  </p>
                </div>

                {/* Article Card 1 */}
                <div className="bg-white rounded-2xl p-3.5 border border-[#2D3748]/8 shadow-2xs space-y-2 hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#3B82F6]/10 text-[#3B82F6]">
                      Artificial Intelligence
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-[#718096]">
                      <Clock className="w-3 h-3" />
                      <span>2 min read</span>
                    </div>
                  </div>
                  <h5 className="font-display font-bold text-xs leading-snug text-[#2D3748]">
                    New Frontier Models Achieve Zero-Shot Mathematical Reasoning Breakthrough
                  </h5>
                  <ul className="text-[11px] text-[#718096] space-y-1 pl-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#3B82F6] font-bold">•</span>
                      <span>Solves high-level Olympiad geometry problems autonomously.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#3B82F6] font-bold">•</span>
                      <span>Cut compute requirements by 40% using speculative drafting.</span>
                    </li>
                  </ul>
                </div>

                {/* Article Card 2 */}
                <div className="bg-white rounded-2xl p-3.5 border border-[#2D3748]/8 shadow-2xs space-y-2 hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#10B981]/10 text-[#10B981]">
                      Global Tech & Energy
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-[#718096]">
                      <Clock className="w-3 h-3" />
                      <span>1 min read</span>
                    </div>
                  </div>
                  <h5 className="font-display font-bold text-xs leading-snug text-[#2D3748]">
                    Global Clean Power Grid Additions Outpace Expectations
                  </h5>
                  <p className="text-[11px] text-[#718096] leading-relaxed">
                    Solar and next-gen battery storage deployments set unprecedented global records, reducing industrial carbon intensity faster than projected.
                  </p>
                </div>

                {/* Finish Button */}
                <button
                  onClick={handleCompleteToggle}
                  className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs text-white bg-gradient-to-r from-[#2D3748] to-[#1A202C] hover:from-[#1A202C] hover:to-black transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A3D6BC]" />
                  <span>Mark Read & Finish Today&apos;s Digest</span>
                </button>
              </>
            ) : (
              /* Completed State: Done for today! */
              <div className="h-full flex flex-col items-center justify-center text-center p-3 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-32 h-32 relative mb-2">
                  <Image
                    src="/mascot-sleep.png"
                    alt="Mascot sleeping peacefully"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#A3D6BC]/30 text-[#2D3748] mb-2">
                  <Sparkles className="w-3 h-3 text-[#10B981]" />
                  Zero FOMO Achieved
                </div>
                <h5 className="font-display font-black text-lg text-[#2D3748] mb-1">
                  Done for today!
                </h5>
                <p className="text-xs text-[#718096] mb-4 max-w-[240px]">
                  You are completely caught up. No endless feed. Go touch grass, read a book, or relax! 🌱
                </p>

                <div className="w-full bg-white rounded-2xl p-3 border border-[#2D3748]/8 shadow-2xs mb-4 text-left">
                  <div className="flex items-center justify-between text-[11px] font-medium text-[#718096]">
                    <span>Next digest delivery</span>
                    <span className="font-bold text-[#2D3748]">Tomorrow, 7:00 AM</span>
                  </div>
                  <div className="w-full bg-[#F4F7F6] rounded-full h-1.5 mt-2">
                    <div className="bg-[#10B981] h-1.5 rounded-full w-full" />
                  </div>
                </div>

                <button
                  onClick={handleCompleteToggle}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#718096] hover:text-[#2D3748] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reopen digest</span>
                </button>
              </div>
            )}
          </div>

          {/* Bottom Bar indicator */}
          <div className="h-5 w-full flex items-center justify-center pb-1">
            <div className="w-28 h-1 bg-[#2D3748]/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Interactive Mascot Companion Widget */}
      <div className="mt-8 max-w-sm w-full glass-card rounded-2xl p-4 border border-white/80 shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 shrink-0 bg-[#AECFD0]/20 rounded-xl p-1 border border-[#AECFD0]/40 flex items-center justify-center">
            <Image
              src={mascotMap[mascotState].src}
              alt="Mascot avatar"
              width={48}
              height={48}
              className="object-contain transition-all duration-300"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D3748]">
                Mascot Mood: {mascotMap[mascotState].label}
              </span>
            </div>
            <p className="text-xs text-[#718096] italic mt-0.5 leading-snug">
              &ldquo;{mascotMap[mascotState].quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Mascot Mood Switcher Buttons */}
        <div className="mt-3 pt-2.5 border-t border-[#2D3748]/8 flex items-center justify-between gap-1.5">
          {(
            [
              { key: "chill", label: "🧘 Chill" },
              { key: "excited", label: "🥳 Excited" },
              { key: "sleep", label: "😴 Done" },
              { key: "sad", label: "🥺 FOMO" },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setMascotState(item.key);
                if (item.key === "sleep") setIsCompleted(true);
                if (item.key === "chill") setIsCompleted(false);
              }}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                mascotState === item.key
                  ? "bg-[#2D3748] text-white shadow-xs"
                  : "bg-white/80 text-[#718096] hover:bg-white hover:text-[#2D3748]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
