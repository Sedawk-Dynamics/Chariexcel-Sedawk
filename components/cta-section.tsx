"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

const stats = [
  {
    num: "500+",
    title: "Professionals Trained",
    desc: "Across corporate, education, and individual programmes.",
  },
  {
    num: "50+",
    title: "Corporate Partners",
    desc: "Organizations trust us to develop their people and culture.",
  },
  {
    num: "8",
    title: "Training Offerings",
    desc: "From leadership retreats to student development and team building.",
  },
  {
    num: "100%",
    title: "Customised Solutions",
    desc: "Every programme tailored to your specific goals and context.",
  },
]

export default function CtaSection() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#FDF8F0]"
    >
      {/* Cream Background */}
      <div className="absolute inset-0 bg-[#FDF8F0]" />

      {/* Premium Navy Shape */}
      <div
        className="absolute left-0 top-0 h-full w-[60%] bg-[#1B2B6B]"
        style={{
          clipPath:
            "polygon(0 0, 88% 0, 68% 100%, 0% 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center min-h-[760px] gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={
              inView
                ? {
                  opacity: 1,
                  x: 0,
                }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            className="relative z-10 py-20 lg:py-28 max-w-[620px]"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-[#F5A623]" />

              <span className="text-[#F5A623] text-sm tracking-[0.2em] uppercase font-semibold">
                Ready To Excel Together?
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8">
              Let&apos;s Build
              <br />
              Something{" "}
              <span className="text-[#F5A623]">
                Remarkable.
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-[540px]">
              Partner with Charis Excel to design a
              transformative learning experience that
              drives real results — for your people,
              your teams, and your organization.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              {/* Primary CTA */}
              <motion.a
                href="/contact-us"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-2 px-9 py-5 rounded-2xl bg-[#F5A623] text-[#1B2B6B] font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Get In Touch
                <ArrowRight size={18} />
              </motion.a>

              {/* Phone CTA */}
              <motion.a
                href="tel:7447659025"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <Phone size={18} />
                +91 7447 659 025
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              inView
                ? {
                  opacity: 1,
                  x: 0,
                }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="flex flex-col gap-6 justify-center py-20"
          >
            {stats.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  inView
                    ? {
                      opacity: 1,
                      y: 0,
                    }
                    : {}
                }
                transition={{
                  delay: 0.2 + i * 0.1,
                }}
                whileHover={{
                  x: 8,
                }}
                className={`
                  bg-white rounded-[30px]
                  px-8 py-7
                  border border-[#ECE6DB]
                  shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  hover:shadow-[0_20px_50px_rgba(27,43,107,0.12)]
                  ${i % 2 === 1 ? "lg:ml-10" : ""}
                `}
              >
                <div className="flex items-start gap-6">
                  <div className="text-[#F5A623] text-4xl lg:text-5xl font-serif font-bold min-w-[95px]">
                    {item.num}
                  </div>

                  <div>
                    <h3 className="text-[#1B2B6B] font-bold text-xl mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}