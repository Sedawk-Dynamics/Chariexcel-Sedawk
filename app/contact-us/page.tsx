import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Charis Excel Training & Development",
  description:
    "Let's build something remarkable together. Reach out to Charis Excel Training & Development and let us understand your goals.",
}

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Light, premium header — logo palette (gold / cream / black), no blue */}
      <section className="relative overflow-hidden bg-[#FDF8F0] pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-20 right-10 w-80 h-80 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#F5A623]" />
            <span className="text-[#D4891A] text-sm font-semibold tracking-widest uppercase">Contact Us</span>
            <div className="h-px w-12 bg-[#F5A623]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1a1407] leading-tight text-balance mb-5">
            Ready to Elevate Your <span className="text-gold-gradient">Performance?</span>
          </h1>
          <p className="text-[#1a1407]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-sans">
            Let&apos;s build something remarkable together. Reach out and let us understand your goals.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
