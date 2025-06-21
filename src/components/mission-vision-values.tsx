import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Check } from 'lucide-react';

const values = [
  'Inovasi di setiap langkah',
  'Kesuksesan pelanggan utama',
  'Transparansi dan integritas',
  'Keunggulan dalam eksekusi',
  'Kerja sama tim kolaboratif',
];

export default function MissionVisionValues() {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <Card className='group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
            <div className='absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600'></div>
            <CardContent className='p-8 text-center'>
              <div className='mb-6 flex justify-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                  <Target className='h-8 w-8' />
                </div>
              </div>
              <h3 className='mb-4 text-xl font-semibold'>Misi Kami</h3>
              <p className='leading-relaxed text-muted-foreground'>
                Memberdayakan bisnis dan individu dengan teknologi komunikasi inovatif
                yang menghancurkan hambatan, mendorong kolaborasi, dan membangun koneksi
                bermakna di seluruh dunia.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
            <div className='absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600'></div>
            <CardContent className='p-8 text-center'>
              <div className='mb-6 flex justify-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                  <Eye className='h-8 w-8' />
                </div>
              </div>
              <h3 className='mb-4 text-xl font-semibold'>Visi Kami</h3>
              <p className='leading-relaxed text-muted-foreground'>
                Menjadi mitra teknologi komunikasi paling terpercaya dan inovatif di
                dunia, menciptakan masa depan yang terhubung secara mulus di mana jarak
                bukan hambatan untuk kolaborasi dan pertumbuhan.
              </p>
            </CardContent>
          </Card>

          <Card className='group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
            <div className='absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600'></div>
            <CardContent className='p-8 text-center'>
              <div className='mb-6 flex justify-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                  <Heart className='h-8 w-8' />
                </div>
              </div>
              <h3 className='mb-4 text-xl font-semibold'>Nilai-Nilai Kami</h3>
              <ul className='space-y-2 text-left'>
                {values.map((value, index) => (
                  <li key={index} className='flex items-center gap-2 text-sm'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-muted-foreground'>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
