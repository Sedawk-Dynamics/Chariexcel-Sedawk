import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import ServicesGrid from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Our Services | Charis Excel Training & Development",
  description:
    "Explore Charis Excel's full range of training programs — corporate leadership, Goa offsites, student development, teacher training, career readiness, team building, and more.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Our Services"
        title="Training Programs Designed for"
        highlight="Real Impact"
        subtitle="From leadership retreats to student development — every program is built to deliver measurable results and lasting transformation."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGrid />

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4 text-lg">Looking for something tailored to your specific needs?</p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B2B6B] text-white font-semibold rounded-xl hover:bg-[#2a3d8f] transition-colors shadow-lg text-lg"
            >
              Request a Custom Solution <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
