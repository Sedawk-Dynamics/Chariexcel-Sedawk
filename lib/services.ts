import {
  Users,
  MapPin,
  GraduationCap,
  BookOpen,
  Briefcase,
  Settings,
  Monitor,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  short: string
  description: string
  tag: string
  tagColor: string
  features: string[]
  image: string
}

export const services: Service[] = [
  {
    icon: Users,
    title: "Corporate Training & Leadership Development",
    short: "High-impact programs designed to strengthen leadership, communication, and team performance.",
    description:
      "High-impact programs designed to strengthen leadership, communication, and team performance — focused on real-world execution and measurable business outcomes. Our corporate training modules are built around your organization's specific goals.",
    tag: "Most Popular",
    tagColor: "bg-[#F5A623] text-[#1B2B6B]",
    features: ["Leadership coaching", "Team performance", "Communication skills", "Business outcomes"],
    image: "/images/hero-bg.jpg",
  },
  {
    icon: MapPin,
    title: "Goa Corporate Offsite Experiences",
    short: "Curated leadership retreats that combine experiential learning with performance-driven workshops.",
    description:
      "Curated leadership retreats that combine experiential learning, team alignment, and performance-driven workshops in a premium Goa setting. A unique blend of professional development and rejuvenation.",
    tag: "Exclusive",
    tagColor: "bg-[#1B2B6B] text-white",
    features: ["Team building", "Leadership retreats", "Goa venues", "Experiential learning"],
    image: "/images/workshop.jpg",
  },
  {
    icon: GraduationCap,
    title: "Student Development Programs",
    short: "Practical training in life skills, confidence, communication, and career readiness.",
    description:
      "Practical training in life skills, confidence, communication, and career readiness — equipping students to succeed beyond academics. Designed to create confident, capable young professionals ready for the real world.",
    tag: "",
    tagColor: "",
    features: ["Life skills", "Confidence building", "Communication", "Career readiness"],
    image: "/images/about.jpg",
  },
  {
    icon: BookOpen,
    title: "Teacher Training & Development",
    short: "Modern programs that empower educators with effective teaching strategies.",
    description:
      "Modern training programs that empower educators with effective teaching strategies, classroom management, and student engagement techniques. Building better teachers for a better tomorrow.",
    tag: "",
    tagColor: "",
    features: ["Teaching strategies", "Classroom management", "Engagement techniques", "Modern pedagogy"],
    image: "/images/hero-bg.jpg",
  },
  {
    icon: Briefcase,
    title: "Career Readiness & Skill Building",
    short: "Workshops focused on interview skills, personality development, and workplace readiness.",
    description:
      "Workshops focused on interview skills, personality development, and workplace readiness — bridging the gap between education and employment. Prepare your team or students for the competitive job market.",
    tag: "",
    tagColor: "",
    features: ["Interview prep", "Personality development", "Workplace skills", "Professional etiquette"],
    image: "/images/about.jpg",
  },
  {
    icon: Settings,
    title: "Customized Training Solutions",
    short: "Tailor-made programs designed to meet specific organizational or institutional needs.",
    description:
      "Tailor-made programs designed to meet specific organizational or institutional needs, ensuring relevant, impactful, and results-driven learning. We create solutions that fit your unique requirements perfectly.",
    tag: "Bespoke",
    tagColor: "bg-purple-500 text-white",
    features: ["Custom design", "Organizational fit", "Scalable programs", "Results-driven"],
    image: "/images/workshop.jpg",
  },
  {
    icon: Monitor,
    title: "Online Courses — Study at Your Own Pace",
    short: "All courses designed for practical application, with interactive modules and certification.",
    description:
      "All courses are designed for practical application, with interactive modules, assessments, and certification. Learn at your own pace from anywhere in the world, with expert-crafted content.",
    tag: "Coming Soon",
    tagColor: "bg-gray-100 text-gray-500",
    features: ["Self-paced learning", "Interactive modules", "Certification", "24/7 access"],
    image: "/images/about.jpg",
  },
  {
    icon: Users,
    title: "Corporate Team Building Activities",
    short: "Great teams don't happen by chance — they are built intentionally across Goa.",
    description:
      "Great teams don't happen by chance — they are built intentionally. Our team building experiences across Goa blend fun, purpose, and strategy to strengthen bonds, improve communication, and create teams that work better together every single day.",
    tag: "New",
    tagColor: "bg-[#F5A623] text-[#1B2B6B]",
    features: ["Team bonding", "Communication", "Strategy games", "Goa venues"],
    image: "/images/workshop.jpg",
  },
]
