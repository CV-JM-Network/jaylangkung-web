import PricingButton from '@/components/pricing-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  colors: string[];
}

export default function PricingSection({
  title,
  subtitle,
  plans,
  colors,
}: PricingSectionProps) {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>{title}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{subtitle}</p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: `linear-gradient(135deg, ${colors.join(', ')}` }}></div>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-3'>
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 bg-white hover:-translate-y-2 hover:shadow-xl ${
                plan.popular ? 'shadow-lg' : ''
              }`}
              style={plan.popular ? { borderColor: colors[0], borderWidth: 1 } : {}}>
              {plan.popular && (
                <Badge
                  className='absolute -top-3 left-1/2 -translate-x-1/2 text-white'
                  style={{ backgroundColor: colors[0] }}>
                  Paling Populer
                </Badge>
              )}
              <CardHeader className='text-center'>
                <CardTitle className='text-2xl'>{plan.name}</CardTitle>
                <p className='text-muted-foreground'>{plan.description}</p>
                <div className='mt-4'>
                  <span className='text-sm text-muted-foreground'>Rp</span>
                  <span className='text-4xl font-bold'>{plan.price}</span>
                  <span className='text-muted-foreground'>/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <ul className='space-y-3'>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center gap-2'>
                      <Check className='h-4 w-4 text-green-500' />
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <PricingButton popular={plan.popular} color={colors[0]} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
