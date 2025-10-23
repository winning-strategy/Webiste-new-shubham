import Header from '@/components/Header';
import HeroSlides from '@/components/slides/HeroSlides';
import FeaturesSlides from '@/components/slides/FeaturesSlides';
import ExampleTasksSlides from '@/components/slides/ExampleTasksSlides';
import GettingStartedSlides from '@/components/slides/GettingStartedSlides';
import VideoExamples from '@/components/slides/VideoExamples';
import WhenToUseSlides from '@/components/slides/WhenToUseSlides';
import Footer from '@/components/Footer';

export default function SlideGenerationAgentPage() {
  return (
    <main>
      <Header />
      <HeroSlides />
      <FeaturesSlides />
      <ExampleTasksSlides />
      <GettingStartedSlides />
      <VideoExamples />
      <WhenToUseSlides />
      <Footer />
    </main>
  );
}

