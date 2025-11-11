import Header from '@/components/Header';
import Hero from '@/components/spreadsheet/HeroSpreadsheet';
import Features from '@/components/spreadsheet/FeaturesSpreadsheet';
import ExampleTasks from '@/components/spreadsheet/ExampleTasksSpreadsheet';
import GettingStarted from '@/components/spreadsheet/GettingStartedSpreadsheet';
import VideoExamplesSpreadsheet from '@/components/spreadsheet/VideoExamplesSpreadsheet';
import HowNotToUse from '@/components/spreadsheet/HowNotToUseSpreadsheet';
import Footer from '@/components/Footer';

export default function SpreadsheetAgentPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <ExampleTasks />
      <GettingStarted />
      <VideoExamplesSpreadsheet />
      <HowNotToUse />
      <Footer />
    </main>
  );
}

