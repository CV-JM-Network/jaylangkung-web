/* eslint-disable @next/next/no-img-element */
'use client';

import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <div className='mb-4 flex items-center space-x-2'>
              <img
                src='/assets/logo.png'
                alt='JM NETWORK Logo'
                width={24}
                height={24}
                className='h-6 w-6'
              />
              <h3 className='text-lg font-bold'>JM NETWORK</h3>
            </div>
            <p className='mb-4 text-sm opacity-90'>We Are Connected</p>
            <div className='flex space-x-4'>
              <Link
                href='https://www.facebook.com/profile.php?id=100063564693469'
                target='_blank'
                className='rounded-full bg-slate-700 p-2 hover:bg-red-500'>
                <Facebook className='h-4 w-4' />
              </Link>
              <Link
                href='https://www.instagram.com/jmnetwork21/'
                target='_blank'
                className='rounded-full bg-slate-700 p-2 hover:bg-red-500'>
                <Instagram className='h-4 w-4' />
              </Link>
            </div>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Layanan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/services/viachat' className='hover:text-red-400'>
                  API ViaChat
                </Link>
              </li>
              <li>
                <Link href='/services/brainnet' className='hover:text-red-400'>
                  Brainnet ISP
                </Link>
              </li>
              <li>
                <Link href='/services/it-solution' className='hover:text-red-400'>
                  IT Solution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Perusahaan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/about' className='hover:text-red-400'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-red-400'>
                  Kontak
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-red-400'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Dukungan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#' className='hover:text-red-400'>
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-red-400'>
                  Referensi API
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-red-400'>
                  Halaman Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-slate-700 pt-8 text-center text-sm opacity-75'>
          <p>
            &copy; 2015 JM NETWORK. Hak cipta dilindungi. |
            <Link href='#' className='hover:text-red-400'>
              {' '}
              Kebijakan Privasi
            </Link>{' '}
            |
            <Link href='#' className='hover:text-red-400'>
              {' '}
              Ketentuan Layanan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
