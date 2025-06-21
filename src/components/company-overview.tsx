import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const stats = [
  { number: '100+', label: 'Klien Puas' },
  { number: '99%', label: 'Jaminan Uptime' },
  { number: '10+', label: 'Kota Besar' },
  { number: '24/7', label: 'Dukungan Ahli' },
];

const timeline = [
  { year: '2015', desc: 'Perusahaan Didirikan' },
  { year: '2016', desc: 'Peluncuran Platform Pertama' },
  { year: '2018', desc: 'Mencapai 50 Klien' },
  { year: '2020', desc: 'Ekspansi ke 10 Kota Besar' },
  { year: '2024', desc: 'Mencapai 100 Klien se-Indonesia' },
];

export default function CompanyOverview() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <div className='mb-8'>
              <h2 className='text-3xl font-bold lg:text-4xl'>Kisah Kami</h2>
              <div className='mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-teal-600'></div>
            </div>

            <div className='space-y-6 text-lg leading-relaxed text-muted-foreground'>
              <p className='text-xl font-medium text-foreground'>
                Didirikan pada tahun 2015 oleh tim teknolog visioner, JM NETWORK muncul
                dari ide sederhana namun kuat: merevolusi cara bisnis, individu, serta
                kelompok masyarakat berkomunikasi di era digital.
              </p>

              <p>
                Sejak awal, kami telah berkomitmen untuk menyediakan layanan komunikasi
                yang andal, aman, dan mudah digunakan. Dengan menggabungkan teknologi
                mutakhir dengan pendekatan yang berorientasi pada pelanggan, kami telah
                menciptakan platform yang memungkinkan bisnis untuk berkomunikasi secara
                efisien dan efektif, terlepas dari lokasi atau ukuran mereka.
              </p>

              <p>
                Hari ini, kami berdiri di garis depan revolusi komunikasi digital,
                menawarkan solusi mutakhir yang memberdayakan bisnis untuk terhubung,
                berkolaborasi, dan berkembang di dunia yang semakin terhubung.
              </p>
            </div>

            <div className='mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-gray-100 p-8 lg:grid-cols-4'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 lg:text-4xl'>
                    {stat.number}
                  </div>
                  <div className='mt-2 text-sm font-medium text-muted-foreground'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className='overflow-hidden'>
              <CardContent className='p-6'>
                <div className='mb-6 flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white'>
                    <TrendingUp className='h-6 w-6' />
                  </div>
                  <h3 className='text-xl font-semibold'>Perjalanan Pertumbuhan</h3>
                </div>

                <div className='space-y-4'>
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className='relative flex items-center gap-4 border-l-2 border-blue-500 pl-4'>
                      <div className='absolute -left-2 h-4 w-4 rounded-full bg-blue-500'></div>
                      <div>
                        <div className='font-bold text-blue-600'>{item.year}</div>
                        <div className='text-sm text-muted-foreground'>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
