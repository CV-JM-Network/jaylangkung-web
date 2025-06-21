import { Card, CardContent } from '@/components/ui/card';
import { Check, Eye, Heart, Target, Lightbulb, Users, Trophy, Scale, GraduationCap, Globe } from 'lucide-react';

const compValues = [
  'Inovasi di setiap langkah',
  'Kesuksesan pelanggan utama',
  'Transparansi dan integritas',
  'Keunggulan dalam eksekusi',
  'Kerja sama tim kolaboratif',
];

const cultureItems = [
  {
    icon: Lightbulb,
    title: 'Pola Pikir Inovasi',
    description:
      'Kami mendorong pemikiran kreatif dan menerima ide-ide baru. Setiap anggota tim diberdayakan untuk berkontribusi pada perjalanan inovasi kami.',
  },
  {
    icon: Users,
    title: 'Semangat Kolaboratif',
    description:
      'Kami percaya hal-hal besar terjadi ketika berbagai pemikiran bekerja sama. Kolaborasi adalah inti dari semua yang kami lakukan.',
  },
  {
    icon: Trophy,
    title: 'Berorientasi Keunggulan',
    description:
      'Kami berusaha mencapai keunggulan dalam setiap proyek, setiap interaksi, dan setiap solusi yang kami berikan kepada klien kami.',
  },
  {
    icon: Scale,
    title: 'Keseimbangan Kerja-Hidup',
    description:
      'Kami mendukung kesejahteraan tim kami dengan pengaturan kerja yang fleksibel dan tunjangan komprehensif.',
  },
  {
    icon: GraduationCap,
    title: 'Pembelajaran Berkelanjutan',
    description:
      'Kami berinvestasi dalam pertumbuhan tim kami melalui program pelatihan, konferensi, dan kesempatan pengembangan keterampilan.',
  },
  {
    icon: Globe,
    title: 'Dampak Global',
    description:
      'Kami berkomitmen untuk memberikan dampak positif pada bisnis dan komunitas di seluruh dunia.',
  },
];

export default function CompanyMissionCulture() {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Misi, Visi & Budaya Kami</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Membangun masa depan komunikasi digital dengan nilai dan budaya yang kuat
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
        </div>

        {/* Mission & Vision */}
        <div className='mt-16 grid gap-8 lg:grid-cols-3'>
          <Card className='bg-white group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
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
                bermakna di Indonesia dan di seluruh dunia.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-white group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
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

          <Card className='bg-white group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
            <div className='absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600'></div>
            <CardContent className='p-8 text-center'>
              <div className='mb-6 flex justify-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                  <Heart className='h-8 w-8' />
                </div>
              </div>
              <h3 className='mb-4 text-xl font-semibold'>Nilai-Nilai Kami</h3>
              <ul className='space-y-2 text-left'>
                {compValues.map((value, index) => (
                  <li key={index} className='flex items-center gap-2 text-sm'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-muted-foreground'>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Culture */}
        <div className='mt-20'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold lg:text-3xl'>Budaya Perusahaan</h3>
            <p className='mt-2 text-md text-muted-foreground'>
              Membangun tempat kerja di mana inovasi berkembang dan orang tumbuh
            </p>
            <div className='mx-auto mt-3 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
          </div>
          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {cultureItems.map((item, index) => (
              <Card
                key={index}
                className='bg-white group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                <CardContent className='p-6 text-center'>
                  <div className='mb-4 flex justify-center'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-transform duration-300 group-hover:scale-110'>
                      <item.icon className='h-8 w-8' />
                    </div>
                  </div>
                  <h4 className='mb-3 text-lg font-semibold'>{item.title}</h4>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
