"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Priya Naik",
    designation: "HR Manager",
    company: "Goa Tech Solutions Pvt Ltd",
    initials: "PN",
    stars: 5,
    text: "Charis Excel delivered a transformative leadership program for our management team. The sessions were practical, engaging, and the results were visible within weeks. Our team's communication and productivity improved significantly.",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Rahul Shetty",
    designation: "Principal",
    company: "Sunshine International School, Goa",
    initials: "RS",
    stars: 5,
    text: "The teacher training program organized by Charis Excel was exceptional. Our educators walked away with modern strategies they could implement immediately. Student engagement in classrooms has noticeably improved.",
    color: "from-[#F5A623] to-[#D4891A]",
  },
  {
    name: "Sunita Rao",
    designation: "Operations Director",
    company: "Coastal Hospitality Group",
    initials: "SR",
    stars: 5,
    text: "We partnered with Charis Excel for our annual leadership offsite in Goa. The experiential learning format was unlike anything we had done before — our team came back energized, aligned, and ready to perform at a higher level.",
    color: "from-green-500 to-green-600",
  },
]

const clients = [
  "Tech Startup", "Hospitality Group", "International School",
  "Healthcare Corp", "Manufacturing Co", "Retail Chain",
  "IT Services", "Education Trust",
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#F5A623] text-[#F5A623]" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  const prev = () => { setAutoplay(false); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setAutoplay(false); setCurrent((p) => (p + 1) % testimonials.length) }

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-[#FDF8F0] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-10 w-4 h-4 rounded-full bg-[#F5A623]/30 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-[#1B2B6B]/20 pointer-events-none"
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
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #F8C15A, #F5A623)" }} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B2B6B] mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real results from real organizations. Here&apos;s what some of our clients have shared about their
            experience with Charis Excel.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
              >
                {/* Gradient bg accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonials[current].color}`} />
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${testimonials[current].color} opacity-5 blur-2xl`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <Quote size={36} className="text-[#F5A623]" />
                    <StarRating count={testimonials[current].stars} />
                  </div>

                  <blockquote className="font-serif text-xl md:text-2xl text-[#1B2B6B] leading-relaxed italic mb-8 text-balance">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1B2B6B]">{testimonials[current].name}</div>
                      <div className="text-gray-500 text-sm">{testimonials[current].designation}</div>
                      <div className="text-[#F5A623] text-xs font-medium">{testimonials[current].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#1B2B6B]/20 flex items-center justify-center text-[#1B2B6B] hover:bg-[#1B2B6B] hover:text-white hover:border-[#1B2B6B] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-[#F5A623]" : "w-2.5 h-2.5 bg-[#1B2B6B]/20 hover:bg-[#1B2B6B]/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#1B2B6B]/20 flex items-center justify-center text-[#1B2B6B] hover:bg-[#1B2B6B] hover:text-white hover:border-[#1B2B6B] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Clients Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">Trusted By Organizations Across Goa & Beyond</span>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#FDF8F0] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#FDF8F0] to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -50 * clients.length] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-6 py-3 bg-white rounded-xl border border-gray-100 shadow-sm text-[#1B2B6B] font-semibold text-sm whitespace-nowrap"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
