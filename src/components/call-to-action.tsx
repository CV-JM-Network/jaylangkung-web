import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">Siap Mengubah Bisnis Anda?</h2>
        <p className="mt-4 text-lg opacity-90">
          Bergabunglah dengan ratusan perusahaan yang mempercayakan kebutuhan teknologi mereka kepada JM NETWORK
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
            <Link href="/contact">Dapatkan Konsultasi Gratis</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Link href="/services">Lihat Semua Layanan</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
