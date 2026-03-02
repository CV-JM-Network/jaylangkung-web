/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ScrollReveal from './scroll-reveal';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 py-12 sm:py-20 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <ScrollReveal direction='up'>
            <div className='space-y-6'>
              <h1 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl'>
                Transformasi Masa Depan Dimulai Hari Ini
              </h1>
              <p className='text-lg opacity-90 lg:text-xl'>
                JM NETWORK menyediakan solusi teknologi terintegrasi — dari IT solution,
                WhatsApp API, hingga layanan internet cepat — untuk mendorong efisiensi
                dan inovasi bisnis Anda.
              </p>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Button asChild size='lg' className='bg-red-500 hover:bg-red-600'>
                  <Link href='/services'>Jelajahi Layanan</Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-blue-600'>
                  <Link href='/contact'>Mulai Sekarang</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction='right' delay={200}>
            <div className='flex justify-center'>
              <img
                src='/assets/logo.png'
                alt='JM NETWORK Logo'
                width={300}
                height={400}
                className='max-w-full h-auto'
              />
            </div>
          </ScrollReveal>
        </div>

        <div className='mt-12 sm:mt-16 grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4'>
          {[
            { value: '100+', label: 'Klien Puas' },
            { value: '99.9%', label: 'Waktu Aktif' },
            { value: '24/7', label: 'Dukungan' },
            { value: '10+', label: 'Tahun Pengalaman' },
          ].map((stat, i) => (
            <ScrollReveal key={i} direction='up' delay={300 + i * 100}>
              <div className='text-center'>
                <h3 className='text-3xl font-bold text-white'>{stat.value}</h3>
                <p className='opacity-90'>{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
