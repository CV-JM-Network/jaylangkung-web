import CallToAction from "@/components/call-to-action"
import Hero from "@/components/hero"
import ServicesOverview from "@/components/services-overview"
import Testimonials from "@/components/testimonials"
import WhyChooseUs from "@/components/why-choose-us"

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
