"use client"; // client component
import React, { useState } from "react";
import Image from "next/image";
import { Roboto, Hammersmith_One } from "next/font/google";
import { motion } from "framer-motion";
// 1) IMPORT from react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

/**
 * 1) Load TT Hoves (stand-in: Roboto) + Hammersmith One
 */
const tthoves = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-tt-hoves",
});

const hammersmithOne = Hammersmith_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-hammersmith-one",
});

/**
 * Framer Motion variants
 */
const slideDown = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const slideLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

/**
 * 1) Top NavBar 
 *    - Vertical divider in the desktop navbar
 *    - Smooth scrolling to #about, #pricing, #sign-in using AnchorLink
 */
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-full bg-black px-4 py-4"
      variants={slideDown}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left side: Brand Logo */}
        <div className="flex items-center space-x-4">
          <div
            className={`text-2xl sm:text-3xl font-bold ${hammersmithOne.className}`}
          >
            <span className="text-white">Maxxed</span>
            <span style={{ color: "#ffcc53" }}>AI</span>
          </div>

          {/* VERTICAL DIVIDER (visible on desktop) */}
          <div className="hidden md:block border-l border-gray-700 h-6" />
        </div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-6 h-[2px] bg-white my-1"></div>
          <div className="w-6 h-[2px] bg-white my-1"></div>
          <div className="w-6 h-[2px] bg-white my-1"></div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-base">
          <AnchorLink
            href="#about"
            offset="70" // optional offset to adjust final scroll position
            className="hover:opacity-80 text-white cursor-pointer"
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#pricing"
            offset="70"
            className="hover:opacity-80 text-white cursor-pointer"
          >
            Pricing
          </AnchorLink>
          <AnchorLink
            href="#sign-in"
            offset="70"
            className="border border-[#ffcc53] text-[#ffcc53] px-4 py-2 
                       rounded-full hover:bg-[#ffcc53] hover:text-black 
                       transition-colors cursor-pointer"
          >
            Sign In
          </AnchorLink>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-3 flex flex-col space-y-3 bg-black px-2 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <AnchorLink
            href="#about"
            offset="70"
            className="text-white block border-b border-gray-700 pb-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#pricing"
            offset="70"
            className="text-white block border-b border-gray-700 pb-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </AnchorLink>
          <AnchorLink
            href="#sign-in"
            offset="70"
            className="border border-[#ffcc53] text-[#ffcc53] px-4 py-2 
                       rounded-full hover:bg-[#ffcc53] hover:text-black 
                       transition-colors text-center cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </AnchorLink>
        </motion.div>
      )}
    </motion.nav>
  );
}

/** 
 * 2) Hero Section (id="about")
 *    - The NavBar "About" links here.
 */
function HeroSection() {
  return (
    <section className="bg-black w-full px-4 py-10 md:py-16" id="about">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left side: big heading + CTA */}
        <motion.div
          className="w-full md:w-1/2 md:pr-6"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 ${hammersmithOne.className}`}
          >
            Your Personal 
            <br className="hidden sm:block" />
            Self-Improvement Coach
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-lg">
            Take your performance, health, and appearance to the next level
            with intelligent AI feedback.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-[#ffcc53] 
                       text-black font-semibold rounded-full 
                       hover:bg-[#ebb845] transition-colors"
          >
            Join the Waitlist
          </a>
        </motion.div>

        {/* Right side: phone mockup */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-sm">
            <Image
              src="/phone-mock.png"
              alt="MaxxedAI mobile UI"
              width={640}
              height={1280}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * 3) Pricing Section (id="pricing")
 *    - The NavBar "Pricing" links here.
 */
const slideUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideUpItem = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function PricingSection() {
  return (
    <motion.section
      className="w-full bg-black px-4 py-12"
      id="pricing"
      variants={slideUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-1 text-white"
          variants={slideDown}
          transition={{ duration: 0.8 }}
        >
          Pricing Plan
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-10 text-sm sm:text-base"
          variants={slideDown}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Elevate your looks
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* A) Maxxed Basic */}
          <motion.div
            className="flex flex-col rounded-2xl bg-[#2b2b2b] text-white p-6 h-full"
            variants={slideUpItem}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Maxxed Basic</h3>
              <p className="text-4xl font-bold mb-2">FREE</p>
              <hr className="border-gray-600 mb-4" />
            </div>
            <ul className="space-y-2 text-gray-300 mb-8 w-4/5 mx-auto text-sm sm:text-base">
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
            <div className="mt-auto flex justify-center">
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                Let&apos;s Go
              </button>
            </div>
          </motion.div>

          {/* B) Maxxed Gold (Recommended) */}
          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#ffcc53] text-black p-6 h-full"
            variants={slideUpItem}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 text-sm font-semibold uppercase rounded-full">
              Recommended
            </div>
            <div className="mt-0 text-center">
              <h3 className="text-lg font-semibold mb-2">Maxxed Gold</h3>
              <p className="text-4xl font-bold mb-2">
                $0.99
                <span className="text-2xl font-normal ml-2">/week</span>
              </p>
              <hr className="border-gray-300 mb-4" />
            </div>
            <ul className="space-y-2 text-black mb-8 w-4/5 mx-auto text-sm sm:text-base">
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
            <div className="mt-auto flex justify-center">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-opacity">
                Let&apos;s Go
              </button>
            </div>
          </motion.div>

          {/* C) Maxxed Premium */}
          <motion.div
            className="flex flex-col rounded-2xl border border-[#ffcc53] bg-black p-6 h-full"
            variants={slideUpItem}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
            <ul className="space-y-2 text-gray-300 mb-8 w-4/5 mx-auto text-sm sm:text-base">
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
            <div className="mt-auto flex justify-center">
              <button className="border border-white bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition-opacity">
                Let&apos;s Go
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}




function Footer() {
  return (
    <motion.footer
      className="py-6 text-center text-xs sm:text-sm text-gray-500 bg-black"
      variants={slideUpItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      © {new Date().getFullYear()} MaxxedAI — All Rights Reserved
    </motion.footer>
  );
}

/** 
 * 6) Main Page
 */
export default function HomePage() {
  return (
    <main
      className={`${tthoves.variable} ${hammersmithOne.variable} bg-black min-h-screen text-white`}
      style={{ fontFamily: "var(--font-tt-hoves)" }}
    >
      {/* NavBar */}
      <NavBar />

      {/* Divider below NavBar */}
      <hr className="border-t border-gray-700 mx-auto w-full" />

      {/* Hero section */}
      <HeroSection />

      {/* Pricing */}
      <PricingSection />

     

      {/* Footer */}
      <Footer />
    </main>
  );
}
