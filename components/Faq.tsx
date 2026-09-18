"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "When will FOMO NOMO be released?",
    a: "We are actively inviting waitlist members to our private iOS TestFlight beta in batches starting next month. Public App Store availability will follow shortly after.",
  },
  {
    q: "How does the digest personalize without creepy tracking?",
    a: "Unlike social media platforms that log your taps and mouse pauses to feed an engagement algorithm, FOMO NOMO only uses the explicit country, industry, and keyword preferences you configure in your profile. You control your briefing.",
  },
  {
    q: "Why 5 minutes? Can I read the full article if I want to?",
    a: "Yes! Every digest item includes concise bullet takeaways plus direct links to the original investigative journalism or primary sources. The 5-minute constraint is intentional: you get the core signal fast, and then the app gets out of your way.",
  },
  {
    q: "What perks do early waitlist members receive?",
    a: "All early waitlist members receive 6 months of FOMO NOMO Pro completely free upon launch, along with the exclusive 'Founder Backer' badge and priority TestFlight slots.",
  },
  {
    q: "Will there be an Android or Web version?",
    a: "We are launching iOS first with native SwiftUI widgets and offline caching. Android and Web versions are planned next in our roadmap.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#AECFD0]/30 text-[#2D3748] border border-[#AECFD0]/50 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2D3748] tracking-tight">
          Got questions? We&apos;ve got answers.
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-card rounded-2xl border border-white/80 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-display font-bold text-base text-[#2D3748]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#718096] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#3B82F6]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-[#718096] leading-relaxed border-t border-[#2D3748]/5 animate-in fade-in duration-200">
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
