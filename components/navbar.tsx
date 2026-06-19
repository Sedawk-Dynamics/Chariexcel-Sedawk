"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

type NavLink = {
  label: string
  href: string
  sub?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    sub: [
      // { label: "About Us", href: "/about-us" },
      { label: "Our Story", href: "/our-story" },
      { label: "Our Mission", href: "/our-mission" },
      { label: "Our Vision", href: "/our-vision" },
      { label: "Our Values", href: "/our-values" },
    ],
  },
  { label: "Our Services", href: "/services" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Contact Us", href: "/contact-us" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    const path = href.split("#")[0]
    return path !== "/" && pathname.startsWith(path)
  }

  const closeMenus = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-xl shadow-xl py-2 border-b border-gray-100"
            : "bg-white py-3 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 flex-shrink-0">
              <Link href="/" onClick={closeMenus} className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5VBR3gwsqgxcmJrdhg17QpE4Z5v5aU.png"
                  alt="Charis Excel Training and Development"
                  width={220}
                  height={72}
                  className="h-24 w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.sub ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                        className={`flex items-center gap-1 px-4 py-2.5 text-sm font-semibold transition-colors rounded-lg ${
                          isActive(link.href) || link.sub.some((s) => isActive(s.href))
                            ? "text-[#F5A623]"
                            : "text-[#1B2B6B] hover:text-[#F5A623]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${openDropdown === link.href ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === link.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          >
                            {link.sub.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={closeMenus}
                                className="flex items-center gap-2 px-4 py-3 text-sm text-[#1B2B6B] hover:bg-[#FDF8F0] hover:text-[#F5A623] transition-colors font-medium"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenus}
                      className={`relative block px-4 py-2.5 text-sm font-semibold transition-colors rounded-lg ${
                        isActive(link.href)
                          ? "text-[#F5A623]"
                          : "text-[#1B2B6B] hover:text-[#F5A623]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact-us"
                onClick={closeMenus}
                className="px-5 py-2.5 bg-[#1B2B6B] hover:bg-[#14204F] text-white font-semibold text-sm rounded-lg transition-colors shadow-lg"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#1B2B6B] p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden sticky top-[73px] z-40 bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <div key={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenus}
                      className="block px-4 py-3 text-[#1B2B6B] hover:text-[#F5A623] hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                  {link.sub && (
                    <div className="pl-4 flex flex-col gap-0.5 mt-1 mb-1">
                      {link.sub.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={closeMenus}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-[#F5A623] hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#F5A623]" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact-us"
                onClick={closeMenus}
                className="mt-2 px-4 py-3 bg-[#1B2B6B] text-white font-semibold rounded-lg text-center"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
