'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
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

const brainnetQuestions = [
  {
    question: 'Apa yang membuat internet fiber lebih baik dari kabel atau DSL?',
    answer:
      'Internet fiber-optic menggunakan sinyal cahaya melalui serat kaca, memberikan kecepatan yang jauh lebih cepat, latensi yang lebih rendah, dan koneksi yang lebih andal dibandingkan teknologi berbasis tembaga. Tidak seperti kabel, fiber tidak melambat saat jam sibuk, dan tidak seperti DSL, performa tidak menurun dengan jarak.',
  },
  {
    question: 'Berapa lama waktu instalasi yang dibutuhkan?',
    answer:
      'Sebagian besar instalasi selesai dalam 2-4 jam. Waktu yang tepat tergantung pada tata letak rumah Anda dan apakah fiber baru perlu dipasang ke lokasi Anda. Kami menawarkan instalasi hari yang sama untuk banyak area, dan teknisi kami akan memberikan perkiraan waktu yang akurat saat penjadwalan.',
  },
  {
    question: 'Apakah ada batasan data atau throttling?',
    answer:
      'Tidak, semua paket Brainnet termasuk data unlimited tanpa batasan, throttling, atau pembatasan. Anda mendapatkan kecepatan penuh yang Anda bayar, 24/7, baik untuk streaming, gaming, atau menjalankan bisnis.',
  },
  {
    question: 'Peralatan apa yang disertakan dalam paket saya?',
    answer:
      'Semua paket residential termasuk router WiFi berkinerja tinggi tanpa biaya tambahan. Paket bisnis termasuk peralatan grade enterprise yang sesuai dengan kebutuhan Anda. Kami juga menyediakan modem fiber (ONT) dan semua kabel yang diperlukan.',
  },
  {
    question: 'Apa jaminan uptime Anda?',
    answer:
      'Kami menjamin uptime 99.9% untuk pelanggan residential dan hingga 99.99% untuk pelanggan enterprise. Jika kami tidak memenuhi SLA, Anda akan menerima kredit layanan. Jaringan kami termasuk jalur fiber redundan dan sistem backup untuk meminimalkan potensi downtime.',
  },
  {
    question: 'Bisakah saya upgrade atau downgrade paket saya?',
    answer:
      'Ya, Anda dapat mengubah paket kapan saja tanpa biaya. Upgrade kecepatan seringkali langsung berlaku, sementara downgrade berlaku pada siklus penagihan berikutnya. Portal pelanggan kami memudahkan untuk mengelola akun dan melakukan perubahan secara online.',
  },
];

const itSolutionQuestions = [
  {
    question:
      'Berapa lama waktu yang dibutuhkan untuk mengembangkan aplikasi web/mobile?',
    answer:
      'Timeline pengembangan bervariasi tergantung kompleksitas proyek. Aplikasi web sederhana biasanya 4-8 minggu, aplikasi mobile 6-12 minggu, dan sistem enterprise 3-6 bulan. Kami akan memberikan estimasi timeline yang detail setelah analisis kebutuhan awal dan selalu berusaha menepati deadline yang disepakati.',
  },
  {
    question: 'Apakah Anda menyediakan maintenance dan support setelah proyek selesai?',
    answer:
      'Ya, kami menyediakan berbagai paket maintenance dan support. Termasuk bug fixes, security updates, performance monitoring, backup management, dan feature enhancements. Kami menawarkan paket support 24/7 untuk aplikasi mission-critical dan paket maintenance reguler untuk kebutuhan standar.',
  },
  {
    question: 'Teknologi apa saja yang Anda gunakan untuk pengembangan aplikasi?',
    answer:
      'Kami menggunakan teknologi modern dan proven seperti React/Next.js, Vue.js untuk frontend; Node.js, Laravel, Python untuk backend; MySQL, PostgreSQL, MongoDB untuk database; React Native, Flutter untuk mobile; dan AWS, Azure, GCP untuk cloud infrastructure. Pemilihan teknologi disesuaikan dengan kebutuhan spesifik proyek Anda.',
  },
  {
    question: 'Bagaimana proses instalasi infrastruktur jaringan dan server?',
    answer:
      'Proses dimulai dengan site survey dan analisis kebutuhan, diikuti dengan desain network topology, procurement equipment, instalasi fisik (termasuk utility pole jika diperlukan), konfigurasi sistem, testing, dan commissioning. Kami juga menyediakan dokumentasi lengkap dan training untuk tim IT Anda.',
  },
  {
    question: 'Apakah bisa mengintegrasikan sistem baru dengan sistem yang sudah ada?',
    answer:
      'Tentu saja. Kami memiliki pengalaman luas dalam system integration dan API development. Kami dapat mengintegrasikan aplikasi baru dengan ERP, CRM, database legacy, atau sistem third-party lainnya. Tim kami akan melakukan assessment terhadap sistem existing dan merancang strategi integrasi yang optimal.',
  },
  {
    question: 'Bagaimana Anda memastikan keamanan aplikasi dan data?',
    answer:
      'Keamanan adalah prioritas utama dalam setiap proyek. Kami menerapkan security best practices seperti encryption, secure authentication, input validation, SQL injection prevention, XSS protection, dan regular security audits. Untuk infrastruktur, kami implementasikan firewall, VPN, access control, dan monitoring systems.',
  },
];

