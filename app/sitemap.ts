import type { MetadataRoute } from "next"
import { seoPages, siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(seoPages).map((path) => ({
    url: siteUrl + (path === "/" ? "" : path),
  }))
}
