import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
