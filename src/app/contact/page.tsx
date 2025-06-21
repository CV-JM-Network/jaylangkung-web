import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';
import PageHero from '@/components/page-hero';
// import { FAQ } from '@/components/faq';
// import { MapSection } from '@/components/map-section';

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
      {/* <FAQ />
      <MapSection /> */}
    </main>
  );
}
