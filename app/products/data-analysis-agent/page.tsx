import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroDataAnalysis from '@/components/data-analysis/HeroDataAnalysis';
import FeaturesDataAnalysis from '@/components/data-analysis/FeaturesDataAnalysis';
import ExampleTasksDataAnalysis from '@/components/data-analysis/ExampleTasksDataAnalysis';
import GettingStartedDataAnalysis from '@/components/data-analysis/GettingStartedDataAnalysis';
import VideoExamplesDataAnalysis from '@/components/data-analysis/VideoExamplesDataAnalysis';
import WhenToUseDataAnalysis from '@/components/data-analysis/WhenToUseDataAnalysis';

export default function DataAnalysisAgentPage() {
  return (
    <main>
      <Header />
      <HeroDataAnalysis />
      <FeaturesDataAnalysis />
      <ExampleTasksDataAnalysis />
      <GettingStartedDataAnalysis />
      <VideoExamplesDataAnalysis />
      <WhenToUseDataAnalysis />
      <Footer />
    </main>
  );
}