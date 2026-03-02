import PageHero from '@/components/page-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ketentuan Layanan - JM NETWORK',
  description:
    'Ketentuan layanan JM NETWORK yang mengatur penggunaan layanan ViaChat, Brainnet, dan IT Solution.',
};

export default function KetentuanLayananPage() {
  return (
    <main>
      <PageHero
        title='Ketentuan Layanan'
        subtitle='Syarat dan ketentuan yang mengatur penggunaan layanan JM NETWORK'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Ketentuan Layanan' }]}
      />

      <section className='py-16'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='prose prose-lg max-w-none space-y-8'>
            <p className='text-sm text-muted-foreground'>
              Terakhir diperbarui: 2 Maret 2026
            </p>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>1. Persetujuan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Dengan mengakses dan menggunakan layanan JM NETWORK, termasuk ViaChat,
                Brainnet, dan IT Solution, Anda menyetujui dan terikat oleh ketentuan
                layanan ini. Jika Anda tidak menyetujui ketentuan ini, harap tidak
                menggunakan layanan kami.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>2. Deskripsi Layanan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                JM NETWORK menyediakan layanan berikut:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li>
                  <strong>ViaChat:</strong> Solusi API WhatsApp Business untuk komunikasi
                  pelanggan, pesan otomatis, dan integrasi sistem.
                </li>
                <li>
                  <strong>Brainnet:</strong> Layanan internet fiber-optic premium untuk
                  kebutuhan rumah dan bisnis.
                </li>
                <li>
                  <strong>IT Solution:</strong> Layanan IT komprehensif termasuk
                  pengembangan aplikasi, solusi jaringan, dan konsultasi teknologi.
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>3. Kewajiban Pengguna</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                <li>Memberikan informasi yang akurat dan lengkap saat mendaftar</li>
                <li>Menjaga kerahasiaan akun dan kata sandi Anda</li>
                <li>
                  Tidak menggunakan layanan untuk tujuan ilegal atau yang melanggar hukum
                  Indonesia
                </li>
                <li>Tidak mengganggu atau merusak infrastruktur layanan kami</li>
                <li>Mematuhi semua peraturan dan kebijakan yang berlaku</li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>4. Pembayaran dan Penagihan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Biaya layanan akan ditagih sesuai dengan paket yang dipilih. Pembayaran
                harus dilakukan tepat waktu sesuai dengan jadwal penagihan. Keterlambatan
                pembayaran dapat mengakibatkan penangguhan atau penghentian layanan.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>5. Jaminan Layanan (SLA)</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Kami berkomitmen untuk menyediakan layanan dengan uptime minimal 99% untuk
                Brainnet dan ViaChat. Gangguan layanan yang disebabkan oleh pemeliharaan
                terjadwal akan diinformasikan sebelumnya. Kompensasi untuk gangguan di
                luar SLA akan diberikan sesuai dengan kebijakan yang berlaku.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>6. Batasan Tanggung Jawab</h2>
              <p className='text-muted-foreground leading-relaxed'>
                JM NETWORK tidak bertanggung jawab atas kerugian tidak langsung,
                insidental, atau konsekuensial yang timbul dari penggunaan layanan kami.
                Tanggung jawab maksimal kami terbatas pada jumlah biaya layanan yang telah
                dibayarkan dalam periode penagihan terakhir.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>7. Penghentian Layanan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Kami berhak menghentikan atau menangguhkan layanan jika terjadi
                pelanggaran terhadap ketentuan ini. Anda juga dapat menghentikan layanan
                kapan saja dengan memberikan pemberitahuan tertulis sesuai dengan
                ketentuan yang berlaku untuk masing-masing layanan.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>8. Perubahan Ketentuan</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Kami berhak untuk mengubah ketentuan layanan ini dari waktu ke waktu.
                Perubahan akan diberitahukan melalui email atau pemberitahuan di situs web
                kami. Penggunaan layanan yang berlanjut setelah perubahan dianggap sebagai
                persetujuan terhadap ketentuan yang diperbarui.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>9. Hukum yang Berlaku</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Ketentuan layanan ini diatur oleh dan ditafsirkan sesuai dengan hukum
                Republik Indonesia. Segala perselisihan yang timbul akan diselesaikan
                melalui musyawarah terlebih dahulu, dan jika tidak tercapai, melalui
                pengadilan yang berwenang di Indonesia.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='text-2xl font-bold'>10. Hubungi Kami</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini, silakan
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
