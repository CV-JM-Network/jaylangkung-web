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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const services = [
  {
    title: 'ViaChat',
    href: '/services/viachat',
    description: 'WhatsApp API solutions',
  },
  {
    title: 'Brainet',
    href: '/services/brainet',
    description: 'High-speed internet services',
  },
  {
    title: 'Jaringan',
    href: '/services/networking',
    description: 'Enterprise networking solutions',
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
          <Image
            src='/assets/logo.png'
            alt='JM NETWORK Logo'
            width={32}
            height={32}
            className='h-8 w-8'
          />
          <div>
            <h1 className='text-xl font-bold'>JM NETWORK</h1>
            <p className='text-xs opacity-90'>Transformasi Masa Depan Dimulai Hari Ini</p>
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
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    isActive('/about') && 'bg-white/20',
                  )}>
                  Tentang Kami
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='hover:bg-white/20 data-[state=open]:bg-white/20'>
                Layanan
              </NavigationMenuTrigger>
              <NavigationMenuContent className='bg-white text-black'>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                          <div className='text-sm font-medium leading-none text-gray-900'>
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
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    isActive('/contact') && 'bg-white/20',
                  )}>
                  Kontak
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
          <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
            <nav className='flex flex-col space-y-4'>
              <Link
                href='/'
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  isActive('/') && 'text-primary',
                )}
                onClick={() => setIsOpen(false)}>
                Beranda
              </Link>
              <Link
                href='/about'
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  isActive('/about') && 'text-primary',
                )}
                onClick={() => setIsOpen(false)}>
                Tentang Kami
              </Link>
              <div className='space-y-2'>
                <p className='text-lg font-medium'>Layanan</p>
                <div className='ml-4 space-y-2'>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className='block text-sm text-muted-foreground hover:text-primary'
                      onClick={() => setIsOpen(false)}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href='/contact'
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  isActive('/contact') && 'text-primary',
                )}
                onClick={() => setIsOpen(false)}>
                Kontak
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
