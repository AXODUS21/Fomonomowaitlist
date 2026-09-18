"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is FOMO NOMO a monthly subscription?",
    a: "No! FOMO NOMO is built on a 'Pay Once, Own Forever' philosophy. We despise subscription fatigue as much as you do. When we launch on the App Store, you pay once and get lifetime access with zero monthly recurring charges.",
  },
  {
    q: "When will the iOS beta be available?",
    a: "We are actively inviting waitlist members to our private iOS TestFlight beta in batches. Waitlist members get priority slots before the public App Store release.",
  },
  {
    q: "How does the digest personalize without invasive tracking?",
    a: "Unlike social media platforms that track your taps and reading time to feed an addiction algorithm, FOMO NOMO only uses the explicit country, industry, and keyword preferences you configure. You control your briefing.",
  },
  {
    q: "Why 5 minutes? Can I read the full article if I want to?",
    a: "Yes! Every digest item includes concise bullet takeaways plus direct links to the original investigative journalism or primary sources. The 5-minute constraint is intentional: you get the core signal fast, and then the app gets out of your way.",
  },
  {
    q: "What perks do early waitlist members receive?",
    a: "All early waitlist members receive priority TestFlight invites, direct input on news curation categories, and locked-in early-bird pricing when the app launches on the App Store.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-8 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#AECFD0]/30 text-[#2D3748] border border-[#AECFD0]/50 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2D3748] tracking-tight">
          Got questions? We&apos;ve got answers.
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-card rounded-2xl border border-white/85 overflow-hidden transition-all duration-200 shadow-2xs"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-7 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#2D3748]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#718096] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#3B82F6]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-7 pb-6 pt-1 text-sm sm:text-base text-[#718096] leading-relaxed border-t border-[#2D3748]/5 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
