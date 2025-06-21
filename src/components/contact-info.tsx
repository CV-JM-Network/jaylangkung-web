import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Kunjungi Kantor Kami',
    content:
      'PERUM PONDOK MUTIARA ASRI BLOK J3/21, Desa/Kelurahan Pandanlandung, Kec. Wagir, Kab. Malang, Provinsi Jawa Timur, Kode Pos: 65158',
    action: 'Dapatkan Petunjuk Arah',
  },
  {
    icon: Phone,
    title: 'Hubungi Kami',
    content: 'Admin: +62 878-4709-6138',
    action: 'Telepon Sekarang',
  },
  {
    icon: Mail,
    title: 'Email Kami',
    content: 'Admin: admin@jaylangkung.co.id',
    action: 'Kirim Email',
  },
  {
    icon: Clock,
    title: 'Jam Kerja',
    content: 'Senin - Jumat: 9:00 - 18:00\nSabtu: 10:00 - 16:00\nMinggu: Tutup',
    action: 'Saat ini Buka',
    status: true,
  },
];

export default function ContactInfo() {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {contactCards.map((card, index) => (
            <Card
              key={index}
              className='group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4 flex justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                    <card.icon className='h-8 w-8' />
                  </div>
                </div>
                <h3 className='mb-3 text-lg font-semibold'>{card.title}</h3>
                <p className='mb-4 text-sm text-muted-foreground whitespace-pre-line'>
                  {card.content}
                </p>
                <span
                  className={`text-sm font-medium ${
                    card.status
                      ? 'text-green-600'
                      : 'text-blue-600 hover:underline cursor-pointer'
                  }`}>
                  {card.action}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
