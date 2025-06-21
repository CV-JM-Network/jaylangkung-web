import CallToAction from '@/components/call-to-action';
import CompanyMissionCulture from '@/components/company-mission-culture';
import CompanyOverview from '@/components/company-overview';
import CompanyTeam from '@/components/company-team';
import PageHero from '@/components/page-hero';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title='Tentang JM NETWORK'
        subtitle='Mempelopori masa depan komunikasi digital dan konektivitas sejak 2015'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Tentang Kami' }]}
      />
      <CompanyOverview />
      <CompanyMissionCulture />
      <CompanyTeam />
      <CallToAction />
    </main>
  );
}
