import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Cloud,
  Code,
  Database,
  Globe,
  HardDrive,
  Headset,
  Laptop,
  Network,
  Server,
  Settings,
  Shield,
  Smartphone,
  Wifi,
} from 'lucide-react';

interface ITServicesProps {
  colors: string[];
}

const serviceCategories = [
  {
    title: 'Pengembangan Aplikasi',
    description: 'Solusi aplikasi custom untuk web dan mobile',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    services: [
      {
        icon: Globe,
        title: 'Aplikasi Web',
        description: 'Website dinamis, web app, dan sistem manajemen custom',
        features: [
          'React/Next.js',
          'Laravel/PHP',
          'Database Integration',
          'Responsive Design',
        ],
      },
      {
        icon: Smartphone,
        title: 'Aplikasi Mobile',
        description: 'Aplikasi Android dan iOS native maupun cross-platform',
        features: ['React Native', 'Flutter', 'Native Android/iOS', 'API Integration'],
      },
      {
        icon: Database,
        title: 'Sistem Database',
        description: 'Desain dan implementasi database yang optimal',
        features: ['MySQL/PostgreSQL', 'MongoDB', 'Data Migration', 'Performance Tuning'],
      },
    ],
  },
  {
    title: 'Infrastruktur & Jaringan',
    description: 'Solusi infrastruktur IT dan jaringan komprehensif',
    icon: Network,
    color: 'from-green-500 to-emerald-500',
    services: [
      {
        icon: Server,
        title: 'Server Solutions',
        description: 'Instalasi, konfigurasi, dan maintenance server',
        features: [
          'Server Installation',
          'Cloud Migration',
          'Backup Solutions',
          'Performance Monitoring',
        ],
      },
      {
        icon: Wifi,
        title: 'Network Infrastructure',
        description: 'Instalasi tiang utilitas, kabel jaringan, dan infrastruktur',
        features: [
          'Utility Pole Installation',
          'Cable Management',
          'Network Design',
          'WiFi Solutions',
        ],
      },
      {
        icon: Shield,
        title: 'Security Solutions',
        description: 'Keamanan jaringan dan sistem informasi',
        features: [
          'Firewall Setup',
          'VPN Configuration',
          'Security Audit',
          'Threat Monitoring',
        ],
      },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Layanan cloud computing dan automation',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    services: [
      {
        icon: Cloud,
        title: 'Cloud Services',
        description: 'Migrasi dan pengelolaan cloud infrastructure',
        features: [
          'AWS/Azure/GCP',
          'Cloud Migration',
          'Auto Scaling',
          'Cost Optimization',
        ],
      },
      {
        icon: Settings,
        title: 'DevOps & Automation',
        description: 'CI/CD pipeline dan automation tools',
        features: ['Docker/Kubernetes', 'CI/CD Pipeline', 'Monitoring Tools'],
      },
      {
        icon: HardDrive,
        title: 'Data Management',
        description: 'Backup, recovery, dan data analytics solutions',
        features: [
          'Data Backup',
          'Disaster Recovery',
          'Data Analytics',
          'Business Intelligence',
        ],
      },
    ],
  },
  {
    title: 'Konsultasi & Support',
    description: 'Konsultasi teknologi dan dukungan berkelanjutan',
    icon: Laptop,
    color: 'from-orange-500 to-red-500',
    services: [
      {
        icon: Laptop,
        title: 'IT Consulting',
        description: 'Konsultasi strategis untuk transformasi digital',
        features: [
          'Digital Strategy',
          'Technology Assessment',
          'Process Optimization',
          'Change Management',
        ],
      },
      {
        icon: Headset,
        title: 'Maintenance & Support',
        description: 'Dukungan teknis dan maintenance berkelanjutan',
        features: [
          '24/7 Support',
          'Preventive Maintenance',
          'System Updates',
          'Performance Optimization',
        ],
      },
    ],
  },
];

export default function ITServices({ colors }: ITServicesProps) {
  // Helper functions for style consistency
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;

  return (
    <section className='py-20' id='services'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Layanan IT Komprehensif</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Solusi teknologi end-to-end untuk semua kebutuhan IT bisnis Anda
          </p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: getGradientBg() }}></div>
        </div>

        <div className='mt-16 space-y-16'>
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className='space-y-8'>
                <div className='text-center'>
                  <div className='flex items-center justify-center mb-4 gap-4'>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${category.color} text-white`}>
                      <CategoryIcon className='h-8 w-8' />
                    </div>
                    <div className='text-left'>
                      <h3 className='text-2xl font-bold'>{category.title}</h3>
                      <p className='mt-2 text-muted-foreground'>{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Card
                        key={serviceIndex}
                        className='group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                        <CardHeader>
                          <div
                            className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white'
                            style={{ background: getGradientBg() }}>
                            <ServiceIcon className='h-6 w-6' />
                          </div>
                          <CardTitle className='text-lg'>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                          <p className='text-sm text-muted-foreground'>
                            {service.description}
                          </p>
                          <div className='space-y-2'>
                            {service.features.map((feature, featureIndex) => (
                              <Badge
                                key={featureIndex}
                                variant='secondary'
                                className='mr-2 mb-2 text-xs bg-gray-100'>
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
