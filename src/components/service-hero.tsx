/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceHeroProps {
  badgeImage: string;
  title: string;
  subtitle: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
  breadcrumb: Array<{
    label: string;
    href?: string;
  }>;
  colors: string[];
}

export default function ServiceHero({
  badgeImage,
  title,
  subtitle,
  description,
  stats,
  primaryAction,
  secondaryAction,
  breadcrumb,
  colors,
}: ServiceHeroProps) {
  return (
    <section
      className='relative overflow-hidden py-20 text-white'
      style={{
        background: `linear-gradient(135deg, ${colors.join(', ')})`,
      }}>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-5xl font-bold text-slate-700 lg:text-6xl'>{title}</h1>
              <p className='text-xl font-semibold text-slate-700'>{subtitle}</p>
              <p className='text-lg leading-relaxed opacity-90'>{description}</p>
            </div>
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-2xl font-bold text-white lg:text-3xl'>
                    {stat.value}
                  </div>
                  <div className='text-sm opacity-90'>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Button asChild size='lg' className='bg-red-500 hover:bg-red-600'>
                <Link href={primaryAction.href}>{primaryAction.text}</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-blue-600'>
                <Link href={secondaryAction.href}>{secondaryAction.text}</Link>
              </Button>
            </div>
            <div className='text-sm opacity-75'>
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  {item.href ? (
                    <Link href={item.href} className='hover:underline'>
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {index < breadcrumb.length - 1 && <span className='mx-2'>/</span>}
                </span>
              ))}
            </div>
          </div>
          <div className='flex justify-center'>
            {badgeImage !== '' && (
              <img src={badgeImage} alt='Service Hero' width={300} height={300} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
