"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Heart, Award } from "lucide-react";

const MASCOTS = [
  {
    id: "zen",
    name: "Zen Nomo",
    tagline: "Your daily mindful companion",
    image: "/mascot.png",
    status: "Baseline State",
    quote:
      "Take a deep breath. 5 minutes of high-signal reading is all your brain needs today.",
    traits: ["Calm posture", "No digital stress", "Balanced perspective"],
  },
  {
    id: "excited",
    name: "Hype Nomo",
    tagline: "When your custom digest drops",
    image: "/mascot-excited.png",
    status: "Digest Arrived",
    quote:
      "Woohoo! Fresh briefing ready tailored to your world. Pure signal, zero filler!",
    traits: ["High energy", "Celebrates streaks", "First in line"],
  },
  {
    id: "sleep",
    name: "Snooze Nomo",
    tagline: "When you finish your digest",
    image: "/mascot-sleep.png",
    status: "Done For Today",
    quote:
      "All caught up! Time to close the app, go outside, or grab a coffee. See you tomorrow!",
    traits: ["Locks the feed", "Encourages offline living", "Restful sleep"],
  },
  {
    id: "sad",
    name: "Doomscroll Nomo",
    tagline: "What infinite feeds do to you",
    image: "/mascot-sad.png",
    status: "FOMO Trap (Before App)",
    quote:
      "I fell into a 2-hour comment thread argument again... Save me with FOMO NOMO!",
    traits: ["Information overload", "Sleep deprived", "Paralyzed by feeds"],
  },
];

export default function MascotShowcase() {
  const [selectedId, setSelectedId] = useState("zen");
  const current = MASCOTS.find((m) => m.id === selectedId) || MASCOTS[0];

  return (
    <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/90 shadow-xl relative overflow-hidden bg-gradient-to-br from-white/95 via-white/85 to-[#AECFD0]/20">
        {/* Ambient Blur */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#A3D6BC]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Column: Mascot Cards & Selector */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#AECFD0]/30 text-[#2D3748] border border-[#AECFD0]/50 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Meet Your Companion</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D3748] tracking-tight mb-3">
              The anti-doomscroll digital buddy.
            </h2>
            <p className="text-sm sm:text-base text-[#718096] mb-8 leading-relaxed">
              Most apps use gamification to keep you addicted. FomoNomo uses our mascot to celebrate when you log off and enjoy real life.
            </p>

            {/* Selector Grid */}
            <div className="grid grid-cols-2 gap-3">
              {MASCOTS.map((mascot) => {
                const isActive = mascot.id === selectedId;
                return (
                  <button
                    key={mascot.id}
                    onClick={() => setSelectedId(mascot.id)}
                    className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3 border ${
                      isActive
                        ? "bg-white border-[#2D3748]/30 shadow-md scale-[1.02]"
                        : "bg-white/60 border-white/80 hover:bg-white/90 hover:border-[#2D3748]/10"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F4F7F6] p-1 shrink-0 flex items-center justify-center">
                      <Image
                        src={mascot.image}
                        alt={mascot.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-[#2D3748] leading-tight">
                        {mascot.name}
                      </h4>
                      <span className="text-[10px] text-[#718096]">
                        {mascot.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Mascot Interactive Showcase */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-4 bg-gradient-to-b from-[#AECFD0]/20 to-[#A3D6BC]/20 rounded-3xl p-6 flex items-center justify-center border border-white shadow-inner">
              <Image
                key={current.id}
                src={current.image}
                alt={current.name}
                width={240}
                height={240}
                className="object-contain animate-in fade-in zoom-in-90 duration-300 drop-shadow-md"
              />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/90 text-[#2D3748] border border-[#2D3748]/10 shadow-2xs">
                {current.status}
              </span>
            </div>

            {/* Speech Bubble */}
            <div className="glass-pill max-w-md w-full p-4 rounded-2xl border border-white/90 text-left relative">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#2D3748]">
                <MessageCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{current.name} says:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#718096] italic leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {current.traits.map((trait, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#2D3748]/5 text-[#2D3748]"
                  >
                    ✓ {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
