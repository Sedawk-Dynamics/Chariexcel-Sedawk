import { pageMetadata } from "@/lib/seo"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import ValuesSection from "@/components/values-section"

export const metadata = pageMetadata("/our-values")

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
