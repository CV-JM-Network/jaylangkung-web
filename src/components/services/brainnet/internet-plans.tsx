'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Building,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Home,
  Upload,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/scroll-reveal';
import { ResidentialPlan } from '@/types/plan';

interface InternetPlansProps {
  colors: string[];
}

// Shared features for all residential plans (hardcoded as discussed)
const SHARED_FEATURES = [
  'Data unlimited',
  'Instalasi gratis',
  'Router WiFi included',
  'Dukungan 24/7',
];

const enterpriseFeatures = [
  {
    icon: Building2,
    title: 'Fiber Dedicated',
    description:
      'Koneksi fiber private hingga 100 Gbps dengan bandwidth terjamin dan zero contention.',
  },
  {
    icon: Building,
    title: 'Keamanan Canggih',
    description:
      'Keamanan multi-layer dengan firewall custom, deteksi intrusi, dan monitoring SOC 24/7.',
  },
  {
    icon: Home,
    title: 'Redundansi',
    description:
      'Multiple jalur fiber diverse dengan automatic failover dan jaminan uptime 99.99%.',
  },
];

export default function InternetPlans({ colors }: InternetPlansProps) {
  const [activeTab, setActiveTab] = useState('residential');
  const [plans, setPlans] = useState<ResidentialPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch('/api/plans/residential');
        const result = await response.json();

        if (result.success) {
          setPlans(result.data);
        } else {
          setError(result.error || 'Failed to fetch plans');
        }
      } catch (err) {
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

  // Helper functions for style consistency
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;
  const getHighlightBorder = () => `2px solid ${colors[0]}`;
  const getBadgeBg = () => ({ background: colors[0] });

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Calculate savings from currentPrice and originalPrice
  const calculateSavings = (currentPrice: number, originalPrice: number | null): string | null => {
    if (!originalPrice) return null;
    const savings = originalPrice - currentPrice;
    if (savings <= 0) return null;
    return `Hemat Rp ${savings.toLocaleString('id-ID')}`;
  };

  // Format price for display (in thousands for display like "118.200")
  const formatPrice = (price: number): string => {
    return price.toLocaleString('id-ID');
  };

  return (
    <section className='bg-gray-100 py-20' id='pricing'>
      <div className='container mx-auto px-4'>
        <ScrollReveal direction='up'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold lg:text-4xl'>Pilih Paket Sempurna Anda</h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              Paket internet fleksibel yang dirancang untuk setiap kebutuhan dan anggaran
            </p>
            <div
              className='mx-auto mt-4 h-1 w-16'
              style={{ background: getGradientBg() }}></div>
          </div>
        </ScrollReveal>

        <div className='mt-8'>
          <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
            <TabsList className='grid w-full grid-cols-2 gap-x-4 lg:w-1/2 lg:mx-auto'>
              <TabsTrigger
                value='residential'
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-base font-semibold transition-all duration-200 shadow-md border-none focus:outline-none focus:ring-2 focus:ring-blue-300
                  ${
                    activeTab === 'residential'
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }
                `}
                style={
                  activeTab === 'residential'
                    ? {
                        background: colors[0],
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                      }
                    : {}
                }>
                <Home
                  className={`h-5 w-5 ${
                    activeTab === 'residential' ? 'text-white' : 'text-gray-500'
                  }`}
                />
                Residential
              </TabsTrigger>
              <TabsTrigger
                value='enterprise'
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-base font-semibold transition-all duration-200 shadow-md border-none focus:outline-none focus:ring-2 focus:ring-blue-300
                  ${
                    activeTab === 'enterprise'
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }
                `}
                style={
                  activeTab === 'enterprise'
                    ? {
                        background: colors[1],
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                      }
                    : {}
                }>
                <Building2
                  className={`h-5 w-5 ${
                    activeTab === 'enterprise' ? 'text-white' : 'text-gray-500'
                  }`}
                />
                Enterprise
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value='residential'
              className='mt-8 transition-all duration-500 ease-in-out animate-rise-up'>
              {loading ? (
                <div className='flex items-center justify-center py-20'>
                  <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto'></div>
                    <p className='mt-4 text-muted-foreground'>Loading plans...</p>
                  </div>
                </div>
              ) : error ? (
                <div className='flex items-center justify-center py-20'>
                  <div className='text-center text-red-600'>
                    <p className='text-lg font-semibold'>Failed to load plans</p>
                    <p className='text-sm mt-2'>{error}</p>
                  </div>
                </div>
              ) : (
                <div className='relative flex items-center'>
                  <button
                    type='button'
                    aria-label='Scroll left'
                    className='absolute -left-6 top-1/2 z-10 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200 transition hidden md:block'
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    onClick={() => scrollBy(-320)}>
                    <ChevronLeft className='h-6 w-6 text-gray-600' />
                  </button>
                  <div
                    ref={scrollRef}
                    className='overflow-x-auto pb-8 pt-8 min-h-[480px] scrollbar-hide w-full'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
                    <div className='flex gap-8 min-w-max snap-x snap-mandatory'>
                      {plans.map((plan) => {
                        const savings = calculateSavings(
                          Number(plan.currentPrice),
                          plan.originalPrice ? Number(plan.originalPrice) : null
                        );
                        return (
                          <div key={plan.id} className='snap-center flex-shrink-0 w-80'>
                            <Card
                              className={`relative transition-all duration-300 bg-white hover:-translate-y-2 hover:shadow-xl ${
                                plan.isPopular ? 'shadow-lg' : ''
                              }`}
                              style={plan.isPopular ? { border: getHighlightBorder() } : {}}>
                              <CardHeader className='text-center'>
                                <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                                <p className='text-muted-foreground'>{plan.description}</p>
                                <div className='mt-4 space-y-2'>
                                  <div className='flex items-center justify-center gap-2'>
                                    {plan.originalPrice && (
                                      <span className='text-sm text-muted-foreground line-through'>
                                        Rp {formatPrice(Number(plan.originalPrice))}
                                      </span>
                                    )}
                                  </div>
                                  <div>
                                    <span className='text-sm text-muted-foreground'>
                                      Rp
                                    </span>
                                    <span className='text-4xl font-bold text-blue-600'>
                                      {formatPrice(Number(plan.currentPrice))}
                                    </span>
                                    <span className='text-muted-foreground'>/bulan</span>
                                  </div>
                                  {(plan.isPopular || savings) && (
                                    <div className='flex items-center justify-center gap-2 mt-2'>
                                      {plan.isPopular && (
                                        <Badge className='text-white' style={getBadgeBg()}>
                                          Paling Populer
                                        </Badge>
                                      )}
                                      {savings && (
                                        <Badge
                                          variant='secondary'
                                          className='bg-green-500 text-white'>
                                          {savings}
                                        </Badge>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </CardHeader>
                              <CardContent className='space-y-6'>
                                <div className='space-y-3'>
                                  <div className='flex items-center justify-between rounded-lg bg-blue-50 p-3'>
                                    <div className='flex items-center gap-2'>
                                      <Download className='h-4 w-4 text-blue-600' />
                                      <span className='text-sm font-medium'>Download</span>
                                    </div>
                                    <span className='font-bold text-blue-600'>
                                      {plan.downloadSpeedMbps} Mbps
                                    </span>
                                  </div>
                                  <div className='flex items-center justify-between rounded-lg bg-green-50 p-3'>
                                    <div className='flex items-center gap-2'>
                                      <Upload className='h-4 w-4 text-green-600' />
                                      <span className='text-sm font-medium'>Upload</span>
                                    </div>
                                    <span className='font-bold text-green-600'>
                                      {plan.uploadSpeedMbps} Mbps
                                    </span>
                                  </div>
                                </div>
                                <ul className='space-y-3'>
                                  {SHARED_FEATURES.map((feature, featureIndex) => (
                                    <li key={featureIndex} className='flex items-center gap-2'>
                                      <Check className='h-4 w-4 text-green-500' />
                                      <span className='text-sm'>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <Button
                                  asChild
                                  className={`w-full ${
                                    plan.isPopular
                                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                      : ''
                                  }`}
                                  variant={plan.isPopular ? 'default' : 'outline'}>
                                  <Link href='/contact'>Pesan Sekarang</Link>
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <button
                    type='button'
                    aria-label='Scroll right'
                    className='absolute -right-6 top-1/2 z-10 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200 transition hidden md:block'
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    onClick={() => scrollBy(320)}>
                    <ChevronRight className='h-6 w-6 text-gray-600' />
                  </button>
                </div>
              )}
              <p className='text-center text-sm text-muted-foreground mt-2 md:hidden'>
                Geser untuk melihat paket lainnya →
              </p>
            </TabsContent>

            <TabsContent
              value='enterprise'
              className='mt-8 transition-all duration-500 ease-in-out animate-rise-up'>
              <div className='mx-auto max-w-4xl text-center'>
                <div className='mb-12'>
                  <h3 className='text-2xl font-bold'>Solusi Enterprise</h3>
                  <p className='mt-4 text-lg text-muted-foreground'>
                    Solusi internet yang disesuaikan khusus untuk organisasi besar dengan
                    kebutuhan spesifik. Paket enterprise kami menawarkan tingkat performa,
                    keamanan, dan dukungan tertinggi.
                  </p>
                </div>
                <div className='grid gap-8 md:grid-cols-3'>
                  {enterpriseFeatures.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <ScrollReveal key={index} direction='up' delay={index * 150}>
                        <Card className='transition-all duration-300 bg-white hover:-translate-y-1 hover:shadow-lg h-full'>
                          <CardContent className='p-6 text-center'>
                            <div className='mb-4 flex justify-center'>
                              <div
                                className='flex h-16 w-16 items-center justify-center rounded-full text-white'
                                style={{ background: getGradientBg() }}>
                                <FeatureIcon className='h-8 w-8' />
                              </div>
                            </div>
                            <h4 className='mb-2 text-lg font-semibold'>
                              {feature.title}
                            </h4>
                            <p className='text-sm text-muted-foreground'>
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      </ScrollReveal>
                    );
                  })}
                </div>
                <ScrollReveal direction='up' delay={300}>
                  <div
                    className='mt-12 rounded-lg'
                    style={{ background: getGradientBg() }}>
                    <div className='p-8 text-white'>
                      <h4 className='mb-4 text-xl font-bold'>
                        Siap mendiskusikan kebutuhan enterprise Anda?
                      </h4>
                      <p className='mb-6 text-blue-100'>
                        Tim solusi enterprise kami akan bekerja dengan Anda untuk
                        merancang solusi internet custom yang memenuhi kebutuhan spesifik
                        Anda.
                      </p>
                      <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
                        <Button
                          asChild
                          size='lg'
                          className='bg-white text-blue-600 hover:bg-gray-100'>
                          <Link href='/contact'>Jadwalkan Konsultasi</Link>
                        </Button>
                        <Button
                          asChild
                          size='lg'
                          variant='outline'
                          className='border-white text-white hover:bg-white hover:text-blue-600'>
                          <Link href='tel:+6287847096138'>Hubungi Tim Sales</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
