import CallToAction from '@/components/call-to-action';
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
      <AwardsRecognition />
      <CallToAction />
    </main>
  );
}
