"use client";

import {
  Compass,
  Sliders,
  Sparkles,
  Zap,
  CheckCircle,
  Clock,
  ShieldCheck,
  Smartphone,
  EyeOff,
  Coins,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "5 Minutes Flat",
    badge: "Time-Saver",
    description:
      "A complete executive digest designed to give you clarity in under 5 minutes so you can start or end your day informed without mental fatigue.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-600",
  },
  {
    icon: EyeOff,
    title: "Zero Infinite Scrolling",
    badge: "Calm By Design",
    description:
      "No recommendation rabbit holes, no suggested videos, and no bottomless feeds. Once your digest is finished, the app locks for the day.",
    color: "from-[#AECFD0]/30 to-[#A3D6BC]/30",
    iconColor: "text-emerald-600",
  },
  {
    icon: Sliders,
    title: "Tailored to Your World",
    badge: "5-Step Filter",
    description:
      "Set your country, industry, and topics of curiosity. Receive news that actually impacts your career and life, free from irrelevant noise.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Coins,
    title: "Pay Once, Own Forever",
    badge: "No Subscriptions",
    description:
      "Say goodbye to subscription fatigue. Pay once on the App Store and own the app for life, including future core updates.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Zen Mascot Companion",
    badge: "Mindful Habit",
    description:
      "A friendly companion that celebrates your mindful reading streaks, encourages you to step outside, and keeps digital overload away.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
  },
  {
    icon: Smartphone,
    title: "Native iOS Elegance",
    badge: "SwiftUI Native",
    description:
      "Buttery smooth, offline-ready, haptic-rich SwiftUI experience crafted for modern iPhones with dynamic widgets and lock-screen alerts.",
    color: "from-sky-500/20 to-cyan-500/20",
    iconColor: "text-sky-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#A3D6BC]/30 text-[#2D3748] border border-[#A3D6BC]/50 mb-4">
          <Zap className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2D3748] tracking-tight">
          Everything you need. <br />
          Nothing to keep you trapped.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#718096] leading-relaxed">
          Every feature in FOMO NOMO was built with one question: &ldquo;Does this help the reader reclaim their focus?&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <div
              key={index}
              className="glass-card rounded-[28px] p-8 sm:p-9 border border-white/85 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xs`}
                  >
                    <Icon className={`w-7 h-7 ${feat.iconColor}`} />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 text-[#2D3748] border border-[#2D3748]/10 shadow-2xs">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#2D3748] mb-3 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#718096] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2D3748]/6 flex items-center gap-1.5 text-xs font-bold text-[#10B981]">
                <CheckCircle className="w-4 h-4" />
                <span>Lifetime access</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
