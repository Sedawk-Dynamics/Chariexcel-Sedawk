"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, Play, Sparkles } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollToAbout = () => {
    const el = document.querySelector("#about")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#111c4e]">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Corporate training session background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111c4e] via-[#111c4e]/95 to-[#111c4e]/70" />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[#2a3d8f]/40 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 left-1/3 w-64 h-64 rounded-full bg-[#F5A623]/8 blur-3xl pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-24 w-full"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 glass px-5 py-2.5 rounded-full mb-7 border border-[#F5A623]/40"
            >
              <Sparkles size={16} className="text-[#F5A623]" />
              <span className="text-[#F5A623] text-base font-bold tracking-wide">
                Premium Training &amp; Development
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance mb-6"
            >
              Where{" "}
              <span className="relative inline-block">
                <span className="text-[#F5A623]">Excellence</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#F5A623]/50 rounded origin-left"
                />
              </span>{" "}
              Is Elevated
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/85 text-lg md:text-xl leading-relaxed mb-9 max-w-xl font-sans"
            >
              We collaborate with organizations, educators, and individuals to develop skills that drive
              real impact — from stronger leadership and greater productivity to lasting business growth
              and meaningful personal transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.04, boxShadow: "0 0 34px rgba(245,166,35,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 bg-[#F5A623] hover:bg-[#D4891A] text-[#111c4e] font-bold rounded-xl transition-colors shadow-lg text-lg"
              >
                Start Your Journey <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 border border-[#F5A623]/40 text-white hover:bg-[#F5A623]/10 font-semibold rounded-xl transition-colors text-lg"
              >
                <Play size={16} className="text-[#F5A623]" /> Explore Programs
              </motion.a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:block"
            style={{ y: imageY }}
          >
            {/* Gold frame accent */}
            <div className="absolute -inset-3 rounded-[2rem] border border-[#F5A623]/30" />
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl bg-[#F5A623]/20 blur-2xl" />

            <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/about.jpg"
                alt="Charis Excel premium corporate training session"
                width={680}
                height={620}
                className="w-full h-[560px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111c4e]/70 via-transparent to-transparent" />

              {/* Floating tagline chip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl px-6 py-5 border border-[#F5A623]/30"
              >
                <div className="text-[#F5A623] text-xs font-semibold uppercase tracking-widest mb-1">
                  Our Tagline
                </div>
                <div className="font-serif text-2xl font-bold text-white">Excellence Elevated</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#F5A623] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  )
}
