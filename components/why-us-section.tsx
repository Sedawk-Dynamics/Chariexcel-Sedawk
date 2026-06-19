"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Target, Sliders, Wrench, Globe2, Handshake, Leaf, ArrowRight } from "lucide-react"

const reasons = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Performance, Not Just Training",
    description: "We design interventions that go beyond learning — driving measurable improvements in productivity, leadership effectiveness, and business outcomes.",
  },
  {
    number: "02",
    icon: Target,
    title: "Aligned to Business Objectives",
    description: "Every engagement is built around your goals. We connect capability development directly to performance metrics, ensuring training contributes to revenue, efficiency, and growth.",
  },
  {
    number: "03",
    icon: Sliders,
    title: "Tailored, Not Templated",
    description: "Our solutions are fully customized to your organization, your people, and your challenges — delivering relevance, precision, and higher impact.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Built on Real-World Application",
    description: "We bridge the gap between knowledge and execution. Our programs are practical, scenario-driven, and designed for immediate implementation.",
  },
  {
    number: "05",
    icon: Globe2,
    title: "Cross-Sector Expertise",
    description: "From corporate teams to educators and emerging talent, we create a seamless development ecosystem that strengthens capability at every level.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Strategic Partnership Approach",
    description: "We don't operate as vendors — we work as partners invested in your outcomes, committed to delivering long-term value.",
  },
  {
    number: "07",
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Our focus is not short-term learning, but lasting transformation — building skills, mindset, and systems that continue to perform over time.",
  },
  {
    number: "08",
    icon: Handshake,
    title: "Pre & Post-Training Support",
    description: "We provide preparation, communication, and content alignment before the programme, followed by resources, follow-up guidance, feedback review, and ongoing assistance after training to support effective application of learning.",
  },
]

export default function WhyUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="why-us" ref={ref} className="py-24 bg-[#1B2B6B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[url('/images/workshop.jpg')] bg-cover bg-center opacity-5" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl pointer-events-none"
      />

      {/* Diagonal grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#F5A623]" />
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight text-balance mb-6">
              Charis Excel believes in{" "}
              <span className="text-gold-gradient">Empowering People,</span>{" "}
              Elevating Performance &amp; Fulfilling Purpose.
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              We deliver measurable growth that goes far beyond conventional training.
              Eight reasons why organizations across Goa and beyond choose Charis Excel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/workshop.jpg"
                alt="Charis Excel corporate offsite training"
                width={500}
                height={300}
                className="w-full object-cover h-64 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B6B]/80 to-transparent rounded-2xl" />
            </div>
            <div className="absolute bottom-4 left-4 glass-dark rounded-xl px-4 py-3">
              <div className="text-[#F5A623] font-bold text-2xl font-serif">100%</div>
              <div className="text-white/70 text-xs">Customized Programs</div>
            </div>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, borderColor: "rgba(245,166,35,0.5)" }}
              className="group glass-dark rounded-2xl p-6 border border-white/10 hover:shadow-xl hover:shadow-[#F5A623]/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center group-hover:bg-[#F5A623]/25 transition-colors">
                  <reason.icon size={18} className="text-[#F5A623]" />
                </div>
                <span className="text-[#F5A623]/40 font-bold text-2xl font-serif">{reason.number}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#F5A623] transition-colors leading-snug">{reason.title}</h3>
              <p className="text-white/70 text-base leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="bg-[#F5A623] rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[#1B2B6B] text-4xl font-bold font-serif mb-2">Ready?</div>
              <p className="text-[#1B2B6B]/80 leading-relaxed mb-4">
                Let&apos;s build a partnership focused on your outcomes and growth.
              </p>
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-[#1B2B6B] text-white font-bold rounded-xl hover:bg-[#111c4e] transition-colors"
            >
              Partner With Us <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
