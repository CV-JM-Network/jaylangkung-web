import PageHero from '@/components/page-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - JM NETWORK',
  description:
    'Kebijakan privasi JM NETWORK yang menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.',
};

export default function KebijakanPrivasiPage() {
  return (
    <main>
      <PageHero
        title='Kebijakan Privasi'
        subtitle='Komitmen kami dalam melindungi privasi dan data pribadi Anda'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Kebijakan Privasi' }]}
      />

      <section className='py-16'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='prose prose-lg max-w-none space-y-8'>
            <p className='text-sm text-muted-foreground'>
              Terakhir diperbarui: 2 Maret 2026
            </p>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>1. Pendahuluan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                JM NETWORK (&quot;kami&quot;, &quot;perusahaan&quot;) berkomitmen untuk
                melindungi privasi pengguna layanan kami. Kebijakan Privasi ini
                menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan
                melindungi informasi pribadi Anda saat Anda menggunakan layanan ViaChat,
                Brainnet, IT Solution, dan situs web kami.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>2. Informasi yang Kami Kumpulkan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Kami dapat mengumpulkan informasi berikut:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li>
                  <strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon,
                  nama perusahaan yang Anda berikan melalui formulir kontak atau
                  pendaftaran layanan.
                </li>
                <li>
                  <strong>Informasi Teknis:</strong> Alamat IP, jenis browser, perangkat
                  yang digunakan, dan data log akses untuk keperluan keamanan dan
                  analitik.
                </li>
                <li>
                  <strong>Informasi Layanan:</strong> Data penggunaan layanan, riwayat
                  transaksi, dan komunikasi terkait dukungan teknis.
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>3. Penggunaan Informasi</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li>Menyediakan dan mengelola layanan yang Anda gunakan</li>
                <li>
                  Menghubungi Anda terkait pertanyaan, dukungan, atau pembaruan layanan
                </li>
                <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                <li>Memenuhi kewajiban hukum dan regulasi yang berlaku</li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>4. Perlindungan Data</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang
                memadai untuk melindungi informasi pribadi Anda dari akses tidak sah,
                perubahan, pengungkapan, atau penghancuran. Ini termasuk enkripsi data,
                kontrol akses ketat, dan audit keamanan berkala.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>5. Berbagi Informasi</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi
                Anda kepada pihak ketiga. Kami dapat membagikan informasi hanya dalam
                keadaan berikut:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi kewajiban hukum atau perintah pengadilan</li>
                <li>
                  Kepada penyedia layanan pihak ketiga yang membantu operasional kami,
                  dengan perjanjian kerahasiaan yang ketat
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>6. Hak Anda</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi
                pribadi Anda yang kami simpan. Untuk menggunakan hak ini, silakan hubungi
                kami melalui email di{' '}
                <a
                  href='mailto:admin@jaylangkung.co.id'
                  className='text-blue-600 hover:underline'>
                  admin@jaylangkung.co.id
                </a>
                .
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>7. Hubungi Kami</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan
                hubungi kami:
              </p>
              <ul className='list-none space-y-1 text-muted-foreground'>
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href='mailto:admin@jaylangkung.co.id'
                    className='text-blue-600 hover:underline'>
                    admin@jaylangkung.co.id
                  </a>
                </li>
                <li>
                  <strong>Telepon:</strong>{' '}
                  <a href='tel:+6287847096138' className='text-blue-600 hover:underline'>
                    +62 878-4709-6138
                  </a>
                </li>
                <li>
                  <strong>Alamat:</strong> Perum Pondok Mutiara Asro Blok J3/21,
                  Desa/Kelurahan Pandanlandung, Kec. Wagir, Kab. Malang, Jawa Timur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
