import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  Calendar,
  ExternalLink,
  Globe,
  GraduationCap,
  Heart,
  ShoppingCart,
  Smartphone,
} from 'lucide-react';

interface ProjectPortoProps {
  colors: string[];
}

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description:
      'Platform e-commerce lengkap dengan sistem inventory, payment gateway, dan dashboard admin',
    icon: ShoppingCart,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    features: [
      'Multi-vendor support',
      'Real-time inventory',
      'Payment integration',
      'Admin dashboard',
    ],
    timeline: '3 bulan',
    client: 'Retail Company',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
  },
  {
    title: 'Hospital Management System',
    category: 'Web & Mobile App',
    description:
      'Sistem manajemen rumah sakit dengan aplikasi mobile untuk dokter dan pasien',
    icon: Heart,
    technologies: ['Laravel', 'React Native', 'MySQL', 'Firebase'],
    features: [
      'Patient records',
      'Appointment booking',
      'Telemedicine',
      'Billing system',
    ],
    timeline: '4 bulan',
    client: 'Healthcare Provider',
    image: 'bg-gradient-to-br from-red-400 to-pink-500',
  },
  {
    title: 'School Management Portal',
    category: 'Web Application',
    description:
      'Portal manajemen sekolah dengan sistem akademik, keuangan, dan komunikasi',
    icon: GraduationCap,
    technologies: ['Vue.js', 'PHP', 'MySQL', 'WebRTC'],
    features: [
      'Student portal',
      'Online classes',
      'Grade management',
      'Parent communication',
    ],
    timeline: '2.5 bulan',
    client: 'Educational Institution',
    image: 'bg-gradient-to-br from-purple-400 to-indigo-500',
  },
  {
    title: 'Corporate Network Infrastructure',
    category: 'Network Solution',
    description: 'Instalasi dan konfigurasi jaringan perusahaan dengan 200+ workstations',
    icon: Building,
    technologies: ['Cisco Equipment', 'Fiber Optic', 'VLAN', 'Firewall'],
    features: [
      'Structured cabling',
      'WiFi coverage',
      'Security implementation',
      '24/7 monitoring',
    ],
    timeline: '6 minggu',
    client: 'Manufacturing Company',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Application',
    description:
      'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi',
    icon: Smartphone,
    technologies: ['Flutter', 'Firebase', 'Biometric Auth', 'Push Notifications'],
    features: [
      'Secure authentication',
      'Real-time transactions',
      'Investment tools',
      'Bill payments',
    ],
    timeline: '5 bulan',
    client: 'Financial Institution',
    image: 'bg-gradient-to-br from-blue-400 to-cyan-500',
  },
  {
    title: 'Company Website & CMS',
    category: 'Web Development',
    description: 'Website perusahaan dengan CMS custom untuk manajemen konten',
    icon: Globe,
    technologies: ['Next.js', 'Strapi CMS', 'PostgreSQL', 'Vercel'],
    features: [
      'SEO optimized',
      'Content management',
      'Multi-language',
      'Analytics integration',
    ],
    timeline: '6 minggu',
    client: 'Technology Startup',
    image: 'bg-gradient-to-br from-teal-400 to-green-500',
  },
];

export default function ProjectPortfolio({ colors }: ProjectPortoProps) {
  // Helper functions for style consistency
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;

  return (
    <section className='py-20' id='portfolio'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Portfolio Proyek</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Beberapa proyek yang telah kami selesaikan dengan sukses
          </p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: getGradientBg() }}></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <Card
                key={index}
                className='group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                <div
                  className={`relative h-48 p-6 text-white`}
                  style={{ background: getGradientBg() }}>
                  <div className='flex items-start justify-between'>
                    <div className='rounded-lg bg-white/20 p-3 backdrop-blur-sm'>
                      <ProjectIcon className='h-8 w-8' />
                    </div>
                    <Badge className='bg-white/20 text-white backdrop-blur-sm'>
                      {project.category}
                    </Badge>
                  </div>

                  <div className='absolute bottom-6 left-6 right-6'>
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <p className='mt-1 text-sm opacity-90'>{project.client}</p>
                  </div>
                </div>

                <CardContent className='p-6 space-y-4'>
                  <p className='text-sm text-muted-foreground'>{project.description}</p>

                  <div className='space-y-3'>
                    <div>
                      <h4 className='text-sm font-medium mb-2'>Technologies:</h4>
                      <div className='flex flex-wrap gap-1'>
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant='outline' className='text-xs'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className='text-sm font-medium mb-2'>Key Features:</h4>
                      <div className='space-y-1'>
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className='flex items-center gap-2 text-xs text-muted-foreground'>
                            <div className='h-1.5 w-1.5 rounded-full bg-blue-500' />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-between pt-4 border-t'>
                    <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                      <Calendar className='h-3 w-3' />
                      <span>{project.timeline}</span>
                    </div>
                    <Button size='sm' variant='outline' className='text-xs'>
                      <ExternalLink className='h-3 w-3 mr-1' />
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className='mt-12 text-center'>
          <Button size='lg' variant='outline'>
            Lihat Semua Proyek
          </Button>
        </div>
      </div>
    </section>
  );
}
