import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';
import PageHero from '@/components/page-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami - JM NETWORK',
  description:
    'Hubungi JM NETWORK untuk konsultasi gratis tentang layanan ViaChat, Brainnet, dan IT Solution. Tim kami siap membantu Anda.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title='Hubungi Kami'
        subtitle='Siap untuk mentransformasi bisnis Anda? Mari mulai percakapan'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Hubungi Kami' }]}
      />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
