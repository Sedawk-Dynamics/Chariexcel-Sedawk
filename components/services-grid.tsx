"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { services, type Service } from "@/lib/services"
import { ServiceCard, ServiceModal } from "@/components/services-shared"

export default function ServicesGrid() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} onSelect={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
