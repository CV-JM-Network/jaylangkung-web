import CallToAction from '@/components/call-to-action';
import { FAQBrainnet } from '@/components/faq';
import FeaturesGrid from '@/components/features-grid';
import InstallationProcess from '@/components/installation-process';
import InternetPlans from '@/components/internet-plans';
import ServiceHero from '@/components/service-hero';
import SpeedComparison from '@/components/speed-comparison';

const brainnetFeatures: {
  icon:
    | 'Zap'
    | 'Shield'
    | 'TrendingUp'
    | 'Headphones'
    | 'MessageSquare'
    | 'Bot'
    | 'ImageIcon'
    | 'BarChart3';
  title: string;
  description: string;
  benefits: string[];
}[] = [
  {
    icon: 'Zap',
    title: 'Kecepatan Kilat',
    description:
      'Hingga 10 Gbps download dan 1 Gbps upload dengan jaringan 100% fiber-optic. Tanpa throttling, tanpa batas data, hanya kecepatan murni.',
    benefits: [
      'Kecepatan upload/download simetris',
      'Performa konsisten 24/7',
      'Infrastruktur siap masa depan',
      'Latensi rendah untuk gaming & video call',
    ],
  },
  {
    icon: 'Shield',
    title: 'Keamanan Enterprise',
    description:
      'Keamanan tingkat bank dengan perlindungan DDoS canggih, koneksi terenkripsi, dan infrastruktur jaringan aman.',
    benefits: [
      'Perlindungan firewall canggih',
      'Mitigasi DDoS included',
      'Kemampuan VPN aman',
      'Monitoring keamanan 24/7',
    ],
  },
  {
    icon: 'TrendingUp',
    title: '99.9% Uptime SLA',
    description:
      'Keandalan terjamin dengan jalur jaringan redundan, sistem backup, dan monitoring proaktif untuk memastikan uptime maksimal.',
    benefits: [
      'Jalur fiber redundan',
      'Sistem failover otomatis',
      'Monitoring jaringan proaktif',
      'Kredit SLA untuk downtime',
    ],
  },
  {
    icon: 'Headphones',
    title: 'Dukungan Ahli 24/7',
    description:
      'Tim dukungan teknis lokal tersedia sepanjang waktu dengan waktu respons rata-rata di bawah 2 menit untuk masalah kritis.',
    benefits: [
      'Tim dukungan lokal',
      'Multiple channel kontak',
      'Resolusi masalah proaktif',
      'Diagnostik remote tersedia',
    ],
  },
];

export default function Brainnet() {
  return (
    <main>
      <ServiceHero
        badgeImage=''
        title='Brainnet'
        subtitle='Penyedia Layanan Internet Premium'
        description='Rasakan konektivitas internet super cepat dan andal dengan infrastruktur jaringan fiber-optic kami. Dirancang untuk bisnis dan rumah yang menuntut yang terbaik dalam kecepatan, keamanan, dan keandalan.'
        stats={[
          { value: '10 Gbps', label: 'Kecepatan Maksimal' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '24/7', label: 'Dukungan Ahli' },
          { value: '<5ms', label: 'Latensi Rata-rata' },
        ]}
        primaryAction={{ text: 'Lihat Paket', href: '#pricing' }}
        secondaryAction={{ text: 'Dapatkan Quote', href: '/contact' }}
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Layanan', href: '/services' },
          { label: 'Brainnet' },
        ]}
        colors={[]}
      />

      <FeaturesGrid
        title='Mengapa Memilih Internet Brainnet'
        subtitle='Rasakan perbedaan dengan teknologi fiber-optic mutakhir dan kualitas layanan yang tak tertandingi'
        features={brainnetFeatures}
        colors={['#3aa2cf', '#6dad51', '#3aa2cf']} // change this later
      />

      <SpeedComparison />

      <InternetPlans />

      <InstallationProcess />

      <FAQBrainnet />

      <CallToAction />
    </main>
  );
}
