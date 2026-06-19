"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { end: 500, suffix: "+", label: "Professionals Trained", icon: "👥" },
  { end: 50, suffix: "+", label: "Corporate Partners", icon: "🏢" },
  { end: 7, suffix: "", label: "Training Programs", icon: "📚" },
  { end: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
]

function AnimatedCounter({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-60px" })

  return (
    <section ref={sectionRef} className="py-20 bg-[#1B2B6B] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#F5A623]/10 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-[#F5A623]/10 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-5 bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#F5A623]" />
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Our Impact</span>
            <div className="h-px w-12 bg-[#F5A623]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-dark rounded-2xl p-6 text-center group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-4xl mb-4 inline-block"
              >
                {stat.icon}
              </motion.div>
              <div className="text-[#F5A623] text-4xl md:text-5xl font-bold font-serif mb-2">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              <div className="mt-3 h-0.5 w-0 group-hover:w-full bg-[#F5A623] rounded transition-all duration-500 mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
