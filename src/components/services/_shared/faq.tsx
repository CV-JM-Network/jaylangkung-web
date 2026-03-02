'use client';

import ScrollReveal from '@/components/scroll-reveal';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  questions?: FAQItem[];
  className?: string;
  colors: string[];
}

const defaultQuestions: FAQItem[] = [
  {
    question: 'Bagaimana cara memulai dengan layanan JM NETWORK?',
    answer:
      'Anda dapat memulai dengan menghubungi tim sales kami melalui formulir kontak atau telepon. Tim kami akan melakukan konsultasi gratis untuk memahami kebutuhan Anda dan merekomendasikan solusi yang tepat. Proses onboarding biasanya memakan waktu 2-5 hari kerja tergantung kompleksitas layanan yang dipilih.',
  },
  {
    question: 'Apakah ada kontrak jangka panjang yang diperlukan?',
    answer:
      'Kami menawarkan fleksibilitas dalam kontrak. Untuk layanan residential, tidak ada kontrak jangka panjang yang diperlukan. Untuk layanan business dan enterprise, kami menawarkan berbagai opsi kontrak mulai dari bulanan hingga tahunan dengan benefit yang berbeda-beda.',
  },
  {
    question: 'Bagaimana sistem dukungan teknis JM NETWORK?',
    answer:
      'Kami menyediakan dukungan teknis 24/7 melalui berbagai channel: live chat, telepon, email, dan portal online. Tim support kami terdiri dari teknisi bersertifikat dengan pengalaman bertahun-tahun. Waktu respons rata-rata kami adalah di bawah 2 menit untuk masalah kritis.',
  },
  {
    question: 'Apakah layanan JM NETWORK tersedia di seluruh Indonesia?',
    answer:
      'Saat ini kami melayani area Jawa Timur dengan fokus utama di Malang dan sekitarnya. Kami sedang dalam proses ekspansi ke kota-kota besar lainnya di Indonesia. Untuk informasi ketersediaan di area Anda, silakan hubungi tim sales kami.',
  },
  {
    question: 'Bagaimana keamanan data dijamin?',
    answer:
      'Keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi tingkat enterprise, firewall canggih, monitoring 24/7, dan mematuhi standar keamanan internasional seperti ISO 27001. Semua data pelanggan disimpan di data center yang aman dengan backup redundan.',
  },
  {
    question: 'Apakah ada garansi uptime untuk layanan?',
    answer:
      'Ya, kami memberikan garansi uptime 99.9% untuk layanan residential dan hingga 99.99% untuk layanan enterprise. Jika kami tidak memenuhi SLA yang dijanjikan, Anda akan mendapatkan kredit layanan sesuai dengan ketentuan yang berlaku.',
  },
];

export default function FAQ({
  title = 'Pertanyaan yang Sering Diajukan',
  subtitle = 'Temukan jawaban untuk pertanyaan umum tentang layanan kami',
  questions = defaultQuestions,
  className,
  colors,
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  return (
    <section className={cn('py-20', className)}>
      <div className='container mx-auto px-4'>
        <ScrollReveal direction='up'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold lg:text-4xl'>{title}</h2>
            <p className='mt-4 text-lg text-muted-foreground'>{subtitle}</p>
            <div
              className='mx-auto mt-4 h-1 w-16'
              style={{
                background: `linear-gradient(135deg, ${colors.join(', ')})`,
              }}></div>
          </div>
        </ScrollReveal>

        <div className='mx-auto mt-16 max-w-4xl'>
          <div className='space-y-4'>
            {questions.map((item, index) => (
              <ScrollReveal key={index} direction='up' delay={index * 100}>
                <div className='overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
                  <button
                    type='button'
                    className='flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50'
                    onClick={() => toggleItem(index)}>
                    <h3 className='text-lg font-semibold pr-4'>{item.question}</h3>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0',
                        openItems.includes(index) && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-200 ease-in-out',
                      openItems.includes(index)
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0',
                    )}>
                    <div className='border-t bg-gray-50 p-6'>
                      <p className='leading-relaxed text-muted-foreground'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
