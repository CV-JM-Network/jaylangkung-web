import FAQ, { type FAQItem } from '@/components/services/_shared/faq';

const viaChatQuestions: FAQItem[] = [
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
