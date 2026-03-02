/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const services = [
  {
    title: 'ViaChat',
    href: '/services/viachat',
    description: 'Solusi API WhatsApp',
  },
  {
    title: 'Brainnet',
    href: '/services/brainnet',
    description: 'Layanan internet kecepatan tinggi',
  },
  {
    title: 'IT Solution',
    href: '/services/it-solution',
    description: 'Layanan & solusi IT komprehensif',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className='sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-xl'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <img
            src='/assets/logo.png'
            alt='JM NETWORK Logo'
            width={32}
            height={32}
            className='h-8 w-8'
          />
          <div>
            <h1 className='text-xl font-bold'>JM NETWORK</h1>
            <p className='text-xs opacity-90'>We Are Connected</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/'>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    isActive('/') && 'bg-white/20',
                  )}>
                  <span>Beranda</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/about'>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    isActive('/about') && 'bg-white/20',
                  )}>
                  <span>Tentang Kami</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='hover:bg-white/20 data-[state=open]:bg-white/20'>
                Layanan
              </NavigationMenuTrigger>
              <NavigationMenuContent className='bg-white text-black'>
                <ul className='grid w-[300px] gap-3'>
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild className='hover:bg-sky-100'>
                        <Link href={service.href}>
                          <div className='text-sm font-bold leading-none text-gray-800'>
                            {service.title}
                          </div>
                          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/contact'>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    isActive('/contact') && 'bg-white/20',
                  )}>
                  <span>Kontak</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon' className='text-white hover:bg-white/20'>
              <Menu className='h-5 w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] bg-white sm:w-[400px]'>
            <SheetTitle className='sr-only'>Menu Navigasi</SheetTitle>
            <div className='mt-6 flex flex-col space-y-3 font-medium'>
              <Link
                href='/'
                className={cn(
                  'group flex items-center rounded-xl px-4 py-3 text-lg transition-all duration-300 animate-in slide-in-from-right-8 fade-in-0 hover:bg-slate-100 hover:text-blue-600',
                  isActive('/') ? 'bg-sky-50 text-blue-600 shadow-sm' : 'text-slate-700',
                )}
                style={{ animationDelay: '100ms', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}>
                Beranda
              </Link>

              <Link
                href='/about'
                className={cn(
                  'group flex items-center rounded-xl px-4 py-3 text-lg transition-all duration-300 animate-in slide-in-from-right-8 fade-in-0 hover:bg-slate-100 hover:text-blue-600',
                  isActive('/about')
                    ? 'bg-sky-50 text-blue-600 shadow-sm'
                    : 'text-slate-700',
                )}
                style={{ animationDelay: '150ms', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}>
                Tentang Kami
              </Link>

              <div
                className='animate-in slide-in-from-right-8 fade-in-0 rounded-xl bg-slate-50 p-4'
                style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                <p className='mb-3 text-sm font-semibold tracking-wider text-slate-500 uppercase'>
                  Layanan
                </p>
                <div className='flex flex-col space-y-1'>
                  {services.map((service, index) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={cn(
                        'group flex flex-col rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white hover:shadow-sm',
                        isActive(service.href)
                          ? 'bg-white shadow-sm ring-1 ring-slate-200'
                          : '',
                      )}
                      onClick={() => setIsOpen(false)}>
                      <span
                        className={cn(
                          'text-md font-medium transition-colors group-hover:text-blue-600',
                          isActive(service.href) ? 'text-blue-600' : 'text-slate-700',
                        )}>
                        {service.title}
                      </span>
                      <span className='text-xs text-slate-500'>
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href='/contact'
                className={cn(
                  'group flex items-center rounded-xl px-4 py-3 text-lg transition-all duration-300 animate-in slide-in-from-right-8 fade-in-0 hover:bg-slate-100 hover:text-blue-600',
                  isActive('/contact')
                    ? 'bg-sky-50 text-blue-600 shadow-sm'
                    : 'text-slate-700',
                )}
                style={{ animationDelay: '250ms', animationFillMode: 'both' }}
                onClick={() => setIsOpen(false)}>
                Kontak
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
