import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import WhyUsSection from "@/components/why-us-section"
import TeamSection from "@/components/team-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
