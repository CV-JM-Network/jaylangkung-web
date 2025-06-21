'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <div className='mb-4 flex items-center space-x-2'>
              <Image
                src='/assets/logo.png'
                alt='JM NETWORK Logo'
                width={24}
                height={24}
                className='h-6 w-6'
              />
              <h3 className='text-lg font-bold'>JM NETWORK</h3>
            </div>
            <p className='mb-4 text-sm opacity-90'>Menghubungkan Masa Depan, Hari Ini</p>
            <div className='flex space-x-4'>
              <Link href='#' className='rounded-full bg-slate-700 p-2 hover:bg-blue-600'>
                <Facebook className='h-4 w-4' />
              </Link>
              <Link href='#' className='rounded-full bg-slate-700 p-2 hover:bg-blue-600'>
                <Twitter className='h-4 w-4' />
              </Link>
              <Link href='#' className='rounded-full bg-slate-700 p-2 hover:bg-blue-600'>
                <Linkedin className='h-4 w-4' />
              </Link>
              <Link href='#' className='rounded-full bg-slate-700 p-2 hover:bg-blue-600'>
                <Instagram className='h-4 w-4' />
              </Link>
            </div>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Layanan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/services/viachat' className='hover:text-blue-400'>
                  API ViaChat
                </Link>
              </li>
              <li>
                <Link href='/services/brainet' className='hover:text-blue-400'>
                  Brainet ISP
                </Link>
              </li>
              <li>
                <Link href='/services/networking' className='hover:text-blue-400'>
                  Jaringan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Perusahaan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/about' className='hover:text-blue-400'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-blue-400'>
                  Kontak
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-400'>
                  Karir
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-400'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-semibold'>Dukungan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#' className='hover:text-blue-400'>
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-400'>
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-400'>
                  Referensi API
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-400'>
                  Halaman Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-slate-700 pt-8 text-center text-sm opacity-75'>
          <p>
            &copy; 2024 JM NETWORK. Hak cipta dilindungi. |
            <Link href='#' className='hover:text-blue-400'>
              {' '}
              Kebijakan Privasi
            </Link>{' '}
            |
            <Link href='#' className='hover:text-blue-400'>
              {' '}
              Ketentuan Layanan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
