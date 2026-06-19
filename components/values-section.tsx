"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Brain, Star, Shield, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We believe learning never ends. We foster a culture of curiosity, adaptability, and lifelong growth to stay relevant in an ever-changing world.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "group-hover:border-blue-400",
  },
  {
    icon: Brain,
    title: "Mindset Transformation",
    description: "We challenge limitations and empower individuals to think beyond boundaries, unlocking their true potential with confidence and claritys.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "group-hover:border-purple-400",
  },
  {
    icon: Star,
    title: "Excellence in Execution",
    description: "We are committed to delivering high-quality training that creates measurable impact in performance, professionalism, and personal growth.",
    color: "from-[#F5A623]/20 to-[#F5A623]/10",
    border: "group-hover:border-[#F5A623]",
  },
  {
    icon: Zap,
    title: "Empowerment with Purpose",
    description: "We enable corporates, educators, and students with the right skills, tools, and mindset to lead with confidence and purpose.",
    color: "from-amber-500/20 to-amber-600/10",
    border: "group-hover:border-amber-400",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description: "We uphold honesty, transparency, and strong ethical standards in every interaction, building long-term relationships with clients and learners.",
    color: "from-green-500/20 to-green-600/10",
    border: "group-hover:border-green-400",
  },
  {
    icon: Lightbulb,
    title: "Real-World Relevance",
    description: "We bridge the gap between knowledge and application by delivering practical, industry-aligned training that drives real results.",
    color: "from-orange-500/20 to-orange-600/10",
    border: "group-hover:border-orange-400",
  },
  {
    icon: Users,
    title: "Growth Through Collaboration",
    description: "We believe in the power of partnerships — working closely with organizations, educators, and learners to create meaningful and lasting impact.",
    color: "from-teal-500/20 to-teal-600/10",
    border: "group-hover:border-teal-400",
  },
]

export default function ValuesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="values" className="py-24 bg-[#FDF8F0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,166,35,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(27,43,107,0.1) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Our Values</span>
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #F8C15A, #F5A623)" }} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B2B6B] mb-4 text-balance">
            What Drives Everything We Do
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our values are not just words on a wall — they are the principles that shape every program,
            every interaction, and every outcome we create.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${value.border} cursor-default`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#1B2B6B]/8 flex items-center justify-center mb-4 group-hover:bg-[#1B2B6B]/15 transition-colors">
                  <value.icon size={22} className="text-[#1B2B6B]" />
                </div>
                <h3 className="font-semibold text-[#1B2B6B] mb-2 text-base">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
