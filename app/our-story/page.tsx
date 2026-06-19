import type { Metadata } from "next"
import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Our Story | Charis Excel Training & Development",
  description:
    "How Charis Excel began — with one question that couldn't be ignored: Why does so much learning fail to create real change?",
}

const milestones = [
  {
    year: "The Question",
    title: "Where It All Began",
    text: "We started where every great journey does — with a question that couldn't be ignored: Why does so much learning fail to create real change? That question still drives us every single day.",
  },
  {
    year: "The Purpose",
    title: "Closing the Gap",
    text: "Charis Excel Training & Development exists to close the gap between learning and results. We craft powerful, outcome-driven experiences for organizations, educators, and individuals.",
  },
  {
    year: "The Approach",
    title: "Beyond Conventional Training",
    text: "We go beyond conventional training to create meaningful, outcome-driven learning experiences — equipping people with the skills, mindset, and strategies needed to perform, grow, and excel.",
  },
]

export default function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Our Story"
        title="A Journey Built on a"
        highlight="Single Question"
        subtitle="A premium learning and transformation company focused on building real-world skills, confidence, and leadership across Goa and beyond."
      />

      {/* Narrative */}
      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2B6B] mb-6">
            Driven by People, Performance, Purpose.
          </h2>
          <p className="text-gray-700 leading-relaxed text-xl mb-6">
            Charis Excel Training &amp; Development exists to close the gap between learning and results.
            We craft powerful, outcome-driven experiences that equip organizations, educators, and
            individuals with what it truly takes to grow, lead, and excel in a competitive world.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We started where every great journey does — with a question that couldn&apos;t be ignored:{" "}
            <em className="text-[#1B2B6B] font-semibold">
              Why does so much learning fail to create real change?
            </em>{" "}
            That question drives us every single day.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">
                Our Journey
              </span>
              <div className="section-divider" style={{ background: "linear-gradient(90deg, #F8C15A, #F5A623)" }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2B6B]">
              The Story So Far
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="flex flex-col p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#F5A623]/40 transition-all duration-300"
              >
                <span className="text-[#F5A623] text-sm font-semibold uppercase tracking-wider mb-3">
                  {m.year}
                </span>
                <h3 className="font-serif font-bold text-[#1B2B6B] text-xl mb-3">{m.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1B2B6B] to-[#2a3d8f] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Quote size={36} className="text-[#F5A623] mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed italic mb-6">
                &ldquo;Every program is designed with intent — to strengthen skills, sharpen thinking, and
                deliver measurable impact. We believe learning should not just inform, but transform.&rdquo;
              </blockquote>
              <div className="border-t border-white/20 pt-5">
                <div className="text-[#F5A623] font-semibold text-sm uppercase tracking-wider mb-1">
                  Astrid Rodrigues
                </div>
                <div className="text-white/80 text-base">Director &amp; Founder, Charis Excel</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/our-values"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1B2B6B] text-white font-semibold rounded-xl hover:bg-[#2a3d8f] transition-colors shadow-lg"
            >
              Discover Our Values <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
