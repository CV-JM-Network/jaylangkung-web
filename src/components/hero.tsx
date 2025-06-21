import { Button } from '@/components/ui/button';
import { Network } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold leading-tight lg:text-6xl'>
              Merevolusi Komunikasi Digital
            </h1>
            <p className='text-lg opacity-90 lg:text-xl'>
              Startup teknologi terkemuka yang menyediakan solusi API WhatsApp mutakhir,
              layanan internet kecepatan tinggi, dan solusi jaringan perusahaan
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
          <div className='flex justify-center'>
            <div className='animate-float'>
              <Network className='h-64 w-64 opacity-80' />
            </div>
          </div>
        </div>

        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3'>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-red-400'>500+</h3>
            <p className='opacity-90'>Klien Puas</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-red-400'>99.9%</h3>
            <p className='opacity-90'>Waktu Aktif</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-red-400'>24/7</h3>
            <p className='opacity-90'>Dukungan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
