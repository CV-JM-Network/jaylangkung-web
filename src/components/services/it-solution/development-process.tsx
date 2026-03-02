import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Headphones,
  MessageSquareText,
  PenTool,
  Rocket,
  TestTube,
} from 'lucide-react';

interface DevProcessProps {
  colors: string[];
}

const processSteps = [
  {
    step: '01',
    icon: MessageSquareText,
    title: 'Konsultasi & Analisis',
    description: 'Memahami kebutuhan bisnis Anda dan menganalisis solusi terbaik',
    details: [
      'Analisis kebutuhan bisnis',
      'Studi kelayakan teknis',
      'Estimasi timeline & budget',
      'Proposal solusi custom',
    ],
    timeframe: '1-3 hari',
    deliverable: 'Proposal & Timeline',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Desain & Perencanaan',
    description: 'Merancang arsitektur sistem dan user interface yang optimal',
    details: [
      'System architecture design',
      'Database schema design',
      'UI/UX wireframes',
      'Technical specifications',
    ],
    timeframe: '3-7 hari',
    deliverable: 'Design Documents',
  },
  {
    step: '03',
    icon: Code,
    title: 'Development & Coding',
    description: 'Implementasi solusi dengan teknologi terdepan dan best practices',
    details: [
      'Frontend development',
      'Backend API development',
      'Database implementation',
      'Third-party integrations',
    ],
    timeframe: '2-8 minggu',
    deliverable: 'Working Application',
  },
  {
    step: '04',
    icon: TestTube,
    title: 'Testing & Quality Assurance',
    description: 'Testing menyeluruh untuk memastikan kualitas dan performa optimal',
    details: [
      'Unit & integration testing',
      'Performance testing',
      'Security testing',
      'User acceptance testing',
    ],
    timeframe: '1-2 minggu',
    deliverable: 'Test Reports',
  },
  {
    step: '05',
    icon: Rocket,
    title: 'Deployment & Go-Live',
    description: 'Deploy aplikasi ke production dengan monitoring dan optimasi',
    details: [
      'Production deployment',
      'Performance monitoring',
      'Security hardening',
      'Go-live support',
    ],
    timeframe: '2-5 hari',
    deliverable: 'Live Application',
  },
  {
    step: '06',
    icon: Headphones,
    title: 'Support & Maintenance',
    description: 'Dukungan berkelanjutan dan maintenance untuk performa optimal',
    details: [
      '24/7 monitoring',
      'Bug fixes & updates',
      'Performance optimization',
      'Feature enhancements',
    ],
    timeframe: 'Ongoing',
    deliverable: 'Continuous Support',
  },
];

export default function DevelopmentProcess({ colors }: DevProcessProps) {
  // Helper functions for style consistency
  const getGradientBg = () => `linear-gradient(135deg, ${colors.join(', ')})`;

  return (
    <section className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>Proses Development Kami</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Metodologi proven yang memastikan proyek selesai tepat waktu dan sesuai
            ekspektasi
          </p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: getGradientBg() }}></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <Card
                key={index}
                className='group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                <div className='absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white'>
                  {step.step}
                </div>
                <CardContent className='p-6 pt-8'>
                  <div
                    className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white'
                    style={{ background: getGradientBg() }}>
                    <StepIcon className='h-6 w-6' />
                  </div>

                  <h3 className='mb-2 text-lg font-semibold'>{step.title}</h3>
                  <p className='mb-4 text-sm text-muted-foreground'>{step.description}</p>

                  <div className='mb-4 space-y-2'>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className='flex items-center gap-2 text-xs'>
                        <div className='h-1.5 w-1.5 rounded-full bg-blue-500' />
                        <span className='text-muted-foreground'>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className='flex items-center justify-between'>
                    <Badge variant='outline' className='text-xs'>
                      {step.timeframe}
                    </Badge>
                    <Badge className='bg-green-100 text-green-800 text-xs'>
                      {step.deliverable}
                    </Badge>
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
