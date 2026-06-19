"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import type { Service } from "@/lib/services"

export function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
      >
        <div className="relative h-56 overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B6B]/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-6">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623] flex items-center justify-center mb-2">
              <service.icon size={22} className="text-[#1B2B6B]" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold text-[#1B2B6B] mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-5">{service.description}</p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-base text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                {f}
              </div>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B2B6B] text-white font-semibold rounded-xl hover:bg-[#2a3d8f] transition-colors"
          >
            Enquire About This Program <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServiceCard({
  service,
  onSelect,
}: {
  service: Service
  onSelect: (s: Service) => void
}) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      onClick={() => onSelect(service)}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#F5A623]/40 transition-all duration-300 cursor-pointer overflow-hidden h-full"
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at top-right, rgba(245, 166, 35, 0.05), transparent 60%)" }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#F5A623] via-[#f8c15a] to-[#1B2B6B] transition-all duration-500" />
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full bg-gradient-to-b from-[#F5A623] to-transparent transition-all duration-500" />

      <div className="p-7 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-xl bg-[#1B2B6B]/8 flex items-center justify-center group-hover:bg-[#1B2B6B] transition-all duration-300 shadow-sm group-hover:shadow-md"
          >
            <service.icon size={24} className="text-[#1B2B6B] group-hover:text-[#F5A623] transition-colors duration-300" />
          </motion.div>
          {service.tag && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.tagColor} shadow-sm`}>
              {service.tag}
            </span>
          )}
        </div>

        <h3 className="font-serif font-bold text-[#1B2B6B] text-xl mb-2 leading-snug group-hover:text-[#F5A623] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">{service.short}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.features.slice(0, 2).map((f) => (
            <span
              key={f}
              className="text-sm bg-[#FDF8F0] text-[#1B2B6B] px-3 py-1 rounded-full font-medium hover:bg-[#F5A623]/10 transition-all"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[#F5A623] text-base font-semibold">
          <span className="group-hover:text-[#1B2B6B] transition-colors">Learn More</span>
          <ArrowRight size={16} className="group-hover:text-[#1B2B6B] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  )
}
