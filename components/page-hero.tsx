"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string
  title: string
  highlight?: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#111c4e] pt-32 pb-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-15" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-10 w-80 h-80 rounded-full bg-[#F5A623]/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-sm text-white/50 mb-6"
        >
          <Link href="/" className="hover:text-[#F5A623] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#F5A623]">{eyebrow}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#F5A623]" />
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight text-balance mb-5">
            {title}
            {highlight && <span className="text-gold-gradient"> {highlight}</span>}
          </h1>
          {subtitle && (
            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl font-sans">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
