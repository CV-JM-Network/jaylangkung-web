import CallToAction from '@/components/call-to-action';
import CompanyCulture from '@/components/company-culture';
import CompanyOverview from '@/components/company-overview';
import LeadershipTeam from '@/components/leadership-team';
import MissionVisionValues from '@/components/mission-vision-values';
import PageHero from '@/components/page-hero';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title='Tentang JM NETWORK'
        subtitle='Mempelopori masa depan komunikasi digital dan konektivitas sejak 2020'
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Tentang Kami' }]}
      />
      <CompanyOverview />
      <MissionVisionValues />
      <LeadershipTeam />
      <CompanyCulture />
      <CallToAction />
    </main>
  );
}
