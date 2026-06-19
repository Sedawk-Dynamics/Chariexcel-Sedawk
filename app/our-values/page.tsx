import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import ValuesSection from "@/components/values-section"

export const metadata: Metadata = {
  title: "Our Values | Charis Excel Training & Development",
  description:
    "The principles that shape every program, interaction, and outcome at Charis Excel — continuous learning, mindset transformation, excellence, and empowerment with purpose.",
}

export default function OurValuesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Our Values"
        title="What Drives"
        highlight="Everything We Do"
        subtitle="Our values are not just words on a wall — they are the principles that shape every program, every interaction, and every outcome we create."
      />
      <ValuesSection showHeader={false} />
      <Footer />
    </main>
  )
}
