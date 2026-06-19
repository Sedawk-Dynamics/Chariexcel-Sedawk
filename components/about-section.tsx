"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, BookOpen, Quote } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To break limiting mindsets and foster a culture of continuous learning — empowering organizations, educators, and students with the skills, confidence, and adaptability to excel in an ever-evolving world.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To create a world where continuous learning, confidence, and excellence become the foundation of success for every individual and organization.",
  },
  {
    icon: BookOpen,
    title: "Our Values",
    text: "Learning. Mindset. Excellence. Empowerment. Integrity. — Five pillars that guide every program we design and every relationship we build.",
  },
]

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "left" | "right"
}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x:
        direction === "left"
          ? -40
          : direction === "right"
            ? 40
            : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#FDF8F0] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 lg:px-10">
        {/* About Us Label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-[2px] bg-[#F5A623]" />
            <span className="text-[#F5A623] text-lg font-semibold tracking-widest uppercase">
              About Us
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Image Section */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[28px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/about.jpg"
                  alt="Corporate training session with Charis Excel"
                  width={650}
                  height={540}
                  className="w-full h-[420px] md:h-[500px] lg:h-[540px] object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B6B]/50 via-transparent to-transparent" />
              </motion.div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 right-0 md:-right-8 bg-[#1B2B6B] text-white rounded-3xl p-6 shadow-2xl max-w-sm"
              >
                <Quote
                  size={22}
                  className="text-[#F5A623] mb-3"
                />

                <p className="text-sm leading-relaxed text-white/90 italic">
                  “Learning should not just inform,
                  but transform.”
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623] text-sm font-bold">
                    AR
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      Astrid Rodrigues
                    </div>
                    <div className="text-xs text-white/60">
                      Director & Founder
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={
                  inView
                    ? {
                      opacity: 1,
                      scale: 1,
                    }
                    : {}
                }
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -left-6 bg-[#F5A623] rounded-2xl p-5 shadow-xl text-center"
              >
                <div className="text-[#1B2B6B] text-4xl font-bold font-serif">
                  1+
                </div>

                <div className="text-[#1B2B6B] text-xs font-semibold leading-tight">
                  Year of
                  <br />
                  Excellence
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right Content */}
          <div className="flex flex-col gap-7 pt-2 lg:pt-0">
            <FadeIn direction="right">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1B2B6B] leading-tight">
                Driven by{" "}
                <span className="text-[#F5A623]">
                  People, Performance,
                </span>{" "}
                Purpose.
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <p className="text-gray-700 leading-relaxed text-xl">
                Charis Excel Training &amp;
                Development exists to close the
                gap between learning and
                results. We craft powerful,
                outcome-driven experiences that
                equip organizations,
                educators, and individuals with
                what it truly takes to grow,
                lead, and excel in a competitive
                world.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <p className="text-gray-600 leading-relaxed text-lg">
                We started where every great
                journey does — with a question
                that couldn&apos;t be ignored:{" "}
                <em className="text-[#1B2B6B] font-semibold">
                  Why does so much learning fail
                  to create real change?
                </em>{" "}
                That question drives us every
                single day.
              </p>
            </FadeIn>

            {/* Cards */}
            {/* <div className="flex flex-col gap-5 pt-2">
              {pillars.map((p, i) => (
                <FadeIn
                  key={p.title}
                  direction="right"
                  delay={0.3 + i * 0.1}
                >
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    className="flex gap-4 p-5 rounded-2xl border border-[#E7E1D8] bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#1B2B6B]/10 flex items-center justify-center">
                      <p.icon
                        size={24}
                        className="text-[#1B2B6B]"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1B2B6B] text-xl mb-1">
                        {p.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-base">
                        {p.text}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}