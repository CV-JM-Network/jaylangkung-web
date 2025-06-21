import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  HardHat,
  MousePointer,
  Route,
  Shield,
  Wifi,
  Wrench,
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: MousePointer,
    title: 'Pesan Online',
    description:
      'Pilih paket Anda dan jadwalkan instalasi online hanya dalam beberapa menit. Sistem kami akan otomatis mengecek ketersediaan di alamat Anda.',
    details: [
      'Pengecekan ketersediaan instan',
      'Pemilihan paket online',
      'Penjadwalan instalasi',
      'Konfirmasi pesanan',
    ],
    timeframe: '5 menit',
  },
  {
    step: '02',
    icon: Route,
    title: 'Survey Lokasi',
    description:
      'Tim teknis kami melakukan survey lokasi singkat untuk merencanakan rute fiber optimal dan penempatan peralatan.',
    details: [
      'Analisis rute fiber terbaik',
      'Penentuan titik masuk',
      'Perencanaan penempatan router',
      'Estimasi waktu instalasi',
    ],
    timeframe: '1-2 hari',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Instalasi Profesional',
    description:
      'Teknisi bersertifikat memasang koneksi fiber Anda dan mengkonfigurasi semua peralatan untuk performa optimal.',
    details: [
      'Pemasangan kabel fiber',
      'Instalasi ONT dan router',
      'Konfigurasi jaringan',
      'Testing kecepatan',
    ],
    timeframe: '2-4 jam',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Testing & Aktivasi',
    description:
      'Testing kecepatan lengkap dan optimasi jaringan untuk memastikan Anda mendapatkan performa penuh dari paket Anda.',
    details: [
      'Speed test komprehensif',
      'Optimasi WiFi coverage',
      'Setup keamanan',
      'Training penggunaan',
    ],
    timeframe: '30 menit',
  },
];

const installationFeatures = [
  {
    icon: HardHat,
    title: 'Teknisi Bersertifikat',
    description:
      'Tim instalasi profesional dengan sertifikasi dan pengalaman bertahun-tahun',
  },
  {
    icon: Wrench,
    title: 'Peralatan Professional',
    description: 'Menggunakan tools dan equipment grade enterprise untuk hasil terbaik',
  },
  {
    icon: Wifi,
    title: 'Instalasi Bersih',
    description: 'Pemasangan rapi tanpa merusak estetika rumah atau kantor Anda',
  },
];

const testingResults = [
  {
    icon: CheckCircle,
    metric: 'Speed Test',
    status: '✓ Passed',
    description: 'Verifikasi kecepatan sesuai paket',
  },
  {
    icon: Wifi,
    metric: 'WiFi Coverage',
    status: '✓ Optimized',
    description: 'Coverage optimal di seluruh area',
  },
  {
    icon: Shield,
    metric: 'Security Setup',
    status: '✓ Configured',
    description: 'Keamanan jaringan terkonfigurasi',
  },
];

export default function InstallationProcess() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Instalasi Cepat & Mudah</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Terhubung dengan cepat melalui proses instalasi yang efisien
          </p>
          <div className='mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600'></div>
        </div>

        <div className='mt-16 space-y-16'>
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            const isReverse = index % 2 === 1;

            return (
              <div
                key={index}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  isReverse ? 'lg:grid-flow-col-dense' : ''
                }`}>
                <div className={`space-y-6 ${isReverse ? 'lg:col-start-2' : ''}`}>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
                      <StepIcon className='h-8 w-8' />
                    </div>
                    <div>
                      <Badge variant='outline' className='mb-2'>
                        Langkah {step.step}
                      </Badge>
                      <h3 className='text-2xl font-bold'>{step.title}</h3>
                    </div>
                  </div>

                  <p className='text-lg text-muted-foreground'>{step.description}</p>

                  <div className='grid gap-3 sm:grid-cols-2'>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className='flex items-center gap-2 text-sm'>
                        <div className='h-2 w-2 rounded-full bg-blue-500' />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className='flex items-center gap-2'>
                    <Badge className='bg-green-100 text-green-800'>
                      Estimasi Waktu: {step.timeframe}
                    </Badge>
                  </div>
                </div>

                <div className={`${isReverse ? 'lg:col-start-1' : ''}`}>
                  <Card className='overflow-hidden'>
                    <CardContent className='p-0'>
                      {index === 0 && (
                        <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8'>
                          <div className='space-y-4'>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                              <div className='mb-2 text-sm font-medium text-gray-600'>
                                Pilih Paket
                              </div>
                              <div className='text-lg font-bold text-blue-600'>
                                Home Pro - 500 Mbps
                              </div>
                            </div>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                              <div className='mb-2 text-sm font-medium text-gray-600'>
                                Alamat Instalasi
                              </div>
                              <div className='text-sm'>Jl. Contoh No. 123, Malang</div>
                              <Badge className='mt-2 bg-green-100 text-green-800'>
                                ✓ Area Terlayani
                              </Badge>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className='bg-gradient-to-br from-green-50 to-blue-50 p-8'>
                          <div className='space-y-4'>
                            <div className='rounded-lg bg-white p-4 shadow-sm'>
                              <div className='mb-3 text-sm font-medium text-gray-600'>
                                Rute Fiber
                              </div>
                              <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                  <div className='h-3 w-3 rounded-full bg-blue-500' />
                                  <span className='text-sm'>Tiang Utama</span>
                                </div>
                                <div className='h-px flex-1 bg-blue-300' />
                                <div className='flex items-center gap-2'>
                                  <div className='h-3 w-3 rounded-full bg-green-500' />
                                  <span className='text-sm'>Rumah Anda</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className='bg-gradient-to-br from-orange-50 to-red-50 p-8'>
                          <div className='grid gap-4 sm:grid-cols-3'>
                            {installationFeatures.map((feature, featureIndex) => {
                              const FeatureIcon = feature.icon;
                              return (
                                <div key={featureIndex} className='text-center'>
                                  <div className='mb-2 flex justify-center'>
                                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm'>
                                      <FeatureIcon className='h-6 w-6 text-orange-600' />
                                    </div>
                                  </div>
                                  <div className='text-sm font-medium'>
                                    {feature.title}
                                  </div>
                                  <div className='text-xs text-muted-foreground'>
                                    {feature.description}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        <div className='bg-gradient-to-br from-green-50 to-emerald-50 p-8'>
                          <div className='space-y-4'>
                            {testingResults.map((result, resultIndex) => {
                              const ResultIcon = result.icon;
                              return (
                                <div
                                  key={resultIndex}
                                  className='flex items-center gap-4 rounded-lg bg-white p-3 shadow-sm'>
                                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-green-100'>
                                    <ResultIcon className='h-5 w-5 text-green-600' />
                                  </div>
                                  <div className='flex-1'>
                                    <div className='flex items-center justify-between'>
                                      <span className='font-medium'>{result.metric}</span>
                                      <span className='text-sm font-bold text-green-600'>
                                        {result.status}
                                      </span>
                                    </div>
                                    <div className='text-sm text-muted-foreground'>
                                      {result.description}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
