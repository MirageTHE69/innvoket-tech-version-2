import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// next/font appends an Arial-based fallback face to the family list. The design
// expects symbols Inter lacks (→ ★ ✓) to come from system-ui, so expose only the
// real family and let globals.css supply the rest of the stack.
const interFamily = inter.style.fontFamily.split(",")[0];
const jakartaFamily = jakarta.style.fontFamily.split(",")[0];

export const metadata: Metadata = {
  title: "Physiotherapy Clinic Marketing in Canada | Innvoket Tech",
  description:
    "Innvoket Tech helps physio and rehab clinics in Ontario and Alberta get found on Google, answer every call and fill their schedules. Plans from $647/mo. Book a free audit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-CA"
      className={jakarta.variable}
      style={{ "--font-inter": interFamily, "--font-jakarta-only": jakartaFamily } as React.CSSProperties}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Scroll reveals start hidden and are shown by JS; keep content visible without it. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
