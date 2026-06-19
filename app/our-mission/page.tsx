import type { Metadata } from "next"
import Link from "next/link"
import { Target, ArrowRight, CheckCircle2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Our Mission | Charis Excel Training & Development",
  description:
    "To break limiting mindsets and foster a culture of continuous learning — empowering organizations, educators, and students to excel in an ever-evolving world.",
}

const points = [
  "Break limiting mindsets and unlock real potential.",
  "Foster a culture of continuous, lifelong learning.",
  "Empower organizations, educators, and students alike.",
  "Build the skills, confidence, and adaptability to excel.",
]

export default function OurMissionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Our Mission"
        title="Empowering Growth Through"
        highlight="Continuous Learning"
        subtitle="The purpose that powers every program we design and every relationship we build."
      />

      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1B2B6B] flex items-center justify-center mb-8 shadow-lg">
            <Target size={30} className="text-[#F5A623]" />
          </div>
          <p className="font-serif text-2xl md:text-3xl text-[#1B2B6B] leading-snug mb-8">
            To break limiting mindsets and foster a culture of continuous learning — empowering
            organizations, educators, and students with the skills, confidence, and adaptability to
            excel in an ever-evolving world.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-[#E7E1D8] shadow-sm"
              >
                <CheckCircle2 size={22} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-base leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/our-vision"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1B2B6B] text-white font-semibold rounded-xl hover:bg-[#2a3d8f] transition-colors shadow-lg"
          >
            Explore Our Vision <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
