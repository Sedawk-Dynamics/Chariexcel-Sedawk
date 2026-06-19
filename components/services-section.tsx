"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { services, type Service } from "@/lib/services"
import { ServiceCard, ServiceModal } from "@/components/services-shared"

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [selected, setSelected] = useState<Service | null>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    setSnaps(emblaApi.scrollSnapList())
    onSelect(emblaApi)
    emblaApi.on("select", onSelect).on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B2B6B] via-[#F5A623] to-[#1B2B6B]" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #1B2B6B 0px, #1B2B6B 1px, transparent 0px, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #F8C15A, #F5A623)" }} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B2B6B] mb-4 text-balance">
            Training Programs Designed for <span className="text-gold-gradient">Real Impact</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            From leadership retreats to student development — every program is built to deliver measurable
            results and lasting transformation.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden -mx-3 px-3 py-3" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
                >
                  <ServiceCard service={service} onSelect={setSelected} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous services"
              className="w-11 h-11 rounded-full border border-[#1B2B6B]/20 flex items-center justify-center text-[#1B2B6B] hover:bg-[#1B2B6B] hover:text-white hover:border-[#1B2B6B] transition-all disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "w-8 h-2.5 bg-[#F5A623]" : "w-2.5 h-2.5 bg-[#1B2B6B]/20 hover:bg-[#1B2B6B]/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next services"
              className="w-11 h-11 rounded-full border border-[#1B2B6B]/20 flex items-center justify-center text-[#1B2B6B] hover:bg-[#1B2B6B] hover:text-white hover:border-[#1B2B6B] transition-all disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* View All Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B2B6B] text-white font-semibold rounded-xl hover:bg-[#2a3d8f] transition-colors shadow-lg text-lg"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
