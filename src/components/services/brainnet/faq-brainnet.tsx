import FAQ, { type FAQItem } from '@/components/services/_shared/faq';

const brainnetQuestions: FAQItem[] = [
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
