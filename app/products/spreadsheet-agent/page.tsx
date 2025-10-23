import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ExampleTasks from '@/components/ExampleTasks';
import GettingStarted from '@/components/GettingStarted';
import VideoExamplesSpreadsheet from '@/components/VideoExamplesSpreadsheet';
import HowNotToUse from '@/components/HowNotToUse';
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

