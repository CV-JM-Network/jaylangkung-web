import { Card, CardContent } from '@/components/ui/card';
import { Code, Rocket, Settings, UserPlus } from 'lucide-react';

const iconMap = {
  UserPlus,
  Code,
  Settings,
  Rocket,
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

interface ProcessStepsProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  colors: string[];
}

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  colors,
}: ProcessStepsProps) {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold lg:text-4xl'>{title}</h2>
          <p className='mt-4 text-lg text-muted-foreground'>{subtitle}</p>
          <div
            className='mx-auto mt-4 h-1 w-16'
            style={{ background: `linear-gradient(135deg, ${colors.join(', ')}` }}></div>
        </div>

        <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => {
            const StepIcon = iconMap[step.icon];
            return (
              <Card
                key={index}
                className='group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                <div
                  className='absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white'
                  style={{ backgroundColor: colors[index % colors.length] }}>
                  {step.step}
                </div>
                <CardContent className='p-6 pt-8'>
                  <div
                    className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-white'
                    style={{
                      backgroundColor: colors[index % colors.length],
                    }}>
                    <StepIcon className='h-6 w-6' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold'>{step.title}</h3>
                  <p className='text-sm text-muted-foreground'>{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