const viaChatQuestions = [
  {
    question: 'Apa itu WhatsApp Business API dan bagaimana cara kerjanya?',
    answer:
      'WhatsApp Business API adalah solusi resmi dari WhatsApp untuk bisnis yang ingin mengintegrasikan WhatsApp ke dalam sistem mereka. API ini memungkinkan Anda mengirim dan menerima pesan, mengotomatisasi respons, dan mengelola komunikasi pelanggan dalam skala besar. ViaChat menyediakan akses mudah ke API ini dengan dashboard yang user-friendly dan dukungan teknis lengkap.',
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk setup ViaChat?',
    answer:
      'Proses setup ViaChat biasanya memakan waktu 2-5 hari kerja. Ini termasuk verifikasi nomor WhatsApp Business, integrasi API ke sistem Anda, konfigurasi chatbot (jika diperlukan), dan testing menyeluruh. Tim teknis kami akan memandu Anda di setiap langkah untuk memastikan integrasi berjalan lancar.',
  },
  {
    question: 'Apakah ada batasan jumlah pesan yang bisa dikirim?',
    answer:
      'Batasan pesan tergantung pada paket yang Anda pilih. Paket Starter memiliki limit 1.000 pesan per bulan, Professional 10.000 pesan, dan Enterprise unlimited. Semua paket termasuk pesan masuk unlimited. Anda dapat upgrade paket kapan saja sesuai kebutuhan bisnis Anda.',
  },
  {
    question: 'Bisakah ViaChat diintegrasikan dengan sistem CRM yang sudah ada?',
    answer:
      'Ya, ViaChat dapat diintegrasikan dengan berbagai sistem CRM populer seperti Salesforce, HubSpot, Zoho, dan sistem custom melalui webhook dan API. Tim teknis kami akan membantu proses integrasi untuk memastikan data pelanggan tersinkronisasi dengan baik antara WhatsApp dan CRM Anda.',
  },
  {
    question: 'Bagaimana keamanan data pesan dijamin?',
    answer:
      'Semua pesan melalui ViaChat dienkripsi end-to-end sesuai standar WhatsApp. Data disimpan di server yang aman dengan enkripsi tambahan dan backup reguler. Kami mematuhi regulasi GDPR dan standar keamanan internasional. Akses ke data dibatasi hanya untuk personel yang berwenang dengan audit trail lengkap.',
  },
  {
    question: 'Apakah bisa menggunakan chatbot untuk respons otomatis?',
    answer:
      'Ya, ViaChat menyediakan fitur chatbot AI yang dapat menangani pertanyaan umum, memproses pesanan sederhana, dan memberikan informasi dasar 24/7. Chatbot dapat dikustomisasi sesuai kebutuhan bisnis Anda dan akan secara otomatis mengalihkan percakapan ke agen manusia jika diperlukan.',
  },
];

export function FAQBrainnet({ colors }: { colors: string[] }) {
  return (
    <FAQ
      title='Pertanyaan Umum tentang Brainnet'
      subtitle='Temukan jawaban untuk pertanyaan umum tentang layanan internet fiber kami'
      questions={brainnetQuestions}
      colors={colors}
    />
  );
}

export function FAQITSolution({ colors }: { colors: string[] }) {
  return (
    <FAQ
      title='Pertanyaan Umum tentang IT Solution'
      subtitle='Jawaban untuk pertanyaan yang sering diajukan tentang layanan IT komprehensif kami'
      questions={itSolutionQuestions}
      colors={colors}
    />
  );
}

export function FAQViaChat({ colors }: { colors: string[] }) {
  return (
    <FAQ
      title='Pertanyaan Umum tentang ViaChat'
      subtitle='Jawaban untuk pertanyaan yang sering diajukan tentang layanan WhatsApp API kami'
      questions={viaChatQuestions}
      colors={colors}
    />
  );
}

export function FAQ({
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
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>{title}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{subtitle}</p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: `linear-gradient(135deg, ${colors.join(', ')}` }}></div>
        </div>

        <div className='mx-auto mt-16 max-w-4xl'>
          <div className='space-y-4'>
            {questions.map((item, index) => (
              <div
                key={index}
                className='overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
                <button
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
                    <p className='leading-relaxed text-muted-foreground'>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
