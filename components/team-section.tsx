"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, CheckCircle } from "lucide-react"

export default function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const leadershipValues = [
    {
      title: "Visionary Leadership",
      description: "Driven by a clear mission to transform learning into lasting impact, our leadership team brings decades of combined experience in corporate training and organizational development.",
    },
    {
      title: "Commitment to Excellence",
      description: "Every program is designed with intent — to strengthen skills, sharpen thinking, and deliver measurable impact. We believe learning should not just inform, but transform.",
    },
    {
      title: "Strategic Partnership",
      description: "We work as extensions of your team, deeply understanding your organizational challenges and designing solutions that align with your long-term growth objectives.",
    },
    {
      title: "Continuous Innovation",
      description: "Our team constantly evolves methodologies and content to reflect the latest trends in organizational development and corporate learning.",
    },
  ]

  return (
    <section id="team" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#FDF8F0] -z-0" />
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full border border-[#1B2B6B]/5" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-[#F5A623]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Our Leadership</span>
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #F8C15A, #F5A623)" }} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B2B6B] mb-4 text-balance">
            The Minds Behind{" "}
            <span className="text-gold-gradient">Charis Excel</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
            A dedicated team of professionals committed to elevating performance and creating
            lasting impact for every organization, educator, and learner we serve.
          </p>
        </motion.div>

        {/* Founder's Vision Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#1B2B6B] to-[#2a3d8f] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5A623]/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <Quote size={32} className="text-[#F5A623] flex-shrink-0" />
              <div />
            </div>
            
            <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed italic mb-6 max-w-3xl">
              &ldquo;Every program is designed with intent — to strengthen skills, sharpen thinking, and deliver
              measurable impact. We believe learning should not just inform, but transform. It should
              create value, enhance performance, and contribute to growth that is both visible and sustainable.&rdquo;
            </blockquote>
            
            <div className="border-t border-white/20 pt-6">
              <div className="text-[#F5A623] font-semibold text-sm uppercase tracking-wider mb-1">Astrid Rodrigues</div>
              <div className="text-white/80 text-base">Director & Founder, Charis Excel</div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Philosophy Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {leadershipValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#F5A623]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle size={20} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                <h3 className="font-semibold text-[#1B2B6B] text-lg">{value.title}</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-[#FDF8F0] rounded-3xl p-8 md:p-12 border border-[#F5A623]/20"
        >
          <div className="max-w-3xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1B2B6B] mb-4">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              At Charis Excel, we are not just trainers—we are strategic partners in your growth journey. Our team combines deep industry expertise with an unwavering commitment to delivering programs that drive real, measurable results.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe that exceptional training requires more than curriculum; it requires understanding, empathy, and a genuine investment in the success of every organization and individual we work with. That&apos;s the foundation of everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
