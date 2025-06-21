import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 py-20 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl font-bold lg:text-5xl'>{title}</h1>
        <p className='mt-4 text-lg opacity-90'>{subtitle}</p>
        <div className='mt-6 text-sm opacity-80'>
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
    </section>
  );
}
