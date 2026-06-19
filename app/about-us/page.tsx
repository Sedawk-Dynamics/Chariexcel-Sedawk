import type { Metadata } from "next"
import Link from "next/link"
import { Target, Eye, BookOpen, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "About Us | Charis Excel Training & Development",
  description:
    "Charis Excel Training & Development exists to close the gap between learning and results — crafting outcome-driven experiences for organizations, educators, and individuals.",
}

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To break limiting mindsets and foster a culture of continuous learning — empowering organizations, educators, and students with the skills, confidence, and adaptability to excel in an ever-evolving world.",
    href: "/our-mission",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To create a world where continuous learning, confidence, and excellence become the foundation of success for every individual and organization.",
    href: "/our-vision",
  },
  {
    icon: BookOpen,
    title: "Our Values",
    text: "Learning. Mindset. Excellence. Empowerment. Integrity. — Five pillars that guide every program we design and every relationship we build.",
    href: "/our-values",
  },
]

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="About Us"
        title="Driven by People, Performance,"
        highlight="Purpose."
        subtitle="A premium learning and transformation company focused on building real-world skills, confidence, and leadership across Goa and beyond."
      />

      {/* Story */}
      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2B6B] mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed text-xl mb-6">
            Charis Excel Training &amp; Development exists to close the gap between learning and results.
            We craft powerful, outcome-driven experiences that equip organizations, educators, and
            individuals with what it truly takes to grow, lead, and excel in a competitive world.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            We started where every great journey does — with a question that couldn&apos;t be ignored:{" "}
            <em className="text-[#1B2B6B] font-semibold">
              Why does so much learning fail to create real change?
            </em>{" "}
            That question drives us every single day.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We go beyond conventional training to create meaningful, outcome-driven learning experiences.
            We empower organizations, educators, and learners with the skills, mindset, and strategies
            needed to perform, grow, and succeed.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="section-divider" />
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">
                What We Stand For
              </span>
              <div className="section-divider" style={{ background: "linear-gradient(90deg, #F8C15A, #F5A623)" }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2B6B]">
              Mission, Vision &amp; Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#F5A623]/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1B2B6B]/8 flex items-center justify-center mb-5 group-hover:bg-[#1B2B6B] transition-colors">
                  <p.icon size={24} className="text-[#1B2B6B] group-hover:text-[#F5A623] transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1B2B6B] text-xl mb-3 group-hover:text-[#F5A623] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-5 flex-1">{p.text}</p>
                <span className="inline-flex items-center gap-1.5 text-[#F5A623] font-semibold text-sm">
                  Read More <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
