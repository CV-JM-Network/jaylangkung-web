import CallToAction from '@/components/call-to-action';
import PageHero from '@/components/page-hero';
import ServicesIntro from '@/components/services-intro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan - JM NETWORK',
  description:
    'Jelajahi layanan premium JM NETWORK: ViaChat API WhatsApp, Brainnet internet fiber-optic, dan IT Solution komprehensif.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title='Layanan Premium Kami'
        subtitle='Solusi teknologi komprehensif yang dirancang untuk mengubah bisnis Anda'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Layanan' }]}
      />
      <ServicesIntro />
      <CallToAction />
    </main>
  );
}
