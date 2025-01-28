// app/page.tsx

import Image from "next/image";
import { Roboto } from "next/font/google";

/**
 * ---------------------------------------------------------------------
 * IMPORTANT: "TT Hoves" is NOT actually on public Google Fonts.
 * ---------------------------------------------------------------------
 * If you do have a private endpoint for TT Hoves on Google Fonts,
 * replace 'Roboto' with 'TTHoves' (or the correct config), e.g.:
 *
 *   import { TTHoves } from 'next/font/google';
 *   const tthoves = TTHoves({
 *     subsets: ['latin'],
 *     weight: ['400', '700'],
 *     display: 'swap',
 *   });
 *
 * ...and then use tthoves.className below.
 * Otherwise, consider local hosting or an alternative font.
 */
const tthoves = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  // You can rename the variable if you like:
  variable: "--font-tt-hoves",
});

// ─────────────────────────────────────────────────────────────────────
// 1) Navigation Bar Component
// ─────────────────────────────────────────────────────────────────────
function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 w-full">
      {/* Brand: "Maxxed" in white & "AI" in #ffcc53 */}
      <div className="text-3xl font-bold">
        <span className="text-white">Maxxed</span>
        <span style={{ color: "#ffcc53" }}>AI</span>
      </div>

      {/* Nav Links: About/Pricing on the left, Sign In on the far right */}
      <div className="flex flex-1 items-center ml-8">
        {/* Left side links */}
        <ul className="flex space-x-6 text-base">
          <li>
            <a href="#about" className="hover:opacity-80 text-white">
              About
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:opacity-80 text-white">
              Pricing
            </a>
          </li>
        </ul>

        {/* Right side (Sign In) */}
        <div className="flex flex-1 justify-end mr-3">
          <a
            href="#sign-in"
            className="border border-[#ffcc53] text-[#ffcc53] px-4 py-2 rounded hover:bg-[#ffcc53] hover:text-black mr-1"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────
// 2) Hero Section Component
// ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 pb-10"
      id="about"
    >
      {/* Left side: Big heading + CTA */}
      <div className="w-full md:w-1/2 md:mt-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Personal
          <br className="hidden sm:block" />
          Self-Improvement Coach
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mb-8">
          Take your performance, health, and appearance to the next level
          with intelligent AI feedback.
        </p>
        <a
          href="#waitlist"
          className="bg-[#ffcc53] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#ebb845] inline-block"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Right side: Phone mockup */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-1">
        <div className="relative w-full">
          <Image
            src="/phone-mock.png"
            alt="MaxxedAI mobile UI"
            width={640}
            height={1280}
            className="mx-auto scale-75"
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// 3) Pricing Section Component
// ─────────────────────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section className="px-8 py-12 bg-black" id="pricing">
      <h2 className="text-4xl font-bold text-center mb-1 text-white">
        Pricing Plan
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Elevate your looks
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* ─────────────────────────────────────────────────────────────
            A) Maxxed Basic Card
            ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col rounded-2xl bg-[#2b2b2b] text-white p-6 h-full">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Maxxed Basic</h3>
            <p className="text-4xl font-bold mb-2">FREE</p>
            <hr className="border-gray-600 mb-4" />
          </div>
          {/* Bullet Points: left aligned in a narrower container */}
          <ul className="space-y-2 text-gray-300 mb-8 w-4/5 mx-auto">
            <li className="flex items-center">
              <span className="mr-2">✔</span> Basic Access
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> 1 Free Analysis
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Access to Rating Scores
            </li>
          </ul>
          {/* Button pinned to bottom */}
          <div className="mt-auto flex justify-center">
            <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black">
              Let&apos;s Go
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            B) Maxxed Gold (Recommended)
            ───────────────────────────────────────────────────────────── */}
        <div className="relative flex flex-col rounded-2xl bg-[#ffcc53] text-black p-6 h-full">
          {/* "Recommended" label */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 text-sm font-semibold uppercase rounded-full">
            Recommended
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Maxxed Gold</h3>
            <p className="text-4xl font-bold mb-2">
              $0.99
              <span className="text-2xl font-normal ml-2">/week</span>
            </p>
            <hr className="border-gray-300 mb-4" />
          </div>
          {/* Bullet Points: left aligned in a narrower container */}
          <ul className="space-y-2 text-black mb-8 w-4/5 mx-auto">
            <li className="flex items-center">
              <span className="mr-2">✔</span> 100 Free Tokens per week
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> 2 Free Analyses per week
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Access to Weekly Planner
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Specialized Feedback Access
            </li>
          </ul>
          {/* Button pinned to bottom */}
          <div className="mt-auto flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80">
              Let&apos;s Go
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            C) Maxxed Premium
            ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col rounded-2xl border border-[#ffcc53] bg-black p-6 h-full">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Maxxed Premium
            </h3>
            <p className="text-4xl font-bold mb-2 text-white">
              $2.99
              <span className="text-2xl font-normal ml-2">/week</span>
            </p>
            <hr className="border-[#ffcc53] mb-4" />
          </div>
          {/* Bullet Points: left aligned in a narrower container */}
          <ul className="space-y-2 text-gray-300 mb-8 w-4/5 mx-auto">
            <li className="flex items-center">
              <span className="mr-2">✔</span> 200 Free Tokens per week
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> 3 Free Analyses per week
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Access to Weekly Planner
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Specialized Feedback Access
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Maxxed Trainer Access
            </li>
          </ul>
          {/* Button pinned to bottom */}
          <div className="mt-auto flex justify-center">
            <button className="border border-white bg-black text-white px-6 py-2 rounded-full hover:opacity-80">
              Let&apos;s Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// 4) Footer Component
// ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} MaxxedAI — All Rights Reserved
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────
// 5) Main Page Component
// ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main
      // Apply TT Hoves (or in this demo, Roboto) site-wide
      className={`${tthoves.variable} bg-black min-h-screen text-white w-screen`}
      style={{ fontFamily: "var(--font-tt-hoves)" }}
    >
      <div className="w-screen">
        <NavBar />
        {/* Divider between Header and Hero */}
        <hr className="border-t border-gray-700 mb-4" />
        <HeroSection />
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
}
