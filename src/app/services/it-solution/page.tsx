import CallToAction from '@/components/call-to-action';
import DevelopmentProcess from '@/components/development-process';
import { FAQITSolution } from '@/components/faq';
import ITServices from '@/components/it-services';
import ProjectPortfolio from '@/components/project-portfolio';
import ServiceHero from '@/components/service-hero';
import SupportTiers from '@/components/support-tiers';
import TechnologyStack from '@/components/technology-stack';

const colors = ['#38C7BA', '#2C69D3', '#2BD4A4'];

export default function ITSolution() {
  return (
    <main>
      <ServiceHero
        badgeImage=''
        title='IT Solution'
        subtitle='Solusi IT Komprehensif untuk Bisnis Modern'
        description='Transformasikan bisnis Anda dengan layanan IT lengkap kami. Dari pengembangan aplikasi web/mobile, solusi jaringan dan infrastruktur, hingga maintenance server dan konsultasi teknologi - semua dalam satu tempat.'
        stats={[
          { value: '100+', label: 'Proyek Selesai' },
          { value: '50+', label: 'Klien Puas' },
          { value: '10+ Tahun', label: 'Pengalaman Industri' },
          { value: '24/7', label: 'Support & Maintenance' },
        ]}
        primaryAction={{ text: 'Konsultasi Gratis', href: '/contact' }}
        secondaryAction={{ text: 'Lihat Portfolio', href: '#portfolio' }}
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Layanan', href: '/services' },
          { label: 'IT Solution' },
        ]}
        colors={colors}
      />

      <ITServices colors={colors.slice(0, 2)} />

      <TechnologyStack colors={colors.slice(0, 2)} />

      <DevelopmentProcess colors={colors.slice(0, 2)} />

      <ProjectPortfolio colors={colors.slice(0, 2)} />

      <SupportTiers colors={colors.slice(0, 2)} />

      <FAQITSolution colors={colors.slice(0, 2)} />

      <CallToAction />
    </main>
  );
}
