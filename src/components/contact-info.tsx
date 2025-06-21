'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Kunjungi Kantor Kami',
    content:
      'Perum Pondok Mutiara Asro Blok J3/21, Desa/Kelurahan Pandanlandung, Kec. Wagir, Kab. Malang, Provinsi Jawa Timur',
    action: 'Dapatkan Petunjuk Arah',
    href: 'https://maps.app.goo.gl/XpnxG4LMKHmFeJSZ9',
  },
  {
    icon: Phone,
    title: 'Hubungi Kami',
    content: 'Admin: +62 878-4709-6138',
    action: 'Telepon Sekarang',
    href: 'tel:+6287847096138',
  },
  {
    icon: Mail,
    title: 'Email Kami',
    content: 'Admin: admin@jaylangkung.co.id',
    action: 'Kirim Email',
    href: 'mailto:admin@jaylangkung.co.id',
  },
  {
    icon: Clock,
    title: 'Jam Kerja',
    content: 'Senin - Sabtu: 8:00 - 17:00\nMinggu: Tutup',
    action: 'Saat ini Buka',
    status: true,
    href: '',
  },
];

export default function ContactInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [jamKerjaAction, setJamKerjaAction] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ...
    const hour = now.getHours();
    const minute = now.getMinutes();
    let open = false;
    // Senin - Sabtu: 08:00 - 17:00
    if (day >= 1 && day <= 6) {
      if (
        (hour > 8 || (hour === 8 && minute >= 0)) &&
        (hour < 17 || (hour === 17 && minute === 0))
      ) {
        open = true;
      }
    }
    // Minggu: Tutup
    setIsOpen(open);
    setJamKerjaAction(open ? 'Saat ini Buka' : 'Saat ini Tutup');
  }, []);

  const updatedContactCards = contactCards.map((card) => {
    if (card.title === 'Jam Kerja') {
      return {
        ...card,
        action: jamKerjaAction,
        status: isOpen,
      };
    }
    return card;
  });

  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {updatedContactCards.map((card, index) => (
            <Card
              key={index}
              className='group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4 flex justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white'>
                    <card.icon className='h-8 w-8' />
                  </div>
                </div>
                <h3 className='mb-3 text-lg font-semibold'>{card.title}</h3>
                <p className='mb-4 text-sm text-muted-foreground whitespace-pre-line'>
                  {card.content}
                </p>
                {card.href && card.href !== '' && card.title !== 'Jam Kerja' ? (
                  <a
                    href={card.href}
                    className={`text-sm font-medium ${
                      card.title === 'Jam Kerja'
                        ? card.status
                          ? 'text-green-600'
                          : 'text-red-600'
                        : card.status
                        ? 'text-green-600'
                        : 'text-blue-600 hover:underline cursor-pointer'
                    }`}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {card.action}
                  </a>
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      card.title === 'Jam Kerja'
                        ? card.status
                          ? 'text-green-600'
                          : 'text-red-600'
                        : card.status
                        ? 'text-green-600'
                        : 'text-blue-600 hover:underline cursor-pointer'
                    }`}>
                    {card.action}
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
