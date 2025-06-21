'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Building2, Check, Download, Home, Upload } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const residentialPlans = [
  {
    name: 'Home Starter',
    price: '699',
    originalPrice: '799',
    description: 'Sempurna untuk penggunaan internet ringan',
    downloadSpeed: '100 Mbps',
    uploadSpeed: '50 Mbps',
    features: [
      'Data unlimited',
      'Instalasi gratis',
      'Router WiFi included',
      'Dukungan 24/7',
      'Tanpa kontrak',
    ],
    popular: false,
    savings: 'Hemat Rp 100rb',
  },
  {
    name: 'Home Pro',
    price: '1.199',
    originalPrice: '1.399',
    description: 'Ideal untuk keluarga dan remote work',
    downloadSpeed: '500 Mbps',
    uploadSpeed: '250 Mbps',
    features: [
      'Data unlimited',
      'Instalasi gratis',
      'Router WiFi 6 premium',
      'Dukungan prioritas 24/7',
      'Security suite included',
      'Static IP tersedia',
    ],
    popular: true,
    savings: 'Hemat Rp 200rb',
  },
  {
    name: 'Home Ultra',
    price: '1.899',
    originalPrice: '2.199',
    description: 'Kecepatan maksimal untuk power user',
    downloadSpeed: '1 Gbps',
    uploadSpeed: '500 Mbps',
    features: [
      'Data unlimited',
      'Instalasi gratis',
      'Router WiFi 6E premium',
      'White-glove support',
      'Advanced security suite',
      'Static IP included',
      'Mesh network support',
    ],
    popular: false,
    savings: 'Hemat Rp 300rb',
  },
];

