"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 7447659025", "+91 7447659025 (WhatsApp)"],
    href: "tel:7447659025",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["contact@charisexl.com", "corporate@charisexl.com"],
    href: "mailto:contact@charisexl.com",
  },
  {
    icon: MapPin,
    title: "Our Offices",
    lines: ["South Goa — Assolna, Salcete", "North Goa — Mapusa"],
    href: "https://maps.app.goo.gl/m3odVDVAqPGJGX7U6",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon–Sat: 9:00 AM – 6:00 PM", "Sunday: By Appointment"],
    href: null,
  },
]

export default function ContactForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organization: "", service: "", message: "",
  })

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!form.name.trim()) newErrors.name = "Full Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format"
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required"
    if (!form.organization.trim()) newErrors.organization = "Organization is required"
    if (!form.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm({ name: "", email: "", phone: "", organization: "", service: "", message: "" })
    setErrors({})
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const inputBase =
    "bg-[#FDF8F0] border text-[#1a1407] placeholder:text-[#1a1407]/40 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 transition-all"

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Warm accents */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F5A623]/10 blur-3xl pointer-events-none"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#F5A623]/5 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <h2 className="font-serif text-3xl font-bold text-[#1a1407] mb-1">Get in Touch</h2>
            <p className="text-[#1a1407]/60 text-lg leading-relaxed mb-2">
              Reach out and let us understand your goals. We&apos;ll get back to you within 24 hours.
            </p>
            {contactInfo.map((item, i) => {
              const inner = (
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623]/25 transition-colors">
                    <item.icon size={20} className="text-[#D4891A]" />
                  </div>
                  <div>
                    <div className="text-[#1a1407]/50 text-xs font-semibold uppercase tracking-wider mb-1">
                      {item.title}
                    </div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-[#1a1407] font-medium text-base leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="bg-[#FDF8F0] border border-[#F5A623]/15 rounded-2xl p-5 group shadow-sm"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 border border-[#F5A623]/20 shadow-[0_20px_60px_rgba(245,166,35,0.10)]"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={64} className="text-[#F5A623] mb-6" />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-[#1a1407] mb-3">Message Sent!</h3>
                <p className="text-[#1a1407]/60 leading-relaxed max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-[#F5A623] text-[#D4891A] rounded-xl hover:bg-[#F5A623] hover:text-white transition-colors font-semibold text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-[#1a1407] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1a1407]/60 text-xs font-semibold uppercase tracking-wider" htmlFor="name">Full Name *</label>
                      <input
                        id="name" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className={`${inputBase} ${errors.name ? "border-red-400" : "border-[#F5A623]/20"}`}
                      />
                      {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1a1407]/60 text-xs font-semibold uppercase tracking-wider" htmlFor="email">Email *</label>
                      <input
                        id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className={`${inputBase} ${errors.email ? "border-red-400" : "border-[#F5A623]/20"}`}
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1a1407]/60 text-xs font-semibold uppercase tracking-wider" htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`${inputBase} ${errors.phone ? "border-red-400" : "border-[#F5A623]/20"}`}
                      />
                      {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1a1407]/60 text-xs font-semibold uppercase tracking-wider" htmlFor="organization">Organization *</label>
                      <input
                        id="organization" name="organization" required value={form.organization} onChange={handleChange}
                        placeholder="Company / Institution"
                        className={`${inputBase} ${errors.organization ? "border-red-400" : "border-[#F5A623]/20"}`}
                      />
                      {errors.organization && <span className="text-red-500 text-xs">{errors.organization}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1a1407]/60 text-xs font-semibold uppercase tracking-wider" htmlFor="service">Service of Interest</label>
                    <select
                      id="service" name="service" value={form.service} onChange={handleChange}
                      className={`${inputBase} border-[#F5A623]/20 appearance-none`}
                    >
                      <option value="">Select a service</option>
                      <option value="corporate">Corporate Training & Leadership</option>
                      <option value="offsite">Goa Corporate Offsite</option>
                      <option value="student">Student Development Programs</option>
                      <option value="teacher">Teacher Training & Development</option>
                      <option value="career">Career Readiness & Skill Building</option>
                      <option value="custom">Customized Training Solutions</option>
                      <option value="teambuilding">Corporate Team Building Activities</option>
                      <option value="online">Online Courses</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1a1407]/60 text-xs font-semibold uppercase tracking-wider" htmlFor="message">Message *</label>
                    <textarea
                      id="message" name="message" required rows={4} value={form.message} onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className={`${inputBase} ${errors.message ? "border-red-400" : "border-[#F5A623]/20"} resize-none`}
                    />
                    {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F5A623] hover:bg-[#D4891A] text-white font-bold rounded-xl transition-colors shadow-lg disabled:opacity-70"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
                      />
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
