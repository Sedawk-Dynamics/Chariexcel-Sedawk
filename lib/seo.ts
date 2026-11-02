import type { Metadata } from "next"

// One production origin for canonical URLs, sitemap and structured data.
export const siteUrl = new URL(process.env.SITE_URL || "https://charisexl.com").origin
export const siteName = "Charis Excel Training & Development"
export const seoPages = {
  "/": [
    "Corporate Training & Leadership in Goa | Charis Excel",
    "Build leadership, communication and workplace skills with Charis Excel in Goa. Explore corporate training, team building, teacher and student programs."
  ],
  "/about-us": [
    "About Us | Charis Excel",
    "Meet Charis Excel, a training and development company in Goa helping organizations, educators and students build practical skills and lasting confidence."
  ],
  "/services": [
    "Training Programs & Team Building in Goa | Charis Excel",
    "Explore corporate training, leadership development, Goa offsites, team building, teacher training, student development and career readiness programs."
  ],
  "/contact-us": [
    "Contact Us for Training in Goa | Charis Excel",
    "Contact Charis Excel to discuss corporate training, team building or education programs in Goa. Call +91 7447659025 or email contact@charisexl.com."
  ],
  "/our-story": [
    "Our Story | Charis Excel",
    "Discover the story behind Charis Excel and our purpose: closing the gap between learning and results for organizations, educators and individuals."
  ],
  "/our-mission": [
    "Our Mission | Charis Excel",
    "Our mission is to empower organizations, educators and students through continuous learning, practical skills, confidence and adaptability."
  ],
  "/our-vision": [
    "Our Vision | Charis Excel",
    "Explore Charis Excel's vision for a world where continuous learning, confidence and excellence support success for individuals and organizations."
  ],
  "/our-values": [
    "Our Values | Charis Excel",
    "Discover the values behind Charis Excel's training: continuous learning, mindset transformation, excellence, empowerment and integrity."
  ]
} as const

export function pageMetadata(path: keyof typeof seoPages): Metadata {
  const [title, description] = seoPages[path]
  const url = siteUrl + (path === "/" ? "" : path)
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName, locale: "en_IN", type: "website",
      images: [{ url: siteUrl + "/social-preview.png", width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image", title, description,
      images: [{ url: siteUrl + "/social-preview.png", alt: siteName }],
    },
  }
}

export const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  "@id": siteUrl + "/#organization",
  name: siteName,
  legalName: "Charis Excel Training and Development OPC Pvt Ltd",
  url: siteUrl, logo: siteUrl + "/logo.png",
  description: seoPages["/"][1],
  email: "contact@charisexl.com", telephone: "+917447659025",
  address: {
    "@type": "PostalAddress", addressLocality: "Assolna",
    addressRegion: "Goa", postalCode: "403701", addressCountry: "IN",
  },
}
