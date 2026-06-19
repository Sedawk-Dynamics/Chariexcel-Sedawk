"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Values", href: "/our-values" },
  { label: "Our Services", href: "/services" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Our Team", href: "/#team" },
  { label: "Contact Us", href: "/contact-us" },
]

const services = [
  "Corporate Training & Leadership",
  "Goa Corporate Offsite Experiences",
  "Corporate Team Building Activities",
  "Student Development Programs",
  "Teacher Training & Development",
  "Career Readiness Workshops",
  "Customized Training Solutions",
  "Online Courses",
]

export default function Footer() {
  return (
    <footer className="bg-[#111c4e] text-white relative overflow-hidden">
      {/* Top border */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, #F5A623 0%, transparent 40%), radial-gradient(circle at 80% 20%, #2a3d8f 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1">
                  Ready to <span className="text-gold-gradient">Excel</span> Together?
                </h3>
                <p className="text-white/50">Transform your organization&apos;s potential into measurable performance.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact-us"
                    className="inline-block px-6 py-3 bg-[#F5A623] hover:bg-[#D4891A] text-[#111c4e] font-bold rounded-xl transition-colors text-sm"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:7447659025"
                  whileHover={{ scale: 1.04 }}
                  className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl transition-colors text-sm flex items-center gap-2"
                >
                  <Phone size={14} /> Call Now
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl px-4 py-2 inline-block mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5VBR3gwsqgxcmJrdhg17QpE4Z5v5aU.png"
                  alt="Charis Excel Training and Development"
                  width={180}
                  height={58}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                A premium learning and transformation company focused on building real-world skills, confidence,
                and leadership across Goa and beyond.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:7447659025" className="flex items-center gap-2 text-white/50 hover:text-[#F5A623] text-sm transition-colors">
                  <Phone size={13} /> +91 7447659025
                </a>
                <a href="mailto:contact@charisexl.com" className="flex items-center gap-2 text-white/50 hover:text-[#F5A623] text-sm transition-colors">
                  <Mail size={13} /> contact@charisexl.com
                </a>
                <div className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                  <span>South &amp; North Goa, India</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#F5A623] text-sm transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-[#F5A623]">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h4>
              <ul className="flex flex-col gap-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-white/50 hover:text-[#F5A623] text-sm transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-[#F5A623]">›</span>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { label: "director@charisexl.com", href: "mailto:director@charisexl.com" },
                  { label: "corporate@charisexl.com", href: "mailto:corporate@charisexl.com" },
                  { label: "partnerships@charisexl.com", href: "mailto:partnerships@charisexl.com" },
                  { label: "www.charisexl.com", href: "https://www.charisexl.com" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/50 hover:text-[#F5A623] text-sm transition-colors"
                  >
                    {item.label}
                    {item.href.startsWith("http") && <ArrowUpRight size={11} />}
                  </a>
                ))}
              </div>

              {/* GST info */}
              <div className="border border-white/10 rounded-xl p-3">
                <div className="text-white/30 text-xs mb-1">Registered Company</div>
                <div className="text-white/60 text-xs font-medium">Charis Excel Training and Development OPC Pvt Ltd</div>
                <div className="text-white/30 text-xs mt-1">GST: 30AANCC6511A1ZC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Charis Excel Training and Development OPC Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/30 text-xs">
              <span>Registered Office: Assolna, South Goa — 403701</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
