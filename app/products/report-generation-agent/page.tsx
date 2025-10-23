import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroReports from '@/components/reports/HeroReports';
import FeaturesReports from '@/components/reports/FeaturesReports';
import ExampleTasksReports from '@/components/reports/ExampleTasksReports';
import GettingStartedReports from '@/components/reports/GettingStartedReports';
import VideoExamplesReports from '@/components/reports/VideoExamplesReports';
import WhenToUseReports from '@/components/reports/WhenToUseReports';

export default function ReportGenerationAgentPage() {
  return (
    <main>
      <Header />
      <HeroReports />
      <FeaturesReports />
      <ExampleTasksReports />
      <GettingStartedReports />
      <VideoExamplesReports />
      <WhenToUseReports />
      <Footer />
    </main>
  );
}