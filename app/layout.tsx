import type { Metadata, Viewport } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fomonomo.app"),
  title: "FOMO NOMO — Never miss out again | Daily Curated News Digest",
  description:
    "Break free from endless doomscrolling. FOMO NOMO delivers one calm, personalized 5-minute daily news briefing. Open → Read → Done. That's it.",
  keywords: [
    "FOMO NOMO",
    "news digest",
    "anti doomscrolling",
    "curated news",
    "mindful media",
    "waitlist",
    "iOS news app",
  ],
  authors: [{ name: "Lumivor" }],
  openGraph: {
    title: "FOMO NOMO — Never miss out again",
    description:
      "One 5-minute personalized news briefing. No endless feeds. No doomscrolling. Open, read, done.",
    siteName: "FOMO NOMO",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FOMO NOMO App Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOMO NOMO — Never miss out again",
    description:
      "One 5-minute personalized news briefing. No endless feeds. No doomscrolling.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo-sm.png",
    apple: "/logo-sm.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F7F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${jakarta.variable} h-full antialiased selection:bg-[#AECFD0]/30 selection:text-[#2D3748]`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F4F7F6] text-[#2D3748]">
        {children}
      </body>
    </html>
  );
}

