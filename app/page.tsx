"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Send, Check, Copy, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const [userSpot, setUserSpot] = useState<number | null>(null);
  const [isAlreadyJoined, setIsAlreadyJoined] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number>(500);

  // Fetch initial live count and subscribe to real-time additions
  useEffect(() => {
    const fetchInitialCount = async () => {
      try {
        const { count, error } = await supabase
          .from("waitlist")
          .select("*", { count: "exact", head: true });

        if (!error && count !== null) {
          setWaitlistCount(500 + count);
        }
      } catch {
        // graceful fallback to 500
      }
    };

    fetchInitialCount();

    // Supabase Realtime subscription
    const channel = supabase
      .channel("waitlist-realtime-counter")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "waitlist" },
        () => {
          setWaitlistCount((prev) => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to join waitlist. Please try again.");
        setStatus("idle");
        return;
      }

      setUserSpot(data.spot);
      setIsAlreadyJoined(Boolean(data.alreadyJoined));
      setStatus("success");

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#AECFD0", "#A3D6BC", "#3B82F6", "#A78BFA", "#F59E0B"],
        });
      } catch {
        // Fallback gracefully
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("idle");
    }
  };

  const copyReferral = () => {
    const link = "https://fomonomo.app";
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center bg-[#F4F7F6] text-[#2D3748] px-4 py-8 sm:py-12 overflow-hidden selection:bg-[#AECFD0]/40">
      {/* Ambient background blur blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#AECFD0]/30 blur-[130px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[15%] w-[550px] h-[550px] rounded-full bg-[#A3D6BC]/30 blur-[140px] animate-pulse-glow" />
      </div>

      {/* Top Brand Bar */}
      <header className="relative z-10 w-full max-w-xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-[#AECFD0]/40 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo-sm.png"
              alt="FOMO NOMO Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-display font-black text-xl tracking-tight text-[#2D3748]">
            FOMO<span className="text-blue-600">NOMO</span>
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/85 text-[#2D3748] border border-[#2D3748]/10 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          iOS Beta
        </span>
      </header>

      {/* Center Main Stage */}
      <main className="relative z-10 w-full max-w-xl my-auto py-8 sm:py-12 flex flex-col items-center text-center">
        {/* Animated Mascot Badge */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 transition-transform duration-300 hover:scale-105">
          <Image
            src={status === "success" ? "/mascot-excited.png" : "/mascot.png"}
            alt="FOMO NOMO Mascot"
            fill
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2D3748] tracking-tight leading-[1.08] mb-4">
          Never miss out again.
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-[#718096] leading-relaxed max-w-md mb-8">
          The anti-doomscroll daily news briefing. Open → Read → Done in 5 minutes.
        </p>

        {/* The Card with Email Input */}
        <div className="w-full">
          {status !== "success" ? (
            <div className="glass-card rounded-[32px] p-6 sm:p-8 shadow-xl border border-white/90 relative overflow-hidden">
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
                      placeholder="Enter your email address..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/95 text-[#2D3748] placeholder:text-[#718096]/60 border border-[#2D3748]/15 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 text-sm transition-all shadow-inner"
                      disabled={status === "loading"}
                      autoFocus
                    />
                    {errorMsg && (
                      <p className="text-xs text-red-500 font-medium mt-1.5 pl-1 text-left">
                        {errorMsg}
                      </p>
                    )}
                  </div>

                  <button
                    id="waitlist-submit-btn"
                    type="submit"
                    disabled={status === "loading"}
                    className="px-7 py-4 rounded-2xl font-display font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </div>

                {/* Sub-guarantee line */}
                <div className="flex items-center justify-between pt-2 px-1 text-xs text-[#718096]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Zero spam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />
                    <span>Pay once • No subscriptions</span>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="glass-card rounded-[32px] p-8 shadow-2xl border border-white/90 animate-in fade-in zoom-in-95 duration-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                {isAlreadyJoined
                  ? `You're already registered! (#${userSpot})`
                  : `You're on the list! (#${userSpot})`}
              </div>
              <h3 className="font-display font-black text-2xl text-[#2D3748] mb-2">
                {isAlreadyJoined
                  ? "Your spot is confirmed."
                  : "You're on the waitlist!"}
              </h3>
              <p className="text-sm text-[#718096] mb-5 max-w-sm mx-auto">
                We&apos;ve registered <strong className="text-[#2D3748]">{email}</strong>. We&apos;ll send your launch discount code to your inbox as soon as FOMO NOMO goes live.
              </p>

              {/* Share */}
              <div className="bg-white/90 rounded-2xl p-3.5 border border-[#2D3748]/10 flex flex-col sm:flex-row items-center gap-3">
                <span className="text-xs text-[#718096] flex-1 text-center sm:text-left">
                  Share FOMO NOMO with friends:
                </span>
                <button
                  type="button"
                  onClick={copyReferral}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setStatus("idle");
                  setEmail("");
                  setIsAlreadyJoined(false);
                }}
                className="mt-4 text-xs text-[#718096] hover:underline cursor-pointer"
              >
                Sign up another email
              </button>
            </div>
          )}
        </div>

        {/* Live Social Proof Counter starting at 500 */}
        <div className="mt-8 flex items-center justify-center gap-2.5 text-xs text-[#718096]">
          <div className="flex items-center -space-x-1.5">
            {["🧑‍💻", "👩‍🔬", "👨‍🎨", "👩‍💼"].map((emoji, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-white border border-[#F4F7F6] flex items-center justify-center text-[10px] shadow-2xs"
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>
              <strong className="text-[#2D3748] font-bold">
                {waitlistCount.toLocaleString()}
              </strong>{" "}
              people waiting for the iOS launch
            </span>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-xl flex items-center justify-between text-xs text-[#718096]/80 pt-4">
        <span>© {new Date().getFullYear()} FOMO NOMO</span>
        <span>A project by Lumivor</span>
      </footer>
    </div>
  );
}
