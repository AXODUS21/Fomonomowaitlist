"use client";

import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Check, Copy, Sparkles, Send, ShieldCheck, Share2, HeartHandshake } from "lucide-react";

const TOPICS = [
  { id: "tech", label: "💻 Tech & AI" },
  { id: "world", label: "🌍 Global Stories" },
  { id: "markets", label: "📈 Markets & Business" },
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

    setTimeout(() => {
      setStatus("success");
      setWaitlistNumber((prev) => prev + 1);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#AECFD0", "#A3D6BC", "#3B82F6", "#A78BFA", "#F59E0B"],
        });
      } catch {
        // graceful fallback
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
        <div className="glass-card rounded-[36px] pt-12 sm:pt-16 pb-10 sm:pb-12 px-8 sm:px-12 shadow-xl border border-white/90 transition-all duration-300 relative overflow-hidden">
          {/* Ambient blur */}
          <div className="absolute -right-20 -top-20 w-52 h-52 bg-[#AECFD0]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-52 h-52 bg-[#A3D6BC]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Header badges & title (centered in card) */}
            <div className="text-center space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#2D3748]/10 text-xs font-bold text-[#2D3748] shadow-xs">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                  </span>
                  <span>iOS TestFlight Beta</span>
                </div>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#A3D6BC]/35 text-[#2D3748] border border-[#A3D6BC]/60 text-xs font-bold shadow-xs">
                  Pay Once • Own Forever
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#2D3748] tracking-tight">
                Join the Early Access List
              </h3>
              <p className="text-sm text-[#718096] leading-relaxed max-w-md mx-auto">
                Be the first to get the private iOS TestFlight build and lock in our early-backer launch discount.
              </p>
            </div>

            {/* Digest Topic Selector */}
            <div>
              <label className="block text-xs font-bold text-[#2D3748] mb-3 uppercase tracking-wider">
                Select your digest preferences
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {TOPICS.map((topic) => {
                  const isSelected = selectedTopics.includes(topic.id);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => toggleTopic(topic.id)}
                      className={`text-xs font-semibold px-3.5 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-[#2D3748] text-white border-[#2D3748] shadow-xs scale-[1.02]"
                          : "bg-white/80 text-[#718096] border-[#2D3748]/10 hover:border-[#2D3748]/30 hover:bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#A3D6BC]" />}
                      <span>{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row gap-3">
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
                    className="w-full px-5 py-4 rounded-2xl bg-white/95 text-[#2D3748] placeholder:text-[#718096]/60 border border-[#2D3748]/15 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-transparent text-sm transition-all shadow-inner"
                    disabled={status === "loading"}
                  />
                  {errorMsg && (
                    <p className="text-xs text-red-500 font-medium mt-1.5 pl-1">
                      {errorMsg}
                    </p>
                  )}
                </div>

                <button
                  id="waitlist-submit-btn"
                  type="submit"
                  disabled={status === "loading"}
                  className="px-7 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A78BFA] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get Early Access</span>
                      <Send className="w-4 h-4 text-white/90" />
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees with NO PRO PROMISES */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-[#718096]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>No spam. Ever.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#3B82F6]" />
                  <span>One-time purchase • No subscriptions</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* Success State VIP Ticket */
        <div className="glass-card rounded-[36px] pt-12 sm:pt-16 pb-10 sm:pb-12 px-8 sm:px-12 shadow-2xl border border-white/90 animate-in fade-in zoom-in-95 duration-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#A3D6BC]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Excited Mascot Badge */}
            <div className="relative w-32 h-32 shrink-0 bg-gradient-to-b from-[#AECFD0]/30 to-[#A3D6BC]/40 rounded-2xl p-3 flex items-center justify-center border border-white shadow-inner">
              <Image
                src="/mascot-excited.png"
                alt="Excited FomoNomo Mascot"
                width={110}
                height={110}
                className="object-contain animate-bounce"
              />
              <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#2D3748] text-white shadow-xs">
                VIP # {waitlistNumber}
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#A3D6BC]/30 text-[#2D3748] border border-[#A3D6BC]/50">
                <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                You&apos;re On The Early Access List!
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#2D3748]">
                Welcome to FOMO NOMO.
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Confirmation sent to <strong className="text-[#2D3748]">{email}</strong>. You will receive an invitation to download our iOS TestFlight build before public release.
              </p>

              {/* Share / Referral Box */}
              <div className="bg-white/90 rounded-2xl p-4 border border-[#2D3748]/10 flex flex-col sm:flex-row items-center gap-3.5 mt-4">
                <div className="flex-1 text-xs text-[#718096] text-center sm:text-left">
                  <span className="font-bold text-[#2D3748]">Share with friends:</span> Help spread the anti-doomscrolling movement!
                </div>
                <button
                  type="button"
                  onClick={copyReferral}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-[#2D3748] bg-[#AECFD0]/30 hover:bg-[#AECFD0]/50 border border-[#AECFD0]/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Invite Link</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#718096]">
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
                  <Share2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Early Backer Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof with generous breathing room */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 text-xs text-[#718096]">
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
