import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Phone, Tv, X, Zap } from 'lucide-react';

interface SpeedComparisonProps {
  colors: string[];
}

const comparisons = [
  {
    icon: Phone,
    title: 'Internet DSL',
    badge: { text: 'Dasar', variant: 'outline' as const },
    downloadSpeed: { value: 'Hingga 100 Mbps', percentage: 10 },
    uploadSpeed: { value: 'Hingga 10 Mbps', percentage: 5 },
    latency: { value: '30-70ms', percentage: 20 },
    features: [
      { text: 'Keterbatasan jarak', available: false },
      { text: 'Upload lebih lambat', available: false },
      { text: 'Infrastruktur lama', available: false },
      { text: 'Opsi biaya rendah', available: true },
    ],
    highlight: false,
  },
  {
    icon: Tv,
    title: 'Internet Kabel',
    badge: { text: 'Standar', variant: 'outline' as const },
    downloadSpeed: { value: 'Hingga 500 Mbps', percentage: 30 },
    uploadSpeed: { value: 'Hingga 50 Mbps', percentage: 15 },
    latency: { value: '20-50ms', percentage: 40 },
    features: [
      { text: 'Bandwidth terbagi', available: false },
      { text: 'Kecepatan asimetris', available: false },
      { text: 'Tergantung cuaca', available: false },
      { text: 'Tersedia luas', available: true },
    ],
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Brainnet Fiber',
    badge: { text: 'Performa Terbaik', variant: 'outline' as const },
    downloadSpeed: { value: 'Hingga 1 Gbps', percentage: 100 },
    uploadSpeed: { value: 'Hingga 1 Gbps', percentage: 100 },
    latency: { value: '<5ms', percentage: 95 },
    features: [
      { text: 'Tanpa batas data', available: true },
      { text: 'Kecepatan simetris', available: true },
      { text: '99% uptime', available: true },
      { text: 'Teknologi masa depan', available: true },
    ],
    highlight: true,
  },
];

export default function SpeedComparison({ colors }: SpeedComparisonProps) {
  const getHighlightBorder = () => `2px solid ${colors[0]}`;
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;
  const getIconWrapperStyle = (highlight: boolean) =>
    highlight ? { background: getGradientBg() } : { background: '#f3f4f6' }; // fallback for bg-gray-100
  const getBarColor = (highlight: boolean) => (highlight ? 'bg-blue-500' : 'bg-gray-400');

  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Perbandingan Kecepatan</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Lihat bagaimana internet fiber-optic Brainnet dibandingkan dengan jenis
            koneksi lainnya
          </p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: getGradientBg() }}></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-3'>
          {comparisons.map((comparison, index) => {
            const ComparisonIcon = comparison.icon;
            const isHighlight = comparison.highlight;
            return (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isHighlight ? 'shadow-lg scale-105' : ''
                }`}
                style={isHighlight ? { border: getHighlightBorder() } : {}}>
                <CardHeader className='text-center'>
                  <div className='mb-4 flex justify-center'>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        isHighlight ? 'text-white' : 'text-gray-600'
                      }`}
                      style={getIconWrapperStyle(isHighlight)}>
                      <ComparisonIcon className='h-8 w-8' />
                    </div>
                  </div>
                  <CardTitle className='text-xl'>{comparison.title}</CardTitle>
                  <Badge variant={comparison.badge.variant}>
                    {comparison.badge.text}
                  </Badge>
                </CardHeader>

                <CardContent className='space-y-6'>
                  <div className='space-y-4'>
                    {/* Download Speed */}
                    <div className='space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span>Kecepatan Download</span>
                        <span className='font-medium'>
                          {comparison.downloadSpeed.value}
                        </span>
                      </div>
                      <div className='h-2 rounded-full bg-gray-200'>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(
                            isHighlight,
                          )}`}
                          style={{ width: `${comparison.downloadSpeed.percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Upload Speed */}
                    <div className='space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span>Kecepatan Upload</span>
                        <span className='font-medium'>
                          {comparison.uploadSpeed.value}
                        </span>
                      </div>
                      <div className='h-2 rounded-full bg-gray-200'>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(
                            isHighlight,
                          )}`}
                          style={{ width: `${comparison.uploadSpeed.percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Latency */}
                    <div className='space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span>Latensi</span>
                        <span className='font-medium'>{comparison.latency.value}</span>
                      </div>
                      <div className='h-2 rounded-full bg-gray-200'>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getBarColor(
                            isHighlight,
                          )}`}
                          style={{ width: `${comparison.latency.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className='space-y-2'>
                    {comparison.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className='flex items-center gap-2 text-sm'>
                        {feature.available ? (
                          <Check className='h-4 w-4 text-green-500' />
                        ) : (
                          <X className='h-4 w-4 text-red-500' />
                        )}
                        <span
                          className={
                            feature.available
                              ? 'text-foreground'
                              : 'text-muted-foreground'
                          }>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
