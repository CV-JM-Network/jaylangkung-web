import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'John Anderson',
    position: 'Chief Executive Officer',
    bio: 'Pemimpin visioner dengan pengalaman 15+ tahun dalam inovasi teknologi. Sebelumnya memimpin transformasi digital di perusahaan Fortune 500. Bersemangat menciptakan teknologi yang membuat perbedaan.',
    expertise: ['Kepemimpinan Strategis', 'Inovasi Digital', 'Pertumbuhan Bisnis'],
  },
  {
    name: 'Sarah Chen',
    position: 'Chief Technology Officer',
    bio: 'Arsitek perangkat lunak ahli dengan keahlian mendalam dalam pengembangan API dan infrastruktur cloud. Memimpin visi teknis kami dan memastikan solusi kami dapat diskalakan dan aman.',
    expertise: ['Arsitektur Cloud', 'Pengembangan API', 'Keamanan Siber'],
  },
  {
    name: 'Michael Rodriguez',
    position: 'Chief Operating Officer',
    bio: 'Ahli operasional yang fokus pada memberikan pengalaman pelanggan yang luar biasa. Mengawasi operasi global kami dan memastikan layanan yang mulus di semua pasar.',
    expertise: ['Manajemen Operasional', 'Optimalisasi Proses', 'Kesuksesan Pelanggan'],
  },
  {
    name: 'Emily Watson',
    position: 'Kepala Pemasaran',
    bio: 'Ahli strategi pemasaran kreatif dengan keahlian dalam pemasaran digital dan pengembangan merek. Mendorong strategi go-to-market kami dan membangun koneksi bermakna dengan audiens kami.',
    expertise: ['Pemasaran Digital', 'Strategi Merek', 'Pembuatan Konten'],
  },
];

export default function LeadershipTeam() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Temui Tim Kepemimpinan Kami</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Pemimpin visioner yang mendorong inovasi dan keunggulan
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-2'>
          {team.map((member, index) => (
            <Card
              key={index}
              className='group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <CardContent className='p-0'>
                <div className='relative h-64 bg-gradient-to-br from-blue-500 to-purple-600'>
                  <div className='flex h-full items-center justify-center'>
                    <div className='rounded-full bg-white/20 p-8'>
                      <User className='h-16 w-16 text-white' />
                    </div>
                  </div>

                  <div className='absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <div className='flex gap-4'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-blue-600'>
                        <Linkedin className='h-5 w-5' />
                      </div>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-blue-600'>
                        <Twitter className='h-5 w-5' />
                      </div>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-blue-600'>
                        <Mail className='h-5 w-5' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-semibold'>{member.name}</h3>
                  <p className='mb-3 text-sm font-medium uppercase tracking-wide text-blue-600'>
                    {member.position}
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-muted-foreground'>
                    {member.bio}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant='secondary' className='text-xs'>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
