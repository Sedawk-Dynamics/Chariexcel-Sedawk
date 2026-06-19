import type { Metadata } from "next"
import Link from "next/link"
import { Eye, ArrowRight, CheckCircle2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Our Vision | Charis Excel Training & Development",
  description:
    "To create a world where continuous learning, confidence, and excellence become the foundation of success for every individual and organization.",
}

const points = [
  "A world where learning never stops.",
  "Confidence as the foundation of every success.",
  "Excellence woven into every organization.",
  "Lasting impact for every individual we serve.",
]

export default function OurVisionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Our Vision"
        title="A Future Built on"
        highlight="Excellence"
        subtitle="The world we are working to create — one learner, one organization at a time."
      />

      <section className="py-24 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1B2B6B] flex items-center justify-center mb-8 shadow-lg">
            <Eye size={30} className="text-[#F5A623]" />
          </div>
          <p className="font-serif text-2xl md:text-3xl text-[#1B2B6B] leading-snug mb-8">
            To create a world where continuous learning, confidence, and excellence become the
            foundation of success for every individual and organization.
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
            href="/our-values"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1B2B6B] text-white font-semibold rounded-xl hover:bg-[#2a3d8f] transition-colors shadow-lg"
          >
            Discover Our Values <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
