import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleX, Clock, Headphones, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

interface SupportTierProps {
  colors: string[];
}

const supportTiers = [
  {
    name: 'Basic Support',
    price: '499',
    period: 'bulan',
    description: 'Dukungan dasar untuk aplikasi dan sistem',
    icon: Clock,
    features: [
      'Email support (response 24 jam)',
      'Bug fixes untuk issues kritis',
      'Monthly system health check',
      'Basic performance monitoring',
      'Documentation updates',
      'Security patches',
    ],
    limitations: ['No phone support', 'No weekend support', 'Limited to business hours'],
    popular: false,
  },
  {
    name: 'Professional Support',
    price: '1.299',
    period: 'bulan',
    description: 'Dukungan komprehensif dengan response cepat',
    icon: Headphones,
    features: [
      'Priority email & phone support',
      'Response time 4 jam untuk kritis',
      'Weekly system monitoring',
      'Performance optimization',
      'Feature enhancements (minor)',
      'Proactive security monitoring',
      'Monthly reports & analytics',
      'Remote troubleshooting',
    ],
    limitations: [],
    popular: true,
  },
  {
    name: 'Enterprise Support',
    price: '2.999',
    period: 'bulan',
    description: 'Dukungan premium dengan dedicated team',
    icon: Shield,
    features: [
      '24/7 dedicated support team',
      'Response time 1 jam untuk kritis',
      'Real-time system monitoring',
      'Advanced performance tuning',
      'Custom feature development',
      'Security audits & compliance',
      'Disaster recovery planning',
      'On-site support (if needed)',
      'Dedicated account manager',
    ],
    limitations: [],
    popular: false,
  },
];

const additionalServices = [
  {
    icon: Zap,
    title: 'Emergency Response',
    description: 'Layanan darurat 24/7 untuk sistem critical',
    price: 'Mulai dari Rp 2.000.000/incident',
  },
  {
    icon: Shield,
    title: 'Security Audit',
    description: 'Comprehensive security assessment dan penetration testing',
    price: 'Mulai dari Rp 15.000.000/audit',
  },
  {
    icon: Headphones,
    title: 'Training & Consultation',
    description: 'Technical training untuk tim internal Anda',
    price: 'Mulai dari Rp 5.000.000/session',
  },
];

export default function SupportTiers({ colors }: SupportTierProps) {
  // Helper functions for style consistency
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;
  const getHighlightBorder = () => `2px solid ${colors[0]}`;
  const getBadgeBg = () => ({ background: colors[0] });

  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Paket Support & Maintenance</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Pilih tingkat dukungan yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: getGradientBg() }}></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-3'>
          {supportTiers.map((tier, index) => {
            const TierIcon = tier.icon;
            return (
              <Card
                key={index}
                className={`relative transition-all duration-300 bg-white hover:-translate-y-2 hover:shadow-xl ${
                  tier.popular ? 'shadow-lg scale-105' : ''
                }`}
                style={tier.popular ? { border: getHighlightBorder() } : {}}>
                {tier.popular && (
                  <Badge
                    className='absolute -top-3 left-1/2 -translate-x-1/2'
                    style={getBadgeBg()}>
                    Paling Populer
                  </Badge>
                )}

                <CardHeader className='text-center'>
                  <div className='mb-4 flex justify-center'>
                    <div
                      className='flex h-16 w-16 items-center justify-center rounded-full text-white'
                      style={{ background: getGradientBg() }}>
                      <TierIcon className='h-8 w-8' />
                    </div>
                  </div>
                  <CardTitle className='text-2xl'>{tier.name}</CardTitle>
                  <p className='text-muted-foreground'>{tier.description}</p>
                  <div className='mt-4'>
                    <span className='text-sm text-muted-foreground'>Rp</span>
                    <span className='text-4xl font-bold'>{tier.price}</span>
                    <span className='text-muted-foreground'>rb/{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent className='space-y-6'>
                  <div className='space-y-3'>
                    <h4 className='font-semibold text-green-600'>✓ Included Features:</h4>
                    <ul className='space-y-2'>
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className='flex items-center gap-2 text-sm'>
                          <Check className='h-4 w-4 text-green-500' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.limitations.length > 0 && (
                    <div className='space-y-3'>
                      <h4 className='font-semibold text-gray-600'>Limitations:</h4>
                      <ul className='space-y-2'>
                        {tier.limitations.map((limitation, limitIndex) => (
                          <li
                            key={limitIndex}
                            className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <CircleX className='h-4 w-4 rounded-full border border-gray-300 text-gray-400' />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    asChild
                    className={`w-full ${
                      tier.popular ? 'bg-sky-500 hover:bg-sky-600' : ''
                    }`}
                    variant={tier.popular ? 'default' : 'outline'}>
                    <Link href='/contact' className='text-slate-900'>Pilih Paket</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className='mt-16'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold'>Layanan Tambahan</h3>
            <p className='mt-2 text-muted-foreground'>
              Layanan khusus yang dapat ditambahkan ke paket support Anda
            </p>
          </div>

          <div className='mt-8 grid gap-6 md:grid-cols-3'>
            {additionalServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Card
                  key={index}
                  className='transition-all duration-300 bg-white hover:shadow-lg'>
                  <CardContent className='p-6 text-center'>
                    <div className='mb-4 flex justify-center'>
                      <div
                        className='flex h-12 w-12 items-center justify-center rounded-full text-white'
                        style={{ background: getGradientBg() }}>
                        <ServiceIcon className='h-6 w-6' />
                      </div>
                    </div>
                    <h4 className='mb-2 text-lg font-semibold'>{service.title}</h4>
                    <p className='mb-3 text-sm text-muted-foreground'>
                      {service.description}
                    </p>
                    <p className='text-sm font-medium text-sky-600'>{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
