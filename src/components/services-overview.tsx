import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, Code, MessageSquare, Wifi } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: MessageSquare,
    title: 'ViaChat',
    subtitle: 'Penyedia Teknologi API WhatsApp',
    description:
      'Integrasikan pesan WhatsApp ke dalam aplikasi Anda dengan mulus menggunakan solusi API kami yang canggih. Aktifkan pesan otomatis, dukungan media lengkap, dan analitik komprehensif.',
    features: [
      'Kemampuan pesan real-time',
      'Integrasi chatbot otomatis',
      'Dukungan multi-bahasa',
      'Dashboard analitik canggih',
    ],
    href: '/services/viachat',
  },
  {
    icon: Wifi,
    title: 'Brainnet',
    subtitle: 'Penyedia Layanan Internet Premium',
    description:
      'Rasakan konektivitas internet super cepat dengan layanan ISP premium kami. Solusi yang andal, aman, dan dapat diskalakan untuk rumah dan bisnis.',
    features: [
      'Internet serat optik kecepatan tinggi',
      'Paket data tanpa batas',
      'Dukungan teknis 24/7',
      'Keamanan tingkat perusahaan',
    ],
    href: '/services/brainnet',
  },
  {
    icon: Code,
    title: 'IT Solution',
    subtitle: 'Solusi TI Komprehensif',
    description:
      'Layanan IT lengkap mulai dari pengembangan aplikasi web/mobile, solusi jaringan (instalasi tiang utilitas, maintenance server), hingga konsultasi teknologi untuk transformasi digital bisnis Anda.',
    features: [
      'Pengembangan aplikasi web & mobile',
      'Instalasi & maintenance server',
      'Konsultasi teknologi & transformasi digital',
      'Solusi jaringan & infrastruktur TI',
    ],
    href: '/services/it-solution',
  },
];

export default function ServicesOverview() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Layanan Premium Kami</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Solusi teknologi komprehensif yang dirancang untuk memberdayakan bisnis Anda
          </p>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-3'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <CardHeader>
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-600 text-white'>
                  <service.icon className='h-8 w-8' />
                </div>
                <CardTitle className='text-xl'>{service.title}</CardTitle>
                <CardDescription className='font-semibold text-blue-600'>
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-muted-foreground'>{service.description}</p>
                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center gap-2 text-sm'>
                      <Check className='h-4 w-4 text-green-500' />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant='outline' className='w-full'>
                  <Link href={service.href}>Pelajari Lebih Lanjut</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
