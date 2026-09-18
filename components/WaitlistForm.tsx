"use client";

import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Check, Copy, Sparkles, Send, Bell, ShieldCheck, Share2 } from "lucide-react";

const TOPICS = [
  { id: "tech", label: "💻 Tech & AI" },
  { id: "world", label: "🌍 Global Stories" },
  { id: "markets", label: "📈 Markets & Startups" },
  { id: "science", label: "🧬 Science & Health" },
  { id: "culture", label: "🎨 Culture & Ideas" },
];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "tech",
    "world",
  ]);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [copied, setCopied] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(1482);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleTopic = (id: string) => {
    if (selectedTopics.includes(id)) {
      if (selectedTopics.length > 1) {
        setSelectedTopics(selectedTopics.filter((t) => t !== id));
      }
    } else {
      setSelectedTopics([...selectedTopics, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setErrorMsg("");
    setStatus("loading");

    // Simulate snappy submission
    setTimeout(() => {
      setStatus("success");
      setWaitlistNumber((prev) => prev + 1);

      // Trigger confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#AECFD0", "#A3D6BC", "#3B82F6", "#A78BFA", "#F59E0B"],
        });
      } catch {
        // Fallback gracefully if canvas unavailable
      }
    }, 600);
  };

  const copyReferral = () => {
    const link = `https://fomonomo.app/join?ref=vip-${waitlistNumber}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="waitlist" className="w-full max-w-xl mx-auto">
      {status !== "success" ? (
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border border-white/80 transition-all duration-300 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#AECFD0]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-[#A3D6BC]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header info */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D3748]">
                  TestFlight Wave 1 Access
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#AECFD0]/25 text-[#2D3748] border border-[#AECFD0]/40">
                100 Spots Available
              </span>
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#2D3748] mb-2 tracking-tight">
              Get invited before public release
            </h3>
            <p className="text-sm text-[#718096] mb-5">
              Choose your interests to customize your sample digest preview, then drop your email for VIP early onboarding.
            </p>

            {/* Digest Topic Selector */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-[#2D3748] mb-2.5 uppercase tracking-wider">
                What matters to you? (Select topics)
              </label>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((topic) => {
                  const isSelected = selectedTopics.includes(topic.id);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => toggleTopic(topic.id)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-[#2D3748] text-white border-[#2D3748] shadow-xs scale-[1.02]"
                          : "bg-white/80 text-[#718096] border-[#2D3748]/10 hover:border-[#2D3748]/30 hover:bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-[#A3D6BC]" />}
                      <span>{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    id="waitlist-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg("");
                    }}
                    placeholder="Enter your personal email..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 text-[#2D3748] placeholder:text-[#718096]/60 border border-[#2D3748]/15 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent text-sm transition-all shadow-inner"
                    disabled={status === "loading"}
                  />
                  {errorMsg && (
                    <p className="text-xs text-red-500 font-medium mt-1 pl-1">
                      {errorMsg}
                    </p>
                  )}
                </div>

                <button
                  id="waitlist-submit-btn"
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3.5 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Join VIP Waitlist</span>
                      <Send className="w-4 h-4 text-white/90" />
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between pt-2 text-xs text-[#718096]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Zero spam guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Free 6 months Pro on launch</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* Success State VIP Ticket */
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/90 animate-in fade-in zoom-in-95 duration-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A3D6BC]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Excited Mascot Badge */}
            <div className="relative w-28 h-28 shrink-0 bg-gradient-to-b from-[#AECFD0]/30 to-[#A3D6BC]/40 rounded-2xl p-2 flex items-center justify-center border border-white shadow-inner">
              <Image
                src="/mascot-excited.png"
                alt="Excited FomoNomo Mascot"
                width={100}
                height={100}
                className="object-contain animate-bounce"
              />
              <span className="absolute -bottom-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#2D3748] text-white">
                VIP # {waitlistNumber}
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#A3D6BC]/30 text-[#2D3748] border border-[#A3D6BC]/50 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                You&apos;re On The Early Access List!
              </div>
              <h3 className="font-display font-black text-2xl text-[#2D3748] mb-1">
                Welcome to the FomoNomo club.
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] mb-4">
                We sent a confirmation to <strong className="text-[#2D3748]">{email}</strong>. You will receive your TestFlight invite before our public App Store release.
              </p>

              {/* Share / Referral Box */}
              <div className="bg-white/80 rounded-2xl p-3.5 border border-[#2D3748]/10 flex flex-col sm:flex-row items-center gap-3">
                <div className="flex-1 text-xs text-[#718096] text-center sm:text-left">
                  <span className="font-bold text-[#2D3748]">Move up 50 spots:</span> Share your secret invite link with friends!
                </div>
                <button
                  type="button"
                  onClick={copyReferral}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-[#2D3748] bg-[#AECFD0]/30 hover:bg-[#AECFD0]/50 border border-[#AECFD0]/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Invite Link</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#718096]">
                <button
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="hover:underline text-[#718096] transition-colors cursor-pointer"
                >
                  ← Register another email
                </button>
                <div className="flex items-center gap-1">
                  <Share2 className="w-3 h-3 text-[#3B82F6]" />
                  <span>Priority Tier 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#718096]">
        <div className="flex items-center -space-x-2">
          {["🧑‍💻", "👩‍🔬", "👨‍🎨", "👩‍💼", "🧘‍♂️"].map((emoji, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-white border-2 border-[#F4F7F6] flex items-center justify-center text-xs shadow-xs"
            >
              {emoji}
            </div>
          ))}
        </div>
        <div className="text-center sm:text-left">
          <span className="font-bold text-[#2D3748]">1,480+</span> mindful readers waiting for the iOS launch.
        </div>
      </div>
    </div>
  );
}
