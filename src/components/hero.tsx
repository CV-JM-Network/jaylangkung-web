import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 py-20 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold leading-tight lg:text-6xl'>
              Transformasi Masa Depan Dimulai Hari Ini
            </h1>
            <p className='text-lg opacity-90 lg:text-xl'>
              JM NETWORK menyediakan solusi teknologi terintegrasi — dari IT solution,
              WhatsApp API, hingga layanan internet cepat — untuk mendorong efisiensi dan
              inovasi bisnis Anda.
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
            <div className=''>
              <Image
                src='/assets/logo.png'
                alt='Hero Image'
                width={300}
                height={400}
                className='max-w-full h-auto'
              />
            </div>
          </div>
        </div>

        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3'>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-white'>100+</h3>
            <p className='opacity-90'>Klien Puas</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-white'>99.9%</h3>
            <p className='opacity-90'>Waktu Aktif</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-white'>24/7</h3>
            <p className='opacity-90'>Dukungan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
