import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JM NETWORK - Layanan Komunikasi & Jaringan Inovatif',
  description:
    'Startup teknologi terkemuka yang menyediakan solusi API WhatsApp mutakhir, layanan internet kecepatan tinggi, dan solusi jaringan perusahaan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
