import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content:
      "Solusi ViaChat dari JM NETWORK telah mengubah layanan pelanggan kami. Kami melihat peningkatan kepuasan pelanggan sebesar 300%.",
    author: "Sarah Johnson",
    position: "CEO, Digital Marketing Pro",
  },
  {
    content:
      "Layanan internet Brainet sangat andal. Tidak ada waktu henti dalam setahun terakhir untuk bisnis e-commerce kami.",
    author: "Michael Chen",
    position: "CTO, OnlineStore Inc.",
  },
  {
    content:
      "Solusi jaringan mereka membantu kami berkembang dari 50 menjadi 500 karyawan dengan mulus. Keahlian yang luar biasa!",
    author: "David Rodriguez",
    position: "Direktur IT, GrowthTech",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">Apa Kata Klien Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground">Dipercaya oleh bisnis di seluruh dunia</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <blockquote className="mb-4 text-lg italic">&quot;{testimonial.content}&quot;</blockquote>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
