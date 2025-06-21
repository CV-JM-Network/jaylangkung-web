import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart3,
  Bot,
  Check,
  Headphones,
  ImageIcon,
  MessageSquare,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react';

const iconMap = {
  MessageSquare,
  Bot,
  ImageIcon,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Headphones,
};

export type Feature = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  benefits: string[];
};

interface FeaturesGridProps {
  title: string;
  subtitle: string;
  features: Feature[];
  colors: string[];
}

export default function FeaturesGrid({
  title,
  subtitle,
  features,
  colors,
}: FeaturesGridProps) {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>{title}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{subtitle}</p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: `linear-gradient(135deg, ${colors.join(', ')})` }}></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-2'>
          {features.map((feature, index) => {
            const FeatureIcon = iconMap[feature.icon];
            return (
              <Card
                key={index}
                className='group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                <CardHeader>
                  <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#3aa2cf] to-[#6dad51] text-white'>
                    <FeatureIcon className='h-8 w-8' />
                  </div>
                  <CardTitle className='text-xl'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-muted-foreground'>{feature.description}</p>
                  <ul className='space-y-2'>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className='flex items-center gap-2 text-sm'>
                        <Check className='h-4 w-4 text-green-500' />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
