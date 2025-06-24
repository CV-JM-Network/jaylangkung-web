import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, MessageSquare, Network, Shield, Users, Wifi } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    number: '100+',
    label: 'Klien Terlayani',
    description: 'Dipercaya oleh perusahaan dari startup hingga enterprise',
  },
  {
    icon: Award,
    number: '99.9%',
    label: 'Tingkat Kepuasan',
    description: 'Komitmen kami terhadap kualitas dan kepuasan pelanggan',
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Dukungan Teknis',
    description: 'Tim support ahli siap membantu kapan saja',
  },
  {
    icon: Shield,
    number: '10+',
    label: 'Tahun Pengalaman',
    description: 'Pengalaman mendalam dalam industri teknologi',
  },
];

const serviceOverview = [
  {
    icon: MessageSquare,
    title: 'ViaChat',
    description: 'Solusi API WhatsApp Business untuk komunikasi pelanggan yang efektif',
    color: 'from-green-500 to-emerald-500',
    badge: 'Communication',
  },
  {
    icon: Wifi,
    title: 'Brainet',
    description: 'Layanan internet fiber premium dengan kecepatan hingga 10 Gbps',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Connectivity',
  },
  {
    icon: Network,
    title: 'IT Solution',
    description: 'Solusi IT komprehensif dari pengembangan aplikasi hingga infrastruktur',
    color: 'from-purple-500 to-pink-500',
    badge: 'Technology',
  },
];

export default function ServicesIntro() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Mengapa Memilih JM NETWORK?</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Kami menyediakan solusi teknologi terdepan yang dirancang khusus untuk
            mengakselerasi pertumbuhan bisnis Anda
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-teal-600'></div>
        </div>

        {/* Highlights Section */}
        <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {highlights.map((highlight, index) => {
            const HighlightIcon = highlight.icon;
            return (
              <Card
                key={index}
                className='group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                <CardContent className='p-6 text-center'>
                  <div className='mb-4 flex justify-center'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white transition-transform duration-300 group-hover:scale-110'>
                      <HighlightIcon className='h-8 w-8' />
                    </div>
                  </div>
                  <div className='text-3xl font-bold text-blue-500'>
                    {highlight.number}
                  </div>
                  <h3 className='mt-2 text-lg font-semibold'>{highlight.label}</h3>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Overview */}
        <div className='mt-20'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold'>Tiga Pilar Layanan Kami</h3>
            <p className='mt-2 text-muted-foreground'>
              Solusi terintegrasi yang saling melengkapi untuk kebutuhan teknologi bisnis
              modern
            </p>
          </div>

          <div className='mt-12 grid gap-8 lg:grid-cols-3'>
            {serviceOverview.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Card
                  key={index}
                  className='group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}
                  />
                  <CardContent className='relative p-8 text-center'>
                    <Badge className='mb-4' variant='secondary'>
                      {service.badge}
                    </Badge>
                    <div className='mb-6 flex justify-center'>
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                        <ServiceIcon className='h-10 w-10' />
                      </div>
                    </div>
                    <h4 className='mb-4 text-xl font-bold'>{service.title}</h4>
                    <p className='text-muted-foreground'>{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className='mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white lg:p-12'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold lg:text-3xl'>
              Komitmen Kami Terhadap Keunggulan
            </h3>
            <p className='mt-4 text-lg text-blue-100'>
              Setiap layanan yang kami berikan didukung oleh teknologi terdepan, tim ahli
              berpengalaman, dan komitmen untuk memberikan hasil terbaik bagi kesuksesan
              bisnis Anda.
            </p>
          </div>

          <div className='mt-8 grid gap-6 md:grid-cols-3'>
            <div className='text-center'>
              <div className='mb-3 text-2xl font-bold'>Innovation</div>
              <p className='text-sm text-blue-100'>
                Selalu menggunakan teknologi terbaru dan terdepan
              </p>
            </div>
            <div className='text-center'>
              <div className='mb-3 text-2xl font-bold'>Quality</div>
              <p className='text-sm text-blue-100'>
                Standar kualitas tinggi dalam setiap deliverable
              </p>
            </div>
            <div className='text-center'>
              <div className='mb-3 text-2xl font-bold'>Partnership</div>
              <p className='text-sm text-blue-100'>
                Membangun hubungan jangka panjang dengan klien
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
