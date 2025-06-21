import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Users, Trophy, Scale, GraduationCap, Globe } from 'lucide-react';

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

export default function CompanyCulture() {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>
            Budaya & Nilai Perusahaan Kami
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Membangun tempat kerja di mana inovasi berkembang dan orang tumbuh
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
        </div>

        <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {cultureItems.map((item, index) => (
            <Card
              key={index}
              className='group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4 flex justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-transform duration-300 group-hover:scale-110'>
                    <item.icon className='h-8 w-8' />
                  </div>
                </div>
                <h3 className='mb-3 text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
