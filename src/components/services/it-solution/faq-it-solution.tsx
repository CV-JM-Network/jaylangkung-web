import FAQ, { type FAQItem } from '@/components/services/_shared/faq';

const itSolutionQuestions: FAQItem[] = [
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
