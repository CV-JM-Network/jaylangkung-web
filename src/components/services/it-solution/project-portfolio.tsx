import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  ExternalLink,
  Globe,
  Heart,
  Smartphone,
  UtilityPole,
} from 'lucide-react';

interface ProjectPortoProps {
  colors: string[];
}

const projects = [
  {
    title: 'Brainnet Staff App',
    category: 'Mobile Application',
    description:
      'Aplikasi mobile untuk manajemen staf Brainnet dengan fitur absensi dan jadwal kerja, dilengkapi dengan notifikasi real-time serta dapat melakukan operasi terkait pelanggan internet.',
    icon: Smartphone,
    technologies: ['Kotlin', 'Firebase', 'REST API', 'Push Notifications'],
    features: [
      'Real-time attendance tracking',
      'Work schedule management',
      'Customer operations',
      'Push notifications for updates',
    ],
    timeline: '3 bulan',
    client: 'Brainnet ISP',
    link: 'https://github.com/CV-JM-Network/BrainNet/tree/master/Staff',
    // image: 'bg-gradient-to-br from-green-400 to-blue-500',
  },
  {
    title: 'Korem 083 Health Management System',
    category: 'Mobile & Web Application',
    description:
      'Aplikasi mobile untuk manajemen kesehatan personel Korem 083 dengan fitur rekam medis dan survei kesehatan',
    icon: Heart,
    technologies: ['Kotlin', 'Firebase', 'REST API', 'Push Notifications'],
    features: ['Medical records management', 'Health surveys'],
    timeline: '4 bulan',
    client: 'Korem 083 BDJ Malang',
    link: 'https://github.com/CV-JM-Network/BrainNet/tree/master/Korem',
    // image: 'bg-gradient-to-br from-red-400 to-pink-500',
  },
  {
    title: 'E-Jartas',
    category: 'Mobile Application',
    description:
      'Aplikasi mobile untuk manajemen jalan dan tiang utilitas dengan fitur QR code scanning untuk laporan kerusakan',
    icon: UtilityPole,
    technologies: ['Kotlin', 'Firebase', 'REST API', 'Push Notifications'],
    features: [
      'Road and utility pole management',
      'QR code scanning for damage reports',
      'Real-time updates',
      'User-friendly interface',
    ],
    timeline: '2.5 bulan',
    client: 'Brainnet ISP',
    link: 'https://github.com/CV-JM-Network/E-Jartas',
    // image: 'bg-gradient-to-br from-purple-400 to-indigo-500',
  },
  {
    title: 'Malang 1 Data',
    category: 'Web Application',
    description:
      'Aplikasi web untuk manajemen data terpadu di Kabupaten Malang, menyediakan dashboard analitik dan laporan interaktif',
    icon: Globe,
    technologies: ['PHP', 'Laravel', 'MySQL'],
    features: [
      'Integrated data management',
      'Interactive analytics dashboard',
      'Customizable reports',
      'User-friendly interface',
    ],
    timeline: '6 minggu',
    client: 'Diskominfo Kabupaten Malang',
    // image: 'bg-gradient-to-br from-orange-400 to-red-500',
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
                            <div className='h-1.5 w-1.5 rounded-full bg-sky-500' />
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
                    {project.link && (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-sky-500 hover:text-sky-700'
                        style={{ textDecoration: 'none' }}>
                        <Button size='sm' variant='outline' className='text-xs'>
                          <ExternalLink className='h-3 w-3 mr-1' />
                          Detail
                        </Button>
                      </a>
                    )}
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