const businessPlans = [
  {
    name: 'Business Essential',
    price: '1.499',
    description: 'Sempurna untuk bisnis kecil',
    downloadSpeed: '250 Mbps',
    uploadSpeed: '250 Mbps',
    features: [
      'Kecepatan simetris',
      '99.9% uptime SLA',
      '5 alamat IP statis',
      'Peralatan business-grade',
      'Dukungan prioritas',
      'Firewall canggih',
    ],
    popular: false,
  },
  {
    name: 'Business Pro',
    price: '2.999',
    description: 'Ideal untuk bisnis berkembang',
    downloadSpeed: '500 Mbps',
    uploadSpeed: '500 Mbps',
    features: [
      'Kecepatan simetris',
      '99.9% uptime SLA',
      '13 alamat IP statis',
      'Peralatan enterprise',
      'Dedicated support rep',
      'Perlindungan DDoS',
      'Kemampuan VPN',
    ],
    popular: true,
  },
  {
    name: 'Business Elite',
    price: '5.999',
    description: 'Performa maksimal untuk bisnis',
    downloadSpeed: '1 Gbps',
    uploadSpeed: '1 Gbps',
    features: [
      'Kecepatan gigabit simetris',
      '99.99% uptime SLA',
      '29 alamat IP statis',
      'Peralatan carrier-grade',
      'Monitoring NOC 24/7',
      'Perlindungan DDoS canggih',
      'Koneksi redundan',
    ],
    popular: false,
  },
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

export default function InternetPlans() {
  const [activeTab, setActiveTab] = useState('residential');

  return (
    <section className='bg-gray-50 py-20' id='pricing'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Pilih Paket Sempurna Anda</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Paket internet fleksibel yang dirancang untuk setiap kebutuhan dan anggaran
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
        </div>

        <div className='mt-16'>
          <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
            <TabsList className='grid w-full grid-cols-3 lg:w-1/2 lg:mx-auto'>
              <TabsTrigger value='residential' className='flex items-center gap-2'>
                <Home className='h-4 w-4' />
                <span className='hidden sm:inline'>Residential</span>
                <span className='sm:hidden'>Home</span>
              </TabsTrigger>
              <TabsTrigger value='business' className='flex items-center gap-2'>
                <Building className='h-4 w-4' />
                <span className='hidden sm:inline'>Business</span>
                <span className='sm:hidden'>Bisnis</span>
              </TabsTrigger>
              <TabsTrigger value='enterprise' className='flex items-center gap-2'>
                <Building2 className='h-4 w-4' />
                <span className='hidden sm:inline'>Enterprise</span>
                <span className='sm:hidden'>Corp</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value='residential' className='mt-8'>
              <div className='grid gap-8 lg:grid-cols-3'>
                {residentialPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''
                    }`}>
                    {plan.popular && (
                      <Badge className='absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500'>
                        Paling Populer
                      </Badge>
                    )}
                    {plan.savings && (
                      <Badge
                        variant='secondary'
                        className='absolute -top-3 right-4 bg-green-500 text-white'>
                        {plan.savings}
                      </Badge>
                    )}
                    <CardHeader className='text-center'>
                      <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                      <p className='text-muted-foreground'>{plan.description}</p>
                      <div className='mt-4 space-y-2'>
                        <div className='flex items-center justify-center gap-2'>
                          <span className='text-sm text-muted-foreground line-through'>
                            Rp {plan.originalPrice}rb
                          </span>
                        </div>
                        <div>
                          <span className='text-sm text-muted-foreground'>Rp</span>
                          <span className='text-4xl font-bold text-blue-600'>
                            {plan.price}
                          </span>
                          <span className='text-muted-foreground'>rb/bulan</span>
                        </div>
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
                            {plan.downloadSpeed}
                          </span>
                        </div>
                        <div className='flex items-center justify-between rounded-lg bg-green-50 p-3'>
                          <div className='flex items-center gap-2'>
                            <Upload className='h-4 w-4 text-green-600' />
                            <span className='text-sm font-medium'>Upload</span>
                          </div>
                          <span className='font-bold text-green-600'>
                            {plan.uploadSpeed}
                          </span>
                        </div>
                      </div>

                      <ul className='space-y-3'>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center gap-2'>
                            <Check className='h-4 w-4 text-green-500' />
                            <span className='text-sm'>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className={`w-full ${
                          plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}>
                        <Link href='/contact'>Pesan Sekarang</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='business' className='mt-8'>
              <div className='grid gap-8 lg:grid-cols-3'>
                {businessPlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''
                    }`}>
                    {plan.popular && (
                      <Badge className='absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500'>
                        Best Value
                      </Badge>
                    )}
                    <CardHeader className='text-center'>
                      <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                      <p className='text-muted-foreground'>{plan.description}</p>
                      <div className='mt-4'>
                        <span className='text-sm text-muted-foreground'>Rp</span>
                        <span className='text-4xl font-bold'>{plan.price}</span>
                        <span className='text-muted-foreground'>rb/bulan</span>
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
                            {plan.downloadSpeed}
                          </span>
                        </div>
                        <div className='flex items-center justify-between rounded-lg bg-green-50 p-3'>
                          <div className='flex items-center gap-2'>
                            <Upload className='h-4 w-4 text-green-600' />
                            <span className='text-sm font-medium'>Upload</span>
                          </div>
                          <span className='font-bold text-green-600'>
                            {plan.uploadSpeed}
                          </span>
                        </div>
                      </div>

                      <ul className='space-y-3'>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center gap-2'>
                            <Check className='h-4 w-4 text-green-500' />
                            <span className='text-sm'>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className={`w-full ${
                          plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}>
                        <Link href='/contact'>Dapatkan Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='enterprise' className='mt-8'>
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
                      <Card
                        key={index}
                        className='transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                        <CardContent className='p-6 text-center'>
                          <div className='mb-4 flex justify-center'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                              <FeatureIcon className='h-8 w-8' />
                            </div>
                          </div>
                          <h4 className='mb-2 text-lg font-semibold'>{feature.title}</h4>
                          <p className='text-sm text-muted-foreground'>
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className='mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white'>
                  <h4 className='mb-4 text-xl font-bold'>
                    Siap mendiskusikan kebutuhan enterprise Anda?
                  </h4>
                  <p className='mb-6 text-blue-100'>
                    Tim solusi enterprise kami akan bekerja dengan Anda untuk merancang
                    solusi internet custom yang memenuhi kebutuhan spesifik Anda.
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
