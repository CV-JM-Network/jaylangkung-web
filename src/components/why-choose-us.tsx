import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Globe, Headphones, Rocket, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Inovasi Utama",
    description: "Solusi teknologi mutakhir yang membuat Anda selalu unggul dari kompetisi",
  },
  {
    icon: Shield,
    title: "Keamanan Enterprise",
    description: "Protokol keamanan tingkat bank yang melindungi data dan komunikasi Anda",
  },
  {
    icon: Headphones,
    title: "Dukungan 24/7",
    description: "Dukungan teknis sepanjang waktu dari tim ahli kami",
  },
  {
    icon: TrendingUp,
    title: "Solusi Terukur",
    description: "Kembangkan bisnis Anda dengan solusi yang tumbuh sesuai kebutuhan Anda",
  },
  {
    icon: DollarSign,
    title: "Hemat Biaya",
    description: "Nilai maksimal dengan harga kompetitif dan tanpa biaya tersembunyi",
  },
  {
    icon: Globe,
    title: "Jangkauan Global",
    description: "Cakupan layanan di seluruh dunia dengan kehadiran dukungan lokal",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">Mengapa Memilih JM NETWORK?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rasakan perbedaan dengan pendekatan inovatif dan komitmen kami terhadap keunggulan
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <feature.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
