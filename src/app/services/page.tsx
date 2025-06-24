import CallToAction from '@/components/call-to-action';
import PageHero from '@/components/page-hero';
import ServicesIntro from '@/components/services-intro';

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title='Layanan Premium Kami'
        subtitle='Solusi teknologi komprehensif yang dirancang untuk mengubah bisnis Anda'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Layanan' }]}
      />
      <ServicesIntro />
      {/* <MainServices />
      <ServiceComparison />
      <IndustrySolutions />
      <ServiceProcess />
      <ServiceBenefits /> */}
      <CallToAction />
    </main>
  );
}
