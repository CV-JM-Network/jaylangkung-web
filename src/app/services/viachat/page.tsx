import CallToAction from '@/components/call-to-action';
import { FAQViaChat } from '@/components/faq';
import FeaturesGrid, { type Feature } from '@/components/features-grid';
import PricingSection from '@/components/pricing-section';
import ProcessSteps, { ProcessStep } from '@/components/process-steps';
import ServiceHero from '@/components/service-hero';

const viaChatFeatures: Feature[] = [
  {
    icon: 'MessageSquare',
    title: 'Pesan Real-Time',
    description:
      'Hubungkan secara instan dengan pelanggan melalui 2+ miliar pengguna WhatsApp di seluruh dunia. Kirim dan terima pesan secara real-time dengan dukungan riwayat dan pengelompokan pesan lengkap.',
    benefits: [
      'Pengiriman pesan instan',
      'Tanda terima dan indikator mengetik',
      'Riwayat dan pencarian pesan',
      'Dukungan pesan grup',
    ],
  },
  {
    icon: 'Bot',
    title: 'Otomatisasi Cerdas',
    description:
      'Chatbot AI yang dapat menangani pertanyaan umum, memproses pesanan, dan memberikan dukungan 24/7 tanpa intervensi manusia.',
    benefits: [
      'Respons otomatis cerdas',
      'Integrasi dengan sistem CRM',
      'Pembelajaran mesin adaptif',
      'Eskalasi ke agen manusia',
    ],
  },
  {
    icon: 'ImageIcon',
    title: 'Dukungan Media Lengkap',
    description:
      'Kirim dan terima berbagai jenis media termasuk gambar, video, dokumen, dan pesan suara dengan kualitas tinggi.',
    benefits: [
      'Gambar dan video HD',
      'Dokumen dan file',
      'Pesan suara dan audio',
      'Stiker dan emoji',
    ],
  },
  {
    icon: 'BarChart3',
    title: 'Analitik Mendalam',
    description:
      'Dashboard komprehensif dengan wawasan real-time tentang performa pesan, tingkat keterlibatan, dan metrik bisnis.',
    benefits: [
      'Laporan real-time',
      'Analisis sentimen',
      'Metrik keterlibatan',
      'ROI tracking',
    ],
  },
];

const viaChatPricing = [
  {
    name: 'Starter',
    price: '99',
    period: 'bulan',
    description: 'Sempurna untuk bisnis kecil yang baru memulai',
    features: [
      '1.000 pesan/bulan',
      '1 nomor WhatsApp Business',
      'Dukungan dasar',
      'Dashboard analitik',
      'Integrasi webhook',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '299',
    period: 'bulan',
    description: 'Ideal untuk bisnis yang berkembang',
    features: [
      '10.000 pesan/bulan',
      '3 nomor WhatsApp Business',
      'Chatbot AI dasar',
      'Dukungan prioritas',
      'Analitik lanjutan',
      'Integrasi CRM',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '999',
    period: 'bulan',
    description: 'Solusi lengkap untuk perusahaan besar',
    features: [
      'Pesan unlimited',
      'Nomor unlimited',
      'Chatbot AI canggih',
      'Dukungan 24/7',
      'Custom dashboard',
      'Dedicated account manager',
    ],
    popular: false,
  },
];

const viaChatProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Pendaftaran & Verifikasi',
    description:
      'Daftar akun dan verifikasi nomor WhatsApp Business Anda dengan panduan langkah demi langkah.',
    icon: 'UserPlus',
  },
  {
    step: '02',
    title: 'Integrasi API',
    description:
      'Integrasikan API ViaChat ke sistem Anda dengan dokumentasi lengkap dan dukungan teknis.',
    icon: 'Code',
  },
  {
    step: '03',
    title: 'Konfigurasi & Testing',
    description:
      'Konfigurasi chatbot, template pesan, dan lakukan testing menyeluruh sebelum go-live.',
    icon: 'Settings',
  },
  {
    step: '04',
    title: 'Go-Live & Monitoring',
    description:
      'Mulai mengirim pesan dan pantau performa melalui dashboard real-time kami.',
    icon: 'Rocket',
  },
];

const colors = ['#3aa2cf', '#6dad51', '#3aa2cf'];

export default function ViaChat() {
  return (
    <main>
      <ServiceHero
        badgeImage='/assets/viachat-logo.png'
        title='ViaChat'
        subtitle='Penyedia Teknologi API WhatsApp Business Terdepan'
        description='Transformasikan komunikasi pelanggan Anda dengan solusi API WhatsApp Business canggih kami. Aktifkan pesan yang lancar, otomatisasi cerdas, dan pengalaman media yang kaya yang mendorong keterlibatan dan pertumbuhan bisnis.'
        stats={[
          { value: '99%', label: 'Tingkat Pengiriman Pesan' },
          { value: '1Jt+', label: 'Pesan Diproses Setiap Hari' },
          { value: '24/7', label: 'Dukungan Teknis' },
          { value: '2-5 Hari', label: 'Waktu Penyiapan' },
        ]}
        primaryAction={{ text: 'Mulai Uji Coba Gratis', href: '/contact' }}
        secondaryAction={{ text: 'Tonton Demo', href: '#demo' }}
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Layanan', href: '/services' },
          { label: 'ViaChat' },
        ]}
        colors={colors}
      />

      <FeaturesGrid
        title='Fitur-Fitur Hebat yang Mendorong Hasil'
        subtitle='Kemampuan API WhatsApp Business komprehensif yang dirancang untuk bisnis modern'
        features={viaChatFeatures}
        colors={colors.slice(0, 2)}
      />

      <PricingSection
        title='Pilih Paket yang Tepat'
        subtitle='Paket fleksibel yang dirancang untuk setiap kebutuhan bisnis'
        plans={viaChatPricing}
        colors={colors.slice(0, 2)}
      />

      <ProcessSteps
        title='Cara Memulai dengan ViaChat'
        subtitle='Proses sederhana untuk mengintegrasikan WhatsApp API ke bisnis Anda'
        steps={viaChatProcess}
        colors={colors.slice(0, 2)}
      />

      <FAQViaChat colors={colors.slice(0, 2)} />

      <CallToAction />
    </main>
  );
}
